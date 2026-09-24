import { m as _0x3e93ba, c as _0x4e0a94, J as _0x15b505, o as _0xee901f, e as _0x463281, f as _0x4d0da3, j as _0xff4296, k as _0x15aaf2, l as _0x2f14c4, y as _0x5182d1, t as _0xd5bfea, M as _0x1d7f2d, w as _0x30cc0f, x as _0x4334ad, S as _0x107257, ag as _0x9357bc, a as _0x195812 } from "./vendor.js";
import { a as _0x1b9596, b as _0x360c3a } from "./vite.js";
import { N } from "./v-packages.js";
import "./commonjsHelpers.js";
const de = "_container_1a7q9_1";
const ve = "_box_1a7q9_11";
const _e = "_image_1a7q9_22";
const fe = "_image2_1a7q9_32";
const he = "_image3_1a7q9_35";
const $e = "_image4_1a7q9_38";
const ge = "_image5_1a7q9_41";
const Ce = "_tag_1a7q9_44";
const me = "_button_1a7q9_81";
const xe = "_price_1a7q9_98";
const be = "_purchased_1a7q9_102";
const q = {
  container: de,
  box: ve,
  image: _e,
  image2: fe,
  image3: he,
  image4: $e,
  image5: ge,
  tag: Ce,
  button: me,
  price: xe,
  purchased: be
};
const we = "_container_1fua7_1";
const ye = "_divider_1fua7_12";
const Se = "_buttons_1fua7_39";
const qe = "_button_1fua7_39";
const Le = "_active_1fua7_62";
const Me = "_sequenceTitle_1fua7_77";
const pe = "_sequenceText_1fua7_86";
const Pe = "_attemptBox_1fua7_99";
const Te = "_attempts_1fua7_117";
const x = {
  container: we,
  divider: ye,
  buttons: Se,
  button: qe,
  active: Le,
  sequenceTitle: Me,
  sequenceText: pe,
  attemptBox: Pe,
  attempts: Te
};
const Ee = _0xd5bfea("<div><div class=\"flex flex-row items-center justify-between\"><div>010101010101010101010</div><div class=\"flex flex-col items-center justify-center\"><h1>Try to get access</h1><p>Enter the sequence below to get access to the plans</div><div>010101010101010101010</div></div><div></div><div class=\"flex w-full flex-row items-center justify-between\"><div class=\"item-start flex flex-col justify-start gap-[1vh]\"><div>// SEQUENCE REQUIRED TO ACCESS</div><div class=\"flex flex-row items-center justify-between\"></div></div><div class=\"flex flex-row items-center justify-end gap-[1vh]\"><div><h1>Attemps per day</h1><p>Resets every 24h</div><div>");
const z = _0xd5bfea("<div>");
const He = () => {
  const {
    setMinigameResult: _0x3a368b,
    setShowPlans: _0x5d115f,
    data: _0x2595a5,
    fetchData: _0x9bddd5
  } = U();
  const _0x24f5ce = () => {
    const _0x53b6bb = [..."QWERTYUIOPASDFGHJKLZXCVBNM1234567890"];
    const _0x5d0c60 = [];
    for (let _0x2bb062 = 0; _0x2bb062 < 8; _0x2bb062++) {
      let _0x5c9783 = "";
      for (let _0x1c162e = 0; _0x1c162e < 2; _0x1c162e++) {
        const _0x434f2d = Math.floor(Math.random() * _0x53b6bb.length);
        _0x5c9783 += _0x53b6bb[_0x434f2d];
      }
      _0x5d0c60.push(_0x5c9783);
    }
    return _0x5d0c60;
  };
  const _0x1a66e5 = () => {
    const _0x37cb18 = [..."QWERTYUIOPASDFGHJKLZXCVBNM1234567890"];
    const _0x5a09b7 = [];
    for (let _0x30794a = 0; _0x30794a < 17; _0x30794a++) {
      let _0x34076f = "";
      for (let _0x363d98 = 0; _0x363d98 < 2; _0x363d98++) {
        const _0x3237ae = Math.floor(Math.random() * _0x37cb18.length);
        _0x34076f += _0x37cb18[_0x3237ae];
      }
      _0x5a09b7.push(_0x34076f);
    }
    return _0x5a09b7;
  };
  const [_0x3e8866, _0x120d01] = _0x4e0a94(_0x24f5ce());
  const [_0x392f55, _0x5257e8] = _0x4e0a94([]);
  const [_0x3c490c, _0x1add21] = _0x4e0a94([]);
  const _0x302171 = () => {
    const _0x50dc59 = [..._0x1a66e5(), ..._0x3e8866].sort(() => Math.random() - 0.5);
    _0x1add21(_0x50dc59);
  };
  let _0x3f7ac0;
  _0x15b505(() => {
    _0x302171();
    _0x3f7ac0 = setInterval(() => {
      _0x302171();
    }, 1000);
  });
  _0xee901f(() => {
    clearInterval(_0x3f7ac0);
  });
  const _0x16c911 = async () => {
    _0x5257e8([]);
    _0x3a368b("success");
    clearInterval(_0x3f7ac0);
    await N.execute("noid:successMinigame");
    await _0x9bddd5(true);
    setTimeout(() => {
      _0x3a368b(null);
      _0x120d01(_0x24f5ce());
      _0x5d115f(true);
    }, 2000);
  };
  const _0x4a8f3b = async () => {
    _0x5257e8([]);
    _0x3a368b("fail");
    clearInterval(_0x3f7ac0);
    await N.execute("noid:failMinigame");
    await _0x9bddd5();
    setTimeout(() => {
      _0x3a368b(null);
      _0x120d01(_0x24f5ce());
    }, 2000);
  };
  return (() => {
    const _0x15e003 = Ee();
    const _0x49e0af = _0x15e003.firstChild;
    const _0x5815ac = _0x49e0af.firstChild;
    const _0x2badb3 = _0x5815ac.nextSibling;
    const _0x1f5387 = _0x2badb3.nextSibling;
    const _0x4f464c = _0x49e0af.nextSibling;
    const _0x37a574 = _0x4f464c.nextSibling;
    const _0x42bda7 = _0x37a574.firstChild;
    const _0x247641 = _0x42bda7.firstChild;
    const _0x4ef511 = _0x247641.nextSibling;
    const _0x2fe2f7 = _0x42bda7.nextSibling;
    const _0x2e0419 = _0x2fe2f7.firstChild;
    const _0x586a4d = _0x2e0419.nextSibling;
    _0x463281(_0x4f464c, _0x4d0da3(_0x5182d1, {
      each: _0x3c490c,
      children: (_0x4703ac, _0x5856d2) => (() => {
        const _0x330317 = z();
        _0x330317.$$click = () => {
          if (_0x3e8866[_0x392f55.length] !== _0x4703ac) {
            _0x4a8f3b();
            return;
          } else if (_0x392f55.length === _0x3e8866.length - 1) {
            _0x16c911();
            return;
          }
          _0x5257e8([..._0x392f55, _0x4703ac]);
        };
        _0x463281(_0x330317, _0x4703ac);
        _0xff4296(_0x54d66a => {
          const _0x17dc7c = x.button;
          const _0x302b45 = {
            [x.active]: _0x392f55.includes(_0x4703ac)
          };
          if (_0x17dc7c !== _0x54d66a._v$8) {
            _0x15aaf2(_0x330317, _0x54d66a._v$8 = _0x17dc7c);
          }
          _0x54d66a._v$9 = _0x2f14c4(_0x330317, _0x302b45, _0x54d66a._v$9);
          return _0x54d66a;
        }, {
          _v$8: undefined,
          _v$9: undefined
        });
        return _0x330317;
      })()
    }));
    _0x463281(_0x4ef511, _0x4d0da3(_0x5182d1, {
      each: _0x3e8866,
      children: _0x15b6ca => (() => {
        const _0x2a5db4 = z();
        _0x463281(_0x2a5db4, _0x15b6ca);
        _0xff4296(_0x10f2cb => {
          const _0x3c1562 = x.sequenceText;
          const _0x927fbb = {
            [x.active]: _0x392f55.includes(_0x15b6ca)
          };
          if (_0x3c1562 !== _0x10f2cb._v$10) {
            _0x15aaf2(_0x2a5db4, _0x10f2cb._v$10 = _0x3c1562);
          }
          _0x10f2cb._v$11 = _0x2f14c4(_0x2a5db4, _0x927fbb, _0x10f2cb._v$11);
          return _0x10f2cb;
        }, {
          _v$10: undefined,
          _v$11: undefined
        });
        return _0x2a5db4;
      })()
    }));
    _0x463281(_0x586a4d, () => _0x2595a5.attempts);
    _0xff4296(_0x3eb5d3 => {
      const _0x5cff92 = x.container;
      const _0x4e3ef2 = x.divider;
      const _0x3251cc = x.divider;
      const _0x2d8ae6 = x.buttons;
      const _0x1de246 = x.sequenceTitle;
      const _0xe738a0 = x.attempts;
      const _0x247cec = x.attemptBox;
      if (_0x5cff92 !== _0x3eb5d3._v$) {
        _0x15aaf2(_0x15e003, _0x3eb5d3._v$ = _0x5cff92);
      }
      if (_0x4e3ef2 !== _0x3eb5d3._v$2) {
        _0x15aaf2(_0x5815ac, _0x3eb5d3._v$2 = _0x4e3ef2);
      }
      if (_0x3251cc !== _0x3eb5d3._v$3) {
        _0x15aaf2(_0x1f5387, _0x3eb5d3._v$3 = _0x3251cc);
      }
      if (_0x2d8ae6 !== _0x3eb5d3._v$4) {
        _0x15aaf2(_0x4f464c, _0x3eb5d3._v$4 = _0x2d8ae6);
      }
      if (_0x1de246 !== _0x3eb5d3._v$5) {
        _0x15aaf2(_0x247641, _0x3eb5d3._v$5 = _0x1de246);
      }
      if (_0xe738a0 !== _0x3eb5d3._v$6) {
        _0x15aaf2(_0x2e0419, _0x3eb5d3._v$6 = _0xe738a0);
      }
      if (_0x247cec !== _0x3eb5d3._v$7) {
        _0x15aaf2(_0x586a4d, _0x3eb5d3._v$7 = _0x247cec);
      }
      return _0x3eb5d3;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return _0x15e003;
  })();
};
_0x3e93ba(["click"]);
const ke = "_container_153ys_1";
const De = "_bar_153ys_11";
const Ie = "_error_153ys_31";
const Y = {
  container: ke,
  bar: De,
  error: Ie
};
const Ne = _0xd5bfea("<svg class=\"mb-[1vh]\" width=\"3.14vh\" height=\"3.14vh\" viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.74979 0.0361716C6.37953 0.213697 4.98256 0.744215 3.79618 1.53763C3.15494 1.96643 1.98405 3.13716 1.55494 3.77843C0.914371 4.73589 0.448912 5.81413 0.164546 6.99974C0.068317 7.4007 0.0493105 8.00749 0.0264496 11.4013L0 15.3379H2.12673H4.25353L4.27819 11.7335C4.30583 7.68911 4.2934 7.80385 4.81269 6.80374C5.13394 6.18506 5.87666 5.39795 6.46592 5.05167C7.1683 4.63895 7.72075 4.48833 8.64695 4.45711C9.63542 4.42382 10.1586 4.52421 10.9065 4.89089C11.5698 5.21604 12.3674 6.00288 12.7209 6.68083C13.1748 7.55125 13.2324 7.92896 13.2324 10.0334V11.883H15.399H17.5657L17.5337 9.74036C17.5064 7.89946 17.4827 7.51351 17.3661 6.99974C16.9458 5.14808 16.1135 3.65844 14.785 2.38022C13.1399 0.797366 11.0621 -0.0260155 8.77986 0.000626629C8.32298 0.00594177 7.85944 0.0219536 7.74979 0.0361716ZM11.9365 15.032C11.2807 15.2409 10.727 15.6909 10.4545 16.2365C10.1725 16.8011 10.1675 16.9577 10.1885 24.739C10.2082 32.0156 10.2116 32.1871 10.3419 32.4909C10.5485 32.9725 10.854 33.3621 11.21 33.5978C11.8702 34.035 11.1885 34.0108 22.2738 33.9916L32.3386 33.9741L32.7125 33.7904C33.1535 33.5738 33.6461 33.0722 33.8526 32.6293L34 32.3131V24.5397V16.7663L33.7752 16.3519C33.4987 15.8421 33.0219 15.386 32.5192 15.1505L32.1392 14.9724L22.1708 14.9598C14.2473 14.9498 12.1478 14.9646 11.9365 15.032ZM23.3019 20.4784C23.8175 20.7137 24.2082 21.1019 24.4393 21.6086C24.5946 21.9492 24.625 22.1065 24.6271 22.5797C24.6293 23.0708 24.6053 23.1922 24.4428 23.5099C24.34 23.7109 24.0792 24.0547 23.8632 24.2739L23.4706 24.6726L23.7999 26.6325C23.9811 27.7105 24.1297 28.6149 24.1303 28.6423C24.1308 28.6698 23.2647 28.6922 22.2057 28.6922H20.2801L20.317 28.5094C20.3373 28.409 20.5275 27.5046 20.7395 26.4997L21.1252 24.6726L20.985 24.5729C20.603 24.3013 20.3934 24.0579 20.1951 23.6551C19.9957 23.2502 19.9777 23.1614 19.9778 22.5811C19.9779 21.8383 20.098 21.5084 20.5447 21.0238C21.0749 20.4488 21.5885 20.2424 22.4047 20.2763C22.7756 20.2917 23.0069 20.3438 23.3019 20.4784Z\" fill=\"#00F8B9\">");
const Re = _0xd5bfea("<svg class=\"mb-[1vh]\" width=\"2.4vh\" height=\"3.14vh\" viewBox=\"0 0 26 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.3073 0.128694C7.64028 0.763766 4.60681 3.29582 3.43132 6.70291C2.97849 8.01543 2.84795 9.06188 2.84531 11.4019L2.84375 12.7468H1.65208H0.460417L0.230208 12.9726L0 13.1984V22.3978C0 31.1128 0.00649987 31.6176 0.123432 31.985C0.414781 32.9006 1.12078 33.5931 2.0542 33.8789C2.42965 33.9939 2.98133 34 13 34C23.0187 34 23.5704 33.9939 23.9458 33.8789C24.8792 33.5931 25.5852 32.9006 25.8766 31.985C25.9935 31.6176 26 31.1128 26 22.3978V13.1984L25.7698 12.9726L25.5396 12.7468H24.3479H23.1562L23.1547 11.4019C23.1521 9.06188 23.0215 8.01543 22.5687 6.70291C22.0749 5.27184 21.3397 4.10809 20.2245 2.99276C18.6786 1.44639 16.8137 0.489069 14.6366 0.123978C13.6407 -0.0430587 12.2879 -0.0411326 11.3073 0.128694ZM14.4179 4.44927C14.6994 4.51821 15.2496 4.73074 15.6406 4.92149C16.2704 5.22873 16.4288 5.3445 17.0286 5.9358C17.7767 6.67322 18.1565 7.25403 18.4427 8.09765C18.7061 8.87439 18.7541 9.33758 18.7547 11.103L18.7552 12.7468H13H7.24479L7.24533 11.103C7.24587 9.33758 7.29395 8.87439 7.55733 8.09765C7.84435 7.25131 8.22304 6.67322 8.97135 5.93879C9.5244 5.39604 9.76009 5.21764 10.2578 4.96486C11.6241 4.27101 12.9963 4.10092 14.4179 4.44927ZM13.8416 18.5669C14.3395 18.7333 14.6968 18.953 15.0373 19.3022C15.5935 19.8725 15.8438 20.466 15.8438 21.2147C15.8438 22.0396 15.6073 22.6126 15.0203 23.2101L14.6914 23.5449L14.9191 25.5398C15.0442 26.637 15.1324 27.6297 15.1151 27.7458C15.0961 27.8723 15.0029 28.0236 14.8829 28.1227L14.6823 28.2882H13H11.3177L11.1171 28.1227C10.9971 28.0236 10.9039 27.8723 10.8849 27.7458C10.8676 27.6297 10.9558 26.637 11.0809 25.5398L11.3086 23.5449L10.9797 23.2101C10.3927 22.6126 10.1562 22.0396 10.1562 21.2147C10.1562 20.0149 10.8905 19.0298 12.1198 18.5803C12.5267 18.4315 13.4159 18.4246 13.8416 18.5669Z\" fill=\"#F86969\">");
const Be = _0xd5bfea("<div><div><h1>ACCESS </h1><p>");
const Ae = () => {
  const {
    minigameResult: _0x4fa690,
    data: _0x2b9b3a
  } = U();
  return (() => {
    const _0x29e633 = Be();
    const _0x57cb79 = _0x29e633.firstChild;
    const _0x2b27f4 = _0x57cb79.firstChild;
    _0x2b27f4.firstChild;
    const _0x1a1ccd = _0x2b27f4.nextSibling;
    _0x463281(_0x57cb79, _0x4d0da3(_0x30cc0f, {
      get children() {
        return [_0x4d0da3(_0x1d7f2d, {
          get when() {
            return _0x4fa690() === "success";
          },
          get children() {
            return Ne();
          }
        }), _0x4d0da3(_0x1d7f2d, {
          get when() {
            return _0x4fa690() === "fail" || _0x2b9b3a.attempts <= 0;
          },
          get children() {
            return Re();
          }
        })];
      }
    }), _0x2b27f4);
    _0x463281(_0x2b27f4, () => _0x4fa690() === "success" ? "GRANTED" : "DENIED", null);
    _0x463281(_0x1a1ccd, (() => {
      const _0x56ecc2 = _0x4334ad(() => _0x2b9b3a.attempts <= 0);
      return () => _0x56ecc2() ? "You have no more attempts left. Wait for the next day." : "Access to the system has been " + (_0x4fa690() === "success" ? "granted" : "denied") + ".";
    })());
    _0xff4296(_0x2eb29b => {
      const _0x2e31bb = Y.container;
      const _0x26c6d1 = Y.bar;
      const _0x66102 = {
        [Y.error]: _0x4fa690() === "fail" || _0x2b9b3a.attempts <= 0
      };
      if (_0x2e31bb !== _0x2eb29b._v$) {
        _0x15aaf2(_0x29e633, _0x2eb29b._v$ = _0x2e31bb);
      }
      if (_0x26c6d1 !== _0x2eb29b._v$2) {
        _0x15aaf2(_0x57cb79, _0x2eb29b._v$2 = _0x26c6d1);
      }
      _0x2eb29b._v$3 = _0x2f14c4(_0x2b27f4, _0x66102, _0x2eb29b._v$3);
      return _0x2eb29b;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x29e633;
  })();
};
const je = _0xd5bfea("<div><div></div><div>Tier </div><h1>Security</h1><p>It will protect your device from being hacked. Your PC will be <!>x more difficult to hack.</p><div class=\"flex w-full flex-row items-center justify-center gap-[1vh]\"><div></div><div> BUTC");
const ee = _0xd5bfea("<div class=\"items-between flex w-full flex-row justify-center gap-[1vh]\">");
const Ue = _0xd5bfea("<div>");
const te = _0x5b05a7 => {
  const _0x3ef63c = (160 - _0x5b05a7 * 37.508) % 360;
  const _0x137013 = 100;
  const _0x5ad4d8 = 50;
  const _0x357b5e = "hsla(" + _0x3ef63c + ", " + _0x137013 + "%, " + _0x5ad4d8 + "%, 1)";
  const _0x3cc8f1 = "hsla(" + _0x3ef63c + ", " + _0x137013 + "%, " + _0x5ad4d8 + "%, 0.15)";
  return {
    textColor: _0x357b5e,
    backgroundColor: _0x3cc8f1
  };
};
const ne = _0xa4b650 => {
  const {
    data: _0x5eff31,
    prices: _0x42d2de,
    fetchData: _0x293a49
  } = U();
  return (() => {
    const _0x19d3c2 = je();
    const _0x1635a2 = _0x19d3c2.firstChild;
    const _0x420beb = _0x1635a2.nextSibling;
    _0x420beb.firstChild;
    const _0x2e945d = _0x420beb.nextSibling;
    const _0x5922b5 = _0x2e945d.nextSibling;
    const _0x55fc87 = _0x5922b5.firstChild;
    const _0xa7fe44 = _0x55fc87.nextSibling;
    _0xa7fe44.nextSibling;
    const _0x282c8d = _0x5922b5.nextSibling;
    const _0x22e357 = _0x282c8d.firstChild;
    const _0x429dc8 = _0x22e357.nextSibling;
    const _0x560bf0 = _0x429dc8.firstChild;
    _0x463281(_0x420beb, () => _0xa4b650.index + 1, null);
    _0x463281(_0x5922b5, () => _0xa4b650.index + 1, _0xa7fe44);
    _0x22e357.$$click = async () => {
      if (await N.execute("noid:buyPlan", _0xa4b650.index)) {
        _0x360c3a("noid", "You've successfully purchased a plan!");
        await _0x293a49();
      } else {
        _0x360c3a("noid", "You don't have enough BUTCOIN to purchase this plan.");
      }
    };
    _0x463281(_0x22e357, () => _0x5eff31.tier >= _0xa4b650.index + 1 ? "Purchased" : "Purchase");
    _0x463281(_0x429dc8, () => _0x42d2de[_0xa4b650.index], _0x560bf0);
    _0xff4296(_0xf5f817 => {
      const _0x4a8cca = q.box;
      const _0x4d009b = q.image;
      const _0x19307f = {
        [q["image" + (_0xa4b650.index + 1)]]: true
      };
      const _0x39f0b2 = q.tag;
      const _0x4b159e = te(_0xa4b650.index).textColor;
      const _0x52c7b6 = te(_0xa4b650.index).backgroundColor;
      const _0x9f4970 = q.button;
      const _0x1b130d = {
        [q.purchased]: _0x5eff31.tier >= _0xa4b650.index + 1
      };
      const _0x3b9da6 = q.button;
      const _0x23e838 = {
        [q.price]: true
      };
      if (_0x4a8cca !== _0xf5f817._v$) {
        _0x15aaf2(_0x19d3c2, _0xf5f817._v$ = _0x4a8cca);
      }
      if (_0x4d009b !== _0xf5f817._v$2) {
        _0x15aaf2(_0x1635a2, _0xf5f817._v$2 = _0x4d009b);
      }
      _0xf5f817._v$3 = _0x2f14c4(_0x1635a2, _0x19307f, _0xf5f817._v$3);
      if (_0x39f0b2 !== _0xf5f817._v$4) {
        _0x15aaf2(_0x420beb, _0xf5f817._v$4 = _0x39f0b2);
      }
      if (_0x4b159e !== _0xf5f817._v$5) {
        if ((_0xf5f817._v$5 = _0x4b159e) != null) {
          _0x420beb.style.setProperty("color", _0x4b159e);
        } else {
          _0x420beb.style.removeProperty("color");
        }
      }
      if (_0x52c7b6 !== _0xf5f817._v$6) {
        if ((_0xf5f817._v$6 = _0x52c7b6) != null) {
          _0x420beb.style.setProperty("background-color", _0x52c7b6);
        } else {
          _0x420beb.style.removeProperty("background-color");
        }
      }
      if (_0x9f4970 !== _0xf5f817._v$7) {
        _0x15aaf2(_0x22e357, _0xf5f817._v$7 = _0x9f4970);
      }
      _0xf5f817._v$8 = _0x2f14c4(_0x22e357, _0x1b130d, _0xf5f817._v$8);
      if (_0x3b9da6 !== _0xf5f817._v$9) {
        _0x15aaf2(_0x429dc8, _0xf5f817._v$9 = _0x3b9da6);
      }
      _0xf5f817._v$10 = _0x2f14c4(_0x429dc8, _0x23e838, _0xf5f817._v$10);
      return _0xf5f817;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined
    });
    return _0x19d3c2;
  })();
};
const Ve = () => {
  const {
    minigameResult: _0x1cc439,
    showPlans: _0x431b3c,
    data: _0x242c0f,
    fetchData: _0x144bf6
  } = U();
  _0x15b505(async () => {
    await _0x144bf6();
  });
  return (() => {
    const _0x53fbd4 = Ue();
    _0x463281(_0x53fbd4, _0x4d0da3(_0x1b9596, {
      get name() {
        return Qe.name;
      }
    }), null);
    _0x463281(_0x53fbd4, _0x4d0da3(_0x107257, {
      get when() {
        return _0x431b3c();
      },
      get children() {
        return [(() => {
          const _0x28d957 = ee();
          _0x463281(_0x28d957, _0x4d0da3(_0x5182d1, {
            get each() {
              return Array(3);
            },
            children: (_0x3cf5b8, _0x42e2ee) => _0x4d0da3(ne, {
              get index() {
                return _0x42e2ee();
              }
            })
          }));
          return _0x28d957;
        })(), (() => {
          const _0x2ce875 = ee();
          _0x463281(_0x2ce875, _0x4d0da3(_0x5182d1, {
            get each() {
              return Array(2);
            },
            children: (_0x18e424, _0x254124) => _0x4d0da3(ne, {
              get index() {
                return _0x254124() + 3;
              }
            })
          }));
          return _0x2ce875;
        })()];
      }
    }), null);
    _0x463281(_0x53fbd4, _0x4d0da3(_0x107257, {
      get when() {
        return !_0x431b3c();
      },
      get children() {
        return [_0x4d0da3(He, {}), _0x4d0da3(_0x107257, {
          get when() {
            return _0x1cc439() !== null || _0x242c0f.attempts <= 0;
          },
          get children() {
            return _0x4d0da3(Ae, {});
          }
        })];
      }
    }), null);
    _0xff4296(() => _0x15aaf2(_0x53fbd4, q.container));
    return _0x53fbd4;
  })();
};
_0x3e93ba(["click"]);
const [Ze, Fe] = _0x9357bc(() => {
  const [_0x5d120e, _0x40db6a] = _0x195812(null);
  const [_0x5573f6, _0x5e26c9] = _0x195812(false);
  const [_0x49f100, _0x2032f4] = _0x4e0a94({});
  const [_0x582cd4, _0xf89773] = _0x4e0a94([]);
  return {
    minigameResult: _0x5d120e,
    setMinigameResult: _0x40db6a,
    showPlans: _0x5573f6,
    setShowPlans: _0x5e26c9,
    data: _0x49f100,
    setData: _0x2032f4,
    prices: _0x582cd4,
    setPrices: _0xf89773,
    fetchData: async _0x2f665d => {
      const _0xb08166 = await N.execute("noid:getData");
      _0x2032f4(_0xb08166);
      if (_0xb08166.has_access && !_0x2f665d) {
        _0x5e26c9(true);
      }
      const _0x24c3ae = await N.execute("noid:getPrices");
      _0xf89773(_0x24c3ae);
    }
  };
});
const U = () => Fe();
const Ye = () => _0x4d0da3(Ze, {
  get children() {
    return _0x4d0da3(Ve, {});
  }
});
const Oe = "" + new URL("noid-icon-49f9ca69.png", import.meta.url).href;
const Qe = {
  icon: Oe,
  enabled: true,
  onDock: false,
  name: "noid",
  label: "Noid",
  description: "Pay more for safer crypto security.",
  isEnabled: true,
  isLaptop: true,
  requiresVPN: true,
  requiresWifi: true,
  render: () => _0x4d0da3(Ye, {})
};
export { Qe as default };
