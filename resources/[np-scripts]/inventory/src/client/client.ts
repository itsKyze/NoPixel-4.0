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
          var strBuffer = "";
          var numericVal = 0;
          var numericVal_1 = 0;
          while (numericVal < inputLength) {
            numericVal_1 = numericVal_1 * 256 + inputBytes[numericVal++];
            if (numericVal % 4 === 0) {
              var numericVal_2 = 52200625;
              while (numericVal_2 >= 1) {
                var varData_4 = Math.floor(numericVal_1 / numericVal_2) % 85;
                strBuffer += z85Alphabet[varData_4];
                numericVal_2 /= 85;
              }
              numericVal_1 = 0;
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
          var numericVal = 0;
          var numericVal_1 = 0;
          var numericVal_2 = 0;
          while (numericVal < varData_5) {
            var varData_6 = encodedString.charCodeAt(numericVal++) - 32;
            if (varData_6 < 0 || varData_6 >= z85DecoderTable.length) {
              break;
            }
            numericVal_2 = numericVal_2 * 85 + z85DecoderTable[varData_6];
            if (numericVal % 5 === 0) {
              var numericVal_3 = 16777216;
              while (numericVal_3 >= 1) {
                encodedString_1[numericVal_1++] = Math.trunc(numericVal_2 / numericVal_3 % 256);
                numericVal_3 /= 256;
              }
              numericVal_2 = 0;
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
          var numericVal = 0;
          var varData_9;
          var varData_10;
          var numericVal_1 = 0;
          var varData_11;
          var numericVal_2 = 0;
          var varData_12 = param_1_1.length;
          while (true) {
            if (numericVal_1 === 0) {
              varData_10 = param_1_1.charCodeAt(numericVal++);
            }
            varData_9 = varData_10 >> varData_7.ibits - (numericVal_1 + 8) & 255;
            numericVal_1 = (numericVal_1 + 8) % varData_7.ibits;
            if (varData_7.obigendian) {
              if (numericVal_2 === 0) {
                varData_11 = varData_9 << varData_7.obits - 8;
              } else {
                varData_11 |= varData_9 << varData_7.obits - 8 - numericVal_2;
              }
            } else if (numericVal_2 === 0) {
              varData_11 = varData_9;
            } else {
              varData_11 |= varData_9 << numericVal_2;
            }
            numericVal_2 = (numericVal_2 + 8) % varData_7.obits;
            if (numericVal_2 === 0) {
              itemList.push(varData_11);
              if (numericVal >= varData_12) {
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
          var numericVal = 4294967295;
          if (varData_13.ibits < 32) {
            numericVal = (1 << varData_13.ibits) - 1;
          }
          var varData_15 = param_1_1.length;
          for (var numericVal_1 = 0; numericVal_1 < varData_15; numericVal_1++) {
            var varData_16 = param_1_1[numericVal_1] & numericVal;
            for (var numericVal_2 = 0; numericVal_2 < varData_13.ibits; numericVal_2 += 8) {
              if (varData_13.ibigendian) {
                strBuffer += String.fromCharCode(varData_16 >> varData_13.ibits - 8 - numericVal_2 & 255);
              } else {
                strBuffer += String.fromCharCode(varData_16 >> numericVal_2 & 255);
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
          for (var numericVal_3 = 0; numericVal_3 < numericVal; numericVal_3++) {
            varData_17[numericVal_3] = Math.floor(param_1_1 % numericVal_2);
            param_1_1 /= numericVal_2;
          }
          return varData_17;
        }
        function handleAction_10(param_1_1) {
          var numericVal_3 = 0;
          for (var loopIdx = numericVal - 1; loopIdx >= 0; loopIdx--) {
            numericVal_3 *= numericVal_2;
            numericVal_3 += param_1_1[loopIdx];
          }
          return Math.floor(numericVal_3);
        }
        function handleAction_11(param_1_1, param_2_1) {
          var numericVal_3 = 0;
          for (var numericVal_4 = 0; numericVal_4 < numericVal; numericVal_4++) {
            numericVal_3 += param_1_1[numericVal_4] + param_2_1[numericVal_4];
            param_1_1[numericVal_4] = Math.floor(numericVal_3 % numericVal_2);
            numericVal_3 = Math.floor(numericVal_3 / numericVal_2);
          }
          return numericVal_3;
        }
        function handleAction_12(param_1_1, param_2_1) {
          var numericVal_3 = 0;
          for (var numericVal_4 = 0; numericVal_4 < numericVal; numericVal_4++) {
            numericVal_3 += param_1_1[numericVal_4] * param_2_1;
            param_1_1[numericVal_4] = Math.floor(numericVal_3 % numericVal_2);
            numericVal_3 = Math.floor(numericVal_3 / numericVal_2);
          }
          return numericVal_3;
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
          for (var numericVal_3 = 0; numericVal_3 < numericVal; numericVal_3++) {
            param_1_1[numericVal_3] &= param_2_1[numericVal_3];
          }
          return param_1_1;
        }
        function handleAction_15(param_1_1, param_2_1) {
          for (var numericVal_3 = 0; numericVal_3 < numericVal; numericVal_3++) {
            param_1_1[numericVal_3] |= param_2_1[numericVal_3];
          }
          return param_1_1;
        }
        function handleAction_16(param_1_1, param_2_1) {
          var varData_22 = handleAction_7();
          if (param_2_1 % numericVal_1 !== 0) {
            throw new Error("ui64_rorn: only bit rotations supported with a multiple of digit bits");
          }
          var roundedVal = Math.floor(param_2_1 / numericVal_1);
          for (var numericVal_3 = 0; numericVal_3 < roundedVal; numericVal_3++) {
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
          for (var numericVal_3 = 0; numericVal_3 < numericVal; numericVal_3++) {
            param_1_1[numericVal_3] ^= param_2_1[numericVal_3];
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
          var numericVal_3 = 1732584193;
          var varData_32 = -271733879;
          var varData_33 = -1732584194;
          var numericVal_4 = 271733878;
          var varData_34 = -1009589776;
          for (var numericVal_5 = 0; numericVal_5 < param_1_1.length; numericVal_5 += 16) {
            var varData_35 = numericVal_3;
            var varData_36 = varData_32;
            var varData_37 = varData_33;
            var varData_38 = numericVal_4;
            var varData_39 = varData_34;
            for (var numericVal_6 = 0; numericVal_6 < 80; numericVal_6++) {
              if (numericVal_6 < 16) {
                varData_31[numericVal_6] = param_1_1[numericVal_5 + numericVal_6];
              } else {
                varData_31[numericVal_6] = handleAction_21(varData_31[numericVal_6 - 3] ^ varData_31[numericVal_6 - 8] ^ varData_31[numericVal_6 - 14] ^ varData_31[numericVal_6 - 16], 1);
              }
              var varData_40 = handleAction_20(handleAction_20(handleAction_21(numericVal_3, 5), handleAction_23(numericVal_6, varData_32, varData_33, numericVal_4)), handleAction_20(handleAction_20(varData_34, varData_31[numericVal_6]), handleAction_24(numericVal_6)));
              varData_34 = numericVal_4;
              numericVal_4 = varData_33;
              varData_33 = handleAction_21(varData_32, 30);
              varData_32 = numericVal_3;
              numericVal_3 = varData_40;
            }
            numericVal_3 = handleAction_20(numericVal_3, varData_35);
            varData_32 = handleAction_20(varData_32, varData_36);
            varData_33 = handleAction_20(varData_33, varData_37);
            numericVal_4 = handleAction_20(numericVal_4, varData_38);
            varData_34 = handleAction_20(varData_34, varData_39);
          }
          return [numericVal_3, varData_32, varData_33, numericVal_4, varData_34];
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
          var numericVal_3 = 1732584193;
          var varData_41 = -271733879;
          var varData_42 = -1732584194;
          var numericVal_4 = 271733878;
          for (var numericVal_5 = 0; numericVal_5 < param_1_1.length; numericVal_5 += 16) {
            var varData_43 = numericVal_3;
            var varData_44 = varData_41;
            var varData_45 = varData_42;
            var varData_46 = numericVal_4;
            numericVal_3 = handleAction_28(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 0], 7, -680876936);
            numericVal_4 = handleAction_28(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 1], 12, -389564586);
            varData_42 = handleAction_28(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 2], 17, 606105819);
            varData_41 = handleAction_28(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 3], 22, -1044525330);
            numericVal_3 = handleAction_28(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 4], 7, -176418897);
            numericVal_4 = handleAction_28(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 5], 12, 1200080426);
            varData_42 = handleAction_28(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 6], 17, -1473231341);
            varData_41 = handleAction_28(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 7], 22, -45705983);
            numericVal_3 = handleAction_28(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 8], 7, 1770035416);
            numericVal_4 = handleAction_28(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 9], 12, -1958414417);
            varData_42 = handleAction_28(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 10], 17, -42063);
            varData_41 = handleAction_28(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 11], 22, -1990404162);
            numericVal_3 = handleAction_28(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 12], 7, 1804603682);
            numericVal_4 = handleAction_28(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 13], 12, -40341101);
            varData_42 = handleAction_28(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 14], 17, -1502002290);
            varData_41 = handleAction_28(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 15], 22, 1236535329);
            numericVal_3 = handleAction_29(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 1], 5, -165796510);
            numericVal_4 = handleAction_29(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 6], 9, -1069501632);
            varData_42 = handleAction_29(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 11], 14, 643717713);
            varData_41 = handleAction_29(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 0], 20, -373897302);
            numericVal_3 = handleAction_29(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 5], 5, -701558691);
            numericVal_4 = handleAction_29(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 10], 9, 38016083);
            varData_42 = handleAction_29(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 15], 14, -660478335);
            varData_41 = handleAction_29(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 4], 20, -405537848);
            numericVal_3 = handleAction_29(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 9], 5, 568446438);
            numericVal_4 = handleAction_29(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 14], 9, -1019803690);
            varData_42 = handleAction_29(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 3], 14, -187363961);
            varData_41 = handleAction_29(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 8], 20, 1163531501);
            numericVal_3 = handleAction_29(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 13], 5, -1444681467);
            numericVal_4 = handleAction_29(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 2], 9, -51403784);
            varData_42 = handleAction_29(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 7], 14, 1735328473);
            varData_41 = handleAction_29(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 12], 20, -1926607734);
            numericVal_3 = handleAction_30(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 5], 4, -378558);
            numericVal_4 = handleAction_30(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 8], 11, -2022574463);
            varData_42 = handleAction_30(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 11], 16, 1839030562);
            varData_41 = handleAction_30(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 14], 23, -35309556);
            numericVal_3 = handleAction_30(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 1], 4, -1530992060);
            numericVal_4 = handleAction_30(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 4], 11, 1272893353);
            varData_42 = handleAction_30(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 7], 16, -155497632);
            varData_41 = handleAction_30(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 10], 23, -1094730640);
            numericVal_3 = handleAction_30(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 13], 4, 681279174);
            numericVal_4 = handleAction_30(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 0], 11, -358537222);
            varData_42 = handleAction_30(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 3], 16, -722521979);
            varData_41 = handleAction_30(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 6], 23, 76029189);
            numericVal_3 = handleAction_30(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 9], 4, -640364487);
            numericVal_4 = handleAction_30(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 12], 11, -421815835);
            varData_42 = handleAction_30(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 15], 16, 530742520);
            varData_41 = handleAction_30(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 2], 23, -995338651);
            numericVal_3 = handleAction_31(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 0], 6, -198630844);
            numericVal_4 = handleAction_31(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 7], 10, 1126891415);
            varData_42 = handleAction_31(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 14], 15, -1416354905);
            varData_41 = handleAction_31(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 5], 21, -57434055);
            numericVal_3 = handleAction_31(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 12], 6, 1700485571);
            numericVal_4 = handleAction_31(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 3], 10, -1894986606);
            varData_42 = handleAction_31(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 10], 15, -1051523);
            varData_41 = handleAction_31(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 1], 21, -2054922799);
            numericVal_3 = handleAction_31(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 8], 6, 1873313359);
            numericVal_4 = handleAction_31(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 15], 10, -30611744);
            varData_42 = handleAction_31(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 6], 15, -1560198380);
            varData_41 = handleAction_31(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 13], 21, 1309151649);
            numericVal_3 = handleAction_31(numericVal_3, varData_41, varData_42, numericVal_4, param_1_1[numericVal_5 + 4], 6, -145523070);
            numericVal_4 = handleAction_31(numericVal_4, numericVal_3, varData_41, varData_42, param_1_1[numericVal_5 + 11], 10, -1120210379);
            varData_42 = handleAction_31(varData_42, numericVal_4, numericVal_3, varData_41, param_1_1[numericVal_5 + 2], 15, 718787259);
            varData_41 = handleAction_31(varData_41, varData_42, numericVal_4, numericVal_3, param_1_1[numericVal_5 + 9], 21, -343485551);
            numericVal_3 = handleAction_20(numericVal_3, varData_43);
            varData_41 = handleAction_20(varData_41, varData_44);
            varData_42 = handleAction_20(varData_42, varData_45);
            numericVal_4 = handleAction_20(numericVal_4, varData_46);
          }
          return [numericVal_3, varData_41, varData_42, numericVal_4];
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
          if (param_1_1 !== undefined) {
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
            handleAction_15(param_1_1, handleAction_17(handleAction_9(new Date().getTime()), 32));
          }
          handleAction_15(this.state, param_1_1);
          this.next();
        }
        handleAction_33.prototype.next = function () {
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
        handleAction_33.prototype.reseed = function (param_1_1) {
          if (typeof param_1_1 !== "string") {
            throw new Error("UUID: PCG: seed: invalid argument (string expected)");
          }
          var varData_53 = handleAction_22(handleAction_4(param_1_1, {
            ibits: 8,
            obits: 32,
            obigendian: true
          }), param_1_1.length * 8);
          for (var numericVal_3 = 0; numericVal_3 < varData_53.length; numericVal_3++) {
            handleAction_19(varData_54.state, handleAction_9(varData_53[numericVal_3] >>> 0));
          }
        };
        var varData_54 = new handleAction_33();
        handleAction_33.reseed = function (param_1_1) {
          varData_54.reseed(param_1_1);
        };
        function handleAction_34(param_1_1, param_2_1) {
          var itemList = [];
          for (var numericVal_3 = 0; numericVal_3 < param_1_1; numericVal_3++) {
            itemList[numericVal_3] = varData_54.next() % param_2_1;
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
        createUUID.prototype.make = function (param_1_1) {
          var varData_55;
          var varData_56 = this;
          if (param_1_1 === 1) {
            var currentDate = new Date();
            var varData_57 = currentDate.getTime();
            if (varData_57 !== numericVal_3) {
              numericVal_4 = 0;
            } else {
              numericVal_4++;
            }
            numericVal_3 = varData_57;
            var varData_58 = handleAction_9(varData_57);
            handleAction_12(varData_58, 10000);
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
        createUUID.prototype.format = function (param_1_1) {
          var varData_65;
          var varData_66;
          if (param_1_1 === "z85") {
            varData_65 = z85Encode(this, 16);
          } else if (param_1_1 === "b16") {
            varData_66 = Array(32);
            handleAction_1(this, 0, 15, true, varData_66, 0);
            varData_65 = varData_66.join("");
          } else if (param_1_1 === undefined || param_1_1 === "std") {
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
            var varData_67 = {
              nil: "00000000-0000-0000-0000-000000000000",
              "ns:DNS": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
              "ns:URL": "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
              "ns:OID": "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
              "ns:X500": "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
            };
            if (varData_67[param_1_1] !== undefined) {
              param_1_1 = varData_67[param_1_1];
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
          var varData_68 = Array(16);
          for (var numericVal_5 = 0; numericVal_5 < 16; numericVal_5++) {
            varData_68[numericVal_5] = this[numericVal_5];
          }
          return varData_68;
        };
        createUUID.prototype.import = function (param_1_1) {
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
        createUUID.prototype.compare = function (param_1_1) {
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
    if (varData_72 !== undefined) {
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
    'use strict';

    var varData_76 = {
      TF: () => handleAction_366,
      hu: () => isDisabled_18,
      S9: () => isDisabled_17,
      Gh: () => handleAction_365
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
    for (let numericVal = 0; numericVal < 256; ++numericVal) {
      itemList.push((numericVal + 256).toString(16).slice(1));
    }
    function handleAction_37(param_1, _0x33456a = 0) {
      return itemList[param_1[_0x33456a + 0]] + itemList[param_1[_0x33456a + 1]] + itemList[param_1[_0x33456a + 2]] + itemList[param_1[_0x33456a + 3]] + "-" + itemList[param_1[_0x33456a + 4]] + itemList[param_1[_0x33456a + 5]] + "-" + itemList[param_1[_0x33456a + 6]] + itemList[param_1[_0x33456a + 7]] + "-" + itemList[param_1[_0x33456a + 8]] + itemList[param_1[_0x33456a + 9]] + "-" + itemList[param_1[_0x33456a + 10]] + itemList[param_1[_0x33456a + 11]] + itemList[param_1[_0x33456a + 12]] + itemList[param_1[_0x33456a + 13]] + itemList[param_1[_0x33456a + 14]] + itemList[param_1[_0x33456a + 15]];
    }
    function createUUID(param_1, _0x4a2ba7 = 0) {
      const varData_82 = handleAction_37(param_1, _0x4a2ba7);
      if (!validate(varData_82)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return varData_82;
    }
    const varData_83 = null && createUUID;
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
        for (let numericVal = 0; numericVal < 16; ++numericVal) {
          param_2[param_3 + numericVal] = varData_84[numericVal];
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
      const itemList_1 = [];
      for (let numericVal = 0; numericVal < param_1.length; ++numericVal) {
        itemList_1.push(param_1.charCodeAt(numericVal));
      }
      return itemList_1;
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
          for (let numericVal = 0; numericVal < 16; ++numericVal) {
            param_3_1[param_4 + numericVal] = varData_93[numericVal];
          }
          return param_3_1;
        }
        return handleAction_37(varData_93);
      }
      try {
        handleAction_41.name = param_1;
      } catch (err) {}
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
      const itemList_1 = [1518500249, 1859775393, 2400959708, 3395469782];
      const itemList_2 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof param_1 === "string") {
        const varData_94 = unescape(encodeURIComponent(param_1));
        param_1 = [];
        for (let numericVal = 0; numericVal < varData_94.length; ++numericVal) {
          param_1.push(varData_94.charCodeAt(numericVal));
        }
      } else if (!Array.isArray(param_1)) {
        param_1 = Array.prototype.slice.call(param_1);
      }
      param_1.push(128);
      const varData_95 = param_1.length / 4 + 2;
      const varData_96 = Math.ceil(varData_95 / 16);
      const varData_97 = new Array(varData_96);
      for (let numericVal = 0; numericVal < varData_96; ++numericVal) {
        const varData_98 = new Uint32Array(16);
        for (let numericVal_1 = 0; numericVal_1 < 16; ++numericVal_1) {
          varData_98[numericVal_1] = param_1[numericVal * 64 + numericVal_1 * 4] << 24 | param_1[numericVal * 64 + numericVal_1 * 4 + 1] << 16 | param_1[numericVal * 64 + numericVal_1 * 4 + 2] << 8 | param_1[numericVal * 64 + numericVal_1 * 4 + 3];
        }
        varData_97[numericVal] = varData_98;
      }
      varData_97[varData_96 - 1][14] = (param_1.length - 1) * 8 / Math.pow(2, 32);
      varData_97[varData_96 - 1][14] = Math.floor(varData_97[varData_96 - 1][14]);
      varData_97[varData_96 - 1][15] = (param_1.length - 1) * 8 & -1;
      for (let numericVal = 0; numericVal < varData_96; ++numericVal) {
        const varData_99 = new Uint32Array(80);
        for (let numericVal_1 = 0; numericVal_1 < 16; ++numericVal_1) {
          varData_99[numericVal_1] = varData_97[numericVal][numericVal_1];
        }
        for (let numericVal_1 = 16; numericVal_1 < 80; ++numericVal_1) {
          varData_99[numericVal_1] = handleAction_43(varData_99[numericVal_1 - 3] ^ varData_99[numericVal_1 - 8] ^ varData_99[numericVal_1 - 14] ^ varData_99[numericVal_1 - 16], 1);
        }
        let varData_100 = itemList_2[0];
        let varData_101 = itemList_2[1];
        let varData_102 = itemList_2[2];
        let varData_103 = itemList_2[3];
        let varData_104 = itemList_2[4];
        for (let numericVal_1 = 0; numericVal_1 < 80; ++numericVal_1) {
          const roundedVal = Math.floor(numericVal_1 / 20);
          const varData_105 = handleAction_43(varData_100, 5) + handleAction_42(roundedVal, varData_101, varData_102, varData_103) + varData_104 + itemList_1[roundedVal] + varData_99[numericVal_1] >>> 0;
          varData_104 = varData_103;
          varData_103 = varData_102;
          varData_102 = handleAction_43(varData_101, 30) >>> 0;
          varData_101 = varData_100;
          varData_100 = varData_105;
        }
        itemList_2[0] = itemList_2[0] + varData_100 >>> 0;
        itemList_2[1] = itemList_2[1] + varData_101 >>> 0;
        itemList_2[2] = itemList_2[2] + varData_102 >>> 0;
        itemList_2[3] = itemList_2[3] + varData_103 >>> 0;
        itemList_2[4] = itemList_2[4] + varData_104 >>> 0;
      }
      return [itemList_2[0] >> 24 & 255, itemList_2[0] >> 16 & 255, itemList_2[0] >> 8 & 255, itemList_2[0] & 255, itemList_2[1] >> 24 & 255, itemList_2[1] >> 16 & 255, itemList_2[1] >> 8 & 255, itemList_2[1] & 255, itemList_2[2] >> 24 & 255, itemList_2[2] >> 16 & 255, itemList_2[2] >> 8 & 255, itemList_2[2] & 255, itemList_2[3] >> 24 & 255, itemList_2[3] >> 16 & 255, itemList_2[3] >> 8 & 255, itemList_2[3] & 255, itemList_2[4] >> 24 & 255, itemList_2[4] >> 16 & 255, itemList_2[4] >> 8 & 255, itemList_2[4] & 255];
    }
    const varData_106 = handleAction_44;
    ;
    const varData_107 = handleAction_40("v5", 80, varData_106);
    const varData_108 = varData_107;
    ; /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
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
    const varData_125 = param_1 => {
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
      let numericVal_21 = 0;
      do {
        numericVal_21 |= param_1 & 1;
        param_1 >>>= 1;
        numericVal_21 <<= 1;
      } while (--param_2 > 0);
      return numericVal_21 >>> 1;
    };
    const varData_130 = param_1 => {
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
      let numericVal_21 = 0;
      for (varData_142 = 0; varData_142 <= numericVal_13; varData_142++) {
        param_1.bl_count[varData_142] = 0;
      }
      varData_132[param_1.heap[param_1.heap_max] * 2 + 1] = 0;
      for (varData_139 = param_1.heap_max + 1; varData_139 < varData_111; varData_139++) {
        varData_140 = param_1.heap[varData_139];
        varData_142 = varData_132[varData_132[varData_140 * 2 + 1] * 2 + 1] + 1;
        if (varData_142 > varData_138) {
          varData_142 = varData_138;
          numericVal_21++;
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
      if (numericVal_21 === 0) {
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
        numericVal_21 -= 2;
      } while (numericVal_21 > 0);
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
      let numericVal_21 = 0;
      let varData_147;
      let varData_148;
      for (varData_147 = 1; varData_147 <= numericVal_13; varData_147++) {
        numericVal_21 = numericVal_21 + param_3[varData_147 - 1] << 1;
        varData_146[varData_147] = numericVal_21;
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
    const varData_157 = param_1 => {
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
    const varData_159 = param_1 => {
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
      let numericVal_21 = 0;
      let varData_169;
      let varData_170;
      if (param_1.sym_next !== 0) {
        do {
          varData_167 = param_1.pending_buf[param_1.sym_buf + numericVal_21++] & 255;
          varData_167 += (param_1.pending_buf[param_1.sym_buf + numericVal_21++] & 255) << 8;
          varData_168 = param_1.pending_buf[param_1.sym_buf + numericVal_21++];
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
        } while (numericVal_21 < param_1.sym_next);
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
      let numericVal_21 = 0;
      let numericVal_22 = 7;
      let numericVal_23 = 4;
      if (varData_184 === 0) {
        numericVal_22 = 138;
        numericVal_23 = 3;
      }
      param_2[(param_3 + 1) * 2 + 1] = 65535;
      for (varData_181 = 0; varData_181 <= param_3; varData_181++) {
        varData_183 = varData_184;
        varData_184 = param_2[(varData_181 + 1) * 2 + 1];
        if (++numericVal_21 < numericVal_22 && varData_183 === varData_184) {
          continue;
        } else if (numericVal_21 < numericVal_23) {
          param_1.bl_tree[varData_183 * 2] += numericVal_21;
        } else if (varData_183 !== 0) {
          if (varData_183 !== varData_182) {
            param_1.bl_tree[varData_183 * 2]++;
          }
          param_1.bl_tree[numericVal_17 * 2]++;
        } else if (numericVal_21 <= 10) {
          param_1.bl_tree[numericVal_18 * 2]++;
        } else {
          param_1.bl_tree[numericVal_19 * 2]++;
        }
        numericVal_21 = 0;
        varData_182 = varData_183;
        if (varData_184 === 0) {
          numericVal_22 = 138;
          numericVal_23 = 3;
        } else if (varData_183 === varData_184) {
          numericVal_22 = 6;
          numericVal_23 = 3;
        } else {
          numericVal_22 = 7;
          numericVal_23 = 4;
        }
      }
    };
    const varData_185 = (param_1, param_2, param_3) => {
      let varData_186;
      let varData_187 = -1;
      let varData_188;
      let varData_189 = param_2[1];
      let numericVal_21 = 0;
      let numericVal_22 = 7;
      let numericVal_23 = 4;
      if (varData_189 === 0) {
        numericVal_22 = 138;
        numericVal_23 = 3;
      }
      for (varData_186 = 0; varData_186 <= param_3; varData_186++) {
        varData_188 = varData_189;
        varData_189 = param_2[(varData_186 + 1) * 2 + 1];
        if (++numericVal_21 < numericVal_22 && varData_188 === varData_189) {
          continue;
        } else if (numericVal_21 < numericVal_23) {
          do {
            varData_128(param_1, varData_188, param_1.bl_tree);
          } while (--numericVal_21 !== 0);
        } else if (varData_188 !== 0) {
          if (varData_188 !== varData_187) {
            varData_128(param_1, varData_188, param_1.bl_tree);
            numericVal_21--;
          }
          varData_128(param_1, numericVal_17, param_1.bl_tree);
          varData_127(param_1, numericVal_21 - 3, 2);
        } else if (numericVal_21 <= 10) {
          varData_128(param_1, numericVal_18, param_1.bl_tree);
          varData_127(param_1, numericVal_21 - 3, 3);
        } else {
          varData_128(param_1, numericVal_19, param_1.bl_tree);
          varData_127(param_1, numericVal_21 - 11, 7);
        }
        numericVal_21 = 0;
        varData_187 = varData_188;
        if (varData_189 === 0) {
          numericVal_22 = 138;
          numericVal_23 = 3;
        } else if (varData_188 === varData_189) {
          numericVal_22 = 6;
          numericVal_23 = 3;
        } else {
          numericVal_22 = 7;
          numericVal_23 = 4;
        }
      }
    };
    const varData_190 = param_1 => {
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
    const varData_194 = param_1 => {
      let numericVal_21 = 4093624447;
      let varData_195;
      for (varData_195 = 0; varData_195 <= 31; varData_195++, numericVal_21 >>>= 1) {
        if (numericVal_21 & 1 && param_1.dyn_ltree[varData_195 * 2] !== 0) {
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
    const varData_196 = param_1 => {
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
    const varData_198 = param_1 => {
      varData_127(param_1, numericVal_5 << 1, 3);
      varData_128(param_1, numericVal_16, varData_116);
      varData_130(param_1);
    };
    const varData_199 = (param_1, param_2, param_3, param_4) => {
      let varData_200;
      let varData_201;
      let numericVal_21 = 0;
      if (param_1.level > 0) {
        if (param_1.strm.data_type === numericVal_3) {
          param_1.strm.data_type = varData_194(param_1);
        }
        varData_171(param_1, param_1.l_desc);
        varData_171(param_1, param_1.d_desc);
        numericVal_21 = varData_190(param_1);
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
        varData_192(param_1, param_1.l_desc.max_code + 1, param_1.d_desc.max_code + 1, numericVal_21 + 1);
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
      let numericVal_21 = 0;
      while (param_3 !== 0) {
        numericVal_21 = param_3 > 2000 ? 2000 : param_3;
        param_3 -= numericVal_21;
        do {
          varData_211 = varData_211 + param_2[param_4++] | 0;
          varData_212 = varData_212 + varData_211 | 0;
        } while (--numericVal_21);
        varData_211 %= 65521;
        varData_212 %= 65521;
      }
      return varData_211 | varData_212 << 16 | 0;
    };
    var varData_213 = varData_210;
    const varData_214 = () => {
      let varData_215;
      let itemList_1 = [];
      for (var numericVal_21 = 0; numericVal_21 < 256; numericVal_21++) {
        varData_215 = numericVal_21;
        for (var numericVal_22 = 0; numericVal_22 < 8; numericVal_22++) {
          varData_215 = varData_215 & 1 ? varData_215 >>> 1 ^ -306674912 : varData_215 >>> 1;
        }
        itemList_1[numericVal_21] = varData_215;
      }
      return itemList_1;
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
      _tr_init: _0x2293c7,
      _tr_stored_block: _0x3305ec,
      _tr_flush_block: _0x5bf5a7,
      _tr_tally: _0x1db2ea,
      _tr_align: _0x3c4f08
    } = varData_209;
    const {
      Z_NO_FLUSH: _0x56ed9e,
      Z_PARTIAL_FLUSH: _0x2a843d,
      Z_FULL_FLUSH: _0x2e55ff,
      Z_FINISH: _0x5e69ee,
      Z_BLOCK: _0x52388a,
      Z_OK: _0x48cd5b,
      Z_STREAM_END: _0x46c588,
      Z_STREAM_ERROR: _0x449ca7,
      Z_DATA_ERROR: _0x90ba7a,
      Z_BUF_ERROR: _0x4d101b,
      Z_DEFAULT_COMPRESSION: _0x4e9596,
      Z_FILTERED: _0x35a7c0,
      Z_HUFFMAN_ONLY: _0x47cd25,
      Z_RLE: _0x3e3e6a,
      Z_FIXED: _0x3faba0,
      Z_DEFAULT_STRATEGY: _0x408cea,
      Z_UNKNOWN: _0x1be1e6,
      Z_DEFLATED: _0x3631d6
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
    const varData_228 = param_1 => {
      return param_1 * 2 - (param_1 > 4 ? 9 : 0);
    };
    const varData_229 = param_1 => {
      let varData_230 = param_1.length;
      while (--varData_230 >= 0) {
        param_1[varData_230] = 0;
      }
    };
    const varData_231 = param_1 => {
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
    const varData_238 = param_1 => {
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
      _0x5bf5a7(param_1, param_1.block_start >= 0 ? param_1.block_start : -1, param_1.strstart - param_1.block_start, param_2);
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
        do {} while (varData_254[++varData_248] === varData_254[++varData_249] && varData_254[++varData_248] === varData_254[++varData_249] && varData_254[++varData_248] === varData_254[++varData_249] && varData_254[++varData_248] === varData_254[++varData_249] && varData_254[++varData_248] === varData_254[++varData_249] && varData_254[++varData_248] === varData_254[++varData_249] && varData_254[++varData_248] === varData_254[++varData_249] && varData_254[++varData_248] === varData_254[++varData_249] && varData_248 < varData_257);
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
    const varData_260 = param_1 => {
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
      let numericVal_45 = 0;
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
        if (varData_267 < varData_266 && (varData_267 === 0 && param_2 !== _0x5e69ee || param_2 === _0x56ed9e || varData_267 !== varData_268 + param_1.strm.avail_in)) {
          break;
        }
        numericVal_45 = param_2 === _0x5e69ee && varData_267 === varData_268 + param_1.strm.avail_in ? 1 : 0;
        _0x3305ec(param_1, 0, 0, numericVal_45);
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
      } while (numericVal_45 === 0);
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
      if (numericVal_45) {
        return numericVal_43;
      }
      if (param_2 !== _0x56ed9e && param_2 !== _0x5e69ee && param_1.strm.avail_in === 0 && param_1.strstart === param_1.block_start) {
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
      if (varData_268 >= varData_266 || (varData_268 || param_2 === _0x5e69ee) && param_2 !== _0x56ed9e && param_1.strm.avail_in === 0 && varData_268 <= varData_269) {
        varData_267 = varData_268 > varData_269 ? varData_269 : varData_268;
        numericVal_45 = param_2 === _0x5e69ee && param_1.strm.avail_in === 0 && varData_267 === varData_268 ? 1 : 0;
        _0x3305ec(param_1, param_1.block_start, varData_267, numericVal_45);
        param_1.block_start += varData_267;
        varData_238(param_1.strm);
      }
      if (numericVal_45) {
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
          if (param_1.lookahead < varData_226 && param_2 === _0x56ed9e) {
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
          varData_273 = _0x1db2ea(param_1, param_1.strstart - param_1.match_start, param_1.match_length - numericVal_29);
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
          varData_273 = _0x1db2ea(param_1, 0, param_1.window[param_1.strstart]);
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
      if (param_2 === _0x5e69ee) {
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
          if (param_1.lookahead < varData_226 && param_2 === _0x56ed9e) {
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
          if (param_1.match_length <= 5 && (param_1.strategy === _0x35a7c0 || param_1.match_length === numericVal_29 && param_1.strstart - param_1.match_start > 4096)) {
            param_1.match_length = numericVal_29 - 1;
          }
        }
        if (param_1.prev_length >= numericVal_29 && param_1.match_length <= param_1.prev_length) {
          varData_277 = param_1.strstart + param_1.lookahead - numericVal_29;
          varData_276 = _0x1db2ea(param_1, param_1.strstart - 1 - param_1.prev_match, param_1.prev_length - numericVal_29);
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
          varData_276 = _0x1db2ea(param_1, 0, param_1.window[param_1.strstart - 1]);
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
        varData_276 = _0x1db2ea(param_1, 0, param_1.window[param_1.strstart - 1]);
        param_1.match_available = 0;
      }
      param_1.insert = param_1.strstart < numericVal_29 - 1 ? param_1.strstart : numericVal_29 - 1;
      if (param_2 === _0x5e69ee) {
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
          if (param_1.lookahead <= numericVal_30 && param_2 === _0x56ed9e) {
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
            do {} while (varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_281 < varData_282);
            param_1.match_length = numericVal_30 - (varData_282 - varData_281);
            if (param_1.match_length > param_1.lookahead) {
              param_1.match_length = param_1.lookahead;
            }
          }
        }
        if (param_1.match_length >= numericVal_29) {
          varData_279 = _0x1db2ea(param_1, 1, param_1.match_length - numericVal_29);
          param_1.lookahead -= param_1.match_length;
          param_1.strstart += param_1.match_length;
          param_1.match_length = 0;
        } else {
          varData_279 = _0x1db2ea(param_1, 0, param_1.window[param_1.strstart]);
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
      if (param_2 === _0x5e69ee) {
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
            if (param_2 === _0x56ed9e) {
              return numericVal_40;
            }
            break;
          }
        }
        param_1.match_length = 0;
        varData_285 = _0x1db2ea(param_1, 0, param_1.window[param_1.strstart]);
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
      if (param_2 === _0x5e69ee) {
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
    const varData_286 = param_1 => {
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
      this.method = _0x3631d6;
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
    const varData_287 = param_1 => {
      if (!param_1) {
        return 1;
      }
      const varData_288 = param_1.state;
      if (!varData_288 || varData_288.strm !== param_1 || varData_288.status !== numericVal_32 && varData_288.status !== numericVal_33 && varData_288.status !== numericVal_34 && varData_288.status !== numericVal_35 && varData_288.status !== numericVal_36 && varData_288.status !== numericVal_37 && varData_288.status !== numericVal_38 && varData_288.status !== numericVal_39) {
        return 1;
      }
      return 0;
    };
    const varData_289 = param_1 => {
      if (varData_287(param_1)) {
        return varData_227(param_1, _0x449ca7);
      }
      param_1.total_in = param_1.total_out = 0;
      param_1.data_type = _0x1be1e6;
      const varData_290 = param_1.state;
      varData_290.pending = 0;
      varData_290.pending_out = 0;
      if (varData_290.wrap < 0) {
        varData_290.wrap = -varData_290.wrap;
      }
      varData_290.status = varData_290.wrap === 2 ? numericVal_33 : varData_290.wrap ? numericVal_32 : numericVal_38;
      param_1.adler = varData_290.wrap === 2 ? 0 : 1;
      varData_290.last_flush = -2;
      _0x2293c7(varData_290);
      return _0x48cd5b;
    };
    const varData_291 = param_1 => {
      const varData_292 = varData_289(param_1);
      if (varData_292 === _0x48cd5b) {
        varData_286(param_1.state);
      }
      return varData_292;
    };
    const varData_293 = (param_1, param_2) => {
      if (varData_287(param_1) || param_1.state.wrap !== 2) {
        return _0x449ca7;
      }
      param_1.state.gzhead = param_2;
      return _0x48cd5b;
    };
    const varData_294 = (param_1, param_2, param_3, param_4, param_5, param_6) => {
      if (!param_1) {
        return _0x449ca7;
      }
      let numericVal_45 = 1;
      if (param_2 === _0x4e9596) {
        param_2 = 6;
      }
      if (param_4 < 0) {
        numericVal_45 = 0;
        param_4 = -param_4;
      } else if (param_4 > 15) {
        numericVal_45 = 2;
        param_4 -= 16;
      }
      if (param_5 < 1 || param_5 > numericVal_21 || param_3 !== _0x3631d6 || param_4 < 8 || param_4 > 15 || param_2 < 0 || param_2 > 9 || param_6 < 0 || param_6 > _0x3faba0 || param_4 === 8 && numericVal_45 !== 1) {
        return varData_227(param_1, _0x449ca7);
      }
      if (param_4 === 8) {
        param_4 = 9;
      }
      const varData_295 = new handleAction_49();
      param_1.state = varData_295;
      varData_295.strm = param_1;
      varData_295.status = numericVal_32;
      varData_295.wrap = numericVal_45;
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
      return varData_294(param_1, param_2, _0x3631d6, numericVal_22, numericVal_23, _0x408cea);
    };
    const varData_297 = (param_1, param_2) => {
      if (varData_287(param_1) || param_2 > _0x52388a || param_2 < 0) {
        if (param_1) {
          return varData_227(param_1, _0x449ca7);
        } else {
          return _0x449ca7;
        }
      }
      const varData_298 = param_1.state;
      if (!param_1.output || param_1.avail_in !== 0 && !param_1.input || varData_298.status === numericVal_39 && param_2 !== _0x5e69ee) {
        return varData_227(param_1, param_1.avail_out === 0 ? _0x4d101b : _0x449ca7);
      }
      const varData_299 = varData_298.last_flush;
      varData_298.last_flush = param_2;
      if (varData_298.pending !== 0) {
        varData_238(param_1);
        if (param_1.avail_out === 0) {
          varData_298.last_flush = -1;
          return _0x48cd5b;
        }
      } else if (param_1.avail_in === 0 && varData_228(param_2) <= varData_228(varData_299) && param_2 !== _0x5e69ee) {
        return varData_227(param_1, _0x4d101b);
      }
      if (varData_298.status === numericVal_39 && param_1.avail_in !== 0) {
        return varData_227(param_1, _0x4d101b);
      }
      if (varData_298.status === numericVal_32 && varData_298.wrap === 0) {
        varData_298.status = numericVal_38;
      }
      if (varData_298.status === numericVal_32) {
        let varData_300 = _0x3631d6 + (varData_298.w_bits - 8 << 4) << 8;
        let varData_301 = -1;
        if (varData_298.strategy >= _0x47cd25 || varData_298.level < 2) {
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
          return _0x48cd5b;
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
          varData_242(varData_298, varData_298.level === 9 ? 2 : varData_298.strategy >= _0x47cd25 || varData_298.level < 2 ? 4 : 0);
          varData_242(varData_298, numericVal_44);
          varData_298.status = numericVal_38;
          varData_238(param_1);
          if (varData_298.pending !== 0) {
            varData_298.last_flush = -1;
            return _0x48cd5b;
          }
        } else {
          varData_242(varData_298, (varData_298.gzhead.text ? 1 : 0) + (varData_298.gzhead.hcrc ? 2 : 0) + (!varData_298.gzhead.extra ? 0 : 4) + (!varData_298.gzhead.name ? 0 : 8) + (!varData_298.gzhead.comment ? 0 : 16));
          varData_242(varData_298, varData_298.gzhead.time & 255);
          varData_242(varData_298, varData_298.gzhead.time >> 8 & 255);
          varData_242(varData_298, varData_298.gzhead.time >> 16 & 255);
          varData_242(varData_298, varData_298.gzhead.time >> 24 & 255);
          varData_242(varData_298, varData_298.level === 9 ? 2 : varData_298.strategy >= _0x47cd25 || varData_298.level < 2 ? 4 : 0);
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
              return _0x48cd5b;
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
                return _0x48cd5b;
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
                return _0x48cd5b;
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
              return _0x48cd5b;
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
          return _0x48cd5b;
        }
      }
      if (param_1.avail_in !== 0 || varData_298.lookahead !== 0 || param_2 !== _0x56ed9e && varData_298.status !== numericVal_39) {
        let varData_310 = varData_298.level === 0 ? varData_265(varData_298, param_2) : varData_298.strategy === _0x47cd25 ? varData_284(varData_298, param_2) : varData_298.strategy === _0x3e3e6a ? varData_278(varData_298, param_2) : itemList_1[varData_298.level].func(varData_298, param_2);
        if (varData_310 === numericVal_42 || varData_310 === numericVal_43) {
          varData_298.status = numericVal_39;
        }
        if (varData_310 === numericVal_40 || varData_310 === numericVal_42) {
          if (param_1.avail_out === 0) {
            varData_298.last_flush = -1;
          }
          return _0x48cd5b;
        }
        if (varData_310 === numericVal_41) {
          if (param_2 === _0x2a843d) {
            _0x3c4f08(varData_298);
          } else if (param_2 !== _0x52388a) {
            _0x3305ec(varData_298, 0, 0, false);
            if (param_2 === _0x2e55ff) {
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
            return _0x48cd5b;
          }
        }
      }
      if (param_2 !== _0x5e69ee) {
        return _0x48cd5b;
      }
      if (varData_298.wrap <= 0) {
        return _0x46c588;
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
        return _0x48cd5b;
      } else {
        return _0x46c588;
      }
    };
    const varData_311 = param_1 => {
      if (varData_287(param_1)) {
        return _0x449ca7;
      }
      const varData_312 = param_1.state.status;
      param_1.state = null;
      if (varData_312 === numericVal_38) {
        return varData_227(param_1, _0x90ba7a);
      } else {
        return _0x48cd5b;
      }
    };
    const varData_313 = (param_1, param_2) => {
      let varData_314 = param_2.length;
      if (varData_287(param_1)) {
        return _0x449ca7;
      }
      const varData_315 = param_1.state;
      const varData_316 = varData_315.wrap;
      if (varData_316 === 2 || varData_316 === 1 && varData_315.status !== numericVal_32 || varData_315.lookahead) {
        return _0x449ca7;
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
      return _0x48cd5b;
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
    var varData_338 = param_1 => {
      let numericVal_45 = 0;
      for (let numericVal_46 = 0, loopIdx = param_1.length; numericVal_46 < loopIdx; numericVal_46++) {
        numericVal_45 += param_1[numericVal_46].length;
      }
      const varData_339 = new Uint8Array(numericVal_45);
      for (let numericVal_46 = 0, numericVal_47 = 0, loopIdx = param_1.length; numericVal_46 < loopIdx; numericVal_46++) {
        let varData_340 = param_1[numericVal_46];
        varData_339.set(varData_340, numericVal_47);
        numericVal_47 += varData_340.length;
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
    for (let numericVal_45 = 0; numericVal_45 < 256; numericVal_45++) {
      varData_343[numericVal_45] = numericVal_45 >= 252 ? 6 : numericVal_45 >= 248 ? 5 : numericVal_45 >= 240 ? 4 : numericVal_45 >= 224 ? 3 : numericVal_45 >= 192 ? 2 : 1;
    }
    varData_343[254] = varData_343[254] = 1;
    var varData_344 = param_1 => {
      if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(param_1);
      }
      let varData_345;
      let varData_346;
      let varData_347;
      let varData_348;
      let varData_349;
      let varData_350 = param_1.length;
      let numericVal_45 = 0;
      for (varData_348 = 0; varData_348 < varData_350; varData_348++) {
        varData_346 = param_1.charCodeAt(varData_348);
        if ((varData_346 & 64512) === 55296 && varData_348 + 1 < varData_350) {
          varData_347 = param_1.charCodeAt(varData_348 + 1);
          if ((varData_347 & 64512) === 56320) {
            varData_346 = 65536 + (varData_346 - 55296 << 10) + (varData_347 - 56320);
            varData_348++;
          }
        }
        numericVal_45 += varData_346 < 128 ? 1 : varData_346 < 2048 ? 2 : varData_346 < 65536 ? 3 : 4;
      }
      varData_345 = new Uint8Array(numericVal_45);
      varData_349 = 0;
      varData_348 = 0;
      for (; varData_349 < numericVal_45; varData_348++) {
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
      for (let numericVal_45 = 0; numericVal_45 < param_2; numericVal_45++) {
        strBuffer += String.fromCharCode(param_1[numericVal_45]);
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
      Z_NO_FLUSH: _0x343bc8,
      Z_SYNC_FLUSH: _0x3da7b6,
      Z_FULL_FLUSH: _0x358e40,
      Z_FINISH: _0x2459ef,
      Z_OK: _0x4e5c2c,
      Z_STREAM_END: _0x172968,
      Z_DEFAULT_COMPRESSION: _0x1336d1,
      Z_DEFAULT_STRATEGY: _0x38866f,
      Z_DEFLATED: _0x475254
    } = varData_223;
    function handleAction_52(param_1) {
      var varData_365 = {
        level: _0x1336d1,
        method: _0x475254,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: _0x38866f
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
      if (varData_367 !== _0x4e5c2c) {
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
        if (varData_367 !== _0x4e5c2c) {
          throw new Error(varData_221[varData_367]);
        }
        this._dict_set = true;
      }
    }
    handleAction_52.prototype.push = function (param_1, param_2) {
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
        varData_372 = param_2 === true ? _0x2459ef : _0x343bc8;
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
        if ((varData_372 === _0x3da7b6 || varData_372 === _0x358e40) && varData_369.avail_out <= 6) {
          this.onData(varData_369.output.subarray(0, varData_369.next_out));
          varData_369.avail_out = 0;
          continue;
        }
        varData_371 = varData_333.deflate(varData_369, varData_372);
        if (varData_371 === _0x172968) {
          if (varData_369.next_out > 0) {
            this.onData(varData_369.output.subarray(0, varData_369.next_out));
          }
          varData_371 = varData_333.deflateEnd(this.strm);
          this.onEnd(varData_371);
          this.ended = true;
          return varData_371 === _0x4e5c2c;
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
    handleAction_52.prototype.onData = function (param_1) {
      this.chunks.push(param_1);
    };
    handleAction_52.prototype.onEnd = function (param_1) {
      if (param_1 === _0x4e5c2c) {
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
    var varData_381 = function _0xd47cc5(param_1, param_2) {
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
      _0x20a427: do {
        if (varData_393 < 15) {
          varData_392 += varData_404[varData_382++] << varData_393;
          varData_393 += 8;
          varData_392 += varData_404[varData_382++] << varData_393;
          varData_393 += 8;
        }
        varData_398 = varData_394[varData_392 & varData_396];
        _0x409db5: while (true) {
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
            _0x5e6158: while (true) {
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
                  break _0x20a427;
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
                      break _0x20a427;
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
                continue _0x5e6158;
              } else {
                param_1.msg = "invalid distance code";
                varData_406.mode = numericVal_45;
                break _0x20a427;
              }
              break;
            }
          } else if ((varData_399 & 64) === 0) {
            varData_398 = varData_394[(varData_398 & 65535) + (varData_392 & (1 << varData_399) - 1)];
            continue _0x409db5;
          } else if (varData_399 & 32) {
            varData_406.mode = numericVal_46;
            break _0x20a427;
          } else {
            param_1.msg = "invalid literal/length code";
            varData_406.mode = numericVal_45;
            break _0x20a427;
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
      let numericVal_53 = 0;
      let numericVal_54 = 0;
      let numericVal_55 = 0;
      let numericVal_56 = 0;
      let numericVal_57 = 0;
      let numericVal_58 = 0;
      let numericVal_59 = 0;
      let numericVal_60 = 0;
      let numericVal_61 = 0;
      let numericVal_62 = 0;
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
      for (numericVal_53 = 0; numericVal_53 <= numericVal_47; numericVal_53++) {
        varData_420[numericVal_53] = 0;
      }
      for (numericVal_54 = 0; numericVal_54 < param_4; numericVal_54++) {
        varData_420[param_2[param_3 + numericVal_54]]++;
      }
      numericVal_57 = varData_412;
      for (numericVal_56 = numericVal_47; numericVal_56 >= 1; numericVal_56--) {
        if (varData_420[numericVal_56] !== 0) {
          break;
        }
      }
      if (numericVal_57 > numericVal_56) {
        numericVal_57 = numericVal_56;
      }
      if (numericVal_56 === 0) {
        param_5[param_6++] = 20971520;
        param_5[param_6++] = 20971520;
        param_8.bits = 1;
        return 0;
      }
      for (numericVal_55 = 1; numericVal_55 < numericVal_56; numericVal_55++) {
        if (varData_420[numericVal_55] !== 0) {
          break;
        }
      }
      if (numericVal_57 < numericVal_55) {
        numericVal_57 = numericVal_55;
      }
      numericVal_60 = 1;
      for (numericVal_53 = 1; numericVal_53 <= numericVal_47; numericVal_53++) {
        numericVal_60 <<= 1;
        numericVal_60 -= varData_420[numericVal_53];
        if (numericVal_60 < 0) {
          return -1;
        }
      }
      if (numericVal_60 > 0 && (param_1 === numericVal_50 || numericVal_56 !== 1)) {
        return -1;
      }
      varData_421[1] = 0;
      for (numericVal_53 = 1; numericVal_53 < numericVal_47; numericVal_53++) {
        varData_421[numericVal_53 + 1] = varData_421[numericVal_53] + varData_420[numericVal_53];
      }
      for (numericVal_54 = 0; numericVal_54 < param_4; numericVal_54++) {
        if (param_2[param_3 + numericVal_54] !== 0) {
          param_7[varData_421[param_2[param_3 + numericVal_54]]++] = numericVal_54;
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
      numericVal_62 = 0;
      numericVal_54 = 0;
      numericVal_53 = numericVal_55;
      varData_417 = param_6;
      numericVal_58 = numericVal_57;
      numericVal_59 = 0;
      varData_415 = -1;
      numericVal_61 = 1 << numericVal_57;
      varData_416 = numericVal_61 - 1;
      if (param_1 === numericVal_51 && numericVal_61 > numericVal_48 || param_1 === numericVal_52 && numericVal_61 > numericVal_49) {
        return 1;
      }
      while (true) {
        varData_423 = numericVal_53 - numericVal_59;
        if (param_7[numericVal_54] + 1 < varData_419) {
          varData_424 = 0;
          varData_425 = param_7[numericVal_54];
        } else if (param_7[numericVal_54] >= varData_419) {
          varData_424 = varData_422[param_7[numericVal_54] - varData_419];
          varData_425 = varData_418[param_7[numericVal_54] - varData_419];
        } else {
          varData_424 = 96;
          varData_425 = 0;
        }
        varData_413 = 1 << numericVal_53 - numericVal_59;
        varData_414 = 1 << numericVal_58;
        numericVal_55 = varData_414;
        do {
          varData_414 -= varData_413;
          param_5[varData_417 + (numericVal_62 >> numericVal_59) + varData_414] = varData_423 << 24 | varData_424 << 16 | varData_425 | 0;
        } while (varData_414 !== 0);
        varData_413 = 1 << numericVal_53 - 1;
        while (numericVal_62 & varData_413) {
          varData_413 >>= 1;
        }
        if (varData_413 !== 0) {
          numericVal_62 &= varData_413 - 1;
          numericVal_62 += varData_413;
        } else {
          numericVal_62 = 0;
        }
        numericVal_54++;
        if (--varData_420[numericVal_53] === 0) {
          if (numericVal_53 === numericVal_56) {
            break;
          }
          numericVal_53 = param_2[param_3 + param_7[numericVal_54]];
        }
        if (numericVal_53 > numericVal_57 && (numericVal_62 & varData_416) !== varData_415) {
          if (numericVal_59 === 0) {
            numericVal_59 = numericVal_57;
          }
          varData_417 += numericVal_55;
          numericVal_58 = numericVal_53 - numericVal_59;
          numericVal_60 = 1 << numericVal_58;
          while (numericVal_58 + numericVal_59 < numericVal_56) {
            numericVal_60 -= varData_420[numericVal_58 + numericVal_59];
            if (numericVal_60 <= 0) {
              break;
            }
            numericVal_58++;
            numericVal_60 <<= 1;
          }
          numericVal_61 += 1 << numericVal_58;
          if (param_1 === numericVal_51 && numericVal_61 > numericVal_48 || param_1 === numericVal_52 && numericVal_61 > numericVal_49) {
            return 1;
          }
          varData_415 = numericVal_62 & varData_416;
          param_5[varData_415] = numericVal_57 << 24 | numericVal_58 << 16 | varData_417 - param_6 | 0;
        }
      }
      if (numericVal_62 !== 0) {
        param_5[varData_417 + numericVal_62] = numericVal_53 - numericVal_59 << 24 | 4194304 | 0;
      }
      param_8.bits = numericVal_57;
      return 0;
    };
    var varData_426 = varData_411;
    const numericVal_53 = 0;
    const numericVal_54 = 1;
    const numericVal_55 = 2;
    const {
      Z_FINISH: _0x4e3ae5,
      Z_BLOCK: _0x181c70,
      Z_TREES: _0x329d34,
      Z_OK: _0x251b9d,
      Z_STREAM_END: _0x3aa3df,
      Z_NEED_DICT: _0x4578f2,
      Z_STREAM_ERROR: _0x2be6dd,
      Z_DATA_ERROR: _0x27f6ae,
      Z_MEM_ERROR: _0x2af569,
      Z_BUF_ERROR: _0x927083,
      Z_DEFLATED: _0x5df870
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
    const varData_428 = param_1 => {
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
    const varData_429 = param_1 => {
      if (!param_1) {
        return 1;
      }
      const varData_430 = param_1.state;
      if (!varData_430 || varData_430.strm !== param_1 || varData_430.mode < numericVal_56 || varData_430.mode > numericVal_87) {
        return 1;
      }
      return 0;
    };
    const varData_431 = param_1 => {
      if (varData_429(param_1)) {
        return _0x2be6dd;
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
      return _0x251b9d;
    };
    const varData_433 = param_1 => {
      if (varData_429(param_1)) {
        return _0x2be6dd;
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
        return _0x2be6dd;
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
        return _0x2be6dd;
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
        return _0x2be6dd;
      }
      const varData_439 = new handleAction_56();
      param_1.state = varData_439;
      varData_439.strm = param_1;
      varData_439.window = null;
      varData_439.mode = numericVal_56;
      const varData_440 = varData_435(param_1, param_2);
      if (varData_440 !== _0x251b9d) {
        param_1.state = null;
      }
      return varData_440;
    };
    const varData_441 = param_1 => {
      return varData_438(param_1, varData_427);
    };
    let isEnabled_1 = true;
    let varData_442;
    let varData_443;
    const varData_444 = param_1 => {
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
        return _0x2be6dd;
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
      varData_470 = _0x251b9d;
      _0x27b796: while (true) {
        switch (varData_449.mode) {
          case numericVal_56:
            if (varData_449.wrap === 0) {
              varData_449.mode = numericVal_68;
              break;
            }
            while (varData_457 < 16) {
              if (varData_454 === 0) {
                break _0x27b796;
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
            if ((varData_456 & 15) !== _0x5df870) {
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
                break _0x27b796;
              }
              varData_454--;
              varData_456 += varData_450[varData_452++] << varData_457;
              varData_457 += 8;
            }
            varData_449.flags = varData_456;
            if ((varData_449.flags & 255) !== _0x5df870) {
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
                break _0x27b796;
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
                break _0x27b796;
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
                  break _0x27b796;
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
                break _0x27b796;
              }
            }
            varData_449.length = 0;
            varData_449.mode = numericVal_62;
          case numericVal_62:
            if (varData_449.flags & 2048) {
              if (varData_454 === 0) {
                break _0x27b796;
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
                break _0x27b796;
              }
            } else if (varData_449.head) {
              varData_449.head.name = null;
            }
            varData_449.length = 0;
            varData_449.mode = numericVal_63;
          case numericVal_63:
            if (varData_449.flags & 4096) {
              if (varData_454 === 0) {
                break _0x27b796;
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
                break _0x27b796;
              }
            } else if (varData_449.head) {
              varData_449.head.comment = null;
            }
            varData_449.mode = numericVal_64;
          case numericVal_64:
            if (varData_449.flags & 512) {
              while (varData_457 < 16) {
                if (varData_454 === 0) {
                  break _0x27b796;
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
                break _0x27b796;
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
              return _0x4578f2;
            }
            param_1.adler = varData_449.check = 1;
            varData_449.mode = numericVal_67;
          case numericVal_67:
            if (param_2 === _0x181c70 || param_2 === _0x329d34) {
              break _0x27b796;
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
                break _0x27b796;
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
                if (param_2 === _0x329d34) {
                  varData_456 >>>= 2;
                  varData_457 -= 2;
                  break _0x27b796;
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
                break _0x27b796;
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
            if (param_2 === _0x329d34) {
              break _0x27b796;
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
                break _0x27b796;
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
                break _0x27b796;
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
                  break _0x27b796;
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
                  break _0x27b796;
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
                      break _0x27b796;
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
                      break _0x27b796;
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
                      break _0x27b796;
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
            if (param_2 === _0x329d34) {
              break _0x27b796;
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
                break _0x27b796;
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
                  break _0x27b796;
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
                  break _0x27b796;
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
                break _0x27b796;
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
                  break _0x27b796;
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
                  break _0x27b796;
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
              break _0x27b796;
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
              break _0x27b796;
            }
            varData_451[varData_453++] = varData_449.length;
            varData_455--;
            varData_449.mode = numericVal_76;
            break;
          case numericVal_82:
            if (varData_449.wrap) {
              while (varData_457 < 32) {
                if (varData_454 === 0) {
                  break _0x27b796;
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
                  break _0x27b796;
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
            varData_470 = _0x3aa3df;
            break _0x27b796;
          case numericVal_85:
            varData_470 = _0x27f6ae;
            break _0x27b796;
          case numericVal_86:
            return _0x2af569;
          case numericVal_87:
          default:
            return _0x2be6dd;
        }
      }
      param_1.next_out = varData_453;
      param_1.avail_out = varData_455;
      param_1.next_in = varData_452;
      param_1.avail_in = varData_454;
      varData_449.hold = varData_456;
      varData_449.bits = varData_457;
      if (varData_449.wsize || varData_459 !== param_1.avail_out && varData_449.mode < numericVal_85 && (varData_449.mode < numericVal_82 || param_2 !== _0x4e3ae5)) {
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
      if ((varData_458 === 0 && varData_459 === 0 || param_2 === _0x4e3ae5) && varData_470 === _0x251b9d) {
        varData_470 = _0x927083;
      }
      return varData_470;
    };
    const varData_478 = param_1 => {
      if (varData_429(param_1)) {
        return _0x2be6dd;
      }
      let varData_479 = param_1.state;
      varData_479.window &&= null;
      param_1.state = null;
      return _0x251b9d;
    };
    const varData_480 = (param_1, param_2) => {
      if (varData_429(param_1)) {
        return _0x2be6dd;
      }
      const varData_481 = param_1.state;
      if ((varData_481.wrap & 2) === 0) {
        return _0x2be6dd;
      }
      varData_481.head = param_2;
      param_2.done = false;
      return _0x251b9d;
    };
    const varData_482 = (param_1, param_2) => {
      const varData_483 = param_2.length;
      let varData_484;
      let varData_485;
      let varData_486;
      if (varData_429(param_1)) {
        return _0x2be6dd;
      }
      varData_484 = param_1.state;
      if (varData_484.wrap !== 0 && varData_484.mode !== numericVal_66) {
        return _0x2be6dd;
      }
      if (varData_484.mode === numericVal_66) {
        varData_485 = 1;
        varData_485 = varData_213(varData_485, param_2, varData_483, 0);
        if (varData_485 !== varData_484.check) {
          return _0x27f6ae;
        }
      }
      varData_486 = varData_445(param_1, param_2, varData_483, varData_483);
      if (varData_486) {
        varData_484.mode = numericVal_86;
        return _0x2af569;
      }
      varData_484.havedict = 1;
      return _0x251b9d;
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
      Z_NO_FLUSH: _0x1b1eea,
      Z_FINISH: _0x233b9a,
      Z_OK: _0x31a99c,
      Z_STREAM_END: _0x5a48e2,
      Z_NEED_DICT: _0x560c2f,
      Z_STREAM_ERROR: _0xd08a36,
      Z_DATA_ERROR: _0x4fb06c,
      Z_MEM_ERROR: _0x3eb0a3
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
      if (varData_502 !== _0x31a99c) {
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
          if (varData_502 !== _0x31a99c) {
            throw new Error(varData_221[varData_502]);
          }
        }
      }
    }
    handleAction_58.prototype.push = function (param_1, param_2) {
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
        varData_507 = param_2 === true ? _0x233b9a : _0x1b1eea;
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
        if (varData_506 === _0x560c2f && varData_505) {
          varData_506 = varData_498.inflateSetDictionary(varData_503, varData_505);
          if (varData_506 === _0x31a99c) {
            varData_506 = varData_498.inflate(varData_503, varData_507);
          } else if (varData_506 === _0x4fb06c) {
            varData_506 = _0x560c2f;
          }
        }
        while (varData_503.avail_in > 0 && varData_506 === _0x5a48e2 && varData_503.state.wrap > 0 && param_1[varData_503.next_in] !== 0) {
          varData_498.inflateReset(varData_503);
          varData_506 = varData_498.inflate(varData_503, varData_507);
        }
        switch (varData_506) {
          case _0xd08a36:
          case _0x4fb06c:
          case _0x560c2f:
          case _0x3eb0a3:
            this.onEnd(varData_506);
            this.ended = true;
            return false;
        }
        varData_508 = varData_503.avail_out;
        if (varData_503.next_out) {
          if (varData_503.avail_out === 0 || varData_506 === _0x5a48e2) {
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
        if (varData_506 === _0x31a99c && varData_508 === 0) {
          continue;
        }
        if (varData_506 === _0x5a48e2) {
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
    handleAction_58.prototype.onData = function (param_1) {
      this.chunks.push(param_1);
    };
    handleAction_58.prototype.onEnd = function (param_1) {
      if (param_1 === _0x31a99c) {
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
      Deflate: _0x16a159,
      deflate: _0x4bea6d,
      deflateRaw: _0x5b86fb,
      gzip: _0xf64e2c
    } = varData_380;
    const {
      Inflate: _0x192c9c,
      inflate: _0x41424b,
      inflateRaw: _0x31d2f7,
      ungzip: _0x4ff23d
    } = varData_519;
    var varData_520 = _0x16a159;
    var varData_521 = _0x4bea6d;
    var varData_522 = _0x5b86fb;
    var varData_523 = _0xf64e2c;
    var varData_524 = _0x192c9c;
    var varData_525 = _0x41424b;
    var varData_526 = _0x31d2f7;
    var varData_527 = _0x4ff23d;
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
    var varData_538 = (param_1, param_2) => function _0x37a6fb() {
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
          var varData_551 = varData_551 || function (param_1_1, param_2_1) {
            var varData_552 = Object.create || function () {
              function handleAction_61() {}
              ;
              return function (param_1_2) {
                var varData_553;
                handleAction_61.prototype = param_1_2;
                varData_553 = new handleAction_61();
                handleAction_61.prototype = null;
                return varData_553;
              };
            }();
            var varData_554 = {};
            var varData_555 = varData_554.lib = {};
            var varData_556 = varData_555.Base = function () {
              return {
                extend: function (param_1_2) {
                  var varData_557 = varData_552(this);
                  if (param_1_2) {
                    varData_557.mixIn(param_1_2);
                  }
                  if (!varData_557.hasOwnProperty("init") || this.init === varData_557.init) {
                    varData_557.init = function () {
                      varData_557.$super.init.apply(this, arguments);
                    };
                  }
                  varData_557.init.prototype = varData_557;
                  varData_557.$super = this;
                  return varData_557;
                },
                create: function () {
                  var varData_558 = this.extend();
                  varData_558.init.apply(varData_558, arguments);
                  return varData_558;
                },
                init: function () {},
                mixIn: function (param_1_2) {
                  for (var varData_559 in param_1_2) {
                    if (param_1_2.hasOwnProperty(varData_559)) {
                      this[varData_559] = param_1_2[varData_559];
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
            var varData_560 = varData_555.WordArray = varData_556.extend({
              init: function (param_1_2, param_2_2) {
                param_1_2 = this.words = param_1_2 || [];
                if (param_2_2 != param_2_1) {
                  this.sigBytes = param_2_2;
                } else {
                  this.sigBytes = param_1_2.length * 4;
                }
              },
              toString: function (param_1_2) {
                return (param_1_2 || varData_572).stringify(this);
              },
              concat: function (param_1_2) {
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
              clamp: function () {
                var varData_566 = this.words;
                var varData_567 = this.sigBytes;
                varData_566[varData_567 >>> 2] &= -1 << 32 - varData_567 % 4 * 8;
                varData_566.length = param_1_1.ceil(varData_567 / 4);
              },
              clone: function () {
                var varData_568 = varData_556.clone.call(this);
                varData_568.words = this.words.slice(0);
                return varData_568;
              },
              random: function (param_1_2) {
                var itemList_2 = [];
                function handleAction_62(param_1_3) {
                  var param_1_3 = param_1_3;
                  var numericVal_91 = 987654321;
                  var numericVal_92 = 4294967295;
                  return function () {
                    numericVal_91 = (numericVal_91 & 65535) * 36969 + (numericVal_91 >> 16) & numericVal_92;
                    param_1_3 = (param_1_3 & 65535) * 18000 + (param_1_3 >> 16) & numericVal_92;
                    var varData_569 = (numericVal_91 << 16) + param_1_3 & numericVal_92;
                    varData_569 /= 4294967296;
                    varData_569 += 0.5;
                    return varData_569 * (param_1_1.random() > 0.5 ? 1 : -1);
                  };
                }
                for (var numericVal_91 = 0, loopIdx; numericVal_91 < param_1_2; numericVal_91 += 4) {
                  var varData_570 = handleAction_62((loopIdx || param_1_1.random()) * 4294967296);
                  loopIdx = varData_570() * 987654071;
                  itemList_2.push(varData_570() * 4294967296 | 0);
                }
                return new varData_560.init(itemList_2, param_1_2);
              }
            });
            var varData_571 = varData_554.enc = {};
            var varData_572 = varData_571.Hex = {
              stringify: function (param_1_2) {
                var varData_573 = param_1_2.words;
                var varData_574 = param_1_2.sigBytes;
                var itemList_2 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_574; numericVal_91++) {
                  var varData_575 = varData_573[numericVal_91 >>> 2] >>> 24 - numericVal_91 % 4 * 8 & 255;
                  itemList_2.push((varData_575 >>> 4).toString(16));
                  itemList_2.push((varData_575 & 15).toString(16));
                }
                return itemList_2.join("");
              },
              parse: function (param_1_2) {
                var varData_576 = param_1_2.length;
                var itemList_2 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_576; numericVal_91 += 2) {
                  itemList_2[numericVal_91 >>> 3] |= parseInt(param_1_2.substr(numericVal_91, 2), 16) << 24 - numericVal_91 % 8 * 4;
                }
                return new varData_560.init(itemList_2, varData_576 / 2);
              }
            };
            var varData_577 = varData_571.Latin1 = {
              stringify: function (param_1_2) {
                var varData_578 = param_1_2.words;
                var varData_579 = param_1_2.sigBytes;
                var itemList_2 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_579; numericVal_91++) {
                  var varData_580 = varData_578[numericVal_91 >>> 2] >>> 24 - numericVal_91 % 4 * 8 & 255;
                  itemList_2.push(String.fromCharCode(varData_580));
                }
                return itemList_2.join("");
              },
              parse: function (param_1_2) {
                var varData_581 = param_1_2.length;
                var itemList_2 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_581; numericVal_91++) {
                  itemList_2[numericVal_91 >>> 2] |= (param_1_2.charCodeAt(numericVal_91) & 255) << 24 - numericVal_91 % 4 * 8;
                }
                return new varData_560.init(itemList_2, varData_581);
              }
            };
            var varData_582 = varData_571.Utf8 = {
              stringify: function (param_1_2) {
                try {
                  return decodeURIComponent(escape(varData_577.stringify(param_1_2)));
                } catch (err) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              parse: function (param_1_2) {
                return varData_577.parse(unescape(encodeURIComponent(param_1_2)));
              }
            };
            var varData_583 = varData_555.BufferedBlockAlgorithm = varData_556.extend({
              reset: function () {
                this._data = new varData_560.init();
                this._nDataBytes = 0;
              },
              _append: function (param_1_2) {
                if (typeof param_1_2 == "string") {
                  param_1_2 = varData_582.parse(param_1_2);
                }
                this._data.concat(param_1_2);
                this._nDataBytes += param_1_2.sigBytes;
              },
              _process: function (param_1_2) {
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
              clone: function () {
                var varData_593 = varData_556.clone.call(this);
                varData_593._data = this._data.clone();
                return varData_593;
              },
              _minBufferSize: 0
            });
            var varData_594 = varData_555.Hasher = varData_583.extend({
              cfg: varData_556.extend(),
              init: function (param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
                this.reset();
              },
              reset: function () {
                varData_583.reset.call(this);
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
                var varData_595 = this._doFinalize();
                return varData_595;
              },
              blockSize: 16,
              _createHelper: function (param_1_2) {
                return function (param_1_3, param_2_2) {
                  return new param_1_2.init(param_2_2).finalize(param_1_3);
                };
              },
              _createHmacHelper: function (param_1_2) {
                return function (param_1_3, param_2_2) {
                  return new varData_596.HMAC.init(param_1_2, param_2_2).finalize(param_1_3);
                };
              }
            });
            var varData_596 = varData_554.algo = {};
            return varData_554;
          }(Math);
          return varData_551;
        });
      }
    });
    var varData_597 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/x64-core.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_598 = param_1_1;
            var varData_599 = varData_598.lib;
            var varData_600 = varData_599.Base;
            var varData_601 = varData_599.WordArray;
            var varData_602 = varData_598.x64 = {};
            var varData_603 = varData_602.Word = varData_600.extend({
              init: function (param_1_3, param_2_1) {
                this.high = param_1_3;
                this.low = param_2_1;
              }
            });
            var varData_604 = varData_602.WordArray = varData_600.extend({
              init: function (param_1_3, param_2_1) {
                param_1_3 = this.words = param_1_3 || [];
                if (param_2_1 != param_1_2) {
                  this.sigBytes = param_2_1;
                } else {
                  this.sigBytes = param_1_3.length * 8;
                }
              },
              toX32: function () {
                var varData_605 = this.words;
                var varData_606 = varData_605.length;
                var itemList_2 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_606; numericVal_91++) {
                  var varData_607 = varData_605[numericVal_91];
                  itemList_2.push(varData_607.high);
                  itemList_2.push(varData_607.low);
                }
                return varData_601.create(itemList_2, this.sigBytes);
              },
              clone: function () {
                var varData_608 = varData_600.clone.call(this);
                var varData_609 = varData_608.words = this.words.slice(0);
                var varData_610 = varData_609.length;
                for (var numericVal_91 = 0; numericVal_91 < varData_610; numericVal_91++) {
                  varData_609[numericVal_91] = varData_609[numericVal_91].clone();
                }
                return varData_608;
              }
            });
          })();
          return param_1_1;
        });
      }
    });
    var varData_611 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/lib-typedarrays.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
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
            var varData_612 = param_1_1;
            var varData_613 = varData_612.lib;
            var varData_614 = varData_613.WordArray;
            var varData_615 = varData_614.init;
            var varData_616 = varData_614.init = function (param_1_2) {
              if (param_1_2 instanceof ArrayBuffer) {
                param_1_2 = new Uint8Array(param_1_2);
              }
              if (param_1_2 instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && param_1_2 instanceof Uint8ClampedArray || param_1_2 instanceof Int16Array || param_1_2 instanceof Uint16Array || param_1_2 instanceof Int32Array || param_1_2 instanceof Uint32Array || param_1_2 instanceof Float32Array || param_1_2 instanceof Float64Array) {
                param_1_2 = new Uint8Array(param_1_2.buffer, param_1_2.byteOffset, param_1_2.byteLength);
              }
              if (param_1_2 instanceof Uint8Array) {
                var varData_617 = param_1_2.byteLength;
                var itemList_2 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_617; numericVal_91++) {
                  itemList_2[numericVal_91 >>> 2] |= param_1_2[numericVal_91] << 24 - numericVal_91 % 4 * 8;
                }
                varData_615.call(this, itemList_2, varData_617);
              } else {
                varData_615.apply(this, arguments);
              }
            };
            varData_616.prototype = varData_614;
          })();
          return param_1_1.lib.WordArray;
        });
      }
    });
    var varData_618 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-utf16.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_619 = param_1_1;
            var varData_620 = varData_619.lib;
            var varData_621 = varData_620.WordArray;
            var varData_622 = varData_619.enc;
            var varData_623 = varData_622.Utf16 = varData_622.Utf16BE = {
              stringify: function (param_1_2) {
                var varData_624 = param_1_2.words;
                var varData_625 = param_1_2.sigBytes;
                var itemList_2 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_625; numericVal_91 += 2) {
                  var varData_626 = varData_624[numericVal_91 >>> 2] >>> 16 - numericVal_91 % 4 * 8 & 65535;
                  itemList_2.push(String.fromCharCode(varData_626));
                }
                return itemList_2.join("");
              },
              parse: function (param_1_2) {
                var varData_627 = param_1_2.length;
                var itemList_2 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_627; numericVal_91++) {
                  itemList_2[numericVal_91 >>> 1] |= param_1_2.charCodeAt(numericVal_91) << 16 - numericVal_91 % 2 * 16;
                }
                return varData_621.create(itemList_2, varData_627 * 2);
              }
            };
            varData_622.Utf16LE = {
              stringify: function (param_1_2) {
                var varData_628 = param_1_2.words;
                var varData_629 = param_1_2.sigBytes;
                var itemList_2 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_629; numericVal_91 += 2) {
                  var varData_630 = handleAction_63(varData_628[numericVal_91 >>> 2] >>> 16 - numericVal_91 % 4 * 8 & 65535);
                  itemList_2.push(String.fromCharCode(varData_630));
                }
                return itemList_2.join("");
              },
              parse: function (param_1_2) {
                var varData_631 = param_1_2.length;
                var itemList_2 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_631; numericVal_91++) {
                  itemList_2[numericVal_91 >>> 1] |= handleAction_63(param_1_2.charCodeAt(numericVal_91) << 16 - numericVal_91 % 2 * 16);
                }
                return varData_621.create(itemList_2, varData_631 * 2);
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
    var varData_632 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-base64.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_633 = param_1_1;
            var varData_634 = varData_633.lib;
            var varData_635 = varData_634.WordArray;
            var varData_636 = varData_633.enc;
            var varData_637 = varData_636.Base64 = {
              stringify: function (param_1_2) {
                var varData_638 = param_1_2.words;
                var varData_639 = param_1_2.sigBytes;
                var varData_640 = this._map;
                param_1_2.clamp();
                var itemList_2 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_639; numericVal_91 += 3) {
                  var varData_641 = varData_638[numericVal_91 >>> 2] >>> 24 - numericVal_91 % 4 * 8 & 255;
                  var varData_642 = varData_638[numericVal_91 + 1 >>> 2] >>> 24 - (numericVal_91 + 1) % 4 * 8 & 255;
                  var varData_643 = varData_638[numericVal_91 + 2 >>> 2] >>> 24 - (numericVal_91 + 2) % 4 * 8 & 255;
                  var varData_644 = varData_641 << 16 | varData_642 << 8 | varData_643;
                  for (var numericVal_92 = 0; numericVal_92 < 4 && numericVal_91 + numericVal_92 * 0.75 < varData_639; numericVal_92++) {
                    itemList_2.push(varData_640.charAt(varData_644 >>> (3 - numericVal_92) * 6 & 63));
                  }
                }
                var varData_645 = varData_640.charAt(64);
                if (varData_645) {
                  while (itemList_2.length % 4) {
                    itemList_2.push(varData_645);
                  }
                }
                return itemList_2.join("");
              },
              parse: function (param_1_2) {
                var varData_646 = param_1_2.length;
                var varData_647 = this._map;
                var varData_648 = this._reverseMap;
                if (!varData_648) {
                  varData_648 = this._reverseMap = [];
                  for (var numericVal_91 = 0; numericVal_91 < varData_647.length; numericVal_91++) {
                    varData_648[varData_647.charCodeAt(numericVal_91)] = numericVal_91;
                  }
                }
                var varData_649 = varData_647.charAt(64);
                if (varData_649) {
                  var varData_650 = param_1_2.indexOf(varData_649);
                  if (varData_650 !== -1) {
                    varData_646 = varData_650;
                  }
                }
                return handleAction_64(param_1_2, varData_646, varData_648);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
            function handleAction_64(param_1_2, param_2_1, param_3) {
              var itemList_2 = [];
              var numericVal_91 = 0;
              for (var numericVal_92 = 0; numericVal_92 < param_2_1; numericVal_92++) {
                if (numericVal_92 % 4) {
                  var varData_651 = param_3[param_1_2.charCodeAt(numericVal_92 - 1)] << numericVal_92 % 4 * 2;
                  var varData_652 = param_3[param_1_2.charCodeAt(numericVal_92)] >>> 6 - numericVal_92 % 4 * 2;
                  itemList_2[numericVal_91 >>> 2] |= (varData_651 | varData_652) << 24 - numericVal_91 % 4 * 8;
                  numericVal_91++;
                }
              }
              return varData_635.create(itemList_2, numericVal_91);
            }
          })();
          return param_1_1.enc.Base64;
        });
      }
    });
    var varData_653 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/md5.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_654 = param_1_1;
            var varData_655 = varData_654.lib;
            var varData_656 = varData_655.WordArray;
            var varData_657 = varData_655.Hasher;
            var varData_658 = varData_654.algo;
            var itemList_2 = [];
            (function () {
              for (var numericVal_91 = 0; numericVal_91 < 64; numericVal_91++) {
                itemList_2[numericVal_91] = param_1_2.abs(param_1_2.sin(numericVal_91 + 1)) * 4294967296 | 0;
              }
            })();
            var varData_659 = varData_658.MD5 = varData_657.extend({
              _doReset: function () {
                this._hash = new varData_656.init([1732584193, 4023233417, 2562383102, 271733878]);
              },
              _doProcessBlock: function (param_1_3, param_2_1) {
                for (var numericVal_91 = 0; numericVal_91 < 16; numericVal_91++) {
                  var varData_660 = param_2_1 + numericVal_91;
                  var varData_661 = param_1_3[varData_660];
                  param_1_3[varData_660] = (varData_661 << 8 | varData_661 >>> 24) & 16711935 | (varData_661 << 24 | varData_661 >>> 8) & -16711936;
                }
                var varData_662 = this._hash.words;
                var varData_663 = param_1_3[param_2_1 + 0];
                var varData_664 = param_1_3[param_2_1 + 1];
                var varData_665 = param_1_3[param_2_1 + 2];
                var varData_666 = param_1_3[param_2_1 + 3];
                var varData_667 = param_1_3[param_2_1 + 4];
                var varData_668 = param_1_3[param_2_1 + 5];
                var varData_669 = param_1_3[param_2_1 + 6];
                var varData_670 = param_1_3[param_2_1 + 7];
                var varData_671 = param_1_3[param_2_1 + 8];
                var varData_672 = param_1_3[param_2_1 + 9];
                var varData_673 = param_1_3[param_2_1 + 10];
                var varData_674 = param_1_3[param_2_1 + 11];
                var varData_675 = param_1_3[param_2_1 + 12];
                var varData_676 = param_1_3[param_2_1 + 13];
                var varData_677 = param_1_3[param_2_1 + 14];
                var varData_678 = param_1_3[param_2_1 + 15];
                var varData_679 = varData_662[0];
                var varData_680 = varData_662[1];
                var varData_681 = varData_662[2];
                var varData_682 = varData_662[3];
                varData_679 = handleAction_65(varData_679, varData_680, varData_681, varData_682, varData_663, 7, itemList_2[0]);
                varData_682 = handleAction_65(varData_682, varData_679, varData_680, varData_681, varData_664, 12, itemList_2[1]);
                varData_681 = handleAction_65(varData_681, varData_682, varData_679, varData_680, varData_665, 17, itemList_2[2]);
                varData_680 = handleAction_65(varData_680, varData_681, varData_682, varData_679, varData_666, 22, itemList_2[3]);
                varData_679 = handleAction_65(varData_679, varData_680, varData_681, varData_682, varData_667, 7, itemList_2[4]);
                varData_682 = handleAction_65(varData_682, varData_679, varData_680, varData_681, varData_668, 12, itemList_2[5]);
                varData_681 = handleAction_65(varData_681, varData_682, varData_679, varData_680, varData_669, 17, itemList_2[6]);
                varData_680 = handleAction_65(varData_680, varData_681, varData_682, varData_679, varData_670, 22, itemList_2[7]);
                varData_679 = handleAction_65(varData_679, varData_680, varData_681, varData_682, varData_671, 7, itemList_2[8]);
                varData_682 = handleAction_65(varData_682, varData_679, varData_680, varData_681, varData_672, 12, itemList_2[9]);
                varData_681 = handleAction_65(varData_681, varData_682, varData_679, varData_680, varData_673, 17, itemList_2[10]);
                varData_680 = handleAction_65(varData_680, varData_681, varData_682, varData_679, varData_674, 22, itemList_2[11]);
                varData_679 = handleAction_65(varData_679, varData_680, varData_681, varData_682, varData_675, 7, itemList_2[12]);
                varData_682 = handleAction_65(varData_682, varData_679, varData_680, varData_681, varData_676, 12, itemList_2[13]);
                varData_681 = handleAction_65(varData_681, varData_682, varData_679, varData_680, varData_677, 17, itemList_2[14]);
                varData_680 = handleAction_65(varData_680, varData_681, varData_682, varData_679, varData_678, 22, itemList_2[15]);
                varData_679 = handleAction_66(varData_679, varData_680, varData_681, varData_682, varData_664, 5, itemList_2[16]);
                varData_682 = handleAction_66(varData_682, varData_679, varData_680, varData_681, varData_669, 9, itemList_2[17]);
                varData_681 = handleAction_66(varData_681, varData_682, varData_679, varData_680, varData_674, 14, itemList_2[18]);
                varData_680 = handleAction_66(varData_680, varData_681, varData_682, varData_679, varData_663, 20, itemList_2[19]);
                varData_679 = handleAction_66(varData_679, varData_680, varData_681, varData_682, varData_668, 5, itemList_2[20]);
                varData_682 = handleAction_66(varData_682, varData_679, varData_680, varData_681, varData_673, 9, itemList_2[21]);
                varData_681 = handleAction_66(varData_681, varData_682, varData_679, varData_680, varData_678, 14, itemList_2[22]);
                varData_680 = handleAction_66(varData_680, varData_681, varData_682, varData_679, varData_667, 20, itemList_2[23]);
                varData_679 = handleAction_66(varData_679, varData_680, varData_681, varData_682, varData_672, 5, itemList_2[24]);
                varData_682 = handleAction_66(varData_682, varData_679, varData_680, varData_681, varData_677, 9, itemList_2[25]);
                varData_681 = handleAction_66(varData_681, varData_682, varData_679, varData_680, varData_666, 14, itemList_2[26]);
                varData_680 = handleAction_66(varData_680, varData_681, varData_682, varData_679, varData_671, 20, itemList_2[27]);
                varData_679 = handleAction_66(varData_679, varData_680, varData_681, varData_682, varData_676, 5, itemList_2[28]);
                varData_682 = handleAction_66(varData_682, varData_679, varData_680, varData_681, varData_665, 9, itemList_2[29]);
                varData_681 = handleAction_66(varData_681, varData_682, varData_679, varData_680, varData_670, 14, itemList_2[30]);
                varData_680 = handleAction_66(varData_680, varData_681, varData_682, varData_679, varData_675, 20, itemList_2[31]);
                varData_679 = handleAction_67(varData_679, varData_680, varData_681, varData_682, varData_668, 4, itemList_2[32]);
                varData_682 = handleAction_67(varData_682, varData_679, varData_680, varData_681, varData_671, 11, itemList_2[33]);
                varData_681 = handleAction_67(varData_681, varData_682, varData_679, varData_680, varData_674, 16, itemList_2[34]);
                varData_680 = handleAction_67(varData_680, varData_681, varData_682, varData_679, varData_677, 23, itemList_2[35]);
                varData_679 = handleAction_67(varData_679, varData_680, varData_681, varData_682, varData_664, 4, itemList_2[36]);
                varData_682 = handleAction_67(varData_682, varData_679, varData_680, varData_681, varData_667, 11, itemList_2[37]);
                varData_681 = handleAction_67(varData_681, varData_682, varData_679, varData_680, varData_670, 16, itemList_2[38]);
                varData_680 = handleAction_67(varData_680, varData_681, varData_682, varData_679, varData_673, 23, itemList_2[39]);
                varData_679 = handleAction_67(varData_679, varData_680, varData_681, varData_682, varData_676, 4, itemList_2[40]);
                varData_682 = handleAction_67(varData_682, varData_679, varData_680, varData_681, varData_663, 11, itemList_2[41]);
                varData_681 = handleAction_67(varData_681, varData_682, varData_679, varData_680, varData_666, 16, itemList_2[42]);
                varData_680 = handleAction_67(varData_680, varData_681, varData_682, varData_679, varData_669, 23, itemList_2[43]);
                varData_679 = handleAction_67(varData_679, varData_680, varData_681, varData_682, varData_672, 4, itemList_2[44]);
                varData_682 = handleAction_67(varData_682, varData_679, varData_680, varData_681, varData_675, 11, itemList_2[45]);
                varData_681 = handleAction_67(varData_681, varData_682, varData_679, varData_680, varData_678, 16, itemList_2[46]);
                varData_680 = handleAction_67(varData_680, varData_681, varData_682, varData_679, varData_665, 23, itemList_2[47]);
                varData_679 = handleAction_68(varData_679, varData_680, varData_681, varData_682, varData_663, 6, itemList_2[48]);
                varData_682 = handleAction_68(varData_682, varData_679, varData_680, varData_681, varData_670, 10, itemList_2[49]);
                varData_681 = handleAction_68(varData_681, varData_682, varData_679, varData_680, varData_677, 15, itemList_2[50]);
                varData_680 = handleAction_68(varData_680, varData_681, varData_682, varData_679, varData_668, 21, itemList_2[51]);
                varData_679 = handleAction_68(varData_679, varData_680, varData_681, varData_682, varData_675, 6, itemList_2[52]);
                varData_682 = handleAction_68(varData_682, varData_679, varData_680, varData_681, varData_666, 10, itemList_2[53]);
                varData_681 = handleAction_68(varData_681, varData_682, varData_679, varData_680, varData_673, 15, itemList_2[54]);
                varData_680 = handleAction_68(varData_680, varData_681, varData_682, varData_679, varData_664, 21, itemList_2[55]);
                varData_679 = handleAction_68(varData_679, varData_680, varData_681, varData_682, varData_671, 6, itemList_2[56]);
                varData_682 = handleAction_68(varData_682, varData_679, varData_680, varData_681, varData_678, 10, itemList_2[57]);
                varData_681 = handleAction_68(varData_681, varData_682, varData_679, varData_680, varData_669, 15, itemList_2[58]);
                varData_680 = handleAction_68(varData_680, varData_681, varData_682, varData_679, varData_676, 21, itemList_2[59]);
                varData_679 = handleAction_68(varData_679, varData_680, varData_681, varData_682, varData_667, 6, itemList_2[60]);
                varData_682 = handleAction_68(varData_682, varData_679, varData_680, varData_681, varData_674, 10, itemList_2[61]);
                varData_681 = handleAction_68(varData_681, varData_682, varData_679, varData_680, varData_665, 15, itemList_2[62]);
                varData_680 = handleAction_68(varData_680, varData_681, varData_682, varData_679, varData_672, 21, itemList_2[63]);
                varData_662[0] = varData_662[0] + varData_679 | 0;
                varData_662[1] = varData_662[1] + varData_680 | 0;
                varData_662[2] = varData_662[2] + varData_681 | 0;
                varData_662[3] = varData_662[3] + varData_682 | 0;
              },
              _doFinalize: function () {
                var varData_683 = this._data;
                var varData_684 = varData_683.words;
                var varData_685 = this._nDataBytes * 8;
                var varData_686 = varData_683.sigBytes * 8;
                varData_684[varData_686 >>> 5] |= 128 << 24 - varData_686 % 32;
                var varData_687 = param_1_2.floor(varData_685 / 4294967296);
                var varData_688 = varData_685;
                varData_684[(varData_686 + 64 >>> 9 << 4) + 15] = (varData_687 << 8 | varData_687 >>> 24) & 16711935 | (varData_687 << 24 | varData_687 >>> 8) & -16711936;
                varData_684[(varData_686 + 64 >>> 9 << 4) + 14] = (varData_688 << 8 | varData_688 >>> 24) & 16711935 | (varData_688 << 24 | varData_688 >>> 8) & -16711936;
                varData_683.sigBytes = (varData_684.length + 1) * 4;
                this._process();
                var varData_689 = this._hash;
                var varData_690 = varData_689.words;
                for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                  var varData_691 = varData_690[numericVal_91];
                  varData_690[numericVal_91] = (varData_691 << 8 | varData_691 >>> 24) & 16711935 | (varData_691 << 24 | varData_691 >>> 8) & -16711936;
                }
                return varData_689;
              },
              clone: function () {
                var varData_692 = varData_657.clone.call(this);
                varData_692._hash = this._hash.clone();
                return varData_692;
              }
            });
            function handleAction_65(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_693 = param_1_3 + (param_2_1 & param_3 | ~param_2_1 & param_4) + param_5 + param_7;
              return (varData_693 << param_6 | varData_693 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_66(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_694 = param_1_3 + (param_2_1 & param_4 | param_3 & ~param_4) + param_5 + param_7;
              return (varData_694 << param_6 | varData_694 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_67(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_695 = param_1_3 + (param_2_1 ^ param_3 ^ param_4) + param_5 + param_7;
              return (varData_695 << param_6 | varData_695 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_68(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_696 = param_1_3 + (param_3 ^ (param_2_1 | ~param_4)) + param_5 + param_7;
              return (varData_696 << param_6 | varData_696 >>> 32 - param_6) + param_2_1;
            }
            varData_654.MD5 = varData_657._createHelper(varData_659);
            varData_654.HmacMD5 = varData_657._createHmacHelper(varData_659);
          })(Math);
          return param_1_1.MD5;
        });
      }
    });
    var varData_697 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha1.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_698 = param_1_1;
            var varData_699 = varData_698.lib;
            var varData_700 = varData_699.WordArray;
            var varData_701 = varData_699.Hasher;
            var varData_702 = varData_698.algo;
            var itemList_2 = [];
            var varData_703 = varData_702.SHA1 = varData_701.extend({
              _doReset: function () {
                this._hash = new varData_700.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function (param_1_2, param_2_1) {
                var varData_704 = this._hash.words;
                var varData_705 = varData_704[0];
                var varData_706 = varData_704[1];
                var varData_707 = varData_704[2];
                var varData_708 = varData_704[3];
                var varData_709 = varData_704[4];
                for (var numericVal_91 = 0; numericVal_91 < 80; numericVal_91++) {
                  if (numericVal_91 < 16) {
                    itemList_2[numericVal_91] = param_1_2[param_2_1 + numericVal_91] | 0;
                  } else {
                    var varData_710 = itemList_2[numericVal_91 - 3] ^ itemList_2[numericVal_91 - 8] ^ itemList_2[numericVal_91 - 14] ^ itemList_2[numericVal_91 - 16];
                    itemList_2[numericVal_91] = varData_710 << 1 | varData_710 >>> 31;
                  }
                  var varData_711 = (varData_705 << 5 | varData_705 >>> 27) + varData_709 + itemList_2[numericVal_91];
                  if (numericVal_91 < 20) {
                    varData_711 += (varData_706 & varData_707 | ~varData_706 & varData_708) + 1518500249;
                  } else if (numericVal_91 < 40) {
                    varData_711 += (varData_706 ^ varData_707 ^ varData_708) + 1859775393;
                  } else if (numericVal_91 < 60) {
                    varData_711 += (varData_706 & varData_707 | varData_706 & varData_708 | varData_707 & varData_708) - 1894007588;
                  } else {
                    varData_711 += (varData_706 ^ varData_707 ^ varData_708) - 899497514;
                  }
                  varData_709 = varData_708;
                  varData_708 = varData_707;
                  varData_707 = varData_706 << 30 | varData_706 >>> 2;
                  varData_706 = varData_705;
                  varData_705 = varData_711;
                }
                varData_704[0] = varData_704[0] + varData_705 | 0;
                varData_704[1] = varData_704[1] + varData_706 | 0;
                varData_704[2] = varData_704[2] + varData_707 | 0;
                varData_704[3] = varData_704[3] + varData_708 | 0;
                varData_704[4] = varData_704[4] + varData_709 | 0;
              },
              _doFinalize: function () {
                var varData_712 = this._data;
                var varData_713 = varData_712.words;
                var varData_714 = this._nDataBytes * 8;
                var varData_715 = varData_712.sigBytes * 8;
                varData_713[varData_715 >>> 5] |= 128 << 24 - varData_715 % 32;
                varData_713[(varData_715 + 64 >>> 9 << 4) + 14] = Math.floor(varData_714 / 4294967296);
                varData_713[(varData_715 + 64 >>> 9 << 4) + 15] = varData_714;
                varData_712.sigBytes = varData_713.length * 4;
                this._process();
                return this._hash;
              },
              clone: function () {
                var varData_716 = varData_701.clone.call(this);
                varData_716._hash = this._hash.clone();
                return varData_716;
              }
            });
            varData_698.SHA1 = varData_701._createHelper(varData_703);
            varData_698.HmacSHA1 = varData_701._createHmacHelper(varData_703);
          })();
          return param_1_1.SHA1;
        });
      }
    });
    var varData_717 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha256.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_718 = param_1_1;
            var varData_719 = varData_718.lib;
            var varData_720 = varData_719.WordArray;
            var varData_721 = varData_719.Hasher;
            var varData_722 = varData_718.algo;
            var itemList_2 = [];
            var itemList_3 = [];
            (function () {
              function handleAction_69(param_1_3) {
                var varData_723 = param_1_2.sqrt(param_1_3);
                for (var numericVal_91 = 2; numericVal_91 <= varData_723; numericVal_91++) {
                  if (!(param_1_3 % numericVal_91)) {
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
                    itemList_2[numericVal_92] = handleAction_70(param_1_2.pow(numericVal_91, 1 / 2));
                  }
                  itemList_3[numericVal_92] = handleAction_70(param_1_2.pow(numericVal_91, 1 / 3));
                  numericVal_92++;
                }
                numericVal_91++;
              }
            })();
            var itemList_4 = [];
            var varData_724 = varData_722.SHA256 = varData_721.extend({
              _doReset: function () {
                this._hash = new varData_720.init(itemList_2.slice(0));
              },
              _doProcessBlock: function (param_1_3, param_2_1) {
                var varData_725 = this._hash.words;
                var varData_726 = varData_725[0];
                var varData_727 = varData_725[1];
                var varData_728 = varData_725[2];
                var varData_729 = varData_725[3];
                var varData_730 = varData_725[4];
                var varData_731 = varData_725[5];
                var varData_732 = varData_725[6];
                var varData_733 = varData_725[7];
                for (var numericVal_91 = 0; numericVal_91 < 64; numericVal_91++) {
                  if (numericVal_91 < 16) {
                    itemList_4[numericVal_91] = param_1_3[param_2_1 + numericVal_91] | 0;
                  } else {
                    var varData_734 = itemList_4[numericVal_91 - 15];
                    var varData_735 = (varData_734 << 25 | varData_734 >>> 7) ^ (varData_734 << 14 | varData_734 >>> 18) ^ varData_734 >>> 3;
                    var varData_736 = itemList_4[numericVal_91 - 2];
                    var varData_737 = (varData_736 << 15 | varData_736 >>> 17) ^ (varData_736 << 13 | varData_736 >>> 19) ^ varData_736 >>> 10;
                    itemList_4[numericVal_91] = varData_735 + itemList_4[numericVal_91 - 7] + varData_737 + itemList_4[numericVal_91 - 16];
                  }
                  var varData_738 = varData_730 & varData_731 ^ ~varData_730 & varData_732;
                  var varData_739 = varData_726 & varData_727 ^ varData_726 & varData_728 ^ varData_727 & varData_728;
                  var varData_740 = (varData_726 << 30 | varData_726 >>> 2) ^ (varData_726 << 19 | varData_726 >>> 13) ^ (varData_726 << 10 | varData_726 >>> 22);
                  var varData_741 = (varData_730 << 26 | varData_730 >>> 6) ^ (varData_730 << 21 | varData_730 >>> 11) ^ (varData_730 << 7 | varData_730 >>> 25);
                  var varData_742 = varData_733 + varData_741 + varData_738 + itemList_3[numericVal_91] + itemList_4[numericVal_91];
                  var varData_743 = varData_740 + varData_739;
                  varData_733 = varData_732;
                  varData_732 = varData_731;
                  varData_731 = varData_730;
                  varData_730 = varData_729 + varData_742 | 0;
                  varData_729 = varData_728;
                  varData_728 = varData_727;
                  varData_727 = varData_726;
                  varData_726 = varData_742 + varData_743 | 0;
                }
                varData_725[0] = varData_725[0] + varData_726 | 0;
                varData_725[1] = varData_725[1] + varData_727 | 0;
                varData_725[2] = varData_725[2] + varData_728 | 0;
                varData_725[3] = varData_725[3] + varData_729 | 0;
                varData_725[4] = varData_725[4] + varData_730 | 0;
                varData_725[5] = varData_725[5] + varData_731 | 0;
                varData_725[6] = varData_725[6] + varData_732 | 0;
                varData_725[7] = varData_725[7] + varData_733 | 0;
              },
              _doFinalize: function () {
                var varData_744 = this._data;
                var varData_745 = varData_744.words;
                var varData_746 = this._nDataBytes * 8;
                var varData_747 = varData_744.sigBytes * 8;
                varData_745[varData_747 >>> 5] |= 128 << 24 - varData_747 % 32;
                varData_745[(varData_747 + 64 >>> 9 << 4) + 14] = param_1_2.floor(varData_746 / 4294967296);
                varData_745[(varData_747 + 64 >>> 9 << 4) + 15] = varData_746;
                varData_744.sigBytes = varData_745.length * 4;
                this._process();
                return this._hash;
              },
              clone: function () {
                var varData_748 = varData_721.clone.call(this);
                varData_748._hash = this._hash.clone();
                return varData_748;
              }
            });
            varData_718.SHA256 = varData_721._createHelper(varData_724);
            varData_718.HmacSHA256 = varData_721._createHmacHelper(varData_724);
          })(Math);
          return param_1_1.SHA256;
        });
      }
    });
    var varData_749 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha224.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_717());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha256"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_750 = param_1_1;
            var varData_751 = varData_750.lib;
            var varData_752 = varData_751.WordArray;
            var varData_753 = varData_750.algo;
            var varData_754 = varData_753.SHA256;
            var varData_755 = varData_753.SHA224 = varData_754.extend({
              _doReset: function () {
                this._hash = new varData_752.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
              },
              _doFinalize: function () {
                var varData_756 = varData_754._doFinalize.call(this);
                varData_756.sigBytes -= 4;
                return varData_756;
              }
            });
            varData_750.SHA224 = varData_754._createHelper(varData_755);
            varData_750.HmacSHA224 = varData_754._createHmacHelper(varData_755);
          })();
          return param_1_1.SHA224;
        });
      }
    });
    var varData_757 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha512.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_597());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_758 = param_1_1;
            var varData_759 = varData_758.lib;
            var varData_760 = varData_759.Hasher;
            var varData_761 = varData_758.x64;
            var varData_762 = varData_761.Word;
            var varData_763 = varData_761.WordArray;
            var varData_764 = varData_758.algo;
            function handleAction_71() {
              return varData_762.create.apply(varData_762, arguments);
            }
            var itemList_2 = [handleAction_71(1116352408, 3609767458), handleAction_71(1899447441, 602891725), handleAction_71(3049323471, 3964484399), handleAction_71(3921009573, 2173295548), handleAction_71(961987163, 4081628472), handleAction_71(1508970993, 3053834265), handleAction_71(2453635748, 2937671579), handleAction_71(2870763221, 3664609560), handleAction_71(3624381080, 2734883394), handleAction_71(310598401, 1164996542), handleAction_71(607225278, 1323610764), handleAction_71(1426881987, 3590304994), handleAction_71(1925078388, 4068182383), handleAction_71(2162078206, 991336113), handleAction_71(2614888103, 633803317), handleAction_71(3248222580, 3479774868), handleAction_71(3835390401, 2666613458), handleAction_71(4022224774, 944711139), handleAction_71(264347078, 2341262773), handleAction_71(604807628, 2007800933), handleAction_71(770255983, 1495990901), handleAction_71(1249150122, 1856431235), handleAction_71(1555081692, 3175218132), handleAction_71(1996064986, 2198950837), handleAction_71(2554220882, 3999719339), handleAction_71(2821834349, 766784016), handleAction_71(2952996808, 2566594879), handleAction_71(3210313671, 3203337956), handleAction_71(3336571891, 1034457026), handleAction_71(3584528711, 2466948901), handleAction_71(113926993, 3758326383), handleAction_71(338241895, 168717936), handleAction_71(666307205, 1188179964), handleAction_71(773529912, 1546045734), handleAction_71(1294757372, 1522805485), handleAction_71(1396182291, 2643833823), handleAction_71(1695183700, 2343527390), handleAction_71(1986661051, 1014477480), handleAction_71(2177026350, 1206759142), handleAction_71(2456956037, 344077627), handleAction_71(2730485921, 1290863460), handleAction_71(2820302411, 3158454273), handleAction_71(3259730800, 3505952657), handleAction_71(3345764771, 106217008), handleAction_71(3516065817, 3606008344), handleAction_71(3600352804, 1432725776), handleAction_71(4094571909, 1467031594), handleAction_71(275423344, 851169720), handleAction_71(430227734, 3100823752), handleAction_71(506948616, 1363258195), handleAction_71(659060556, 3750685593), handleAction_71(883997877, 3785050280), handleAction_71(958139571, 3318307427), handleAction_71(1322822218, 3812723403), handleAction_71(1537002063, 2003034995), handleAction_71(1747873779, 3602036899), handleAction_71(1955562222, 1575990012), handleAction_71(2024104815, 1125592928), handleAction_71(2227730452, 2716904306), handleAction_71(2361852424, 442776044), handleAction_71(2428436474, 593698344), handleAction_71(2756734187, 3733110249), handleAction_71(3204031479, 2999351573), handleAction_71(3329325298, 3815920427), handleAction_71(3391569614, 3928383900), handleAction_71(3515267271, 566280711), handleAction_71(3940187606, 3454069534), handleAction_71(4118630271, 4000239992), handleAction_71(116418474, 1914138554), handleAction_71(174292421, 2731055270), handleAction_71(289380356, 3203993006), handleAction_71(460393269, 320620315), handleAction_71(685471733, 587496836), handleAction_71(852142971, 1086792851), handleAction_71(1017036298, 365543100), handleAction_71(1126000580, 2618297676), handleAction_71(1288033470, 3409855158), handleAction_71(1501505948, 4234509866), handleAction_71(1607167915, 987167468), handleAction_71(1816402316, 1246189591)];
            var itemList_3 = [];
            (function () {
              for (var numericVal_91 = 0; numericVal_91 < 80; numericVal_91++) {
                itemList_3[numericVal_91] = handleAction_71();
              }
            })();
            var varData_765 = varData_764.SHA512 = varData_760.extend({
              _doReset: function () {
                this._hash = new varData_763.init([new varData_762.init(1779033703, 4089235720), new varData_762.init(3144134277, 2227873595), new varData_762.init(1013904242, 4271175723), new varData_762.init(2773480762, 1595750129), new varData_762.init(1359893119, 2917565137), new varData_762.init(2600822924, 725511199), new varData_762.init(528734635, 4215389547), new varData_762.init(1541459225, 327033209)]);
              },
              _doProcessBlock: function (param_1_2, param_2_1) {
                var varData_766 = this._hash.words;
                var varData_767 = varData_766[0];
                var varData_768 = varData_766[1];
                var varData_769 = varData_766[2];
                var varData_770 = varData_766[3];
                var varData_771 = varData_766[4];
                var varData_772 = varData_766[5];
                var varData_773 = varData_766[6];
                var varData_774 = varData_766[7];
                var varData_775 = varData_767.high;
                var varData_776 = varData_767.low;
                var varData_777 = varData_768.high;
                var varData_778 = varData_768.low;
                var varData_779 = varData_769.high;
                var varData_780 = varData_769.low;
                var varData_781 = varData_770.high;
                var varData_782 = varData_770.low;
                var varData_783 = varData_771.high;
                var varData_784 = varData_771.low;
                var varData_785 = varData_772.high;
                var varData_786 = varData_772.low;
                var varData_787 = varData_773.high;
                var varData_788 = varData_773.low;
                var varData_789 = varData_774.high;
                var varData_790 = varData_774.low;
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
                var varData_806 = varData_790;
                for (var numericVal_91 = 0; numericVal_91 < 80; numericVal_91++) {
                  var varData_807 = itemList_3[numericVal_91];
                  if (numericVal_91 < 16) {
                    var varData_808 = varData_807.high = param_1_2[param_2_1 + numericVal_91 * 2] | 0;
                    var varData_809 = varData_807.low = param_1_2[param_2_1 + numericVal_91 * 2 + 1] | 0;
                  } else {
                    var varData_810 = itemList_3[numericVal_91 - 15];
                    var varData_811 = varData_810.high;
                    var varData_812 = varData_810.low;
                    var varData_813 = (varData_811 >>> 1 | varData_812 << 31) ^ (varData_811 >>> 8 | varData_812 << 24) ^ varData_811 >>> 7;
                    var varData_814 = (varData_812 >>> 1 | varData_811 << 31) ^ (varData_812 >>> 8 | varData_811 << 24) ^ (varData_812 >>> 7 | varData_811 << 25);
                    var varData_815 = itemList_3[numericVal_91 - 2];
                    var varData_816 = varData_815.high;
                    var varData_817 = varData_815.low;
                    var varData_818 = (varData_816 >>> 19 | varData_817 << 13) ^ (varData_816 << 3 | varData_817 >>> 29) ^ varData_816 >>> 6;
                    var varData_819 = (varData_817 >>> 19 | varData_816 << 13) ^ (varData_817 << 3 | varData_816 >>> 29) ^ (varData_817 >>> 6 | varData_816 << 26);
                    var varData_820 = itemList_3[numericVal_91 - 7];
                    var varData_821 = varData_820.high;
                    var varData_822 = varData_820.low;
                    var varData_823 = itemList_3[numericVal_91 - 16];
                    var varData_824 = varData_823.high;
                    var varData_825 = varData_823.low;
                    var varData_809 = varData_814 + varData_822;
                    var varData_808 = varData_813 + varData_821 + (varData_809 >>> 0 < varData_814 >>> 0 ? 1 : 0);
                    var varData_809 = varData_809 + varData_819;
                    var varData_808 = varData_808 + varData_818 + (varData_809 >>> 0 < varData_819 >>> 0 ? 1 : 0);
                    var varData_809 = varData_809 + varData_825;
                    var varData_808 = varData_808 + varData_824 + (varData_809 >>> 0 < varData_825 >>> 0 ? 1 : 0);
                    varData_807.high = varData_808;
                    varData_807.low = varData_809;
                  }
                  var varData_826 = varData_799 & varData_801 ^ ~varData_799 & varData_803;
                  var varData_827 = varData_800 & varData_802 ^ ~varData_800 & varData_804;
                  var varData_828 = varData_791 & varData_793 ^ varData_791 & varData_795 ^ varData_793 & varData_795;
                  var varData_829 = varData_792 & varData_794 ^ varData_792 & varData_796 ^ varData_794 & varData_796;
                  var varData_830 = (varData_791 >>> 28 | varData_792 << 4) ^ (varData_791 << 30 | varData_792 >>> 2) ^ (varData_791 << 25 | varData_792 >>> 7);
                  var varData_831 = (varData_792 >>> 28 | varData_791 << 4) ^ (varData_792 << 30 | varData_791 >>> 2) ^ (varData_792 << 25 | varData_791 >>> 7);
                  var varData_832 = (varData_799 >>> 14 | varData_800 << 18) ^ (varData_799 >>> 18 | varData_800 << 14) ^ (varData_799 << 23 | varData_800 >>> 9);
                  var varData_833 = (varData_800 >>> 14 | varData_799 << 18) ^ (varData_800 >>> 18 | varData_799 << 14) ^ (varData_800 << 23 | varData_799 >>> 9);
                  var varData_834 = itemList_2[numericVal_91];
                  var varData_835 = varData_834.high;
                  var varData_836 = varData_834.low;
                  var varData_837 = varData_806 + varData_833;
                  var varData_838 = varData_805 + varData_832 + (varData_837 >>> 0 < varData_806 >>> 0 ? 1 : 0);
                  var varData_837 = varData_837 + varData_827;
                  var varData_838 = varData_838 + varData_826 + (varData_837 >>> 0 < varData_827 >>> 0 ? 1 : 0);
                  var varData_837 = varData_837 + varData_836;
                  var varData_838 = varData_838 + varData_835 + (varData_837 >>> 0 < varData_836 >>> 0 ? 1 : 0);
                  var varData_837 = varData_837 + varData_809;
                  var varData_838 = varData_838 + varData_808 + (varData_837 >>> 0 < varData_809 >>> 0 ? 1 : 0);
                  var varData_839 = varData_831 + varData_829;
                  var varData_840 = varData_830 + varData_828 + (varData_839 >>> 0 < varData_831 >>> 0 ? 1 : 0);
                  varData_805 = varData_803;
                  varData_806 = varData_804;
                  varData_803 = varData_801;
                  varData_804 = varData_802;
                  varData_801 = varData_799;
                  varData_802 = varData_800;
                  varData_800 = varData_798 + varData_837 | 0;
                  varData_799 = varData_797 + varData_838 + (varData_800 >>> 0 < varData_798 >>> 0 ? 1 : 0) | 0;
                  varData_797 = varData_795;
                  varData_798 = varData_796;
                  varData_795 = varData_793;
                  varData_796 = varData_794;
                  varData_793 = varData_791;
                  varData_794 = varData_792;
                  varData_792 = varData_837 + varData_839 | 0;
                  varData_791 = varData_838 + varData_840 + (varData_792 >>> 0 < varData_837 >>> 0 ? 1 : 0) | 0;
                }
                varData_776 = varData_767.low = varData_776 + varData_792;
                varData_767.high = varData_775 + varData_791 + (varData_776 >>> 0 < varData_792 >>> 0 ? 1 : 0);
                varData_778 = varData_768.low = varData_778 + varData_794;
                varData_768.high = varData_777 + varData_793 + (varData_778 >>> 0 < varData_794 >>> 0 ? 1 : 0);
                varData_780 = varData_769.low = varData_780 + varData_796;
                varData_769.high = varData_779 + varData_795 + (varData_780 >>> 0 < varData_796 >>> 0 ? 1 : 0);
                varData_782 = varData_770.low = varData_782 + varData_798;
                varData_770.high = varData_781 + varData_797 + (varData_782 >>> 0 < varData_798 >>> 0 ? 1 : 0);
                varData_784 = varData_771.low = varData_784 + varData_800;
                varData_771.high = varData_783 + varData_799 + (varData_784 >>> 0 < varData_800 >>> 0 ? 1 : 0);
                varData_786 = varData_772.low = varData_786 + varData_802;
                varData_772.high = varData_785 + varData_801 + (varData_786 >>> 0 < varData_802 >>> 0 ? 1 : 0);
                varData_788 = varData_773.low = varData_788 + varData_804;
                varData_773.high = varData_787 + varData_803 + (varData_788 >>> 0 < varData_804 >>> 0 ? 1 : 0);
                varData_790 = varData_774.low = varData_790 + varData_806;
                varData_774.high = varData_789 + varData_805 + (varData_790 >>> 0 < varData_806 >>> 0 ? 1 : 0);
              },
              _doFinalize: function () {
                var varData_841 = this._data;
                var varData_842 = varData_841.words;
                var varData_843 = this._nDataBytes * 8;
                var varData_844 = varData_841.sigBytes * 8;
                varData_842[varData_844 >>> 5] |= 128 << 24 - varData_844 % 32;
                varData_842[(varData_844 + 128 >>> 10 << 5) + 30] = Math.floor(varData_843 / 4294967296);
                varData_842[(varData_844 + 128 >>> 10 << 5) + 31] = varData_843;
                varData_841.sigBytes = varData_842.length * 4;
                this._process();
                var varData_845 = this._hash.toX32();
                return varData_845;
              },
              clone: function () {
                var varData_846 = varData_760.clone.call(this);
                varData_846._hash = this._hash.clone();
                return varData_846;
              },
              blockSize: 32
            });
            varData_758.SHA512 = varData_760._createHelper(varData_765);
            varData_758.HmacSHA512 = varData_760._createHmacHelper(varData_765);
          })();
          return param_1_1.SHA512;
        });
      }
    });
    var varData_847 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha384.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_597(), varData_757());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./sha512"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_848 = param_1_1;
            var varData_849 = varData_848.x64;
            var varData_850 = varData_849.Word;
            var varData_851 = varData_849.WordArray;
            var varData_852 = varData_848.algo;
            var varData_853 = varData_852.SHA512;
            var varData_854 = varData_852.SHA384 = varData_853.extend({
              _doReset: function () {
                this._hash = new varData_851.init([new varData_850.init(3418070365, 3238371032), new varData_850.init(1654270250, 914150663), new varData_850.init(2438529370, 812702999), new varData_850.init(355462360, 4144912697), new varData_850.init(1731405415, 4290775857), new varData_850.init(2394180231, 1750603025), new varData_850.init(3675008525, 1694076839), new varData_850.init(1203062813, 3204075428)]);
              },
              _doFinalize: function () {
                var varData_855 = varData_853._doFinalize.call(this);
                varData_855.sigBytes -= 16;
                return varData_855;
              }
            });
            varData_848.SHA384 = varData_853._createHelper(varData_854);
            varData_848.HmacSHA384 = varData_853._createHmacHelper(varData_854);
          })();
          return param_1_1.SHA384;
        });
      }
    });
    var varData_856 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha3.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_597());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_857 = param_1_1;
            var varData_858 = varData_857.lib;
            var varData_859 = varData_858.WordArray;
            var varData_860 = varData_858.Hasher;
            var varData_861 = varData_857.x64;
            var varData_862 = varData_861.Word;
            var varData_863 = varData_857.algo;
            var itemList_2 = [];
            var itemList_3 = [];
            var itemList_4 = [];
            (function () {
              var numericVal_91 = 1;
              var numericVal_92 = 0;
              for (var numericVal_93 = 0; numericVal_93 < 24; numericVal_93++) {
                itemList_2[numericVal_91 + numericVal_92 * 5] = (numericVal_93 + 1) * (numericVal_93 + 2) / 2 % 64;
                var varData_864 = numericVal_92 % 5;
                var varData_865 = (numericVal_91 * 2 + numericVal_92 * 3) % 5;
                numericVal_91 = varData_864;
                numericVal_92 = varData_865;
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
                    var varData_866 = (1 << numericVal_98) - 1;
                    if (varData_866 < 32) {
                      numericVal_97 ^= 1 << varData_866;
                    } else {
                      numericVal_96 ^= 1 << varData_866 - 32;
                    }
                  }
                  if (numericVal_94 & 128) {
                    numericVal_94 = numericVal_94 << 1 ^ 113;
                  } else {
                    numericVal_94 <<= 1;
                  }
                }
                itemList_4[numericVal_95] = varData_862.create(numericVal_96, numericVal_97);
              }
            })();
            var itemList_5 = [];
            (function () {
              for (var numericVal_91 = 0; numericVal_91 < 25; numericVal_91++) {
                itemList_5[numericVal_91] = varData_862.create();
              }
            })();
            var varData_867 = varData_863.SHA3 = varData_860.extend({
              cfg: varData_860.cfg.extend({
                outputLength: 512
              }),
              _doReset: function () {
                var varData_868 = this._state = [];
                for (var numericVal_91 = 0; numericVal_91 < 25; numericVal_91++) {
                  varData_868[numericVal_91] = new varData_862.init();
                }
                this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
              },
              _doProcessBlock: function (param_1_3, param_2_1) {
                var varData_869 = this._state;
                var varData_870 = this.blockSize / 2;
                for (var numericVal_91 = 0; numericVal_91 < varData_870; numericVal_91++) {
                  var varData_871 = param_1_3[param_2_1 + numericVal_91 * 2];
                  var varData_872 = param_1_3[param_2_1 + numericVal_91 * 2 + 1];
                  varData_871 = (varData_871 << 8 | varData_871 >>> 24) & 16711935 | (varData_871 << 24 | varData_871 >>> 8) & -16711936;
                  varData_872 = (varData_872 << 8 | varData_872 >>> 24) & 16711935 | (varData_872 << 24 | varData_872 >>> 8) & -16711936;
                  var varData_873 = varData_869[numericVal_91];
                  varData_873.high ^= varData_872;
                  varData_873.low ^= varData_871;
                }
                for (var numericVal_92 = 0; numericVal_92 < 24; numericVal_92++) {
                  for (var numericVal_93 = 0; numericVal_93 < 5; numericVal_93++) {
                    var numericVal_94 = 0;
                    var numericVal_95 = 0;
                    for (var numericVal_96 = 0; numericVal_96 < 5; numericVal_96++) {
                      var varData_873 = varData_869[numericVal_93 + numericVal_96 * 5];
                      numericVal_94 ^= varData_873.high;
                      numericVal_95 ^= varData_873.low;
                    }
                    var varData_874 = itemList_5[numericVal_93];
                    varData_874.high = numericVal_94;
                    varData_874.low = numericVal_95;
                  }
                  for (var numericVal_93 = 0; numericVal_93 < 5; numericVal_93++) {
                    var varData_875 = itemList_5[(numericVal_93 + 4) % 5];
                    var varData_876 = itemList_5[(numericVal_93 + 1) % 5];
                    var varData_877 = varData_876.high;
                    var varData_878 = varData_876.low;
                    var numericVal_94 = varData_875.high ^ (varData_877 << 1 | varData_878 >>> 31);
                    var numericVal_95 = varData_875.low ^ (varData_878 << 1 | varData_877 >>> 31);
                    for (var numericVal_96 = 0; numericVal_96 < 5; numericVal_96++) {
                      var varData_873 = varData_869[numericVal_93 + numericVal_96 * 5];
                      varData_873.high ^= numericVal_94;
                      varData_873.low ^= numericVal_95;
                    }
                  }
                  for (var numericVal_97 = 1; numericVal_97 < 25; numericVal_97++) {
                    var varData_873 = varData_869[numericVal_97];
                    var varData_879 = varData_873.high;
                    var varData_880 = varData_873.low;
                    var varData_881 = itemList_2[numericVal_97];
                    if (varData_881 < 32) {
                      var numericVal_94 = varData_879 << varData_881 | varData_880 >>> 32 - varData_881;
                      var numericVal_95 = varData_880 << varData_881 | varData_879 >>> 32 - varData_881;
                    } else {
                      var numericVal_94 = varData_880 << varData_881 - 32 | varData_879 >>> 64 - varData_881;
                      var numericVal_95 = varData_879 << varData_881 - 32 | varData_880 >>> 64 - varData_881;
                    }
                    var varData_882 = itemList_5[itemList_3[numericVal_97]];
                    varData_882.high = numericVal_94;
                    varData_882.low = numericVal_95;
                  }
                  var varData_883 = itemList_5[0];
                  var varData_884 = varData_869[0];
                  varData_883.high = varData_884.high;
                  varData_883.low = varData_884.low;
                  for (var numericVal_93 = 0; numericVal_93 < 5; numericVal_93++) {
                    for (var numericVal_96 = 0; numericVal_96 < 5; numericVal_96++) {
                      var numericVal_97 = numericVal_93 + numericVal_96 * 5;
                      var varData_873 = varData_869[numericVal_97];
                      var varData_885 = itemList_5[numericVal_97];
                      var varData_886 = itemList_5[(numericVal_93 + 1) % 5 + numericVal_96 * 5];
                      var varData_887 = itemList_5[(numericVal_93 + 2) % 5 + numericVal_96 * 5];
                      varData_873.high = varData_885.high ^ ~varData_886.high & varData_887.high;
                      varData_873.low = varData_885.low ^ ~varData_886.low & varData_887.low;
                    }
                  }
                  var varData_873 = varData_869[0];
                  var varData_888 = itemList_4[numericVal_92];
                  varData_873.high ^= varData_888.high;
                  varData_873.low ^= varData_888.low;
                  ;
                }
              },
              _doFinalize: function () {
                var varData_889 = this._data;
                var varData_890 = varData_889.words;
                var varData_891 = this._nDataBytes * 8;
                var varData_892 = varData_889.sigBytes * 8;
                var varData_893 = this.blockSize * 32;
                varData_890[varData_892 >>> 5] |= 1 << 24 - varData_892 % 32;
                varData_890[(param_1_2.ceil((varData_892 + 1) / varData_893) * varData_893 >>> 5) - 1] |= 128;
                varData_889.sigBytes = varData_890.length * 4;
                this._process();
                var varData_894 = this._state;
                var varData_895 = this.cfg.outputLength / 8;
                var varData_896 = varData_895 / 8;
                var itemList_6 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_896; numericVal_91++) {
                  var varData_897 = varData_894[numericVal_91];
                  var varData_898 = varData_897.high;
                  var varData_899 = varData_897.low;
                  varData_898 = (varData_898 << 8 | varData_898 >>> 24) & 16711935 | (varData_898 << 24 | varData_898 >>> 8) & -16711936;
                  varData_899 = (varData_899 << 8 | varData_899 >>> 24) & 16711935 | (varData_899 << 24 | varData_899 >>> 8) & -16711936;
                  itemList_6.push(varData_899);
                  itemList_6.push(varData_898);
                }
                return new varData_859.init(itemList_6, varData_895);
              },
              clone: function () {
                var varData_900 = varData_860.clone.call(this);
                var varData_901 = varData_900._state = this._state.slice(0);
                for (var numericVal_91 = 0; numericVal_91 < 25; numericVal_91++) {
                  varData_901[numericVal_91] = varData_901[numericVal_91].clone();
                }
                return varData_900;
              }
            });
            varData_857.SHA3 = varData_860._createHelper(varData_867);
            varData_857.HmacSHA3 = varData_860._createHmacHelper(varData_867);
          })(Math);
          return param_1_1.SHA3;
        });
      }
    });
    var varData_902 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/ripemd160.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_903 = param_1_1;
            var varData_904 = varData_903.lib;
            var varData_905 = varData_904.WordArray;
            var varData_906 = varData_904.Hasher;
            var varData_907 = varData_903.algo;
            var varData_908 = varData_905.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
            var varData_909 = varData_905.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
            var varData_910 = varData_905.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
            var varData_911 = varData_905.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
            var varData_912 = varData_905.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
            var varData_913 = varData_905.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
            var varData_914 = varData_907.RIPEMD160 = varData_906.extend({
              _doReset: function () {
                this._hash = varData_905.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function (param_1_3, param_2_1) {
                for (var numericVal_91 = 0; numericVal_91 < 16; numericVal_91++) {
                  var varData_915 = param_2_1 + numericVal_91;
                  var varData_916 = param_1_3[varData_915];
                  param_1_3[varData_915] = (varData_916 << 8 | varData_916 >>> 24) & 16711935 | (varData_916 << 24 | varData_916 >>> 8) & -16711936;
                }
                var varData_917 = this._hash.words;
                var varData_918 = varData_912.words;
                var varData_919 = varData_913.words;
                var varData_920 = varData_908.words;
                var varData_921 = varData_909.words;
                var varData_922 = varData_910.words;
                var varData_923 = varData_911.words;
                var varData_924;
                var varData_925;
                var varData_926;
                var varData_927;
                var varData_928;
                var varData_929;
                var varData_930;
                var varData_931;
                var varData_932;
                var varData_933;
                varData_929 = varData_924 = varData_917[0];
                varData_930 = varData_925 = varData_917[1];
                varData_931 = varData_926 = varData_917[2];
                varData_932 = varData_927 = varData_917[3];
                varData_933 = varData_928 = varData_917[4];
                var varData_934;
                for (var numericVal_91 = 0; numericVal_91 < 80; numericVal_91 += 1) {
                  varData_934 = varData_924 + param_1_3[param_2_1 + varData_920[numericVal_91]] | 0;
                  if (numericVal_91 < 16) {
                    varData_934 += handleAction_72(varData_925, varData_926, varData_927) + varData_918[0];
                  } else if (numericVal_91 < 32) {
                    varData_934 += handleAction_73(varData_925, varData_926, varData_927) + varData_918[1];
                  } else if (numericVal_91 < 48) {
                    varData_934 += handleAction_74(varData_925, varData_926, varData_927) + varData_918[2];
                  } else if (numericVal_91 < 64) {
                    varData_934 += handleAction_75(varData_925, varData_926, varData_927) + varData_918[3];
                  } else {
                    varData_934 += handleAction_76(varData_925, varData_926, varData_927) + varData_918[4];
                  }
                  varData_934 = varData_934 | 0;
                  varData_934 = handleAction_77(varData_934, varData_922[numericVal_91]);
                  varData_934 = varData_934 + varData_928 | 0;
                  varData_924 = varData_928;
                  varData_928 = varData_927;
                  varData_927 = handleAction_77(varData_926, 10);
                  varData_926 = varData_925;
                  varData_925 = varData_934;
                  varData_934 = varData_929 + param_1_3[param_2_1 + varData_921[numericVal_91]] | 0;
                  if (numericVal_91 < 16) {
                    varData_934 += handleAction_76(varData_930, varData_931, varData_932) + varData_919[0];
                  } else if (numericVal_91 < 32) {
                    varData_934 += handleAction_75(varData_930, varData_931, varData_932) + varData_919[1];
                  } else if (numericVal_91 < 48) {
                    varData_934 += handleAction_74(varData_930, varData_931, varData_932) + varData_919[2];
                  } else if (numericVal_91 < 64) {
                    varData_934 += handleAction_73(varData_930, varData_931, varData_932) + varData_919[3];
                  } else {
                    varData_934 += handleAction_72(varData_930, varData_931, varData_932) + varData_919[4];
                  }
                  varData_934 = varData_934 | 0;
                  varData_934 = handleAction_77(varData_934, varData_923[numericVal_91]);
                  varData_934 = varData_934 + varData_933 | 0;
                  varData_929 = varData_933;
                  varData_933 = varData_932;
                  varData_932 = handleAction_77(varData_931, 10);
                  varData_931 = varData_930;
                  varData_930 = varData_934;
                }
                varData_934 = varData_917[1] + varData_926 + varData_932 | 0;
                varData_917[1] = varData_917[2] + varData_927 + varData_933 | 0;
                varData_917[2] = varData_917[3] + varData_928 + varData_929 | 0;
                varData_917[3] = varData_917[4] + varData_924 + varData_930 | 0;
                varData_917[4] = varData_917[0] + varData_925 + varData_931 | 0;
                varData_917[0] = varData_934;
              },
              _doFinalize: function () {
                var varData_935 = this._data;
                var varData_936 = varData_935.words;
                var varData_937 = this._nDataBytes * 8;
                var varData_938 = varData_935.sigBytes * 8;
                varData_936[varData_938 >>> 5] |= 128 << 24 - varData_938 % 32;
                varData_936[(varData_938 + 64 >>> 9 << 4) + 14] = (varData_937 << 8 | varData_937 >>> 24) & 16711935 | (varData_937 << 24 | varData_937 >>> 8) & -16711936;
                varData_935.sigBytes = (varData_936.length + 1) * 4;
                this._process();
                var varData_939 = this._hash;
                var varData_940 = varData_939.words;
                for (var numericVal_91 = 0; numericVal_91 < 5; numericVal_91++) {
                  var varData_941 = varData_940[numericVal_91];
                  varData_940[numericVal_91] = (varData_941 << 8 | varData_941 >>> 24) & 16711935 | (varData_941 << 24 | varData_941 >>> 8) & -16711936;
                }
                return varData_939;
              },
              clone: function () {
                var varData_942 = varData_906.clone.call(this);
                varData_942._hash = this._hash.clone();
                return varData_942;
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
            varData_903.RIPEMD160 = varData_906._createHelper(varData_914);
            varData_903.HmacRIPEMD160 = varData_906._createHmacHelper(varData_914);
          })(Math);
          return param_1_1.RIPEMD160;
        });
      }
    });
    var varData_943 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/hmac.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_944 = param_1_1;
            var varData_945 = varData_944.lib;
            var varData_946 = varData_945.Base;
            var varData_947 = varData_944.enc;
            var varData_948 = varData_947.Utf8;
            var varData_949 = varData_944.algo;
            var varData_950 = varData_949.HMAC = varData_946.extend({
              init: function (param_1_2, param_2_1) {
                param_1_2 = this._hasher = new param_1_2.init();
                if (typeof param_2_1 == "string") {
                  param_2_1 = varData_948.parse(param_2_1);
                }
                var varData_951 = param_1_2.blockSize;
                var varData_952 = varData_951 * 4;
                if (param_2_1.sigBytes > varData_952) {
                  param_2_1 = param_1_2.finalize(param_2_1);
                }
                param_2_1.clamp();
                var varData_953 = this._oKey = param_2_1.clone();
                var varData_954 = this._iKey = param_2_1.clone();
                var varData_955 = varData_953.words;
                var varData_956 = varData_954.words;
                for (var numericVal_91 = 0; numericVal_91 < varData_951; numericVal_91++) {
                  varData_955[numericVal_91] ^= 1549556828;
                  varData_956[numericVal_91] ^= 909522486;
                }
                varData_953.sigBytes = varData_954.sigBytes = varData_952;
                this.reset();
              },
              reset: function () {
                var varData_957 = this._hasher;
                varData_957.reset();
                varData_957.update(this._iKey);
              },
              update: function (param_1_2) {
                this._hasher.update(param_1_2);
                return this;
              },
              finalize: function (param_1_2) {
                var varData_958 = this._hasher;
                var varData_959 = varData_958.finalize(param_1_2);
                varData_958.reset();
                var varData_960 = varData_958.finalize(this._oKey.clone().concat(varData_959));
                return varData_960;
              }
            });
          })();
        });
      }
    });
    var varData_961 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pbkdf2.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_697(), varData_943());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_962 = param_1_1;
            var varData_963 = varData_962.lib;
            var varData_964 = varData_963.Base;
            var varData_965 = varData_963.WordArray;
            var varData_966 = varData_962.algo;
            var varData_967 = varData_966.SHA1;
            var varData_968 = varData_966.HMAC;
            var varData_969 = {
              keySize: 4,
              hasher: varData_967,
              iterations: 1
            };
            var varData_970 = varData_966.PBKDF2 = varData_964.extend({
              cfg: varData_964.extend(varData_969),
              init: function (param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
              },
              compute: function (param_1_2, param_2_1) {
                var varData_971 = this.cfg;
                var varData_972 = varData_968.create(varData_971.hasher, param_1_2);
                var varData_973 = varData_965.create();
                var varData_974 = varData_965.create([1]);
                var varData_975 = varData_973.words;
                var varData_976 = varData_974.words;
                var varData_977 = varData_971.keySize;
                var varData_978 = varData_971.iterations;
                while (varData_975.length < varData_977) {
                  var varData_979 = varData_972.update(param_2_1).finalize(varData_974);
                  varData_972.reset();
                  var varData_980 = varData_979.words;
                  var varData_981 = varData_980.length;
                  var varData_982 = varData_979;
                  for (var numericVal_91 = 1; numericVal_91 < varData_978; numericVal_91++) {
                    varData_982 = varData_972.finalize(varData_982);
                    varData_972.reset();
                    var varData_983 = varData_982.words;
                    for (var numericVal_92 = 0; numericVal_92 < varData_981; numericVal_92++) {
                      varData_980[numericVal_92] ^= varData_983[numericVal_92];
                    }
                  }
                  varData_973.concat(varData_979);
                  varData_976[0]++;
                }
                varData_973.sigBytes = varData_977 * 4;
                return varData_973;
              }
            });
            varData_962.PBKDF2 = function (param_1_2, param_2_1, param_3) {
              return varData_970.create(param_3).compute(param_1_2, param_2_1);
            };
          })();
          return param_1_1.PBKDF2;
        });
      }
    });
    var varData_984 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/evpkdf.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_697(), varData_943());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_985 = param_1_1;
            var varData_986 = varData_985.lib;
            var varData_987 = varData_986.Base;
            var varData_988 = varData_986.WordArray;
            var varData_989 = varData_985.algo;
            var varData_990 = varData_989.MD5;
            var varData_991 = {
              keySize: 4,
              hasher: varData_990,
              iterations: 1
            };
            var varData_992 = varData_989.EvpKDF = varData_987.extend({
              cfg: varData_987.extend(varData_991),
              init: function (param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
              },
              compute: function (param_1_2, param_2_1) {
                var varData_993 = this.cfg;
                var varData_994 = varData_993.hasher.create();
                var varData_995 = varData_988.create();
                var varData_996 = varData_995.words;
                var varData_997 = varData_993.keySize;
                var varData_998 = varData_993.iterations;
                while (varData_996.length < varData_997) {
                  if (varData_999) {
                    varData_994.update(varData_999);
                  }
                  var varData_999 = varData_994.update(param_1_2).finalize(param_2_1);
                  varData_994.reset();
                  for (var numericVal_91 = 1; numericVal_91 < varData_998; numericVal_91++) {
                    varData_999 = varData_994.finalize(varData_999);
                    varData_994.reset();
                  }
                  varData_995.concat(varData_999);
                }
                varData_995.sigBytes = varData_997 * 4;
                return varData_995;
              }
            });
            varData_985.EvpKDF = function (param_1_2, param_2_1, param_3) {
              return varData_992.create(param_3).compute(param_1_2, param_2_1);
            };
          })();
          return param_1_1.EvpKDF;
        });
      }
    });
    var varData_1000 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/cipher-core.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_984());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./evpkdf"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          if (!param_1_1.lib.Cipher) {
            (function (param_1_2) {
              var varData_1001 = param_1_1;
              var varData_1002 = varData_1001.lib;
              var varData_1003 = varData_1002.Base;
              var varData_1004 = varData_1002.WordArray;
              var varData_1005 = varData_1002.BufferedBlockAlgorithm;
              var varData_1006 = varData_1001.enc;
              var varData_1007 = varData_1006.Utf8;
              var varData_1008 = varData_1006.Base64;
              var varData_1009 = varData_1001.algo;
              var varData_1010 = varData_1009.EvpKDF;
              var varData_1011 = varData_1002.Cipher = varData_1005.extend({
                cfg: varData_1003.extend(),
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
                  varData_1005.reset.call(this);
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
                  var varData_1012 = this._doFinalize();
                  return varData_1012;
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function () {
                  function handleAction_78(param_1_3) {
                    if (typeof param_1_3 == "string") {
                      return varData_1065;
                    } else {
                      return varData_1052;
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
              var varData_1013 = varData_1002.StreamCipher = varData_1011.extend({
                _doFinalize: function () {
                  var varData_1014 = this._process(true);
                  return varData_1014;
                },
                blockSize: 1
              });
              var varData_1015 = varData_1001.mode = {};
              var varData_1016 = varData_1002.BlockCipherMode = varData_1003.extend({
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
              var varData_1017 = varData_1015.CBC = function () {
                var varData_1018 = varData_1016.extend();
                varData_1018.Encryptor = varData_1018.extend({
                  processBlock: function (param_1_3, param_2_1) {
                    var varData_1019 = this._cipher;
                    var varData_1020 = varData_1019.blockSize;
                    handleAction_79.call(this, param_1_3, param_2_1, varData_1020);
                    varData_1019.encryptBlock(param_1_3, param_2_1);
                    this._prevBlock = param_1_3.slice(param_2_1, param_2_1 + varData_1020);
                  }
                });
                varData_1018.Decryptor = varData_1018.extend({
                  processBlock: function (param_1_3, param_2_1) {
                    var varData_1021 = this._cipher;
                    var varData_1022 = varData_1021.blockSize;
                    var varData_1023 = param_1_3.slice(param_2_1, param_2_1 + varData_1022);
                    varData_1021.decryptBlock(param_1_3, param_2_1);
                    handleAction_79.call(this, param_1_3, param_2_1, varData_1022);
                    this._prevBlock = varData_1023;
                  }
                });
                function handleAction_79(param_1_3, param_2_1, param_3) {
                  var varData_1024 = this._iv;
                  if (varData_1024) {
                    var varData_1025 = varData_1024;
                    this._iv = param_1_2;
                  } else {
                    var varData_1025 = this._prevBlock;
                  }
                  for (var numericVal_91 = 0; numericVal_91 < param_3; numericVal_91++) {
                    param_1_3[param_2_1 + numericVal_91] ^= varData_1025[numericVal_91];
                  }
                }
                return varData_1018;
              }();
              var varData_1026 = varData_1001.pad = {};
              var varData_1027 = varData_1026.Pkcs7 = {
                pad: function (param_1_3, param_2_1) {
                  var varData_1028 = param_2_1 * 4;
                  var varData_1029 = varData_1028 - param_1_3.sigBytes % varData_1028;
                  var varData_1030 = varData_1029 << 24 | varData_1029 << 16 | varData_1029 << 8 | varData_1029;
                  var itemList_2 = [];
                  for (var numericVal_91 = 0; numericVal_91 < varData_1029; numericVal_91 += 4) {
                    itemList_2.push(varData_1030);
                  }
                  var varData_1031 = varData_1004.create(itemList_2, varData_1029);
                  param_1_3.concat(varData_1031);
                },
                unpad: function (param_1_3) {
                  var varData_1032 = param_1_3.words[param_1_3.sigBytes - 1 >>> 2] & 255;
                  param_1_3.sigBytes -= varData_1032;
                }
              };
              var varData_1033 = {
                mode: varData_1017,
                padding: varData_1027
              };
              var varData_1034 = varData_1002.BlockCipher = varData_1011.extend({
                cfg: varData_1011.cfg.extend(varData_1033),
                reset: function () {
                  varData_1011.reset.call(this);
                  var varData_1035 = this.cfg;
                  var varData_1036 = varData_1035.iv;
                  var varData_1037 = varData_1035.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    var varData_1038 = varData_1037.createEncryptor;
                  } else {
                    var varData_1038 = varData_1037.createDecryptor;
                    this._minBufferSize = 1;
                  }
                  if (this._mode && this._mode.__creator == varData_1038) {
                    this._mode.init(this, varData_1036 && varData_1036.words);
                  } else {
                    this._mode = varData_1038.call(varData_1037, this, varData_1036 && varData_1036.words);
                    this._mode.__creator = varData_1038;
                  }
                },
                _doProcessBlock: function (param_1_3, param_2_1) {
                  this._mode.processBlock(param_1_3, param_2_1);
                },
                _doFinalize: function () {
                  var varData_1039 = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    varData_1039.pad(this._data, this.blockSize);
                    var varData_1040 = this._process(true);
                  } else {
                    var varData_1040 = this._process(true);
                    varData_1039.unpad(varData_1040);
                  }
                  return varData_1040;
                },
                blockSize: 4
              });
              var varData_1041 = varData_1002.CipherParams = varData_1003.extend({
                init: function (param_1_3) {
                  this.mixIn(param_1_3);
                },
                toString: function (param_1_3) {
                  return (param_1_3 || this.formatter).stringify(this);
                }
              });
              var varData_1042 = varData_1001.format = {};
              var varData_1043 = varData_1042.OpenSSL = {
                stringify: function (param_1_3) {
                  var varData_1044 = param_1_3.ciphertext;
                  var varData_1045 = param_1_3.salt;
                  if (varData_1045) {
                    var varData_1046 = varData_1004.create([1398893684, 1701076831]).concat(varData_1045).concat(varData_1044);
                  } else {
                    var varData_1046 = varData_1044;
                  }
                  return varData_1046.toString(varData_1008);
                },
                parse: function (param_1_3) {
                  var varData_1047 = varData_1008.parse(param_1_3);
                  var varData_1048 = varData_1047.words;
                  if (varData_1048[0] == 1398893684 && varData_1048[1] == 1701076831) {
                    var varData_1049 = varData_1004.create(varData_1048.slice(2, 4));
                    varData_1048.splice(0, 4);
                    varData_1047.sigBytes -= 16;
                  }
                  var varData_1050 = {
                    ciphertext: varData_1047,
                    salt: varData_1049
                  };
                  return varData_1041.create(varData_1050);
                }
              };
              var varData_1051 = {
                format: varData_1043
              };
              var varData_1052 = varData_1002.SerializableCipher = varData_1003.extend({
                cfg: varData_1003.extend(varData_1051),
                encrypt: function (param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  var varData_1053 = param_1_3.createEncryptor(param_3, param_4);
                  var varData_1054 = varData_1053.finalize(param_2_1);
                  var varData_1055 = varData_1053.cfg;
                  var varData_1056 = {
                    ciphertext: varData_1054,
                    key: param_3,
                    iv: varData_1055.iv,
                    algorithm: param_1_3,
                    mode: varData_1055.mode,
                    padding: varData_1055.padding,
                    blockSize: param_1_3.blockSize,
                    formatter: param_4.format
                  };
                  return varData_1041.create(varData_1056);
                },
                decrypt: function (param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  param_2_1 = this._parse(param_2_1, param_4.format);
                  var varData_1057 = param_1_3.createDecryptor(param_3, param_4).finalize(param_2_1.ciphertext);
                  return varData_1057;
                },
                _parse: function (param_1_3, param_2_1) {
                  if (typeof param_1_3 == "string") {
                    return param_2_1.parse(param_1_3, this);
                  } else {
                    return param_1_3;
                  }
                }
              });
              var varData_1058 = varData_1001.kdf = {};
              var varData_1059 = varData_1058.OpenSSL = {
                execute: function (param_1_3, param_2_1, param_3, param_4) {
                  if (!param_4) {
                    param_4 = varData_1004.random(8);
                  }
                  var varData_1060 = {
                    keySize: param_2_1 + param_3
                  };
                  var varData_1061 = varData_1010.create(varData_1060).compute(param_1_3, param_4);
                  var varData_1062 = varData_1004.create(varData_1061.words.slice(param_2_1), param_3 * 4);
                  varData_1061.sigBytes = param_2_1 * 4;
                  var varData_1063 = {
                    key: varData_1061,
                    iv: varData_1062,
                    salt: param_4
                  };
                  return varData_1041.create(varData_1063);
                }
              };
              var varData_1064 = {
                kdf: varData_1059
              };
              var varData_1065 = varData_1002.PasswordBasedCipher = varData_1052.extend({
                cfg: varData_1052.cfg.extend(varData_1064),
                encrypt: function (param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  var varData_1066 = param_4.kdf.execute(param_3, param_1_3.keySize, param_1_3.ivSize);
                  param_4.iv = varData_1066.iv;
                  var varData_1067 = varData_1052.encrypt.call(this, param_1_3, param_2_1, varData_1066.key, param_4);
                  varData_1067.mixIn(varData_1066);
                  return varData_1067;
                },
                decrypt: function (param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  param_2_1 = this._parse(param_2_1, param_4.format);
                  var varData_1068 = param_4.kdf.execute(param_3, param_1_3.keySize, param_1_3.ivSize, param_2_1.salt);
                  param_4.iv = varData_1068.iv;
                  var varData_1069 = varData_1052.decrypt.call(this, param_1_3, param_2_1, varData_1068.key, param_4);
                  return varData_1069;
                }
              });
            })();
          }
        });
      }
    });
    var varData_1070 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-cfb.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.CFB = function () {
            var varData_1071 = param_1_1.lib.BlockCipherMode.extend();
            varData_1071.Encryptor = varData_1071.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1072 = this._cipher;
                var varData_1073 = varData_1072.blockSize;
                handleAction_80.call(this, param_1_2, param_2_1, varData_1073, varData_1072);
                this._prevBlock = param_1_2.slice(param_2_1, param_2_1 + varData_1073);
              }
            });
            varData_1071.Decryptor = varData_1071.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1074 = this._cipher;
                var varData_1075 = varData_1074.blockSize;
                var varData_1076 = param_1_2.slice(param_2_1, param_2_1 + varData_1075);
                handleAction_80.call(this, param_1_2, param_2_1, varData_1075, varData_1074);
                this._prevBlock = varData_1076;
              }
            });
            function handleAction_80(param_1_2, param_2_1, param_3, param_4) {
              var varData_1077 = this._iv;
              if (varData_1077) {
                var varData_1078 = varData_1077.slice(0);
                this._iv = undefined;
              } else {
                var varData_1078 = this._prevBlock;
              }
              param_4.encryptBlock(varData_1078, 0);
              for (var numericVal_91 = 0; numericVal_91 < param_3; numericVal_91++) {
                param_1_2[param_2_1 + numericVal_91] ^= varData_1078[numericVal_91];
              }
            }
            return varData_1071;
          }();
          return param_1_1.mode.CFB;
        });
      }
    });
    var varData_1079 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.CTR = function () {
            var varData_1080 = param_1_1.lib.BlockCipherMode.extend();
            var varData_1081 = varData_1080.Encryptor = varData_1080.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1082 = this._cipher;
                var varData_1083 = varData_1082.blockSize;
                var varData_1084 = this._iv;
                var varData_1085 = this._counter;
                if (varData_1084) {
                  varData_1085 = this._counter = varData_1084.slice(0);
                  this._iv = undefined;
                }
                var varData_1086 = varData_1085.slice(0);
                varData_1082.encryptBlock(varData_1086, 0);
                varData_1085[varData_1083 - 1] = varData_1085[varData_1083 - 1] + 1 | 0;
                for (var numericVal_91 = 0; numericVal_91 < varData_1083; numericVal_91++) {
                  param_1_2[param_2_1 + numericVal_91] ^= varData_1086[numericVal_91];
                }
              }
            });
            varData_1080.Decryptor = varData_1081;
            return varData_1080;
          }();
          return param_1_1.mode.CTR;
        });
      }
    });
    var varData_1087 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr-gladman.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.CTRGladman = function () {
            var varData_1088 = param_1_1.lib.BlockCipherMode.extend();
            function handleAction_81(param_1_2) {
              if ((param_1_2 >> 24 & 255) === 255) {
                var varData_1089 = param_1_2 >> 16 & 255;
                var varData_1090 = param_1_2 >> 8 & 255;
                var varData_1091 = param_1_2 & 255;
                if (varData_1089 === 255) {
                  varData_1089 = 0;
                  if (varData_1090 === 255) {
                    varData_1090 = 0;
                    if (varData_1091 === 255) {
                      varData_1091 = 0;
                    } else {
                      ++varData_1091;
                    }
                  } else {
                    ++varData_1090;
                  }
                } else {
                  ++varData_1089;
                }
                param_1_2 = 0;
                param_1_2 += varData_1089 << 16;
                param_1_2 += varData_1090 << 8;
                param_1_2 += varData_1091;
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
            var varData_1092 = varData_1088.Encryptor = varData_1088.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1093 = this._cipher;
                var varData_1094 = varData_1093.blockSize;
                var varData_1095 = this._iv;
                var varData_1096 = this._counter;
                if (varData_1095) {
                  varData_1096 = this._counter = varData_1095.slice(0);
                  this._iv = undefined;
                }
                handleAction_82(varData_1096);
                var varData_1097 = varData_1096.slice(0);
                varData_1093.encryptBlock(varData_1097, 0);
                for (var numericVal_91 = 0; numericVal_91 < varData_1094; numericVal_91++) {
                  param_1_2[param_2_1 + numericVal_91] ^= varData_1097[numericVal_91];
                }
              }
            });
            varData_1088.Decryptor = varData_1092;
            return varData_1088;
          }();
          return param_1_1.mode.CTRGladman;
        });
      }
    });
    var varData_1098 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ofb.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.OFB = function () {
            var varData_1099 = param_1_1.lib.BlockCipherMode.extend();
            var varData_1100 = varData_1099.Encryptor = varData_1099.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1101 = this._cipher;
                var varData_1102 = varData_1101.blockSize;
                var varData_1103 = this._iv;
                var varData_1104 = this._keystream;
                if (varData_1103) {
                  varData_1104 = this._keystream = varData_1103.slice(0);
                  this._iv = undefined;
                }
                varData_1101.encryptBlock(varData_1104, 0);
                for (var numericVal_91 = 0; numericVal_91 < varData_1102; numericVal_91++) {
                  param_1_2[param_2_1 + numericVal_91] ^= varData_1104[numericVal_91];
                }
              }
            });
            varData_1099.Decryptor = varData_1100;
            return varData_1099;
          }();
          return param_1_1.mode.OFB;
        });
      }
    });
    var varData_1105 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ecb.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.ECB = function () {
            var varData_1106 = param_1_1.lib.BlockCipherMode.extend();
            varData_1106.Encryptor = varData_1106.extend({
              processBlock: function (param_1_2, param_2_1) {
                this._cipher.encryptBlock(param_1_2, param_2_1);
              }
            });
            varData_1106.Decryptor = varData_1106.extend({
              processBlock: function (param_1_2, param_2_1) {
                this._cipher.decryptBlock(param_1_2, param_2_1);
              }
            });
            return varData_1106;
          }();
          return param_1_1.mode.ECB;
        });
      }
    });
    var varData_1107 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-ansix923.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.pad.AnsiX923 = {
            pad: function (param_1_2, param_2_1) {
              var varData_1108 = param_1_2.sigBytes;
              var varData_1109 = param_2_1 * 4;
              var varData_1110 = varData_1109 - varData_1108 % varData_1109;
              var varData_1111 = varData_1108 + varData_1110 - 1;
              param_1_2.clamp();
              param_1_2.words[varData_1111 >>> 2] |= varData_1110 << 24 - varData_1111 % 4 * 8;
              param_1_2.sigBytes += varData_1110;
            },
            unpad: function (param_1_2) {
              var varData_1112 = param_1_2.words[param_1_2.sigBytes - 1 >>> 2] & 255;
              param_1_2.sigBytes -= varData_1112;
            }
          };
          return param_1_1.pad.Ansix923;
        });
      }
    });
    var varData_1113 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso10126.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.pad.Iso10126 = {
            pad: function (param_1_2, param_2_1) {
              var varData_1114 = param_2_1 * 4;
              var varData_1115 = varData_1114 - param_1_2.sigBytes % varData_1114;
              param_1_2.concat(param_1_1.lib.WordArray.random(varData_1115 - 1)).concat(param_1_1.lib.WordArray.create([varData_1115 << 24], 1));
            },
            unpad: function (param_1_2) {
              var varData_1116 = param_1_2.words[param_1_2.sigBytes - 1 >>> 2] & 255;
              param_1_2.sigBytes -= varData_1116;
            }
          };
          return param_1_1.pad.Iso10126;
        });
      }
    });
    var varData_1117 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso97971.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1000());
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
    var varData_1118 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-zeropadding.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.pad.ZeroPadding = {
            pad: function (param_1_2, param_2_1) {
              var varData_1119 = param_2_1 * 4;
              param_1_2.clamp();
              param_1_2.sigBytes += varData_1119 - (param_1_2.sigBytes % varData_1119 || varData_1119);
            },
            unpad: function (param_1_2) {
              var varData_1120 = param_1_2.words;
              var varData_1121 = param_1_2.sigBytes - 1;
              while (!(varData_1120[varData_1121 >>> 2] >>> 24 - varData_1121 % 4 * 8 & 255)) {
                varData_1121--;
              }
              param_1_2.sigBytes = varData_1121 + 1;
            }
          };
          return param_1_1.pad.ZeroPadding;
        });
      }
    });
    var varData_1122 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-nopadding.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          var varData_1123 = {
            pad: function () {},
            unpad: function () {}
          };
          param_1_1.pad.NoPadding = varData_1123;
          return param_1_1.pad.NoPadding;
        });
      }
    });
    var varData_1124 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/format-hex.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_1125 = param_1_1;
            var varData_1126 = varData_1125.lib;
            var varData_1127 = varData_1126.CipherParams;
            var varData_1128 = varData_1125.enc;
            var varData_1129 = varData_1128.Hex;
            var varData_1130 = varData_1125.format;
            var varData_1131 = varData_1130.Hex = {
              stringify: function (param_1_3) {
                return param_1_3.ciphertext.toString(varData_1129);
              },
              parse: function (param_1_3) {
                var varData_1132 = varData_1129.parse(param_1_3);
                var varData_1133 = {
                  ciphertext: varData_1132
                };
                return varData_1127.create(varData_1133);
              }
            };
          })();
          return param_1_1.format.Hex;
        });
      }
    });
    var varData_1134 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/aes.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_632(), varData_653(), varData_984(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1135 = param_1_1;
            var varData_1136 = varData_1135.lib;
            var varData_1137 = varData_1136.BlockCipher;
            var varData_1138 = varData_1135.algo;
            var itemList_2 = [];
            var itemList_3 = [];
            var itemList_4 = [];
            var itemList_5 = [];
            var itemList_6 = [];
            var itemList_7 = [];
            var itemList_8 = [];
            var itemList_9 = [];
            var itemList_10 = [];
            var itemList_11 = [];
            (function () {
              var itemList_12 = [];
              for (var numericVal_91 = 0; numericVal_91 < 256; numericVal_91++) {
                if (numericVal_91 < 128) {
                  itemList_12[numericVal_91] = numericVal_91 << 1;
                } else {
                  itemList_12[numericVal_91] = numericVal_91 << 1 ^ 283;
                }
              }
              var numericVal_92 = 0;
              var numericVal_93 = 0;
              for (var numericVal_91 = 0; numericVal_91 < 256; numericVal_91++) {
                var varData_1139 = numericVal_93 ^ numericVal_93 << 1 ^ numericVal_93 << 2 ^ numericVal_93 << 3 ^ numericVal_93 << 4;
                varData_1139 = varData_1139 >>> 8 ^ varData_1139 & 255 ^ 99;
                itemList_2[numericVal_92] = varData_1139;
                itemList_3[varData_1139] = numericVal_92;
                var varData_1140 = itemList_12[numericVal_92];
                var varData_1141 = itemList_12[varData_1140];
                var varData_1142 = itemList_12[varData_1141];
                var varData_1143 = itemList_12[varData_1139] * 257 ^ varData_1139 * 16843008;
                itemList_4[numericVal_92] = varData_1143 << 24 | varData_1143 >>> 8;
                itemList_5[numericVal_92] = varData_1143 << 16 | varData_1143 >>> 16;
                itemList_6[numericVal_92] = varData_1143 << 8 | varData_1143 >>> 24;
                itemList_7[numericVal_92] = varData_1143;
                var varData_1143 = varData_1142 * 16843009 ^ varData_1141 * 65537 ^ varData_1140 * 257 ^ numericVal_92 * 16843008;
                itemList_8[varData_1139] = varData_1143 << 24 | varData_1143 >>> 8;
                itemList_9[varData_1139] = varData_1143 << 16 | varData_1143 >>> 16;
                itemList_10[varData_1139] = varData_1143 << 8 | varData_1143 >>> 24;
                itemList_11[varData_1139] = varData_1143;
                if (!numericVal_92) {
                  numericVal_92 = numericVal_93 = 1;
                } else {
                  numericVal_92 = varData_1140 ^ itemList_12[itemList_12[itemList_12[varData_1142 ^ varData_1140]]];
                  numericVal_93 ^= itemList_12[itemList_12[numericVal_93]];
                }
              }
            })();
            var itemList_12 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            var varData_1144 = varData_1138.AES = varData_1137.extend({
              _doReset: function () {
                if (this._nRounds && this._keyPriorReset === this._key) {
                  return;
                }
                var varData_1145 = this._keyPriorReset = this._key;
                var varData_1146 = varData_1145.words;
                var varData_1147 = varData_1145.sigBytes / 4;
                var varData_1148 = this._nRounds = varData_1147 + 6;
                var varData_1149 = (varData_1148 + 1) * 4;
                var varData_1150 = this._keySchedule = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_1149; numericVal_91++) {
                  if (numericVal_91 < varData_1147) {
                    varData_1150[numericVal_91] = varData_1146[numericVal_91];
                  } else {
                    var varData_1151 = varData_1150[numericVal_91 - 1];
                    if (!(numericVal_91 % varData_1147)) {
                      varData_1151 = varData_1151 << 8 | varData_1151 >>> 24;
                      varData_1151 = itemList_2[varData_1151 >>> 24] << 24 | itemList_2[varData_1151 >>> 16 & 255] << 16 | itemList_2[varData_1151 >>> 8 & 255] << 8 | itemList_2[varData_1151 & 255];
                      varData_1151 ^= itemList_12[numericVal_91 / varData_1147 | 0] << 24;
                    } else if (varData_1147 > 6 && numericVal_91 % varData_1147 == 4) {
                      varData_1151 = itemList_2[varData_1151 >>> 24] << 24 | itemList_2[varData_1151 >>> 16 & 255] << 16 | itemList_2[varData_1151 >>> 8 & 255] << 8 | itemList_2[varData_1151 & 255];
                    }
                    varData_1150[numericVal_91] = varData_1150[numericVal_91 - varData_1147] ^ varData_1151;
                  }
                }
                var varData_1152 = this._invKeySchedule = [];
                for (var numericVal_92 = 0; numericVal_92 < varData_1149; numericVal_92++) {
                  var numericVal_91 = varData_1149 - numericVal_92;
                  if (numericVal_92 % 4) {
                    var varData_1151 = varData_1150[numericVal_91];
                  } else {
                    var varData_1151 = varData_1150[numericVal_91 - 4];
                  }
                  if (numericVal_92 < 4 || numericVal_91 <= 4) {
                    varData_1152[numericVal_92] = varData_1151;
                  } else {
                    varData_1152[numericVal_92] = itemList_8[itemList_2[varData_1151 >>> 24]] ^ itemList_9[itemList_2[varData_1151 >>> 16 & 255]] ^ itemList_10[itemList_2[varData_1151 >>> 8 & 255]] ^ itemList_11[itemList_2[varData_1151 & 255]];
                  }
                }
              },
              encryptBlock: function (param_1_2, param_2_1) {
                this._doCryptBlock(param_1_2, param_2_1, this._keySchedule, itemList_4, itemList_5, itemList_6, itemList_7, itemList_2);
              },
              decryptBlock: function (param_1_2, param_2_1) {
                var varData_1153 = param_1_2[param_2_1 + 1];
                param_1_2[param_2_1 + 1] = param_1_2[param_2_1 + 3];
                param_1_2[param_2_1 + 3] = varData_1153;
                this._doCryptBlock(param_1_2, param_2_1, this._invKeySchedule, itemList_8, itemList_9, itemList_10, itemList_11, itemList_3);
                var varData_1153 = param_1_2[param_2_1 + 1];
                param_1_2[param_2_1 + 1] = param_1_2[param_2_1 + 3];
                param_1_2[param_2_1 + 3] = varData_1153;
              },
              _doCryptBlock: function (param_1_2, param_2_1, param_3, param_4, param_5, param_6, param_7, param_8) {
                var varData_1154 = this._nRounds;
                var varData_1155 = param_1_2[param_2_1] ^ param_3[0];
                var varData_1156 = param_1_2[param_2_1 + 1] ^ param_3[1];
                var varData_1157 = param_1_2[param_2_1 + 2] ^ param_3[2];
                var varData_1158 = param_1_2[param_2_1 + 3] ^ param_3[3];
                var numericVal_91 = 4;
                for (var numericVal_92 = 1; numericVal_92 < varData_1154; numericVal_92++) {
                  var varData_1159 = param_4[varData_1155 >>> 24] ^ param_5[varData_1156 >>> 16 & 255] ^ param_6[varData_1157 >>> 8 & 255] ^ param_7[varData_1158 & 255] ^ param_3[numericVal_91++];
                  var varData_1160 = param_4[varData_1156 >>> 24] ^ param_5[varData_1157 >>> 16 & 255] ^ param_6[varData_1158 >>> 8 & 255] ^ param_7[varData_1155 & 255] ^ param_3[numericVal_91++];
                  var varData_1161 = param_4[varData_1157 >>> 24] ^ param_5[varData_1158 >>> 16 & 255] ^ param_6[varData_1155 >>> 8 & 255] ^ param_7[varData_1156 & 255] ^ param_3[numericVal_91++];
                  var varData_1162 = param_4[varData_1158 >>> 24] ^ param_5[varData_1155 >>> 16 & 255] ^ param_6[varData_1156 >>> 8 & 255] ^ param_7[varData_1157 & 255] ^ param_3[numericVal_91++];
                  varData_1155 = varData_1159;
                  varData_1156 = varData_1160;
                  varData_1157 = varData_1161;
                  varData_1158 = varData_1162;
                }
                var varData_1159 = (param_8[varData_1155 >>> 24] << 24 | param_8[varData_1156 >>> 16 & 255] << 16 | param_8[varData_1157 >>> 8 & 255] << 8 | param_8[varData_1158 & 255]) ^ param_3[numericVal_91++];
                var varData_1160 = (param_8[varData_1156 >>> 24] << 24 | param_8[varData_1157 >>> 16 & 255] << 16 | param_8[varData_1158 >>> 8 & 255] << 8 | param_8[varData_1155 & 255]) ^ param_3[numericVal_91++];
                var varData_1161 = (param_8[varData_1157 >>> 24] << 24 | param_8[varData_1158 >>> 16 & 255] << 16 | param_8[varData_1155 >>> 8 & 255] << 8 | param_8[varData_1156 & 255]) ^ param_3[numericVal_91++];
                var varData_1162 = (param_8[varData_1158 >>> 24] << 24 | param_8[varData_1155 >>> 16 & 255] << 16 | param_8[varData_1156 >>> 8 & 255] << 8 | param_8[varData_1157 & 255]) ^ param_3[numericVal_91++];
                param_1_2[param_2_1] = varData_1159;
                param_1_2[param_2_1 + 1] = varData_1160;
                param_1_2[param_2_1 + 2] = varData_1161;
                param_1_2[param_2_1 + 3] = varData_1162;
              },
              keySize: 8
            });
            varData_1135.AES = varData_1137._createHelper(varData_1144);
          })();
          return param_1_1.AES;
        });
      }
    });
    var varData_1163 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/tripledes.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_632(), varData_653(), varData_984(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1164 = param_1_1;
            var varData_1165 = varData_1164.lib;
            var varData_1166 = varData_1165.WordArray;
            var varData_1167 = varData_1165.BlockCipher;
            var varData_1168 = varData_1164.algo;
            var itemList_2 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
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
            var varData_1169 = varData_1168.DES = varData_1167.extend({
              _doReset: function () {
                var varData_1170 = this._key;
                var varData_1171 = varData_1170.words;
                var itemList_7 = [];
                for (var numericVal_91 = 0; numericVal_91 < 56; numericVal_91++) {
                  var varData_1172 = itemList_2[numericVal_91] - 1;
                  itemList_7[numericVal_91] = varData_1171[varData_1172 >>> 5] >>> 31 - varData_1172 % 32 & 1;
                }
                var varData_1173 = this._subKeys = [];
                for (var numericVal_92 = 0; numericVal_92 < 16; numericVal_92++) {
                  var varData_1174 = varData_1173[numericVal_92] = [];
                  var varData_1175 = itemList_4[numericVal_92];
                  for (var numericVal_91 = 0; numericVal_91 < 24; numericVal_91++) {
                    varData_1174[numericVal_91 / 6 | 0] |= itemList_7[(itemList_3[numericVal_91] - 1 + varData_1175) % 28] << 31 - numericVal_91 % 6;
                    varData_1174[4 + (numericVal_91 / 6 | 0)] |= itemList_7[28 + (itemList_3[numericVal_91 + 24] - 1 + varData_1175) % 28] << 31 - numericVal_91 % 6;
                  }
                  varData_1174[0] = varData_1174[0] << 1 | varData_1174[0] >>> 31;
                  for (var numericVal_91 = 1; numericVal_91 < 7; numericVal_91++) {
                    varData_1174[numericVal_91] = varData_1174[numericVal_91] >>> (numericVal_91 - 1) * 4 + 3;
                  }
                  varData_1174[7] = varData_1174[7] << 5 | varData_1174[7] >>> 27;
                }
                var varData_1176 = this._invSubKeys = [];
                for (var numericVal_91 = 0; numericVal_91 < 16; numericVal_91++) {
                  varData_1176[numericVal_91] = varData_1173[15 - numericVal_91];
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
                for (var numericVal_91 = 0; numericVal_91 < 16; numericVal_91++) {
                  var varData_1177 = param_3[numericVal_91];
                  var varData_1178 = this._lBlock;
                  var varData_1179 = this._rBlock;
                  var numericVal_92 = 0;
                  for (var numericVal_93 = 0; numericVal_93 < 8; numericVal_93++) {
                    numericVal_92 |= itemList_5[numericVal_93][((varData_1179 ^ varData_1177[numericVal_93]) & itemList_6[numericVal_93]) >>> 0];
                  }
                  this._lBlock = varData_1179;
                  this._rBlock = varData_1178 ^ numericVal_92;
                }
                var varData_1180 = this._lBlock;
                this._lBlock = this._rBlock;
                this._rBlock = varData_1180;
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
              var varData_1181 = (this._lBlock >>> param_1_2 ^ this._rBlock) & param_2_1;
              this._rBlock ^= varData_1181;
              this._lBlock ^= varData_1181 << param_1_2;
            }
            function handleAction_84(param_1_2, param_2_1) {
              var varData_1182 = (this._rBlock >>> param_1_2 ^ this._lBlock) & param_2_1;
              this._lBlock ^= varData_1182;
              this._rBlock ^= varData_1182 << param_1_2;
            }
            varData_1164.DES = varData_1167._createHelper(varData_1169);
            var varData_1183 = varData_1168.TripleDES = varData_1167.extend({
              _doReset: function () {
                var varData_1184 = this._key;
                var varData_1185 = varData_1184.words;
                this._des1 = varData_1169.createEncryptor(varData_1166.create(varData_1185.slice(0, 2)));
                this._des2 = varData_1169.createEncryptor(varData_1166.create(varData_1185.slice(2, 4)));
                this._des3 = varData_1169.createEncryptor(varData_1166.create(varData_1185.slice(4, 6)));
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
            varData_1164.TripleDES = varData_1167._createHelper(varData_1183);
          })();
          return param_1_1.TripleDES;
        });
      }
    });
    var varData_1186 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rc4.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_632(), varData_653(), varData_984(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1187 = param_1_1;
            var varData_1188 = varData_1187.lib;
            var varData_1189 = varData_1188.StreamCipher;
            var varData_1190 = varData_1187.algo;
            var varData_1191 = varData_1190.RC4 = varData_1189.extend({
              _doReset: function () {
                var varData_1192 = this._key;
                var varData_1193 = varData_1192.words;
                var varData_1194 = varData_1192.sigBytes;
                var varData_1195 = this._S = [];
                for (var numericVal_91 = 0; numericVal_91 < 256; numericVal_91++) {
                  varData_1195[numericVal_91] = numericVal_91;
                }
                for (var numericVal_91 = 0, numericVal_92 = 0; numericVal_91 < 256; numericVal_91++) {
                  var varData_1196 = numericVal_91 % varData_1194;
                  var varData_1197 = varData_1193[varData_1196 >>> 2] >>> 24 - varData_1196 % 4 * 8 & 255;
                  numericVal_92 = (numericVal_92 + varData_1195[numericVal_91] + varData_1197) % 256;
                  var varData_1198 = varData_1195[numericVal_91];
                  varData_1195[numericVal_91] = varData_1195[numericVal_92];
                  varData_1195[numericVal_92] = varData_1198;
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
              var varData_1199 = this._S;
              var varData_1200 = this._i;
              var varData_1201 = this._j;
              var numericVal_91 = 0;
              for (var numericVal_92 = 0; numericVal_92 < 4; numericVal_92++) {
                varData_1200 = (varData_1200 + 1) % 256;
                varData_1201 = (varData_1201 + varData_1199[varData_1200]) % 256;
                var varData_1202 = varData_1199[varData_1200];
                varData_1199[varData_1200] = varData_1199[varData_1201];
                varData_1199[varData_1201] = varData_1202;
                numericVal_91 |= varData_1199[(varData_1199[varData_1200] + varData_1199[varData_1201]) % 256] << 24 - numericVal_92 * 8;
              }
              this._i = varData_1200;
              this._j = varData_1201;
              return numericVal_91;
            }
            varData_1187.RC4 = varData_1189._createHelper(varData_1191);
            var varData_1203 = varData_1190.RC4Drop = varData_1191.extend({
              cfg: varData_1191.cfg.extend({
                drop: 192
              }),
              _doReset: function () {
                varData_1191._doReset.call(this);
                for (var loopIdx = this.cfg.drop; loopIdx > 0; loopIdx--) {
                  handleAction_85.call(this);
                }
              }
            });
            varData_1187.RC4Drop = varData_1189._createHelper(varData_1203);
          })();
          return param_1_1.RC4;
        });
      }
    });
    var varData_1204 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_632(), varData_653(), varData_984(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1205 = param_1_1;
            var varData_1206 = varData_1205.lib;
            var varData_1207 = varData_1206.StreamCipher;
            var varData_1208 = varData_1205.algo;
            var itemList_2 = [];
            var itemList_3 = [];
            var itemList_4 = [];
            var varData_1209 = varData_1208.Rabbit = varData_1207.extend({
              _doReset: function () {
                var varData_1210 = this._key.words;
                var varData_1211 = this.cfg.iv;
                for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                  varData_1210[numericVal_91] = (varData_1210[numericVal_91] << 8 | varData_1210[numericVal_91] >>> 24) & 16711935 | (varData_1210[numericVal_91] << 24 | varData_1210[numericVal_91] >>> 8) & -16711936;
                }
                var varData_1212 = this._X = [varData_1210[0], varData_1210[3] << 16 | varData_1210[2] >>> 16, varData_1210[1], varData_1210[0] << 16 | varData_1210[3] >>> 16, varData_1210[2], varData_1210[1] << 16 | varData_1210[0] >>> 16, varData_1210[3], varData_1210[2] << 16 | varData_1210[1] >>> 16];
                var varData_1213 = this._C = [varData_1210[2] << 16 | varData_1210[2] >>> 16, varData_1210[0] & -65536 | varData_1210[1] & 65535, varData_1210[3] << 16 | varData_1210[3] >>> 16, varData_1210[1] & -65536 | varData_1210[2] & 65535, varData_1210[0] << 16 | varData_1210[0] >>> 16, varData_1210[2] & -65536 | varData_1210[3] & 65535, varData_1210[1] << 16 | varData_1210[1] >>> 16, varData_1210[3] & -65536 | varData_1210[0] & 65535];
                this._b = 0;
                for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                  handleAction_86.call(this);
                }
                for (var numericVal_91 = 0; numericVal_91 < 8; numericVal_91++) {
                  varData_1213[numericVal_91] ^= varData_1212[numericVal_91 + 4 & 7];
                }
                if (varData_1211) {
                  var varData_1214 = varData_1211.words;
                  var varData_1215 = varData_1214[0];
                  var varData_1216 = varData_1214[1];
                  var varData_1217 = (varData_1215 << 8 | varData_1215 >>> 24) & 16711935 | (varData_1215 << 24 | varData_1215 >>> 8) & -16711936;
                  var varData_1218 = (varData_1216 << 8 | varData_1216 >>> 24) & 16711935 | (varData_1216 << 24 | varData_1216 >>> 8) & -16711936;
                  var varData_1219 = varData_1217 >>> 16 | varData_1218 & -65536;
                  var varData_1220 = varData_1218 << 16 | varData_1217 & 65535;
                  varData_1213[0] ^= varData_1217;
                  varData_1213[1] ^= varData_1219;
                  varData_1213[2] ^= varData_1218;
                  varData_1213[3] ^= varData_1220;
                  varData_1213[4] ^= varData_1217;
                  varData_1213[5] ^= varData_1219;
                  varData_1213[6] ^= varData_1218;
                  varData_1213[7] ^= varData_1220;
                  for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                    handleAction_86.call(this);
                  }
                }
              },
              _doProcessBlock: function (param_1_2, param_2_1) {
                var varData_1221 = this._X;
                handleAction_86.call(this);
                itemList_2[0] = varData_1221[0] ^ varData_1221[5] >>> 16 ^ varData_1221[3] << 16;
                itemList_2[1] = varData_1221[2] ^ varData_1221[7] >>> 16 ^ varData_1221[5] << 16;
                itemList_2[2] = varData_1221[4] ^ varData_1221[1] >>> 16 ^ varData_1221[7] << 16;
                itemList_2[3] = varData_1221[6] ^ varData_1221[3] >>> 16 ^ varData_1221[1] << 16;
                for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                  itemList_2[numericVal_91] = (itemList_2[numericVal_91] << 8 | itemList_2[numericVal_91] >>> 24) & 16711935 | (itemList_2[numericVal_91] << 24 | itemList_2[numericVal_91] >>> 8) & -16711936;
                  param_1_2[param_2_1 + numericVal_91] ^= itemList_2[numericVal_91];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function handleAction_86() {
              var varData_1222 = this._X;
              var varData_1223 = this._C;
              for (var numericVal_91 = 0; numericVal_91 < 8; numericVal_91++) {
                itemList_3[numericVal_91] = varData_1223[numericVal_91];
              }
              varData_1223[0] = varData_1223[0] + 1295307597 + this._b | 0;
              varData_1223[1] = varData_1223[1] + 3545052371 + (varData_1223[0] >>> 0 < itemList_3[0] >>> 0 ? 1 : 0) | 0;
              varData_1223[2] = varData_1223[2] + 886263092 + (varData_1223[1] >>> 0 < itemList_3[1] >>> 0 ? 1 : 0) | 0;
              varData_1223[3] = varData_1223[3] + 1295307597 + (varData_1223[2] >>> 0 < itemList_3[2] >>> 0 ? 1 : 0) | 0;
              varData_1223[4] = varData_1223[4] + 3545052371 + (varData_1223[3] >>> 0 < itemList_3[3] >>> 0 ? 1 : 0) | 0;
              varData_1223[5] = varData_1223[5] + 886263092 + (varData_1223[4] >>> 0 < itemList_3[4] >>> 0 ? 1 : 0) | 0;
              varData_1223[6] = varData_1223[6] + 1295307597 + (varData_1223[5] >>> 0 < itemList_3[5] >>> 0 ? 1 : 0) | 0;
              varData_1223[7] = varData_1223[7] + 3545052371 + (varData_1223[6] >>> 0 < itemList_3[6] >>> 0 ? 1 : 0) | 0;
              this._b = varData_1223[7] >>> 0 < itemList_3[7] >>> 0 ? 1 : 0;
              for (var numericVal_91 = 0; numericVal_91 < 8; numericVal_91++) {
                var varData_1224 = varData_1222[numericVal_91] + varData_1223[numericVal_91];
                var varData_1225 = varData_1224 & 65535;
                var varData_1226 = varData_1224 >>> 16;
                var varData_1227 = ((varData_1225 * varData_1225 >>> 17) + varData_1225 * varData_1226 >>> 15) + varData_1226 * varData_1226;
                var varData_1228 = ((varData_1224 & -65536) * varData_1224 | 0) + ((varData_1224 & 65535) * varData_1224 | 0);
                itemList_4[numericVal_91] = varData_1227 ^ varData_1228;
              }
              varData_1222[0] = itemList_4[0] + (itemList_4[7] << 16 | itemList_4[7] >>> 16) + (itemList_4[6] << 16 | itemList_4[6] >>> 16) | 0;
              varData_1222[1] = itemList_4[1] + (itemList_4[0] << 8 | itemList_4[0] >>> 24) + itemList_4[7] | 0;
              varData_1222[2] = itemList_4[2] + (itemList_4[1] << 16 | itemList_4[1] >>> 16) + (itemList_4[0] << 16 | itemList_4[0] >>> 16) | 0;
              varData_1222[3] = itemList_4[3] + (itemList_4[2] << 8 | itemList_4[2] >>> 24) + itemList_4[1] | 0;
              varData_1222[4] = itemList_4[4] + (itemList_4[3] << 16 | itemList_4[3] >>> 16) + (itemList_4[2] << 16 | itemList_4[2] >>> 16) | 0;
              varData_1222[5] = itemList_4[5] + (itemList_4[4] << 8 | itemList_4[4] >>> 24) + itemList_4[3] | 0;
              varData_1222[6] = itemList_4[6] + (itemList_4[5] << 16 | itemList_4[5] >>> 16) + (itemList_4[4] << 16 | itemList_4[4] >>> 16) | 0;
              varData_1222[7] = itemList_4[7] + (itemList_4[6] << 8 | itemList_4[6] >>> 24) + itemList_4[5] | 0;
            }
            varData_1205.Rabbit = varData_1207._createHelper(varData_1209);
          })();
          return param_1_1.Rabbit;
        });
      }
    });
    var varData_1229 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit-legacy.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_632(), varData_653(), varData_984(), varData_1000());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1230 = param_1_1;
            var varData_1231 = varData_1230.lib;
            var varData_1232 = varData_1231.StreamCipher;
            var varData_1233 = varData_1230.algo;
            var itemList_2 = [];
            var itemList_3 = [];
            var itemList_4 = [];
            var varData_1234 = varData_1233.RabbitLegacy = varData_1232.extend({
              _doReset: function () {
                var varData_1235 = this._key.words;
                var varData_1236 = this.cfg.iv;
                var varData_1237 = this._X = [varData_1235[0], varData_1235[3] << 16 | varData_1235[2] >>> 16, varData_1235[1], varData_1235[0] << 16 | varData_1235[3] >>> 16, varData_1235[2], varData_1235[1] << 16 | varData_1235[0] >>> 16, varData_1235[3], varData_1235[2] << 16 | varData_1235[1] >>> 16];
                var varData_1238 = this._C = [varData_1235[2] << 16 | varData_1235[2] >>> 16, varData_1235[0] & -65536 | varData_1235[1] & 65535, varData_1235[3] << 16 | varData_1235[3] >>> 16, varData_1235[1] & -65536 | varData_1235[2] & 65535, varData_1235[0] << 16 | varData_1235[0] >>> 16, varData_1235[2] & -65536 | varData_1235[3] & 65535, varData_1235[1] << 16 | varData_1235[1] >>> 16, varData_1235[3] & -65536 | varData_1235[0] & 65535];
                this._b = 0;
                for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                  handleAction_87.call(this);
                }
                for (var numericVal_91 = 0; numericVal_91 < 8; numericVal_91++) {
                  varData_1238[numericVal_91] ^= varData_1237[numericVal_91 + 4 & 7];
                }
                if (varData_1236) {
                  var varData_1239 = varData_1236.words;
                  var varData_1240 = varData_1239[0];
                  var varData_1241 = varData_1239[1];
                  var varData_1242 = (varData_1240 << 8 | varData_1240 >>> 24) & 16711935 | (varData_1240 << 24 | varData_1240 >>> 8) & -16711936;
                  var varData_1243 = (varData_1241 << 8 | varData_1241 >>> 24) & 16711935 | (varData_1241 << 24 | varData_1241 >>> 8) & -16711936;
                  var varData_1244 = varData_1242 >>> 16 | varData_1243 & -65536;
                  var varData_1245 = varData_1243 << 16 | varData_1242 & 65535;
                  varData_1238[0] ^= varData_1242;
                  varData_1238[1] ^= varData_1244;
                  varData_1238[2] ^= varData_1243;
                  varData_1238[3] ^= varData_1245;
                  varData_1238[4] ^= varData_1242;
                  varData_1238[5] ^= varData_1244;
                  varData_1238[6] ^= varData_1243;
                  varData_1238[7] ^= varData_1245;
                  for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                    handleAction_87.call(this);
                  }
                }
              },
              _doProcessBlock: function (param_1_2, param_2_1) {
                var varData_1246 = this._X;
                handleAction_87.call(this);
                itemList_2[0] = varData_1246[0] ^ varData_1246[5] >>> 16 ^ varData_1246[3] << 16;
                itemList_2[1] = varData_1246[2] ^ varData_1246[7] >>> 16 ^ varData_1246[5] << 16;
                itemList_2[2] = varData_1246[4] ^ varData_1246[1] >>> 16 ^ varData_1246[7] << 16;
                itemList_2[3] = varData_1246[6] ^ varData_1246[3] >>> 16 ^ varData_1246[1] << 16;
                for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                  itemList_2[numericVal_91] = (itemList_2[numericVal_91] << 8 | itemList_2[numericVal_91] >>> 24) & 16711935 | (itemList_2[numericVal_91] << 24 | itemList_2[numericVal_91] >>> 8) & -16711936;
                  param_1_2[param_2_1 + numericVal_91] ^= itemList_2[numericVal_91];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function handleAction_87() {
              var varData_1247 = this._X;
              var varData_1248 = this._C;
              for (var numericVal_91 = 0; numericVal_91 < 8; numericVal_91++) {
                itemList_3[numericVal_91] = varData_1248[numericVal_91];
              }
              varData_1248[0] = varData_1248[0] + 1295307597 + this._b | 0;
              varData_1248[1] = varData_1248[1] + 3545052371 + (varData_1248[0] >>> 0 < itemList_3[0] >>> 0 ? 1 : 0) | 0;
              varData_1248[2] = varData_1248[2] + 886263092 + (varData_1248[1] >>> 0 < itemList_3[1] >>> 0 ? 1 : 0) | 0;
              varData_1248[3] = varData_1248[3] + 1295307597 + (varData_1248[2] >>> 0 < itemList_3[2] >>> 0 ? 1 : 0) | 0;
              varData_1248[4] = varData_1248[4] + 3545052371 + (varData_1248[3] >>> 0 < itemList_3[3] >>> 0 ? 1 : 0) | 0;
              varData_1248[5] = varData_1248[5] + 886263092 + (varData_1248[4] >>> 0 < itemList_3[4] >>> 0 ? 1 : 0) | 0;
              varData_1248[6] = varData_1248[6] + 1295307597 + (varData_1248[5] >>> 0 < itemList_3[5] >>> 0 ? 1 : 0) | 0;
              varData_1248[7] = varData_1248[7] + 3545052371 + (varData_1248[6] >>> 0 < itemList_3[6] >>> 0 ? 1 : 0) | 0;
              this._b = varData_1248[7] >>> 0 < itemList_3[7] >>> 0 ? 1 : 0;
              for (var numericVal_91 = 0; numericVal_91 < 8; numericVal_91++) {
                var varData_1249 = varData_1247[numericVal_91] + varData_1248[numericVal_91];
                var varData_1250 = varData_1249 & 65535;
                var varData_1251 = varData_1249 >>> 16;
                var varData_1252 = ((varData_1250 * varData_1250 >>> 17) + varData_1250 * varData_1251 >>> 15) + varData_1251 * varData_1251;
                var varData_1253 = ((varData_1249 & -65536) * varData_1249 | 0) + ((varData_1249 & 65535) * varData_1249 | 0);
                itemList_4[numericVal_91] = varData_1252 ^ varData_1253;
              }
              varData_1247[0] = itemList_4[0] + (itemList_4[7] << 16 | itemList_4[7] >>> 16) + (itemList_4[6] << 16 | itemList_4[6] >>> 16) | 0;
              varData_1247[1] = itemList_4[1] + (itemList_4[0] << 8 | itemList_4[0] >>> 24) + itemList_4[7] | 0;
              varData_1247[2] = itemList_4[2] + (itemList_4[1] << 16 | itemList_4[1] >>> 16) + (itemList_4[0] << 16 | itemList_4[0] >>> 16) | 0;
              varData_1247[3] = itemList_4[3] + (itemList_4[2] << 8 | itemList_4[2] >>> 24) + itemList_4[1] | 0;
              varData_1247[4] = itemList_4[4] + (itemList_4[3] << 16 | itemList_4[3] >>> 16) + (itemList_4[2] << 16 | itemList_4[2] >>> 16) | 0;
              varData_1247[5] = itemList_4[5] + (itemList_4[4] << 8 | itemList_4[4] >>> 24) + itemList_4[3] | 0;
              varData_1247[6] = itemList_4[6] + (itemList_4[5] << 16 | itemList_4[5] >>> 16) + (itemList_4[4] << 16 | itemList_4[4] >>> 16) | 0;
              varData_1247[7] = itemList_4[7] + (itemList_4[6] << 8 | itemList_4[6] >>> 24) + itemList_4[5] | 0;
            }
            varData_1230.RabbitLegacy = varData_1232._createHelper(varData_1234);
          })();
          return param_1_1.RabbitLegacy;
        });
      }
    });
    var varData_1254 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/index.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_597(), varData_611(), varData_618(), varData_632(), varData_653(), varData_697(), varData_717(), varData_749(), varData_757(), varData_847(), varData_856(), varData_902(), varData_943(), varData_961(), varData_984(), varData_1000(), varData_1070(), varData_1079(), varData_1087(), varData_1098(), varData_1105(), varData_1107(), varData_1113(), varData_1117(), varData_1118(), varData_1122(), varData_1124(), varData_1134(), varData_1163(), varData_1186(), varData_1204(), varData_1229());
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
    var varData_1255 = {
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
    var varData_1256 = {};
    var varData_1257 = {
      MathUtils: () => varData_1402
    };
    varData_539(varData_1256, varData_1257);
    var varData_1258;
    var varData_1259;
    var varData_1260 = class _0x2eb48e {
      constructor(param_1, param_2, param_3) {
        varData_546(this, varData_1258);
        const varData_1261 = varData_549(this, varData_1258, varData_1259).call(this, param_1, param_2, param_3);
        this.x = varData_1261.x;
        this.y = varData_1261.y;
        this.z = varData_1261.z;
      }
      equals(param_1, param_2, param_3) {
        const varData_1262 = varData_549(this, varData_1258, varData_1259).call(this, param_1, param_2, param_3);
        return this.x === varData_1262.x && this.y === varData_1262.y && this.z === varData_1262.z;
      }
      add(param_1, param_2, param_3, param_4) {
        let varData_1263 = varData_549(this, varData_1258, varData_1259).call(this, param_1, param_2, param_3);
        this.x += param_4 ? varData_1263.x * param_4 : varData_1263.x;
        this.y += param_4 ? varData_1263.y * param_4 : varData_1263.y;
        this.z += param_4 ? varData_1263.z * param_4 : varData_1263.z;
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
        const varData_1264 = varData_549(this, varData_1258, varData_1259).call(this, param_1, param_2, param_3);
        this.x -= param_4 ? varData_1264.x * param_4 : varData_1264.x;
        this.y -= param_4 ? varData_1264.y * param_4 : varData_1264.y;
        this.z -= param_4 ? varData_1264.z * param_4 : varData_1264.z;
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
        const varData_1265 = varData_549(this, varData_1258, varData_1259).call(this, param_1, param_2, param_3);
        this.x *= varData_1265.x;
        this.y *= varData_1265.y;
        this.z *= varData_1265.z;
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
        const varData_1266 = varData_549(this, varData_1258, varData_1259).call(this, param_1, param_2, param_3);
        this.x /= varData_1266.x;
        this.y /= varData_1266.y;
        this.z /= varData_1266.z;
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
        const varData_1267 = varData_549(this, varData_1258, varData_1259).call(this, param_1, param_2, param_3);
        return new _0x2eb48e((this.x + varData_1267.x) / 2, (this.y + varData_1267.y) / 2, (this.z + varData_1267.z) / 2);
      }
      getDistance(param_1, param_2, param_3) {
        const [_0x21a190, _0x3e7575, _0x423677] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y, param_1.z] : [param_1, param_2, param_3];
        if (typeof _0x21a190 !== "number" || typeof _0x3e7575 !== "number" || typeof _0x423677 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x318279, _0x44f742, _0x20c95c] = [this.x - _0x21a190, this.y - _0x3e7575, this.z - _0x423677];
        return Math.sqrt(_0x318279 * _0x318279 + _0x44f742 * _0x44f742 + _0x20c95c * _0x20c95c);
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
        var varData_1268 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return varData_1268;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1258 = new WeakSet();
    varData_1259 = function (param_1, param_2, param_3) {
      let varData_1269 = {
        x: 0,
        y: 0,
        z: 0
      };
      if (param_1 instanceof varData_1260) {
        varData_1269 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1270 = {
          x: param_1[0],
          y: param_1[1],
          z: param_1[2]
        };
        varData_1269 = varData_1270;
      } else if (typeof param_1 === "object") {
        varData_1269 = param_1;
      } else {
        var varData_1271 = {
          x: param_1,
          y: param_2,
          z: param_3
        };
        varData_1269 = varData_1271;
      }
      if (typeof varData_1269.x !== "number" || typeof varData_1269.y !== "number" || typeof varData_1269.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1269;
    };
    var varData_1272 = varData_1260;
    var varData_1273;
    var varData_1274;
    var varData_1275 = class {
      constructor(param_1) {
        varData_546(this, varData_1273, undefined);
        varData_546(this, varData_1274, undefined);
        varData_547(this, varData_1274, param_1 ?? 5);
        varData_547(this, varData_1273, new Map());
      }
      setTTL(param_1) {
        varData_547(this, varData_1274, param_1);
      }
      set(param_1, param_2, param_3) {
        varData_545(this, varData_1273).set(param_1, {
          value: param_2,
          expiration: Date.now() + (param_3 ?? varData_545(this, varData_1274)) * 1000
        });
        return this;
      }
      get(param_1, _0x296d43 = false) {
        const varData_1276 = varData_545(this, varData_1273).get(param_1);
        const varData_1277 = varData_1276 ? _0x296d43 ? true : varData_1276.expiration > Date.now() : false;
        if (!varData_1276 || !varData_1277) {
          if (varData_1276) {
            varData_545(this, varData_1273).delete(param_1);
          }
          return;
        }
        return varData_1276.value;
      }
      has(param_1, _0x51dd64 = false) {
        const varData_1278 = varData_545(this, varData_1273).get(param_1);
        const varData_1279 = varData_1278 ? _0x51dd64 ? true : varData_1278.expiration > Date.now() : false;
        if (varData_1278 && !varData_1279) {
          varData_545(this, varData_1273).delete(param_1);
        }
        return varData_1279;
      }
      delete(param_1) {
        return varData_545(this, varData_1273).delete(param_1);
      }
      clear() {
        varData_545(this, varData_1273).clear();
      }
      values(_0x2de635 = false) {
        const itemList_2 = [];
        const timestamp = Date.now();
        for (const varData_1280 of varData_545(this, varData_1273).values()) {
          if (_0x2de635 || varData_1280.expiration > timestamp) {
            itemList_2.push(varData_1280.value);
          }
        }
        return itemList_2;
      }
      keys(_0x27c0cc = false) {
        const itemList_2 = [];
        const timestamp = Date.now();
        for (const [_0x3b8388, _0x385674] of varData_545(this, varData_1273).entries()) {
          if (_0x27c0cc || _0x385674.expiration > timestamp) {
            itemList_2.push(_0x3b8388);
          }
        }
        return itemList_2;
      }
      entries(_0x417d14 = false) {
        const itemList_2 = [];
        const timestamp = Date.now();
        for (const [_0x4a3517, _0x3b4c54] of varData_545(this, varData_1273).entries()) {
          if (_0x417d14 || _0x3b4c54.expiration > timestamp) {
            itemList_2.push([_0x4a3517, _0x3b4c54.value]);
          }
        }
        return itemList_2;
      }
    };
    varData_1273 = new WeakMap();
    varData_1274 = new WeakMap();
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
    var varData_1302;
    var varData_1303 = class {
      constructor(param_1, param_2, param_3, param_4, param_5, _0x3505e = 30, _0x2284b4 = false) {
        varData_546(this, varData_1293);
        varData_546(this, varData_1295);
        varData_546(this, varData_1297);
        varData_546(this, varData_1299);
        varData_546(this, varData_1301);
        varData_546(this, varData_1281, undefined);
        varData_546(this, varData_1282, undefined);
        varData_546(this, varData_1283, undefined);
        varData_546(this, varData_1284, undefined);
        varData_546(this, varData_1285, undefined);
        varData_546(this, varData_1286, undefined);
        varData_546(this, varData_1287, undefined);
        varData_546(this, varData_1288, undefined);
        varData_546(this, varData_1289, undefined);
        varData_546(this, varData_1290, undefined);
        varData_546(this, varData_1291, undefined);
        varData_546(this, varData_1292, undefined);
        varData_547(this, varData_1281, param_1);
        varData_547(this, varData_1282, param_4);
        varData_547(this, varData_1283, param_5);
        varData_547(this, varData_1284, param_2);
        varData_547(this, varData_1285, param_3);
        varData_547(this, varData_1286, _0x2284b4);
        varData_547(this, varData_1287, _0x3505e);
        varData_547(this, varData_1289, varData_545(this, varData_1282).x / _0x3505e);
        varData_547(this, varData_1290, varData_545(this, varData_1282).y / _0x3505e);
        varData_547(this, varData_1288, varData_545(this, varData_1289) * varData_545(this, varData_1290));
        varData_547(this, varData_1291, varData_549(this, varData_1293, varData_1294).call(this, varData_545(this, varData_1281), varData_545(this, varData_1287), varData_545(this, varData_1289), varData_545(this, varData_1290), varData_545(this, varData_1286)));
        varData_547(this, varData_1292, varData_549(this, varData_1295, varData_1296).call(this, varData_545(this, varData_1291), varData_545(this, varData_1288)));
      }
      get cells() {
        return varData_545(this, varData_1291);
      }
      get cellSize() {
        return varData_545(this, varData_1287);
      }
      get cellWidth() {
        return varData_545(this, varData_1289);
      }
      get cellHeight() {
        return varData_545(this, varData_1290);
      }
      get gridArea() {
        return varData_545(this, varData_1292);
      }
      get gridCoverage() {
        return varData_545(this, varData_1292) / varData_545(this, varData_1283) * 100;
      }
      isPointInsideGrid(param_1) {
        var varData_1304;
        const varData_1305 = param_1.x - varData_545(this, varData_1284).x;
        const varData_1306 = param_1.y - varData_545(this, varData_1284).y;
        const roundedVal = Math.floor(varData_1305 * varData_545(this, varData_1287) / varData_545(this, varData_1282).x);
        const roundedVal_1 = Math.floor(varData_1306 * varData_545(this, varData_1287) / varData_545(this, varData_1282).y);
        let varData_1307 = (varData_1304 = varData_545(this, varData_1291)[roundedVal]) == null ? undefined : varData_1304[roundedVal_1];
        if (!varData_1307 && varData_545(this, varData_1286)) {
          varData_1307 = varData_549(this, varData_1299, varData_1300).call(this, roundedVal, roundedVal_1, varData_545(this, varData_1289), varData_545(this, varData_1290), varData_545(this, varData_1281));
          varData_545(this, varData_1291)[roundedVal][roundedVal_1] = varData_1307;
          if (!varData_1307) {
            return false;
          }
          varData_547(this, varData_1292, varData_545(this, varData_1292) + varData_545(this, varData_1288));
        }
        return varData_1307 ?? false;
      }
    };
    varData_1281 = new WeakMap();
    varData_1282 = new WeakMap();
    varData_1283 = new WeakMap();
    varData_1284 = new WeakMap();
    varData_1285 = new WeakMap();
    varData_1286 = new WeakMap();
    varData_1287 = new WeakMap();
    varData_1288 = new WeakMap();
    varData_1289 = new WeakMap();
    varData_1290 = new WeakMap();
    varData_1291 = new WeakMap();
    varData_1292 = new WeakMap();
    varData_1293 = new WeakSet();
    varData_1294 = function (param_1, param_2, param_3, param_4, param_5) {
      const varData_1308 = {};
      for (let numericVal_91 = 0; numericVal_91 < param_2; numericVal_91++) {
        varData_1308[numericVal_91] = {};
        if (param_5) {
          continue;
        }
        for (let numericVal_92 = 0; numericVal_92 < param_2; numericVal_92++) {
          const varData_1309 = varData_549(this, varData_1299, varData_1300).call(this, numericVal_91, numericVal_92, param_3, param_4, param_1);
          if (!varData_1309) {
            continue;
          }
          varData_1308[numericVal_91][numericVal_92] = true;
        }
      }
      return varData_1308;
    };
    varData_1295 = new WeakSet();
    varData_1296 = function (param_1, param_2) {
      let numericVal_91 = 0;
      for (const varData_1310 in param_1) {
        for (const varData_1311 in param_1[varData_1310]) {
          numericVal_91 += param_2;
        }
      }
      return numericVal_91;
    };
    varData_1297 = new WeakSet();
    varData_1298 = function (param_1, param_2, param_3, param_4) {
      const itemList_2 = [];
      const varData_1312 = param_1 * param_3 + varData_545(this, varData_1284).x;
      const varData_1313 = param_2 * param_4 + varData_545(this, varData_1284).y;
      itemList_2.push(new varData_1390(varData_1312, varData_1313));
      itemList_2.push(new varData_1390(varData_1312 + param_3, varData_1313));
      itemList_2.push(new varData_1390(varData_1312 + param_3, varData_1313 + param_4));
      itemList_2.push(new varData_1390(varData_1312, varData_1313 + param_4));
      return itemList_2;
    };
    varData_1299 = new WeakSet();
    varData_1300 = function (param_1, param_2, param_3, param_4, param_5) {
      const varData_1314 = varData_549(this, varData_1297, varData_1298).call(this, param_1, param_2, param_3, param_4);
      let isDisabled_1 = false;
      for (const varData_1315 of varData_1314) {
        const varData_1316 = varData_1419.MathUtils.windingNumber(varData_1315, param_5);
        if (varData_1316 !== 0) {
          isDisabled_1 = true;
          break;
        }
      }
      if (!isDisabled_1) {
        return false;
      }
      for (let numericVal_91 = 0; numericVal_91 < varData_1314.length; numericVal_91++) {
        const varData_1317 = varData_1314[numericVal_91];
        const varData_1318 = varData_1314[(numericVal_91 + 1) % varData_1314.length];
        for (let numericVal_92 = 0; numericVal_92 < param_5.length; numericVal_92++) {
          const varData_1319 = param_5[numericVal_92];
          const varData_1320 = param_5[(numericVal_92 + 1) % param_5.length];
          if (varData_549(this, varData_1301, varData_1302).call(this, varData_1317, varData_1318, varData_1319, varData_1320)) {
            return false;
          }
        }
      }
      return true;
    };
    varData_1301 = new WeakSet();
    varData_1302 = function (param_1, param_2, param_3, param_4) {
      const varData_1321 = (param_2.x - param_1.x) * (param_4.y - param_3.y) - (param_2.y - param_1.y) * (param_4.x - param_3.x);
      const varData_1322 = (param_1.y - param_3.y) * (param_4.x - param_3.x) - (param_1.x - param_3.x) * (param_4.y - param_3.y);
      const varData_1323 = (param_1.y - param_3.y) * (param_2.x - param_1.x) - (param_1.x - param_3.x) * (param_2.y - param_1.y);
      if (varData_1321 === 0) {
        return varData_1322 === 0 && varData_1323 === 0;
      }
      const varData_1324 = varData_1322 / varData_1321;
      const varData_1325 = varData_1323 / varData_1321;
      return varData_1324 >= 0 && varData_1324 <= 1 && varData_1325 >= 0 && varData_1325 <= 1;
    };
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
    var varData_1343;
    var varData_1344 = class {
      constructor(param_1, _0x48c66a = {}, _0x5dba87 = {}) {
        varData_546(this, varData_1334);
        varData_546(this, varData_1336);
        varData_546(this, varData_1338);
        varData_546(this, varData_1340);
        varData_546(this, varData_1342);
        varData_546(this, varData_1326, undefined);
        varData_546(this, varData_1327, undefined);
        varData_546(this, varData_1328, undefined);
        varData_546(this, varData_1329, undefined);
        varData_546(this, varData_1330, undefined);
        varData_546(this, varData_1331, undefined);
        varData_546(this, varData_1332, undefined);
        varData_546(this, varData_1333, undefined);
        varData_547(this, varData_1326, varData_1419.getUUID());
        varData_547(this, varData_1327, param_1);
        varData_547(this, varData_1328, varData_549(this, varData_1334, varData_1335).call(this, param_1));
        varData_547(this, varData_1329, varData_549(this, varData_1336, varData_1337).call(this, param_1));
        varData_547(this, varData_1330, varData_549(this, varData_1342, varData_1343).call(this, param_1));
        varData_547(this, varData_1331, varData_549(this, varData_1340, varData_1341).call(this, varData_545(this, varData_1328), varData_545(this, varData_1329)));
        varData_547(this, varData_1332, varData_549(this, varData_1338, varData_1339).call(this, varData_545(this, varData_1328), varData_545(this, varData_1329)));
        this.options = _0x48c66a;
        this.data = _0x5dba87;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        varData_547(this, varData_1333, new varData_1303(varData_545(this, varData_1327), varData_545(this, varData_1328), varData_545(this, varData_1329), varData_545(this, varData_1331), varData_545(this, varData_1330), _0x48c66a.gridCellSize, _0x48c66a.useLazyGrid));
      }
      get id() {
        return varData_545(this, varData_1326);
      }
      get center() {
        return varData_545(this, varData_1332);
      }
      get min() {
        return varData_545(this, varData_1328);
      }
      get max() {
        return varData_545(this, varData_1329);
      }
      get points() {
        return [...varData_545(this, varData_1327)];
      }
      isPointInside(param_1) {
        if (param_1.x < varData_545(this, varData_1328).x || param_1.x > varData_545(this, varData_1329).x) {
          return false;
        } else if (param_1.y < varData_545(this, varData_1328).y || param_1.y > varData_545(this, varData_1329).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && param_1 instanceof varData_1272) {
          const varData_1345 = this.options.minZ ?? -Infinity;
          const varData_1346 = this.options.maxZ ?? Infinity;
          if (param_1.z < varData_1345 || param_1.z > varData_1346) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && varData_545(this, varData_1333)) {
          return varData_545(this, varData_1333).isPointInsideGrid(param_1);
        }
        const varData_1347 = varData_1419.MathUtils.windingNumber(param_1, varData_545(this, varData_1327));
        return varData_1347 !== 0;
      }
      addPoint(param_1) {
        varData_545(this, varData_1327).push(param_1);
      }
      removePoint(param_1) {
        const varData_1348 = varData_545(this, varData_1327).findIndex(param_1_1 => param_1_1.x === param_1.x && param_1_1.y === param_1.y);
        if (varData_1348 === -1) {
          return;
        }
        varData_545(this, varData_1327).splice(varData_1348, 1);
      }
      removeLastPoint() {
        varData_545(this, varData_1327).pop();
      }
      recalculate() {
        varData_547(this, varData_1328, varData_549(this, varData_1334, varData_1335).call(this, varData_545(this, varData_1327)));
        varData_547(this, varData_1329, varData_549(this, varData_1336, varData_1337).call(this, varData_545(this, varData_1327)));
        varData_547(this, varData_1330, varData_549(this, varData_1342, varData_1343).call(this, varData_545(this, varData_1327)));
        varData_547(this, varData_1331, varData_549(this, varData_1340, varData_1341).call(this, varData_545(this, varData_1328), varData_545(this, varData_1329)));
        varData_547(this, varData_1332, varData_549(this, varData_1338, varData_1339).call(this, varData_545(this, varData_1328), varData_545(this, varData_1329)));
        if (!this.options.useGrid) {
          return;
        }
        varData_547(this, varData_1333, new varData_1303(varData_545(this, varData_1327), varData_545(this, varData_1328), varData_545(this, varData_1329), varData_545(this, varData_1331), varData_545(this, varData_1330), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    varData_1326 = new WeakMap();
    varData_1327 = new WeakMap();
    varData_1328 = new WeakMap();
    varData_1329 = new WeakMap();
    varData_1330 = new WeakMap();
    varData_1331 = new WeakMap();
    varData_1332 = new WeakMap();
    varData_1333 = new WeakMap();
    varData_1334 = new WeakSet();
    varData_1335 = function (param_1) {
      let varData_1349 = Number.MAX_SAFE_INTEGER;
      let varData_1350 = Number.MAX_SAFE_INTEGER;
      for (const varData_1351 of param_1) {
        varData_1349 = Math.min(varData_1349, varData_1351.x);
        varData_1350 = Math.min(varData_1350, varData_1351.y);
      }
      return new varData_1390(varData_1349, varData_1350);
    };
    varData_1336 = new WeakSet();
    varData_1337 = function (param_1) {
      let varData_1352 = Number.MIN_SAFE_INTEGER;
      let varData_1353 = Number.MIN_SAFE_INTEGER;
      for (const varData_1354 of param_1) {
        varData_1352 = Math.max(varData_1352, varData_1354.x);
        varData_1353 = Math.max(varData_1353, varData_1354.y);
      }
      return new varData_1390(varData_1352, varData_1353);
    };
    varData_1338 = new WeakSet();
    varData_1339 = function (param_1, param_2) {
      const varData_1355 = param_2.add(param_1);
      return varData_1355.divideScalar(2);
    };
    varData_1340 = new WeakSet();
    varData_1341 = function (param_1, param_2) {
      return param_2.sub(param_1);
    };
    varData_1342 = new WeakSet();
    varData_1343 = function (param_1) {
      let numericVal_91 = 0;
      for (let numericVal_92 = 0, loopIdx = param_1.length - 1; numericVal_92 < param_1.length; loopIdx = numericVal_92++) {
        const varData_1356 = param_1[numericVal_92];
        const varData_1357 = param_1[loopIdx];
        numericVal_91 += varData_1356.x * varData_1357.y;
        numericVal_91 -= varData_1356.y * varData_1357.x;
      }
      return Math.abs(numericVal_91 / 2);
    };
    var varData_1358;
    var varData_1359;
    var varData_1360 = class _0x4e162e {
      constructor(param_1, param_2) {
        varData_546(this, varData_1358);
        const varData_1361 = varData_549(this, varData_1358, varData_1359).call(this, param_1, param_2);
        this.x = varData_1361.x;
        this.y = varData_1361.y;
      }
      equals(param_1, param_2) {
        const varData_1362 = varData_549(this, varData_1358, varData_1359).call(this, param_1, param_2);
        return this.x === varData_1362.x && this.y === varData_1362.y;
      }
      add(param_1, param_2, param_3) {
        const varData_1363 = varData_549(this, varData_1358, varData_1359).call(this, param_1, param_2);
        const varData_1364 = this.x + (param_3 ? varData_1363.x * param_3 : varData_1363.x);
        const varData_1365 = this.y + (param_3 ? varData_1363.y * param_3 : varData_1363.y);
        return new _0x4e162e(varData_1364, varData_1365);
      }
      addScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1366 = this.x + param_1;
        const varData_1367 = this.y + param_1;
        return new _0x4e162e(varData_1366, varData_1367);
      }
      sub(param_1, param_2, param_3) {
        const varData_1368 = varData_549(this, varData_1358, varData_1359).call(this, param_1, param_2);
        const varData_1369 = this.x - (param_3 ? varData_1368.x * param_3 : varData_1368.x);
        const varData_1370 = this.y - (param_3 ? varData_1368.y * param_3 : varData_1368.y);
        return new _0x4e162e(varData_1369, varData_1370);
      }
      subScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1371 = this.x - param_1;
        const varData_1372 = this.y - param_1;
        return new _0x4e162e(varData_1371, varData_1372);
      }
      multiply(param_1, param_2) {
        const varData_1373 = varData_549(this, varData_1358, varData_1359).call(this, param_1, param_2);
        const varData_1374 = this.x * varData_1373.x;
        const varData_1375 = this.y * varData_1373.y;
        return new _0x4e162e(varData_1374, varData_1375);
      }
      multiplyScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1376 = this.x * param_1;
        const varData_1377 = this.y * param_1;
        return new _0x4e162e(varData_1376, varData_1377);
      }
      divide(param_1, param_2) {
        const varData_1378 = varData_549(this, varData_1358, varData_1359).call(this, param_1, param_2);
        const varData_1379 = this.x / varData_1378.x;
        const varData_1380 = this.y / varData_1378.y;
        return new _0x4e162e(varData_1379, varData_1380);
      }
      divideScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1381 = this.x / param_1;
        const varData_1382 = this.y / param_1;
        return new _0x4e162e(varData_1381, varData_1382);
      }
      round() {
        const roundedVal = Math.round(this.x);
        const roundedVal_1 = Math.round(this.y);
        return new _0x4e162e(roundedVal, roundedVal_1);
      }
      floor() {
        const roundedVal = Math.floor(this.x);
        const roundedVal_1 = Math.floor(this.y);
        return new _0x4e162e(roundedVal, roundedVal_1);
      }
      ceil() {
        const varData_1383 = Math.ceil(this.x);
        const varData_1384 = Math.ceil(this.y);
        return new _0x4e162e(varData_1383, varData_1384);
      }
      getCenter(param_1, param_2) {
        const varData_1385 = varData_549(this, varData_1358, varData_1359).call(this, param_1, param_2);
        return new _0x4e162e((this.x + varData_1385.x) / 2, (this.y + varData_1385.y) / 2);
      }
      getDistance(param_1, param_2) {
        const [_0x5aba0e, _0x25d2fa] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y] : [param_1, param_2];
        if (typeof _0x5aba0e !== "number" || typeof _0x25d2fa !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x34ecbc, _0x58675c] = [this.x - _0x5aba0e, this.y - _0x25d2fa];
        return Math.sqrt(_0x34ecbc * _0x34ecbc + _0x58675c * _0x58675c);
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
        var varData_1386 = {
          x: this.x,
          y: this.y
        };
        return varData_1386;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1358 = new WeakSet();
    varData_1359 = function (param_1, param_2) {
      let varData_1387 = {
        x: 0,
        y: 0
      };
      if (param_1 instanceof varData_1360 || param_1 instanceof varData_1272) {
        varData_1387 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1388 = {
          x: param_1[0],
          y: param_1[1]
        };
        varData_1387 = varData_1388;
      } else if (typeof param_1 === "object") {
        varData_1387 = param_1;
      } else {
        var varData_1389 = {
          x: param_1,
          y: param_2
        };
        varData_1387 = varData_1389;
      }
      if (typeof varData_1387.x !== "number" || typeof varData_1387.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1387;
    };
    var varData_1390 = varData_1360;
    var varData_1391 = (param_1, param_2, param_3) => {
      return Math.min(Math.max(param_1, param_2), param_3);
    };
    var varData_1392 = (param_1, param_2, param_3) => {
      return param_2[0] + (param_3 - param_1[0]) * (param_2[1] - param_2[0]) / (param_1[1] - param_1[0]);
    };
    var varData_1393 = ([_0x17c235, _0x4b8424, _0x7f7b5c], [_0x34a094, _0x48158d, _0x5442f1]) => {
      const [_0x1235d0, _0x493bea, _0x8a4e66] = [_0x17c235 - _0x34a094, _0x4b8424 - _0x48158d, _0x7f7b5c - _0x5442f1];
      return Math.sqrt(_0x1235d0 * _0x1235d0 + _0x493bea * _0x493bea + _0x8a4e66 * _0x8a4e66);
    };
    var varData_1394 = (param_1, param_2) => {
      if (param_2) {
        return Math.floor(Math.random() * (param_2 - param_1 + 1) + param_1);
      } else {
        return Math.floor(Math.random() * param_1);
      }
    };
    var varData_1395 = (param_1, param_2) => {
      if (param_1 instanceof varData_1390) {
        return param_1;
      } else if (param_1 instanceof varData_1272) {
        return new varData_1390(param_1);
      } else if (param_1 instanceof Array) {
        return new varData_1390(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1390(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1390(param_1, param_2);
    };
    var varData_1396 = (param_1, param_2, param_3) => {
      if (param_1 instanceof varData_1272) {
        return param_1;
      } else if (param_1 instanceof Array) {
        return new varData_1272(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1272(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number" || typeof param_3 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1272(param_1, param_2, param_3);
    };
    var varData_1397 = (param_1, param_2) => {
      let numericVal_91 = 0;
      const varData_1398 = (param_1_1, param_2_1, param_3) => {
        return (param_2_1.x - param_1_1.x) * (param_3.y - param_1_1.y) - (param_3.x - param_1_1.x) * (param_2_1.y - param_1_1.y);
      };
      for (let numericVal_92 = 0; numericVal_92 < param_2.length; numericVal_92++) {
        const varData_1399 = param_2[numericVal_92];
        const varData_1400 = param_2[(numericVal_92 + 1) % param_2.length];
        if (varData_1399.y <= param_1.y) {
          if (varData_1400.y > param_1.y && varData_1398(varData_1399, varData_1400, param_1) > 0) {
            numericVal_91++;
          }
        } else if (varData_1400.y <= param_1.y && varData_1398(varData_1399, varData_1400, param_1) < 0) {
          numericVal_91--;
        }
      }
      return numericVal_91;
    };
    var varData_1401 = {
      clamp: varData_1391,
      getMapRange: varData_1392,
      getDistance: varData_1393,
      getRandomNumber: varData_1394,
      parseVector2: varData_1395,
      parseVector3: varData_1396,
      windingNumber: varData_1397
    };
    var varData_1402 = varData_1401;
    var varData_1403 = {};
    var varData_1404 = {
      ArrUtils: () => varData_1408
    };
    varData_539(varData_1403, varData_1404);
    var varData_1405 = param_1 => {
      for (let loopIdx = param_1.length - 1; loopIdx > 0; loopIdx--) {
        const roundedVal = Math.floor(Math.random() * (loopIdx + 1));
        [param_1[loopIdx], param_1[roundedVal]] = [param_1[roundedVal], param_1[loopIdx]];
      }
      return param_1;
    };
    var varData_1406 = (param_1, param_2) => {
      const itemList_2 = [];
      for (let numericVal_91 = 0; numericVal_91 < param_2; numericVal_91++) {
        itemList_2.push(param_1[Math.floor(Math.random() * param_1.length)]);
      }
      return itemList_2;
    };
    var varData_1407 = {
      shuffleArray: varData_1405,
      getRandomElements: varData_1406
    };
    var varData_1408 = varData_1407;
    function handleAction_88(param_1, param_2) {
      const varData_1409 = "_";
      const varData_1410 = handleAction_89((param_1_1, param_2_1, ..._0x3fa5c7) => {
        return param_1(param_1_1, ..._0x3fa5c7);
      }, param_2);
      return {
        get: function (..._0x2859a7) {
          return varData_1410.get(varData_1409, ..._0x2859a7);
        },
        reset: function () {
          varData_1410.reset(varData_1409);
        }
      };
    }
    function handleAction_89(param_1, param_2) {
      const varData_1411 = param_2.timeToLive || 60000;
      const varData_1412 = {};
      const varData_1413 = param_2.immediateResolve || false;
      async function handleAction_90(param_1_1, ..._0x369758) {
        let varData_1414 = varData_1412[param_1_1];
        if (!varData_1414) {
          varData_1414 = {
            value: null,
            lastUpdated: 0
          };
          varData_1412[param_1_1] = varData_1414;
        }
        const timestamp = Date.now();
        if (varData_1414.lastUpdated === 0 || timestamp - varData_1414.lastUpdated > varData_1411) {
          const [_0x3e96c6, _0x1621c0] = await param_1(varData_1414, param_1_1, ..._0x369758);
          if (_0x3e96c6) {
            varData_1414.lastUpdated = timestamp;
            varData_1414.value = _0x1621c0;
          }
          return _0x1621c0;
        }
        if (varData_1413) {
          return Promise.resolve(varData_1414.value);
        } else {
          return await new Promise(param_1_2 => setTimeout(() => param_1_2(varData_1414.value), 0));
        }
      }
      return {
        get: async function (param_1_1, ..._0x8671e4) {
          return await handleAction_90(param_1_1, ..._0x8671e4);
        },
        reset: function (param_1_1) {
          const varData_1415 = varData_1412[param_1_1];
          if (varData_1415) {
            varData_1415.lastUpdated = 0;
          }
        },
        clear: function () {
          for (const varData_1416 in varData_1412) {
            delete varData_1412[varData_1416];
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
          const varData_1417 = Date.now() - timestamp > param_2;
          if (param_1() || varData_1417) {
            clearInterval(intervalId);
            return param_1_1(varData_1417);
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
    var varData_1418 = {
      cache: handleAction_88,
      cacheableMap: handleAction_89,
      waitForCondition: handleAction_93,
      getUUID: handleAction_91,
      getStringHash: handleAction_92,
      wait: handleAction_94,
      waitForNextFrame: handleAction_95,
      deflate: varData_521,
      inflate: varData_525,
      ...varData_1256,
      ...varData_1403
    };
    var varData_1419 = varData_1418;
    var varData_1420 = (param_1 => {
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
    })(varData_1420 || {});
    var varData_1421 = {};
    var varData_1422 = (param_1, param_2) => "__cfx_export_" + param_1 + "_" + param_2;
    var varData_1423 = new Proxy((param_1, param_2) => {
      const varData_1424 = (param_1_1, ..._0xa9a07c) => {
        const varData_1425 = param_2(..._0xa9a07c);
        if (varData_1425 instanceof Promise) {
          varData_1425.then(param_1_2 => param_1_1(param_1_2));
        } else {
          param_1_1(varData_1425);
        }
      };
      const resourceName = GetCurrentResourceName();
      if (resourceName == undefined) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      }
      on(varData_1422(resourceName, param_1), param_1_1 => {
        param_1_1(varData_1424);
      });
    }, {
      apply: (param_1, param_2, param_3) => {
        param_1(...param_3);
      },
      get: (param_1, param_2) => {
        if (varData_1421[param_2] == undefined) {
          varData_1421[param_2] = {};
        }
        return new Proxy({}, {
          get: (param_1_1, param_2_1) => {
            const varData_1426 = param_2_1 + "_async";
            return (..._0x595213) => {
              return new Promise(async (param_1_2, param_2_2) => {
                const varData_1427 = await varData_1419.waitForCondition(() => GetResourceState(param_2) === "started", 60000);
                if (varData_1427) {
                  return param_2_2("Resource " + param_2 + " is not running");
                }
                if (varData_1421[param_2][varData_1426] === undefined) {
                  emit(varData_1422(param_2, param_2_1), param_1_3 => {
                    varData_1421[param_2][varData_1426] = param_1_3;
                  });
                  const varData_1428 = await varData_1419.waitForCondition(() => varData_1421[param_2][varData_1426] !== undefined, 1000);
                  if (varData_1428) {
                    return param_2_2("Failed to get export " + param_2_1 + " from resource " + param_2);
                  }
                }
                try {
                  varData_1421[param_2][varData_1426](param_1_2, ..._0x595213);
                } catch (err) {
                  param_2_2(err);
                }
              });
            };
          }
        });
      }
    });
    var varData_1429 = new Proxy((param_1, param_2) => {
      const resourceName = GetCurrentResourceName();
      if (resourceName == undefined) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      } else if (typeof param_2 !== "function") {
        throw new Error("Callback is not a function");
      } else if (typeof param_1 !== "string") {
        throw new Error("Export name must be a string");
      }
      on(varData_1422(resourceName, param_1), param_1_1 => {
        param_1_1(param_2);
      });
    }, {
      apply: (param_1, param_2, param_3) => {
        param_1(...param_3);
      },
      get: (param_1, param_2) => {
        if (varData_1421[param_2] == undefined) {
          varData_1421[param_2] = {};
        }
        return new Proxy({}, {
          get: (param_1_1, param_2_1) => {
            const varData_1430 = param_2_1 + "_sync";
            if (varData_1421[param_2][varData_1430] === undefined) {
              emit(varData_1422(param_2, param_2_1), param_1_2 => {
                varData_1421[param_2][varData_1430] = param_1_2;
              });
              if (varData_1421[param_2][varData_1430] === undefined) {
                if (GetResourceState(param_2) !== "started") {
                  throw new Error("Resource " + param_2 + " is not running");
                } else {
                  throw new Error("No such export " + param_2_1 + " in resource " + param_2);
                }
              }
            }
            return (..._0x13dfb0) => {
              try {
                return varData_1421[param_2][varData_1430](..._0x13dfb0);
              } catch (err) {
                throw new Error("An error occurred while calling export " + param_2_1 + " of resource " + param_2 + " - see above for details");
              }
            };
          }
        });
      }
    });
    on("onResourceStop", param_1 => varData_1421[param_1] = undefined);
    var varData_1431 = {
      Async: varData_1423,
      Sync: varData_1429
    };
    var varData_1432 = varData_1431;
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
        const varData_1433 = varData_1432.Sync.config.GetModuleConfig(param_1);
        if (varData_1433 === undefined) {
          return;
        }
        dataMap.set(param_1, varData_1433);
        if (!dataSet.has(param_1)) {
          dataSet.add(param_1);
        }
      }
      const varData_1434 = dataMap.get(param_1);
      if (param_2) {
        if (varData_1434 == null) {
          return undefined;
        } else {
          return varData_1434[param_2];
        }
      } else {
        return varData_1434;
      }
    }
    function handleAction_98(param_1) {
      return handleAction_97(resourceName, param_1);
    }
    function handleAction_99() {
      return varData_1432.Sync.config.IsConfigReady();
    }
    var varData_1435 = {
      IsConfigLoaded: handleAction_96,
      GetModuleConfig: handleAction_97,
      GetResourceConfig: handleAction_98,
      IsConfigReady: handleAction_99
    };
    var varData_1436 = varData_1435;
    var varData_1437 = varData_543(varData_1254());
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
    var varData_1457;
    var varData_1458 = class {
      constructor(param_1, param_2) {
        varData_546(this, varData_1442);
        varData_546(this, varData_1444);
        varData_546(this, varData_1446);
        varData_546(this, varData_1448);
        varData_546(this, varData_1450);
        varData_546(this, varData_1452);
        varData_546(this, varData_1454);
        varData_546(this, varData_1456);
        varData_546(this, varData_1438, undefined);
        varData_546(this, varData_1439, undefined);
        varData_546(this, varData_1440, undefined);
        varData_546(this, varData_1441, {});
        const varData_1459 = varData_549(this, varData_1450, varData_1451).call(this, param_1);
        const varData_1460 = varData_549(this, varData_1454, varData_1455).call(this, varData_1459, param_2);
        const [_0x23f586, _0xb55073, _0x320669] = varData_1460.split(":").map(param_1_1 => param_1_1.length > 0 ? param_1_1 : undefined);
        varData_547(this, varData_1438, _0x23f586);
        varData_547(this, varData_1439, _0xb55073);
        varData_547(this, varData_1440, _0x320669);
      }
      hashString(param_1) {
        return param_1;
        var varData_1461;
        const varData_1462 = varData_545(this, varData_1442, varData_1443);
        const varData_1463 = (varData_1461 = varData_545(this, varData_1441)[varData_1462]) == null ? undefined : varData_1461[param_1];
        if (varData_1463) {
          return varData_1463;
        }
        if (!varData_545(this, varData_1441)[varData_1462]) {
          varData_545(this, varData_1441)[varData_1462] = {};
        }
        const varData_1464 = varData_549(this, varData_1448, varData_1449).call(this, (0, varData_1437.HmacMD5)(param_1, varData_1462).toString());
        varData_545(this, varData_1441)[varData_1462][param_1] = varData_1464;
        if (IsDuplicityVersion()) {
          console.log("[SDK] Hash Debug | Event: " + param_1 + " | Hash: " + varData_1464);
        }
        return varData_1464;
      }
      encode(param_1) {
        return JSON.stringify(param_1);
        let varData_1465;
        const varData_1466 = varData_545(this, varData_1446, varData_1447);
        try {
          varData_1465 = varData_549(this, varData_1452, varData_1453).call(this, JSON.stringify(param_1), varData_1466);
        } catch (err) {
          console.error("Failed to encode payload");
        }
        return varData_1465;
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
        let varData_1467;
        const varData_1468 = varData_545(this, varData_1444, varData_1445);
        try {
          varData_1467 = JSON.parse(varData_549(this, varData_1454, varData_1455).call(this, param_1, varData_1468));
        } catch (err) {
          console.error("Failed to decode payload");
        }
        return varData_1467;
      }
    };
    varData_1438 = new WeakMap();
    varData_1439 = new WeakMap();
    varData_1440 = new WeakMap();
    varData_1441 = new WeakMap();
    varData_1442 = new WeakSet();
    varData_1443 = function () {
      return varData_545(this, varData_1438) ?? varData_549(this, varData_1456, varData_1457).call(this);
    };
    varData_1444 = new WeakSet();
    varData_1445 = function () {
      return varData_545(this, varData_1439) ?? varData_549(this, varData_1456, varData_1457).call(this);
    };
    varData_1446 = new WeakSet();
    varData_1447 = function () {
      return varData_545(this, varData_1440) ?? varData_549(this, varData_1456, varData_1457).call(this);
    };
    varData_1448 = new WeakSet();
    varData_1449 = function (param_1) {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1437.enc.Base64.stringify(varData_1437.enc.Utf8.parse(param_1));
    };
    varData_1450 = new WeakSet();
    varData_1451 = function (param_1) {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1437.enc.Utf8.stringify(varData_1437.enc.Base64.parse(param_1));
    };
    varData_1452 = new WeakSet();
    varData_1453 = function (param_1, param_2) {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1437.AES.encrypt(param_1, param_2).toString();
    };
    varData_1454 = new WeakSet();
    varData_1455 = function (param_1, param_2) {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1437.AES.decrypt(param_1, param_2).toString(varData_1437.enc.Utf8);
    };
    varData_1456 = new WeakSet();
    varData_1457 = function (_0x9ba56c = 128) {
      return varData_1437.lib.WordArray.random(_0x9ba56c / 8).toString();
    };
    var varData_1469;
    var varData_1470 = class {
      constructor() {
        varData_546(this, varData_1469, undefined);
        const resourceName_1 = GetCurrentResourceName();
        const varData_1471 = varData_1419.getStringHash("__npx_sdk:" + resourceName_1 + ":token");
        const varData_1472 = GetConvar(varData_1471, "");
        varData_547(this, varData_1469, new varData_1458(varData_1472, "0x27A9DEC7"));
      }
      on(param_1, param_2) {
        const varData_1473 = varData_545(this, varData_1469).hashString(param_1);
        return on(varData_1473, param_2);
      }
      onNet(param_1, param_2) {
        const varData_1474 = varData_545(this, varData_1469).hashString(param_1);
        onNet(varData_1474, param_2);
        const varData_1475 = varData_545(this, varData_1469).hashString(param_1 + "-c");
        onNet(varData_1475, param_1_1 => {
          const varData_1476 = varData_1419.inflate(new Uint8Array(param_1_1));
          const varData_1477 = msgpack_unpack(varData_1476);
          return param_2(...varData_1477);
        });
      }
      emit(param_1, ..._0x578c59) {
        const varData_1478 = varData_545(this, varData_1469).hashString(param_1);
        return emit(varData_1478, ..._0x578c59);
      }
      emitNet(param_1, ..._0x22d0b2) {
        let varData_1479 = msgpack_pack(_0x22d0b2);
        let varData_1480 = varData_1479.length;
        const varData_1481 = varData_545(this, varData_1469).hashString(param_1);
        if (varData_1480 < 16000) {
          TriggerServerEventInternal(varData_1481, varData_1479, varData_1479.length);
        } else {
          TriggerLatentServerEventInternal(varData_1481, varData_1479, varData_1479.length, 1024000);
        }
      }
    };
    varData_1469 = new WeakMap();
    var varData_1482 = new varData_1470();
    var varData_1483 = {
      warning: 1,
      log: 2,
      error: 3,
      debug: 4
    };
    var varData_1484 = GetConvar(GetCurrentResourceName() + "_logLevel", "");
    var varData_1485 = GetConvar("sv_loglevel", "warning");
    (() => {
      varData_1485 = (varData_1484 == null ? undefined : varData_1484.length) > 0 ? varData_1484 : varData_1485;
      if (!varData_1483[varData_1485]) {
        throw new Error("Invalid log level: " + varData_1485);
      }
    })();
    var varData_1486 = () => varData_1483[varData_1485] >= varData_1483.warning;
    var varData_1487 = () => varData_1483[varData_1485] >= varData_1483.log;
    var varData_1488 = () => varData_1483[varData_1485] >= varData_1483.error;
    var varData_1489 = () => varData_1485 === "debug";
    var varData_1490 = {
      warning: (param_1, ..._0x143f7c) => {
        if (!varData_1486()) {
          return;
        }
        console.log("^3[WARNING] ^7" + param_1, ..._0x143f7c, "^0");
      },
      log: (param_1, ..._0x498e69) => {
        if (!varData_1487()) {
          return;
        }
        console.log("^5[nopixel] ^7" + param_1, ..._0x498e69, "^0");
      },
      debug: (param_1, ..._0x48c8b2) => {
        if (!varData_1489()) {
          return;
        }
        console.log("^2[D] " + param_1, ..._0x48c8b2, "^0");
      },
      error: (param_1, ..._0xd238f6) => {
        if (!varData_1488()) {
          return;
        }
        console.log("^1[ERROR] " + param_1, ..._0xd238f6, "^0");
      }
    };
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
    var varData_1502;
    var varData_1503 = class {
      constructor() {
        varData_546(this, varData_1497);
        varData_546(this, varData_1499);
        varData_546(this, varData_1501);
        varData_546(this, varData_1491, undefined);
        varData_546(this, varData_1492, undefined);
        varData_546(this, varData_1493, undefined);
        varData_546(this, varData_1494, undefined);
        varData_546(this, varData_1495, undefined);
        varData_546(this, varData_1496, undefined);
        varData_547(this, varData_1491, false);
        varData_547(this, varData_1492, new Map());
        varData_547(this, varData_1493, new Set());
        varData_547(this, varData_1494, GetGameTimer());
        varData_547(this, varData_1495, GetCurrentResourceName());
        const varData_1504 = varData_1419.getStringHash("__npx_sdk:" + varData_545(this, varData_1495) + ":token");
        const varData_1505 = GetConvar(varData_1504, "");
        varData_547(this, varData_1496, new varData_1458(varData_1505, "0x27A9DEC7"));
        varData_549(this, varData_1501, varData_1502).call(this);
      }
      register(param_1, param_2) {
        if (varData_545(this, varData_1493).has(param_1)) {
          return varData_1490.error("[RPC] Handler already registered | " + param_1);
        }
        varData_545(this, varData_1493).add(param_1);
        varData_549(this, varData_1497, varData_1498).call(this, "__rpc_req:" + param_1, async (param_1_1, param_2_1) => {
          let varData_1506;
          let varData_1507;
          const varData_1508 = GetInvokingResource();
          if (varData_1508) {
            return;
          }
          const varData_1509 = varData_545(this, varData_1496).decode(param_1_1);
          if (!(varData_1509 == null ? undefined : varData_1509.id) || !(varData_1509 == null ? undefined : varData_1509.origin)) {
            return varData_1490.error("[RPC] " + param_1 + " - Invalid metadata received");
          }
          try {
            varData_1506 = await param_2(...param_2_1);
            varData_1507 = true;
          } catch (err) {
            varData_1506 = err.message;
            varData_1507 = false;
          }
          varData_549(this, varData_1499, varData_1500).call(this, "__rpc_res:" + varData_1509.origin, varData_1509.id, [varData_1507, varData_1506]);
        });
      }
      execute(param_1, ..._0x25822f) {
        const varData_1510 = {
          id: ++varData_548(this, varData_1494)._,
          origin: varData_545(this, varData_1495)
        };
        const promise = new Promise((param_1_1, param_2) => {
          let timerId = setTimeout(() => param_2(new Error("RPC timed out | " + param_1)), 60000);
          var varData_1511 = {
            resolve: param_1_1,
            reject: param_2,
            timeout: timerId
          };
          varData_545(this, varData_1492).set(varData_1510.id, varData_1511);
        });
        promise.finally(() => varData_545(this, varData_1492).delete(varData_1510.id));
        varData_549(this, varData_1499, varData_1500).call(this, "__rpc_req:" + param_1, varData_545(this, varData_1496).encode(varData_1510), _0x25822f);
        return promise;
      }
      executeCustom(param_1, param_2, ..._0x5a8498) {
        const varData_1512 = {
          id: ++varData_548(this, varData_1494)._,
          origin: varData_545(this, varData_1495)
        };
        const promise = new Promise((param_1_1, param_2_1) => {
          let timerId = setTimeout(() => param_2_1(new Error("RPC timed out | " + param_1)), param_2.timeout ?? 60000);
          var varData_1513 = {
            resolve: param_1_1,
            reject: param_2_1,
            timeout: timerId
          };
          varData_545(this, varData_1492).set(varData_1512.id, varData_1513);
        });
        promise.finally(() => varData_545(this, varData_1492).delete(varData_1512.id));
        varData_549(this, varData_1499, varData_1500).call(this, "__rpc_req:" + param_1, varData_545(this, varData_1496).encode(varData_1512), _0x5a8498);
        return promise;
      }
    };
    varData_1491 = new WeakMap();
    varData_1492 = new WeakMap();
    varData_1493 = new WeakMap();
    varData_1494 = new WeakMap();
    varData_1495 = new WeakMap();
    varData_1496 = new WeakMap();
    varData_1497 = new WeakSet();
    varData_1498 = function (param_1, param_2) {
      const varData_1514 = varData_545(this, varData_1496).hashString(param_1);
      onNet(varData_1514, param_2);
      const varData_1515 = varData_545(this, varData_1496).hashString(param_1 + "-c");
      onNet(varData_1515, param_1_1 => {
        const varData_1516 = varData_1419.inflate(new Uint8Array(param_1_1));
        const varData_1517 = msgpack_unpack(varData_1516);
        return param_2(...varData_1517);
      });
    };
    varData_1499 = new WeakSet();
    varData_1500 = function (param_1, ..._0x40ff32) {
      let varData_1518 = msgpack_pack(_0x40ff32);
      let varData_1519 = varData_1518.length;
      const varData_1520 = varData_545(this, varData_1496).hashString(param_1);
      if (varData_1519 < 16000) {
        TriggerServerEventInternal(varData_1520, varData_1518, varData_1518.length);
      } else {
        TriggerLatentServerEventInternal(varData_1520, varData_1518, varData_1518.length, 1024000);
      }
    };
    varData_1501 = new WeakSet();
    varData_1502 = function () {
      if (varData_545(this, varData_1491)) {
        return varData_1490.error("SDK RPC handlers already initialized");
      }
      varData_549(this, varData_1497, varData_1498).call(this, "__rpc_res:" + varData_545(this, varData_1495), (param_1, [_0x43885b, _0x4f5830]) => {
        const varData_1521 = varData_545(this, varData_1492).get(param_1);
        if (!varData_1521) {
          return;
        }
        clearTimeout(varData_1521.timeout);
        if (_0x43885b) {
          varData_1521.resolve(_0x4f5830);
        } else {
          varData_1521.reject(new Error(_0x4f5830));
        }
      });
      varData_547(this, varData_1491, true);
      varData_1490.debug("SDK RPC handlers initialized");
    };
    var varData_1522 = new varData_1503();
    var varData_1523 = varData_543(varData_1254());
    var varData_1524 = (_0x3f8ee9 = 128) => {
      return varData_1523.lib.WordArray.random(_0x3f8ee9 / 8).toString();
    };
    var varData_1525 = (param_1, param_2) => {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1523.AES.encrypt(param_1, param_2).toString();
    };
    var varData_1526 = (param_1, param_2) => {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1523.AES.decrypt(param_1, param_2).toString(varData_1523.enc.Utf8);
    };
    var varData_1527 = param_1 => {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1523.enc.Base64.stringify(varData_1523.enc.Utf8.parse(param_1));
    };
    var varData_1528 = (param_1, param_2) => {
      return varData_1527((0, varData_1523.HmacMD5)(param_1, param_2).toString());
    };
    var varData_1529 = {};
    var varData_1530 = (param_1, _0x2a3037 = varData_1524()) => {
      if (varData_1529[param_1] === undefined) {
        varData_1529[param_1] = varData_1528(param_1, _0x2a3037);
      }
      return varData_1529[param_1];
    };
    var varData_1531 = (param_1, _0xc280b9 = varData_1524()) => {
      try {
        return varData_1525(JSON.stringify(param_1), _0xc280b9);
      } catch (err) {
        console.error("Failed to encode payload");
      }
    };
    var varData_1532 = (param_1, _0x3c1226 = varData_1524()) => {
      try {
        return JSON.parse(varData_1526(param_1, _0x3c1226));
      } catch (err) {
        console.error("Failed to decode payload");
      }
    };
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
    var varData_1550;
    var varData_1551 = class {
      constructor() {
        varData_546(this, varData_1541);
        varData_546(this, varData_1543);
        varData_546(this, varData_1545);
        varData_546(this, varData_1547);
        varData_546(this, varData_1549);
        varData_546(this, varData_1533, undefined);
        varData_546(this, varData_1534, undefined);
        varData_546(this, varData_1535, undefined);
        varData_546(this, varData_1536, undefined);
        varData_546(this, varData_1537, undefined);
        varData_546(this, varData_1538, undefined);
        varData_546(this, varData_1539, undefined);
        varData_546(this, varData_1540, undefined);
        varData_547(this, varData_1533, GetCurrentResourceName());
        varData_547(this, varData_1534, varData_1524(64));
        varData_547(this, varData_1535, varData_1524(64));
        varData_547(this, varData_1536, varData_1524(64));
        varData_547(this, varData_1537, false);
        varData_547(this, varData_1538, 0);
        varData_547(this, varData_1539, []);
        varData_547(this, varData_1540, new Map());
        varData_549(this, varData_1541, varData_1542).call(this, "__npx_sdk:init", varData_549(this, varData_1549, varData_1550).bind(this));
      }
      async register(param_1, param_2) {
        varData_549(this, varData_1543, varData_1544).call(this, "__nui_req:" + param_1, async (param_1_1, param_2_1) => {
          let varData_1552;
          let varData_1553;
          const varData_1554 = varData_1532(param_1_1, varData_545(this, varData_1535));
          if (!(varData_1554 == null ? undefined : varData_1554.id) || !(varData_1554 == null ? undefined : varData_1554.resource)) {
            return varData_1490.error("[NUI] " + param_1 + " - Invalid metadata received");
          }
          try {
            varData_1552 = await param_2(...param_2_1);
            varData_1553 = true;
          } catch (err) {
            varData_1552 = err.message;
            varData_1553 = false;
          }
          varData_549(this, varData_1547, varData_1548).call(this, "__nui_res:" + varData_1554.resource, varData_1554.id, [varData_1553, varData_1552]);
        });
      }
      remove(param_1) {
        const varData_1555 = varData_1530("__nui_req:" + param_1, varData_545(this, varData_1534));
        UnregisterRawNuiCallback(varData_1555);
      }
      async execute(param_1, ..._0x2d81b3) {
        const varData_1556 = {
          id: ++varData_548(this, varData_1538)._,
          resource: varData_545(this, varData_1533)
        };
        const promise = new Promise((param_1_1, param_2) => {
          let varData_1557;
          if (varData_545(this, varData_1537)) {
            varData_1557 = setTimeout(() => param_2(new Error("RPC timed out | " + param_1)), 60000);
          } else {
            varData_1557 = 0;
          }
          var varData_1558 = {
            resolve: param_1_1,
            reject: param_2,
            timeout: varData_1557
          };
          varData_545(this, varData_1540).set(varData_1556.id, varData_1558);
        });
        promise.finally(() => varData_545(this, varData_1540).delete(varData_1556.id));
        if (!varData_545(this, varData_1537)) {
          var varData_1559 = {
            type: "execute",
            event: "__nui_req:" + param_1,
            metadata: varData_1556,
            args: _0x2d81b3
          };
          varData_545(this, varData_1539).push(varData_1559);
        } else {
          varData_549(this, varData_1547, varData_1548).call(this, "__nui_req:" + param_1, varData_1531(varData_1556, varData_545(this, varData_1536)), _0x2d81b3);
        }
        return promise;
      }
      async executeCustom(param_1, param_2, ..._0x20dc4e) {
        const varData_1560 = {
          id: ++varData_548(this, varData_1538)._,
          resource: varData_545(this, varData_1533)
        };
        const promise = new Promise((param_1_1, param_2_1) => {
          let varData_1561;
          if (varData_545(this, varData_1537)) {
            varData_1561 = setTimeout(() => param_2_1(new Error("RPC timed out | " + param_1)), param_2.timeout ?? 60000);
          } else {
            varData_1561 = 0;
          }
          var varData_1562 = {
            resolve: param_1_1,
            reject: param_2_1,
            timeout: varData_1561
          };
          varData_545(this, varData_1540).set(varData_1560.id, varData_1562);
        });
        promise.finally(() => varData_545(this, varData_1540).delete(varData_1560.id));
        if (!varData_545(this, varData_1537)) {
          var varData_1563 = {
            type: "execute",
            event: "__nui_req:" + param_1,
            metadata: varData_1560,
            args: _0x20dc4e
          };
          varData_545(this, varData_1539).push(varData_1563);
        } else {
          varData_549(this, varData_1547, varData_1548).call(this, "__nui_req:" + param_1, varData_1531(varData_1560, varData_545(this, varData_1536)), _0x20dc4e);
        }
        return promise;
      }
    };
    varData_1533 = new WeakMap();
    varData_1534 = new WeakMap();
    varData_1535 = new WeakMap();
    varData_1536 = new WeakMap();
    varData_1537 = new WeakMap();
    varData_1538 = new WeakMap();
    varData_1539 = new WeakMap();
    varData_1540 = new WeakMap();
    varData_1541 = new WeakSet();
    varData_1542 = function (param_1, param_2) {
      RegisterNuiCallback(param_1, ({
        args: _0x4a9ea0
      }, param_2_1) => {
        param_2_1(true);
        return param_2(..._0x4a9ea0);
      });
    };
    varData_1543 = new WeakSet();
    varData_1544 = function (param_1, param_2) {
      if (varData_545(this, varData_1537)) {
        const varData_1564 = varData_1530(param_1, varData_545(this, varData_1534));
        return varData_549(this, varData_1541, varData_1542).call(this, varData_1564, param_2);
      }
      var varData_1565 = {
        type: "on",
        event: param_1,
        callback: param_2
      };
      varData_545(this, varData_1539).push(varData_1565);
    };
    varData_1545 = new WeakSet();
    varData_1546 = function (param_1, ..._0x171665) {
      var varData_1566 = {
        event: param_1,
        args: _0x171665
      };
      SendNuiMessage(JSON.stringify(varData_1566, null));
    };
    varData_1547 = new WeakSet();
    varData_1548 = function (param_1, ..._0xb77db9) {
      if (varData_545(this, varData_1537)) {
        const varData_1567 = varData_1530(param_1, varData_545(this, varData_1534));
        return varData_549(this, varData_1545, varData_1546).call(this, varData_1567, ..._0xb77db9);
      }
      var varData_1568 = {
        type: "emit",
        event: param_1,
        args: _0xb77db9
      };
      varData_545(this, varData_1539).push(varData_1568);
    };
    varData_1549 = new WeakSet();
    varData_1550 = async function () {
      varData_547(this, varData_1537, true);
      varData_549(this, varData_1543, varData_1544).call(this, "__nui_res:" + varData_545(this, varData_1533), (param_1, [_0x288662, _0x5c4bdd]) => {
        const varData_1569 = varData_545(this, varData_1540).get(param_1);
        if (!varData_1569) {
          return varData_1490.error("[NUI] Invalid response received");
        }
        clearTimeout(varData_1569.timeout);
        if (_0x288662) {
          varData_1569.resolve(_0x5c4bdd);
        } else {
          varData_1569.reject(_0x5c4bdd);
        }
      });
      varData_549(this, varData_1545, varData_1546).call(this, "__npx_sdk:ready", varData_1527(varData_545(this, varData_1534) + ":" + varData_545(this, varData_1535) + ":" + varData_545(this, varData_1536)));
      varData_1490.debug("[NUI] SDK initialized");
      for (const varData_1570 of varData_545(this, varData_1539)) {
        if (varData_1570.type === "on") {
          varData_549(this, varData_1543, varData_1544).call(this, varData_1570.event, varData_1570.callback);
        } else if (varData_1570.type === "emit") {
          setTimeout(() => varData_549(this, varData_1547, varData_1548).call(this, varData_1570.event, ...varData_1570.args), 1000);
        } else if (varData_1570.type === "execute") {
          const varData_1571 = varData_545(this, varData_1540).get(varData_1570.metadata.id);
          if (!varData_1571) {
            varData_1490.error("[RPC] " + varData_1570.event + " - Failed to execute queued RPC call");
            continue;
          }
          varData_1571.timeout = setTimeout(() => varData_1571.reject(new Error("RPC timed out | " + varData_1570.event)), 60000);
          setTimeout(() => varData_549(this, varData_1547, varData_1548).call(this, varData_1570.event, varData_1531(varData_1570.metadata, varData_545(this, varData_1536)), varData_1570.args), 1000);
        }
      }
    };
    var varData_1572;
    var varData_1573;
    var varData_1574;
    var varData_1575 = class {
      constructor(param_1) {
        varData_546(this, varData_1572, undefined);
        varData_546(this, varData_1573, undefined);
        varData_546(this, varData_1574, new Map());
        varData_547(this, varData_1572, param_1);
        varData_547(this, varData_1573, false);
        const resourceName_1 = GetCurrentResourceName();
        on("onResourceStop", param_1_1 => {
          if (param_1_1 === resourceName_1) {
            for (const [_0xd16fa1, _0x52f47c] of varData_545(this, varData_1574).entries()) {
              varData_1432.Sync[varData_545(this, varData_1572)].removeNuiEvent(_0xd16fa1);
            }
          }
        });
        on("onResourceStart", async param_1_1 => {
          if (param_1_1 === varData_545(this, varData_1572)) {
            await varData_1419.waitForCondition(() => GetResourceState(varData_545(this, varData_1572)) === "started", 10000);
            if (varData_545(this, varData_1573)) {
              for (const [_0x47db59, _0x49046c] of varData_545(this, varData_1574).entries()) {
                varData_1432.Sync[varData_545(this, varData_1572)].removeNuiEvent(_0x47db59);
                this.register(_0x47db59, _0x49046c);
              }
            }
            varData_547(this, varData_1573, true);
          }
          if (param_1_1 === resourceName_1) {
            await varData_1419.waitForCondition(() => GetResourceState(varData_545(this, varData_1572)) === "started", 10000);
            varData_547(this, varData_1573, true);
          }
        });
      }
      async execute(param_1, ..._0x1c7baa) {
        return await varData_1432.Async[varData_545(this, varData_1572)].sendNuiEvent(param_1, _0x1c7baa);
      }
      async register(param_1, param_2) {
        await varData_1419.waitForCondition(() => varData_545(this, varData_1573), 10000);
        const varData_1576 = varData_1432.Sync[varData_545(this, varData_1572)].registerNuiEvent(param_1, param_2);
        if (varData_1576) {
          varData_545(this, varData_1574).set(param_1, param_2);
        }
      }
    };
    varData_1572 = new WeakMap();
    varData_1573 = new WeakMap();
    varData_1574 = new WeakMap();
    var varData_1577 = class {
      constructor() {
        const varData_1578 = async (param_1, param_2) => {
          return await varData_1583.execute(param_1, ...param_2);
        };
        varData_1432.Async("sendNuiEvent", varData_1578);
        const varData_1579 = (param_1, param_2) => {
          varData_1583.register(param_1, param_2);
          return true;
        };
        varData_1432.Sync("registerNuiEvent", varData_1579);
        const varData_1580 = param_1 => {
          varData_1583.remove(param_1);
        };
        varData_1432.Sync("removeNuiEvent", varData_1580);
      }
    };
    var varData_1581 = null && varData_1575;
    var varData_1582 = null && varData_1577;
    var varData_1583 = new varData_1551();
    var varData_1584;
    var varData_1585;
    var varData_1586;
    var varData_1587 = class {
      constructor() {
        varData_546(this, varData_1584, undefined);
        varData_546(this, varData_1585, undefined);
        varData_546(this, varData_1586, undefined);
        varData_547(this, varData_1586, false);
        varData_1583.register("__npx_sdk:sockets:init", async () => {
          varData_1490.debug("Sockets", "Initializing sockets...");
          if (varData_545(this, varData_1586)) {
            return {
              url: varData_545(this, varData_1584),
              API_KEY: varData_545(this, varData_1585)
            };
          }
          const varData_1588 = await new Promise(param_1 => {
            emit("__npx_core:sockets:init", param_1);
          });
          if (!(varData_1588 == null ? undefined : varData_1588.API_URL) || !(varData_1588 == null ? undefined : varData_1588.API_KEY)) {
            return;
          }
          varData_547(this, varData_1584, varData_1588.API_URL);
          varData_547(this, varData_1585, varData_1588.API_KEY);
          varData_547(this, varData_1586, true);
          varData_1490.debug("Sockets", "Sockets initialized.");
          return varData_1588;
        });
      }
      register(param_1, param_2) {
        varData_1583.execute("__npx_sdk:sockets:register", param_1);
        varData_1583.register("__npx_sdk:sockets:pipe:" + param_1, async param_1_1 => {
          return param_2(param_1_1);
        });
      }
      async execute(param_1, param_2) {
        return varData_1583.execute("__npx_sdk:sockets:execute", param_1, param_2);
      }
    };
    varData_1584 = new WeakMap();
    varData_1585 = new WeakMap();
    varData_1586 = new WeakMap();
    var varData_1589 = new varData_1587();
    var varData_1590 = {
      HasItem: async (param_1, param_2) => {
        return await varData_1432.Sync.inventory.HasItem(param_1, param_2);
      },
      GetItemStacks: async (param_1, param_2) => {
        return await varData_1432.Sync.inventory.GetItemStacks(param_1, param_2);
      },
      GetAllItemStacks: async param_1 => {
        return await varData_1432.Sync.inventory.GetAllItemStacks(param_1);
      },
      GetItemList: async () => {
        return await varData_1432.Sync.inventory.GetItemList();
      },
      GetPlayerInventories: async () => {
        return await varData_1432.Sync.inventory.GetPlayerInventories();
      },
      GetPlayerInventoriesWeight: async () => {
        return await varData_1432.Sync.inventory.GetPlayerInventoriesWeight();
      },
      GetWeaponsList: () => {
        return varData_1432.Sync.inventory.GetWeaponsList();
      },
      GetWeapon: param_1 => {
        return varData_1432.Sync.inventory.GetWeapon(param_1);
      },
      GetWeaponByItemStack: param_1 => {
        return varData_1432.Sync.inventory.GetWeaponByItemStack(param_1);
      },
      OpenInventory: (param_1, param_2) => {
        varData_1432.Sync.inventory.OpenInventory(param_1, param_2);
      },
      UseBodySlot: param_1 => {
        return varData_1432.Async.inventory.UseBodySlot(param_1);
      },
      SetBodySlotDisabled: (param_1, param_2, param_3) => {
        varData_1432.Sync.inventory.SetBodySlotDisabled(param_1, param_2, param_3);
      },
      IsBodySlotDisabled: (param_1, param_2) => {
        return varData_1432.Sync.inventory.IsBodySlotDisabled(param_1, param_2);
      }
    };
    var varData_1591 = {};
    var varData_1592 = {
      Activity: () => varData_1669,
      ActivityObjective: () => varData_1643,
      ActivityTask: () => varData_1622,
      Cache: () => varData_1275,
      Group: () => varData_1701,
      GroupManager: () => varData_1726,
      GroupMember: () => varData_1716,
      PolyZone: () => varData_1344,
      Thread: () => varData_1593,
      Vector2: () => varData_1390,
      Vector3: () => varData_1272
    };
    varData_539(varData_1591, varData_1592);
    var varData_1593 = class {
      constructor(param_1, param_2, _0xf10c4 = "interval") {
        this.callback = param_1;
        this.delay = param_2;
        this.mode = _0xf10c4;
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
        const varData_1594 = this.hooks.get("preStart") ?? [];
        try {
          for (const varData_1595 of varData_1594) {
            if (!this.aborted) {
              await varData_1595.call(this);
            }
          }
        } catch (err) {
          this.aborted = true;
          console.log("Error while calling pre-start hook", err.message);
        }
        if (this.aborted) {
          try {
            const varData_1596 = this.hooks.get("startAborted") ?? [];
            for (const varData_1597 of varData_1596) {
              await varData_1597.call(this);
            }
          } catch (err) {
            console.log("Error while calling start-aborted hook", err.message);
          }
          return;
        }
        this.active = true;
        const varData_1598 = this.hooks.get("active") ?? [];
        switch (this.mode) {
          case "tick":
            {
              this.threadId = setTick(async () => {
                this.tick += 1;
                try {
                  await this.callback.call(this);
                  for (const varData_1599 of varData_1598) {
                    await varData_1599.call(this);
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
                  for (const varData_1600 of varData_1598) {
                    await varData_1600.call(this);
                  }
                } catch (err) {
                  console.log("Error while calling active hook", err.message);
                }
              }, this.delay);
              break;
            }
          case "timeout":
            {
              const varData_1601 = () => {
                if (this.active) {
                  this.threadId = setTimeout(async () => {
                    this.tick += 1;
                    try {
                      await this.callback.call(this);
                      for (const varData_1602 of varData_1598) {
                        await varData_1602.call(this);
                      }
                    } catch (err) {
                      console.log("Error while calling active hook", err.message);
                    }
                    return varData_1601();
                  }, this.delay);
                }
              };
              varData_1601();
              break;
            }
        }
        const varData_1603 = this.hooks.get("afterStart") ?? [];
        try {
          for (const varData_1604 of varData_1603) {
            await varData_1604.call(this);
          }
        } catch (err) {
          console.log("Error while calling after-start hook", err.message);
        }
      }
      async stop() {
        if (!this.active) {
          return;
        }
        const varData_1605 = this.hooks.get("preStop") ?? [];
        try {
          for (const varData_1606 of varData_1605) {
            if (!this.aborted) {
              await varData_1606.call(this);
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
            const varData_1607 = this.hooks.get("stopAborted") ?? [];
            for (const varData_1608 of varData_1607) {
              await varData_1608.call(this);
            }
          } catch (err) {
            console.log("Error while calling stop-aborted hook", err.message);
          }
          return;
        }
        const varData_1609 = this.hooks.get("afterStop") ?? [];
        try {
          for (const varData_1610 of varData_1609) {
            await varData_1610.call(this);
          }
        } catch (err) {
          console.log("Error while calling after-stop hook", err.message);
        }
      }
      abort() {
        this.aborted = true;
      }
      addHook(param_1, param_2) {
        var varData_1611;
        if ((varData_1611 = this.hooks.get(param_1)) == null) {
          undefined;
        } else {
          varData_1611.push(param_2);
        }
      }
      setNextTick(param_1, param_2) {
        this.scheduled[param_1] = this.tick + param_2;
      }
      canTick(param_1) {
        return this.scheduled[param_1] === undefined || this.tick >= this.scheduled[param_1];
      }
    };
    var varData_1612;
    var varData_1613;
    var varData_1614;
    var varData_1615;
    var varData_1616;
    var varData_1617;
    var varData_1618;
    var varData_1619;
    var varData_1620;
    var varData_1621;
    var varData_1622 = class {
      constructor(param_1, param_2) {
        varData_546(this, varData_1618);
        varData_546(this, varData_1620);
        varData_546(this, varData_1612, undefined);
        varData_546(this, varData_1613, undefined);
        varData_546(this, varData_1614, undefined);
        varData_546(this, varData_1615, undefined);
        varData_546(this, varData_1616, undefined);
        varData_546(this, varData_1617, undefined);
        varData_547(this, varData_1612, param_1.id);
        varData_547(this, varData_1613, param_2);
        varData_547(this, varData_1614, new Map());
        varData_547(this, varData_1617, "pending");
        varData_547(this, varData_1615, param_1.required.map(param_1_1 => param_2.objectives.get(param_1_1)));
        varData_547(this, varData_1616, new Map(param_1.objectives.map(param_1_1 => [param_1_1, param_2.objectives.get(param_1_1)])));
        if (param_1.status !== "pending") {
          setTimeout(() => varData_549(this, varData_1618, varData_1619).call(this, param_1.status), 3000);
        }
        varData_1482.onNet("__npx_activities:" + varData_545(this, varData_1613).id + ":task:" + varData_545(this, varData_1612) + ":statusUpdate", varData_549(this, varData_1618, varData_1619).bind(this));
      }
      get id() {
        return varData_545(this, varData_1612);
      }
      onTaskStarted(param_1) {
        const varData_1623 = varData_545(this, varData_1614).get("onTaskStarted") ?? [];
        if (!varData_545(this, varData_1614).has("onTaskStarted")) {
          varData_545(this, varData_1614).set("onTaskStarted", varData_1623);
        }
        varData_1623.push(param_1);
      }
      onTaskEnded(param_1) {
        const varData_1624 = varData_545(this, varData_1614).get("onTaskEnded") ?? [];
        if (!varData_545(this, varData_1614).has("onTaskEnded")) {
          varData_545(this, varData_1614).set("onTaskEnded", varData_1624);
        }
        varData_1624.push(param_1);
      }
      emitEvent(param_1, ..._0x4b3aff) {
        return varData_1522.execute("__npx_activities:" + varData_545(this, varData_1613).id + ":task:" + varData_545(this, varData_1612) + ":event", param_1, ..._0x4b3aff);
      }
      toJSON() {
        return {
          id: varData_545(this, varData_1612),
          status: varData_545(this, varData_1617),
          objectives: [...varData_545(this, varData_1616).keys()],
          required: varData_545(this, varData_1615).map(param_1 => param_1.id)
        };
      }
      destroy() {
        varData_545(this, varData_1614).clear();
      }
    };
    varData_1612 = new WeakMap();
    varData_1613 = new WeakMap();
    varData_1614 = new WeakMap();
    varData_1615 = new WeakMap();
    varData_1616 = new WeakMap();
    varData_1617 = new WeakMap();
    varData_1618 = new WeakSet();
    varData_1619 = function (param_1) {
      const varData_1625 = varData_545(this, varData_1617);
      varData_547(this, varData_1617, param_1);
      if (varData_1625 === "pending" && param_1 === "active") {
        varData_549(this, varData_1620, varData_1621).call(this, "onTaskStarted");
      } else if (varData_1625 === "active" && (param_1 === "completed" || param_1 === "failed")) {
        varData_549(this, varData_1620, varData_1621).call(this, "onTaskEnded", param_1 === "completed");
      }
      varData_549(this, varData_1620, varData_1621).call(this, "onStatusUpdate", param_1);
    };
    varData_1620 = new WeakSet();
    varData_1621 = function (param_1, ..._0x164784) {
      const varData_1626 = varData_545(this, varData_1614).get(param_1);
      if (!varData_1626) {
        return;
      }
      for (const varData_1627 of varData_1626) {
        try {
          varData_1627.call(this, ..._0x164784);
        } catch (err) {
          console.error(err);
        }
      }
    };
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
    var varData_1642;
    var varData_1643 = class {
      constructor(param_1, param_2) {
        varData_546(this, varData_1635);
        varData_546(this, varData_1637);
        varData_546(this, varData_1639);
        varData_546(this, varData_1641);
        varData_546(this, varData_1628, undefined);
        varData_546(this, varData_1629, undefined);
        varData_546(this, varData_1630, undefined);
        varData_546(this, varData_1631, undefined);
        varData_546(this, varData_1632, undefined);
        varData_546(this, varData_1633, undefined);
        varData_546(this, varData_1634, undefined);
        varData_547(this, varData_1628, param_1.id);
        varData_547(this, varData_1629, param_1.name);
        varData_547(this, varData_1630, param_1.description);
        varData_547(this, varData_1631, param_2);
        varData_547(this, varData_1632, new Map());
        varData_547(this, varData_1633, param_1.status);
        varData_547(this, varData_1634, new Map(Object.entries(param_1.data ?? {})));
        varData_1482.onNet("__npx_activities:" + varData_545(this, varData_1631).id + ":objective:" + varData_545(this, varData_1628) + ":statusUpdate", varData_549(this, varData_1635, varData_1636).bind(this));
        varData_1482.onNet("__npx_activities:" + varData_545(this, varData_1631).id + ":objective:" + varData_545(this, varData_1628) + ":dataUpdate", varData_549(this, varData_1637, varData_1638).bind(this));
        varData_1482.onNet("__npx_activities:" + varData_545(this, varData_1631).id + ":objective:" + varData_545(this, varData_1628) + ":dataSet", varData_549(this, varData_1639, varData_1640).bind(this));
      }
      get id() {
        return varData_545(this, varData_1628);
      }
      get name() {
        return varData_545(this, varData_1629);
      }
      get description() {
        return varData_545(this, varData_1630);
      }
      get status() {
        return varData_545(this, varData_1633);
      }
      get activity() {
        return varData_545(this, varData_1631);
      }
      getData(param_1) {
        return varData_545(this, varData_1634).get(param_1);
      }
      onStatusUpdate(param_1) {
        const varData_1644 = varData_545(this, varData_1632).get("onStatusUpdate") ?? [];
        if (!varData_545(this, varData_1632).has("onStatusUpdate")) {
          varData_545(this, varData_1632).set("onStatusUpdate", varData_1644);
        }
        varData_1644.push(param_1);
      }
      onDataUpdate(param_1) {
        const varData_1645 = varData_545(this, varData_1632).get("onDataUpdate") ?? [];
        if (!varData_545(this, varData_1632).has("onDataUpdate")) {
          varData_545(this, varData_1632).set("onDataUpdate", varData_1645);
        }
        varData_1645.push(param_1);
      }
      toJSON() {
        return {
          id: varData_545(this, varData_1628),
          name: varData_545(this, varData_1629),
          description: varData_545(this, varData_1630),
          status: varData_545(this, varData_1633),
          data: Object.fromEntries(varData_545(this, varData_1634))
        };
      }
      destroy() {
        varData_545(this, varData_1632).clear();
      }
    };
    varData_1628 = new WeakMap();
    varData_1629 = new WeakMap();
    varData_1630 = new WeakMap();
    varData_1631 = new WeakMap();
    varData_1632 = new WeakMap();
    varData_1633 = new WeakMap();
    varData_1634 = new WeakMap();
    varData_1635 = new WeakSet();
    varData_1636 = function (param_1) {
      varData_547(this, varData_1633, param_1);
      varData_549(this, varData_1641, varData_1642).call(this, "onStatusUpdated", param_1);
    };
    varData_1637 = new WeakSet();
    varData_1638 = function (param_1, param_2) {
      varData_545(this, varData_1634).set(param_1, param_2);
      varData_549(this, varData_1641, varData_1642).call(this, "onDataUpdate", param_1, param_2);
    };
    varData_1639 = new WeakSet();
    varData_1640 = function (param_1) {
      for (const [_0x15ed0f, _0x32deb1] of Object.entries(param_1)) {
        varData_545(this, varData_1634).set(_0x15ed0f, _0x32deb1);
        varData_549(this, varData_1641, varData_1642).call(this, "onDataUpdate", _0x15ed0f, _0x32deb1);
      }
    };
    varData_1641 = new WeakSet();
    varData_1642 = function (param_1, ..._0x3012f5) {
      const varData_1646 = varData_545(this, varData_1632).get(param_1);
      if (!varData_1646) {
        return;
      }
      for (const varData_1647 of varData_1646) {
        try {
          varData_1647.call(this, ..._0x3012f5);
        } catch (err) {
          console.error(err);
        }
      }
    };
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
    var varData_1668;
    var varData_1669 = class {
      constructor(param_1) {
        varData_546(this, varData_1657);
        varData_546(this, varData_1659);
        varData_546(this, varData_1661);
        varData_546(this, varData_1663);
        varData_546(this, varData_1665);
        varData_546(this, varData_1667);
        varData_546(this, varData_1648, undefined);
        varData_546(this, varData_1649, undefined);
        varData_546(this, varData_1650, undefined);
        varData_546(this, varData_1651, undefined);
        varData_546(this, varData_1652, undefined);
        varData_546(this, varData_1653, undefined);
        varData_546(this, varData_1654, undefined);
        varData_546(this, varData_1655, undefined);
        varData_546(this, varData_1656, undefined);
        varData_547(this, varData_1648, param_1.id);
        varData_547(this, varData_1649, param_1.code);
        varData_547(this, varData_1650, param_1.name);
        varData_547(this, varData_1651, param_1.description);
        varData_547(this, varData_1652, new Map());
        varData_547(this, varData_1653, "pending");
        varData_547(this, varData_1654, param_1.deadline ? new Date(param_1.deadline) : null);
        varData_547(this, varData_1655, new Map());
        varData_547(this, varData_1656, new Map());
        if (param_1.status !== "pending") {
          setTimeout(() => varData_549(this, varData_1657, varData_1658).call(this, param_1.status), 3000);
        }
        param_1.objectives.forEach(param_1_1 => varData_549(this, varData_1659, varData_1660).call(this, param_1_1));
        param_1.tasks.forEach(param_1_1 => varData_549(this, varData_1663, varData_1664).call(this, param_1_1));
        varData_1482.onNet("__npx_activities:" + varData_545(this, varData_1648) + ":statusUpdate", varData_549(this, varData_1657, varData_1658).bind(this));
        varData_1482.onNet("__npx_activities:" + varData_545(this, varData_1648) + ":objectiveAdded", varData_549(this, varData_1659, varData_1660).bind(this));
        varData_1482.onNet("__npx_activities:" + varData_545(this, varData_1648) + ":objectiveRemoved", varData_549(this, varData_1661, varData_1662).bind(this));
        varData_1482.onNet("__npx_activities:" + varData_545(this, varData_1648) + ":taskAdded", varData_549(this, varData_1663, varData_1664).bind(this));
        varData_1482.onNet("__npx_activities:" + varData_545(this, varData_1648) + ":taskRemoved", varData_549(this, varData_1665, varData_1666).bind(this));
      }
      get id() {
        return varData_545(this, varData_1648);
      }
      get status() {
        return varData_545(this, varData_1653);
      }
      get objectives() {
        return varData_545(this, varData_1656);
      }
      on(param_1, param_2) {
        const varData_1670 = varData_545(this, varData_1652).get(param_1) ?? [];
        if (!varData_545(this, varData_1652).has(param_1)) {
          varData_545(this, varData_1652).set(param_1, varData_1670);
        }
        varData_1670.push(param_2);
      }
      toJSON() {
        var varData_1671;
        return {
          id: varData_545(this, varData_1648),
          code: varData_545(this, varData_1649),
          name: varData_545(this, varData_1650),
          description: varData_545(this, varData_1651),
          status: varData_545(this, varData_1653),
          deadline: ((varData_1671 = varData_545(this, varData_1654)) == null ? undefined : varData_1671.getTime()) ?? null,
          tasks: [...varData_545(this, varData_1655).values()].map(param_1 => param_1.toJSON()),
          objectives: [...varData_545(this, varData_1656).values()].map(param_1 => param_1.toJSON())
        };
      }
      destroy() {
        varData_545(this, varData_1655).forEach(param_1 => param_1.destroy());
        varData_545(this, varData_1656).forEach(param_1 => param_1.destroy());
        varData_545(this, varData_1655).clear();
        varData_545(this, varData_1656).clear();
        varData_545(this, varData_1652).clear();
      }
    };
    varData_1648 = new WeakMap();
    varData_1649 = new WeakMap();
    varData_1650 = new WeakMap();
    varData_1651 = new WeakMap();
    varData_1652 = new WeakMap();
    varData_1653 = new WeakMap();
    varData_1654 = new WeakMap();
    varData_1655 = new WeakMap();
    varData_1656 = new WeakMap();
    varData_1657 = new WeakSet();
    varData_1658 = function (param_1) {
      const varData_1672 = varData_545(this, varData_1653);
      varData_547(this, varData_1653, param_1);
      if (varData_1672 === "pending" && param_1 === "active") {
        varData_549(this, varData_1667, varData_1668).call(this, "onActivityStarted");
      } else if (param_1 === "completed" || param_1 === "failed") {
        varData_549(this, varData_1667, varData_1668).call(this, "onActivityEnded", param_1, param_1 === "completed");
      }
      varData_549(this, varData_1667, varData_1668).call(this, "onStatusUpdate", param_1);
    };
    varData_1659 = new WeakSet();
    varData_1660 = function (param_1) {
      const varData_1673 = new varData_1643(param_1, this);
      varData_1673.onStatusUpdate(param_1_1 => varData_549(this, varData_1667, varData_1668).call(this, "onObjectiveStatusUpdate", varData_1673, param_1_1));
      varData_1673.onDataUpdate((param_1_1, param_2) => varData_549(this, varData_1667, varData_1668).call(this, "onObjectiveDataUpdate", varData_1673, param_1_1, param_2));
      varData_545(this, varData_1656).set(varData_1673.id, varData_1673);
      varData_549(this, varData_1667, varData_1668).call(this, "onObjectiveAdded", varData_1673);
    };
    varData_1661 = new WeakSet();
    varData_1662 = function (param_1) {
      const varData_1674 = varData_545(this, varData_1656).get(param_1.id);
      if (!varData_1674) {
        return;
      }
      varData_545(this, varData_1656).delete(param_1.id);
      varData_549(this, varData_1667, varData_1668).call(this, "onObjectiveRemoved", varData_1674);
      varData_1674.destroy();
    };
    varData_1663 = new WeakSet();
    varData_1664 = function (param_1) {
      const varData_1675 = new varData_1622(param_1, this);
      varData_1675.onTaskStarted(() => varData_549(this, varData_1667, varData_1668).call(this, "onTaskStarted", varData_1675));
      varData_1675.onTaskEnded(param_1_1 => varData_549(this, varData_1667, varData_1668).call(this, "onTaskEnded", varData_1675, param_1_1));
      varData_545(this, varData_1655).set(varData_1675.id, varData_1675);
      varData_549(this, varData_1667, varData_1668).call(this, "onTaskAdded", varData_1675);
    };
    varData_1665 = new WeakSet();
    varData_1666 = function (param_1) {
      const varData_1676 = varData_545(this, varData_1655).get(param_1.id);
      if (!varData_1676) {
        return;
      }
      varData_545(this, varData_1655).delete(param_1.id);
      varData_549(this, varData_1667, varData_1668).call(this, "onTaskRemoved", varData_1676);
      varData_1676.destroy();
    };
    varData_1667 = new WeakSet();
    varData_1668 = function (param_1, ..._0x300ca7) {
      const varData_1677 = varData_545(this, varData_1652).get(param_1);
      if (!varData_1677) {
        return;
      }
      for (const varData_1678 of varData_1677) {
        try {
          varData_1678.call(this, ..._0x300ca7);
        } catch (err) {
          console.error(err);
        }
      }
    };
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
    var varData_1700;
    var varData_1701 = class {
      constructor(param_1) {
        varData_546(this, varData_1687);
        varData_546(this, varData_1689);
        varData_546(this, varData_1691);
        varData_546(this, varData_1693);
        varData_546(this, varData_1695);
        varData_546(this, varData_1697);
        varData_546(this, varData_1699);
        varData_546(this, varData_1679, undefined);
        varData_546(this, varData_1680, undefined);
        varData_546(this, varData_1681, undefined);
        varData_546(this, varData_1682, undefined);
        varData_546(this, varData_1683, undefined);
        varData_546(this, varData_1684, undefined);
        varData_546(this, varData_1685, undefined);
        varData_546(this, varData_1686, undefined);
        varData_547(this, varData_1679, param_1.id);
        varData_547(this, varData_1681, new Map());
        varData_547(this, varData_1682, param_1.name);
        varData_547(this, varData_1683, param_1.capacity);
        varData_547(this, varData_1685, null);
        varData_547(this, varData_1686, new Map(Object.entries(param_1.data)));
        varData_547(this, varData_1680, new Map());
        varData_547(this, varData_1684, null);
        for (const varData_1702 of param_1.members) {
          const varData_1703 = new varData_1716(varData_1702, this);
          varData_545(this, varData_1680).set(varData_1703.characterId, varData_1703);
          if (varData_1702.isLeader) {
            varData_547(this, varData_1684, varData_1703);
          }
        }
        if (param_1.activity) {
          setTimeout(() => varData_549(this, varData_1697, varData_1698).call(this, param_1.activity), 3000);
        }
        varData_1482.onNet("__npx_groups:group:" + varData_545(this, varData_1679) + ":data:update", varData_549(this, varData_1689, varData_1690).bind(this));
        varData_1482.onNet("__npx_groups:group:" + varData_545(this, varData_1679) + ":activity:set", varData_549(this, varData_1697, varData_1698).bind(this));
        varData_1482.onNet("__npx_groups:group:" + varData_545(this, varData_1679) + ":group:update", varData_549(this, varData_1687, varData_1688).bind(this));
        varData_1482.onNet("__npx_groups:group:" + varData_545(this, varData_1679) + ":member:joined", varData_549(this, varData_1691, varData_1692).bind(this));
        varData_1482.onNet("__npx_groups:group:" + varData_545(this, varData_1679) + ":member:left", varData_549(this, varData_1693, varData_1694).bind(this));
        varData_1482.onNet("__npx_groups:group:" + varData_545(this, varData_1679) + ":member:update", varData_549(this, varData_1695, varData_1696).bind(this));
      }
      get id() {
        return varData_545(this, varData_1679);
      }
      get name() {
        return varData_545(this, varData_1682);
      }
      get capacity() {
        return varData_545(this, varData_1683);
      }
      get size() {
        return varData_545(this, varData_1680).size;
      }
      get leader() {
        return varData_545(this, varData_1684);
      }
      get members() {
        return [...varData_545(this, varData_1680).values()];
      }
      get activity() {
        return varData_545(this, varData_1685);
      }
      on(param_1, param_2) {
        const varData_1704 = varData_545(this, varData_1681).get(param_1) ?? [];
        if (!varData_545(this, varData_1681).has(param_1)) {
          varData_545(this, varData_1681).set(param_1, varData_1704);
        }
        varData_1704.push(param_2);
      }
      getValue(param_1) {
        return varData_545(this, varData_1686).get(param_1);
      }
      toJSON() {
        var varData_1705;
        return {
          id: varData_545(this, varData_1679),
          name: varData_545(this, varData_1682),
          capacity: varData_545(this, varData_1683),
          activity: ((varData_1705 = varData_545(this, varData_1685)) == null ? undefined : varData_1705.toJSON()) ?? null,
          members: [...varData_545(this, varData_1680).values()].map(param_1 => param_1.toJSON()),
          data: Object.fromEntries(varData_545(this, varData_1686))
        };
      }
      destroy() {
        varData_545(this, varData_1681).clear();
        varData_545(this, varData_1680).clear();
        varData_545(this, varData_1686).clear();
      }
    };
    varData_1679 = new WeakMap();
    varData_1680 = new WeakMap();
    varData_1681 = new WeakMap();
    varData_1682 = new WeakMap();
    varData_1683 = new WeakMap();
    varData_1684 = new WeakMap();
    varData_1685 = new WeakMap();
    varData_1686 = new WeakMap();
    varData_1687 = new WeakSet();
    varData_1688 = function (param_1) {
      varData_547(this, varData_1682, param_1.name);
      varData_547(this, varData_1683, param_1.capacity);
      varData_549(this, varData_1699, varData_1700).call(this, "group:update", this);
    };
    varData_1689 = new WeakSet();
    varData_1690 = function (param_1, param_2) {
      varData_545(this, varData_1686).set(param_1, param_2);
      varData_549(this, varData_1699, varData_1700).call(this, "data:update", param_1, param_2);
    };
    varData_1691 = new WeakSet();
    varData_1692 = function (param_1) {
      const varData_1706 = new varData_1716(param_1, this);
      varData_545(this, varData_1680).set(varData_1706.characterId, varData_1706);
      varData_549(this, varData_1699, varData_1700).call(this, "member:joined", varData_1706);
    };
    varData_1693 = new WeakSet();
    varData_1694 = function (param_1) {
      const varData_1707 = varData_545(this, varData_1680).get(param_1);
      if (!varData_1707) {
        return;
      }
      varData_545(this, varData_1680).delete(param_1);
      if (varData_545(this, varData_1684) === varData_1707) {
        varData_547(this, varData_1684, null);
      }
      varData_549(this, varData_1699, varData_1700).call(this, "member:left", varData_1707);
    };
    varData_1695 = new WeakSet();
    varData_1696 = function (param_1, param_2, param_3) {
      const varData_1708 = varData_545(this, varData_1680).get(param_1);
      if (!varData_1708) {
        return;
      }
      if (varData_1708.serverId !== param_2) {
        varData_1708.updateServerId(param_2);
      }
      if (param_3) {
        varData_547(this, varData_1684, varData_1708);
      }
      varData_549(this, varData_1699, varData_1700).call(this, "member:update", varData_1708);
    };
    varData_1697 = new WeakSet();
    varData_1698 = function (param_1) {
      const varData_1709 = param_1 ? new varData_1669(param_1) : null;
      varData_547(this, varData_1685, varData_1709);
      varData_549(this, varData_1699, varData_1700).call(this, "activity:set", varData_1709);
    };
    varData_1699 = new WeakSet();
    varData_1700 = function (param_1, ..._0x4c3839) {
      const varData_1710 = varData_545(this, varData_1681).get(param_1);
      if (!varData_1710) {
        return;
      }
      for (const varData_1711 of varData_1710) {
        try {
          varData_1711.call(this, ..._0x4c3839);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1712;
    var varData_1713;
    var varData_1714;
    var varData_1715;
    var varData_1716 = class {
      constructor(param_1, param_2) {
        varData_546(this, varData_1712, undefined);
        varData_546(this, varData_1713, undefined);
        varData_546(this, varData_1714, undefined);
        varData_546(this, varData_1715, undefined);
        varData_547(this, varData_1712, param_1.characterId);
        varData_547(this, varData_1713, param_1.name);
        varData_547(this, varData_1714, param_2);
        varData_547(this, varData_1715, param_1.serverId);
      }
      get group() {
        return varData_545(this, varData_1714);
      }
      get characterId() {
        return varData_545(this, varData_1712);
      }
      get name() {
        return varData_545(this, varData_1713);
      }
      get serverId() {
        return varData_545(this, varData_1715);
      }
      get isOnline() {
        return varData_545(this, varData_1715) !== null;
      }
      get isLeader() {
        return varData_545(this, varData_1714).leader === this;
      }
      updateServerId(param_1) {
        varData_547(this, varData_1715, param_1);
      }
      toJSON() {
        return {
          characterId: varData_545(this, varData_1712),
          serverId: varData_545(this, varData_1715),
          name: varData_545(this, varData_1713),
          isLeader: this.isLeader,
          isOnline: this.isOnline
        };
      }
    };
    varData_1712 = new WeakMap();
    varData_1713 = new WeakMap();
    varData_1714 = new WeakMap();
    varData_1715 = new WeakMap();
    var varData_1717;
    var varData_1718;
    var varData_1719;
    var varData_1720;
    var varData_1721;
    var varData_1722;
    var varData_1723;
    var varData_1724;
    var varData_1725;
    var varData_1726 = class {
      constructor(param_1) {
        varData_546(this, varData_1720);
        varData_546(this, varData_1722);
        varData_546(this, varData_1724);
        varData_546(this, varData_1717, undefined);
        varData_546(this, varData_1718, undefined);
        varData_546(this, varData_1719, undefined);
        varData_547(this, varData_1717, param_1 ?? GetCurrentResourceName());
        varData_547(this, varData_1718, new Map());
        varData_547(this, varData_1719, new Map());
        varData_1482.onNet("__npx_groups:manager:" + varData_545(this, varData_1717) + ":addedToGroup", varData_549(this, varData_1720, varData_1721).bind(this));
        varData_1482.onNet("__npx_groups:manager:" + varData_545(this, varData_1717) + ":removedFromGroup", varData_549(this, varData_1722, varData_1723).bind(this));
        on("np-base:clearStates", this.reset.bind(this));
        on("np-spawn:characterSpawned", this.init.bind(this));
        const varData_1727 = varData_1432.Sync.isPed.isPed("cid");
        if (varData_1727) {
          this.init();
        }
      }
      get list() {
        return varData_545(this, varData_1718);
      }
      async init() {
        if (varData_545(this, varData_1718).size > 0) {
          this.reset();
        }
        const varData_1728 = await varData_1522.execute("__npx_groups:manager:" + varData_545(this, varData_1717) + ":init");
        if (!varData_1728) {
          return;
        }
        for (const varData_1729 of varData_1728) {
          varData_549(this, varData_1720, varData_1721).call(this, varData_1729);
        }
        varData_1490.debug("[Group Manager] Initialized! | Groups: " + varData_545(this, varData_1718).size);
      }
      reset() {
        varData_545(this, varData_1718).forEach(param_1 => param_1.destroy());
        varData_545(this, varData_1718).clear();
      }
      on(param_1, param_2) {
        const varData_1730 = varData_545(this, varData_1719).get(param_1) ?? [];
        if (!varData_545(this, varData_1719).has(param_1)) {
          varData_545(this, varData_1719).set(param_1, varData_1730);
        }
        varData_1730.push(param_2);
      }
    };
    varData_1717 = new WeakMap();
    varData_1718 = new WeakMap();
    varData_1719 = new WeakMap();
    varData_1720 = new WeakSet();
    varData_1721 = function (param_1) {
      const varData_1731 = new varData_1701(param_1);
      varData_1731.on("activity:set", param_1_1 => param_1_1 && varData_549(this, varData_1724, varData_1725).call(this, "activityAssigned", varData_1731, param_1_1));
      varData_545(this, varData_1718).set(varData_1731.id, varData_1731);
      varData_549(this, varData_1724, varData_1725).call(this, "addedToGroup", varData_1731);
    };
    varData_1722 = new WeakSet();
    varData_1723 = function (param_1) {
      const varData_1732 = varData_545(this, varData_1718).get(param_1);
      if (!varData_1732) {
        return;
      }
      varData_545(this, varData_1718).delete(param_1);
      varData_1732.destroy();
      varData_549(this, varData_1724, varData_1725).call(this, "removedFromGroup", varData_1732.id);
    };
    varData_1724 = new WeakSet();
    varData_1725 = function (param_1, ..._0xac8307) {
      const varData_1733 = varData_545(this, varData_1719).get(param_1) ?? [];
      for (const varData_1734 of varData_1733) {
        try {
          varData_1734.call(this, ..._0xac8307);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1735 = {};
    var varData_1736 = {
      GetEntityStateValue: () => handleAction_101,
      GetPlayerStateValue: () => handleAction_104,
      RegisterStatebagChangeHandler: () => handleAction_106,
      SetEntityStateValue: () => handleAction_102,
      SetPlayerStateValue: () => handleAction_105
    };
    varData_539(varData_1735, varData_1736);
    var varData_1737 = new varData_1275(5000);
    function handleAction_100(param_1) {
      let varData_1738 = varData_1737.get("ent-" + param_1);
      if (varData_1738) {
        return varData_1738;
      }
      varData_1738 = Entity(param_1);
      varData_1737.set("ent-" + param_1, varData_1738);
      return varData_1738;
    }
    function handleAction_101(param_1, param_2) {
      const varData_1739 = handleAction_100(param_1);
      return varData_1739.state[param_2];
    }
    function handleAction_102(param_1, param_2, param_3, _0x52ea68 = false) {
      const varData_1740 = handleAction_100(param_1);
      varData_1740.state.set(param_2, param_3, _0x52ea68);
    }
    function handleAction_103(param_1) {
      let varData_1741 = varData_1737.get("ply-" + param_1);
      if (varData_1741) {
        return varData_1741;
      }
      varData_1741 = Player(param_1);
      varData_1737.set("ply-" + param_1, varData_1741);
      return varData_1741;
    }
    function handleAction_104(param_1, param_2) {
      const varData_1742 = handleAction_103(param_1);
      return varData_1742.state[param_2];
    }
    function handleAction_105(param_1, param_2, param_3, _0x2533b3 = false) {
      const varData_1743 = handleAction_103(param_1);
      varData_1743.state.set(param_2, param_3, _0x2533b3);
    }
    function handleAction_106(param_1, param_2, param_3, param_4) {
      return AddStateBagChangeHandler(param_1, null, async function (param_1_1, param_2_1, param_3_1, param_4_1, param_5) {
        if (param_3 && !param_5) {
          return;
        }
        const varData_1744 = param_1_1.startsWith("player");
        const varData_1745 = parseInt(param_1_1.substring(7));
        const varData_1746 = varData_1744 ? GetPlayerFromStateBagName(param_1_1) : GetEntityFromStateBagName(param_1_1);
        if (!varData_1746) {
          return;
        }
        const varData_1747 = varData_1744 ? NetworkGetPlayerIndexFromPed(varData_1746) === PlayerId() : NetworkGetEntityOwner(varData_1746) === PlayerId();
        if (param_2 && !varData_1747) {
          return;
        }
        param_4(varData_1745, varData_1746, param_3_1);
      });
    }
    var varData_1748 = {};
    var varData_1749 = {
      GetFuelLevel: () => handleAction_114,
      GetIdentifier: () => handleAction_111,
      GetMetadata: () => handleAction_110,
      HasKey: () => handleAction_109,
      IsVinScratched: () => handleAction_112,
      SwapSeat: () => handleAction_113,
      TurnOffEngine: () => handleAction_108,
      TurnOnEngine: () => handleAction_107
    };
    varData_539(varData_1748, varData_1749);
    function handleAction_107(param_1) {
      varData_1432.Sync["np-vehicles"].TurnOnEngine(param_1);
    }
    function handleAction_108(param_1) {
      varData_1432.Sync["np-vehicles"].TurnOffEngine(param_1);
    }
    function handleAction_109(param_1) {
      return varData_1432.Sync["np-vehicles"].HasVehicleKey(param_1);
    }
    function handleAction_110(param_1, param_2) {
      const varData_1750 = handleAction_101(param_1, "data");
      if (param_2) {
        if (varData_1750 == null) {
          return undefined;
        } else {
          return varData_1750[param_2];
        }
      } else {
        return varData_1750;
      }
    }
    function handleAction_111(param_1) {
      return handleAction_101(param_1, "vin");
    }
    function handleAction_112(param_1) {
      return handleAction_101(param_1, "vinScratched");
    }
    function handleAction_113(param_1, param_2) {
      varData_1432.Sync["np-vehicles"].SwapVehicleSeat(param_1, param_2);
    }
    function handleAction_114(param_1) {
      return handleAction_110(param_1, "fuel") ?? 0;
    }
    var varData_1751 = {};
    var varData_1752 = {
      GetUIFocus: () => handleAction_119,
      RegisterUICallback: () => handleAction_115,
      SendUIAppMessage: () => handleAction_117,
      SendUIMessage: () => handleAction_116,
      SetUIFocus: () => handleAction_118
    };
    varData_539(varData_1751, varData_1752);
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
      var varData_1753 = {
        source: "np-nui",
        app: param_1,
        data: param_2
      };
      exports["np-ui"].SendUIMessage(varData_1753);
    }
    function handleAction_118(param_1, param_2) {
      exports["np-ui"].SetUIFocus(param_1, param_2);
    }
    function handleAction_119() {
      return exports["np-ui"].GetUIFocus();
    }
    AddEventHandler("_npx_uiReady", () => {
      itemList_2.forEach(param_1 => exports["np-ui"].RegisterUIEvent(param_1));
    });
    var varData_1754 = {};
    var varData_1755 = {
      Manager: () => varData_1784
    };
    varData_539(varData_1754, varData_1755);
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
    var varData_1783;
    var varData_1784 = class {
      constructor(param_1, param_2) {
        varData_546(this, varData_1760);
        varData_546(this, varData_1762);
        varData_546(this, varData_1764);
        varData_546(this, varData_1766);
        varData_546(this, varData_1768);
        varData_546(this, varData_1770);
        varData_546(this, varData_1772);
        varData_546(this, varData_1774);
        varData_546(this, varData_1776);
        varData_546(this, varData_1778);
        varData_546(this, varData_1780);
        varData_546(this, varData_1782);
        varData_546(this, varData_1756, undefined);
        varData_546(this, varData_1757, undefined);
        varData_546(this, varData_1758, null);
        varData_546(this, varData_1759, undefined);
        varData_547(this, varData_1756, param_1);
        varData_547(this, varData_1757, param_2);
        varData_547(this, varData_1759, null);
        varData_545(this, varData_1757).on("addedToGroup", varData_549(this, varData_1768, varData_1769).bind(this));
        varData_545(this, varData_1757).on("removedFromGroup", varData_549(this, varData_1770, varData_1771).bind(this));
        varData_1482.on("jobs:app:ready", () => {
          if (!varData_545(this, varData_1759)) {
            return;
          }
          varData_549(this, varData_1772, varData_1773).call(this, varData_545(this, varData_1759));
        });
        varData_1482.on("jobs:jobChanged", param_1_1 => {
          varData_547(this, varData_1758, param_1_1);
          if (!varData_545(this, varData_1759)) {
            return;
          }
          const varData_1785 = (param_1_1 == null ? undefined : param_1_1.id) === varData_545(this, varData_1756);
          if (!varData_1785) {
            return varData_549(this, varData_1770, varData_1771).call(this, varData_545(this, varData_1759).id);
          }
          varData_549(this, varData_1772, varData_1773).call(this, varData_545(this, varData_1759));
        });
        varData_1482.onNet("__npx_jobs:" + varData_545(this, varData_1756) + ":groups:invite:request", varData_549(this, varData_1762, varData_1763).bind(this));
        varData_1482.onNet("__npx_jobs:" + varData_545(this, varData_1756) + ":groups:invite:received", varData_549(this, varData_1760, varData_1761).bind(this));
        varData_1482.onNet("__npx_jobs:" + varData_545(this, varData_1756) + ":groups:invite:response", varData_549(this, varData_1764, varData_1765).bind(this));
        varData_1482.onNet("__npx_jobs:" + varData_545(this, varData_1756) + ":groups:invite:aborted", varData_549(this, varData_1766, varData_1767).bind(this));
      }
      get group() {
        return varData_545(this, varData_1759);
      }
      async sendGroupInvite(param_1) {
        if (!varData_545(this, varData_1758) || varData_545(this, varData_1758).id !== varData_545(this, varData_1756)) {
          return;
        }
        const [_0x284c17, _0x42dc88] = await varData_1522.execute("jobs:app:" + varData_545(this, varData_1756) + ":groups:invite:send", param_1);
        if (!_0x284c17) {
          return varData_1872.phoneNotification("Group Invite", _0x42dc88, true);
        }
        varData_1872.phoneNotification("Group Invite", "Invite sent!", true);
        varData_1490.debug("[Job APP] Invite sent! " + _0x42dc88);
      }
      async sendGroupJoinRequest(param_1) {
        if (!varData_545(this, varData_1758) || varData_545(this, varData_1758).id !== varData_545(this, varData_1756)) {
          return;
        }
        const [_0x3f5882, _0x2d59a9] = await varData_1522.execute("jobs:app:" + varData_545(this, varData_1756) + ":groups:invite:request", param_1);
        if (!_0x3f5882) {
          return varData_1872.phoneNotification("Group Invite", _0x2d59a9, true);
        }
        varData_1872.phoneNotification("Group Invite", "Join request sent!", true);
        varData_1490.debug("[Job APP] Join request sent! " + _0x2d59a9);
      }
    };
    varData_1756 = new WeakMap();
    varData_1757 = new WeakMap();
    varData_1758 = new WeakMap();
    varData_1759 = new WeakMap();
    varData_1760 = new WeakSet();
    varData_1761 = async function (param_1, param_2) {
      varData_1490.debug("[Job APP] Invite received! " + param_1 + " " + param_2);
      const varData_1786 = "Received an invite to join the group \"" + param_2 + "\"";
      const varData_1787 = await varData_1872.phoneConfirmation("Group Invite", varData_1786, "users", 30000);
      const [_0x4f3ce9, _0x313eb2] = await varData_1522.execute("jobs:app:" + varData_545(this, varData_1756) + ":groups:invite:response", param_1, varData_1787);
      if (!_0x4f3ce9) {
        return varData_1872.phoneNotification("Group Invite", _0x313eb2, true);
      }
    };
    varData_1762 = new WeakSet();
    varData_1763 = async function (param_1, param_2) {
      varData_1490.debug("[Job APP] Join request received! " + param_1 + " " + param_2);
      const varData_1788 = "Received a group join request from " + param_2;
      const varData_1789 = await varData_1872.phoneConfirmation("Group Invite", varData_1788, "users", 30000);
      const [_0x318557, _0x470372] = await varData_1522.execute("jobs:app:" + varData_545(this, varData_1756) + ":groups:invite:response", param_1, varData_1789);
      if (!_0x318557) {
        return varData_1872.phoneNotification("Group Invite", _0x470372, true);
      }
    };
    varData_1764 = new WeakSet();
    varData_1765 = function (param_1, param_2) {
      varData_1490.debug("[Job APP] Invite response received! " + param_1 + " " + param_2);
    };
    varData_1766 = new WeakSet();
    varData_1767 = function (param_1, param_2) {
      varData_1490.debug("[Job APP] Invite aborted! " + param_1 + " " + param_2);
    };
    varData_1768 = new WeakSet();
    varData_1769 = function (param_1) {
      varData_547(this, varData_1759, param_1);
      varData_545(this, varData_1759).on("group:update", varData_549(this, varData_1772, varData_1773).bind(this));
      varData_545(this, varData_1759).on("activity:set", varData_549(this, varData_1780, varData_1781).bind(this, param_1));
      varData_545(this, varData_1759).on("data:update", varData_549(this, varData_1782, varData_1783).bind(this, param_1));
      varData_545(this, varData_1759).on("member:joined", varData_549(this, varData_1774, varData_1775).bind(this, param_1));
      varData_545(this, varData_1759).on("member:left", varData_549(this, varData_1776, varData_1777).bind(this, param_1));
      varData_545(this, varData_1759).on("member:update", varData_549(this, varData_1778, varData_1779).bind(this, param_1));
      varData_1751.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_545(this, varData_1756),
        group: param_1.toJSON()
      });
      varData_1490.debug("[Job APP] Added to group!");
    };
    varData_1770 = new WeakSet();
    varData_1771 = function (param_1) {
      varData_547(this, varData_1759, null);
      varData_1751.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_545(this, varData_1756),
        group: null
      });
      varData_1490.debug("[Job APP] Removed from group!");
    };
    varData_1772 = new WeakSet();
    varData_1773 = function (param_1) {
      if (varData_545(this, varData_1759) !== param_1) {
        return varData_1490.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1751.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_545(this, varData_1756),
        group: param_1.toJSON()
      });
      varData_1490.debug("[Job APP] Updated group!");
    };
    varData_1774 = new WeakSet();
    varData_1775 = function (param_1, param_2) {
      if (varData_545(this, varData_1759) !== param_1) {
        return varData_1490.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1751.SendUIAppMessage("phone", {
        action: "jobs:group:addMember",
        jobId: varData_545(this, varData_1756),
        groupId: param_1.id,
        member: param_2.toJSON()
      });
      varData_1490.debug("[Job APP] Added member to group!");
    };
    varData_1776 = new WeakSet();
    varData_1777 = function (param_1, param_2) {
      if (varData_545(this, varData_1759) !== param_1) {
        return varData_1490.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1751.SendUIAppMessage("phone", {
        action: "jobs:group:removeMember",
        jobId: varData_545(this, varData_1756),
        groupId: param_1.id,
        memberId: param_2.characterId
      });
      varData_1490.debug("[Job APP] Removed member from group!");
    };
    varData_1778 = new WeakSet();
    varData_1779 = function (param_1, param_2) {
      if (varData_545(this, varData_1759) !== param_1) {
        return varData_1490.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1751.SendUIAppMessage("phone", {
        action: "jobs:group:updateMember",
        jobId: varData_545(this, varData_1756),
        groupId: param_1.id,
        member: param_2.toJSON()
      });
      varData_1490.debug("[Job APP] Updated member in group!");
    };
    varData_1780 = new WeakSet();
    varData_1781 = function (param_1, param_2) {
      if (varData_545(this, varData_1759) !== param_1) {
        return varData_1490.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      const varData_1790 = (param_2 == null ? undefined : param_2.toJSON()) ?? null;
      varData_1751.SendUIAppMessage("phone", {
        action: "jobs:group:updateActivity",
        jobId: varData_545(this, varData_1756),
        groupId: param_1.id,
        activity: varData_1790
      });
      varData_1490.debug("[Job APP] Updated activity for group!");
    };
    varData_1782 = new WeakSet();
    varData_1783 = function (param_1, param_2, param_3) {
      if (varData_545(this, varData_1759) !== param_1) {
        return varData_1490.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      } else if (param_2 !== "status") {
        return;
      }
      varData_1751.SendUIAppMessage("phone", {
        action: "jobs:group:updateStatus",
        jobId: varData_545(this, varData_1756),
        groupId: param_1.id,
        status: param_3
      });
      varData_1490.debug("[Job APP] Updated status for group!");
    };
    var varData_1791 = async param_1 => {
      const varData_1792 = typeof param_1 === "number" ? param_1 : GetHashKey(param_1);
      if (HasModelLoaded(varData_1792)) {
        return true;
      }
      RequestModel(varData_1792);
      const varData_1793 = await varData_1419.waitForCondition(() => HasModelLoaded(varData_1792), 3000);
      return !varData_1793;
    };
    var varData_1794 = async param_1 => {
      if (HasAnimDictLoaded(param_1)) {
        return true;
      }
      RequestAnimDict(param_1);
      const varData_1795 = await varData_1419.waitForCondition(() => HasAnimDictLoaded(param_1), 3000);
      return !varData_1795;
    };
    var varData_1796 = async param_1 => {
      if (HasClipSetLoaded(param_1)) {
        return true;
      }
      RequestClipSet(param_1);
      const varData_1797 = await varData_1419.waitForCondition(() => HasClipSetLoaded(param_1), 3000);
      return !varData_1797;
    };
    var varData_1798 = async param_1 => {
      if (HasStreamedTextureDictLoaded(param_1)) {
        return true;
      }
      RequestStreamedTextureDict(param_1, true);
      const varData_1799 = await varData_1419.waitForCondition(() => HasStreamedTextureDictLoaded(param_1), 3000);
      return !varData_1799;
    };
    var varData_1800 = async (param_1, param_2, param_3) => {
      const varData_1801 = typeof param_1 === "number" ? param_1 : GetHashKey(param_1);
      if (HasWeaponAssetLoaded(varData_1801)) {
        return true;
      }
      RequestWeaponAsset(varData_1801, param_2, param_3);
      const varData_1802 = await varData_1419.waitForCondition(() => HasWeaponAssetLoaded(varData_1801), 3000);
      return !varData_1802;
    };
    var varData_1803 = async param_1 => {
      if (HasNamedPtfxAssetLoaded(param_1)) {
        return true;
      }
      RequestNamedPtfxAsset(param_1);
      const varData_1804 = await varData_1419.waitForCondition(() => HasNamedPtfxAssetLoaded(param_1), 3000);
      return !varData_1804;
    };
    var varData_1805 = {
      loadModel: varData_1791,
      loadTexture: varData_1798,
      loadAnim: varData_1794,
      loadClipSet: varData_1796,
      loadWeaponAsset: varData_1800,
      loadNamedPtfxAsset: varData_1803
    };
    var varData_1806 = varData_1805;
    var varData_1807 = (param_1, ..._0x1768ea) => {
      switch (param_1) {
        case "coord":
          {
            const [_0xf1cbf3, _0x5b6a15, _0x122968] = _0x1768ea;
            return AddBlipForCoord(_0xf1cbf3, _0x5b6a15, _0x122968);
          }
        case "area":
          {
            const [_0x1b0ef8, _0x56fc22, _0x226fea, _0x2c9866, _0x36c82a] = _0x1768ea;
            return AddBlipForArea(_0x1b0ef8, _0x56fc22, _0x226fea, _0x2c9866, _0x36c82a);
          }
        case "radius":
          {
            const [_0x184ff1, _0x19eecf, _0x2b32f4, _0x34b4b6] = _0x1768ea;
            return AddBlipForRadius(_0x184ff1, _0x19eecf, _0x2b32f4, _0x34b4b6);
          }
        case "pickup":
          {
            const [_0x15af54] = _0x1768ea;
            return AddBlipForPickup(_0x15af54);
          }
        case "entity":
          {
            const [_0x45b422] = _0x1768ea;
            return AddBlipForEntity(_0x45b422);
          }
        default:
          {
            console.error(new Error("Invalid Blip Type"));
            return 0;
          }
      }
    };
    var varData_1808 = (param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) => {
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
    var varData_1809 = {
      createBlip: varData_1807,
      applyBlipSettings: varData_1808
    };
    var varData_1810 = varData_1809;
    var dataSet_1 = new Set();
    var dataMap_1 = new Map();
    var dataSet_2 = new Set();
    on("np-polyzone:enter", (param_1, param_2) => {
      dataSet_1.add(param_1);
      if (param_2 == null ? undefined : param_2.id) {
        dataSet_1.add(param_1 + "-" + param_2.id);
      }
      if (dataSet_2.has(param_1)) {
        varData_1482.emitNet("__sdk:zones:" + param_1 + ":enter", param_2);
      }
      const varData_1811 = dataMap_1.get(param_1 + "-enter");
      if (varData_1811 === undefined) {
        return;
      }
      for (const varData_1812 of varData_1811) {
        try {
          varData_1812(param_2);
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
        varData_1482.emitNet("__sdk:zones:" + param_1 + ":exit", param_2);
      }
      const varData_1813 = dataMap_1.get(param_1 + "-exit");
      if (varData_1813 === undefined) {
        return;
      }
      for (const varData_1814 of varData_1813) {
        try {
          varData_1814(param_2);
        } catch (err) {
          console.log(err);
        }
      }
    });
    var varData_1815 = (param_1, param_2) => {
      return dataSet_1.has(param_2 ? param_1 + "-" + param_2 : param_1);
    };
    var varData_1816 = (param_1, param_2) => {
      const varData_1817 = param_1 + "-enter";
      const varData_1818 = dataMap_1.get(varData_1817) ?? [];
      if (!dataMap_1.has(varData_1817)) {
        dataMap_1.set(varData_1817, varData_1818);
      }
      varData_1818.push(param_2);
    };
    var varData_1819 = (param_1, param_2) => {
      const varData_1820 = param_1 + "-exit";
      const varData_1821 = dataMap_1.get(varData_1820) ?? [];
      if (!dataMap_1.has(varData_1820)) {
        dataMap_1.set(varData_1820, varData_1821);
      }
      varData_1821.push(param_2);
    };
    var varData_1822 = (param_1, param_2, param_3, param_4, _0x584459 = {}) => {
      var varData_1823 = {
        ...param_4
      };
      varData_1823.data = _0x584459;
      varData_1823.id = param_1;
      const varData_1824 = varData_1823;
      varData_1824.data.id = param_1;
      exports["np-polyzone"].AddPolyZone(param_2, param_3, varData_1824);
    };
    var varData_1825 = (param_1, param_2, param_3, param_4, param_5, param_6, _0x3d4de6 = {}) => {
      var varData_1826 = {
        ...param_6
      };
      varData_1826.data = _0x3d4de6;
      varData_1826.id = param_1;
      const varData_1827 = varData_1826;
      varData_1827.data.id = param_1;
      exports["np-polyzone"].AddBoxZone(param_2, param_3, param_4, param_5, varData_1827);
    };
    var varData_1828 = (param_1, param_2, param_3, param_4, param_5, _0x40a4d2 = {}) => {
      var varData_1829 = {
        ...param_5
      };
      varData_1829.data = _0x40a4d2;
      varData_1829.id = param_1;
      const varData_1830 = varData_1829;
      varData_1830.data.id = param_1;
      exports["np-polyzone"].AddCircleZone(param_2, param_3, param_4, varData_1830);
    };
    var varData_1831 = (param_1, param_2, param_3, param_4, _0x359717 = {}) => {
      var varData_1832 = {
        ...param_4
      };
      varData_1832.data = _0x359717;
      const varData_1833 = varData_1832;
      varData_1833.data.id = param_1;
      exports["np-polyzone"].AddEntityZone(param_2, param_3, varData_1833);
    };
    var varData_1834 = (param_1, param_2) => {
      exports["np-polyzone"].RemoveZone(param_1, param_2);
      dataSet_1.delete(param_1 + "-" + param_2);
      dataSet_2.delete(param_1);
    };
    var varData_1835 = param_1 => {
      dataSet_2.add(param_1);
    };
    var varData_1836 = {
      isActive: varData_1815,
      onEnter: varData_1816,
      onExit: varData_1819,
      addPolyZone: varData_1822,
      addBoxZone: varData_1825,
      addCircleZone: varData_1828,
      addEntityZone: varData_1831,
      removeZone: varData_1834,
      setAsNetworked: varData_1835
    };
    var varData_1837 = varData_1836;
    var varData_1838 = (param_1, param_2, param_3, param_4) => {
      var varData_1839 = {
        id: param_1,
        coords: [param_2.x, param_2.y, param_2.z],
        options: param_3,
        context: param_4
      };
      const varData_1840 = varData_1839;
      globalThis.exports.interactions.AddInteraction(varData_1840);
    };
    var varData_1841 = (param_1, param_2, param_3, param_4) => {
      var varData_1842 = {
        id: param_1,
        options: param_3,
        context: param_4
      };
      const varData_1843 = varData_1842;
      globalThis.exports.interactions.AddInteractionByModel(param_2, varData_1843);
    };
    var varData_1844 = (param_1, param_2, param_3) => {
      var varData_1845 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_1846 = varData_1845;
      varData_1846.context.isPlayer = true;
      globalThis.exports.interactions.AddPedInteraction(varData_1846);
    };
    var varData_1847 = (param_1, param_2, param_3) => {
      var varData_1848 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_1849 = varData_1848;
      globalThis.exports.interactions.AddPedInteraction(varData_1849);
    };
    var varData_1850 = param_1 => {
      return globalThis.exports.interactions.DoesInteractionExists(param_1);
    };
    var varData_1851 = (param_1, param_2, param_3) => {
      var varData_1852 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_1853 = varData_1852;
      globalThis.exports.interactions.AddVehicleInteraction(varData_1853);
    };
    var varData_1854 = param_1 => {
      globalThis.exports.interactions.RemoveInteraction(param_1);
    };
    var varData_1855 = param_1 => {
      globalThis.exports.interactions.RemoveVehicleInteraction(param_1);
    };
    var varData_1856 = param_1 => {
      globalThis.exports.interactions.RemovePedInteraction(param_1);
    };
    var varData_1857 = (param_1, param_2, _0x15c4f9 = false, _0x54138c = null, _0x2a0328 = true, _0x69cc1 = null) => {
      return new Promise(param_1_1 => {
        globalThis.exports["np-taskbar"].taskBar(param_1, param_2, _0x15c4f9, _0x2a0328, _0x69cc1, false, param_1_1, _0x54138c == null ? undefined : _0x54138c.distance, _0x54138c == null ? undefined : _0x54138c.entity);
      });
    };
    var varData_1858 = (param_1, param_2, param_3, param_4) => {
      return new Promise(param_1_1 => {
        globalThis.exports["np-phone"].DoPhoneConfirmation(param_1, param_2, param_3, param_1_1, param_4);
      });
    };
    var varData_1859 = (param_1, param_2, _0x4c15e4 = true, _0x5aff53 = "home-screen") => {
      var varData_1860 = {
        action: "notification",
        target_app: _0x5aff53,
        title: param_1,
        body: param_2,
        show_even_if_app_active: _0x4c15e4
      };
      var varData_1861 = {
        source: "np-nui",
        app: "phone",
        data: varData_1860
      };
      globalThis.exports["np-ui"].SendUIMessage(varData_1861);
    };
    var varData_1862 = (param_1, param_2, param_3, param_4, param_5, param_6, _0x867364 = 0, _0x264c15 = true) => {
      SetTextColour(param_4[0], param_4[1], param_4[2], param_4[3]);
      if (_0x264c15) {
        SetTextOutline();
      }
      SetTextScale(0, param_5);
      SetTextFont(param_6 ?? 0);
      SetTextJustification(_0x867364);
      if (_0x867364 === 2) {
        SetTextWrap(0, 0.575);
      }
      SetTextEntry("STRING");
      AddTextComponentString(param_3 ?? "Dummy text");
      EndTextCommandDisplayText(param_1, param_2);
    };
    var varData_1863 = (param_1, param_2, param_3, param_4, _0x23934a = 4, _0x525553 = true, param_7) => {
      SetDrawOrigin(param_1.x, param_1.y, param_1.z, 0);
      const varData_1864 = Math.max(varData_1402.getMapRange([0, 10], [0.4, 0.25], param_2), 0.1);
      varData_1862(0, 0, param_3, param_4, varData_1864, _0x23934a, 0, _0x525553);
      if (param_7) {
        DrawRect(0.002, param_7.height / 2, param_7.width, param_7.height, param_7.color[0], param_7.color[1], param_7.color[2], param_7.color[3]);
      }
      ClearDrawOrigin();
    };
    var varData_1865 = (param_1, param_2, param_3, param_4) => {
      globalThis.exports.contacts.open(param_1, param_2, param_3, param_4, true);
    };
    var varData_1866 = param_1 => {
      globalThis.exports.hud.AddOrUpdateHudBar(param_1);
    };
    var varData_1867 = param_1 => {
      globalThis.exports.hud.RemoveHudBar(param_1);
    };
    async function handleAction_120(param_1) {
      const varData_1868 = param_1_1 => {
        for (const varData_1869 of param_1) {
          if (varData_1869._type === "number" && isNaN(param_1_1[varData_1869.name])) {
            return false;
          }
          if (varData_1869._type === "text" && typeof param_1_1[varData_1869.name] !== "string") {
            return false;
          }
        }
        return true;
      };
      return await varData_1432.Sync["np-ui"].OpenInputMenu(param_1, varData_1868);
    }
    async function handleAction_121(param_1, param_2) {
      const varData_1870 = {
        info: 1,
        error: 2
      };
      emit("DoLongHudText", param_1, varData_1870[param_2]);
    }
    var varData_1871 = {
      addInteraction: varData_1838,
      addInteractionByModel: varData_1841,
      addPlayerInteraction: varData_1844,
      addPedInteraction: varData_1847,
      addVehicleInteraction: varData_1851,
      removeInteraction: varData_1854,
      removePlayerInteraction: varData_1856,
      removePedInteraction: varData_1856,
      removeVehicleInteraction: varData_1855,
      doesInteractionExists: varData_1850,
      taskBar: varData_1857,
      phoneConfirmation: varData_1858,
      phoneNotification: varData_1859,
      drawText: varData_1862,
      drawText3D: varData_1863,
      customContact: varData_1865,
      AddOrUpdateHudBar: varData_1866,
      RemoveHudBar: varData_1867,
      openInputMenu: handleAction_120,
      displayNotification: handleAction_121
    };
    var varData_1872 = varData_1871;
    var varData_1873 = async param_1 => {
      return globalThis.exports["np-heists"].BankMinigame(param_1);
    };
    var varData_1874 = async param_1 => {
      return globalThis.exports["np-heists"].DDRMinigame(param_1);
    };
    var varData_1875 = async param_1 => {
      return globalThis.exports.skillchecks.DirectionMinigame(param_1);
    };
    var varData_1876 = async () => {
      return globalThis.exports.skillchecks.DrillingMinigame();
    };
    var varData_1877 = async param_1 => {
      return globalThis.exports.skillchecks.FlipMinigame(param_1);
    };
    var varData_1878 = async param_1 => {
      return globalThis.exports.skillchecks.FloodMinigame(param_1);
    };
    var varData_1879 = async param_1 => {
      return globalThis.exports.skillchecks.TaskBarMinigame(param_1.difficulty, param_1.gap, param_1.iterations, param_1.useReverse);
    };
    var varData_1880 = async param_1 => {
      return globalThis.exports.skillchecks.MazeMinigame(param_1);
    };
    var varData_1881 = async param_1 => {
      return globalThis.exports.skillchecks.CrackSafe(param_1.locks);
    };
    var varData_1882 = async param_1 => {
      return globalThis.exports.skillchecks.SameMinigame(param_1);
    };
    var varData_1883 = async param_1 => {
      return globalThis.exports["np-heists"].ThermiteMinigame(param_1);
    };
    var varData_1884 = async param_1 => {
      return globalThis.exports.skillchecks.UntangleMinigame(param_1);
    };
    var varData_1885 = async param_1 => {
      return globalThis.exports["np-heists"].VarMinigame(param_1);
    };
    var varData_1886 = async param_1 => {
      return globalThis.exports.skillchecks.WordsMinigame(param_1);
    };
    var varData_1887 = async param_1 => {
      return globalThis.exports.skillchecks.AlphabetMinigame(param_1);
    };
    var varData_1888 = async param_1 => {
      return globalThis.exports.skillchecks.LockpickMinigame(param_1);
    };
    var varData_1889 = async param_1 => {
      return globalThis.exports.skillchecks.PinCrackMinigame(param_1);
    };
    var varData_1890 = async param_1 => {
      return globalThis.exports.skillchecks.TerminalMinigame(param_1);
    };
    var varData_1891 = async param_1 => {
      return globalThis.exports.skillchecks.SequenceMinigame(param_1);
    };
    var varData_1892 = async param_1 => {
      return globalThis.exports.skillchecks.SudokuMinigame(param_1);
    };
    var varData_1893 = async param_1 => {
      return globalThis.exports.skillchecks.MemoryMinigame(param_1);
    };
    var varData_1894 = {
      BankMinigame: varData_1873,
      DDRMinigame: varData_1874,
      DirectionMinigame: varData_1875,
      DrillingMinigame: varData_1876,
      FlipMinigame: varData_1877,
      FloodMinigame: varData_1878,
      TaskBarMinigame: varData_1879,
      MazeMinigame: varData_1880,
      CrackSafe: varData_1881,
      SameMinigame: varData_1882,
      ThermiteMinigame: varData_1883,
      UntangleMinigame: varData_1884,
      VarMinigame: varData_1885,
      WordsMinigame: varData_1886,
      AlphabetMinigame: varData_1887,
      LockpickMinigame: varData_1888,
      PinCrackMinigame: varData_1889,
      TerminalMinigame: varData_1890,
      SequenceMinigame: varData_1891,
      SudokuMinigame: varData_1892,
      MemoryMinigame: varData_1893
    };
    var varData_1895 = varData_1894;
    var varData_1896 = {
      async hasPermission(param_1, _0x5dc498 = {}) {
        return await exports.permissions.hasPermission(param_1, _0x5dc498);
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
    var varData_1897 = {
      RegisterAction: (param_1, param_2, param_3) => {
        return varData_1432.Sync.contacts.RegisterAction(param_1, param_2, param_3);
      }
    };
    var varData_1898 = {
      RegisterEditorHandlerClient: async param_1 => {
        return await globalThis.exports.editor.RegisterEditorHandlerClient(param_1);
      }
    };
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
    var varData_1909 = class {
      constructor(param_1) {
        varData_546(this, varData_1907);
        varData_546(this, varData_1899, undefined);
        varData_546(this, varData_1900, undefined);
        varData_546(this, varData_1901, undefined);
        varData_546(this, varData_1902, undefined);
        varData_546(this, varData_1903, undefined);
        varData_546(this, varData_1904, undefined);
        varData_546(this, varData_1905, false);
        varData_546(this, varData_1906, []);
        varData_547(this, varData_1899, param_1.codename);
        varData_547(this, varData_1900, param_1.version);
        varData_547(this, varData_1901, GetCurrentResourceName());
        varData_547(this, varData_1902, "np-inventory");
        emit("__npx_core:handshake", param_1, varData_549(this, varData_1907, varData_1908).bind(this));
        varData_1583.register("__npx_core:handshake", async param_1_1 => {
          if (param_1_1.codename !== varData_545(this, varData_1899)) {
            return;
          }
          const varData_1910 = await varData_1419.waitForCondition(() => varData_545(this, varData_1905), 10000);
          if (varData_1910) {
            return;
          }
          return {
            API_URL: varData_545(this, varData_1903),
            API_KEY: varData_545(this, varData_1904)
          };
        });
      }
      get codename() {
        return varData_545(this, varData_1899);
      }
      get version() {
        return varData_545(this, varData_1900);
      }
      get isReady() {
        return varData_545(this, varData_1905);
      }
      onReady(param_1) {
        if (varData_545(this, varData_1905)) {
          param_1();
        } else {
          varData_545(this, varData_1906).push(param_1);
        }
      }
    };
    varData_1899 = new WeakMap();
    varData_1900 = new WeakMap();
    varData_1901 = new WeakMap();
    varData_1902 = new WeakMap();
    varData_1903 = new WeakMap();
    varData_1904 = new WeakMap();
    varData_1905 = new WeakMap();
    varData_1906 = new WeakMap();
    varData_1907 = new WeakSet();
    varData_1908 = async function (param_1) {
      varData_547(this, varData_1903, param_1.API_URL);
      varData_547(this, varData_1904, param_1.API_KEY);
      varData_547(this, varData_1905, true);
      for (const varData_1911 of varData_545(this, varData_1906)) {
        varData_1911();
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
        var varData_1912 = param_1[param_6](param_7);
        var varData_1913 = varData_1912.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_1912.done) {
        param_2(varData_1913);
      } else {
        Promise.resolve(varData_1913).then(param_4, param_5);
      }
    }
    function handleAction_123(param_1) {
      return function () {
        var varData_1914 = this;
        var varData_1915 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_1916 = param_1.apply(varData_1914, varData_1915);
          function handleAction_124(param_1_2) {
            handleAction_122(varData_1916, param_1_1, param_2, handleAction_124, handleAction_125, "next", param_1_2);
          }
          function handleAction_125(param_1_2) {
            handleAction_122(varData_1916, param_1_1, param_2, handleAction_124, handleAction_125, "throw", param_1_2);
          }
          handleAction_124(undefined);
        });
      };
    }
    function handleAction_126(param_1, param_2) {
      var varData_1917;
      var varData_1918;
      var varData_1919;
      var varData_1920;
      var varData_1921 = {
        label: 0,
        sent: function () {
          if (varData_1919[0] & 1) {
            throw varData_1919[1];
          }
          return varData_1919[1];
        },
        trys: [],
        ops: []
      };
      varData_1920 = {
        next: handleAction_127(0),
        throw: handleAction_127(1),
        return: handleAction_127(2)
      };
      if (typeof Symbol === "function") {
        varData_1920[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_1920;
      function handleAction_127(param_1_1) {
        return function (param_1_2) {
          return handleAction_128([param_1_1, param_1_2]);
        };
      }
      function handleAction_128(param_1_1) {
        if (varData_1917) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_1921) {
          try {
            varData_1917 = 1;
            if (varData_1918 && (varData_1919 = param_1_1[0] & 2 ? varData_1918.return : param_1_1[0] ? varData_1918.throw || ((varData_1919 = varData_1918.return) && varData_1919.call(varData_1918), 0) : varData_1918.next) && !(varData_1919 = varData_1919.call(varData_1918, param_1_1[1])).done) {
              return varData_1919;
            }
            varData_1918 = 0;
            if (varData_1919) {
              param_1_1 = [param_1_1[0] & 2, varData_1919.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_1919 = param_1_1;
                break;
              case 4:
                varData_1921.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_1921.label++;
                varData_1918 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_1921.ops.pop();
                varData_1921.trys.pop();
                continue;
              default:
                if (!(varData_1919 = varData_1921.trys, varData_1919 = varData_1919.length > 0 && varData_1919[varData_1919.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_1921 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_1919 || param_1_1[1] > varData_1919[0] && param_1_1[1] < varData_1919[3])) {
                  varData_1921.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_1921.label < varData_1919[1]) {
                  varData_1921.label = varData_1919[1];
                  varData_1919 = param_1_1;
                  break;
                }
                if (varData_1919 && varData_1921.label < varData_1919[2]) {
                  varData_1921.label = varData_1919[2];
                  varData_1921.ops.push(param_1_1);
                  break;
                }
                if (varData_1919[2]) {
                  varData_1921.ops.pop();
                }
                varData_1921.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_1921);
          } catch (err) {
            param_1_1 = [6, err];
            varData_1918 = 0;
          } finally {
            varData_1917 = varData_1919 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_1922 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_1922;
      }
    }
    var varData_1923 = function () {
      var varData_1924 = handleAction_123(function () {
        return handleAction_126(this, function (param_1) {
          return [2];
        });
      });
      return function _0x4e8f55() {
        return varData_1924.apply(this, arguments);
      };
    }();
    var varData_1925 = function () {
      var varData_1926 = handleAction_123(function (param_1, param_2) {
        return handleAction_126(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              var varData_1927 = {
                itemId: param_1,
                filterOptions: param_2
              };
              return [4, varData_1583.execute("inventory:hasItem", varData_1927)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function _0x28d857(param_1, param_2) {
        return varData_1926.apply(this, arguments);
      };
    }();
    varData_1432.Sync("HasItem", varData_1925);
    var varData_1928 = function () {
      var varData_1929 = handleAction_123(function (param_1, param_2) {
        return handleAction_126(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              var varData_1930 = {
                itemId: param_1,
                filterOptions: param_2
              };
              return [4, varData_1583.execute("inventory:getItemStacks", varData_1930)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function _0x450e50(param_1, param_2) {
        return varData_1929.apply(this, arguments);
      };
    }();
    varData_1432.Sync("GetItemStacks", varData_1928);
    var varData_1931 = function () {
      var varData_1932 = handleAction_123(function (param_1) {
        return handleAction_126(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              var varData_1933 = {
                filterOptions: param_1
              };
              return [4, varData_1583.execute("inventory:getAllItemStacks", varData_1933)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function _0x4d4a35(param_1) {
        return varData_1932.apply(this, arguments);
      };
    }();
    varData_1432.Sync("GetAllItemStacks", varData_1931);
    var varData_1934 = function () {
      var varData_1935 = handleAction_123(function () {
        return handleAction_126(this, function (param_1) {
          switch (param_1.label) {
            case 0:
              return [4, varData_1583.execute("inventory:getItemList")];
            case 1:
              return [2, param_1.sent()];
          }
        });
      });
      return function _0x30b50d() {
        return varData_1935.apply(this, arguments);
      };
    }();
    varData_1432.Sync("GetItemList", varData_1934);
    var varData_1936 = function () {
      var varData_1937 = handleAction_123(function () {
        return handleAction_126(this, function (param_1) {
          switch (param_1.label) {
            case 0:
              return [4, varData_1583.execute("inventory:getPlayerInventories")];
            case 1:
              return [2, param_1.sent()];
          }
        });
      });
      return function _0x2845b7() {
        return varData_1937.apply(this, arguments);
      };
    }();
    varData_1432.Sync("GetPlayerInventories", varData_1936);
    var varData_1938 = function () {
      var varData_1939 = handleAction_123(function () {
        return handleAction_126(this, function (param_1) {
          switch (param_1.label) {
            case 0:
              return [4, varData_1583.execute("inventory:getPlayerInventoriesWeight")];
            case 1:
              return [2, param_1.sent()];
          }
        });
      });
      return function _0x595c67() {
        return varData_1939.apply(this, arguments);
      };
    }();
    varData_1432.Sync("GetPlayerInventoriesWeight", varData_1938);
    ;
    function handleAction_129() {}
    function handleAction_130(param_1) {
      if (param_1 == null) {
        throw new Error("Invalid clientId");
      }
      var varData_1940 = param_1.split("-");
      var varData_1941 = varData_1940[0] ? Number(varData_1940[0]) : null;
      if (Number.isNaN(varData_1941)) {
        varData_1941 = null;
      }
      var varData_1942 = varData_1940[1] ? Number(varData_1940[1]) : null;
      if (Number.isNaN(varData_1942)) {
        varData_1942 = null;
      }
      var varData_1943 = {
        serverId: varData_1941,
        characterId: varData_1942
      };
      return varData_1943;
    }
    function handleAction_131(param_1) {
      if (!param_1) {
        return {};
      }
      if (typeof param_1 !== "object") {
        throw new Error("Value is not an object");
      }
      return Object.assign({}, param_1);
    }
    function handleAction_132(param_1) {
      return [`ply-${param_1}`, `backpack-${param_1}`, `body-${param_1}`];
    }
    function handleAction_133(param_1, param_2, param_3) {
      param_1 = +param_1.toFixed(1);
      param_2 = +param_2.toFixed(1);
      param_3 = +param_3.toFixed(1);
      return `${param_1},${param_2},${param_3}`;
    }
    ;
    function handleAction_134(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_1944 = param_1[param_6](param_7);
        var varData_1945 = varData_1944.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_1944.done) {
        param_2(varData_1945);
      } else {
        Promise.resolve(varData_1945).then(param_4, param_5);
      }
    }
    function handleAction_135(param_1) {
      return function () {
        var varData_1946 = this;
        var varData_1947 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_1948 = param_1.apply(varData_1946, varData_1947);
          function handleAction_136(param_1_2) {
            handleAction_134(varData_1948, param_1_1, param_2, handleAction_136, handleAction_137, "next", param_1_2);
          }
          function handleAction_137(param_1_2) {
            handleAction_134(varData_1948, param_1_1, param_2, handleAction_136, handleAction_137, "throw", param_1_2);
          }
          handleAction_136(undefined);
        });
      };
    }
    function handleAction_138(param_1, param_2) {
      var varData_1949;
      var varData_1950;
      var varData_1951;
      var varData_1952;
      var varData_1953 = {
        label: 0,
        sent: function () {
          if (varData_1951[0] & 1) {
            throw varData_1951[1];
          }
          return varData_1951[1];
        },
        trys: [],
        ops: []
      };
      varData_1952 = {
        next: handleAction_139(0),
        throw: handleAction_139(1),
        return: handleAction_139(2)
      };
      if (typeof Symbol === "function") {
        varData_1952[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_1952;
      function handleAction_139(param_1_1) {
        return function (param_1_2) {
          return handleAction_140([param_1_1, param_1_2]);
        };
      }
      function handleAction_140(param_1_1) {
        if (varData_1949) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_1953) {
          try {
            varData_1949 = 1;
            if (varData_1950 && (varData_1951 = param_1_1[0] & 2 ? varData_1950.return : param_1_1[0] ? varData_1950.throw || ((varData_1951 = varData_1950.return) && varData_1951.call(varData_1950), 0) : varData_1950.next) && !(varData_1951 = varData_1951.call(varData_1950, param_1_1[1])).done) {
              return varData_1951;
            }
            varData_1950 = 0;
            if (varData_1951) {
              param_1_1 = [param_1_1[0] & 2, varData_1951.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_1951 = param_1_1;
                break;
              case 4:
                varData_1953.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_1953.label++;
                varData_1950 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_1953.ops.pop();
                varData_1953.trys.pop();
                continue;
              default:
                if (!(varData_1951 = varData_1953.trys, varData_1951 = varData_1951.length > 0 && varData_1951[varData_1951.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_1953 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_1951 || param_1_1[1] > varData_1951[0] && param_1_1[1] < varData_1951[3])) {
                  varData_1953.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_1953.label < varData_1951[1]) {
                  varData_1953.label = varData_1951[1];
                  varData_1951 = param_1_1;
                  break;
                }
                if (varData_1951 && varData_1953.label < varData_1951[2]) {
                  varData_1953.label = varData_1951[2];
                  varData_1953.ops.push(param_1_1);
                  break;
                }
                if (varData_1951[2]) {
                  varData_1953.ops.pop();
                }
                varData_1953.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_1953);
          } catch (err) {
            param_1_1 = [6, err];
            varData_1950 = 0;
          } finally {
            varData_1949 = varData_1951 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_1954 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_1954;
      }
    }
    var itemList_3 = [];
    var varData_1955 = function () {
      var varData_1956 = handleAction_135(function () {
        var varData_1957;
        var varData_1958;
        var varData_1959;
        var varData_1960;
        var varData_1961;
        var varData_1962;
        var varData_1963;
        return handleAction_138(this, function (param_1) {
          switch (param_1.label) {
            case 0:
              return [4, varData_1522.execute("inventory:get:foodItemIds")];
            case 1:
              varData_1957 = param_1.sent();
              varData_1958 = true;
              varData_1959 = false;
              varData_1960 = undefined;
              try {
                for (varData_1961 = varData_1957[Symbol.iterator](); !(varData_1958 = (varData_1962 = varData_1961.next()).done); varData_1958 = true) {
                  varData_1963 = varData_1962.value;
                  itemList_3.push(varData_1963);
                }
              } catch (err) {
                varData_1959 = true;
                varData_1960 = err;
              } finally {
                try {
                  if (!varData_1958 && varData_1961.return != null) {
                    varData_1961.return();
                  }
                } finally {
                  if (varData_1959) {
                    throw varData_1960;
                  }
                }
              }
              return [2];
          }
        });
      });
      return function _0x47bfe1() {
        return varData_1956.apply(this, arguments);
      };
    }();
    var varData_1964 = {
      a_c_shepherd: {
        pos: [0, 0, 0.05],
        rot: [90, 0, 90]
      },
      a_c_husky: {
        pos: [0.01, 0, 0.035],
        rot: [135, 0, 90]
      },
      a_c_retriever: {
        pos: [0, 0, 0.05],
        rot: [90, 0, 90]
      }
    };
    for (var varData_1965 in varData_1964) {
      var varData_1966 = varData_1964[varData_1965];
      varData_1964[varData_1965 + "_np"] = varData_1966;
      varData_1964[GetHashKey(varData_1965)] = varData_1966;
      varData_1964[GetHashKey(varData_1965 + "_np")] = varData_1966;
    }
    varData_1522.register("inventory:handler:eatFood", function () {
      var varData_1967 = handleAction_135(function (param_1, param_2) {
        var varData_1968;
        var varData_1969;
        var varData_1970;
        var varData_1971;
        var varData_1972;
        var varData_1973;
        var varData_1974;
        var varData_1975;
        var varData_1976;
        var varData_1977;
        var varData_1978;
        var varData_1979;
        var varData_1980;
        var varData_1981;
        var varData_1982;
        return handleAction_138(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_1968 = PlayerPedId();
              varData_1969 = new varData_1272(GetEntityCoords(varData_1968, true));
              varData_1970 = GetEntityModel(varData_1968);
              varData_1971 = varData_1432.Sync["np-character"].isAnimalModel(varData_1970);
              if (varData_1971) {
                ;
                varData_1972 = varData_1964[varData_1970];
                param_2.dict = "creatures@rottweiler@move";
                param_2.anim = "fetch_pickup";
                param_2.bone = 20623;
                ;
                param_2.pos = varData_1972?.pos ?? [0, 0, 0.05];
                ;
                param_2.rot = varData_1972?.rot ?? [90, 0, 90];
                param_2.rotOrder = 2;
                param_2.flag = 4;
              }
              varData_1973 = param_2.dict ?? (param_2.isDrink ? "amb@world_human_drinking@coffee@male@idle_a" : "mp_player_inteat@burger");
              varData_1974 = param_2.anim ?? (param_2.isDrink ? "idle_c" : "mp_player_int_eat_burger");
              return [4, varData_1806.loadAnim(varData_1973)];
            case 1:
              param_1_1.sent();
              varData_1975 = param_1.model ?? "prop_cs_burger_01";
              return [4, varData_1806.loadModel(varData_1975)];
            case 2:
              param_1_1.sent();
              varData_1976 = CreateObject(varData_1975, varData_1969.x, varData_1969.y, varData_1969.z - 2, true, true, false);
              SetModelAsNoLongerNeeded(varData_1975);
              SetEntityCollision(varData_1976, false, false);
              varData_1977 = param_2.bone ?? (param_2.isDrink ? 57005 : 18905);
              var varData_1983 = {
                order: param_2.rotOrder
              };
              varData_1490.debug(`Attaching prop to bone ${varData_1977}`, varData_1983);
              AttachEntityToEntity(varData_1976, varData_1968, GetPedBoneIndex(varData_1968, varData_1977), param_2.pos ? param_2.pos[0] : 0.12, param_2.pos ? param_2.pos[1] : 0, param_2.pos ? param_2.pos[2] : -0.02, param_2.rot ? param_2.rot[0] : -204.7526, param_2.rot ? param_2.rot[1] : 51.7348, param_2.rot ? param_2.rot[2] : 102.7233, true, true, false, true, param_2.rotOrder ?? 2, true);
              varData_1978 = true;
              param_1_1.label = 3;
            case 3:
              param_1_1.trys.push([3,, 5, 6]);
              if (varData_1971) {
                ;
                TaskPlayAnim(varData_1968, varData_1973, varData_1974, 8, -8, -1, param_2.flag ?? 49, 0, false, false, false);
              } else {
                varData_1419.waitForCondition(function () {
                  if (!varData_1978) {
                    StopAnimTask(varData_1968, varData_1973, varData_1974, 1);
                    return true;
                  }
                  if (IsEntityPlayingAnim(varData_1968, varData_1973, varData_1974, 3)) {
                    return false;
                  }
                  TaskPlayAnim(varData_1968, varData_1973, varData_1974, 8, -8, -1, param_2.flag ?? 49, 0, false, false, false);
                  return false;
                }, 30000);
              }
              varData_1979 = param_1.context[0]?.label || (param_2.isDrink ? "Drink" : "Eat");
              varData_1980 = param_2.swig && `Taking a swig of ${param_1.name}` || `${varData_1979}ing ${param_1.name}`;
              return [4, varData_1872.taskBar(param_2.length ?? 5000, varData_1980, false)];
            case 4:
              varData_1981 = param_1_1.sent();
              StopAnimTask(varData_1968, varData_1973, varData_1974, 1);
              if (varData_1981 === 100 && param_2.alcoholStrength && param_2.alcoholStrength > 0) {
                varData_1982 = false;
                emit("fx:run", "alcohol", 180, param_2.alcoholStrength, -1, varData_1982);
              }
              return [2, varData_1981 === 100];
            case 5:
              varData_1978 = false;
              DetachEntity(varData_1976, true, true);
              SetEntityAsMissionEntity(varData_1976, true, true);
              DeleteEntity(varData_1976);
              return [7];
            case 6:
              return [2];
          }
        });
      });
      return function (param_1, param_2) {
        return varData_1967.apply(this, arguments);
      };
    }());
    ;
    function handleAction_141(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_91 = 0, loopIdx = new Array(param_2); numericVal_91 < param_2; numericVal_91++) {
        loopIdx[numericVal_91] = param_1[numericVal_91];
      }
      return loopIdx;
    }
    function handleAction_142(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_143(param_1) {
      if (Array.isArray(param_1)) {
        return handleAction_141(param_1);
      }
    }
    function handleAction_144(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_1984 = param_1[param_6](param_7);
        var varData_1985 = varData_1984.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_1984.done) {
        param_2(varData_1985);
      } else {
        Promise.resolve(varData_1985).then(param_4, param_5);
      }
    }
    function handleAction_145(param_1) {
      return function () {
        var varData_1986 = this;
        var varData_1987 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_1988 = param_1.apply(varData_1986, varData_1987);
          function handleAction_146(param_1_2) {
            handleAction_144(varData_1988, param_1_1, param_2, handleAction_146, handleAction_147, "next", param_1_2);
          }
          function handleAction_147(param_1_2) {
            handleAction_144(varData_1988, param_1_1, param_2, handleAction_146, handleAction_147, "throw", param_1_2);
          }
          handleAction_146(undefined);
        });
      };
    }
    function handleAction_148(param_1) {
      if (typeof Symbol !== "undefined" && param_1[Symbol.iterator] != null || param_1["@@iterator"] != null) {
        return Array.from(param_1);
      }
    }
    function handleAction_149(param_1, param_2) {
      var varData_1989 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_1989 == null) {
        return;
      }
      var itemList_4 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_1990;
      var varData_1991;
      try {
        for (varData_1989 = varData_1989.call(param_1); !(isEnabled_2 = (varData_1990 = varData_1989.next()).done); isEnabled_2 = true) {
          itemList_4.push(varData_1990.value);
          if (param_2 && itemList_4.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_1991 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_1989.return != null) {
            varData_1989.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_1991;
          }
        }
      }
      return itemList_4;
    }
    function handleAction_150() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_151() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_152(param_1, param_2) {
      return handleAction_142(param_1) || handleAction_149(param_1, param_2) || handleAction_154(param_1, param_2) || handleAction_150();
    }
    function handleAction_153(param_1) {
      return handleAction_143(param_1) || handleAction_148(param_1) || handleAction_154(param_1) || handleAction_151();
    }
    function handleAction_154(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_141(param_1, param_2);
      }
      var varData_1992 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_1992 === "Object" && param_1.constructor) {
        varData_1992 = param_1.constructor.name;
      }
      if (varData_1992 === "Map" || varData_1992 === "Set") {
        return Array.from(varData_1992);
      }
      if (varData_1992 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_1992)) {
        return handleAction_141(param_1, param_2);
      }
    }
    function handleAction_155(param_1, param_2) {
      var varData_1993;
      var varData_1994;
      var varData_1995;
      var varData_1996;
      var varData_1997 = {
        label: 0,
        sent: function () {
          if (varData_1995[0] & 1) {
            throw varData_1995[1];
          }
          return varData_1995[1];
        },
        trys: [],
        ops: []
      };
      varData_1996 = {
        next: handleAction_156(0),
        throw: handleAction_156(1),
        return: handleAction_156(2)
      };
      if (typeof Symbol === "function") {
        varData_1996[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_1996;
      function handleAction_156(param_1_1) {
        return function (param_1_2) {
          return handleAction_157([param_1_1, param_1_2]);
        };
      }
      function handleAction_157(param_1_1) {
        if (varData_1993) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_1997) {
          try {
            varData_1993 = 1;
            if (varData_1994 && (varData_1995 = param_1_1[0] & 2 ? varData_1994.return : param_1_1[0] ? varData_1994.throw || ((varData_1995 = varData_1994.return) && varData_1995.call(varData_1994), 0) : varData_1994.next) && !(varData_1995 = varData_1995.call(varData_1994, param_1_1[1])).done) {
              return varData_1995;
            }
            varData_1994 = 0;
            if (varData_1995) {
              param_1_1 = [param_1_1[0] & 2, varData_1995.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_1995 = param_1_1;
                break;
              case 4:
                varData_1997.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_1997.label++;
                varData_1994 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_1997.ops.pop();
                varData_1997.trys.pop();
                continue;
              default:
                if (!(varData_1995 = varData_1997.trys, varData_1995 = varData_1995.length > 0 && varData_1995[varData_1995.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_1997 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_1995 || param_1_1[1] > varData_1995[0] && param_1_1[1] < varData_1995[3])) {
                  varData_1997.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_1997.label < varData_1995[1]) {
                  varData_1997.label = varData_1995[1];
                  varData_1995 = param_1_1;
                  break;
                }
                if (varData_1995 && varData_1997.label < varData_1995[2]) {
                  varData_1997.label = varData_1995[2];
                  varData_1997.ops.push(param_1_1);
                  break;
                }
                if (varData_1995[2]) {
                  varData_1997.ops.pop();
                }
                varData_1997.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_1997);
          } catch (err) {
            param_1_1 = [6, err];
            varData_1994 = 0;
          } finally {
            varData_1993 = varData_1995 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_1998 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_1998;
      }
    }
    function handleAction_158(param_1) {
      var varData_1999 = typeof Symbol === "function" && Symbol.iterator;
      var varData_2000 = varData_1999 && param_1[varData_1999];
      var numericVal_91 = 0;
      if (varData_2000) {
        return varData_2000.call(param_1);
      }
      if (param_1 && typeof param_1.length === "number") {
        return {
          next: function () {
            if (param_1 && numericVal_91 >= param_1.length) {
              param_1 = undefined;
            }
            var varData_2001 = {
              value: param_1 && param_1[numericVal_91++],
              done: !param_1
            };
            return varData_2001;
          }
        };
      }
      throw new TypeError(varData_1999 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    var numericVal_91 = 100;
    var varData_2002 = new varData_1591.Thread(handleAction_145(function () {
      return handleAction_155(this, function (param_1) {
        return [2];
      });
    }), 2500);
    var varData_2003 = function () {
      var varData_2004 = handleAction_145(function () {
        return handleAction_155(this, function (param_1) {
          varData_2002.addHook("active", function () {
            var coords = GetEntityCoords(PlayerPedId());
            var varData_2005 = new varData_1272(coords[0], coords[1], coords[2]);
            var varData_2006 = handleAction_153(dataMap_3.values()).filter(function (param_1_1) {
              return varData_2005.getDistance(new varData_1272(param_1_1.x, param_1_1.y, param_1_1.z)) < numericVal_91;
            });
            var varData_2007 = handleAction_153(dataMap_2.values()).filter(function (param_1_1) {
              return !varData_2006.some(function (param_1_2) {
                return param_1_2.id === param_1_1.data.id;
              });
            });
            var isEnabled_2 = true;
            var isDisabled_1 = false;
            var varData_2008 = undefined;
            try {
              for (var loopIdx = varData_2006[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
                var varData_2009 = loopIdx_1.value;
                var varData_2010 = dataMap_2.has(varData_2009.id);
                if (!varData_2010) {
                  varData_2049(varData_2009);
                }
              }
            } catch (err) {
              isDisabled_1 = true;
              varData_2008 = err;
            } finally {
              try {
                if (!isEnabled_2 && loopIdx.return != null) {
                  loopIdx.return();
                }
              } finally {
                if (isDisabled_1) {
                  throw varData_2008;
                }
              }
            }
            var isEnabled_3 = true;
            var isDisabled_2 = false;
            var varData_2011 = undefined;
            try {
              for (var loopIdx_2 = varData_2007[Symbol.iterator](), loopIdx_3; !(isEnabled_3 = (loopIdx_3 = loopIdx_2.next()).done); isEnabled_3 = true) {
                var varData_2012 = loopIdx_3.value;
                handleAction_160(varData_2012.data.id);
              }
            } catch (err) {
              isDisabled_2 = true;
              varData_2011 = err;
            } finally {
              try {
                if (!isEnabled_3 && loopIdx_2.return != null) {
                  loopIdx_2.return();
                }
              } finally {
                if (isDisabled_2) {
                  throw varData_2011;
                }
              }
            }
          });
          varData_2002.start();
          return [2];
        });
      });
      return function _0x2119b8() {
        return varData_2004.apply(this, arguments);
      };
    }();
    var dataMap_2 = new Map();
    var dataMap_3 = new Map();
    var dataMap_4 = new Map();
    var varData_2013 = varData_1419.cache(function () {
      var varData_2014 = handleAction_145(function (param_1) {
        var varData_2015;
        return handleAction_155(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1934()];
            case 1:
              varData_2015 = param_1_1.sent();
              if (!varData_2015 || Object.keys(varData_2015).length === 0) {
                return [2, [false, {}]];
              }
              return [2, [true, varData_2015]];
          }
        });
      });
      return function (param_1) {
        return varData_2014.apply(this, arguments);
      };
    }(), {
      timeToLive: 300000
    });
    function handleAction_159() {
      var varData_2016 = handleAction_153(dataMap_4.entries());
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2017 = undefined;
      try {
        for (var loopIdx = varData_2016[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_2018 = handleAction_152(loopIdx_1.value, 2);
          var varData_2019 = varData_2018[0];
          var varData_2020 = varData_2018[1];
          if (!dataMap_2.has(varData_2020)) {
            varData_1872.removeInteraction(`pickup_${varData_2019}`);
            if (DoesEntityExist(varData_2019)) {
              SetEntityAsMissionEntity(varData_2019, true, true);
              DeleteEntity(varData_2019);
            }
            dataMap_4.delete(varData_2019);
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2017 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2017;
          }
        }
      }
    }
    function handleAction_160(param_1) {
      var varData_2021 = dataMap_2.get(param_1);
      if (!varData_2021) {
        return;
      }
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2022 = undefined;
      try {
        for (var loopIdx = Object.entries(varData_2021.attachedEntities)[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_2023 = handleAction_152(loopIdx_1.value, 2);
          var varData_2024 = varData_2023[0];
          var varData_2025 = varData_2023[1];
          varData_1872.removeInteraction(`pickup_${varData_2025.handle}`);
          if (DoesEntityExist(varData_2025.handle)) {
            SetEntityAsMissionEntity(varData_2025.handle, true, true);
            DeleteEntity(varData_2025.handle);
          }
          dataMap_4.delete(varData_2025.handle);
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2022 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2022;
          }
        }
      }
      handleAction_159();
      dataMap_2.delete(param_1);
    }
    function handleAction_161(param_1, param_2) {
      if (dataMap_2.size > 0) {
        var varData_2026 = handleAction_153(dataMap_2.values()).map(function (param_1_1) {
          return {
            dropId: param_1_1.data.id,
            attachments: Object.values(param_1_1.attachedEntities)
          };
        });
        var varData_2027 = varData_2026.map(function (param_1_1) {
          var varData_2028 = param_1_1.attachments.map(function (param_1_2) {
            return {
              entity: param_1_2.handle,
              distance: new varData_1272(GetEntityCoords(param_1_2.handle)).getDistance(param_1)
            };
          });
          var varData_2029 = varData_2028.filter(function (param_1_2) {
            return param_1_2.distance < 1.5;
          }).sort(function (param_1_2, param_2_1) {
            return param_1_2.distance - param_2_1.distance;
          })[0];
          var varData_2030 = {
            dropId: param_1_1.dropId,
            distance: varData_2029?.distance ?? 9999,
            entity: varData_2029?.entity ?? 0
          };
          return varData_2030;
        });
        var varData_2031;
        var varData_2032 = varData_2027.filter(function (param_1_1) {
          return param_1_1.entity !== 0;
        }).sort(function (param_1_1, param_2_1) {
          return param_1_1.distance - param_2_1.distance;
        })[0];
        if (varData_2032) {
          varData_2031 = dataMap_2.get(varData_2032.dropId)?.data;
        }
        if (!varData_2031) {
          var varData_2033 = handleAction_153(dataMap_2.values()).map(function (param_1_1) {
            return {
              dropId: param_1_1.data.id,
              distance: new varData_1272(param_1_1.data.x, param_1_1.data.y, param_1_1.data.z).getDistance(param_1)
            };
          });
          var varData_2034 = varData_2033.sort(function (param_1_1, param_2_1) {
            return param_1_1.distance - param_2_1.distance;
          })[0];
          if (varData_2034 && varData_2034.distance < 1.5) {
            varData_2031 = dataMap_2.get(varData_2034.dropId)?.data;
          }
        }
        if (varData_2031) {
          return varData_2031.data.metadata.inventoryId;
        }
      }
      var varData_2035 = handleAction_152(GetGroundZFor_3dCoord(param_1.x, param_1.y, param_1.z, true), 2);
      var varData_2036 = varData_2035[0];
      var varData_2037 = varData_2035[1];
      if (varData_2036) {
        param_1.z = varData_2037;
      }
      return `ground::${handleAction_133(param_1.x, param_1.y, param_1.z)}::${param_2}`;
    }
    function handleAction_162(param_1, param_2) {
      var varData_2038;
      var varData_2039;
      var varData_2040 = param_2 ? (varData_2039 = param_1) === null || varData_2039 === undefined ? undefined : (varData_2038 = varData_2039.variants) === null || varData_2038 === undefined ? undefined : varData_2038[param_2]?.model : null;
      var varData_2041 = varData_2040 ?? param_1?.model ?? "prop_paper_bag_01";
      if (IsModelValid(varData_2041)) {
        return varData_2041;
      } else {
        return "prop_paper_bag_01";
      }
    }
    var varData_2042 = function () {
      var varData_2043 = handleAction_145(function (param_1, param_2, param_3) {
        var varData_2044;
        var varData_2045;
        var varData_2046;
        var varData_2047;
        var varData_2048 = arguments;
        return handleAction_155(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2044 = varData_2048.length > 3 && varData_2048[3] !== undefined ? varData_2048[3] : false;
              if (!param_3 || !!varData_2044) {
                return [3, 2];
              }
              return [4, varData_1806.loadWeaponAsset(param_3.weapon, 31, 0)];
            case 1:
              varData_2045 = param_1_1.sent();
              if (varData_2045) {
                varData_2046 = CreateWeaponObject(param_3.weapon, 0, param_2.x, param_2.y, param_2.z, true, 1, 0);
                if (DoesEntityExist(varData_2046)) {
                  return [2, varData_2046];
                }
              }
              param_1_1.label = 2;
            case 2:
              return [4, varData_1806.loadModel(param_1)];
            case 3:
              param_1_1.sent();
              varData_2047 = CreateObjectNoOffset(param_1, param_2.x, param_2.y, param_2.z, varData_2044, varData_2044, false);
              SetModelAsNoLongerNeeded(param_1);
              return [2, varData_2047];
          }
        });
      });
      return function _0xc1966c(param_1, param_2, param_3) {
        return varData_2043.apply(this, arguments);
      };
    }();
    var varData_2049 = function () {
      var varData_2050 = handleAction_145(function (param_1) {
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
        var varData_2061;
        var varData_2062;
        var varData_2063;
        var varData_2064;
        var varData_2065;
        var varData_2066;
        var varData_2067;
        var varData_2068;
        var varData_2069;
        return handleAction_155(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (param_1.ns !== "inventory_drops") {
                return [2];
              }
              if (!param_1.data.metadata.inventoryDrop) {
                return [2];
              }
              varData_2051 = param_1.data.metadata.attachedObjects;
              return [4, varData_2013.get()];
            case 1:
              varData_2052 = param_1_1.sent();
              if (!varData_2052) {
                return [2];
              }
              varData_2053 = dataMap_2.get(param_1.id);
              varData_2054 = Object.entries(varData_2051).reduce(function (param_1_2, param_2) {
                var varData_2070 = handleAction_152(param_2, 2);
                var varData_2071 = varData_2070[0];
                var varData_2072 = varData_2070[1];
                var varData_2073 = new varData_1272(varData_2072.coords.x, varData_2072.coords.y, varData_2072.coords.z);
                var varData_2074 = new varData_1272(Math.round(varData_2073.x * 10) / 10, Math.round(varData_2073.y * 10) / 10, Math.round(varData_2073.z * 10) / 10);
                var varData_2075 = varData_2478[varData_2072.itemId];
                var varData_2076 = varData_2075 ? `${varData_2071}` : `${varData_2074.x},${varData_2074.y},${varData_2074.z}`;
                if (!param_1_2[varData_2076]) {
                  param_1_2[varData_2076] = [];
                }
                param_1_2[varData_2076].push({
                  itemStackId: varData_2071,
                  itemId: varData_2072.itemId,
                  variant: varData_2072.variant,
                  coords: varData_2072.coords,
                  rotation: varData_2072.rotation,
                  heading: varData_2072.heading,
                  weapon: varData_2075,
                  model: handleAction_162(varData_2052[varData_2072.itemId], varData_2072.variant)
                });
                return param_1_2;
              }, {});
              varData_2055 = true;
              varData_2056 = false;
              varData_2057 = undefined;
              try {
                varData_2058 = function () {
                  var varData_2077 = handleAction_152(varData_2060.value, 2);
                  var varData_2078 = varData_2077[0];
                  var varData_2079 = varData_2077[1];
                  var varData_2080 = varData_2054[varData_2078];
                  var varData_2081 = varData_2079.itemStacks;
                  if (!varData_2080 || !varData_2080.every(function (param_1_2, param_2) {
                    return param_1_2.itemStackId === varData_2081[param_2];
                  })) {
                    var varData_2082;
                    varData_1872.removeInteraction(`pickup_${varData_2079.handle}`);
                    if (DoesEntityExist(varData_2079.handle)) {
                      SetEntityAsMissionEntity(varData_2079.handle, true, true);
                      DeleteEntity(varData_2079.handle);
                    }
                    if ((varData_2082 = varData_2053) === null || varData_2082 === undefined) {
                      true;
                    } else {
                      delete varData_2082.attachedEntities[varData_2078];
                    }
                  }
                };
                for (varData_2059 = Object.entries(varData_2053?.attachedEntities ?? {})[Symbol.iterator](); !(varData_2055 = (varData_2060 = varData_2059.next()).done); varData_2055 = true) {
                  varData_2058();
                }
              } catch (err) {
                varData_2056 = true;
                varData_2057 = err;
              } finally {
                try {
                  if (!varData_2055 && varData_2059.return != null) {
                    varData_2059.return();
                  }
                } finally {
                  if (varData_2056) {
                    throw varData_2057;
                  }
                }
              }
              varData_2061 = exports["np-character"].isAnimalModel(GetEntityModel(PlayerPedId()));
              varData_2062 = {};
              varData_2063 = true;
              varData_2064 = false;
              varData_2065 = undefined;
              param_1_1.label = 2;
            case 2:
              param_1_1.trys.push([2, 7, 8, 9]);
              varData_2066 = function () {
                var varData_2083;
                var varData_2084;
                var varData_2085;
                var varData_2086;
                var varData_2087;
                var varData_2088;
                var varData_2089;
                var varData_2090;
                var varData_2091;
                var varData_2092;
                var varData_2093;
                var varData_2094;
                var varData_2095;
                var varData_2096;
                var varData_2097;
                var varData_2098;
                return handleAction_155(this, function (param_1_2) {
                  switch (param_1_2.label) {
                    case 0:
                      varData_2083 = handleAction_152(varData_2068.value, 2);
                      varData_2084 = varData_2083[0];
                      varData_2085 = varData_2083[1];
                      if (varData_2085.length === 0) {
                        return [2, "continue"];
                      }
                      if ((varData_2086 = varData_2053) === null || varData_2086 === undefined ? undefined : varData_2086.attachedEntities[varData_2084]) {
                        varData_2062[varData_2084] = varData_2053.attachedEntities[varData_2084];
                        return [2, "continue"];
                      }
                      varData_2087 = varData_2085[0];
                      varData_2088 = varData_2087.coords;
                      varData_2089 = varData_2085.length === 1 ? varData_2087.model : "prop_paper_bag_01";
                      return [4, varData_2042(varData_2089, varData_2088, varData_2087.weapon, false)];
                    case 1:
                      varData_2090 = param_1_2.sent();
                      SetEntityAsMissionEntity(varData_2090, true, true);
                      FreezeEntityPosition(varData_2090, true);
                      SetEntityCollision(varData_2090, false, false);
                      varData_2062[varData_2084] = {
                        itemStacks: varData_2085.map(function (param_1_3) {
                          return param_1_3.itemStackId;
                        }),
                        handle: varData_2090
                      };
                      dataMap_4.set(varData_2090, param_1.id);
                      try {
                        if (varData_2087.rotation) {
                          SetEntityRotation(varData_2090, varData_2087.rotation.x, varData_2087.rotation.y, varData_2087.rotation.z, 2, true);
                          return [2, "continue"];
                        }
                        SetEntityHeading(varData_2090, varData_2087.heading);
                        PlaceObjectOnGroundProperly_2(varData_2090);
                        varData_2091 = new varData_1272(GetEntityRotation(varData_2090, 2));
                      } finally {
                        varData_2092 = new varData_1272(GetEntityCoords(varData_2090));
                        varData_2093 = handleAction_152(GetModelDimensions(varData_2087.model), 2);
                        varData_2094 = varData_2093[0];
                        varData_2095 = varData_2093[1];
                        varData_2096 = (varData_2095[2] - varData_2094[2]) / 2;
                        varData_2092.z += varData_2096;
                        if (param_1.id) {
                          var varData_2099 = {
                            entity: varData_2090,
                            dropId: param_1.id,
                            type: "pickup"
                          };
                          var varData_2100 = {
                            id: "pickup_object",
                            label: "Pickup",
                            eventSDK: "inventory:pickupObject",
                            parameters: varData_2099
                          };
                          varData_2097 = [varData_2100];
                          if (varData_2061 && varData_2085.length === 1) {
                            var varData_2101 = {
                              entity: varData_2090,
                              dropId: param_1.id,
                              type: "grab"
                            };
                            var varData_2102 = {
                              id: "grab_object",
                              label: "Grab",
                              eventSDK: "inventory:pickupObject",
                              parameters: varData_2101
                            };
                            varData_2097.push(varData_2102);
                            varData_2098 = itemList_3.find(function (param_1_3) {
                              return param_1_3 === varData_2087.itemId;
                            });
                            if (varData_2098) {
                              var varData_2103 = {
                                entity: varData_2090,
                                dropId: param_1.id,
                                type: "eat"
                              };
                              var varData_2104 = {
                                id: "eat_object",
                                label: "Eat",
                                eventSDK: "inventory:pickupObject",
                                parameters: varData_2103
                              };
                              varData_2097.push(varData_2104);
                            }
                          }
                          varData_1872.addInteraction(`pickup_${varData_2090}`, varData_2092, varData_2097, {
                            flag: [""],
                            isEnabled: function () {
                              return !isDisabled_5 && !IsPedInAnyVehicle(PlayerPedId(), false);
                            },
                            distance: {
                              use: 2,
                              draw: 2
                            }
                          });
                        }
                      }
                      return [2];
                  }
                });
              };
              varData_2067 = Object.entries(varData_2054)[Symbol.iterator]();
              param_1_1.label = 3;
            case 3:
              if (varData_2063 = (varData_2068 = varData_2067.next()).done) {
                return [3, 6];
              }
              return [5, handleAction_158(varData_2066())];
            case 4:
              param_1_1.sent();
              param_1_1.label = 5;
            case 5:
              varData_2063 = true;
              return [3, 3];
            case 6:
              return [3, 9];
            case 7:
              varData_2069 = param_1_1.sent();
              varData_2064 = true;
              varData_2065 = varData_2069;
              return [3, 9];
            case 8:
              try {
                if (!varData_2063 && varData_2067.return != null) {
                  varData_2067.return();
                }
              } finally {
                if (varData_2064) {
                  throw varData_2065;
                }
              }
              return [7];
            case 9:
              dataMap_2.set(param_1.id, {
                data: param_1,
                attachedEntities: varData_2062
              });
              return [2];
          }
        });
      });
      return function _0x3c5c7e(param_1) {
        return varData_2050.apply(this, arguments);
      };
    }();
    on("np-objects:objectsCreated:inventory_drops", function () {
      var varData_2105 = handleAction_145(function (param_1) {
        var varData_2106;
        var varData_2107;
        var varData_2108;
        var varData_2109;
        var varData_2110;
        var varData_2111;
        var varData_2112;
        var varData_2113;
        var varData_2114;
        return handleAction_155(this, function (param_1_1) {
          varData_2106 = true;
          varData_2107 = false;
          varData_2108 = undefined;
          try {
            for (varData_2109 = param_1[Symbol.iterator](); !(varData_2106 = (varData_2110 = varData_2109.next()).done); varData_2106 = true) {
              varData_2111 = varData_2110.value;
              varData_2112 = varData_2111.object;
              varData_2113 = varData_2111.handle;
              if (!varData_2112.data.metadata.inventoryDrop) {
                continue;
              }
              SetEntityVisible(varData_2113, false, false);
              dataMap_3.set(varData_2112.id, varData_2112);
              varData_2114 = new varData_1272(varData_2112.x, varData_2112.y, varData_2112.z);
              if (varData_2114.getDistance(GetEntityCoords(PlayerPedId())) < numericVal_91) {
                varData_2049(varData_2112);
              }
            }
          } catch (err) {
            varData_2107 = true;
            varData_2108 = err;
          } finally {
            try {
              if (!varData_2106 && varData_2109.return != null) {
                varData_2109.return();
              }
            } finally {
              if (varData_2107) {
                throw varData_2108;
              }
            }
          }
          return [2];
        });
      });
      return function (param_1) {
        return varData_2105.apply(this, arguments);
      };
    }());
    on("np-objects:objectsDeleted:inventory_drops", function (param_1) {
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2115 = undefined;
      try {
        for (var loopIdx = param_1[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_2116 = loopIdx_1.value;
          var varData_2117 = varData_2116.object;
          var varData_2118 = varData_2116.handle;
          if (!varData_2117.data.metadata.inventoryDrop) {
            continue;
          }
          dataMap_3.delete(varData_2117.id);
          handleAction_160(varData_2117.id);
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2115 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2115;
          }
        }
      }
    });
    on("np-objects:objectUpdated:inventory_drops", function (param_1) {
      if (!param_1.data.metadata.inventoryDrop) {
        return;
      }
      varData_1490.debug("np-objects:objectUpdated", param_1);
      dataMap_3.set(param_1.id, param_1);
      var varData_2119 = new varData_1272(param_1.x, param_1.y, param_1.z);
      if (varData_2119.getDistance(GetEntityCoords(PlayerPedId())) < numericVal_91) {
        varData_2049(param_1);
      }
    });
    varData_1482.on("inventory:pickupObject", function () {
      var varData_2120 = handleAction_145(function (param_1) {
        var varData_2121;
        var varData_2122;
        var varData_2123;
        var varData_2124;
        var varData_2125;
        var varData_2126;
        var varData_2127;
        return handleAction_155(this, function (param_1_1) {
          varData_2121 = param_1.dropId;
          varData_2122 = param_1.entity;
          varData_2123 = param_1.type;
          if (!varData_2121 || !DoesEntityExist(varData_2122)) {
            return [2];
          }
          varData_2124 = varData_1432.Sync["np-objects"].IsPlacingObject();
          if (varData_2124 || isDisabled_5) {
            return [2];
          }
          varData_2125 = dataMap_2.get(varData_2121);
          if (!varData_2125) {
            return [2];
          }
          varData_2126 = varData_2125.attachedEntities;
          varData_2127 = Object.values(varData_2126).find(function (param_1_2) {
            return param_1_2.handle === varData_2122;
          })?.itemStacks ?? [];
          if (!varData_2127 || !varData_2127.length) {
            return [2];
          }
          varData_1522.execute("inventory:pickupItems", varData_2127, varData_2123);
          return [2];
        });
      });
      return function (param_1) {
        return varData_2120.apply(this, arguments);
      };
    }());
    varData_1482.onNet("inventory:pickupAnimation", function () {
      var varData_2128 = handleAction_145(function (param_1, param_2) {
        var varData_2129;
        var varData_2130;
        var varData_2131;
        var varData_2132;
        var varData_2133;
        return handleAction_155(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2129 = PlayerPedId();
              varData_2130 = GetEntityModel(varData_2129);
              if (!varData_1432.Sync["np-character"].isAnimalModel(varData_2130)) {
                return [3, 2];
              }
              return [4, varData_1806.loadAnim("creatures@rottweiler@move")];
            case 1:
              param_1_1.sent();
              TaskPlayAnim(varData_2129, "creatures@rottweiler@move", "fetch_pickup", 8, 8, -1, 4, 0, false, false, false);
              return [2];
            case 2:
              if (!param_2) {
                return [3, 4];
              }
              varData_2131 = new varData_1272(GetEntityCoords(varData_2129));
              varData_2132 = varData_2131.z + 0.5 - param_2.z;
              if (!(varData_2132 < 0.75)) {
                return [3, 4];
              }
              varData_2133 = "anim@amb@nightclub@mini@drinking@drinking_shots@ped_d@normal";
              return [4, varData_1806.loadAnim(varData_2133)];
            case 3:
              param_1_1.sent();
              TaskPlayAnim(varData_2129, varData_2133, "pickup", 8, -8, -1, 48, 0, false, false, false);
              return [2];
            case 4:
              return [4, varData_1806.loadAnim("pickup_object")];
            case 5:
              param_1_1.sent();
              TaskPlayAnim(varData_2129, "pickup_object", param_1, 8, 1, -1, 48, 0, false, false, false);
              return [2];
          }
        });
      });
      return function (param_1, param_2) {
        return varData_2128.apply(this, arguments);
      };
    }());
    var itemList_4 = ["sewers"];
    varData_1522.register("inventory:getMetadataLocation", function () {
      var varData_2134 = handleAction_145(function (param_1) {
        var varData_2135;
        var varData_2136;
        var varData_2137;
        var varData_2138;
        var varData_2139;
        var varData_2140;
        return handleAction_155(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              var varData_2141 = {
                x: param_1.x,
                y: param_1.y,
                z: param_1.z
              };
              varData_2135 = varData_1432.Sync["np-polyzone"].ExpensiveGetZoneFromPoint(varData_2141) ?? [];
              return [4, globalThis.exports.editor.GetInteriorModelFromVector3(param_1)];
            case 1:
              varData_2136 = param_1_1.sent();
              varData_2137 = varData_2136.model;
              varData_2138 = varData_2136.interiorId;
              varData_2139 = {
                interiorModel: null,
                interiorZoneName: null
              };
              if (!varData_2137) {
                return [3, 4];
              }
              return [4, varData_1806.loadModel("prop_paper_bag_01")];
            case 2:
              param_1_1.sent();
              varData_2140 = CreateObjectNoOffset("prop_paper_bag_01", param_1.x, param_1.y, param_1.z, false, false, false);
              return [4, varData_1419.waitForCondition(function () {
                return DoesEntityExist(varData_2140);
              }, 200)];
            case 3:
              param_1_1.sent();
              SetEntityAlpha(varData_2140, 0, false);
              if (GetInteriorFromEntity(varData_2140) !== 0) {
                varData_2139.interiorModel = varData_2137;
              }
              DeleteEntity(varData_2140);
              param_1_1.label = 4;
            case 4:
              if (varData_2135.length > 0) {
                varData_2139.interiorZoneName = itemList_4.find(function (param_1_2) {
                  return varData_2135.some(function (param_1_3) {
                    return param_1_3.name === param_1_2;
                  });
                }) || null;
              }
              return [2, varData_2139];
          }
        });
      });
      return function (param_1) {
        return varData_2134.apply(this, arguments);
      };
    }());
    ;
    function handleAction_163(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_92 = 0, loopIdx = new Array(param_2); numericVal_92 < param_2; numericVal_92++) {
        loopIdx[numericVal_92] = param_1[numericVal_92];
      }
      return loopIdx;
    }
    function handleAction_164(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_165(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2142 = param_1[param_6](param_7);
        var varData_2143 = varData_2142.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2142.done) {
        param_2(varData_2143);
      } else {
        Promise.resolve(varData_2143).then(param_4, param_5);
      }
    }
    function handleAction_166(param_1) {
      return function () {
        var varData_2144 = this;
        var varData_2145 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2146 = param_1.apply(varData_2144, varData_2145);
          function handleAction_167(param_1_2) {
            handleAction_165(varData_2146, param_1_1, param_2, handleAction_167, handleAction_168, "next", param_1_2);
          }
          function handleAction_168(param_1_2) {
            handleAction_165(varData_2146, param_1_1, param_2, handleAction_167, handleAction_168, "throw", param_1_2);
          }
          handleAction_167(undefined);
        });
      };
    }
    function handleAction_169(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_2147 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_2147);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_170(param_1, param_2) {
      var varData_2148 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2148 == null) {
        return;
      }
      var itemList_5 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2149;
      var varData_2150;
      try {
        for (varData_2148 = varData_2148.call(param_1); !(isEnabled_2 = (varData_2149 = varData_2148.next()).done); isEnabled_2 = true) {
          itemList_5.push(varData_2149.value);
          if (param_2 && itemList_5.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2150 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2148.return != null) {
            varData_2148.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2150;
          }
        }
      }
      return itemList_5;
    }
    function handleAction_171() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_172(param_1) {
      for (var numericVal_92 = 1; numericVal_92 < arguments.length; numericVal_92++) {
        var varData_2151 = arguments[numericVal_92] ?? {};
        var keysList = Object.keys(varData_2151);
        if (typeof Object.getOwnPropertySymbols === "function") {
          keysList = keysList.concat(Object.getOwnPropertySymbols(varData_2151).filter(function (param_1_1) {
            return Object.getOwnPropertyDescriptor(varData_2151, param_1_1).enumerable;
          }));
        }
        keysList.forEach(function (param_1_1) {
          handleAction_169(param_1, param_1_1, varData_2151[param_1_1]);
        });
      }
      return param_1;
    }
    function handleAction_173(param_1, param_2) {
      var keysList = Object.keys(param_1);
      if (Object.getOwnPropertySymbols) {
        var varData_2152 = Object.getOwnPropertySymbols(param_1);
        if (param_2) {
          varData_2152 = varData_2152.filter(function (param_1_1) {
            return Object.getOwnPropertyDescriptor(param_1, param_1_1).enumerable;
          });
        }
        keysList.push.apply(keysList, varData_2152);
      }
      return keysList;
    }
    function handleAction_174(param_1, param_2) {
      param_2 = param_2 ?? {};
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(param_1, Object.getOwnPropertyDescriptors(param_2));
      } else {
        handleAction_173(Object(param_2)).forEach(function (param_1_1) {
          Object.defineProperty(param_1, param_1_1, Object.getOwnPropertyDescriptor(param_2, param_1_1));
        });
      }
      return param_1;
    }
    function handleAction_175(param_1, param_2) {
      return handleAction_164(param_1) || handleAction_170(param_1, param_2) || handleAction_176(param_1, param_2) || handleAction_171();
    }
    function handleAction_176(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_163(param_1, param_2);
      }
      var varData_2153 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2153 === "Object" && param_1.constructor) {
        varData_2153 = param_1.constructor.name;
      }
      if (varData_2153 === "Map" || varData_2153 === "Set") {
        return Array.from(varData_2153);
      }
      if (varData_2153 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2153)) {
        return handleAction_163(param_1, param_2);
      }
    }
    function handleAction_177(param_1, param_2) {
      var varData_2154;
      var varData_2155;
      var varData_2156;
      var varData_2157;
      var varData_2158 = {
        label: 0,
        sent: function () {
          if (varData_2156[0] & 1) {
            throw varData_2156[1];
          }
          return varData_2156[1];
        },
        trys: [],
        ops: []
      };
      varData_2157 = {
        next: handleAction_178(0),
        throw: handleAction_178(1),
        return: handleAction_178(2)
      };
      if (typeof Symbol === "function") {
        varData_2157[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2157;
      function handleAction_178(param_1_1) {
        return function (param_1_2) {
          return handleAction_179([param_1_1, param_1_2]);
        };
      }
      function handleAction_179(param_1_1) {
        if (varData_2154) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2158) {
          try {
            varData_2154 = 1;
            if (varData_2155 && (varData_2156 = param_1_1[0] & 2 ? varData_2155.return : param_1_1[0] ? varData_2155.throw || ((varData_2156 = varData_2155.return) && varData_2156.call(varData_2155), 0) : varData_2155.next) && !(varData_2156 = varData_2156.call(varData_2155, param_1_1[1])).done) {
              return varData_2156;
            }
            varData_2155 = 0;
            if (varData_2156) {
              param_1_1 = [param_1_1[0] & 2, varData_2156.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2156 = param_1_1;
                break;
              case 4:
                varData_2158.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2158.label++;
                varData_2155 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2158.ops.pop();
                varData_2158.trys.pop();
                continue;
              default:
                if (!(varData_2156 = varData_2158.trys, varData_2156 = varData_2156.length > 0 && varData_2156[varData_2156.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2158 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2156 || param_1_1[1] > varData_2156[0] && param_1_1[1] < varData_2156[3])) {
                  varData_2158.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2158.label < varData_2156[1]) {
                  varData_2158.label = varData_2156[1];
                  varData_2156 = param_1_1;
                  break;
                }
                if (varData_2156 && varData_2158.label < varData_2156[2]) {
                  varData_2158.label = varData_2156[2];
                  varData_2158.ops.push(param_1_1);
                  break;
                }
                if (varData_2156[2]) {
                  varData_2158.ops.pop();
                }
                varData_2158.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2158);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2155 = 0;
          } finally {
            varData_2154 = varData_2156 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2159 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2159;
      }
    }
    var itemList_5 = ["prop_bin_01a", "prop_bin_02a", "prop_bin_05a", "prop_bin_06a", "prop_bin_07b", "prop_bin_12a", "prop_bin_beach_01a", "prop_bin_delpiero_b", "prop_bin_delpiero"];
    var itemList_6 = [[-510.28, -690.68, 33.55], [-516.43, -686.29, 33.55], [-527.21, -686.28, 33.55], [-516.4, -694.76, 33.55], [-507.63, -704.08, 33.55], [-510.78, -726.45, 33.55], [-502.9, -721.6, 33.1], [-502.91, -726.49, 33.1]];
    var varData_2160 = null;
    function handleAction_180() {
      varData_1872.addPlayerInteraction("inventory_give", [{
        id: "inventory_give",
        label: "Give",
        eventSDK: "inventory:giveItem",
        parameters: {}
      }], {
        isEnabled: function () {
          return !!varData_2176 && !isDisabled_3 && !isDisabled_5 && !isDisabled_2 && !isDisabled_1 && !varData_2160;
        },
        distance: {
          use: 2,
          draw: 3
        }
      });
      varData_1872.addInteractionByModel("inventory_recycle_bins", itemList_5, [{
        id: "inventory_recycle_bins",
        label: "Recycle",
        eventSDK: "inventory:recycleItem",
        parameters: {}
      }], {
        isEnabled: function () {
          var varData_2161 = !!varData_2176 && !isDisabled_3 && !isDisabled_5 && !isDisabled_2 && !isDisabled_1 && !varData_2160 && !!varData_2176.item.flags.recyclableInTrashBin;
          if (varData_2161 && varData_2176 && !!varData_2176.item.flags.weapon) {
            return varData_2176.quality < 5;
          }
          return varData_2161;
        },
        distance: {
          use: 2,
          draw: 3
        }
      });
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2162 = undefined;
      try {
        for (var loopIdx = itemList_6[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_2163 = loopIdx_1.value;
          var varData_2164 = handleAction_175(varData_2163, 3);
          var varData_2165 = varData_2164[0];
          var varData_2166 = varData_2164[1];
          var varData_2167 = varData_2164[2];
          var varData_2168 = {
            x: varData_2165,
            y: varData_2166,
            z: varData_2167
          };
          var varData_2169 = varData_2168;
          var varData_2170 = `inventory_recycle_coords_${varData_2165}_${varData_2166}_${varData_2167}`;
          var varData_2171 = {
            use: 2,
            draw: 3
          };
          var varData_2172 = {
            isEnabled: function () {
              var varData_2173 = !!varData_2176 && !isDisabled_3 && !isDisabled_5 && !isDisabled_2 && !isDisabled_1 && !varData_2160 && !!varData_2176.item.flags.recyclableInTrashBin;
              if (varData_2173 && varData_2176 && !!varData_2176.item.flags.weapon) {
                return varData_2176.quality < 5;
              }
              return varData_2173;
            },
            distance: varData_2171
          };
          varData_1872.addInteraction(varData_2170, varData_2169, [{
            id: varData_2170,
            label: "Recycle",
            eventSDK: "inventory:recycleItem",
            parameters: {}
          }], varData_2172);
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2162 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2162;
          }
        }
      }
    }
    function handleAction_181(param_1) {
      var varData_2174 = param_1.multiplyScalar(Math.PI / 180);
      return new Vector3(-Math.sin(varData_2174.z) * Math.abs(Math.cos(varData_2174.x)), Math.cos(varData_2174.z) * Math.abs(Math.cos(varData_2174.x)), Math.sin(varData_2174.x));
    }
    function handleAction_182(param_1) {
      var varData_2175 = param_1.multiplyScalar(Math.PI / 180);
      return new varData_1272(Math.sin(varData_2175.z) * Math.abs(Math.sin(varData_2175.x)), -Math.cos(varData_2175.z) * Math.abs(Math.sin(varData_2175.x)), Math.cos(varData_2175.x));
    }
    var isDisabled_1 = false;
    var isDisabled_2 = false;
    var isDisabled_3 = false;
    var varData_2176 = null;
    var isDisabled_4 = false;
    var isDisabled_5 = false;
    function handleAction_183(param_1, param_2) {
      return handleAction_184.apply(this, arguments);
    }
    function handleAction_184() {
      handleAction_184 = handleAction_166(function (param_1, param_2) {
        var varData_2177;
        var varData_2178;
        var varData_2179;
        var varData_2180;
        var varData_2181;
        var varData_2182;
        var varData_2183;
        var varData_2184;
        var varData_2185;
        var varData_2186;
        var varData_2187;
        var varData_2188;
        var varData_2189;
        var varData_2190;
        var varData_2191;
        var varData_2192 = arguments;
        return handleAction_177(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2177 = varData_2192.length > 2 && varData_2192[2] !== undefined ? varData_2192[2] : 1;
              varData_2178 = varData_2192.length > 3 ? varData_2192[3] : undefined;
              varData_2179 = handleAction_175(GetEntityCoords(param_2, false), 3);
              varData_2180 = varData_2179[0];
              varData_2181 = varData_2179[1];
              varData_2182 = varData_2179[2];
              varData_2183 = handleAction_175(GetEntityVelocity(param_2), 3);
              varData_2184 = varData_2183[0];
              varData_2185 = varData_2183[1];
              varData_2186 = varData_2183[2];
              varData_2187 = handleAction_175(GetEntityRotationVelocity(param_2), 3);
              varData_2188 = varData_2187[0];
              varData_2189 = varData_2187[1];
              varData_2190 = varData_2187[2];
              SetEntityAsMissionEntity(param_2, true, true);
              DeleteEntity(param_2);
              return [4, varData_1419.waitForCondition(function () {
                return !DoesEntityExist(param_2);
              }, 5000)];
            case 1:
              param_1_1.sent();
              var varData_2193 = {
                x: varData_2180,
                y: varData_2181,
                z: varData_2182
              };
              return [4, varData_2042(param_1, varData_2193, varData_2178, true)];
            case 2:
              varData_2191 = param_1_1.sent();
              return [4, varData_1419.waitForCondition(function () {
                return DoesEntityExist(varData_2191);
              }, 5000)];
            case 3:
              param_1_1.sent();
              ActivatePhysics(varData_2191);
              return [4, varData_1419.waitForCondition(function () {
                return DoesEntityHavePhysics(varData_2191);
              }, 500)];
            case 4:
              param_1_1.sent();
              SetEntityVelocity(varData_2191, varData_2184 * varData_2177, varData_2185 * varData_2177, varData_2186 * varData_2177);
              SetEntityAngularVelocity(varData_2191, varData_2188, varData_2189, varData_2190);
              SetCanClimbOnEntity(varData_2191, false);
              return [2, varData_2191];
          }
        });
      });
      return handleAction_184.apply(this, arguments);
    }
    varData_1482.onNet("inventory:clearBaseballs", handleAction_166(function () {
      var varData_2194;
      return handleAction_177(this, function (param_1) {
        switch (param_1.label) {
          case 0:
            return [4, varData_1419.waitForCondition(function () {
              return !isDisabled_1;
            }, 5000)];
          case 1:
            param_1.sent();
            varData_2194 = GetHashKey("w_am_baseball");
            return [4, varData_1419.waitForCondition(function () {
              var varData_2195 = GetGamePool("CObject");
              var varData_2196 = varData_2195.find(function (param_1_1) {
                if (!param_1_1 || !DoesEntityExist(param_1_1)) {
                  return false;
                }
                var modelHash = GetEntityModel(param_1_1);
                return modelHash === varData_2194 && GetEntitySpeed(param_1_1) > 0;
              });
              if (varData_2196) {
                varData_1490.debug("Deleting projectile", varData_2196);
                SetEntityVisible(varData_2196, false, false);
                DeleteObject(varData_2196);
              }
              return false;
            }, 1000)];
          case 2:
            param_1.sent();
            return [2];
        }
      });
    }));
    on("animation:gotCanceled", function () {
      if (!varData_2176) {
        return;
      }
      isDisabled_4 = true;
    });
    varData_1482.onNet("inventory:grabItem", function () {
      var varData_2197 = handleAction_166(function (param_1, param_2) {
        return handleAction_177(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              var varData_2198 = {
                item: param_2
              };
              return [4, varData_2199({
                item: handleAction_174(handleAction_172({}, param_1), varData_2198)
              })];
            case 1:
              param_1_1.sent();
              return [2];
          }
        });
      });
      return function (param_1, param_2) {
        return varData_2197.apply(this, arguments);
      };
    }());
    var varData_2199 = function () {
      var varData_2200 = handleAction_166(function (param_1) {
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
        return handleAction_177(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2201 = param_1.item;
              if (!varData_2201 || varData_2176 || isDisabled_2 || isDisabled_5) {
                return [2];
              }
              varData_2176 = varData_2201;
              varData_2160 = null;
              return [4, varData_1419.waitForCondition(function () {
                return !varData_2324;
              }, 5000)];
            case 1:
              param_1_1.sent();
              isDisabled_4 = false;
              isDisabled_3 = false;
              varData_2202 = PlayerPedId();
              varData_2203 = IsPedInAnyVehicle(varData_2202, false);
              RemoveAllProjectilesOfType("WEAPON_BALL", false);
              varData_2204 = GetHashKey("WEAPON_BALL");
              varData_2205 = GetWeapontypeModel(varData_2204);
              GiveWeaponToPed(varData_2202, varData_2204, 2, true, true);
              SetCurrentPedWeapon(varData_2202, varData_2204, true);
              varData_1432.Sync["np-ui"].showInteraction("[R] Place [ESC] Cancel");
              varData_2206 = varData_2478[varData_2201.itemId];
              varData_2207 = handleAction_162(varData_2201.item, varData_2201.variant);
              varData_2208 = exports["np-character"].isAnimalModel(GetEntityModel(PlayerPedId()));
              varData_2209 = function () {
                var varData_2215 = handleAction_166(function () {
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
                  return handleAction_177(this, function (param_1_2) {
                    switch (param_1_2.label) {
                      case 0:
                        varData_2216 = 0;
                        return [4, varData_1419.waitForCondition(function () {
                          varData_2216 = GetCurrentPedWeaponEntityIndex(varData_2202);
                          return varData_2216 !== 0;
                        }, 1000)];
                      case 1:
                        param_1_2.sent();
                        if (!varData_2216) {
                          varData_1490.error("Failed to find weapon object");
                          RemoveAllPedWeapons(varData_2202, true);
                          return [2, []];
                        }
                        return [4, varData_1419.wait(0)];
                      case 2:
                        param_1_2.sent();
                        SetEntityVisible(varData_2216, false, false);
                        varData_2217 = new varData_1272(GetEntityCoords(varData_2216, false));
                        varData_2218 = new varData_1272(GetPedBoneCoords(varData_2202, 57005, 0, 0, 0));
                        varData_2219 = new varData_1272(GetPedBoneCoords(varData_2202, 18905, 0, 0, 0));
                        varData_2220 = varData_2217.getDistance(varData_2219);
                        varData_2221 = varData_2217.getDistance(varData_2218);
                        varData_1490.debug("Left dist", varData_2220, "Right dist", varData_2221);
                        varData_2222 = varData_2220 < varData_2221 ? 60309 : 28422;
                        varData_2223 = varData_1432.Sync.propattach.GetAttachmentInfo(varData_2201.itemId, varData_2222) ?? {};
                        if (varData_2208) {
                          varData_2222 = 20623;
                          ;
                          varData_2223.offset = varData_2223.offset ?? {
                            x: 0,
                            y: 0,
                            z: 0.05
                          };
                          ;
                          varData_2223.rotation = varData_2223.rotation ?? {
                            x: 90,
                            y: 0,
                            z: 90
                          };
                          varData_2223.bone = varData_2222;
                        }
                        var varData_2226 = {
                          x: 0.1,
                          y: -0.005,
                          z: -0.05
                        };
                        var varData_2227 = {
                          bone: varData_2222,
                          group: "hands",
                          type: "prop",
                          offset: varData_2223.bone === varData_2222 ? varData_2223.offset : varData_2226,
                          rotation: varData_2223.bone === varData_2222 ? varData_2223.rotation : {
                            x: 90,
                            y: 0,
                            z: 90
                          },
                          rotationOrder: varData_2223.rotationOrder ?? 2,
                          tint: varData_2223.tint ?? undefined,
                          model: varData_2207,
                          skipAnim: true,
                          priority: 99,
                          onUse: true
                        };
                        varData_2224 = varData_2227;
                        return [4, varData_1432.Sync.propattach.AttachItem(varData_2224, varData_2201)];
                      case 3:
                        varData_2225 = param_1_2.sent();
                        return [2, [varData_2216, varData_2225]];
                    }
                  });
                });
                return function _0x1fc6f8() {
                  return varData_2215.apply(this, arguments);
                };
              }();
              varData_2212 = PlayerId();
              varData_2213 = setTick(handleAction_166(function () {
                var varData_2228;
                var varData_2229;
                var varData_2230;
                return handleAction_177(this, function (param_1_2) {
                  switch (param_1_2.label) {
                    case 0:
                      if (!varData_2176) {
                        clearTick(varData_2213);
                        return [2];
                      }
                      varData_2228 = (IsPlayerFreeAiming(varData_2212) || !varData_2203) && !isDisabled_3;
                      varData_2229 = GetCurrentPedWeaponEntityIndex(varData_2202) === varData_2211;
                      if (!varData_2228 || !!varData_2210) {
                        return [3, 2];
                      }
                      return [4, varData_2209()];
                    case 1:
                      varData_2230 = handleAction_175.apply(undefined, [param_1_2.sent(), 2]);
                      varData_2211 = varData_2230[0];
                      varData_2210 = varData_2230[1];
                      varData_2230;
                      return [3, 3];
                    case 2:
                      if (!varData_2228 && varData_2210 || !varData_2229 && !IsPedShooting(varData_2202)) {
                        if (varData_2210 && !isDisabled_3 && !isDisabled_1 && !isDisabled_2) {
                          emit("destroyProp");
                          varData_2210 = 0;
                        }
                      }
                      param_1_2.label = 3;
                    case 3:
                      return [2];
                  }
                });
              }));
              varData_2214 = setTick(handleAction_166(function () {
                var varData_2231;
                var varData_2232;
                var varData_2233;
                var varData_2234;
                var varData_2235;
                return handleAction_177(this, function (param_1_2) {
                  if (!varData_2176) {
                    clearTick(varData_2214);
                    return [2];
                  }
                  DisableControlAction(2, varData_1255.E, true);
                  DisableControlAction(2, varData_1255.Q, true);
                  DisableControlAction(2, 85, true);
                  N_0x9911f4a24485f653(true);
                  SuppressShockingEventsNextFrame();
                  SuppressAgitationEventsNextFrame();
                  if (IsPedShooting(varData_2202)) {
                    isDisabled_3 = true;
                    isDisabled_1 = true;
                    varData_2231 = varData_2201.id;
                    varData_2232 = varData_2201.inventoryId;
                    varData_2233 = varData_2201.item.flags.weapon;
                    clearTick(varData_2213);
                    if (varData_2210) {
                      SetEntityVisible(varData_2210, false, false);
                    }
                    varData_2234 = 0;
                    varData_2235 = setTick(handleAction_166(function () {
                      var varData_2236;
                      var varData_2237;
                      var varData_2238;
                      var varData_2239;
                      var varData_2240;
                      var varData_2241;
                      var varData_2242;
                      var varData_2243;
                      var varData_2244;
                      var varData_2245;
                      var varData_2246;
                      var varData_2247;
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
                      return handleAction_177(this, function (param_1_3) {
                        switch (param_1_3.label) {
                          case 0:
                            if (varData_2234 > 50) {
                              varData_1490.error("Failed to find projectile");
                              clearTick(varData_2235);
                              return [2];
                            }
                            varData_2236 = GetGamePool("CObject");
                            varData_2237 = varData_2236.find(function (param_1_4) {
                              if (!param_1_4 || !DoesEntityExist(param_1_4)) {
                                return false;
                              }
                              var modelHash = GetEntityModel(param_1_4);
                              return modelHash === varData_2205 && !IsEntityAttachedToEntity(param_1_4, varData_2202) && GetEntitySpeed(param_1_4) > 0;
                            });
                            if (!varData_2237) {
                              varData_2234++;
                              return [2];
                            }
                            varData_2238 = varData_2201.item.weightWhenThrown ?? varData_1419.MathUtils.getMapRange([0, 50], [1, 5], varData_2201.item.weight);
                            varData_2239 = varData_1419.MathUtils.clamp(varData_2238, 0.1, 100);
                            varData_2240 = 1;
                            return [4, handleAction_183(varData_2207, varData_2237, varData_2240 / varData_2239, varData_2206)];
                          case 1:
                            varData_2241 = param_1_3.sent();
                            clearTick(varData_2235);
                            isDisabled_1 = false;
                            param_1_3.label = 2;
                          case 2:
                            param_1_3.trys.push([2,, 6, 7]);
                            isDisabled_2 = true;
                            return [4, varData_1419.waitForCondition(function () {
                              var entitySpeed = GetEntitySpeed(varData_2241);
                              return entitySpeed < 0.00125;
                            }, 10000)];
                          case 3:
                            param_1_3.sent();
                            return [4, varData_1419.wait(0)];
                          case 4:
                            param_1_3.sent();
                            varData_2242 = NetworkGetNetworkIdFromEntity(varData_2241);
                            varData_2243 = new varData_1272(GetEntityCoords(varData_2241));
                            varData_2244 = new varData_1272(GetEntityRotation(varData_2241, 2));
                            varData_2245 = varData_1432.Sync["np-polyzone"].ExpensiveIsPointInsideZone(varData_2243.toJSON(), ["elevator_shaft"]);
                            if (varData_2245) {
                              DeleteEntity(varData_2241);
                              return [2];
                            }
                            varData_2246 = handleAction_175(GetGroundZFor_3dCoord(varData_2243.x, varData_2243.y, varData_2243.z, false), 2);
                            varData_2247 = varData_2246[0];
                            varData_2248 = varData_2246[1];
                            if (varData_2247 && varData_2248 > varData_2243.z && varData_2248 - varData_2243.z < 1 || IsEntityInWater(varData_2241)) {
                              varData_2243.z = varData_2248;
                            }
                            if (varData_2233) {
                              varData_2249 = handleAction_175(GetModelDimensions(varData_2207), 2);
                              varData_2250 = varData_2249[0];
                              varData_2251 = varData_2249[1];
                              varData_2252 = new varData_1272(varData_2251).sub(new varData_1272(varData_2250));
                              varData_2253 = new varData_1272(GetEntityRotation(varData_2241, 2));
                              varData_2254 = handleAction_182(varData_2253);
                              varData_2255 = varData_2254.multiply(varData_2252);
                              varData_2243.z += varData_2255.z + 0.05;
                            }
                            if (!varData_2247) {
                              varData_1490.warning("Failed to get ground Z");
                            }
                            return [4, varData_1522.execute("inventory:dropItem", varData_2232, varData_2231, varData_2242, varData_2243, varData_2244)];
                          case 5:
                            varData_2256 = handleAction_175.apply(undefined, [param_1_3.sent(), 2]);
                            varData_2257 = varData_2256[0];
                            varData_2258 = varData_2256[1];
                            if (!varData_2257) {
                              varData_1490.warning("Failed to drop item:", varData_2258);
                              return [2];
                            }
                            return [3, 7];
                          case 6:
                            isDisabled_2 = false;
                            if (DoesEntityExist(varData_2241)) {
                              SetEntityAsMissionEntity(varData_2241, true, true);
                              DetachEntity(varData_2241, true, true);
                              DeleteEntity(varData_2241);
                            }
                            return [7];
                          case 7:
                            return [2];
                        }
                      });
                    }));
                  }
                  if (IsDisabledControlJustPressed(2, varData_1255.R) && !isDisabled_3) {
                    isDisabled_5 = true;
                    setImmediate(handleAction_166(function () {
                      return handleAction_177(this, function (param_1_3) {
                        switch (param_1_3.label) {
                          case 0:
                            return [4, varData_2260(varData_2207, varData_2201)];
                          case 1:
                            param_1_3.sent();
                            isDisabled_4 = true;
                            return [2];
                        }
                      });
                    }));
                    if (!varData_2208) {
                      isDisabled_4 = true;
                    }
                  }
                  if (IsDisabledControlJustPressed(2, varData_1255.ESC) || isDisabled_3 || isDisabled_4) {
                    varData_2176 = null;
                    varData_1432.Sync["np-ui"].hideInteraction();
                    clearTick(varData_2213);
                    if (isDisabled_3) {
                      setImmediate(handleAction_166(function () {
                        return handleAction_177(this, function (param_1_3) {
                          switch (param_1_3.label) {
                            case 0:
                              return [4, varData_1419.waitForCondition(function () {
                                return !isDisabled_1 && !isDisabled_2;
                              }, 30000)];
                            case 1:
                              param_1_3.sent();
                              emit("destroyProp");
                              return [2];
                          }
                        });
                      }));
                    } else {
                      emit("destroyProp");
                    }
                    setTimeout(function () {
                      RemoveAllPedWeapons(varData_2202, false);
                    }, 500);
                  }
                  return [2];
                });
              }));
              varData_1482.emitNet("inventory:giveItemActionStarted", param_1.item);
              return [2];
          }
        });
      });
      return function _0x255b15(param_1) {
        return varData_2200.apply(this, arguments);
      };
    }();
    varData_1583.register("inventory:giveItem", function () {
      var varData_2259 = handleAction_166(function (param_1) {
        return handleAction_177(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2199(param_1)];
            case 1:
              param_1_1.sent();
              return [2];
          }
        });
      });
      return function (param_1) {
        return varData_2259.apply(this, arguments);
      };
    }());
    var varData_2260 = function () {
      var varData_2261 = handleAction_166(function (param_1, param_2) {
        var varData_2262;
        var varData_2263;
        var varData_2264;
        var varData_2265;
        var varData_2266;
        return handleAction_177(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              param_1_1.trys.push([0,, 5, 6]);
              return [4, varData_1432.Async["np-objects"].PlaceObjectAsync(param_1, {
                collision: false,
                groundSnap: true,
                forceGroundSnap: true,
                useModelOffset: false,
                distance: 2.5
              }, function (param_1_2, param_2_1, param_3) {
                return true;
              })];
            case 1:
              varData_2262 = handleAction_175.apply(undefined, [param_1_1.sent(), 2]);
              varData_2263 = varData_2262[0];
              varData_2264 = varData_2262[1];
              if (!varData_2263) {
                return [2, false];
              }
              return [4, varData_1522.execute("inventory:dropItem", param_2.inventoryId, param_2.id, null, varData_2264.coords, varData_2264.rotation)];
            case 2:
              varData_2265 = param_1_1.sent();
              if (!varData_2265) {
                return [3, 4];
              }
              varData_2266 = exports["np-character"].isAnimalModel(GetEntityModel(PlayerPedId()));
              if (!varData_2266) {
                return [3, 4];
              }
              return [4, varData_1806.loadAnim("creatures@rottweiler@move")];
            case 3:
              param_1_1.sent();
              TaskPlayAnim(PlayerPedId(), "creatures@rottweiler@move", "fetch_drop", 8, 8, -1, 4, 0, false, false, false);
              param_1_1.label = 4;
            case 4:
              return [3, 6];
            case 5:
              setTimeout(function () {
                isDisabled_5 = false;
              }, 250);
              return [2, true];
            case 6:
              return [2];
          }
        });
      });
      return function _0x14690f(param_1, param_2) {
        return varData_2261.apply(this, arguments);
      };
    }();
    varData_1482.on("inventory:giveItem", function () {
      var varData_2267 = handleAction_166(function (param_1, param_2) {
        var varData_2268;
        var varData_2269;
        var varData_2270;
        var varData_2271;
        var varData_2272;
        return handleAction_177(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (varData_2160) {
                return [2];
              }
              if (!varData_2176) {
                return [2];
              }
              param_1_1.label = 1;
            case 1:
              param_1_1.trys.push([1,, 9, 10]);
              varData_2160 = varData_2176;
              varData_2268 = varData_2176.id;
              varData_2269 = GetEntityType(param_2);
              if (varData_2269 !== 1 || !IsPedAPlayer(param_2) || !!IsPedDeadOrDying(param_2, true)) {
                return [3, 8];
              }
              varData_2270 = GetPlayerServerId(NetworkGetPlayerIndexFromPed(param_2));
              if (!varData_2270) {
                return [3, 8];
              }
              varData_1490.debug("Giving item to player", varData_2270);
              return [4, varData_1522.execute("inventory:giveItem", varData_2270, varData_2268)];
            case 2:
              varData_2271 = param_1_1.sent();
              if (!varData_2271) {
                return [3, 8];
              }
              varData_2272 = exports["np-character"].isAnimalModel(GetEntityModel(PlayerPedId()));
              if (!varData_2272) {
                return [3, 4];
              }
              return [4, varData_1806.loadAnim("creatures@rottweiler@move")];
            case 3:
              param_1_1.sent();
              TaskPlayAnim(PlayerPedId(), "creatures@rottweiler@move", "fetch_drop", 8, 8, -1, 4, 0, false, false, false);
              return [3, 6];
            case 4:
              return [4, varData_1806.loadAnim("mp_common")];
            case 5:
              param_1_1.sent();
              TaskPlayAnim(PlayerPedId(), "mp_common", "givetake1_a", 1, 1, -1, 48, 0, false, false, false);
              param_1_1.label = 6;
            case 6:
              return [4, varData_1419.wait(1000)];
            case 7:
              param_1_1.sent();
              isDisabled_4 = true;
              param_1_1.label = 8;
            case 8:
              return [3, 10];
            case 9:
              varData_2160 = null;
              return [7];
            case 10:
              return [2];
          }
        });
      });
      return function (param_1, param_2) {
        return varData_2267.apply(this, arguments);
      };
    }());
    varData_1482.on("inventory:recycleItem", handleAction_166(function () {
      var varData_2273;
      var varData_2274;
      return handleAction_177(this, function (param_1) {
        switch (param_1.label) {
          case 0:
            if (varData_2160) {
              return [2];
            }
            if (!varData_2176) {
              return [2];
            }
            param_1.label = 1;
          case 1:
            param_1.trys.push([1,, 6, 7]);
            varData_2160 = varData_2176;
            varData_2273 = varData_2176.id;
            return [4, varData_1522.execute("inventory:recycleItem", varData_2273)];
          case 2:
            varData_2274 = param_1.sent();
            if (!varData_2274) {
              return [3, 5];
            }
            return [4, varData_1806.loadAnim("mp_common")];
          case 3:
            param_1.sent();
            TaskPlayAnim(PlayerPedId(), "mp_common", "givetake1_a", 1, 1, -1, 48, 0, false, false, false);
            emit("DoLongHudText", "Thank you for recycling and keeping the county clean!", 1);
            return [4, varData_1419.wait(1000)];
          case 4:
            param_1.sent();
            isDisabled_4 = true;
            param_1.label = 5;
          case 5:
            return [3, 7];
          case 6:
            varData_2160 = null;
            return [7];
          case 7:
            return [2];
        }
      });
    }));
    varData_1482.onNet("inventory:playReceiveAnimation", handleAction_166(function () {
      var varData_2275;
      var varData_2276;
      return handleAction_177(this, function (param_1) {
        switch (param_1.label) {
          case 0:
            varData_2275 = PlayerPedId();
            varData_2276 = exports["np-character"].isAnimalModel(GetEntityModel(varData_2275));
            if (!varData_2276) {
              return [3, 2];
            }
            return [4, varData_1806.loadAnim("creatures@rottweiler@move")];
          case 1:
            param_1.sent();
            TaskPlayAnim(varData_2275, "creatures@rottweiler@move", "fetch_pickup", 8, 8, -1, 4, 0, false, false, false);
            return [2];
          case 2:
            return [4, varData_1806.loadAnim("mp_common")];
          case 3:
            param_1.sent();
            TaskPlayAnim(varData_2275, "mp_common", "givetake1_b", 1, 1, -1, 48, 0, false, false, false);
            return [2];
        }
      });
    }));
    ;
    function handleAction_185(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2277 = param_1[param_6](param_7);
        var varData_2278 = varData_2277.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2277.done) {
        param_2(varData_2278);
      } else {
        Promise.resolve(varData_2278).then(param_4, param_5);
      }
    }
    function handleAction_186(param_1) {
      return function () {
        var varData_2279 = this;
        var varData_2280 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2281 = param_1.apply(varData_2279, varData_2280);
          function handleAction_187(param_1_2) {
            handleAction_185(varData_2281, param_1_1, param_2, handleAction_187, handleAction_188, "next", param_1_2);
          }
          function handleAction_188(param_1_2) {
            handleAction_185(varData_2281, param_1_1, param_2, handleAction_187, handleAction_188, "throw", param_1_2);
          }
          handleAction_187(undefined);
        });
      };
    }
    function handleAction_189(param_1, param_2) {
      var varData_2282;
      var varData_2283;
      var varData_2284;
      var varData_2285;
      var varData_2286 = {
        label: 0,
        sent: function () {
          if (varData_2284[0] & 1) {
            throw varData_2284[1];
          }
          return varData_2284[1];
        },
        trys: [],
        ops: []
      };
      varData_2285 = {
        next: handleAction_190(0),
        throw: handleAction_190(1),
        return: handleAction_190(2)
      };
      if (typeof Symbol === "function") {
        varData_2285[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2285;
      function handleAction_190(param_1_1) {
        return function (param_1_2) {
          return handleAction_191([param_1_1, param_1_2]);
        };
      }
      function handleAction_191(param_1_1) {
        if (varData_2282) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2286) {
          try {
            varData_2282 = 1;
            if (varData_2283 && (varData_2284 = param_1_1[0] & 2 ? varData_2283.return : param_1_1[0] ? varData_2283.throw || ((varData_2284 = varData_2283.return) && varData_2284.call(varData_2283), 0) : varData_2283.next) && !(varData_2284 = varData_2284.call(varData_2283, param_1_1[1])).done) {
              return varData_2284;
            }
            varData_2283 = 0;
            if (varData_2284) {
              param_1_1 = [param_1_1[0] & 2, varData_2284.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2284 = param_1_1;
                break;
              case 4:
                varData_2286.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2286.label++;
                varData_2283 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2286.ops.pop();
                varData_2286.trys.pop();
                continue;
              default:
                if (!(varData_2284 = varData_2286.trys, varData_2284 = varData_2284.length > 0 && varData_2284[varData_2284.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2286 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2284 || param_1_1[1] > varData_2284[0] && param_1_1[1] < varData_2284[3])) {
                  varData_2286.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2286.label < varData_2284[1]) {
                  varData_2286.label = varData_2284[1];
                  varData_2284 = param_1_1;
                  break;
                }
                if (varData_2284 && varData_2286.label < varData_2284[2]) {
                  varData_2286.label = varData_2284[2];
                  varData_2286.ops.push(param_1_1);
                  break;
                }
                if (varData_2284[2]) {
                  varData_2286.ops.pop();
                }
                varData_2286.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2286);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2283 = 0;
          } finally {
            varData_2282 = varData_2284 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2287 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2287;
      }
    }
    var varData_2288 = {
      normal: {
        dict: "reaction@intimidation@1h",
        anim: "intro"
      },
      cop: {
        dict: "reaction@intimidation@cop@unarmed",
        anim: "intro"
      }
    };
    var varData_2289 = {
      normal: {
        dict: "reaction@intimidation@1h",
        anim: "outro"
      },
      cop: {
        dict: "reaction@intimidation@cop@unarmed",
        anim: "outro"
      }
    };
    var itemList_7 = [GetHashKey("GROUP_PISTOL"), GetHashKey("GROUP_STUNGUN")];
    var varData_2290 = function () {
      var varData_2291 = handleAction_186(function (param_1) {
        var varData_2292;
        var varData_2293;
        var varData_2294;
        var varData_2295;
        var varData_2296;
        var varData_2297;
        return handleAction_189(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2292 = varData_1432.Sync.isPed.isPed("myjob");
              varData_2293 = (varData_2292 === "police" || varData_2292 === "dib") && itemList_7.includes(GetWeapontypeGroup(GetHashKey(param_1)));
              varData_2294 = varData_2293 ? varData_2288.cop : varData_2288.normal;
              return [4, varData_1806.loadAnim(varData_2294.dict)];
            case 1:
              param_1_1.sent();
              varData_2295 = PlayerPedId();
              varData_2296 = {
                level: 0
              };
              TaskPlayAnim(varData_2295, varData_2294.dict, varData_2294.anim, 1, -1, -1, 50, varData_2296.level / 100, false, false, false);
              varData_2297 = 900 - varData_2296.level * 900 / 100;
              return [4, varData_1419.wait(varData_2297)];
            case 2:
              param_1_1.sent();
              ClearPedTasks(varData_2295);
              return [2];
          }
        });
      });
      return function _0x1f2f60(param_1) {
        return varData_2291.apply(this, arguments);
      };
    }();
    var varData_2298 = function () {
      var varData_2299 = handleAction_186(function (param_1) {
        var varData_2300;
        var varData_2301;
        var varData_2302;
        var varData_2303;
        var varData_2304;
        return handleAction_189(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2300 = varData_1432.Sync.isPed.isPed("myjob");
              varData_2301 = (varData_2300 === "police" || varData_2300 === "dib") && itemList_7.includes(GetWeapontypeGroup(GetHashKey(param_1)));
              varData_2302 = varData_2301 ? varData_2289.cop : varData_2289.normal;
              return [4, varData_1806.loadAnim(varData_2302.dict)];
            case 1:
              param_1_1.sent();
              varData_2303 = PlayerPedId();
              TaskPlayAnim(varData_2303, varData_2302.dict, varData_2302.anim, 1, -1, -1, 50, 0, false, false, false);
              if (!varData_2301) {
                return [3, 3];
              }
              return [4, varData_1419.wait(600)];
            case 2:
              param_1_1.sent();
              return [3, 5];
            case 3:
              varData_2304 = GetAnimDuration(varData_2302.dict, varData_2302.anim) * 1000;
              return [4, varData_1419.wait(varData_2304 - 2200)];
            case 4:
              param_1_1.sent();
              param_1_1.label = 5;
            case 5:
              ClearPedTasks(varData_2303);
              return [2];
          }
        });
      });
      return function _0x8cfd31(param_1) {
        return varData_2299.apply(this, arguments);
      };
    }();
    ;
    function handleAction_192() {}
    var varData_2305 = new varData_1591.Thread(function () {}, 0, "tick");
    varData_2305.addHook("preStart", function () {
      var playerPed = PlayerPedId();
      var varData_2306 = GetSelectedPedWeapon(playerPed);
      this.data.ped = playerPed;
      this.data.curWeapon = varData_2306;
    });
    varData_2305.addHook("afterStop", function () {
      this.data = {};
    });
    ;
    function handleAction_193(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_92 = 0, loopIdx = new Array(param_2); numericVal_92 < param_2; numericVal_92++) {
        loopIdx[numericVal_92] = param_1[numericVal_92];
      }
      return loopIdx;
    }
    function handleAction_194(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_195(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2307 = param_1[param_6](param_7);
        var varData_2308 = varData_2307.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2307.done) {
        param_2(varData_2308);
      } else {
        Promise.resolve(varData_2308).then(param_4, param_5);
      }
    }
    function handleAction_196(param_1) {
      return function () {
        var varData_2309 = this;
        var varData_2310 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2311 = param_1.apply(varData_2309, varData_2310);
          function handleAction_197(param_1_2) {
            handleAction_195(varData_2311, param_1_1, param_2, handleAction_197, handleAction_198, "next", param_1_2);
          }
          function handleAction_198(param_1_2) {
            handleAction_195(varData_2311, param_1_1, param_2, handleAction_197, handleAction_198, "throw", param_1_2);
          }
          handleAction_197(undefined);
        });
      };
    }
    function handleAction_199(param_1, param_2) {
      var varData_2312 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2312 == null) {
        return;
      }
      var itemList_8 = [];
      var isEnabled_2 = true;
      var isDisabled_6 = false;
      var varData_2313;
      var varData_2314;
      try {
        for (varData_2312 = varData_2312.call(param_1); !(isEnabled_2 = (varData_2313 = varData_2312.next()).done); isEnabled_2 = true) {
          itemList_8.push(varData_2313.value);
          if (param_2 && itemList_8.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_6 = true;
        varData_2314 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2312.return != null) {
            varData_2312.return();
          }
        } finally {
          if (isDisabled_6) {
            throw varData_2314;
          }
        }
      }
      return itemList_8;
    }
    function handleAction_200() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_201(param_1, param_2) {
      return handleAction_194(param_1) || handleAction_199(param_1, param_2) || handleAction_202(param_1, param_2) || handleAction_200();
    }
    function handleAction_202(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_193(param_1, param_2);
      }
      var varData_2315 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2315 === "Object" && param_1.constructor) {
        varData_2315 = param_1.constructor.name;
      }
      if (varData_2315 === "Map" || varData_2315 === "Set") {
        return Array.from(varData_2315);
      }
      if (varData_2315 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2315)) {
        return handleAction_193(param_1, param_2);
      }
    }
    function handleAction_203(param_1, param_2) {
      var varData_2316;
      var varData_2317;
      var varData_2318;
      var varData_2319;
      var varData_2320 = {
        label: 0,
        sent: function () {
          if (varData_2318[0] & 1) {
            throw varData_2318[1];
          }
          return varData_2318[1];
        },
        trys: [],
        ops: []
      };
      varData_2319 = {
        next: handleAction_204(0),
        throw: handleAction_204(1),
        return: handleAction_204(2)
      };
      if (typeof Symbol === "function") {
        varData_2319[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2319;
      function handleAction_204(param_1_1) {
        return function (param_1_2) {
          return handleAction_205([param_1_1, param_1_2]);
        };
      }
      function handleAction_205(param_1_1) {
        if (varData_2316) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2320) {
          try {
            varData_2316 = 1;
            if (varData_2317 && (varData_2318 = param_1_1[0] & 2 ? varData_2317.return : param_1_1[0] ? varData_2317.throw || ((varData_2318 = varData_2317.return) && varData_2318.call(varData_2317), 0) : varData_2317.next) && !(varData_2318 = varData_2318.call(varData_2317, param_1_1[1])).done) {
              return varData_2318;
            }
            varData_2317 = 0;
            if (varData_2318) {
              param_1_1 = [param_1_1[0] & 2, varData_2318.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2318 = param_1_1;
                break;
              case 4:
                varData_2320.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2320.label++;
                varData_2317 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2320.ops.pop();
                varData_2320.trys.pop();
                continue;
              default:
                if (!(varData_2318 = varData_2320.trys, varData_2318 = varData_2318.length > 0 && varData_2318[varData_2318.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2320 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2318 || param_1_1[1] > varData_2318[0] && param_1_1[1] < varData_2318[3])) {
                  varData_2320.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2320.label < varData_2318[1]) {
                  varData_2320.label = varData_2318[1];
                  varData_2318 = param_1_1;
                  break;
                }
                if (varData_2318 && varData_2320.label < varData_2318[2]) {
                  varData_2320.label = varData_2318[2];
                  varData_2320.ops.push(param_1_1);
                  break;
                }
                if (varData_2318[2]) {
                  varData_2320.ops.pop();
                }
                varData_2320.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2320);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2317 = 0;
          } finally {
            varData_2316 = varData_2318 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2321 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2321;
      }
    }
    var varData_2322 = undefined;
    var varData_2323 = undefined;
    var varData_2324 = undefined;
    var numericVal_92 = 0;
    var isDisabled_6 = false;
    var isDisabled_7 = false;
    function handleAction_206(param_1) {
      varData_2322 = param_1;
    }
    var varData_2325 = null;
    var isDisabled_8 = false;
    var isDisabled_9 = false;
    var isDisabled_10 = false;
    varData_2305.addHook("active", handleAction_196(function () {
      var varData_2326;
      var varData_2327;
      var varData_2328;
      var varData_2329;
      var varData_2330;
      var varData_2331;
      var varData_2332;
      var varData_2333;
      var varData_2334;
      return handleAction_203(this, function (param_1) {
        switch (param_1.label) {
          case 0:
            varData_2327 = this.data.ped;
            varData_2328 = this.data.weaponData;
            varData_2329 = this.data.curWeapon;
            varData_2330 = this.data.isThrowable;
            if (varData_2329 !== varData_2324 || varData_2176 || varData_2330 && varData_2325 === 0) {
              varData_2350(varData_2330);
            } else {
              varData_2325 = GetAmmoInPedWeapon(varData_2327, varData_2329);
            }
            if (varData_2328.ammoType && varData_2328.ammoType.length > 0) {
              DisableControlAction(0, varData_1255.R, true);
              if (IsDisabledControlJustPressed(0, varData_1255.R)) {
                varData_2392();
              }
            }
            if (!IsPedShooting(varData_2327)) {
              return [3, 5];
            }
            if (varData_2322?.itemId !== "np_ms1911") {
              return [3, 4];
            }
            varData_2331 = varData_1419.MathUtils.getRandomNumber(0, 100);
            varData_2332 = varData_2331 < 5;
            if (!varData_2332) {
              return [3, 4];
            }
            DisablePlayerFiring(varData_2327, true);
            return [4, varData_1522.execute("inventory:weapons:jamWeapon", varData_2322.id)];
          case 1:
            varData_2333 = param_1.sent();
            if (!varData_2333) {
              return [3, 3];
            }
            emit("DoLongHudText", "Your weapon jammed!", 2);
            return [4, varData_1590.GetItemStacks(varData_2322.itemId, {
              slot: varData_2322.slot
            })];
          case 2:
            varData_2322 = param_1.sent()[0];
            param_1.label = 3;
          case 3:
            return [2];
          case 4:
            numericVal_92 = GetGameTimer();
            param_1.label = 5;
          case 5:
            varData_2334 = (varData_2326 = varData_2322) === null || varData_2326 === undefined ? undefined : varData_2326.publicMetadata?.jammed;
            if (varData_2334 && !this.data.jamInteractionShown) {
              varData_1432.Sync["np-ui"].showInteraction("[E] Unjam Weapon", "error");
            }
            if (varData_2334 && IsControlJustPressed(0, varData_1255.E)) {
              handleAction_209();
            }
            if (isDisabled_9 || varData_2334) {
              DisablePlayerFiring(varData_2327, true);
            }
            if (varData_2328.firstPerson) {
              SetFollowPedCamViewMode(4);
            }
            return [2];
        }
      });
    }));
    varData_2305.addHook("preStart", function () {
      this.data.jamInteractionShown = false;
    });
    varData_2305.addHook("preStop", function () {
      var varData_2335 = this.data.camViewMode;
      var varData_2336 = this.data.weaponData;
      if (varData_2336.firstPerson) {
        SetFollowPedCamViewMode(varData_2335);
      }
      varData_1432.Sync["np-ui"].hideInteraction();
    });
    var varData_2337 = function () {
      var varData_2338 = handleAction_196(function (param_1, param_2, param_3, param_4) {
        return handleAction_203(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (isDisabled_8) {
                emit("DoLongHudText", "You can't do this right now", 2);
                return [2, [false]];
              }
              param_1_1.label = 1;
            case 1:
              param_1_1.trys.push([1,, 8, 9]);
              isDisabled_8 = true;
              if (varData_2322?.id !== param_1.id) {
                return [3, 3];
              }
              return [4, varData_2350()];
            case 2:
              param_1_1.sent();
              return [2, [true, false]];
            case 3:
              if (!varData_2322) {
                return [3, 5];
              }
              return [4, varData_2350()];
            case 4:
              param_1_1.sent();
              param_1_1.label = 5;
            case 5:
              return [4, varData_2339(param_1, param_2, param_3, param_4)];
            case 6:
              param_1_1.sent();
              param_1_1.label = 7;
            case 7:
              return [2, [true, true]];
            case 8:
              isDisabled_8 = false;
              return [7];
            case 9:
              return [2];
          }
        });
      });
      return function _0x471686(param_1, param_2, param_3, param_4) {
        return varData_2338.apply(this, arguments);
      };
    }();
    var varData_2339 = function () {
      var varData_2340 = handleAction_196(function (param_1, param_2, param_3, param_4) {
        var varData_2341;
        var varData_2342;
        var varData_2343;
        var varData_2344;
        var varData_2345;
        var varData_2346;
        var varData_2347;
        var varData_2348;
        var varData_2349;
        return handleAction_203(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (varData_2176) {
                return [2, emit("DoLongHudText", "You can't do this right now", 2)];
              }
              if (isDisabled_7) {
                emit("DoLongHudText", "You can't do this right now", 2);
                return [2];
              }
              return [4, varData_1925(param_1.itemId)];
            case 1:
              varData_2342 = param_1_1.sent();
              if (!varData_2342) {
                return [2, emit("DoLongHudText", "You don't have this weapon", 2)];
              }
              if (isDisabled_6) {
                emit("DoLongHudText", "You can't do this right now", 2);
                return [2];
              }
              varData_2322 = param_1;
              varData_2323 = param_3;
              varData_2343 = PlayerPedId();
              varData_2344 = handleAction_242(param_1);
              if (!varData_2344) {
                return [2, emit("DoLongHudText", "This weapon doesn't exist", 2)];
              }
              varData_2345 = varData_1432.Sync.phone.IsInPhoneCall();
              if (varData_2345) {
                return [2, emit("DoLongHudText", "You can't do this right now", 2)];
              }
              varData_2324 = GetHashKey(varData_2344.weapon);
              RemoveAllPedWeapons(varData_2343, true);
              GiveWeaponToPed(varData_2343, varData_2344.weapon, param_2, false, false);
              return [4, varData_2355(param_1)];
            case 2:
              param_1_1.sent();
              return [4, varData_2373(param_1, param_4)];
            case 3:
              param_1_1.sent();
              return [4, varData_2290(varData_2344.weapon)];
            case 4:
              param_1_1.sent();
              return [4, varData_1934()];
            case 5:
              varData_2346 = param_1_1.sent();
              if (!varData_2346) {
                return [2];
              }
              varData_2347 = varData_2346[param_1.itemId];
              if (!varData_2347) {
                return [2];
              }
              varData_2348 = varData_2347.flags.throwable ? 1 : param_2;
              SetPedAmmo(varData_2343, varData_2344.weapon, varData_2348);
              SetCurrentPedWeapon(varData_2343, varData_2344.weapon, true);
              RefillAmmoInstantly(varData_2343);
              SetPlayerCanDoDriveBy(PlayerId(), true);
              SetWeaponsNoAutoswap(true);
              SetPedInfiniteAmmo(varData_2343, varData_2344?.unlimitedAmmo ?? false, varData_2344.weapon);
              if (typeof param_1.publicMetadata?.tintIndex === "number") {
                varData_2349 = Number(param_1.publicMetadata.tintIndex);
                SetPedWeaponTintIndex(varData_2343, varData_2344.weapon, varData_2349);
              }
              varData_1482.emit("inventory:weaponEquipped", varData_2344, param_1, param_3);
              varData_1432.Sync.phone.BlockPhoneOpening(true);
              varData_2305.data.weaponData = varData_2344;
              varData_2305.data.camViewMode = GetFollowPedCamViewMode();
              varData_2305.data.isThrowable = varData_2347.flags.throwable;
              varData_2305.start();
              if ((varData_2341 = varData_2322) === null || varData_2341 === undefined ? undefined : varData_2341.publicMetadata?.jammed) {
                emit("DoLongHudText", "Your weapon is jammed!", 2);
              }
              return [2];
          }
        });
      });
      return function _0x4dfade(param_1, param_2, param_3, param_4) {
        return varData_2340.apply(this, arguments);
      };
    }();
    var varData_2350 = function () {
      var varData_2351 = handleAction_196(function (param_1) {
        var varData_2352;
        var varData_2353;
        var varData_2354;
        return handleAction_203(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (!varData_2322) {
                return [2];
              }
              if (isDisabled_6) {
                emit("DoLongHudText", "You can't do this right now", 2);
                return [2];
              }
              varData_2352 = varData_2322;
              varData_2305.stop();
              varData_2353 = PlayerPedId();
              varData_2354 = handleAction_242(varData_2322);
              if (!varData_2354) {
                return [2];
              }
              return [4, varData_2298(varData_2354.weapon)];
            case 1:
              param_1_1.sent();
              SetCurrentPedWeapon(varData_2353, "WEAPON_UNARMED", true);
              return [4, varData_1419.wait(300)];
            case 2:
              param_1_1.sent();
              RemoveAllPedWeapons(varData_2353, true);
              varData_2322 = undefined;
              varData_2324 = undefined;
              varData_2323 = undefined;
              ClearPedTasks(varData_2353);
              varData_1482.emit("inventory:weaponUnequipped");
              varData_1432.Sync.phone.BlockPhoneOpening(false);
              if (!param_1) {
                return [3, 4];
              }
              return [4, varData_1522.execute("inventory:removeWeapon", varData_2352.inventoryId, varData_2352.id)];
            case 3:
              param_1_1.sent();
              return [3, 6];
            case 4:
              return [4, varData_1522.execute("inventory:updateAmmo", varData_2325)];
            case 5:
              param_1_1.sent();
              param_1_1.label = 6;
            case 6:
              varData_2325 = null;
              return [2];
          }
        });
      });
      return function _0x31e656(param_1) {
        return varData_2351.apply(this, arguments);
      };
    }();
    var varData_2355 = function () {
      var varData_2356 = handleAction_196(function (param_1) {
        var varData_2357;
        var varData_2358;
        var varData_2359;
        var varData_2360;
        var varData_2361;
        var varData_2362;
        var varData_2363;
        var varData_2364;
        var varData_2365;
        var varData_2366;
        return handleAction_203(this, function (param_1_1) {
          varData_2357 = handleAction_242(param_1);
          if (!varData_2357) {
            return [2, emit("DoLongHudText", "This weapon doesn't exist", 2)];
          }
          varData_2358 = PlayerPedId();
          varData_2359 = handleAction_207(param_1);
          if (!varData_2359) {
            return [2];
          }
          varData_2360 = true;
          varData_2361 = false;
          varData_2362 = undefined;
          try {
            for (varData_2363 = varData_2359[Symbol.iterator](); !(varData_2360 = (varData_2364 = varData_2363.next()).done); varData_2360 = true) {
              varData_2365 = varData_2364.value;
              ;
              varData_2366 = varData_2357.attachments[varData_2365];
              if (!varData_2366?.component) {
                continue;
              }
              GiveWeaponComponentToPed(varData_2358, varData_2357.weapon, varData_2366.component);
            }
          } catch (err) {
            varData_2361 = true;
            varData_2362 = err;
          } finally {
            try {
              if (!varData_2360 && varData_2363.return != null) {
                varData_2363.return();
              }
            } finally {
              if (varData_2361) {
                throw varData_2362;
              }
            }
          }
          return [2];
        });
      });
      return function _0x4f754b(param_1) {
        return varData_2356.apply(this, arguments);
      };
    }();
    function handleAction_207(param_1) {
      var varData_2367 = handleAction_242(param_1);
      if (!varData_2367) {
        return [];
      }
      var varData_2368 = param_1.publicMetadata?.attachments;
      if (!varData_2368) {
        return [];
      }
      var varData_2369 = varData_2368.filter(function (param_1_1) {
        var varData_2370 = varData_2367.attachments[param_1_1];
        var varData_2371 = varData_2370?.requirements;
        var varData_2372 = !varData_2371 || varData_2371.every(function (param_1_2) {
          return varData_2368.includes(param_1_2);
        });
        return varData_2372;
      });
      return varData_2369 || [];
    }
    var varData_2373 = function () {
      var varData_2374 = handleAction_196(function (param_1, param_2) {
        var varData_2375;
        var varData_2376;
        var varData_2377;
        var varData_2378;
        return handleAction_203(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2375 = PlayerPedId();
              varData_2376 = GetSelectedPedWeapon(varData_2375);
              varData_2377 = handleAction_242(param_1);
              if (!varData_2377) {
                return [2, emit("DoLongHudText", "This weapon doesn't exist", 2)];
              }
              if (!varData_2377.extendedComponent) {
                return [3, 4];
              }
              if (!param_2) {
                return [3, 2];
              }
              varData_2378 = HasPedGotWeaponComponent(varData_2375, varData_2376, varData_2377.extendedComponent);
              if (varData_2378) {
                return [2];
              }
              GiveWeaponComponentToPed(varData_2375, varData_2377.weapon, varData_2377.extendedComponent);
              return [4, varData_1419.wait(200)];
            case 1:
              param_1_1.sent();
              return [3, 4];
            case 2:
              RemoveWeaponComponentFromPed(varData_2375, varData_2376, varData_2377.extendedComponent);
              return [4, varData_1419.wait(200)];
            case 3:
              param_1_1.sent();
              param_1_1.label = 4;
            case 4:
              return [2];
          }
        });
      });
      return function _0x25efc1(param_1, param_2) {
        return varData_2374.apply(this, arguments);
      };
    }();
    var varData_2379 = function () {
      var varData_2380 = handleAction_196(function (param_1, param_2) {
        var varData_2381;
        var varData_2382;
        var varData_2383;
        var varData_2384;
        var varData_2385;
        var varData_2386;
        var varData_2387;
        var varData_2388;
        var varData_2389;
        var varData_2390;
        var varData_2391;
        return handleAction_203(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              isDisabled_9 = true;
              varData_2381 = "items@clear@custom_anim";
              varData_2382 = "reloading";
              varData_2383 = PlayerPedId();
              return [4, varData_1806.loadAnim(varData_2381)];
            case 1:
              param_1_1.sent();
              varData_2384 = GetEntityCoords(varData_2383);
              return [4, varData_1806.loadModel("w_ar_carbinerifle_mag1")];
            case 2:
              param_1_1.sent();
              varData_2385 = CreateObject("w_ar_carbinerifle_mag1", varData_2384[0], varData_2384[1], varData_2384[2], true, true, false);
              AttachEntityToEntity(varData_2385, varData_2383, GetPedBoneIndex(varData_2383, 18905), 0.12, 0.08, 0.01, -90, -60, 0, false, false, false, false, 1, true);
              TaskPlayAnim(varData_2383, varData_2381, varData_2382, 1, 1, -1, 49, 0, false, false, false);
              varData_1482.emitNet("inventory:sound:reload");
              varData_2386 = param_1 * 1000 / 2;
              return [4, varData_1872.taskBar(varData_2386, "Reloading Mag...", false)];
            case 3:
              varData_2387 = param_1_1.sent();
              varData_2388 = Math.round(param_1 * (varData_2387 / 100));
              if (varData_2322?.id && param_2) {
                varData_2389 = PlayerPedId();
                varData_2390 = GetSelectedPedWeapon(varData_2389);
                varData_2391 = GetAmmoInPedWeapon(varData_2389, varData_2390);
                SetPedAmmo(varData_2389, varData_2390, 0);
                AddAmmoToPed(varData_2389, varData_2390, varData_2391 + param_1);
                handleAction_208();
              }
              varData_1482.emitNet("inventory:sound:cleanup");
              DeleteEntity(varData_2385);
              ClearPedTasks(varData_2383);
              isDisabled_9 = false;
              return [2, varData_2388];
          }
        });
      });
      return function _0x2a597c(param_1, param_2) {
        return varData_2380.apply(this, arguments);
      };
    }();
    var varData_2392 = function () {
      var varData_2393 = handleAction_196(function () {
        var varData_2394;
        var varData_2395;
        var varData_2396;
        var varData_2397;
        var varData_2398;
        var varData_2399;
        return handleAction_203(this, function (param_1) {
          switch (param_1.label) {
            case 0:
              if (!varData_2322) {
                return [2];
              }
              varData_2394 = PlayerPedId();
              varData_2395 = GetSelectedPedWeapon(varData_2394);
              return [4, varData_1522.execute("inventory:reloadWeapon", varData_2325)];
            case 1:
              varData_2396 = param_1.sent();
              if (!varData_2396) {
                return [2];
              }
              varData_2397 = handleAction_201(varData_2396, 2);
              varData_2398 = varData_2397[0];
              varData_2399 = varData_2397[1];
              return [4, varData_2373(varData_2322, varData_2399)];
            case 2:
              param_1.sent();
              SetPedAmmo(varData_2394, varData_2395, 0);
              AddAmmoToPed(varData_2394, varData_2395, varData_2398);
              varData_2325 = varData_2398;
              handleAction_208();
              return [2];
          }
        });
      });
      return function _0x5b006a() {
        return varData_2393.apply(this, arguments);
      };
    }();
    var varData_2400 = function () {
      var varData_2401 = handleAction_196(function () {
        var varData_2402;
        var varData_2403;
        var varData_2404;
        var varData_2405;
        var varData_2406;
        var varData_2407;
        return handleAction_203(this, function (param_1) {
          switch (param_1.label) {
            case 0:
              varData_2402 = PlayerPedId();
              varData_2403 = GetSelectedPedWeapon(varData_2402);
              return [4, varData_1522.execute("inventory:getAmmo")];
            case 1:
              varData_2404 = param_1.sent();
              if (!varData_2404 || !varData_2322) {
                return [2];
              }
              varData_2405 = handleAction_201(varData_2404, 2);
              varData_2406 = varData_2405[0];
              varData_2407 = varData_2405[1];
              return [4, varData_2373(varData_2322, varData_2407)];
            case 2:
              param_1.sent();
              SetPedAmmo(varData_2402, varData_2403, 0);
              AddAmmoToPed(varData_2402, varData_2403, varData_2406);
              handleAction_208();
              return [2];
          }
        });
      });
      return function _0xcc7b4b() {
        return varData_2401.apply(this, arguments);
      };
    }();
    var varData_2408 = function () {
      var varData_2409 = handleAction_196(function () {
        var varData_2410;
        var varData_2411;
        var varData_2412;
        return handleAction_203(this, function (param_1) {
          switch (param_1.label) {
            case 0:
              if (!varData_2322) {
                return [2];
              }
              varData_2410 = PlayerPedId();
              varData_2411 = GetSelectedPedWeapon(varData_2410);
              return [4, varData_2413()];
            case 1:
              varData_2412 = param_1.sent();
              return [4, varData_2373(varData_2322, false)];
            case 2:
              param_1.sent();
              SetPedAmmo(varData_2410, varData_2411, 0);
              return [2, varData_2412];
          }
        });
      });
      return function _0x4fd5fa() {
        return varData_2409.apply(this, arguments);
      };
    }();
    var varData_2413 = function () {
      var varData_2414 = handleAction_196(function () {
        return handleAction_203(this, function (param_1) {
          switch (param_1.label) {
            case 0:
              return [4, varData_1419.waitForCondition(function () {
                return varData_2325 !== null;
              }, 2000)];
            case 1:
              param_1.sent();
              return [2, varData_2325];
          }
        });
      });
      return function _0x9b10ad() {
        return varData_2414.apply(this, arguments);
      };
    }();
    function handleAction_208() {
      var playerPed = PlayerPedId();
      if (IsPedInAnyVehicle(playerPed, false)) {
        TaskReloadWeapon(playerPed, false);
      } else {
        MakePedReload(playerPed);
      }
    }
    function handleAction_209() {
      return handleAction_210.apply(this, arguments);
    }
    function handleAction_210() {
      handleAction_210 = handleAction_196(function () {
        var varData_2415;
        var varData_2416;
        var varData_2417;
        var varData_2418;
        var varData_2419;
        var varData_2420;
        return handleAction_203(this, function (param_1) {
          switch (param_1.label) {
            case 0:
              if (isDisabled_10) {
                return [2];
              }
              varData_2415 = "anim@amb@machinery@weapon_test@";
              varData_2416 = "weapon_inspect_01_amy_skater_01";
              return [4, varData_1806.loadAnim(varData_2415)];
            case 1:
              param_1.sent();
              varData_2417 = PlayerPedId();
              TaskPlayAnim(varData_2417, varData_2415, varData_2416, 1, 1, -1, 49, 0, false, false, false);
              return [4, varData_1872.taskBar(1500, "Unjamming weapon")];
            case 2:
              varData_2418 = param_1.sent();
              ClearPedTasks(varData_2417);
              if (varData_2418 !== 100) {
                return [2];
              }
              isDisabled_10 = true;
              return [4, varData_1522.execute("inventory:weapons:unjamWeapon")];
            case 3:
              varData_2419 = param_1.sent();
              isDisabled_10 = false;
              varData_2420 = varData_2419 ? "Weapon unjammed" : "Failed to unjam weapon";
              if (!varData_2419 || !varData_2322) {
                return [3, 5];
              }
              return [4, varData_1590.GetItemStacks(varData_2322.itemId, {
                slot: varData_2322.slot
              })];
            case 4:
              varData_2322 = param_1.sent()[0];
              varData_1432.Sync["np-ui"].hideInteraction();
              varData_2305.data.jamInteractionShown = false;
              param_1.label = 5;
            case 5:
              emit("DoLongHudText", varData_2420, varData_2419 ? 1 : 2);
              return [2];
          }
        });
      });
      return handleAction_210.apply(this, arguments);
    }
    function handleAction_211() {
      var varData_2421 = {
        itemStack: varData_2322,
        item: varData_2323
      };
      return varData_2421;
    }
    function handleAction_212(param_1) {
      isDisabled_6 = param_1;
    }
    function handleAction_213(param_1) {
      isDisabled_7 = param_1;
      if (!param_1) {
        return;
      }
      var varData_2422 = varData_2324 !== undefined;
      if (varData_2422) {
        varData_2350();
      }
    }
    ;
    function handleAction_214(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
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
    function handleAction_215(param_1) {
      return function () {
        var varData_2425 = this;
        var varData_2426 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2427 = param_1.apply(varData_2425, varData_2426);
          function handleAction_216(param_1_2) {
            handleAction_214(varData_2427, param_1_1, param_2, handleAction_216, handleAction_217, "next", param_1_2);
          }
          function handleAction_217(param_1_2) {
            handleAction_214(varData_2427, param_1_1, param_2, handleAction_216, handleAction_217, "throw", param_1_2);
          }
          handleAction_216(undefined);
        });
      };
    }
    function handleAction_218(param_1, param_2) {
      var varData_2428;
      var varData_2429;
      var varData_2430;
      var varData_2431;
      var varData_2432 = {
        label: 0,
        sent: function () {
          if (varData_2430[0] & 1) {
            throw varData_2430[1];
          }
          return varData_2430[1];
        },
        trys: [],
        ops: []
      };
      varData_2431 = {
        next: handleAction_219(0),
        throw: handleAction_219(1),
        return: handleAction_219(2)
      };
      if (typeof Symbol === "function") {
        varData_2431[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2431;
      function handleAction_219(param_1_1) {
        return function (param_1_2) {
          return handleAction_220([param_1_1, param_1_2]);
        };
      }
      function handleAction_220(param_1_1) {
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
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2433;
      }
    }
    function handleAction_221() {}
    varData_1522.register("inventory:equipWeapon", function () {
      var varData_2434 = handleAction_215(function (param_1, param_2, param_3, param_4) {
        return handleAction_218(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2337(param_1, param_2, param_3, param_4)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function (param_1, param_2, param_3, param_4) {
        return varData_2434.apply(this, arguments);
      };
    }());
    varData_1522.register("inventory:reloadMag", function () {
      var varData_2435 = handleAction_215(function (param_1, param_2) {
        var varData_2436;
        return handleAction_218(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2379(param_1, param_2)];
            case 1:
              varData_2436 = param_1_1.sent();
              return [2, varData_2436];
          }
        });
      });
      return function (param_1, param_2) {
        return varData_2435.apply(this, arguments);
      };
    }());
    varData_1522.register("inventory:reloadWeapon", handleAction_215(function () {
      var varData_2437;
      return handleAction_218(this, function (param_1) {
        switch (param_1.label) {
          case 0:
            return [4, varData_2392()];
          case 1:
            varData_2437 = param_1.sent();
            return [2, varData_2437];
        }
      });
    }));
    varData_1522.register("inventory:updateAmmo", handleAction_215(function () {
      return handleAction_218(this, function (param_1) {
        varData_2400();
        return [2];
      });
    }));
    varData_1522.register("inventory:resetAmmo", handleAction_215(function () {
      return handleAction_218(this, function (param_1) {
        return [2, varData_2408()];
      });
    }));
    varData_1522.register("inventory:getAmmo", handleAction_215(function () {
      return handleAction_218(this, function (param_1) {
        switch (param_1.label) {
          case 0:
            return [4, varData_2413()];
          case 1:
            return [2, param_1.sent()];
        }
      });
    }));
    varData_1522.register("inventory:getCurrentWeaponData", handleAction_215(function () {
      return handleAction_218(this, function (param_1) {
        return [2, handleAction_211()];
      });
    }));
    varData_1522.register("inventory:unjamWeapon", handleAction_215(function () {
      var varData_2438;
      return handleAction_218(this, function (param_1) {
        switch (param_1.label) {
          case 0:
            return [4, varData_1872.taskBar(5000, "Unjamming weapon")];
          case 1:
            varData_2438 = param_1.sent();
            return [2, varData_2438 === 100];
        }
      });
    }));
    on("wounds:changeDeathState", function (param_1) {
      if (!param_1) {
        return;
      }
      varData_2350();
    });
    varData_1482.on("inventory:weaponUnequipped", function () {
      handleAction_366();
    });
    varData_1482.onNet("inventory:unequipWeapon", function () {
      varData_2350();
    });
    varData_1522.register("inventory:getGSR", handleAction_215(function () {
      var varData_2439;
      var varData_2440;
      var varData_2441;
      var varData_2442;
      return handleAction_218(this, function (param_1) {
        varData_2439 = GetGameTimer();
        varData_2440 = numericVal_92;
        if (!varData_2440) {
          return [2, false];
        }
        varData_2441 = varData_2439 - varData_2440;
        varData_2442 = varData_2441 < 2400000;
        return [2, varData_2442];
      });
    }));
    on("phone:open", function () {
      return varData_2350();
    });
    on("inventory:grappleHookFired", function (param_1) {
      handleAction_212(param_1);
    });
    varData_1482.on("inventory:toggleGuns", function (param_1) {
      handleAction_213(param_1);
    });
    ;
    function handleAction_222() {}
    varData_1432.Sync("currentWeapon", handleAction_211);
    function handleAction_223() {
      return varData_2478;
    }
    varData_1432.Sync("GetWeaponsList", handleAction_223);
    function handleAction_224(param_1) {
      return varData_2478[param_1];
    }
    varData_1432.Sync("GetWeapon", handleAction_224);
    varData_1432.Sync("DisableGSR", function () {
      return true;
    });
    ;
    function handleAction_225() {}
    function handleAction_226(param_1) {
      if (!isDisabled_11) {
        return 1;
      }
      var varData_2443 = param_1 / 1000;
      if (varData_2443 <= numericVal_99) {
        return handleAction_227(varData_2443);
      } else {
        return numericVal_98;
      }
    }
    function handleAction_227(param_1) {
      var varData_2444 = param_1 / numericVal_99;
      return numericVal_97 + (numericVal_98 - numericVal_97) * Math.pow(varData_2444, numericVal_102);
    }
    function handleAction_228(param_1) {
      var varData_2445 = param_1 - (numericVal_99 + numericVal_100);
      var varData_2446 = Math.min(varData_2445 / numericVal_101, 1);
      return numericVal_98 - (numericVal_98 - numericVal_97) * Math.pow(varData_2446, numericVal_102);
    }
    function handleAction_229(param_1, param_2) {
      if (IsPedShooting(param_1)) {
        numericVal_94 = param_2;
        if (!isDisabled_11) {
          numericVal_93 = param_2;
          isDisabled_11 = true;
        }
      } else if (isDisabled_11 && param_2 - numericVal_94 > numericVal_95) {
        isDisabled_11 = false;
      }
    }
    function handleAction_230(param_1, param_2) {
      var varData_2447 = handleAction_207(param_1);
      return varData_2447.reduce(function (param_1_1, param_2_1) {
        var varData_2448 = param_2.attachments[param_2_1];
        return param_1_1 + (varData_2448?.reduceRecoil ?? 0);
      }, 0);
    }
    varData_2305.addHook("preStart", function () {
      var varData_2449 = handleAction_211().itemStack;
      if (!varData_2449) {
        return;
      }
      var varData_2450 = handleAction_242(varData_2449);
      if (!varData_2450) {
        return;
      }
      var varData_2451 = handleAction_230(varData_2449, varData_2450);
      this.data.recoilReduction = varData_2451;
      this.data.recoil = varData_2450.recoil;
    });
    var numericVal_93 = 0;
    var isDisabled_11 = false;
    var numericVal_94 = 0;
    var numericVal_95 = 250;
    var numericVal_96 = 0.5;
    var numericVal_97 = 0.4;
    var numericVal_98 = 2;
    var numericVal_99 = 3;
    var numericVal_100 = 0.5;
    var numericVal_101 = 1;
    var numericVal_102 = 2;
    varData_2305.addHook("active", function () {
      var varData_2452 = this.data.ped;
      var varData_2453 = this.data.curWeapon;
      var varData_2454 = this.data.recoilReduction;
      var varData_2455 = this.data.recoil ?? numericVal_96;
      var varData_2456 = GetGameTimer();
      handleAction_229(varData_2452, varData_2456);
      var varData_2457 = 1 - varData_2454 / 100;
      var varData_2458 = varData_2455 * varData_2457;
      var varData_2459 = varData_2456 - numericVal_93;
      var varData_2460 = handleAction_226(varData_2459);
      var varData_2461 = varData_2458 * varData_2460;
      handleAction_231(varData_2452, varData_2453, varData_2461);
    });
    function handleAction_231(param_1, param_2, param_3) {
      var numericVal_103 = 1;
      var entitySpeed = GetEntitySpeed(param_1);
      if (IsPedInAnyVehicle(param_1, false)) {
        numericVal_103 = handleAction_232(entitySpeed, 0, 150, 0.5, 3);
      } else {
        numericVal_103 = handleAction_232(entitySpeed, 0, 18, 0.25, 2);
      }
      numericVal_103 = numericVal_103 * param_3;
      SetWeaponRecoilShakeAmplitude(param_2, numericVal_103);
    }
    function handleAction_232(param_1, param_2, param_3, param_4, param_5) {
      var varData_2462 = param_3 - param_2;
      var varData_2463 = param_5 - param_4;
      var varData_2464 = (param_1 - param_2) * varData_2463 / varData_2462 + param_4;
      return varData_2464;
    }
    ;
    function handleAction_233(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2465 = param_1[param_6](param_7);
        var varData_2466 = varData_2465.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2465.done) {
        param_2(varData_2466);
      } else {
        Promise.resolve(varData_2466).then(param_4, param_5);
      }
    }
    function handleAction_234(param_1) {
      return function () {
        var varData_2467 = this;
        var varData_2468 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2469 = param_1.apply(varData_2467, varData_2468);
          function handleAction_235(param_1_2) {
            handleAction_233(varData_2469, param_1_1, param_2, handleAction_235, handleAction_236, "next", param_1_2);
          }
          function handleAction_236(param_1_2) {
            handleAction_233(varData_2469, param_1_1, param_2, handleAction_235, handleAction_236, "throw", param_1_2);
          }
          handleAction_235(undefined);
        });
      };
    }
    function handleAction_237(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_2470 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_2470);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_238(param_1) {
      for (var numericVal_103 = 1; numericVal_103 < arguments.length; numericVal_103++) {
        var varData_2471 = arguments[numericVal_103] ?? {};
        var keysList = Object.keys(varData_2471);
        if (typeof Object.getOwnPropertySymbols === "function") {
          keysList = keysList.concat(Object.getOwnPropertySymbols(varData_2471).filter(function (param_1_1) {
            return Object.getOwnPropertyDescriptor(varData_2471, param_1_1).enumerable;
          }));
        }
        keysList.forEach(function (param_1_1) {
          handleAction_237(param_1, param_1_1, varData_2471[param_1_1]);
        });
      }
      return param_1;
    }
    function handleAction_239(param_1, param_2) {
      var varData_2472;
      var varData_2473;
      var varData_2474;
      var varData_2475;
      var varData_2476 = {
        label: 0,
        sent: function () {
          if (varData_2474[0] & 1) {
            throw varData_2474[1];
          }
          return varData_2474[1];
        },
        trys: [],
        ops: []
      };
      varData_2475 = {
        next: handleAction_240(0),
        throw: handleAction_240(1),
        return: handleAction_240(2)
      };
      if (typeof Symbol === "function") {
        varData_2475[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2475;
      function handleAction_240(param_1_1) {
        return function (param_1_2) {
          return handleAction_241([param_1_1, param_1_2]);
        };
      }
      function handleAction_241(param_1_1) {
        if (varData_2472) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2476) {
          try {
            varData_2472 = 1;
            if (varData_2473 && (varData_2474 = param_1_1[0] & 2 ? varData_2473.return : param_1_1[0] ? varData_2473.throw || ((varData_2474 = varData_2473.return) && varData_2474.call(varData_2473), 0) : varData_2473.next) && !(varData_2474 = varData_2474.call(varData_2473, param_1_1[1])).done) {
              return varData_2474;
            }
            varData_2473 = 0;
            if (varData_2474) {
              param_1_1 = [param_1_1[0] & 2, varData_2474.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2474 = param_1_1;
                break;
              case 4:
                varData_2476.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2476.label++;
                varData_2473 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2476.ops.pop();
                varData_2476.trys.pop();
                continue;
              default:
                if (!(varData_2474 = varData_2476.trys, varData_2474 = varData_2474.length > 0 && varData_2474[varData_2474.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2476 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2474 || param_1_1[1] > varData_2474[0] && param_1_1[1] < varData_2474[3])) {
                  varData_2476.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2476.label < varData_2474[1]) {
                  varData_2476.label = varData_2474[1];
                  varData_2474 = param_1_1;
                  break;
                }
                if (varData_2474 && varData_2476.label < varData_2474[2]) {
                  varData_2476.label = varData_2474[2];
                  varData_2476.ops.push(param_1_1);
                  break;
                }
                if (varData_2474[2]) {
                  varData_2476.ops.pop();
                }
                varData_2476.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2476);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2473 = 0;
          } finally {
            varData_2472 = varData_2474 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2477 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2477;
      }
    }
    var varData_2478 = {};
    var varData_2479 = function () {
      var varData_2480 = handleAction_234(function () {
        var varData_2481;
        return handleAction_239(this, function (param_1) {
          switch (param_1.label) {
            case 0:
              handleAction_221();
              handleAction_222();
              handleAction_192();
              handleAction_225();
              return [4, varData_1522.execute("inventory:getWeaponsList")];
            case 1:
              varData_2481 = param_1.sent();
              varData_2478 = varData_2481;
              var varData_2482 = {
                weapons: varData_2481
              };
              return [4, varData_1583.execute("setState", varData_2482)];
            case 2:
              param_1.sent();
              SetWeaponDamageModifier("WEAPON_SMOKEGRENADE", 0);
              return [2];
          }
        });
      });
      return function _0x4bfd84() {
        return varData_2480.apply(this, arguments);
      };
    }();
    function handleAction_242(param_1) {
      var varData_2483 = varData_2478[param_1.itemId];
      var varData_2484 = param_1.publicMetadata?.attachments;
      if (varData_2484) {
        var varData_2485 = varData_2484.find(function (param_1_1) {
          return varData_2483.attachments[param_1_1]?.swap;
        });
        if (varData_2485) {
          var varData_2486 = varData_2483.attachments[varData_2485].swap;
          return handleAction_238({}, varData_2483, varData_2483.variants[varData_2486]);
        }
      }
      return varData_2483;
    }
    varData_1432.Sync("GetWeaponByItemStack", handleAction_242);
    if (GetConvar("sv_environment", "prod") == "debug") {
      RegisterCommand("setAmmoInv", function (param_1, param_2) {
        var varData_2487 = parseInt(param_2[0]);
        SetPedAmmo(PlayerPedId(), GetSelectedPedWeapon(PlayerPedId()), varData_2487);
      }, false);
    }
    ;
    function handleAction_243(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_103 = 0, loopIdx = new Array(param_2); numericVal_103 < param_2; numericVal_103++) {
        loopIdx[numericVal_103] = param_1[numericVal_103];
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
        var varData_2488 = param_1[param_6](param_7);
        var varData_2489 = varData_2488.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2488.done) {
        param_2(varData_2489);
      } else {
        Promise.resolve(varData_2489).then(param_4, param_5);
      }
    }
    function handleAction_246(param_1) {
      return function () {
        var varData_2490 = this;
        var varData_2491 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2492 = param_1.apply(varData_2490, varData_2491);
          function handleAction_247(param_1_2) {
            handleAction_245(varData_2492, param_1_1, param_2, handleAction_247, handleAction_248, "next", param_1_2);
          }
          function handleAction_248(param_1_2) {
            handleAction_245(varData_2492, param_1_1, param_2, handleAction_247, handleAction_248, "throw", param_1_2);
          }
          handleAction_247(undefined);
        });
      };
    }
    function handleAction_249(param_1, param_2) {
      var varData_2493 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2493 == null) {
        return;
      }
      var itemList_8 = [];
      var isEnabled_2 = true;
      var isDisabled_12 = false;
      var varData_2494;
      var varData_2495;
      try {
        for (varData_2493 = varData_2493.call(param_1); !(isEnabled_2 = (varData_2494 = varData_2493.next()).done); isEnabled_2 = true) {
          itemList_8.push(varData_2494.value);
          if (param_2 && itemList_8.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_12 = true;
        varData_2495 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2493.return != null) {
            varData_2493.return();
          }
        } finally {
          if (isDisabled_12) {
            throw varData_2495;
          }
        }
      }
      return itemList_8;
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
      var varData_2496 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2496 === "Object" && param_1.constructor) {
        varData_2496 = param_1.constructor.name;
      }
      if (varData_2496 === "Map" || varData_2496 === "Set") {
        return Array.from(varData_2496);
      }
      if (varData_2496 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2496)) {
        return handleAction_243(param_1, param_2);
      }
    }
    function handleAction_253(param_1, param_2) {
      var varData_2497;
      var varData_2498;
      var varData_2499;
      var varData_2500;
      var varData_2501 = {
        label: 0,
        sent: function () {
          if (varData_2499[0] & 1) {
            throw varData_2499[1];
          }
          return varData_2499[1];
        },
        trys: [],
        ops: []
      };
      varData_2500 = {
        next: handleAction_254(0),
        throw: handleAction_254(1),
        return: handleAction_254(2)
      };
      if (typeof Symbol === "function") {
        varData_2500[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2500;
      function handleAction_254(param_1_1) {
        return function (param_1_2) {
          return handleAction_255([param_1_1, param_1_2]);
        };
      }
      function handleAction_255(param_1_1) {
        if (varData_2497) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2501) {
          try {
            varData_2497 = 1;
            if (varData_2498 && (varData_2499 = param_1_1[0] & 2 ? varData_2498.return : param_1_1[0] ? varData_2498.throw || ((varData_2499 = varData_2498.return) && varData_2499.call(varData_2498), 0) : varData_2498.next) && !(varData_2499 = varData_2499.call(varData_2498, param_1_1[1])).done) {
              return varData_2499;
            }
            varData_2498 = 0;
            if (varData_2499) {
              param_1_1 = [param_1_1[0] & 2, varData_2499.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2499 = param_1_1;
                break;
              case 4:
                varData_2501.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2501.label++;
                varData_2498 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2501.ops.pop();
                varData_2501.trys.pop();
                continue;
              default:
                if (!(varData_2499 = varData_2501.trys, varData_2499 = varData_2499.length > 0 && varData_2499[varData_2499.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2501 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2499 || param_1_1[1] > varData_2499[0] && param_1_1[1] < varData_2499[3])) {
                  varData_2501.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2501.label < varData_2499[1]) {
                  varData_2501.label = varData_2499[1];
                  varData_2499 = param_1_1;
                  break;
                }
                if (varData_2499 && varData_2501.label < varData_2499[2]) {
                  varData_2501.label = varData_2499[2];
                  varData_2501.ops.push(param_1_1);
                  break;
                }
                if (varData_2499[2]) {
                  varData_2501.ops.pop();
                }
                varData_2501.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2501);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2498 = 0;
          } finally {
            varData_2497 = varData_2499 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2502 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2502;
      }
    }
    var varData_2503;
    var isEnabled_2 = true;
    var varData_2504;
    function handleAction_256(param_1) {
      if (param_1) {
        if (varData_2504) {
          return;
        }
        varData_2504 = setTick(varData_2505);
      } else {
        clearTick(varData_2504);
        varData_2504 = null;
      }
    }
    var dataMap_5 = new Map([[157, 0], [158, 1], [160, 2], [164, 3], [165, 4], [159, 5], [161, 6], [162, 7]]);
    var dataMap_6 = new Map();
    var isDisabled_12 = false;
    var varData_2505 = function () {
      var varData_2506 = handleAction_246(function () {
        var varData_2507;
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
        return handleAction_253(this, function (param_1) {
          switch (param_1.label) {
            case 0:
              varData_2507 = Date.now();
              varData_2508 = true;
              varData_2509 = false;
              varData_2510 = undefined;
              try {
                for (varData_2511 = dataMap_5.entries()[Symbol.iterator](); !(varData_2508 = (varData_2512 = varData_2511.next()).done); varData_2508 = true) {
                  varData_2513 = handleAction_251(varData_2512.value, 2);
                  varData_2514 = varData_2513[0];
                  varData_2515 = varData_2513[1];
                  if (IsDisabledControlJustPressed(2, varData_2514)) {
                    dataMap_6.set(varData_2515, varData_2507);
                  }
                }
              } catch (err) {
                varData_2509 = true;
                varData_2510 = err;
              } finally {
                try {
                  if (!varData_2508 && varData_2511.return != null) {
                    varData_2511.return();
                  }
                } finally {
                  if (varData_2509) {
                    throw varData_2510;
                  }
                }
              }
              if (!isDisabled_12) {
                for (varData_2516 = 0; varData_2516 < 8; varData_2516++) {
                  varData_2517 = dataMap_6.get(varData_2516);
                  if (!varData_2517) {
                    continue;
                  }
                  if (varData_2507 - varData_2517 > 500) {
                    varData_1583.execute("inventory:useActionBar", varData_2516, true);
                    isDisabled_12 = true;
                    return [2];
                  }
                }
              }
              varData_2518 = -1;
              varData_2519 = true;
              varData_2520 = false;
              varData_2521 = undefined;
              try {
                for (varData_2522 = dataMap_5.entries()[Symbol.iterator](); !(varData_2519 = (varData_2523 = varData_2522.next()).done); varData_2519 = true) {
                  varData_2524 = handleAction_251(varData_2523.value, 2);
                  varData_2525 = varData_2524[0];
                  varData_2526 = varData_2524[1];
                  if (IsDisabledControlJustReleased(2, varData_2525)) {
                    varData_2518 = varData_2526;
                    dataMap_6.delete(varData_2526);
                  }
                }
              } catch (err) {
                varData_2520 = true;
                varData_2521 = err;
              } finally {
                try {
                  if (!varData_2519 && varData_2522.return != null) {
                    varData_2522.return();
                  }
                } finally {
                  if (varData_2520) {
                    throw varData_2521;
                  }
                }
              }
              if (varData_2518 > -1 && isDisabled_12) {
                isDisabled_12 = false;
                return [2];
              }
              if (isDisabled_17 || isDisabled_18) {
                return [2];
              }
              if (varData_2518 <= -1) {
                return [2];
              }
              varData_2527 = varData_1432.Sync.emotes.IsShortcut();
              if (!varData_2527) {
                return [3, 1];
              }
              varData_1482.emit("emotes:use:quickEmote", varData_2518);
              return [3, 3];
            case 1:
              if (varData_2518 < 5) {
                varData_1583.execute("inventory:useActionBar", varData_2518, false);
              }
              return [4, varData_1419.wait(1500)];
            case 2:
              param_1.sent();
              param_1.label = 3;
            case 3:
              return [2];
          }
        });
      });
      return function _0x251dc4() {
        return varData_2506.apply(this, arguments);
      };
    }();
    function handleAction_257(param_1) {
      if (!isEnabled_2) {
        return;
      }
      var varData_2528 = {
        actionbar: param_1
      };
      varData_1583.execute("setState", varData_2528);
      varData_1432.Sync.hud.sendAppEvent({
        showLargeIcons: param_1,
        displayAllForce: param_1,
        displayAllForceVehicle: param_1 ? !!GetVehiclePedIsIn(PlayerPedId(), false) : false,
        displayRadioChannel: param_1
      });
    }
    var varData_2529 = function () {
      var varData_2530 = handleAction_246(function () {
        return handleAction_253(this, function (param_1) {
          RegisterCommand("+actionBar", function () {
            if (varData_2503) {
              clearTimeout(varData_2503);
            }
            handleAction_257(true);
          }, false);
          RegisterCommand("-actionBar", function () {
            varData_2503 = setTimeout(function () {
              handleAction_257(false);
            }, 500);
          }, false);
          handleAction_256(isEnabled_2);
          varData_1432.Sync["np-keybinds"].registerKeyMapping("ActionBar", "Inventory", "Show actionbar", "+actionBar", "-actionBar", "TAB");
          return [2];
        });
      });
      return function _0x8e8460() {
        return varData_2530.apply(this, arguments);
      };
    }();
    function handleAction_258(_0x5e6efb = false) {
      isEnabled_2 = !_0x5e6efb;
      handleAction_256(isEnabled_2);
    }
    varData_1432.Sync("SetActionBarDisabled", handleAction_258);
    varData_1432.Sync("IsActionBarDisabled", function () {
      return !isEnabled_2;
    });
    on("np-binds:should-execute", function (param_1) {
      handleAction_258(!param_1);
    });
    ;
    function handleAction_259(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_103 = 0, loopIdx = new Array(param_2); numericVal_103 < param_2; numericVal_103++) {
        loopIdx[numericVal_103] = param_1[numericVal_103];
      }
      return loopIdx;
    }
    function handleAction_260(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_261(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2531 = param_1[param_6](param_7);
        var varData_2532 = varData_2531.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2531.done) {
        param_2(varData_2532);
      } else {
        Promise.resolve(varData_2532).then(param_4, param_5);
      }
    }
    function handleAction_262(param_1) {
      return function () {
        var varData_2533 = this;
        var varData_2534 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2535 = param_1.apply(varData_2533, varData_2534);
          function handleAction_263(param_1_2) {
            handleAction_261(varData_2535, param_1_1, param_2, handleAction_263, handleAction_264, "next", param_1_2);
          }
          function handleAction_264(param_1_2) {
            handleAction_261(varData_2535, param_1_1, param_2, handleAction_263, handleAction_264, "throw", param_1_2);
          }
          handleAction_263(undefined);
        });
      };
    }
    function handleAction_265(param_1, param_2) {
      var varData_2536 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2536 == null) {
        return;
      }
      var itemList_8 = [];
      var isEnabled_3 = true;
      var isDisabled_13 = false;
      var varData_2537;
      var varData_2538;
      try {
        for (varData_2536 = varData_2536.call(param_1); !(isEnabled_3 = (varData_2537 = varData_2536.next()).done); isEnabled_3 = true) {
          itemList_8.push(varData_2537.value);
          if (param_2 && itemList_8.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_13 = true;
        varData_2538 = err;
      } finally {
        try {
          if (!isEnabled_3 && varData_2536.return != null) {
            varData_2536.return();
          }
        } finally {
          if (isDisabled_13) {
            throw varData_2538;
          }
        }
      }
      return itemList_8;
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
      var varData_2539 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2539 === "Object" && param_1.constructor) {
        varData_2539 = param_1.constructor.name;
      }
      if (varData_2539 === "Map" || varData_2539 === "Set") {
        return Array.from(varData_2539);
      }
      if (varData_2539 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2539)) {
        return handleAction_259(param_1, param_2);
      }
    }
    function handleAction_269(param_1, param_2) {
      var varData_2540;
      var varData_2541;
      var varData_2542;
      var varData_2543;
      var varData_2544 = {
        label: 0,
        sent: function () {
          if (varData_2542[0] & 1) {
            throw varData_2542[1];
          }
          return varData_2542[1];
        },
        trys: [],
        ops: []
      };
      varData_2543 = {
        next: handleAction_270(0),
        throw: handleAction_270(1),
        return: handleAction_270(2)
      };
      if (typeof Symbol === "function") {
        varData_2543[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2543;
      function handleAction_270(param_1_1) {
        return function (param_1_2) {
          return handleAction_271([param_1_1, param_1_2]);
        };
      }
      function handleAction_271(param_1_1) {
        if (varData_2540) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2544) {
          try {
            varData_2540 = 1;
            if (varData_2541 && (varData_2542 = param_1_1[0] & 2 ? varData_2541.return : param_1_1[0] ? varData_2541.throw || ((varData_2542 = varData_2541.return) && varData_2542.call(varData_2541), 0) : varData_2541.next) && !(varData_2542 = varData_2542.call(varData_2541, param_1_1[1])).done) {
              return varData_2542;
            }
            varData_2541 = 0;
            if (varData_2542) {
              param_1_1 = [param_1_1[0] & 2, varData_2542.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2542 = param_1_1;
                break;
              case 4:
                varData_2544.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2544.label++;
                varData_2541 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2544.ops.pop();
                varData_2544.trys.pop();
                continue;
              default:
                if (!(varData_2542 = varData_2544.trys, varData_2542 = varData_2542.length > 0 && varData_2542[varData_2542.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2544 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2542 || param_1_1[1] > varData_2542[0] && param_1_1[1] < varData_2542[3])) {
                  varData_2544.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2544.label < varData_2542[1]) {
                  varData_2544.label = varData_2542[1];
                  varData_2542 = param_1_1;
                  break;
                }
                if (varData_2542 && varData_2544.label < varData_2542[2]) {
                  varData_2544.label = varData_2542[2];
                  varData_2544.ops.push(param_1_1);
                  break;
                }
                if (varData_2542[2]) {
                  varData_2544.ops.pop();
                }
                varData_2544.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2544);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2541 = 0;
          } finally {
            varData_2540 = varData_2542 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2545 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2545;
      }
    }
    var itemList_8 = ["bus", "dashhound", "tourbus", "trash2", "train", "brickade", "npwheelchair", "seashark", "seashark2", "seashark3", "dinghy1", "dinghy2", "dinghy3", "dinghy4", "dinghy5", "kosatka", "avisa", "submersible2", "submersible"];
    var itemList_9 = ["trash", "pounder", "packer", "terbyte"];
    function handleAction_272(param_1) {
      var varData_2546 = handleAction_267(GetModelDimensions(GetEntityModel(param_1)), 2);
      var varData_2547 = varData_2546[0];
      var varData_2548 = varData_2546[1];
      var varData_2549 = GetOffsetFromEntityInWorldCoords(param_1, varData_2548[0] / 2, varData_2548[1], 0);
      var varData_2550 = GetWorldPositionOfEntityBone(param_1, GetEntityBoneIndexByName(param_1, "engine"));
      var varData_2551 = GetWorldPositionOfEntityBone(param_1, GetEntityBoneIndexByName(param_1, "overheat"));
      var varData_2552 = new varData_1272(varData_2549).getDistance(new varData_1272(varData_2550));
      var varData_2553 = new varData_1272(varData_2549).getDistance(new varData_1272(varData_2551));
      var varData_2554 = Math.abs(varData_2548[1] - varData_2547[1]) / 2;
      if (varData_2552 <= varData_2554 || varData_2553 <= varData_2554) {
        return [GetOffsetFromEntityInWorldCoords(param_1, 0, varData_2547[1] - 0.5, 0), false];
      }
      return [GetOffsetFromEntityInWorldCoords(param_1, 0, varData_2548[1] + 0.5, 0), true];
    }
    function handleAction_273(param_1) {
      if (!param_1) {
        return false;
      }
      if (!IsEntityAVehicle(param_1)) {
        return false;
      }
      var varData_2555 = GetNumberOfVehicleDoors(param_1);
      if (varData_2555 === 5) {
        return true;
      }
      if (varData_2555 === 4) {
        var vehicleClass = GetVehicleClass(param_1);
        var varData_2556 = GetEntityArchetypeName(param_1);
        if (vehicleClass === 20 && varData_2556 !== "benson") {
          return true;
        }
      }
      return false;
    }
    function handleAction_274(param_1) {
      if (!param_1) {
        return [false];
      }
      var varData_2557 = handleAction_267(handleAction_272(param_1), 2);
      var varData_2558 = varData_2557[0];
      var varData_2559 = varData_2557[1];
      var varData_2560 = GetNumberOfVehicleDoors(param_1);
      if (varData_2560 < 3) {
        return [false, false];
      }
      if (handleAction_273(param_1)) {
        return [GetVehicleDoorAngleRatio(param_1, 2) != 0, GetVehicleDoorAngleRatio(param_1, 3) != 0];
      }
      return [GetVehicleDoorAngleRatio(param_1, varData_2559 ? 4 : 5) != 0, false];
    }
    function handleAction_275(param_1) {
      if (!param_1) {
        return false;
      }
      var varData_2561 = handleAction_274(param_1);
      return varData_2561[0] || varData_2561[1];
    }
    function handleAction_276(param_1) {
      if (!param_1) {
        return false;
      }
      if (!IsEntityAVehicle(param_1)) {
        return false;
      }
      var varData_2562 = GetEntityArchetypeName(param_1);
      if (varData_2562 && itemList_9.includes(varData_2562)) {
        return true;
      }
      if (varData_2562 && itemList_8.includes(varData_2562)) {
        return false;
      }
      var itemList_10 = [16, 14];
      var vehicleClass = GetVehicleClass(param_1);
      var varData_2563 = GetNumberOfVehicleDoors(param_1);
      if (varData_2563 < 3 && !itemList_10.includes(vehicleClass)) {
        return false;
      }
      var modelHash = GetEntityModel(param_1);
      if (IsThisModelABicycle(modelHash)) {
        return false;
      }
      if (varData_2563 == 3 && (vehicleClass == 10 || vehicleClass == 20)) {
        return false;
      }
      var varData_2564 = varData_1432.Sync["np-vehicles"].GetVehicleIdentifier(param_1);
      if (!varData_2564) {
        return false;
      }
      var varData_2565 = varData_1432.Sync["np-vehicles"].GetVehicleMetadata(param_1, "job");
      if (varData_2565 && varData_2565 === "fentanyl-supplies") {
        return false;
      }
      return true;
    }
    var varData_2566 = {
      entity: null,
      status: [true, true]
    };
    varData_1482.on("inventory:openTrunk", function (param_1, param_2, param_3) {
      var varData_2567 = varData_1735.GetEntityStateValue(param_2, "trunkDisabled");
      if (varData_2567) {
        var varData_2568 = varData_2567 - Date.now();
        if (varData_2568 >= 0) {
          var varData_2569 = `The trunk is locked for ${Math.floor(varData_2568 / 1000 / 60)} minutes.`;
          emit("DoLongHudText", varData_2569, 2);
          return;
        }
      }
      var varData_2570 = handleAction_267(handleAction_272(param_2), 2);
      var varData_2571 = varData_2570[0];
      var varData_2572 = varData_2570[1];
      var playerPed = PlayerPedId();
      var varData_2573 = new varData_1272(GetOffsetFromEntityInWorldCoords(playerPed, 0, 0.5, 0));
      var varData_2574 = new varData_1272(GetEntityCoords(param_2));
      var modelHash = GetEntityModel(param_2);
      var varData_2575 = GetEntityArchetypeName(param_2);
      var vehicleClass = GetVehicleClass(param_2);
      var plateText = GetVehicleNumberPlateText(param_2);
      if (!plateText) {
        return;
      }
      if (varData_2573.getDistance(varData_2574) > 25) {
        emit("DoLongHudText", "You are too far from the vehicle.", 2);
        return;
      }
      if (!handleAction_276(param_2)) {
        emit("DoLongHudText", "The vehicle does not have a valid trunk.", 2);
        return;
      }
      var doorLockStatus = GetVehicleDoorLockStatus(param_2);
      var varData_2576 = GetNumberOfVehicleDoors(param_2);
      var varData_2577 = handleAction_275(param_2);
      if (!varData_2577) {
        if (doorLockStatus != 1 && doorLockStatus != 0 && doorLockStatus != 4) {
          emit("DoLongHudText", "The vehicle is locked.", 2);
          return;
        }
      }
      var varData_2578 = varData_1432.Sync["np-vehicles"].GetVehicleIdentifier(param_2);
      if (!varData_2578) {
        return;
      }
      var varData_2579 = `trunk-${varData_2578}::${vehicleClass}::${varData_2575 ?? modelHash}`;
      var varData_2580 = handleAction_274(param_2);
      TaskTurnPedToFaceEntity(playerPed, param_2, 1);
      handleAction_365([varData_2579], true);
      if (!varData_2577 && varData_2576 >= 3) {
        if (handleAction_273(param_2)) {
          SetVehicleDoorOpen(param_2, 2, false, false);
          SetVehicleDoorOpen(param_2, 3, false, false);
        } else {
          SetVehicleDoorOpen(param_2, varData_2572 ? 4 : 5, false, false);
        }
      }
      emit("toggle-animation", true);
      var varData_2581 = {
        entity: param_2,
        status: varData_2580
      };
      varData_2566 = varData_2581;
    });
    var varData_2582 = function () {
      var varData_2583 = handleAction_262(function (param_1) {
        var varData_2584;
        var varData_2585;
        var varData_2586;
        var varData_2587;
        var varData_2588;
        var varData_2589 = arguments;
        return handleAction_269(this, function (param_1_1) {
          varData_2584 = varData_2589.length > 1 && varData_2589[1] !== undefined ? varData_2589[1] : [false, false];
          if (!param_1) {
            return [2];
          }
          varData_2585 = GetNumberOfVehicleDoors(param_1);
          if (varData_2585 >= 3) {
            varData_2586 = handleAction_267(handleAction_272(param_1), 2);
            varData_2587 = varData_2586[0];
            varData_2588 = varData_2586[1];
            if (handleAction_273(param_1)) {
              if (!varData_2584[0]) {
                SetVehicleDoorShut(param_1, 2, false);
              }
              if (!varData_2584[1]) {
                SetVehicleDoorShut(param_1, 3, false);
              }
            } else if (!varData_2584[0]) {
              SetVehicleDoorShut(param_1, varData_2588 ? 4 : 5, false);
            }
          }
          if (varData_2566.entity !== null && param_1 === varData_2566.entity) {
            varData_2566 = {
              entity: null,
              status: [true, true]
            };
          }
          return [2];
        });
      });
      return function _0x857e6c(param_1) {
        return varData_2583.apply(this, arguments);
      };
    }();
    varData_1482.on("inventory:onClose", function () {
      varData_2582(varData_2566.entity, varData_2566.status);
    });
    varData_1482.on("inventory:closeTrunk", function () {
      var varData_2590 = handleAction_262(function (param_1, param_2, param_3) {
        var varData_2591;
        var varData_2592;
        return handleAction_269(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (!param_2) {
                return [2];
              }
              varData_2591 = PlayerPedId();
              TaskTurnPedToFaceEntity(varData_2591, param_2, 1);
              var varData_2593 = {
                distance: 10,
                entity: param_2
              };
              return [4, varData_1872.taskBar(1000, "Closing Trunk", false, varData_2593, false, param_2)];
            case 1:
              varData_2592 = param_1_1.sent();
              if (varData_2592 === 100) {
                varData_2582(param_2);
                emit("toggle-animation", true);
              }
              return [2];
          }
        });
      });
      return function (param_1, param_2, param_3) {
        return varData_2590.apply(this, arguments);
      };
    }());
    varData_1522.register("inventory:getTrunkId", function (param_1) {
      var netEntity = NetworkGetEntityFromNetworkId(param_1);
      if (!netEntity) {
        return null;
      }
      var varData_2594 = varData_1432.Sync["np-vehicles"].GetVehicleIdentifier(netEntity);
      if (!varData_2594) {
        return null;
      }
      var modelHash = GetEntityModel(netEntity);
      var varData_2595 = GetEntityArchetypeName(netEntity);
      var vehicleClass = GetVehicleClass(netEntity);
      return `trunk-${varData_2594}::${vehicleClass}::${varData_2595 ?? modelHash}`;
    });
    varData_1522.register("inventory:getGloveboxId", function (param_1, _0x1f3aaf = false) {
      var netEntity = NetworkGetEntityFromNetworkId(param_1);
      if (!netEntity) {
        return null;
      }
      var varData_2596 = varData_1432.Sync["np-vehicles"].GetVehicleIdentifier(netEntity);
      if (!varData_2596 && !_0x1f3aaf) {
        return null;
      }
      var modelHash = GetEntityModel(netEntity);
      var varData_2597 = GetEntityArchetypeName(netEntity);
      var vehicleClass = GetVehicleClass(netEntity);
      return `glovebox-${varData_2596}::${vehicleClass}::${varData_2597 ?? modelHash}`;
    });
    setImmediate(function () {
      var itemList_10 = ["prop_dumpster_02a", "prop_dumpster_01a", "prop_dumpster_02b", "prop_dumpster_4b", "prop_dumpster_3a", "prop_skip_02a"];
      varData_1872.addInteractionByModel("inventory:dumpster", itemList_10, [{
        id: "opendumpster",
        label: "Open Stash",
        event: "inventory:openDumpster",
        parameters: {}
      }], {
        distance: {
          draw: 3,
          use: 2
        },
        isEnabled: function () {
          return true;
        },
        isToggled: true
      });
    });
    on("inventory:openDumpster", function (param_1, param_2, param_3) {
      var coords = GetEntityCoords(param_2);
      handleAction_365([`dumpster::${handleAction_133(coords[0], coords[1], coords[2])}`], true);
    });
    on("inventory:robPlayer", function () {
      var varData_2598 = handleAction_262(function (param_1, param_2, param_3) {
        var varData_2599;
        var varData_2600;
        var varData_2601;
        var varData_2602;
        var varData_2603;
        var varData_2604;
        var varData_2605;
        var varData_2606;
        return handleAction_269(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (!param_2 || !IsPedAPlayer(param_2)) {
                return [2];
              }
              varData_2599 = "random@shop_robbery";
              varData_2600 = "robbery_action_b";
              varData_2601 = PlayerPedId();
              return [4, varData_1806.loadAnim(varData_2599)];
            case 1:
              param_1_1.sent();
              TaskPlayAnim(varData_2601, varData_2599, varData_2600, 8, 1, -1, 16, 0, false, false, false);
              return [4, varData_1872.taskBar(10000, "Robbing", true)];
            case 2:
              varData_2602 = param_1_1.sent();
              ClearPedTasks(varData_2601);
              if (varData_2602 !== 100) {
                return [2];
              }
              varData_2603 = GetPlayerServerId(NetworkGetPlayerIndexFromPed(param_2));
              return [4, varData_1522.execute("inventory:robPlayer", varData_2603)];
            case 3:
              varData_2604 = param_1_1.sent();
              if (!varData_2604) {
                return [2];
              }
              varData_2605 = new varData_1272(GetEntityCoords(varData_2601));
              varData_2606 = new varData_1272(GetEntityCoords(param_2));
              if (varData_2605.getDistance(varData_2606) > 3) {
                return [2];
              }
              varData_1490.debug("Robbed player", varData_2604);
              handleAction_365(varData_2604, false);
              return [2];
          }
        });
      });
      return function (param_1, param_2, param_3) {
        return varData_2598.apply(this, arguments);
      };
    }());
    var isDisabled_13 = false;
    var varData_2607 = null;
    onNet("np-police:drag:escort", function (param_1, param_2) {
      isDisabled_13 = true;
      varData_2607 = param_1;
    });
    onNet("np-police:drag:releaseEscort", function () {
      isDisabled_13 = false;
      varData_2607 = null;
    });
    on("np-police:vehicle:outfits", function (param_1) {
      var varData_2608 = globalThis.exports.isPed.isPed("myjob");
      if (varData_2608 !== "police" && varData_2608 !== "dib" && varData_2608 !== "ems" && varData_2608 !== "doc") {
        return;
      }
      emit("np-clothing:outfits", true);
    });
    ;
    function handleAction_277(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2609 = param_1[param_6](param_7);
        var varData_2610 = varData_2609.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2609.done) {
        param_2(varData_2610);
      } else {
        Promise.resolve(varData_2610).then(param_4, param_5);
      }
    }
    function handleAction_278(param_1) {
      return function () {
        var varData_2611 = this;
        var varData_2612 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2613 = param_1.apply(varData_2611, varData_2612);
          function handleAction_279(param_1_2) {
            handleAction_277(varData_2613, param_1_1, param_2, handleAction_279, handleAction_280, "next", param_1_2);
          }
          function handleAction_280(param_1_2) {
            handleAction_277(varData_2613, param_1_1, param_2, handleAction_279, handleAction_280, "throw", param_1_2);
          }
          handleAction_279(undefined);
        });
      };
    }
    function handleAction_281(param_1, param_2) {
      var varData_2614;
      var varData_2615;
      var varData_2616;
      var varData_2617;
      var varData_2618 = {
        label: 0,
        sent: function () {
          if (varData_2616[0] & 1) {
            throw varData_2616[1];
          }
          return varData_2616[1];
        },
        trys: [],
        ops: []
      };
      varData_2617 = {
        next: handleAction_282(0),
        throw: handleAction_282(1),
        return: handleAction_282(2)
      };
      if (typeof Symbol === "function") {
        varData_2617[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2617;
      function handleAction_282(param_1_1) {
        return function (param_1_2) {
          return handleAction_283([param_1_1, param_1_2]);
        };
      }
      function handleAction_283(param_1_1) {
        if (varData_2614) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2618) {
          try {
            varData_2614 = 1;
            if (varData_2615 && (varData_2616 = param_1_1[0] & 2 ? varData_2615.return : param_1_1[0] ? varData_2615.throw || ((varData_2616 = varData_2615.return) && varData_2616.call(varData_2615), 0) : varData_2615.next) && !(varData_2616 = varData_2616.call(varData_2615, param_1_1[1])).done) {
              return varData_2616;
            }
            varData_2615 = 0;
            if (varData_2616) {
              param_1_1 = [param_1_1[0] & 2, varData_2616.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2616 = param_1_1;
                break;
              case 4:
                varData_2618.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2618.label++;
                varData_2615 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2618.ops.pop();
                varData_2618.trys.pop();
                continue;
              default:
                if (!(varData_2616 = varData_2618.trys, varData_2616 = varData_2616.length > 0 && varData_2616[varData_2616.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2618 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2616 || param_1_1[1] > varData_2616[0] && param_1_1[1] < varData_2616[3])) {
                  varData_2618.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2618.label < varData_2616[1]) {
                  varData_2618.label = varData_2616[1];
                  varData_2616 = param_1_1;
                  break;
                }
                if (varData_2616 && varData_2618.label < varData_2616[2]) {
                  varData_2618.label = varData_2616[2];
                  varData_2618.ops.push(param_1_1);
                  break;
                }
                if (varData_2616[2]) {
                  varData_2618.ops.pop();
                }
                varData_2618.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2618);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2615 = 0;
          } finally {
            varData_2614 = varData_2616 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2619 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2619;
      }
    }
    var dataMap_7 = new Map();
    function handleAction_284(param_1, param_2, param_3) {
      var varData_2620 = varData_1420[param_1];
      var varData_2621 = dataMap_7.get(varData_2620) ?? new Set();
      var varData_2622 = param_3 !== undefined ? param_3 : GetCurrentResourceName() || "default";
      if (!dataMap_7.has(varData_2620)) {
        dataMap_7.set(varData_2620, varData_2621);
      }
      if (param_2) {
        varData_2621.add(varData_2622);
        emit("inventory:disabledSlot", param_1);
      } else {
        varData_2621.delete(varData_2622);
        emit("inventory:enabledSlot", param_1);
      }
    }
    varData_1432.Sync("SetBodySlotDisabled", handleAction_284);
    function handleAction_285(param_1, param_2) {
      var varData_2623 = varData_1420[param_1];
      var varData_2624 = dataMap_7.get(varData_2623) ?? new Set();
      if (param_2 !== undefined) {
        return varData_2624.has(param_2);
      } else {
        return varData_2624.size > 0;
      }
    }
    varData_1432.Sync("IsBodySlotDisabled", handleAction_285);
    function handleAction_286(param_1) {
      return handleAction_287.apply(this, arguments);
    }
    function handleAction_287() {
      handleAction_287 = handleAction_278(function (param_1) {
        var varData_2625;
        return handleAction_281(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (handleAction_285(param_1)) {
                return [2, [false, "Slot is disabled"]];
              }
              varData_2625 = varData_1420[param_1];
              if (varData_2625 === undefined) {
                return [2, [false, "Invalid slot"]];
              }
              return [4, varData_1583.execute("inventory:useBodySlot", varData_2625)];
            case 1:
              param_1_1.sent();
              return [2, [true, null]];
          }
        });
      });
      return handleAction_287.apply(this, arguments);
    }
    varData_1432.Async("UseBodySlot", handleAction_286);
    ;
    function handleAction_288(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2626 = param_1[param_6](param_7);
        var varData_2627 = varData_2626.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2626.done) {
        param_2(varData_2627);
      } else {
        Promise.resolve(varData_2627).then(param_4, param_5);
      }
    }
    function handleAction_289(param_1) {
      return function () {
        var varData_2628 = this;
        var varData_2629 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2630 = param_1.apply(varData_2628, varData_2629);
          function handleAction_290(param_1_2) {
            handleAction_288(varData_2630, param_1_1, param_2, handleAction_290, handleAction_291, "next", param_1_2);
          }
          function handleAction_291(param_1_2) {
            handleAction_288(varData_2630, param_1_1, param_2, handleAction_290, handleAction_291, "throw", param_1_2);
          }
          handleAction_290(undefined);
        });
      };
    }
    function handleAction_292(param_1, param_2) {
      var varData_2631;
      var varData_2632;
      var varData_2633;
      var varData_2634;
      var varData_2635 = {
        label: 0,
        sent: function () {
          if (varData_2633[0] & 1) {
            throw varData_2633[1];
          }
          return varData_2633[1];
        },
        trys: [],
        ops: []
      };
      varData_2634 = {
        next: handleAction_293(0),
        throw: handleAction_293(1),
        return: handleAction_293(2)
      };
      if (typeof Symbol === "function") {
        varData_2634[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2634;
      function handleAction_293(param_1_1) {
        return function (param_1_2) {
          return handleAction_294([param_1_1, param_1_2]);
        };
      }
      function handleAction_294(param_1_1) {
        if (varData_2631) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2635) {
          try {
            varData_2631 = 1;
            if (varData_2632 && (varData_2633 = param_1_1[0] & 2 ? varData_2632.return : param_1_1[0] ? varData_2632.throw || ((varData_2633 = varData_2632.return) && varData_2633.call(varData_2632), 0) : varData_2632.next) && !(varData_2633 = varData_2633.call(varData_2632, param_1_1[1])).done) {
              return varData_2633;
            }
            varData_2632 = 0;
            if (varData_2633) {
              param_1_1 = [param_1_1[0] & 2, varData_2633.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2633 = param_1_1;
                break;
              case 4:
                varData_2635.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2635.label++;
                varData_2632 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2635.ops.pop();
                varData_2635.trys.pop();
                continue;
              default:
                if (!(varData_2633 = varData_2635.trys, varData_2633 = varData_2633.length > 0 && varData_2633[varData_2633.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2635 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2633 || param_1_1[1] > varData_2633[0] && param_1_1[1] < varData_2633[3])) {
                  varData_2635.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2635.label < varData_2633[1]) {
                  varData_2635.label = varData_2633[1];
                  varData_2633 = param_1_1;
                  break;
                }
                if (varData_2633 && varData_2635.label < varData_2633[2]) {
                  varData_2635.label = varData_2633[2];
                  varData_2635.ops.push(param_1_1);
                  break;
                }
                if (varData_2633[2]) {
                  varData_2635.ops.pop();
                }
                varData_2635.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2635);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2632 = 0;
          } finally {
            varData_2631 = varData_2633 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2636 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2636;
      }
    }
    varData_1522.register("inventory:handler:smoke", function () {
      var varData_2637 = handleAction_289(function (param_1) {
        var varData_2638;
        var varData_2639;
        var varData_2640;
        var varData_2641;
        return handleAction_292(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2638 = PlayerPedId();
              varData_2639 = GetVehiclePedIsIn(varData_2638, false);
              varData_2640 = param_1 === "cigar" ? "cigar" : "smoke";
              return [4, varData_1872.taskBar(1000, "Lighting Up", false, null, false, varData_2639)];
            case 1:
              varData_2641 = param_1_1.sent();
              if (varData_2641 !== 100) {
                return [2, false];
              }
              return [4, varData_1419.wait(300)];
            case 2:
              param_1_1.sent();
              emit("animation:PlayAnimation", varData_2640);
              return [2, true];
          }
        });
      });
      return function (param_1) {
        return varData_2637.apply(this, arguments);
      };
    }());
    varData_1522.register("inventory:handler:coke", function () {
      var varData_2642 = handleAction_289(function (param_1) {
        var varData_2643;
        var varData_2644;
        var varData_2645;
        var varData_2646;
        var varData_2647;
        return handleAction_292(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2643 = PlayerPedId();
              varData_2644 = GetVehiclePedIsIn(varData_2643, false);
              varData_2645 = "anim@amb@nightclub@peds@";
              varData_2646 = "missfbi3_party_snort_coke_b_male3";
              return [4, varData_1806.loadAnim(varData_2645)];
            case 1:
              param_1_1.sent();
              TaskPlayAnim(varData_2643, varData_2645, varData_2646, 8, -8, -1, 48, 0, false, false, false);
              return [4, varData_1872.taskBar(7000, "Bumpin'", false, null, false, varData_2644)];
            case 2:
              varData_2647 = param_1_1.sent();
              ClearPedTasks(varData_2643);
              return [2, varData_2647 === 100];
          }
        });
      });
      return function (param_1) {
        return varData_2642.apply(this, arguments);
      };
    }());
    varData_1522.register("inventory:handler:metamorphine", function () {
      var varData_2648 = handleAction_289(function (param_1) {
        var varData_2649;
        var varData_2650;
        var varData_2651;
        var varData_2652;
        var varData_2653;
        return handleAction_292(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2649 = PlayerPedId();
              varData_2650 = GetVehiclePedIsIn(varData_2649, false);
              varData_2651 = "clear@custom_anim";
              varData_2652 = "adrenaline_clip";
              return [4, varData_1806.loadAnim(varData_2651)];
            case 1:
              param_1_1.sent();
              TriggerEvent("attachItem", "syringe");
              TaskPlayAnim(varData_2649, varData_2651, varData_2652, 8, -8, -1, 51, 0, false, false, false);
              return [4, varData_1872.taskBar(3000, "Injecting liquid death", false, null, false, varData_2650)];
            case 2:
              varData_2653 = param_1_1.sent();
              ClearPedTasks(varData_2649);
              if (varData_2653 === 100) {
                emit("fx:run", "metamorphine", 180);
                exports.wounds.setEntityHealth(varData_2649, GetEntityHealth(varData_2649) - 10);
                TriggerEvent("destroyProp");
                return [2, true];
              }
              TriggerEvent("destroyProp");
              return [2, false];
          }
        });
      });
      return function (param_1) {
        return varData_2648.apply(this, arguments);
      };
    }());
    ;
    function handleAction_295(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_103 = 0, loopIdx = new Array(param_2); numericVal_103 < param_2; numericVal_103++) {
        loopIdx[numericVal_103] = param_1[numericVal_103];
      }
      return loopIdx;
    }
    function handleAction_296(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_297(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2654 = param_1[param_6](param_7);
        var varData_2655 = varData_2654.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2654.done) {
        param_2(varData_2655);
      } else {
        Promise.resolve(varData_2655).then(param_4, param_5);
      }
    }
    function handleAction_298(param_1) {
      return function () {
        var varData_2656 = this;
        var varData_2657 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2658 = param_1.apply(varData_2656, varData_2657);
          function handleAction_299(param_1_2) {
            handleAction_297(varData_2658, param_1_1, param_2, handleAction_299, handleAction_300, "next", param_1_2);
          }
          function handleAction_300(param_1_2) {
            handleAction_297(varData_2658, param_1_1, param_2, handleAction_299, handleAction_300, "throw", param_1_2);
          }
          handleAction_299(undefined);
        });
      };
    }
    function handleAction_301(param_1, param_2) {
      var varData_2659 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2659 == null) {
        return;
      }
      var itemList_10 = [];
      var isEnabled_3 = true;
      var isDisabled_14 = false;
      var varData_2660;
      var varData_2661;
      try {
        for (varData_2659 = varData_2659.call(param_1); !(isEnabled_3 = (varData_2660 = varData_2659.next()).done); isEnabled_3 = true) {
          itemList_10.push(varData_2660.value);
          if (param_2 && itemList_10.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_14 = true;
        varData_2661 = err;
      } finally {
        try {
          if (!isEnabled_3 && varData_2659.return != null) {
            varData_2659.return();
          }
        } finally {
          if (isDisabled_14) {
            throw varData_2661;
          }
        }
      }
      return itemList_10;
    }
    function handleAction_302() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_303(param_1, param_2) {
      return handleAction_296(param_1) || handleAction_301(param_1, param_2) || handleAction_304(param_1, param_2) || handleAction_302();
    }
    function handleAction_304(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_295(param_1, param_2);
      }
      var varData_2662 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2662 === "Object" && param_1.constructor) {
        varData_2662 = param_1.constructor.name;
      }
      if (varData_2662 === "Map" || varData_2662 === "Set") {
        return Array.from(varData_2662);
      }
      if (varData_2662 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2662)) {
        return handleAction_295(param_1, param_2);
      }
    }
    function handleAction_305(param_1, param_2) {
      var varData_2663;
      var varData_2664;
      var varData_2665;
      var varData_2666;
      var varData_2667 = {
        label: 0,
        sent: function () {
          if (varData_2665[0] & 1) {
            throw varData_2665[1];
          }
          return varData_2665[1];
        },
        trys: [],
        ops: []
      };
      varData_2666 = {
        next: handleAction_306(0),
        throw: handleAction_306(1),
        return: handleAction_306(2)
      };
      if (typeof Symbol === "function") {
        varData_2666[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2666;
      function handleAction_306(param_1_1) {
        return function (param_1_2) {
          return handleAction_307([param_1_1, param_1_2]);
        };
      }
      function handleAction_307(param_1_1) {
        if (varData_2663) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2667) {
          try {
            varData_2663 = 1;
            if (varData_2664 && (varData_2665 = param_1_1[0] & 2 ? varData_2664.return : param_1_1[0] ? varData_2664.throw || ((varData_2665 = varData_2664.return) && varData_2665.call(varData_2664), 0) : varData_2664.next) && !(varData_2665 = varData_2665.call(varData_2664, param_1_1[1])).done) {
              return varData_2665;
            }
            varData_2664 = 0;
            if (varData_2665) {
              param_1_1 = [param_1_1[0] & 2, varData_2665.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2665 = param_1_1;
                break;
              case 4:
                varData_2667.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2667.label++;
                varData_2664 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2667.ops.pop();
                varData_2667.trys.pop();
                continue;
              default:
                if (!(varData_2665 = varData_2667.trys, varData_2665 = varData_2665.length > 0 && varData_2665[varData_2665.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2667 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2665 || param_1_1[1] > varData_2665[0] && param_1_1[1] < varData_2665[3])) {
                  varData_2667.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2667.label < varData_2665[1]) {
                  varData_2667.label = varData_2665[1];
                  varData_2665 = param_1_1;
                  break;
                }
                if (varData_2665 && varData_2667.label < varData_2665[2]) {
                  varData_2667.label = varData_2665[2];
                  varData_2667.ops.push(param_1_1);
                  break;
                }
                if (varData_2665[2]) {
                  varData_2667.ops.pop();
                }
                varData_2667.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2667);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2664 = 0;
          } finally {
            varData_2663 = varData_2665 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2668 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2668;
      }
    }
    var isDisabled_14 = false;
    var hashKey = GetHashKey("skylift");
    var varData_2669 = function () {
      var varData_2670 = handleAction_298(function (param_1, param_2) {
        var varData_2671;
        var varData_2672;
        return handleAction_305(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2671 = {
                dict: "mini@repair",
                name: "fixing_a_player"
              };
              return [4, varData_1806.loadAnim(varData_2671.dict)];
            case 1:
              param_1_1.sent();
              varData_2672 = setTick(function () {
                if (!isDisabled_14) {
                  clearTick(varData_2672);
                  return;
                }
                var varData_2673 = GetVehiclePedIsUsing(param_1);
                if (param_2 !== varData_2673 || !DoesEntityExist(param_2)) {
                  ClearPedTasks(param_1);
                  clearTick(varData_2672);
                  isDisabled_14 = false;
                  return;
                }
                if (!IsEntityPlayingAnim(param_1, varData_2671.dict, varData_2671.name, 3)) {
                  ClearPedSecondaryTask(param_1);
                  TaskPlayAnim(param_1, varData_2671.dict, varData_2671.name, 8, -8, -1, 16, 0, false, false, false);
                }
              });
              return [4, varData_1419.waitForCondition(function () {
                return !isDisabled_14;
              }, 30000)];
            case 2:
              param_1_1.sent();
              clearTick(varData_2672);
              return [2];
          }
        });
      });
      return function _0x378d04(param_1, param_2) {
        return varData_2670.apply(this, arguments);
      };
    }();
    var varData_2674 = function () {
      var varData_2675 = handleAction_298(function (param_1, param_2) {
        var varData_2676;
        var varData_2677;
        return handleAction_305(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2676 = {
                dict: "veh@break_in@0h@p_m_one@",
                name: "low_force_entry_ds"
              };
              if (param_2 !== "hacking_device") {
                return [3, 2];
              }
              TaskStartScenarioInPlace(param_1, "CODE_HUMAN_MEDIC_KNEEL", 0, false);
              return [4, varData_1419.waitForCondition(function () {
                return !isDisabled_14;
              }, 30000)];
            case 1:
              param_1_1.sent();
              ClearPedTasks(param_1);
              return [2];
            case 2:
              return [4, varData_1806.loadAnim(varData_2676.dict)];
            case 3:
              param_1_1.sent();
              TaskPlayAnim(param_1, varData_2676.dict, varData_2676.name, 8, -8, -1, 16, 0, false, false, false);
              varData_2677 = setInterval(function () {
                if (!isDisabled_14) {
                  clearInterval(varData_2677);
                  return;
                }
                TaskPlayAnim(param_1, varData_2676.dict, varData_2676.name, 8, -8, -1, 16, 0, false, false, false);
              }, 2500);
              return [4, varData_1419.waitForCondition(function () {
                return !isDisabled_14;
              }, 60000)];
            case 4:
              param_1_1.sent();
              clearInterval(varData_2677);
              ClearPedTasks(param_1);
              return [2];
          }
        });
      });
      return function _0x5de531(param_1, param_2) {
        return varData_2675.apply(this, arguments);
      };
    }();
    var varData_2678 = function () {
      var varData_2679 = handleAction_298(function (param_1, param_2, param_3) {
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
        var varData_2697;
        var varData_2698;
        var varData_2699;
        var varData_2700;
        var varData_2701;
        var varData_2702;
        var varData_2703;
        var varData_2704;
        return handleAction_305(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_1432.Async.crime.Lockpick247();
              if (!param_1 || isDisabled_14) {
                return [2, false];
              }
              varData_2680 = param_1.itemId;
              varData_2681 = PlayerPedId();
              varData_1490.debug("lockpick", varData_2680, param_2);
              param_1_1.label = 1;
            case 1:
              param_1_1.trys.push([1,, 11, 12]);
              isDisabled_14 = true;
              varData_2682 = GetVehiclePedIsUsing(varData_2681);
              if (varData_2682) {
                return [3, 7];
              }
              varData_2683 = handleAction_303(varData_1432.Sync["np-target"].GetEntityPlayerIsLookingAt(5, 0.2, 30, varData_2681), 3);
              varData_2684 = varData_2683[0];
              varData_2685 = varData_2683[1];
              varData_2686 = varData_2683[2];
              if (!varData_2684 || !IsEntityAVehicle(varData_2684) || varData_2685 !== 2) {
                varData_1490.debug("no target vehicle");
                return [2, false];
              }
              varData_1490.debug("targetVehicle", varData_2684);
              varData_2687 = GetPedInVehicleSeat(varData_2684, -1);
              if (varData_2687 !== 0 && (IsPedAPlayer(varData_2687) || !IsPedDeadOrDying(varData_2687, true))) {
                return [2, false];
              }
              varData_2688 = handleAction_303(GetModelDimensions(GetEntityModel(varData_2684)), 2);
              varData_2689 = varData_2688[0];
              varData_2690 = varData_2688[1];
              varData_2691 = new varData_1272(GetOffsetFromEntityInWorldCoords(varData_2684, varData_2689[0] - 0.25, 0.25, 0));
              return [4, varData_1419.waitForCondition(function () {
                var varData_2705 = varData_2691.getDistance(GetEntityCoords(varData_2681));
                return varData_2705 <= 2;
              }, 5000)];
            case 2:
              varData_2692 = param_1_1.sent();
              if (varData_2692) {
                varData_1490.debug("failed to get close enough");
                return [2, false];
              }
              if (param_3) {
                return [3, 4];
              }
              varData_2693 = GetEntityModel(varData_2684);
              return [4, handleAction_308(varData_2684, param_1.itemId)];
            case 3:
              varData_2694 = param_1_1.sent();
              if (!varData_2694) {
                if (varData_2693 === hashKey) {
                  emit("DoLongHudText", "I need skylift keys for this..", 2);
                } else {
                  emit("DoLongHudText", "Cant lockpick this vehicle..", 2);
                }
                return [2, false];
              }
              param_1_1.label = 4;
            case 4:
              TaskTurnPedToFaceEntity(varData_2681, varData_2684, 1);
              return [4, varData_1419.wait(1000)];
            case 5:
              param_1_1.sent();
              emitNet("InteractSound_SV:PlayWithinDistance", 3, "lockpick", 0.4);
              varData_2695 = GetVehicleDoorLockStatus(varData_2684) > 1;
              if (varData_2695) {
                SetVehicleAlarm(varData_2684, true);
                StartVehicleAlarm(varData_2684);
              }
              if (!param_3) {
                emit("civilian:alertPolice", 20, "lockpick");
              }
              varData_2674(varData_2681, varData_2680);
              emitNet("InteractSound_SV:PlayWithinDistance", 3, "lockpick", 0.4);
              varData_2696 = new Promise(function (param_1_2) {
                var varData_2706 = {
                  isSlimJim: param_3,
                  itemType: varData_2680,
                  isForced: param_2,
                  itemSlot: param_1.slot,
                  invItem: param_1.inventoryId,
                  variant: param_1.variant
                };
                varData_1432.Sync["np-vehicles"].LockpickVehicleDoor(varData_2684, varData_2706, function (param_1_3) {
                  param_1_2(param_1_3);
                });
              });
              return [4, varData_2696];
            case 6:
              varData_2697 = param_1_1.sent();
              if (varData_2697.success) {
                if (varData_2695) {
                  SetVehicleAlarm(varData_2684, false);
                }
              }
              SetEntityAsMissionEntity(varData_2684, true, true);
              varData_2698 = GetVehicleNumberPlateText(varData_2684);
              if (!param_3) {
                setTimeout(function () {
                  emitNet("np:vehicles:hotPlate", varData_2698, "10-60");
                }, Math.random() * 60000 + 120000);
                if (varData_2697.success && !param_2) {
                  exports["np-flags"].SetVehicleFlag(varData_2684, "isStolenVehicle", true);
                }
              }
              return [2, true];
            case 7:
              if (param_3) {
                return [3, 9];
              }
              return [4, handleAction_308(varData_2682, param_1.itemId)];
            case 8:
              varData_2699 = param_1_1.sent();
              if (!varData_2699) {
                varData_2700 = GetEntityModel(varData_2682);
                if (varData_2700 === hashKey) {
                  emit("DoLongHudText", "I need skylift keys for this..", 2);
                } else {
                  emit("DoLongHudText", "Cant lockpick this vehicle..", 2);
                }
                return [2, false];
              }
              param_1_1.label = 9;
            case 9:
              varData_2701 = varData_1432.Sync["np-vehicles"].HasVehicleKey(varData_2682);
              if (varData_2701) {
                return [2, false];
              }
              emitNet("InteractSound_SV:PlayWithinDistance", 3, "lockpick", 0.4);
              varData_2702 = GetVehicleDoorLockStatus(varData_2682) > 1;
              if (varData_2702) {
                SetVehicleAlarm(varData_2682, true);
                StartVehicleAlarm(varData_2682);
              }
              SetVehicleHasBeenOwnedByPlayer(varData_2682, true);
              varData_2669(varData_2681, varData_2682);
              emitNet("InteractSound_SV:PlayWithinDistance", 3, "lockpick", 0.4);
              if (!param_3) {
                emit("civilian:alertPolice", 12, "lockpick");
              }
              return [4, varData_1432.Sync["np-vehicles"].HotwireVehicle(varData_2682, varData_2680, false, undefined, param_1.slot, param_1.inventoryId, param_1.variant)];
            case 10:
              varData_2703 = param_1_1.sent();
              if (!varData_2703.success && varData_2703.stage >= 2 && Math.random() < 0.25 && (varData_2680 === "lockpick" || varData_2680 === "advlockpick")) {
                emit("DoLongHudText", "The lockpick bent out of shape.", 2);
                return [2, false];
              }
              SetEntityAsMissionEntity(varData_2682, true, true);
              varData_2704 = GetVehicleNumberPlateText(varData_2682);
              if (!param_3) {
                setTimeout(function () {
                  emitNet("np:vehicles:hotPlate", varData_2704, "10-60");
                }, Math.random() * 60000 + 120000);
                if (varData_2703.success && !param_2) {
                  exports["np-flags"].SetVehicleFlag(varData_2682, "isStolenVehicle", true);
                }
              }
              return [3, 12];
            case 11:
              isDisabled_14 = false;
              ClearPedTasks(varData_2681);
              varData_1490.debug("lockpick done");
              return [7];
            case 12:
              return [2, true];
          }
        });
      });
      return function _0x24b102(param_1, param_2, param_3) {
        return varData_2679.apply(this, arguments);
      };
    }();
    varData_1482.on("inventory:police:lockpick", function (param_1, param_2) {
      var itemList_10 = ["police", "dib"];
      var varData_2707 = varData_1432.Sync.isPed.isPed("myjob");
      if (!itemList_10.includes(varData_2707)) {
        return;
      }
      varData_2678(param_1, false, true);
    });
    varData_1522.register("inventory:handler:lockpick", varData_2678);
    function handleAction_308(param_1, param_2) {
      return handleAction_309.apply(this, arguments);
    }
    function handleAction_309() {
      handleAction_309 = handleAction_298(function (param_1, param_2) {
        var varData_2708;
        var varData_2709;
        var varData_2710;
        var varData_2711;
        var varData_2712;
        return handleAction_305(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2708 = Entity(param_1).state;
              if (varData_2708.isSkyLift) {
                return [2, false];
              }
              if (varData_2708.isChopVehicle) {
                return [2, false];
              }
              if (varData_2708.isPawnshop) {
                return [2, true];
              }
              if (varData_2708.isDropoff) {
                return [2, true];
              }
              varData_2709 = GetEntityModel(param_1);
              return [4, varData_1432.Async.showrooms.getVehicle(varData_2709)];
            case 1:
              varData_2710 = param_1_1.sent();
              varData_2711 = varData_2710?.basePrice ?? 99999;
              if (param_2 === "hacking_device") {
                return [2, varData_2708.isBoostVehicle];
              }
              varData_2712 = GetVehicleClass(param_1);
              if (varData_2712 === 18) {
                return [2, varData_2711 < 75000];
              }
              if (param_2 === "lockpick" && varData_2711 >= 250000) {
                return [2, false];
              } else if (param_2 === "advlockpick" && varData_2711 >= 1000000) {
                return [2, false];
              }
              return [2, true];
          }
        });
      });
      return handleAction_309.apply(this, arguments);
    }
    ;
    var itemList_10 = [{
      itemId: "prop_chickenman",
      model: "np_prop_chickenman",
      allowGizmo: true
    }, {
      itemId: "banana_peel",
      model: "np_banana_peel",
      allowGizmo: false,
      expireTime: 79200
    }, {
      itemId: "mazebank_gold_trophy",
      model: "3dp_np_prop_francis_statue_1b",
      allowGizmo: false
    }, {
      itemId: "mazebank_silver_trophy",
      model: "3dp_np_prop_francis_statue_1a",
      allowGizmo: false
    }, {
      itemId: "prop_survival_trophy",
      model: "prop_survival_trophy",
      allowGizmo: false
    }, {
      itemId: "pride_prop",
      variant: "pride_balloons",
      model: "np_pride_balloons",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_balloonsum",
      model: "np_pride_balloonsum",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_flag",
      model: "np_pride_flag",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_glass_rainbow",
      model: "np_pride_glass_rainbow",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_handsign",
      model: "np_pride_handsign",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_led_text",
      model: "np_pride_led_text",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_led_wings",
      model: "np_pride_led_wings",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_lgbt_text",
      model: "np_pride_lgbt_text",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_rope_heart",
      model: "np_pride_rope_heart",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_umbrella",
      model: "np_pride_umbrella",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_balloon_arch",
      model: "np_pride_balloon_arch",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_balloon_frame",
      model: "np_pride_balloon_frame",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_shiny_rainbow",
      model: "np_pride_shiny_rainbow",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_shiny_rainbow_s",
      model: "np_pride_shiny_rainbow_s",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_balloon_text_love",
      model: "np_pride_balloon_text_love",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_balloon_text_ls",
      model: "np_pride_balloon_text_ls",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_balloon_text_pride",
      model: "np_pride_balloon_text_pride",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_lightstrip",
      model: "np_pride_lightstrip",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_flag_lg_01",
      model: "np_pride_flag_01",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_flag_lg_02",
      model: "np_pride_flag_02",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_flag_lg_03",
      model: "np_pride_flag_03",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_flag_lg_04",
      model: "np_pride_flag_04",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_flag_lg_05",
      model: "np_pride_flag_05",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_flag_lg_06",
      model: "np_pride_flag_06",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_flag_lg_07",
      model: "np_pride_flag_07",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_flag_lg_08",
      model: "np_pride_flag_08",
      allowGizmo: true
    }, {
      itemId: "pride_prop",
      variant: "pride_flag_lg_09",
      model: "np_pride_flag_09",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "carvedpumpkin_01",
      model: "carvedpumpkin_01",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "carvedpumpkin_02",
      model: "carvedpumpkin_02",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "carvedpumpkin_03",
      model: "carvedpumpkin_03",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "pumpkin_01",
      model: "pumpkin_01",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "pumpkin_02",
      model: "pumpkin_02",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "pumpkin_03",
      model: "pumpkin_03",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "boo_tower",
      model: "boo_tower",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "closed_gy_coffin",
      model: "closed_gy_coffin",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "cluster_1",
      model: "cluster_1",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "cluster_2",
      model: "cluster_2",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "coffinbase_03",
      model: "coffinbase_03",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "coffinbase_04",
      model: "coffinbase_04",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "coffinlid_03",
      model: "coffinlid_03",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "coffinlid_04",
      model: "coffinlid_04",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "doormat_boo",
      model: "doormat_boo",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "floating_ghost",
      model: "floating_ghost",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "floating_ghost_03",
      model: "floating_ghost_03",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "gravestone_01",
      model: "gravestone_01",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "gravestone_03",
      model: "gravestone_03",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "gravestone_04",
      model: "gravestone_04",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "gravestonecross_01",
      model: "gravestonecross_01",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "gravestonetall_01",
      model: "gravestonetall_01",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "hpy_halloween_sign",
      model: "hpy_halloween_sign",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "prop_lantern",
      model: "prop_lantern",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "pumpkin_arch",
      model: "pumpkin_arch",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "trickortreat_sign",
      model: "trickortreat_sign",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "woodencross_01",
      model: "woodencross_01",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "haybale_01",
      model: "prop_haybale_01",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "haybale_02",
      model: "prop_haybale_02",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "haybale_03",
      model: "prop_haybale_03",
      allowGizmo: true
    }, {
      itemId: "halloween_prop",
      variant: "haybale_04",
      model: "prop_offroad_bale01",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_curved_garland_green",
      model: "np_curved_garland_green",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_straight_garland_green",
      model: "np_straight_garland_green",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_curved_garland_red",
      model: "np_curved_garland_red",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_straight_garland_red",
      model: "np_straight_garland_red",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_curved_garland_silver",
      model: "np_curved_garland_silver",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_straight_garland_silver",
      model: "np_straight_garland_silver",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_curved_garland_yellow",
      model: "np_curved_garland_yellow",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_straight_garland_yellow",
      model: "np_straight_garland_yellow",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_01",
      model: "np_giftbox_01",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_01b",
      model: "np_giftbox_01b",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_01c",
      model: "np_giftbox_01c",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_02",
      model: "np_giftbox_02",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_02b",
      model: "np_giftbox_02b",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_02c",
      model: "np_giftbox_02c",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_03",
      model: "np_giftbox_03",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_03b",
      model: "np_giftbox_03b",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_04",
      model: "np_giftbox_04",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_04b",
      model: "np_giftbox_04b",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_05",
      model: "np_giftbox_05",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_05b",
      model: "np_giftbox_05b",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_06",
      model: "np_giftbox_06",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_06b",
      model: "np_giftbox_06b",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_07",
      model: "np_giftbox_07",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_giftbox_07b",
      model: "np_giftbox_07b",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_mistletoe",
      model: "np_mistletoe",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmas_ornament_bell",
      model: "np_xmas_ornament_bell",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmas_pinecone",
      model: "np_xmas_pinecone",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmas_redbow",
      model: "np_xmas_redbow",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmas_santa_hat",
      model: "np_xmas_santa_hat",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmas_stocking",
      model: "np_xmas_stocking",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmas_wreath",
      model: "np_xmas_wreath",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmasbigbaubles",
      model: "np_xmasbigbaubles",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmasbigbaubles_l",
      model: "np_xmasbigbaubles_l",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmasclause",
      model: "np_xmasclause",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmasgiftstack",
      model: "np_xmasgiftstack",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmasgiftstack_l",
      model: "np_xmasgiftstack_l",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmaslamp",
      model: "np_xmaslamp",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmaslollipop",
      model: "np_xmaslollipop",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmaslollipop_l",
      model: "np_xmaslollipop_l",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmass_ball_blue",
      model: "np_xmass_ball_blue",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmass_ball_gold",
      model: "np_xmass_ball_gold",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmass_ball_red",
      model: "np_xmass_ball_red",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmass_ball_red2",
      model: "np_xmass_ball_red2",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmass_ball_silver",
      model: "np_xmass_ball_silver",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmassnowfam",
      model: "np_xmassnowfam",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "np_xmassnowfam_l",
      model: "np_xmassnowfam_l",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "xm3_prop_xm3_snowman_01a_np",
      model: "xm3_prop_xm3_snowman_01a_np",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "xm3_prop_xm3_snowman_01b_np",
      model: "xm3_prop_xm3_snowman_01b_np",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "xm3_prop_xm3_snowman_01c_np",
      model: "xm3_prop_xm3_snowman_01c_np",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "xmas_ext_lights_03",
      model: "lm_xmas_ext_lights_03",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "xmas_ext_lights_03b",
      model: "lm_xmas_ext_lights_03b",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "xmas_ext_lights_03c",
      model: "lm_xmas_ext_lights_03c",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "xmas_ext_lights_03flicker",
      model: "lm_xmas_ext_lights_03hoa",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "xmas_ext_lights_03green",
      model: "lm_xmas_ext_lights_03green",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "xmas_ext_lights_03purp",
      model: "lm_xmas_ext_lights_03purp",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "xmas_ext_lights_03red",
      model: "lm_xmas_ext_lights_03red",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "prop_xmas_tree_int",
      model: "prop_xmas_tree_int",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "ch_prop_tree_01a",
      model: "ch_prop_tree_01a",
      allowGizmo: true
    }, {
      itemId: "xmas_prop",
      variant: "ch_prop_tree_02a",
      model: "ch_prop_tree_02a",
      allowGizmo: true
    }, {
      itemId: "campfire",
      variant: "campfire",
      model: "prop_beach_fire",
      allowGizmo: true
    }, {
      itemId: "campfire",
      variant: "hobo",
      model: "gr_prop_gr_hobo_stove_01",
      allowGizmo: true
    }];
    ;
    function handleAction_310(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2713 = param_1[param_6](param_7);
        var varData_2714 = varData_2713.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2713.done) {
        param_2(varData_2714);
      } else {
        Promise.resolve(varData_2714).then(param_4, param_5);
      }
    }
    function handleAction_311(param_1) {
      return function () {
        var varData_2715 = this;
        var varData_2716 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2717 = param_1.apply(varData_2715, varData_2716);
          function handleAction_312(param_1_2) {
            handleAction_310(varData_2717, param_1_1, param_2, handleAction_312, handleAction_313, "next", param_1_2);
          }
          function handleAction_313(param_1_2) {
            handleAction_310(varData_2717, param_1_1, param_2, handleAction_312, handleAction_313, "throw", param_1_2);
          }
          handleAction_312(undefined);
        });
      };
    }
    function handleAction_314(param_1, param_2) {
      var varData_2718;
      var varData_2719;
      var varData_2720;
      var varData_2721;
      var varData_2722 = {
        label: 0,
        sent: function () {
          if (varData_2720[0] & 1) {
            throw varData_2720[1];
          }
          return varData_2720[1];
        },
        trys: [],
        ops: []
      };
      varData_2721 = {
        next: handleAction_315(0),
        throw: handleAction_315(1),
        return: handleAction_315(2)
      };
      if (typeof Symbol === "function") {
        varData_2721[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2721;
      function handleAction_315(param_1_1) {
        return function (param_1_2) {
          return handleAction_316([param_1_1, param_1_2]);
        };
      }
      function handleAction_316(param_1_1) {
        if (varData_2718) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2722) {
          try {
            varData_2718 = 1;
            if (varData_2719 && (varData_2720 = param_1_1[0] & 2 ? varData_2719.return : param_1_1[0] ? varData_2719.throw || ((varData_2720 = varData_2719.return) && varData_2720.call(varData_2719), 0) : varData_2719.next) && !(varData_2720 = varData_2720.call(varData_2719, param_1_1[1])).done) {
              return varData_2720;
            }
            varData_2719 = 0;
            if (varData_2720) {
              param_1_1 = [param_1_1[0] & 2, varData_2720.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2720 = param_1_1;
                break;
              case 4:
                varData_2722.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2722.label++;
                varData_2719 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2722.ops.pop();
                varData_2722.trys.pop();
                continue;
              default:
                if (!(varData_2720 = varData_2722.trys, varData_2720 = varData_2720.length > 0 && varData_2720[varData_2720.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2722 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2720 || param_1_1[1] > varData_2720[0] && param_1_1[1] < varData_2720[3])) {
                  varData_2722.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2722.label < varData_2720[1]) {
                  varData_2722.label = varData_2720[1];
                  varData_2720 = param_1_1;
                  break;
                }
                if (varData_2720 && varData_2722.label < varData_2720[2]) {
                  varData_2722.label = varData_2720[2];
                  varData_2722.ops.push(param_1_1);
                  break;
                }
                if (varData_2720[2]) {
                  varData_2722.ops.pop();
                }
                varData_2722.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2722);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2719 = 0;
          } finally {
            varData_2718 = varData_2720 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2723 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2723;
      }
    }
    varData_1522.register("inventory:object:place", function () {
      var varData_2724 = handleAction_311(function (param_1, param_2, param_3, param_4) {
        var varData_2725;
        return handleAction_314(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              var varData_2726 = {
                collision: false,
                groundSnap: true,
                adjustZ: false,
                distance: 3,
                surfaceOffset: 0.1,
                allowGizmo: param_4
              };
              return [4, varData_1432.Async["np-objects"].PlaceObjectAsync(param_3, varData_2726, function (param_1_2, param_2_1, param_3_1) {
                return true;
              })];
            case 1:
              varData_2725 = param_1_1.sent();
              return [2, varData_2725];
          }
        });
      });
      return function (param_1, param_2, param_3, param_4) {
        return varData_2724.apply(this, arguments);
      };
    }());
    var varData_2727 = function () {
      var varData_2728 = handleAction_311(function () {
        var varData_2729;
        var varData_2730;
        var varData_2731;
        var varData_2732;
        var varData_2733;
        var varData_2734;
        return handleAction_314(this, function (param_1) {
          varData_2729 = true;
          varData_2730 = false;
          varData_2731 = undefined;
          try {
            for (varData_2732 = itemList_10[Symbol.iterator](); !(varData_2729 = (varData_2733 = varData_2732.next()).done); varData_2729 = true) {
              varData_2734 = varData_2733.value;
              if (varData_2734.model === "prop_beach_fire" || varData_2734.model === "gr_prop_gr_hobo_stove_01") {
                continue;
              }
              var varData_2735 = {
                draw: 2,
                use: 2
              };
              var varData_2736 = {
                distance: varData_2735,
                isToggled: true,
                flag: [],
                isEnabled: function () {
                  return true;
                }
              };
              varData_1872.addInteractionByModel(`deploy-${varData_2734.model}`, [varData_2734.model], [{
                id: `deploy-${varData_2734.model}`,
                label: "Pick Up",
                eventSDK: "inventory:object:pickedUp",
                parameters: {
                  model: varData_2734.model
                }
              }], varData_2736);
            }
          } catch (err) {
            varData_2730 = true;
            varData_2731 = err;
          } finally {
            try {
              if (!varData_2729 && varData_2732.return != null) {
                varData_2732.return();
              }
            } finally {
              if (varData_2730) {
                throw varData_2731;
              }
            }
          }
          return [2];
        });
      });
      return function _0x331dbb() {
        return varData_2728.apply(this, arguments);
      };
    }();
    varData_1482.on("inventory:object:pickedUp", function () {
      var varData_2737 = handleAction_311(function (param_1, param_2) {
        var varData_2738;
        return handleAction_314(this, function (param_1_1) {
          varData_1490.debug("inventory:object:pickedUp", param_1, param_2);
          varData_2738 = varData_1432.Sync["np-objects"].GetObjectByEntity(param_2);
          if (!varData_2738) {
            return [2];
          }
          varData_1490.debug("inventory:object:pickedUp", varData_2738);
          varData_1522.execute("inventory:object:pickup", varData_2738.id);
          return [2];
        });
      });
      return function (param_1, param_2) {
        return varData_2737.apply(this, arguments);
      };
    }());
    varData_1482.onNet("deployables:openProps", function () {
      var varData_2739 = handleAction_311(function (param_1) {
        return handleAction_314(this, function (param_1_1) {
          if (!param_1) {
            return [2];
          }
          varData_1590.OpenInventory([`props::${param_1}`], true);
          return [2];
        });
      });
      return function (param_1) {
        return varData_2739.apply(this, arguments);
      };
    }());
    ;
    function handleAction_317(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_103 = 0, loopIdx = new Array(param_2); numericVal_103 < param_2; numericVal_103++) {
        loopIdx[numericVal_103] = param_1[numericVal_103];
      }
      return loopIdx;
    }
    function handleAction_318(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_319(param_1) {
      if (Array.isArray(param_1)) {
        return handleAction_317(param_1);
      }
    }
    function handleAction_320(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2740 = param_1[param_6](param_7);
        var varData_2741 = varData_2740.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2740.done) {
        param_2(varData_2741);
      } else {
        Promise.resolve(varData_2741).then(param_4, param_5);
      }
    }
    function handleAction_321(param_1) {
      return function () {
        var varData_2742 = this;
        var varData_2743 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2744 = param_1.apply(varData_2742, varData_2743);
          function handleAction_322(param_1_2) {
            handleAction_320(varData_2744, param_1_1, param_2, handleAction_322, handleAction_323, "next", param_1_2);
          }
          function handleAction_323(param_1_2) {
            handleAction_320(varData_2744, param_1_1, param_2, handleAction_322, handleAction_323, "throw", param_1_2);
          }
          handleAction_322(undefined);
        });
      };
    }
    function handleAction_324(param_1) {
      if (typeof Symbol !== "undefined" && param_1[Symbol.iterator] != null || param_1["@@iterator"] != null) {
        return Array.from(param_1);
      }
    }
    function handleAction_325(param_1, param_2) {
      var varData_2745 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2745 == null) {
        return;
      }
      var itemList_11 = [];
      var isEnabled_3 = true;
      var isDisabled_15 = false;
      var varData_2746;
      var varData_2747;
      try {
        for (varData_2745 = varData_2745.call(param_1); !(isEnabled_3 = (varData_2746 = varData_2745.next()).done); isEnabled_3 = true) {
          itemList_11.push(varData_2746.value);
          if (param_2 && itemList_11.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_15 = true;
        varData_2747 = err;
      } finally {
        try {
          if (!isEnabled_3 && varData_2745.return != null) {
            varData_2745.return();
          }
        } finally {
          if (isDisabled_15) {
            throw varData_2747;
          }
        }
      }
      return itemList_11;
    }
    function handleAction_326() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_327() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_328(param_1, param_2) {
      return handleAction_318(param_1) || handleAction_325(param_1, param_2) || handleAction_330(param_1, param_2) || handleAction_326();
    }
    function handleAction_329(param_1) {
      return handleAction_319(param_1) || handleAction_324(param_1) || handleAction_330(param_1) || handleAction_327();
    }
    function handleAction_330(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_317(param_1, param_2);
      }
      var varData_2748 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2748 === "Object" && param_1.constructor) {
        varData_2748 = param_1.constructor.name;
      }
      if (varData_2748 === "Map" || varData_2748 === "Set") {
        return Array.from(varData_2748);
      }
      if (varData_2748 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2748)) {
        return handleAction_317(param_1, param_2);
      }
    }
    function handleAction_331(param_1, param_2) {
      var varData_2749;
      var varData_2750;
      var varData_2751;
      var varData_2752;
      var varData_2753 = {
        label: 0,
        sent: function () {
          if (varData_2751[0] & 1) {
            throw varData_2751[1];
          }
          return varData_2751[1];
        },
        trys: [],
        ops: []
      };
      varData_2752 = {
        next: handleAction_332(0),
        throw: handleAction_332(1),
        return: handleAction_332(2)
      };
      if (typeof Symbol === "function") {
        varData_2752[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2752;
      function handleAction_332(param_1_1) {
        return function (param_1_2) {
          return handleAction_333([param_1_1, param_1_2]);
        };
      }
      function handleAction_333(param_1_1) {
        if (varData_2749) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2753) {
          try {
            varData_2749 = 1;
            if (varData_2750 && (varData_2751 = param_1_1[0] & 2 ? varData_2750.return : param_1_1[0] ? varData_2750.throw || ((varData_2751 = varData_2750.return) && varData_2751.call(varData_2750), 0) : varData_2750.next) && !(varData_2751 = varData_2751.call(varData_2750, param_1_1[1])).done) {
              return varData_2751;
            }
            varData_2750 = 0;
            if (varData_2751) {
              param_1_1 = [param_1_1[0] & 2, varData_2751.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2751 = param_1_1;
                break;
              case 4:
                varData_2753.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2753.label++;
                varData_2750 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2753.ops.pop();
                varData_2753.trys.pop();
                continue;
              default:
                if (!(varData_2751 = varData_2753.trys, varData_2751 = varData_2751.length > 0 && varData_2751[varData_2751.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2753 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2751 || param_1_1[1] > varData_2751[0] && param_1_1[1] < varData_2751[3])) {
                  varData_2753.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2753.label < varData_2751[1]) {
                  varData_2753.label = varData_2751[1];
                  varData_2751 = param_1_1;
                  break;
                }
                if (varData_2751 && varData_2753.label < varData_2751[2]) {
                  varData_2753.label = varData_2751[2];
                  varData_2753.ops.push(param_1_1);
                  break;
                }
                if (varData_2751[2]) {
                  varData_2753.ops.pop();
                }
                varData_2753.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2753);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2750 = 0;
          } finally {
            varData_2749 = varData_2751 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2754 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2754;
      }
    }
    var numericVal_103 = 50;
    var numericVal_104 = 15;
    var numericVal_105 = 1500;
    var isDisabled_15 = false;
    var isDisabled_16 = false;
    var numericVal_106 = 0;
    var numericVal_107 = 0;
    var dataMap_8 = new Map();
    var numericVal_108 = 0;
    var numericVal_109 = 15000;
    var varData_2755 = new varData_1591.Thread(function () {}, 1000, "tick");
    var varData_2756 = new varData_1591.Thread(function () {}, 0, "tick");
    function handleAction_334() {
      varData_2755.start();
      varData_2756.start();
    }
    varData_2755.addHook("active", handleAction_321(function () {
      var varData_2757;
      var varData_2758;
      var varData_2759;
      var varData_2760;
      var varData_2761;
      return handleAction_331(this, function (param_1) {
        switch (param_1.label) {
          case 0:
            varData_2757 = globalThis.exports.wounds.isDead();
            varData_2758 = GetEntityModel(GetVehiclePedIsIn(PlayerPedId(), false)) === GetHashKey("polmav");
            if (varData_2758) {
              return [3, 4];
            }
            if (!IsNightvisionActive()) {
              return [3, 2];
            }
            return [4, varData_1590.HasItem("gadget_nightvision")];
          case 1:
            varData_2759 = param_1.sent();
            if (!varData_2759 || varData_2757) {
              SetNightvision(false);
            }
            param_1.label = 2;
          case 2:
            if (!IsSeethroughActive()) {
              return [3, 4];
            }
            return [4, varData_1590.HasItem("gadget_thermalvision")];
          case 3:
            varData_2760 = param_1.sent();
            if (!varData_2760 || varData_2757) {
              SetSeethrough(false);
            }
            param_1.label = 4;
          case 4:
            if (!isDisabled_15) {
              return [3, 6];
            }
            return [4, varData_1590.HasItem("gadget_jumpboots")];
          case 5:
            varData_2761 = param_1.sent();
            if (!varData_2761 || varData_2757) {
              isDisabled_15 = false;
            }
            param_1.label = 6;
          case 6:
            return [2];
        }
      });
    }));
    varData_2756.addHook("active", handleAction_321(function () {
      var varData_2762;
      var varData_2763;
      var varData_2764;
      var varData_2765;
      var varData_2766;
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
      return handleAction_331(this, function (param_1) {
        varData_2762 = PlayerId();
        if (isDisabled_15) {
          SetSuperJumpThisFrame(varData_2762);
        }
        varData_2763 = true;
        varData_2764 = false;
        varData_2765 = undefined;
        try {
          for (varData_2766 = dataMap_8[Symbol.iterator](); !(varData_2763 = (varData_2767 = varData_2766.next()).done); varData_2763 = true) {
            varData_2768 = handleAction_328(varData_2767.value, 2);
            varData_2769 = varData_2768[0];
            varData_2770 = varData_2768[1];
            if (!DoesRopeExist(varData_2770)) {
              dataMap_8.delete(varData_2769);
              continue;
            }
            varData_2771 = GetPlayerFromServerId(varData_2769);
            varData_2772 = GetPlayerPed(varData_2771);
            if (varData_2771 <= -1 || !DoesEntityExist(varData_2772)) {
              DeleteRope(varData_2770);
              dataMap_8.delete(varData_2769);
              continue;
            }
            varData_2773 = handleAction_328(GetPedBoneCoords(varData_2772, 28422, 0, 0, 0), 3);
            varData_2774 = varData_2773[0];
            varData_2775 = varData_2773[1];
            varData_2776 = varData_2773[2];
            PinRopeVertex(varData_2770, GetRopeVertexCount(varData_2770) - 1, varData_2774, varData_2775, varData_2776);
          }
        } catch (err) {
          varData_2764 = true;
          varData_2765 = err;
        } finally {
          try {
            if (!varData_2763 && varData_2766.return != null) {
              varData_2766.return();
            }
          } finally {
            if (varData_2764) {
              throw varData_2765;
            }
          }
        }
        return [2];
      });
    }));
    function handleAction_335(param_1, param_2) {
      var varData_2777 = handleAction_328(param_1, 3);
      var varData_2778 = varData_2777[0];
      var varData_2779 = varData_2777[1];
      var varData_2780 = varData_2777[2];
      var varData_2781 = handleAction_328(param_2, 3);
      var varData_2782 = varData_2781[0];
      var varData_2783 = varData_2781[1];
      var varData_2784 = varData_2781[2];
      var itemList_11 = [varData_2782 - varData_2778, varData_2783 - varData_2779, varData_2784 - varData_2780];
      var sqrtVal = Math.sqrt(itemList_11[0] * itemList_11[0] + itemList_11[1] * itemList_11[1] + itemList_11[2] * itemList_11[2]);
      return itemList_11.map(function (param_1_1) {
        return param_1_1 / sqrtVal;
      });
    }
    var varData_2785 = function () {
      var varData_2786 = handleAction_321(function () {
        var varData_2787;
        var varData_2788;
        var varData_2789;
        var varData_2790;
        var varData_2791;
        var varData_2792;
        var varData_2793;
        var varData_2794;
        var varData_2795;
        var varData_2796;
        var varData_2797;
        var varData_2798;
        var varData_2799;
        var varData_2800;
        var varData_2801;
        var varData_2802;
        var varData_2803;
        var varData_2804;
        var varData_2805;
        var varData_2806;
        var varData_2807;
        var varData_2808;
        var varData_2809;
        var varData_2810;
        var varData_2811;
        var varData_2812;
        var varData_2813;
        var varData_2814;
        var varData_2815;
        var varData_2816;
        var varData_2817;
        var varData_2818;
        var varData_2819;
        var varData_2820;
        var varData_2821;
        var varData_2822;
        var varData_2823;
        var varData_2824;
        var varData_2825;
        var varData_2826;
        var varData_2827;
        var varData_2828;
        var varData_2829;
        var varData_2830;
        return handleAction_331(this, function (param_1) {
          switch (param_1.label) {
            case 0:
              varData_2787 = PlayerPedId();
              varData_2788 = GetPlayerServerId(PlayerId());
              varData_2789 = GetGameplayCamCoord();
              varData_2790 = handleAction_328(GetGameplayCamRot(0).map(function (param_1_1) {
                return Math.PI / 180 * param_1_1;
              }), 3);
              varData_2791 = varData_2790[0];
              varData_2792 = varData_2790[1];
              varData_2793 = varData_2790[2];
              varData_2794 = Math.abs(Math.cos(varData_2791));
              varData_2795 = [-Math.sin(varData_2793) * varData_2794, Math.cos(varData_2793) * varData_2794, Math.sin(varData_2791)];
              varData_2796 = handleAction_328(varData_2795.map(function (param_1_1, param_2) {
                return varData_2789[param_2] + param_1_1;
              }), 3);
              varData_2797 = varData_2796[0];
              varData_2798 = varData_2796[1];
              varData_2799 = varData_2796[2];
              varData_2800 = new varData_1272(GetEntityCoords(varData_2787, false)).getDistance(varData_2789);
              varData_2801 = handleAction_328(varData_2795.map(function (param_1_1, param_2) {
                return varData_2789[param_2] + param_1_1 * (numericVal_103 + varData_2800);
              }), 3);
              varData_2802 = varData_2801[0];
              varData_2803 = varData_2801[1];
              varData_2804 = varData_2801[2];
              return [4, new Promise(function (param_1_1) {
                var varData_2831 = StartShapeTestLosProbe(varData_2797, varData_2798, varData_2799, varData_2802, varData_2803, varData_2804, 17, varData_2787, 7);
                var intervalId = setInterval(function () {
                  var varData_2832 = GetShapeTestResult(varData_2831);
                  if (varData_2832[0] == 0 || varData_2832[0] == 2) {
                    clearInterval(intervalId);
                    var varData_2833 = {
                      rayHandle: varData_2832[0],
                      didHit: varData_2832[1],
                      endPos: varData_2832[2],
                      surfaceNormal: varData_2832[3],
                      entity: varData_2832[4]
                    };
                    param_1_1(varData_2833);
                  }
                }, 1);
              })];
            case 1:
              varData_2805 = param_1.sent();
              varData_2806 = varData_2805.didHit;
              varData_2807 = handleAction_328(varData_2805.endPos, 3);
              varData_2808 = varData_2807[0];
              varData_2809 = varData_2807[1];
              varData_2810 = varData_2807[2];
              if (!varData_2806) {
                return [2];
              }
              if (isDisabled_15) {
                varData_1872.displayNotification("Cant use grapple gun while wearing jump boots..", "error");
                return [2];
              }
              Player(varData_2788).state.set("grappleHook", [varData_2808, varData_2809, varData_2810], true);
              SetPedCanRagdoll(varData_2787, false);
              param_1.label = 2;
            case 2:
              if (!IsControlPressed(0, 25) && !IsDisabledControlPressed(0, 25)) {
                return [3, 4];
              }
              varData_2811 = GetEntityCoords(varData_2787, false);
              varData_2812 = handleAction_328(handleAction_335(varData_2811, [varData_2808, varData_2809, varData_2810]), 3);
              varData_2813 = varData_2812[0];
              varData_2814 = varData_2812[1];
              varData_2815 = varData_2812[2];
              varData_2816 = handleAction_328(GetEntityVelocity(varData_2787), 3);
              varData_2817 = varData_2816[0];
              varData_2818 = varData_2816[1];
              varData_2819 = varData_2816[2];
              varData_2820 = new varData_1272(varData_2811).getDistance([varData_2808, varData_2809, varData_2810]);
              varData_2821 = numericVal_104 * Math.min(1, varData_2820 / 2);
              varData_2822 = [varData_2813 * varData_2821, varData_2814 * varData_2821, varData_2815 * varData_2821];
              varData_2823 = varData_2822[0];
              varData_2824 = varData_2822[1];
              varData_2825 = varData_2822[2];
              varData_2826 = [varData_2823 - varData_2817, varData_2824 - varData_2818, varData_2825 - varData_2819];
              varData_2827 = varData_2826[0];
              varData_2828 = varData_2826[1];
              varData_2829 = varData_2826[2];
              ApplyForceToEntity(varData_2787, 1, varData_2827, varData_2828, varData_2829, 0, 0, 0, 18, false, true, true, false, true);
              return [4, varData_1419.waitForNextFrame()];
            case 3:
              param_1.sent();
              return [3, 2];
            case 4:
              Player(varData_2788).state.set("grappleHook", undefined, true);
              SetPedCanRagdoll(varData_2787, true);
              varData_2830 = new varData_1272(GetEntityCoords(varData_2787, false)).getDistance([varData_2797, varData_2798, varData_2799]);
              varData_1522.execute("inventory:gadget:decayGrappleHook", varData_2830);
              return [2];
          }
        });
      });
      return function _0x7103f8() {
        return varData_2786.apply(this, arguments);
      };
    }();
    varData_1482.onNet("inventory:useGadgetParachute", handleAction_321(function () {
      var varData_2834;
      var varData_2835;
      var varData_2836;
      var varData_2837;
      var varData_2838;
      return handleAction_331(this, function (param_1) {
        switch (param_1.label) {
          case 0:
            varData_2834 = PlayerPedId();
            varData_2835 = IsPedFalling(varData_2834) || GetPedParachuteState(varData_2834) === 3;
            if (varData_2835) {
              return [2, varData_1872.displayNotification("You cannot equip a parachute in mid-air.", "error")];
            }
            if (HasPedGotWeapon(varData_2834, "gadget_parachute", false)) {
              return [2, varData_1872.displayNotification("You already have a parachute equipped!", "error")];
            }
            varData_2836 = GetPedDrawableVariation(varData_2834, 5);
            varData_2837 = GetPedTextureVariation(varData_2834, 5);
            GiveWeaponToPed(varData_2834, "gadget_parachute", 1, false, false);
            SetPedComponentVariation(varData_2834, 5, varData_2836, varData_2837, 0);
            varData_1872.displayNotification("Parachute Equipped. It will appear on your back once you jump. You have 30 seconds to jump.", "info");
            return [4, varData_1419.waitForCondition(function () {
              return GetPedParachuteState(varData_2834) === 0;
            }, 30000)];
          case 1:
            varData_2838 = param_1.sent();
            if (varData_2838) {
              RemoveWeaponFromPed(varData_2834, "gadget_parachute");
              varData_1872.displayNotification("Parachute Removed", "info");
            }
            return [2];
        }
      });
    }));
    varData_1482.onNet("inventory:useGadgetVision", function () {
      var varData_2839 = handleAction_321(function (param_1) {
        var varData_2840;
        var varData_2841;
        var varData_2842;
        var varData_2843;
        var varData_2844;
        var varData_2845;
        var varData_2846;
        var varData_2847;
        return handleAction_331(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2840 = PlayerPedId();
              varData_2841 = param_1 === "thermal" ? IsSeethroughActive() : IsNightvisionActive();
              varData_2842 = varData_2841 ? "goggles_up" : "goggles_down";
              varData_2843 = "anim@mp_helmets@on_foot";
              return [4, varData_1806.loadAnim(varData_2843)];
            case 1:
              varData_2844 = param_1_1.sent();
              if (!varData_2844) {
                return [2, varData_1490.error(`Failed to load ${varData_2843}`)];
              }
              varData_2845 = GetAnimDuration(varData_2843, varData_2842) * 1000;
              TaskPlayAnim(varData_2840, varData_2843, varData_2842, 8, -8, -1, 16, 0, false, false, false);
              varData_2846 = param_1 === "night" ? "Toggling Night Vision..." : "Toggling Thermal Vision...";
              return [4, varData_1872.taskBar(varData_2845, varData_2846)];
            case 2:
              varData_2847 = param_1_1.sent();
              StopAnimTask(varData_2840, varData_2843, varData_2842, 8);
              if (varData_2847 !== 100) {
                return [2];
              }
              if (param_1 === "thermal") {
                SetSeethrough(!varData_2841);
                SeethroughSetMaxThickness(0.001);
                SeethroughSetFadeStartDistance(8500);
                SeethroughSetFadeEndDistance(8500);
                SetNightvision(false);
              } else {
                SetNightvision(!varData_2841);
                SetSeethrough(false);
              }
              return [2];
          }
        });
      });
      return function (param_1) {
        return varData_2839.apply(this, arguments);
      };
    }());
    varData_1482.onNet("inventory:useGadgetWingsuit", handleAction_321(function () {
      var varData_2848;
      var varData_2849;
      var varData_2850;
      var varData_2851;
      var varData_2852;
      var varData_2853;
      var varData_2854;
      var varData_2855;
      var varData_2856;
      var varData_2857;
      var varData_2858;
      return handleAction_331(this, function (param_1) {
        switch (param_1.label) {
          case 0:
            varData_2848 = PlayerPedId();
            if (GetPedParachuteState(varData_2848) !== -1 || GetEntityHeightAboveGround(varData_2848) < 5) {
              return [2];
            }
            varData_2849 = IsPedFalling(varData_2848);
            if (!varData_2849) {
              return [2, varData_1872.displayNotification("You need to be falling to activate your wingsuit!", "error")];
            }
            varData_2850 = GetPedDrawableVariation(varData_2848, 5);
            varData_2851 = GetPedTextureVariation(varData_2848, 5);
            GiveWeaponToPed(varData_2848, "gadget_parachute", 1, false, false);
            return [4, varData_1419.waitForCondition(function () {
              return GetPedParachuteState(varData_2848) === 0;
            }, 5000)];
          case 1:
            param_1.sent();
            SetPedComponentVariation(varData_2848, 5, varData_2850, varData_2851, 0);
            varData_2852 = 0;
            return [4, varData_1806.loadModel("np_wingsuit_b_open")];
          case 2:
            varData_2853 = param_1.sent();
            if (varData_2853) {
              varData_2854 = handleAction_328(GetEntityCoords(varData_2848, true), 3);
              varData_2855 = varData_2854[0];
              varData_2856 = varData_2854[1];
              varData_2857 = varData_2854[2];
              varData_2852 = CreateObject("np_wingsuit_b_open", varData_2855, varData_2856, varData_2857, true, false, false);
              AttachEntityToEntity(varData_2852, varData_2848, GetPedBoneIndex(varData_2848, 24818), 0, -0.15, 0, 0, 90, 0, false, false, false, false, 2, true);
              SetModelAsNoLongerNeeded("np_wingsuit_b_open");
            } else {
              varData_1490.error("Failed to load np_wingsuit_b_open");
            }
            param_1.label = 3;
          case 3:
            if (!(GetPedParachuteState(varData_2848) < 2) || !!HasEntityCollidedWithAnything(varData_2848) && !IsPedSwimming(varData_2848) && !IsPedDeadOrDying(varData_2848, true)) {
              return [3, 5];
            }
            varData_2858 = IsControlPressed(0, varData_1255.S) ? 9 : 6.4;
            ApplyForceToEntity(varData_2848, 1, 0, 50, varData_2858, 0, 0, 0, 0, true, false, false, false, true);
            return [4, varData_1419.waitForNextFrame()];
          case 4:
            param_1.sent();
            return [3, 3];
          case 5:
            if (HasPedGotWeapon(varData_2848, "gadget_parachute", false)) {
              RemoveWeaponFromPed(varData_2848, "gadget_parachute");
            }
            DetachEntity(varData_2852, false, false);
            DeleteEntity(varData_2852);
            return [2];
        }
      });
    }));
    varData_1522.register("inventory:useGadgetJumpBoots", function () {
      var varData_2859 = handleAction_321(function (param_1) {
        var varData_2860;
        var varData_2861;
        var varData_2862;
        var varData_2863;
        var varData_2864;
        var varData_2865;
        var varData_2866;
        return handleAction_331(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2860 = PlayerPedId();
              varData_2861 = "pickup_low";
              varData_2862 = "random@domestic";
              return [4, varData_1806.loadAnim(varData_2862)];
            case 1:
              varData_2863 = param_1_1.sent();
              if (!varData_2863) {
                return [2, false];
              }
              varData_2864 = GetAnimDuration(varData_2862, varData_2861) * 1000;
              TaskPlayAnim(varData_2860, varData_2862, varData_2861, 8, -8, -1, 16, 0, false, false, false);
              varData_2865 = param_1 ? "Putting on Jump Boots..." : "Taking off Jump Boots...";
              return [4, varData_1872.taskBar(varData_2864, varData_2865)];
            case 2:
              varData_2866 = param_1_1.sent();
              StopAnimTask(varData_2860, varData_2862, varData_2861, 8);
              return [2, varData_2866 === 100];
          }
        });
      });
      return function (param_1) {
        return varData_2859.apply(this, arguments);
      };
    }());
    varData_1482.on("inventory:weaponEquipped", function () {
      var varData_2867 = handleAction_321(function (param_1, param_2, param_3) {
        return handleAction_331(this, function (param_1_1) {
          if (param_1.weapon !== "weapon_compactlauncher" || param_2.itemId !== "np_grapplelauncher") {
            return [2];
          }
          if (numericVal_106) {
            clearTick(numericVal_106);
            numericVal_106 = 0;
          }
          numericVal_106 = setTick(handleAction_321(function () {
            var varData_2868;
            var varData_2869;
            return handleAction_331(this, function (param_1_2) {
              switch (param_1_2.label) {
                case 0:
                  varData_2868 = PlayerId();
                  varData_2869 = PlayerPedId();
                  DisablePlayerFiring(varData_2869, true);
                  if (GetVehiclePedIsIn(varData_2869, false) !== 0 || !IsPlayerFreeAiming(varData_2868)) {
                    return [2];
                  }
                  if (!IsControlJustPressed(0, 24) && !IsDisabledControlJustPressed(0, 24)) {
                    return [2];
                  }
                  if (param_2.quality <= 0) {
                    varData_1872.displayNotification("The grapple launcher is broken!", "error");
                    return [2];
                  }
                  if (isDisabled_16 || numericVal_107 >= Date.now()) {
                    return [2];
                  }
                  emit("inventory:grappleHookFired", true);
                  isDisabled_16 = true;
                  return [4, varData_2785()];
                case 1:
                  param_1_2.sent();
                  emit("inventory:grappleHookFired", false);
                  isDisabled_16 = false;
                  numericVal_107 = Date.now() + numericVal_105;
                  return [2];
              }
            });
          }));
          return [2];
        });
      });
      return function (param_1, param_2, param_3) {
        return varData_2867.apply(this, arguments);
      };
    }());
    varData_1482.on("inventory:weaponUnequipped", handleAction_321(function () {
      return handleAction_331(this, function (param_1) {
        clearTick(numericVal_106);
        numericVal_106 = 0;
        isDisabled_16 = false;
        return [2];
      });
    }));
    AddStateBagChangeHandler("grappleHook", null, function () {
      var varData_2870 = handleAction_321(function (param_1, param_2, param_3, param_4, param_5) {
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
        return handleAction_331(this, function (param_1_1) {
          varData_2871 = GetPlayerFromStateBagName(param_1);
          varData_2872 = GetPlayerServerId(varData_2871);
          if (GetPlayerPed(varData_2871) === PlayerPedId() && !param_5) {
            return [2];
          }
          if (!!param_3 && Array.isArray(param_3) && param_3.length === 3) {
            if (dataMap_8.has(varData_2872)) {
              varData_2873 = dataMap_8.get(varData_2872);
              if (varData_2873) {
                DeleteRope(varData_2873);
              }
            }
            varData_2874 = handleAction_328(param_3, 3);
            varData_2875 = varData_2874[0];
            varData_2876 = varData_2874[1];
            varData_2877 = varData_2874[2];
            varData_2878 = handleAction_328(AddRope(varData_2875, varData_2876, varData_2877, 0, 0, 0, 0, 5, 0, 0, 0, false, false, false, 0, false), 1);
            varData_2879 = varData_2878[0];
            PinRopeVertex(varData_2879, 0, varData_2875, varData_2876, varData_2877);
            dataMap_8.set(varData_2872, varData_2879);
          } else {
            varData_2880 = dataMap_8.get(varData_2872);
            if (varData_2880) {
              DeleteRope(varData_2880);
            }
            dataMap_8.delete(varData_2872);
          }
          return [2];
        });
      });
      return function (param_1, param_2, param_3, param_4, param_5) {
        return varData_2870.apply(this, arguments);
      };
    }());
    function handleAction_336(param_1, param_2, param_3) {
      var varData_2881 = GetGameTimer();
      var numericVal_110 = 0;
      var varData_2882 = AddBlipForCoord(param_1[0], param_1[1], param_1[2]);
      SetBlipSprite(varData_2882, 10);
      SetBlipColour(varData_2882, param_3);
      SetBlipHiddenOnLegend(varData_2882, true);
      SetBlipHighDetail(varData_2882, true);
      SetBlipScale(varData_2882, numericVal_110);
      var tickHandler = setTick(function () {
        var varData_2883 = GetGameTimer() - varData_2881;
        varData_2881 = GetGameTimer();
        numericVal_110 = numericVal_110 + varData_2883 * 0.0025;
        SetBlipScale(varData_2882, numericVal_110);
        var roundedVal = Math.floor((param_2 - numericVal_110) / param_2 * 255);
        SetBlipAlpha(varData_2882, Math.max(0, roundedVal));
        if (numericVal_110 > param_2) {
          clearTick(tickHandler);
          RemoveBlip(varData_2882);
        }
      });
    }
    varData_1482.onNet("inventory:useGpsTracker", function () {
      var varData_2884 = handleAction_321(function (param_1) {
        var varData_2885;
        var varData_2886;
        var varData_2887;
        var varData_2888;
        return handleAction_331(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1522.execute("inventory:getGpsTrackerInfo", param_1)];
            case 1:
              varData_2885 = param_1_1.sent();
              if (!varData_2885) {
                varData_1872.displayNotification("Failed to get GPS tracker info", "error");
                return [2];
              }
              varData_2886 = varData_2885.publicMetadata?.TrackingID;
              if (varData_2886) {
                return [3, 4];
              }
              return [4, varData_1872.openInputMenu([{
                name: "id",
                label: "Enter Tracking ID",
                icon: "satellite-dish",
                _type: "text"
              }])];
            case 2:
              varData_2887 = param_1_1.sent();
              if (!varData_2887 || !varData_2887.id) {
                varData_1872.displayNotification("GPS Tracker setup cancelled", "error");
                return [2];
              }
              varData_2886 = varData_2887.id;
              return [4, varData_1522.execute("inventory:updateTrackerMetadata", varData_2885.itemStackId, varData_2886)];
            case 3:
              varData_2888 = param_1_1.sent();
              if (!varData_2888) {
                varData_1872.displayNotification("Failed to set tracking ID", "error");
                return [2];
              }
              param_1_1.label = 4;
            case 4:
              varData_1872.displayNotification(`GPS Tracker activated with ID: ${varData_2886}`, "info");
              return [2];
          }
        });
      });
      return function (param_1) {
        return varData_2884.apply(this, arguments);
      };
    }());
    varData_1482.onNet("inventory:useGpsLocator", function () {
      var varData_2889 = handleAction_321(function (param_1) {
        var varData_2890;
        var varData_2891;
        var varData_2892;
        var varData_2893;
        var varData_2894;
        var varData_2895;
        var varData_2896;
        var varData_2897;
        var varData_2898;
        var varData_2899;
        var varData_2900;
        var varData_2901;
        var varData_2902;
        var varData_2903;
        var varData_2904;
        var varData_2905;
        var varData_2906;
        var varData_2907;
        var varData_2908;
        var varData_2909;
        var varData_2910;
        var varData_2911;
        var varData_2912;
        var varData_2913;
        var varData_2914;
        var varData_2915;
        var varData_2916;
        var varData_2917;
        var varData_2918;
        return handleAction_331(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2890 = Date.now();
              varData_2891 = numericVal_109 - (varData_2890 - numericVal_108);
              if (varData_2891 > 0) {
                varData_2892 = Math.ceil(varData_2891 / 1000);
                varData_1872.displayNotification(`GPS Locator cooling down... ${varData_2892}s remaining`, "error");
                return [2];
              }
              return [4, varData_1522.execute("inventory:getGpsLocatorInfo", param_1)];
            case 1:
              varData_2893 = param_1_1.sent();
              if (!varData_2893) {
                varData_1872.displayNotification("Failed to get GPS locator info", "error");
                return [2];
              }
              varData_2894 = varData_2893.publicMetadata?.TrackingID;
              if (varData_2894) {
                return [3, 4];
              }
              return [4, varData_1872.openInputMenu([{
                name: "id",
                label: "Enter Tracking ID to Find",
                icon: "search-location",
                _type: "text"
              }])];
            case 2:
              varData_2895 = param_1_1.sent();
              if (!varData_2895 || !varData_2895.id) {
                varData_1872.displayNotification("GPS Locator search cancelled", "error");
                return [2];
              }
              varData_2894 = varData_2895.id;
              return [4, varData_1522.execute("inventory:updateLocatorMetadata", varData_2893.itemStackId, varData_2894)];
            case 3:
              varData_2896 = param_1_1.sent();
              if (!varData_2896) {
                varData_1872.displayNotification("Failed to set tracking ID", "error");
                return [2];
              }
              param_1_1.label = 4;
            case 4:
              return [4, varData_1522.execute("inventory:getTrackerLocations", varData_2894)];
            case 5:
              varData_2897 = param_1_1.sent();
              if (!varData_2897 || varData_2897.length === 0) {
                varData_1872.displayNotification(`No trackers found with ID: ${varData_2894}`, "error");
                return [2];
              }
              varData_1872.displayNotification(`Found ${varData_2897.length} tracker(s)`, "info");
              numericVal_108 = Date.now();
              varData_2898 = 1;
              param_1_1.label = 6;
            case 6:
              if (!(varData_2898 <= 3)) {
                return [3, 9];
              }
              PlaySound(-1, "5_SEC_WARNING", "HUD_MINI_GAME_SOUNDSET", false, 0, true);
              return [4, varData_1419.wait(1000)];
            case 7:
              param_1_1.sent();
              param_1_1.label = 8;
            case 8:
              varData_2898++;
              return [3, 6];
            case 9:
              PlaySound(-1, "On_Call_Player_Join", "DLC_HEISTS_GENERAL_FRONTEND_SOUNDS", false, 0, true);
              varData_2899 = GetEntityCoords(PlayerPedId(), false);
              handleAction_336([varData_2899[0], varData_2899[1], varData_2899[2]], 4, 33);
              varData_2900 = true;
              varData_2901 = false;
              varData_2902 = undefined;
              param_1_1.label = 10;
            case 10:
              param_1_1.trys.push([10, 15, 16, 17]);
              varData_2903 = varData_2897[Symbol.iterator]();
              param_1_1.label = 11;
            case 11:
              if (varData_2900 = (varData_2904 = varData_2903.next()).done) {
                return [3, 14];
              }
              varData_2905 = varData_2904.value;
              varData_2906 = new varData_1272(varData_2899).getDistance(new varData_1272(varData_2905));
              return [4, varData_1419.wait(Math.min(varData_2906 * 3, 3000))];
            case 12:
              param_1_1.sent();
              varData_2907 = handleAction_329(varData_2905);
              varData_2908 = 1;
              varData_2909 = 4;
              varData_2910 = 0;
              if (varData_2906 <= 100) {
                varData_2908 = 1;
                varData_2910 = 0;
              } else if (varData_2906 <= 4000) {
                varData_2911 = (varData_2906 - 100) / 3900;
                varData_2910 = varData_2911 * 1000;
                varData_2908 = 1 - varData_2911;
              } else {
                varData_2910 = 1000;
                varData_2908 = 0;
              }
              if (varData_2910 > 0) {
                varData_2912 = Math.random() * 2 * Math.PI;
                varData_2913 = 0.7;
                varData_2914 = 1;
                varData_2915 = varData_2913 + Math.random() * (varData_2914 - varData_2913);
                varData_2916 = varData_2910 * varData_2915;
                varData_2907[0] += Math.cos(varData_2912) * varData_2916;
                varData_2907[1] += Math.sin(varData_2912) * varData_2916;
              }
              PlaySound(-1, "On_Call_Player_Join", "DLC_HEISTS_GENERAL_FRONTEND_SOUNDS", false, 0, true);
              handleAction_336(varData_2907, varData_2909, 33);
              varData_2917 = Math.round(varData_2908 * 100);
              if (varData_2917 < 100) {
                varData_1872.displayNotification(`Tracker signal: ~${varData_2917}% accuracy`, "info");
              }
              param_1_1.label = 13;
            case 13:
              varData_2900 = true;
              return [3, 11];
            case 14:
              return [3, 17];
            case 15:
              varData_2918 = param_1_1.sent();
              varData_2901 = true;
              varData_2902 = varData_2918;
              return [3, 17];
            case 16:
              try {
                if (!varData_2900 && varData_2903.return != null) {
                  varData_2903.return();
                }
              } finally {
                if (varData_2901) {
                  throw varData_2902;
                }
              }
              return [7];
            case 17:
              return [2];
          }
        });
      });
      return function (param_1) {
        return varData_2889.apply(this, arguments);
      };
    }());
    globalThis.exports("isJumpBootsEquipped", function () {
      return isDisabled_15;
    });
    varData_1735.RegisterStatebagChangeHandler("jumpBootsEnabled", true, false, function () {
      var varData_2919 = handleAction_321(function (param_1, param_2, param_3) {
        return handleAction_331(this, function (param_1_1) {
          isDisabled_15 = param_3;
          return [2];
        });
      });
      return function (param_1, param_2, param_3) {
        return varData_2919.apply(this, arguments);
      };
    }());
    ;
    function handleAction_337(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2920 = param_1[param_6](param_7);
        var varData_2921 = varData_2920.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2920.done) {
        param_2(varData_2921);
      } else {
        Promise.resolve(varData_2921).then(param_4, param_5);
      }
    }
    function handleAction_338(param_1) {
      return function () {
        var varData_2922 = this;
        var varData_2923 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2924 = param_1.apply(varData_2922, varData_2923);
          function handleAction_339(param_1_2) {
            handleAction_337(varData_2924, param_1_1, param_2, handleAction_339, handleAction_340, "next", param_1_2);
          }
          function handleAction_340(param_1_2) {
            handleAction_337(varData_2924, param_1_1, param_2, handleAction_339, handleAction_340, "throw", param_1_2);
          }
          handleAction_339(undefined);
        });
      };
    }
    function handleAction_341(param_1, param_2) {
      var varData_2925;
      var varData_2926;
      var varData_2927;
      var varData_2928;
      var varData_2929 = {
        label: 0,
        sent: function () {
          if (varData_2927[0] & 1) {
            throw varData_2927[1];
          }
          return varData_2927[1];
        },
        trys: [],
        ops: []
      };
      varData_2928 = {
        next: handleAction_342(0),
        throw: handleAction_342(1),
        return: handleAction_342(2)
      };
      if (typeof Symbol === "function") {
        varData_2928[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2928;
      function handleAction_342(param_1_1) {
        return function (param_1_2) {
          return handleAction_343([param_1_1, param_1_2]);
        };
      }
      function handleAction_343(param_1_1) {
        if (varData_2925) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2929) {
          try {
            varData_2925 = 1;
            if (varData_2926 && (varData_2927 = param_1_1[0] & 2 ? varData_2926.return : param_1_1[0] ? varData_2926.throw || ((varData_2927 = varData_2926.return) && varData_2927.call(varData_2926), 0) : varData_2926.next) && !(varData_2927 = varData_2927.call(varData_2926, param_1_1[1])).done) {
              return varData_2927;
            }
            varData_2926 = 0;
            if (varData_2927) {
              param_1_1 = [param_1_1[0] & 2, varData_2927.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2927 = param_1_1;
                break;
              case 4:
                varData_2929.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2929.label++;
                varData_2926 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2929.ops.pop();
                varData_2929.trys.pop();
                continue;
              default:
                if (!(varData_2927 = varData_2929.trys, varData_2927 = varData_2927.length > 0 && varData_2927[varData_2927.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2929 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2927 || param_1_1[1] > varData_2927[0] && param_1_1[1] < varData_2927[3])) {
                  varData_2929.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2929.label < varData_2927[1]) {
                  varData_2929.label = varData_2927[1];
                  varData_2927 = param_1_1;
                  break;
                }
                if (varData_2927 && varData_2929.label < varData_2927[2]) {
                  varData_2929.label = varData_2927[2];
                  varData_2929.ops.push(param_1_1);
                  break;
                }
                if (varData_2927[2]) {
                  varData_2929.ops.pop();
                }
                varData_2929.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2929);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2926 = 0;
          } finally {
            varData_2925 = varData_2927 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2930 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2930;
      }
    }
    var varData_2931 = function () {
      var varData_2932 = handleAction_338(function () {
        return handleAction_341(this, function (param_1) {
          varData_2727();
          varData_1955();
          handleAction_334();
          return [2];
        });
      });
      return function _0x5e7c85() {
        return varData_2932.apply(this, arguments);
      };
    }();
    ;
    function handleAction_344(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_110 = 0, loopIdx = new Array(param_2); numericVal_110 < param_2; numericVal_110++) {
        loopIdx[numericVal_110] = param_1[numericVal_110];
      }
      return loopIdx;
    }
    function handleAction_345(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_346(param_1) {
      if (Array.isArray(param_1)) {
        return handleAction_344(param_1);
      }
    }
    function handleAction_347(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2933 = param_1[param_6](param_7);
        var varData_2934 = varData_2933.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2933.done) {
        param_2(varData_2934);
      } else {
        Promise.resolve(varData_2934).then(param_4, param_5);
      }
    }
    function handleAction_348(param_1) {
      return function () {
        var varData_2935 = this;
        var varData_2936 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2937 = param_1.apply(varData_2935, varData_2936);
          function handleAction_349(param_1_2) {
            handleAction_347(varData_2937, param_1_1, param_2, handleAction_349, handleAction_350, "next", param_1_2);
          }
          function handleAction_350(param_1_2) {
            handleAction_347(varData_2937, param_1_1, param_2, handleAction_349, handleAction_350, "throw", param_1_2);
          }
          handleAction_349(undefined);
        });
      };
    }
    function handleAction_351(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_2938 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_2938);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_352(param_1) {
      if (typeof Symbol !== "undefined" && param_1[Symbol.iterator] != null || param_1["@@iterator"] != null) {
        return Array.from(param_1);
      }
    }
    function handleAction_353(param_1, param_2) {
      var varData_2939 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2939 == null) {
        return;
      }
      var itemList_11 = [];
      var isEnabled_3 = true;
      var isDisabled_17 = false;
      var varData_2940;
      var varData_2941;
      try {
        for (varData_2939 = varData_2939.call(param_1); !(isEnabled_3 = (varData_2940 = varData_2939.next()).done); isEnabled_3 = true) {
          itemList_11.push(varData_2940.value);
          if (param_2 && itemList_11.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_17 = true;
        varData_2941 = err;
      } finally {
        try {
          if (!isEnabled_3 && varData_2939.return != null) {
            varData_2939.return();
          }
        } finally {
          if (isDisabled_17) {
            throw varData_2941;
          }
        }
      }
      return itemList_11;
    }
    function handleAction_354() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_355() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_356(param_1) {
      for (var numericVal_110 = 1; numericVal_110 < arguments.length; numericVal_110++) {
        var varData_2942 = arguments[numericVal_110] ?? {};
        var keysList = Object.keys(varData_2942);
        if (typeof Object.getOwnPropertySymbols === "function") {
          keysList = keysList.concat(Object.getOwnPropertySymbols(varData_2942).filter(function (param_1_1) {
            return Object.getOwnPropertyDescriptor(varData_2942, param_1_1).enumerable;
          }));
        }
        keysList.forEach(function (param_1_1) {
          handleAction_351(param_1, param_1_1, varData_2942[param_1_1]);
        });
      }
      return param_1;
    }
    function handleAction_357(param_1, param_2) {
      var keysList = Object.keys(param_1);
      if (Object.getOwnPropertySymbols) {
        var varData_2943 = Object.getOwnPropertySymbols(param_1);
        if (param_2) {
          varData_2943 = varData_2943.filter(function (param_1_1) {
            return Object.getOwnPropertyDescriptor(param_1, param_1_1).enumerable;
          });
        }
        keysList.push.apply(keysList, varData_2943);
      }
      return keysList;
    }
    function handleAction_358(param_1, param_2) {
      param_2 = param_2 ?? {};
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(param_1, Object.getOwnPropertyDescriptors(param_2));
      } else {
        handleAction_357(Object(param_2)).forEach(function (param_1_1) {
          Object.defineProperty(param_1, param_1_1, Object.getOwnPropertyDescriptor(param_2, param_1_1));
        });
      }
      return param_1;
    }
    function handleAction_359(param_1, param_2) {
      return handleAction_345(param_1) || handleAction_353(param_1, param_2) || handleAction_361(param_1, param_2) || handleAction_354();
    }
    function handleAction_360(param_1) {
      return handleAction_346(param_1) || handleAction_352(param_1) || handleAction_361(param_1) || handleAction_355();
    }
    function handleAction_361(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_344(param_1, param_2);
      }
      var varData_2944 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2944 === "Object" && param_1.constructor) {
        varData_2944 = param_1.constructor.name;
      }
      if (varData_2944 === "Map" || varData_2944 === "Set") {
        return Array.from(varData_2944);
      }
      if (varData_2944 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2944)) {
        return handleAction_344(param_1, param_2);
      }
    }
    function handleAction_362(param_1, param_2) {
      var varData_2945;
      var varData_2946;
      var varData_2947;
      var varData_2948;
      var varData_2949 = {
        label: 0,
        sent: function () {
          if (varData_2947[0] & 1) {
            throw varData_2947[1];
          }
          return varData_2947[1];
        },
        trys: [],
        ops: []
      };
      varData_2948 = {
        next: handleAction_363(0),
        throw: handleAction_363(1),
        return: handleAction_363(2)
      };
      if (typeof Symbol === "function") {
        varData_2948[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2948;
      function handleAction_363(param_1_1) {
        return function (param_1_2) {
          return handleAction_364([param_1_1, param_1_2]);
        };
      }
      function handleAction_364(param_1_1) {
        if (varData_2945) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2949) {
          try {
            varData_2945 = 1;
            if (varData_2946 && (varData_2947 = param_1_1[0] & 2 ? varData_2946.return : param_1_1[0] ? varData_2946.throw || ((varData_2947 = varData_2946.return) && varData_2947.call(varData_2946), 0) : varData_2946.next) && !(varData_2947 = varData_2947.call(varData_2946, param_1_1[1])).done) {
              return varData_2947;
            }
            varData_2946 = 0;
            if (varData_2947) {
              param_1_1 = [param_1_1[0] & 2, varData_2947.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2947 = param_1_1;
                break;
              case 4:
                varData_2949.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2949.label++;
                varData_2946 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2949.ops.pop();
                varData_2949.trys.pop();
                continue;
              default:
                if (!(varData_2947 = varData_2949.trys, varData_2947 = varData_2947.length > 0 && varData_2947[varData_2947.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2949 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2947 || param_1_1[1] > varData_2947[0] && param_1_1[1] < varData_2947[3])) {
                  varData_2949.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2949.label < varData_2947[1]) {
                  varData_2949.label = varData_2947[1];
                  varData_2947 = param_1_1;
                  break;
                }
                if (varData_2947 && varData_2949.label < varData_2947[2]) {
                  varData_2949.label = varData_2947[2];
                  varData_2949.ops.push(param_1_1);
                  break;
                }
                if (varData_2947[2]) {
                  varData_2949.ops.pop();
                }
                varData_2949.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2949);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2946 = 0;
          } finally {
            varData_2945 = varData_2947 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2950 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2950;
      }
    }
    var varData_2951 = new varData_1909({
      codename: "inventory",
      version: "1.0.0"
    });
    var isDisabled_17 = false;
    var isDisabled_18 = false;
    function handleAction_365(param_1, param_2) {
      var varData_2952;
      varData_1490.debug("Opening Inventory", param_1);
      var itemList_11 = [];
      if (isDisabled_17 || isDisabled_18) {
        return;
      }
      var playerPed = PlayerPedId();
      var varData_2953 = new varData_1272(GetEntityCoords(playerPed, false));
      var varData_2954 = LocalPlayer.state.routingBucketName ?? "default";
      (varData_2952 = itemList_11).push.apply(varData_2952, handleAction_360(param_1));
      if (param_2) {
        var varData_2955 = handleAction_161(varData_2953, varData_2954);
        itemList_11.push(varData_2955);
      }
      var varData_2956 = {
        show: true,
        secondaryInventories: itemList_11
      };
      varData_1583.execute("setState", varData_2956);
      varData_1432.Sync.focusmanager.SetUIFocus(true, true);
    }
    varData_1432.Sync("OpenInventory", handleAction_365);
    function handleAction_366() {
      varData_1583.execute("setState", {
        show: false
      });
    }
    varData_1432.Sync("CloseInventory", handleAction_366);
    function handleAction_367() {
      var varData_2957 = varData_1432.Sync.isPed.isPed("cid");
      return [`ply-${varData_2957}`, `backpack-${varData_2957}`, `body-${varData_2957}`];
    }
    var varData_2958 = function () {
      var varData_2959 = handleAction_348(function () {
        return handleAction_362(this, function (param_1) {
          switch (param_1.label) {
            case 0:
              return [4, varData_1923()];
            case 1:
              param_1.sent();
              return [4, varData_2479()];
            case 2:
              param_1.sent();
              return [4, varData_2529()];
            case 3:
              param_1.sent();
              return [4, varData_2003()];
            case 4:
              param_1.sent();
              return [4, varData_2931()];
            case 5:
              param_1.sent();
              handleAction_180();
              varData_1432.Sync.focusmanager.RegisterFocusHandler(function (param_1_1, param_2) {
                if (param_2) {
                  SetCursorLocation(0.5, 0.5);
                }
                SetNuiFocus(param_1_1, param_2);
              });
              RegisterCommand("+inventory", function () {
                if (isDisabled_17) {
                  return;
                }
                var currentVehicle = GetVehiclePedIsIn(PlayerPedId(), false);
                if (currentVehicle !== 0) {
                  var varData_2960 = varData_1432.Sync["np-vehicles"].GetVehicleIdentifier(currentVehicle);
                  var modelHash = GetEntityModel(currentVehicle);
                  var varData_2961 = GetEntityArchetypeName(currentVehicle);
                  var vehicleClass = GetVehicleClass(currentVehicle);
                  if (varData_2960) {
                    var varData_2962 = `glovebox-${varData_2960}::${vehicleClass}::${varData_2961 ?? modelHash}`;
                    handleAction_365([varData_2962], false);
                    return;
                  }
                  handleAction_365([], false);
                  return;
                }
                var varData_2963 = !varData_1837.isActive("elevator_shaft");
                handleAction_365([], varData_2963);
              }, false);
              RegisterCommand("-inventory", function () {}, false);
              varData_1432.Sync["np-keybinds"].registerKeyMapping("inventory", "Inventory", "Open Inventory", "+inventory", "-inventory", "K", true);
              var varData_2964 = {
                id: "trunk:enter",
                label: "Enter trunk",
                event: "np-police:vehicle:getInTrunk",
                parameters: {},
                isEnabled: function () {
                  return !isDisabled_13;
                }
              };
              var varData_2965 = {
                id: "trunk:put",
                label: "Put in trunk",
                event: "np-police:vehicle:forceTrunkCheck",
                parameters: {},
                isEnabled: function () {
                  return isDisabled_13;
                }
              };
              varData_1872.addVehicleInteraction("trunk", [{
                id: "trunk",
                label: "View Trunk",
                eventSDK: "inventory:openTrunk",
                parameters: {}
              }, varData_2964, varData_2965, {
                id: "trunk:outfits",
                label: "Outfits",
                event: "np-police:vehicle:outfits",
                parameters: {},
                isEnabled: function (param_1_1) {
                  if (!param_1_1) {
                    return false;
                  }
                  if (!IsEntityAVehicle(param_1_1)) {
                    return false;
                  }
                  if (IsPedInAnyVehicle(PlayerPedId(), false)) {
                    return false;
                  }
                  var varData_2966 = GetVehicleClass(param_1_1) === 18 || GetVehicleClass(param_1_1) === 13;
                  var varData_2967 = globalThis.exports.isPed.isPed("myjob");
                  return varData_2966 && (varData_2967 === "police" || varData_2967 === "dib" || varData_2967 === "ems" || varData_2967 === "doc");
                }
              }], {
                distance: {
                  draw: 8,
                  use: 3
                },
                isToggled: true,
                offset: function (param_1_1) {
                  var modelHash = GetEntityModel(param_1_1);
                  var varData_2968 = handleAction_359(GetModelDimensions(modelHash), 2);
                  var varData_2969 = varData_2968[0];
                  var varData_2970 = varData_2968[1];
                  var itemList_11 = [0, -varData_2970[1] + varData_2970[1] / 10, (varData_2970[2] + varData_2969[2]) / 4];
                  var varData_2971 = handleAction_359(handleAction_272(param_1_1), 2);
                  var varData_2972 = varData_2971[0];
                  var varData_2973 = varData_2971[1];
                  var varData_2974 = itemList_11[1];
                  if (varData_2973) {
                    varData_2974 = varData_2970[1] - varData_2970[1] / 10;
                  }
                  return [itemList_11[0], varData_2974, itemList_11[2]];
                },
                isEnabled: function () {
                  var varData_2975 = handleAction_348(function (param_1_1) {
                    var varData_2976;
                    return handleAction_362(this, function (param_1_2) {
                      if (!param_1_1) {
                        return [2, false];
                      }
                      if (IsPedInAnyVehicle(PlayerPedId(), false)) {
                        return [2, false];
                      }
                      if (!handleAction_276(param_1_1)) {
                        return [2, false];
                      }
                      if (varData_1432.Sync["np-flags"].GetPedFlags(PlayerPedId())?.isInTrunk) {
                        return [2, false];
                      }
                      if (handleAction_275(param_1_1)) {
                        return [2, true];
                      }
                      varData_2976 = GetVehicleDoorLockStatus(param_1_1);
                      return [2, varData_2976 == 1 || varData_2976 == 0 || varData_2976 == 4];
                    });
                  });
                  return function (param_1_1) {
                    return varData_2975.apply(this, arguments);
                  };
                }()
              });
              varData_1872.addVehicleInteraction("vehicle:outfits:heli", [{
                id: "trunk:outfits:heli",
                label: "Outfits",
                event: "np-police:vehicle:outfits",
                parameters: {}
              }], {
                distance: {
                  draw: 8,
                  use: 5
                },
                isToggled: true,
                isEnabled: function (param_1_1) {
                  if (!param_1_1) {
                    return false;
                  }
                  if (!IsEntityAVehicle(param_1_1)) {
                    return false;
                  }
                  var varData_2977 = GetVehicleClass(param_1_1) === 15 || GetVehicleClass(param_1_1) === 18 && IsThisModelAHeli(GetEntityModel(param_1_1));
                  if (!varData_2977) {
                    return false;
                  }
                  var varData_2978 = globalThis.exports.isPed.isPed("myjob");
                  return varData_2978 === "police" || varData_2978 === "dib" || varData_2978 === "ems" || varData_2978 === "doc";
                }
              });
              varData_1872.addVehicleInteraction("trunk-close", [{
                id: "trunk-close",
                label: "Close Trunk",
                eventSDK: "inventory:closeTrunk",
                parameters: {}
              }], {
                distance: {
                  draw: 4,
                  use: 3
                },
                isToggled: true,
                offset: function (param_1_1) {
                  var modelHash = GetEntityModel(param_1_1);
                  var varData_2979 = handleAction_359(GetModelDimensions(modelHash), 2);
                  var varData_2980 = varData_2979[0];
                  var varData_2981 = varData_2979[1];
                  var itemList_11 = [0, -varData_2981[1] + varData_2981[1] / 10, (varData_2981[2] + varData_2980[2]) / 4];
                  var varData_2982 = handleAction_359(handleAction_272(param_1_1), 2);
                  var varData_2983 = varData_2982[0];
                  var varData_2984 = varData_2982[1];
                  var varData_2985 = itemList_11[1];
                  if (varData_2984) {
                    varData_2985 = varData_2981[1] - varData_2981[1] / 10;
                  }
                  return [itemList_11[0], varData_2985, itemList_11[2]];
                },
                isEnabled: function () {
                  var varData_2986 = handleAction_348(function (param_1_1) {
                    return handleAction_362(this, function (param_1_2) {
                      if (!param_1_1) {
                        return [2, false];
                      }
                      if (!handleAction_276(param_1_1)) {
                        return [2, false];
                      }
                      return [2, handleAction_275(param_1_1)];
                    });
                  });
                  return function (param_1_1) {
                    return varData_2986.apply(this, arguments);
                  };
                }()
              });
              return [2];
          }
        });
      });
      return function _0x35d366() {
        return varData_2959.apply(this, arguments);
      };
    }();
    varData_1432.Sync("SetInventoryDisabled", function (_0x10c4da = false) {
      isDisabled_17 = _0x10c4da;
    });
    varData_1583.register("close", handleAction_348(function () {
      return handleAction_362(this, function (param_1) {
        varData_1490.debug("Closing Inventory");
        varData_1432.Sync.focusmanager.SetUIFocus(false, false);
        varData_1482.emit("inventory:onClose");
        return [2];
      });
    }));
    varData_1583.register("updateSettings", function () {
      var varData_2987 = handleAction_348(function (param_1) {
        return handleAction_362(this, function (param_1_1) {
          SetResourceKvpInt("inventory:holdToDrag", param_1.holdToDrag ? 1 : 0);
          SetResourceKvpInt("inventory:shiftQuickMove", param_1.shiftQuickMove ? 1 : 0);
          SetResourceKvpInt("inventory:descriptionCopying", param_1.descriptionCopying ? 1 : 0);
          SetResourceKvpInt("inventory:updateSecondaryInvOnSubscription", param_1.updateSecondaryInvOnSubscription ? 1 : 0);
          SetResourceKvpInt("inventory:equipNotifications", param_1.equipNotifications ? 1 : 0);
          return [2];
        });
      });
      return function (param_1) {
        return varData_2987.apply(this, arguments);
      };
    }());
    var varData_2988 = null;
    var varData_2989 = function () {
      var varData_2990 = handleAction_348(function (param_1, param_2) {
        var varData_2991;
        var varData_2992;
        var varData_2993;
        var varData_2994;
        var varData_2995;
        var varData_2996;
        return handleAction_362(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2991 = param_2 ?? varData_1432.Sync.isPed.isPed("phone_number");
              varData_2992 = "N/A";
              if (varData_2991 && varData_2991 !== -1) {
                varData_2993 = varData_2991.toString();
                varData_2992 = `${varData_2993.substr(0, 3)}-${varData_2993.substr(3, 3)}-${varData_2993.substr(6, 4)}`;
              }
              if (param_2 !== undefined) {
                return [3, 2];
              }
              varData_2994 = varData_1432.Sync.isPed.isPed("firstname");
              varData_2995 = varData_1432.Sync.isPed.isPed("lastname");
              return [4, varData_1432.Sync.apartments.getMyApartmentNumber()];
            case 1:
              varData_2996 = param_1_1.sent();
              varData_1490.debug("Phone:", varData_2991);
              varData_2988 = {
                id: param_1.toString(),
                name: `${varData_2994} ${varData_2995}`,
                cash: 0,
                personalVehicle: "N/A",
                home: `Little Seoul Apartments - ${varData_2996 ?? "N/A"}`
              };
              param_1_1.label = 2;
            case 2:
              return [2, handleAction_358(handleAction_356({}, varData_2988), {
                phoneFormatted: varData_2992,
                phone: `${varData_2991}`
              })];
          }
        });
      });
      return function _0x1f50ff(param_1, param_2) {
        return varData_2990.apply(this, arguments);
      };
    }();
    var varData_2997 = function () {
      var varData_2998 = handleAction_348(function (param_1, param_2) {
        var varData_2999;
        var varData_3000;
        var varData_3001;
        return handleAction_362(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2999 = varData_1583.execute;
              varData_3000 = ["setState"];
              varData_3001 = {
                init: true,
                serverHash: GetConvar("serverHash", ""),
                serverId: param_1
              };
              return [4, varData_2989(param_2)];
            case 1:
              varData_2999.apply(varData_1583, varData_3000.concat([(varData_3001.character = param_1_1.sent(), varData_3001.settings = {
                holdToDrag: (GetResourceKvpInt("inventory:holdToDrag") ?? 1) === 1,
                shiftQuickMove: (GetResourceKvpInt("inventory:shiftQuickMove") ?? 1) === 1,
                descriptionCopying: (GetResourceKvpInt("inventory:descriptionCopying") ?? 0) === 1,
                updateSecondaryInvOnSubscription: (GetResourceKvpInt("inventory:updateSecondaryInvOnSubscription") ?? 0) === 1,
                equipNotifications: (GetResourceKvpInt("inventory:equipNotifications") ?? 0) === 1
              }, varData_3001)]));
              return [2];
          }
        });
      });
      return function _0x1ba66b(param_1, param_2) {
        return varData_2998.apply(this, arguments);
      };
    }();
    varData_1482.onNet("phone:numberChanged", function () {
      var varData_3002 = handleAction_348(function (param_1, param_2) {
        var varData_3003;
        var varData_3004;
        var varData_3005;
        var varData_3006;
        var varData_3007;
        return handleAction_362(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_3003 = varData_1432.Sync.isPed.isPed("cid");
              varData_3004 = varData_1583.execute;
              varData_3005 = ["setState"];
              varData_3006 = {};
              varData_3007 = [{}];
              return [4, varData_2989(varData_3003, param_1)];
            case 1:
              varData_3004.apply(varData_1583, varData_3005.concat([(varData_3006.character = handleAction_356.apply(undefined, varData_3007.concat([param_1_1.sent()])), varData_3006)]));
              return [2];
          }
        });
      });
      return function (param_1, param_2) {
        return varData_3002.apply(this, arguments);
      };
    }());
    on("np-spawn:characterSpawned", function (param_1) {
      varData_2997(GetPlayerServerId(PlayerId()), param_1);
      var varData_3008 = varData_1432.Sync.config.GetMiscConfig("spawn.apartments.only") ?? true;
      if (varData_3008) {
        isDisabled_18 = true;
      }
    });
    onNet("temp:setBypassed", function () {
      isDisabled_18 = false;
    });
    on("inventory:hotreload", function () {
      var varData_3009 = varData_1432.Sync.isPed.isPed("cid");
      varData_1490.debug("Hot reloading inventory");
      varData_2997(GetPlayerServerId(PlayerId()), varData_3009);
    });
    varData_1482.onNet("inventory:itemGiven", function () {
      var varData_3010 = handleAction_348(function (param_1, param_2, param_3) {
        return handleAction_362(this, function (param_1_1) {
          varData_1583.execute("inventory:sendNotification", param_1.itemId, param_1.variant, param_2, param_3, "Added");
          return [2];
        });
      });
      return function (param_1, param_2, param_3) {
        return varData_3010.apply(this, arguments);
      };
    }());
    varData_1482.onNet("inventory:itemConsumed", function () {
      var varData_3011 = handleAction_348(function (param_1, param_2, param_3, param_4) {
        return handleAction_362(this, function (param_1_1) {
          varData_1583.execute("inventory:sendNotification", param_1, param_2, param_3, param_4, "Removed");
          return [2];
        });
      });
      return function (param_1, param_2, param_3, param_4) {
        return varData_3011.apply(this, arguments);
      };
    }());
    var varData_3012 = null;
    varData_1482.on("inventory:weaponEquipped", function () {
      var varData_3013 = handleAction_348(function (param_1, param_2, param_3) {
        var varData_3014;
        return handleAction_362(this, function (param_1_1) {
          varData_3014 = (GetResourceKvpInt("inventory:equipNotifications") ?? 0) === 1;
          if (!varData_3014) {
            return [2];
          }
          varData_1583.execute("inventory:sendNotification", param_3.id, param_2.variant, {
            name: param_3.name,
            image: param_3.image
          }, 1, "Equipped");
          var varData_3015 = {
            weaponData: param_1,
            itemStack: param_2,
            item: param_3
          };
          varData_3012 = varData_3015;
          return [2];
        });
      });
      return function (param_1, param_2, param_3) {
        return varData_3013.apply(this, arguments);
      };
    }());
    varData_1482.on("inventory:weaponUnequipped", handleAction_348(function () {
      var varData_3016;
      var varData_3017;
      var varData_3018;
      var varData_3019;
      return handleAction_362(this, function (param_1) {
        if (!varData_3012) {
          return [2];
        }
        varData_3016 = (GetResourceKvpInt("inventory:equipNotifications") ?? 0) === 1;
        if (!varData_3016) {
          varData_3012 = null;
          return [2];
        }
        varData_3017 = varData_3012.weaponData;
        varData_3018 = varData_3012.itemStack;
        varData_3019 = varData_3012.item;
        varData_1583.execute("inventory:sendNotification", varData_3019.id, varData_3018.variant, {
          name: varData_3019.name,
          image: varData_3019.image
        }, 1, "Unequipped");
        varData_3012 = null;
        return [2];
      });
    }));
    varData_1583.register("inventory:getWounds", handleAction_348(function () {
      return handleAction_362(this, function (param_1) {
        return [2, varData_1432.Sync.wounds.getState()];
      });
    }));
    var itemList_11 = ["split", "splitStack", "stack", "swap", "move"];
    varData_1583.register("inventory:itemStackChanged", function () {
      var varData_3020 = handleAction_348(function (param_1) {
        var varData_3021;
        return handleAction_362(this, function (param_1_1) {
          varData_3021 = handleAction_367();
          if (itemList_11.includes(param_1.id) && (varData_3021.includes(param_1.fromInventoryId) || param_1.toInventoryId && varData_3021.includes(param_1.toInventoryId))) {
            varData_1482.emit("inventory:playerInventoryChanged", param_1);
          }
          return [2];
        });
      });
      return function (param_1) {
        return varData_3020.apply(this, arguments);
      };
    }());
    varData_1583.register("inventory:isMobilePhoneBlocked", handleAction_348(function () {
      var varData_3022;
      var varData_3023;
      return handleAction_362(this, function (param_1) {
        varData_3022 = GetResourceState("phone") === "started";
        if (!varData_3022 || handleAction_285("mobilephone")) {
          return [2, true];
        }
        varData_3023 = varData_1432.Sync.phone.isPhoneOpeningBlocked();
        return [2, varData_3023];
      });
    }));
    varData_2958();
  })();
})();