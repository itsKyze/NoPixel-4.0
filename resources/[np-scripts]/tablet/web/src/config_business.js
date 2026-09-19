import { x as _0x37502d, n as _0x22b068, j as _0x298ec8, t as _0x597401, m as _0x595374, a as _0x43e0bc, o as _0x4247a8, e as _0x1400a9, f as _0x57bb9d, k as _0x47d58b, l as _0x5b2b85, c as _0x5e60ce, J as _0x58e96e, y as _0x326d2c, S as _0x581a92, b as _0x3ef270, M as _0x340d2a, w as _0x245798, ag as _0x27ad8a } from "./vendor.js";
import { b as _0x7b6418, a as _0x539a59 } from "./vite.js";
import { U as _0x2bf316, N as _0x36ec84 } from "./v-packages.js";
import { T as _0x4b105b } from "./index_common.js";
import "./commonjsHelpers.js";
const Ce = "_container_dbkes_1";
const Se = "_main_dbkes_11";
const ke = "_red_dbkes_27";
const Me = "_image_dbkes_33";
const je = {
  container: Ce,
  main: Se,
  red: ke,
  image: Me
};
const He = "_container_1cjej_1";
const Le = "_red_1cjej_18";
const Pe = "_image_1cjej_24";
const Ae = "_circle_container_1cjej_63";
const Ie = "_button_container_1cjej_73";
const Te = "_button_1cjej_73";
const Ee = "_buy_button_1cjej_111";
const ze = "_price_1cjej_129";
const B = {
  container: He,
  red: Le,
  image: Pe,
  circle_container: Ae,
  button_container: Ie,
  button: Te,
  buy_button: Ee,
  price: ze
};
const Be = _0x597401("<svg class=\"pointer-events-none absolute\" height=\"300\" width=\"300\" viewBox=\"0 0 300 300\" xmlns=\"http://www.w3.org/2000/svg\"><circle stroke=\"rgba(255, 255, 255, 0.06)\" fill=\"transparent\" stroke-width=\"4\" r=\"112\" cx=\"150\" cy=\"150\"></circle><circle stroke=\"#00F8B9\" fill=\"transparent\" stroke-width=\"4\" r=\"112\" cx=\"150\" cy=\"150\">");
const Re = _0x44eeaa => {
  const _0x2b2df2 = Math.PI * 224;
  const _0x63068b = _0x37502d(() => _0x2b2df2 - _0x44eeaa.progress / 100 * _0x2b2df2);
  return (() => {
    const _0x2e350d = Be();
    const _0x524f4a = _0x2e350d.firstChild;
    const _0x4cba27 = _0x524f4a.nextSibling;
    _0x2e350d.style.setProperty("transform", "rotate(-90deg)");
    _0x2e350d.style.setProperty("transform-origin", "center");
    _0x22b068(_0x4cba27, "stroke-dasharray", _0x2b2df2 + " " + _0x2b2df2);
    _0x298ec8(() => _0x63068b().toString() != null ? _0x4cba27.style.setProperty("stroke-dashoffset", _0x63068b().toString()) : _0x4cba27.style.removeProperty("stroke-dashoffset"));
    return _0x2e350d;
  })();
};
const De = _0x597401("<div><svg width=\"15.83vh\" height=\"31.38vh\" viewBox=\"0 0 171 339\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M92.7095 278.233L36.1619 116.513H0.705185L57.2527 278.233H92.7095ZM170.303 338.5L113.755 176.78H78.2985L134.846 338.5H170.303ZM43.6953 0.5H8.23851L64.786 162.22H100.243L43.6953 0.5Z\" stroke=\"url(#paint0_radial_6723_966)\" stroke-opacity=\"0.55\"></path><defs><radialGradient id=\"paint0_radial_6723_966\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(85.504 169.5) rotate(116.382) scale(210.414 106.142)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00F8B9\" stop-opacity=\"0\"></svg><div class=\"flex flex-col items-center justify-center gap-[1vh]\"><div></div><h1>Scan Computers</h1><p>Scan computers to find their crypto addresses</p><div class=\"flex flex-col items-center justify-center\"><div><div><div><h1>Scan</div></div></div></div></div><svg class=\"scale-x-[-1]\" width=\"15.83vh\" height=\"31.38vh\" viewBox=\"0 0 171 339\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M92.7095 278.233L36.1619 116.513H0.705185L57.2527 278.233H92.7095ZM170.303 338.5L113.755 176.78H78.2985L134.846 338.5H170.303ZM43.6953 0.5H8.23851L64.786 162.22H100.243L43.6953 0.5Z\" stroke=\"url(#paint0_radial_6723_965)\" stroke-opacity=\"0.55\"></path><defs><radialGradient id=\"paint0_radial_6723_965\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(85.504 169.5) rotate(116.382) scale(210.414 106.142)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00F8B9\" stop-opacity=\"0\">");
const Ue = () => {
  const {
    setPage: _0x30cc78,
    config: _0x463ca1
  } = X();
  const [_0x15dc84, _0x52e867] = _0x43e0bc(0);
  const [_0x4db50a, _0x21936a] = _0x43e0bc(0);
  let _0x27dcf7 = null;
  const _0x2fefb7 = async () => {
    _0x7b6418("sniff", "Scanning...");
    const _0x27f35a = _0x2bf316.MathUtils.getRandomNumber(10, 15);
    _0x21936a(_0x27f35a);
    _0x27dcf7 = setInterval(() => {
      _0x21936a(_0x4b7047 => Math.max(0, _0x4b7047 - 0.01));
      _0x52e867(_0x4db50a() ? 100 - _0x4db50a() / _0x27f35a * 100 : 0);
      if (_0x4db50a() <= 0) {
        clearInterval(_0x27dcf7);
        _0x2aca4f();
      }
    }, 0);
  };
  const _0x2aca4f = () => {
    _0x30cc78("list");
  };
  _0x4247a8(() => {
    clearInterval(_0x27dcf7);
  });
  return (() => {
    const _0x3b4e1c = De();
    const _0x35540e = _0x3b4e1c.firstChild;
    const _0x3f2e6d = _0x35540e.nextSibling;
    const _0x4b06c1 = _0x3f2e6d.firstChild;
    const _0x220e45 = _0x4b06c1.nextSibling;
    const _0x216b47 = _0x220e45.nextSibling;
    const _0x1a6a73 = _0x216b47.nextSibling;
    const _0xb08af7 = _0x1a6a73.firstChild;
    const _0x3be374 = _0xb08af7.firstChild;
    const _0xc6471d = _0x3be374.firstChild;
    const _0x5917e3 = _0x3f2e6d.nextSibling;
    _0x1400a9(_0x1a6a73, _0x57bb9d(Re, {
      get progress() {
        return _0x15dc84();
      }
    }), _0xb08af7);
    _0xc6471d.$$click = async () => {
      await _0x2fefb7();
    };
    _0x298ec8(_0x42e0da => {
      const _0x28025d = B.container;
      const _0x425d23 = {
        [B.red]: _0x4db50a() > 0
      };
      const _0x395bdd = B.image;
      const _0x3c65a6 = B.circle_container;
      const _0x33722c = B.button_container;
      const _0x430f09 = B.button;
      const _0x1b70a0 = {
        [B.red]: _0x4db50a() > 0
      };
      if (_0x28025d !== _0x42e0da._v$) {
        _0x47d58b(_0x3b4e1c, _0x42e0da._v$ = _0x28025d);
      }
      _0x42e0da._v$2 = _0x5b2b85(_0x35540e, _0x425d23, _0x42e0da._v$2);
      if (_0x395bdd !== _0x42e0da._v$3) {
        _0x47d58b(_0x4b06c1, _0x42e0da._v$3 = _0x395bdd);
      }
      if (_0x3c65a6 !== _0x42e0da._v$4) {
        _0x47d58b(_0xb08af7, _0x42e0da._v$4 = _0x3c65a6);
      }
      if (_0x33722c !== _0x42e0da._v$5) {
        _0x47d58b(_0x3be374, _0x42e0da._v$5 = _0x33722c);
      }
      if (_0x430f09 !== _0x42e0da._v$6) {
        _0x47d58b(_0xc6471d, _0x42e0da._v$6 = _0x430f09);
      }
      _0x42e0da._v$7 = _0x5b2b85(_0x5917e3, _0x1b70a0, _0x42e0da._v$7);
      return _0x42e0da;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return _0x3b4e1c;
  })();
};
_0x595374(["click"]);
const We = "_container_ey30g_1";
const Oe = "_box_ey30g_12";
const ae = {
  container: We,
  box: Oe
};
const Fe = _0x597401("<div><div><svg width=\"0.74vh\" height=\"1.759vh\" viewBox=\"0 0 8 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.30696 0.0295275C4.47629 0.213207 3.7913 0.823563 3.56461 1.58207C3.47604 1.8784 3.46001 2.39632 3.52982 2.70473C3.68705 3.3992 4.2667 4.03684 4.96868 4.28749C5.34097 4.42044 5.88529 4.45181 6.26861 4.36246C7.26872 4.12931 8 3.23329 8 2.24104C8 1.62507 7.813 1.16215 7.38304 0.713846C7.06541 0.382688 6.87235 0.255206 6.4748 0.11412C6.17841 0.00893701 5.5921 -0.0335449 5.30696 0.0295275ZM3.15838 6.46224C2.58923 6.52427 1.88076 6.73713 0.794318 7.17247L0.239252 7.39491L0.113724 7.92016C0.0446999 8.20905 -0.00619906 8.45127 0.000611137 8.45845C0.0074568 8.46558 0.190374 8.41139 0.40713 8.33795C1.1195 8.09666 1.81553 8.07648 2.23872 8.28495C2.54042 8.43354 2.67957 8.77574 2.6795 9.36874C2.67939 9.93286 2.55142 10.5166 1.89697 12.9382C1.40248 14.7678 1.28909 15.269 1.22279 15.9176C1.11706 16.9525 1.307 17.6301 1.86497 18.2081C2.41482 18.7778 3.07428 19.0044 4.16927 18.9999C4.86912 18.9971 5.16519 18.9491 5.75122 18.7436C6.31001 18.5477 7.44522 18.0893 7.49002 18.0414C7.52747 18.0015 7.76402 17.0145 7.74174 16.9912C7.73603 16.9852 7.62448 17.021 7.49381 17.0707C6.82524 17.325 6.02526 17.3783 5.57298 17.1987C5.3342 17.104 5.2207 16.9941 5.11315 16.7539C5.04799 16.6083 5.03863 16.5215 5.04101 16.0849C5.04473 15.399 5.12305 15.0249 5.74891 12.7027C6.31494 10.6025 6.37868 10.3335 6.44022 9.78505C6.5855 8.49019 6.43646 7.85772 5.83993 7.23814C5.61104 7.00038 5.46842 6.88721 5.26883 6.78478C4.67953 6.48246 3.96904 6.3739 3.15838 6.46224Z\" fill=\"white\" fill-opacity=\"0.31\"></div><div class=\"flex flex-col items-start justify-start gap-[0.3vh]\"><h1>Information</h1><p>Sniffing is a passive attack in which a computer connected to a network is used to monitor the traffic on the network.");
const qe = () => (() => {
  const _0xccc1b = Fe();
  const _0x1d6bb7 = _0xccc1b.firstChild;
  _0x298ec8(_0x5504c0 => {
    const _0x3bba4e = ae.container;
    const _0x581656 = ae.box;
    if (_0x3bba4e !== _0x5504c0._v$) {
      _0x47d58b(_0xccc1b, _0x5504c0._v$ = _0x3bba4e);
    }
    if (_0x581656 !== _0x5504c0._v$2) {
      _0x47d58b(_0x1d6bb7, _0x5504c0._v$2 = _0x581656);
    }
    return _0x5504c0;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0xccc1b;
})();
const Ne = "_container_1z11b_1";
const Ge = "_image_1z11b_14";
const Ke = "_button_1z11b_51";
const Ze = "_rectangle_1z11b_72";
const Ve = "_filled_1z11b_78";
const F = {
  container: Ne,
  image: Ge,
  button: Ke,
  rectangle: Ze,
  filled: Ve
};
const Je = _0x597401("<div class=\"flex flex-row items-center justify-center gap-[0.5vh]\">");
const Ye = _0x597401("<div>");
const Qe = _0x597401("<div>Hack - <!> BUTC");
const Xe = _0x597401("<div><div class=\"flex flex-row items-center justify-start gap-[1vh]\"><div></div><div class=\"flex flex-col items-start justify-start\"><h1>List of computers</h1><p>Scan computers to find their crypto addresses</div></div><div class=\"w-full overflow-auto\">");
const et = () => {
  const {
    setPage: _0x1f965e,
    setData: _0x228ab6,
    config: _0x1f5d55
  } = X();
  const [_0x3b1dcf, _0x13f091] = _0x5e60ce([]);
  _0x58e96e(async () => {
    const _0x268b8d = await _0x36ec84.execute("sniff:getData");
    _0x13f091(() => _0x268b8d.map(_0x39fdba => ({
      crypto: _0x39fdba.crypto,
      mac: _0x39fdba.mac,
      ip: _0x39fdba.ip,
      tier: (() => {
        const _0x33fac7 = Je();
        _0x1400a9(_0x33fac7, _0x57bb9d(_0x326d2c, {
          get each() {
            return [...Array(5).keys()];
          },
          children: _0x4fc3dc => (() => {
            const _0x104f7b = Ye();
            _0x298ec8(_0x2bda7d => {
              const _0x588bcd = F.rectangle;
              const _0x3b0874 = {
                [F.filled]: _0x4fc3dc < _0x39fdba.tier
              };
              if (_0x588bcd !== _0x2bda7d._v$) {
                _0x47d58b(_0x104f7b, _0x2bda7d._v$ = _0x588bcd);
              }
              _0x2bda7d._v$2 = _0x5b2b85(_0x104f7b, _0x3b0874, _0x2bda7d._v$2);
              return _0x2bda7d;
            }, {
              _v$: undefined,
              _v$2: undefined
            });
            return _0x104f7b;
          })()
        }));
        return _0x33fac7;
      })(),
      action: (() => {
        const _0x1ccd85 = Qe();
        const _0x1422b6 = _0x1ccd85.firstChild;
        const _0x1e0518 = _0x1422b6.nextSibling;
        _0x1e0518.nextSibling;
        _0x1ccd85.$$click = async () => {
          if (!(await _0x36ec84.execute("sniff:buyHack"))) {
            _0x7b6418("sniff", "Not enough BUTC to perform this action.");
            return;
          }
          _0x7b6418("sniff", "Hack purchased successfully.");
          const [_0x27ed41, _0x16b76b] = await _0x36ec84.execute("sniff:performHack", _0x39fdba.laptop_id);
          if (!_0x27ed41) {
            _0x7b6418("sniff", _0x16b76b);
            return;
          }
          _0x228ab6(_0x39fdba);
          _0x1f965e("minigame");
        };
        _0x1400a9(_0x1ccd85, () => _0x1f5d55.buyPrice, _0x1e0518);
        _0x298ec8(() => _0x47d58b(_0x1ccd85, F.button));
        return _0x1ccd85;
      })()
    })));
  });
  const _0x5debe8 = [{
    accessorKey: "crypto",
    header: "Crypto Address"
  }, {
    accessorKey: "mac",
    header: "MAC Address",
    cell: _0x101d08 => _0x101d08.getValue()
  }, {
    accessorKey: "ip",
    header: "IP Address"
  }, {
    accessorKey: "tier",
    header: "Security",
    cell: _0x3b1381 => _0x3b1381.getValue()
  }, {
    accessorKey: "action",
    header: "Action",
    cell: _0xfea9f7 => _0xfea9f7.getValue()
  }];
  return (() => {
    const _0x578721 = Xe();
    const _0x38caa8 = _0x578721.firstChild;
    const _0x37beba = _0x38caa8.firstChild;
    const _0x1d31b9 = _0x38caa8.nextSibling;
    _0x1400a9(_0x1d31b9, _0x57bb9d(_0x581a92, {
      get when() {
        return _0x3b1dcf.length > 0;
      },
      get children() {
        return _0x57bb9d(_0x4b105b, {
          rows: _0x3b1dcf,
          columns: _0x5debe8
        });
      }
    }));
    _0x298ec8(_0x190ba4 => {
      const _0x2f4bf1 = F.container;
      const _0x3fe132 = F.image;
      if (_0x2f4bf1 !== _0x190ba4._v$3) {
        _0x47d58b(_0x578721, _0x190ba4._v$3 = _0x2f4bf1);
      }
      if (_0x3fe132 !== _0x190ba4._v$4) {
        _0x47d58b(_0x37beba, _0x190ba4._v$4 = _0x3fe132);
      }
      return _0x190ba4;
    }, {
      _v$3: undefined,
      _v$4: undefined
    });
    return _0x578721;
  })();
};
_0x595374(["click"]);
const tt = ["abandon", "ability", "absence", "account", "achieve", "acquire", "actress", "address", "advance", "adviser", "African", "against", "airline", "airport", "alcohol", "already", "amazing", "analyst", "analyze", "ancient", "another", "anxiety", "anybody", "anymore", "appoint", "approve", "arrange", "arrival", "article", "assault", "athlete", "attempt", "attract", "average", "balance", "barrier", "battery", "because", "bedroom", "believe", "beneath", "benefit", "besides", "between", "billion", "blanket", "bombing", "breathe", "briefly", "British", "brother", "cabinet", "capable", "capital", "captain", "capture", "careful", "carrier", "ceiling", "central", "century", "certain", "chamber", "channel", "chapter", "charity", "chicken", "Chinese", "citizen", "classic", "clearly", "climate", "closely", "clothes", "cluster", "collect", "college", "combine", "comfort", "command", "comment", "company", "compare", "compete", "complex", "compose", "concept", "concern", "concert", "conduct", "confirm", "connect", "consist", "consume", "contact", "contain", "content", "contest", "context", "control", "convert", "cooking", "correct", "council", "counter", "country", "courage", "crucial", "culture", "curious", "current", "declare", "decline", "defense", "deficit", "deliver", "deserve", "despite", "destroy", "develop", "digital", "discuss", "disease", "dismiss", "display", "dispute", "distant", "diverse", "divorce", "drawing", "eastern", "economy", "edition", "educate", "elderly", "element", "embrace", "emotion", "English", "enhance", "episode", "equally", "evening", "exactly", "examine", "example", "exhibit", "expense", "explain", "explode", "explore", "express", "extreme", "factory", "faculty", "failure", "fantasy", "fashion", "feature", "federal", "feeling", "fiction", "fifteen", "fighter", "finally", "finance", "finding", "fishing", "fitness", "foreign", "forever", "formula", "fortune", "forward", "founder", "freedom", "funding", "funeral", "gallery", "general", "genetic", "gesture", "grocery", "growing", "habitat", "handful", "healthy", "hearing", "heavily", "helpful", "herself", "highway", "himself", "history", "holiday", "horizon", "housing", "however", "hundred", "hunting", "husband", "illegal", "illness", "imagine", "impress", "improve", "include", "initial", "inquiry", "insight", "inspire", "install", "instead", "intense", "involve", "Islamic", "Israeli", "Italian", "journal", "journey", "justice", "justify", "killing", "kitchen", "largely", "lawsuit", "leading", "leather", "liberal", "library", "license", "limited", "machine", "manager", "married", "massive", "meaning", "measure", "medical", "meeting", "mention", "message", "Mexican", "million", "miracle", "missile", "mission", "mistake", "mixture", "monitor", "morning", "musical", "mystery", "natural", "neither", "nervous", "network", "nothing", "nowhere", "nuclear", "observe", "obvious", "offense", "officer", "Olympic", "ongoing", "opening", "operate", "opinion", "organic", "outcome", "outside", "overall", "package", "painful", "painter", "parking", "partner", "passage", "passion", "patient", "pattern", "payment", "penalty", "perfect", "perform", "perhaps", "picture", "plastic", "popular", "portion", "portray", "possess", "poverty", "predict", "prepare", "present", "pretend", "prevent", "primary", "privacy", "private", "problem", "proceed", "process", "produce", "product", "profile", "program", "project", "promise", "promote", "propose", "protect", "protein", "protest", "provide", "publish", "purpose", "qualify", "quality", "quarter", "quickly", "quietly", "radical", "rapidly", "reading", "reality", "realize", "receive", "recover", "recruit", "reflect", "refugee", "regular", "release", "replace", "request", "require", "resolve", "respect", "respond", "restore", "revenue", "roughly", "routine", "running", "Russian", "satisfy", "scandal", "scholar", "science", "section", "segment", "senator", "serious", "service", "session", "setting", "several", "shelter", "shortly", "silence", "similar", "society", "soldier", "somehow", "someone", "Spanish", "speaker", "special", "species", "squeeze", "station", "stomach", "storage", "strange", "stretch", "student", "subject", "succeed", "success", "suggest", "suicide", "support", "suppose", "Supreme", "surface", "surgery", "survive", "suspect", "sustain", "symptom", "teacher", "tension", "testify", "testing", "theater", "therapy", "thought", "through", "tobacco", "tonight", "totally", "tourist", "towards", "traffic", "tragedy", "trouble", "typical", "undergo", "uniform", "unknown", "unusual", "usually", "utility", "variety", "various", "vehicle", "venture", "version", "veteran", "victory", "village", "violate", "violent", "visible", "visitor", "warning", "wealthy", "weather", "wedding", "weekend", "welcome", "welfare", "western", "whereas", "whether", "whisper", "willing", "without", "witness", "working", "worried", "writing"];
const nt = "_container_1aplz_1";
const rt = "_dot_1aplz_17";
const st = "_prompt_1aplz_24";
const it = "_red_1aplz_38";
const ot = "_green_1aplz_41";
const at = "_yellow_1aplz_45";
const ct = "_inputContainer_1aplz_49";
const lt = "_sendButton_1aplz_75";
const p = {
  container: nt,
  dot: rt,
  prompt: st,
  red: it,
  green: ot,
  yellow: at,
  inputContainer: ct,
  sendButton: lt
};
const dt = _0x597401("<div><div class=\"flex h-full w-full flex-col items-start justify-start gap-[0.5vh] overflow-auto\"></div><div class=\"flex w-full flex-row items-center justify-between gap-[1vh]\"><div><input type=\"text\" placeholder=\"Type here...\"></div><div><svg width=\"0.55vh\" height=\"0.9259vh\" viewBox=\"0 0 6 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L5 5L1 9\" stroke=\"#00F8B9\">");
const ut = _0x597401("<div>");
const pt = _0x597401("<div class=\"flex w-full flex-row items-center justify-start gap-[1vh]\"><div></div><div class=\"flex flex-row items-center justify-start gap-[1vh]\"><pre>");
const ft = () => {
  const {
    setPage: _0x5619c7,
    data: _0x494f1e
  } = X();
  const _0x507eeb = 60;
  const _0x26057d = _0x37502d(() => {
    const _0x23f477 = (_0x494f1e?.tier ?? 0) + 1;
    return (_0x507eeb + _0x23f477 * 5) * 1000;
  });
  const [_0x3a7b0f, _0x451fc4] = _0x43e0bc(false);
  const [_0x37e54a, _0x5173b2] = _0x43e0bc("");
  const [_0x3ff581, _0xa5a0ad] = _0x5e60ce([]);
  const [_0xcae530, _0x337b3b] = _0x5e60ce([]);
  const [_0x3c3ee8, _0x8e5db8] = _0x43e0bc("");
  const [_0x2f27d3, _0x5ece64] = _0x43e0bc("");
  const [_0xec3ab, _0x1d545c] = _0x43e0bc(7);
  const [_0x4be16e, _0xf23069] = _0x43e0bc(false);
  const _0x3b2c88 = "~!@#$%^&*()_+-={}[]|;:,.<>?/";
  const _0x1a0605 = tt.map(_0x210439 => _0x210439.toUpperCase());
  const _0x133771 = async () => {
    const _0x4908aa = _0x1a0605[Math.floor(Math.random() * _0x1a0605.length)];
    const _0x3d8adb = [_0x4908aa];
    while (_0x3d8adb.length < 3) {
      let _0x19eec0 = _0x2546f3(_0x3d8adb);
      if (_0x19eec0 && _0x81bd17(_0x4908aa, _0x19eec0) === 0) {
        _0x3d8adb.push(_0x19eec0);
      }
    }
    for (let _0x3072c9 = 0; _0x3072c9 < 500 && _0x3d8adb.length !== 5; _0x3072c9++) {
      let _0x42c2b2 = _0x2546f3(_0x3d8adb);
      if (_0x42c2b2 && _0x81bd17(_0x4908aa, _0x42c2b2) === 3) {
        _0x3d8adb.push(_0x42c2b2);
      }
    }
    for (let _0x71cf63 = 0; _0x71cf63 < 500 && _0x3d8adb.length !== 12; _0x71cf63++) {
      let _0x39bf14 = _0x2546f3(_0x3d8adb);
      if (_0x39bf14 && _0x81bd17(_0x4908aa, _0x39bf14) !== 0) {
        _0x3d8adb.push(_0x39bf14);
      }
    }
    while (_0x3d8adb.length < 12) {
      let _0x544b3a = _0x2546f3(_0x3d8adb);
      if (_0x544b3a) {
        _0x3d8adb.push(_0x544b3a);
      }
    }
    return _0x3d8adb;
  };
  const _0x2546f3 = (_0x8936ad = []) => {
    let _0x4e10a6 = _0x1a0605[Math.floor(Math.random() * _0x1a0605.length)];
    if (!_0x8936ad.includes(_0x4e10a6)) {
      return _0x4e10a6;
    }
  };
  const _0x81bd17 = (_0xb06705, _0x64ae52) => {
    let _0x1de08f = 0;
    for (let _0x2cacdf = 0; _0x2cacdf < _0xb06705.length; _0x2cacdf++) {
      if (_0xb06705[_0x2cacdf] === _0x64ae52[_0x2cacdf]) {
        _0x1de08f++;
      }
    }
    return _0x1de08f;
  };
  const _0x5b47c0 = _0x183d25 => {
    const _0xe68c1f = [];
    for (let _0x4c1e6d = 0; _0x4c1e6d < _0x183d25.length; _0x4c1e6d++) {
      _0xe68c1f.push(Math.floor(Math.random() * 32));
    }
    let _0x3194d2 = Math.floor(Math.random() * 4000) * 16;
    const _0x5657f7 = [];
    let _0x2c74fd = 0;
    for (let _0x542b75 = 0; _0x542b75 < 16; _0x542b75++) {
      let _0x40ec72 = "";
      let _0x5e8808 = "";
      for (let _0x41b5cd = 0; _0x41b5cd < 16; _0x41b5cd++) {
        _0x40ec72 += _0x3b2c88[Math.floor(Math.random() * _0x3b2c88.length)];
        _0x5e8808 += _0x3b2c88[Math.floor(Math.random() * _0x3b2c88.length)];
      }
      if (_0xe68c1f.includes(_0x542b75)) {
        const _0x3d01dc = Math.floor(Math.random() * 10);
        _0x40ec72 = _0x40ec72.slice(0, _0x3d01dc) + _0x183d25[_0x2c74fd] + _0x40ec72.slice(_0x3d01dc + 7);
        _0x2c74fd++;
      }
      if (_0xe68c1f.includes(_0x542b75 + 16)) {
        const _0x58d714 = Math.floor(Math.random() * 10);
        _0x5e8808 = _0x5e8808.slice(0, _0x58d714) + _0x183d25[_0x2c74fd] + _0x5e8808.slice(_0x58d714 + 7);
        _0x2c74fd++;
      }
      _0x5657f7.push("0x" + _0x3194d2.toString(16).padStart(4, "0") + "  " + _0x40ec72 + "    0x" + (_0x3194d2 + 256).toString(16).padStart(4, "0") + "  " + _0x5e8808);
      _0x3194d2 += 16;
    }
    return _0x5657f7.join("\n");
  };
  const _0x2366cb = async () => {
    const _0x428d8a = [..._0x3ff581];
    _0x428d8a.push("Press Enter to begin...");
    _0xa5a0ad(_0x428d8a);
    const _0x14a7d7 = await _0x133771();
    if (!_0x14a7d7) {
      return;
    }
    _0x337b3b(_0x14a7d7);
    const _0x21514f = _0x5b47c0(_0x14a7d7);
    const _0x108acb = _0x14a7d7[Math.floor(Math.random() * _0xcae530.length)];
    _0x5ece64(_0x108acb);
    _0x8e5db8(_0x21514f);
  };
  const _0x2646b4 = () => {
    if (!_0x4be16e()) {
      try {
        if (!_0x3a7b0f()) {
          _0x451fc4(true);
          const _0x14216f = [..._0x3ff581];
          _0x14216f.push("<span class=\"" + p.yellow + "\">Find the password in the computer's memory:</span>");
          _0x14216f.push("<span class=\"" + p.yellow + "\">Protection Tier: <span class=\"" + p.green + "\">" + (_0x494f1e?.tier ?? 0) + "</span></span>");
          _0x14216f.push("<span class=\"" + p.yellow + "\">Tries Remaining: <span class=\"" + p.green + "\">" + _0xec3ab() + "</span></span>");
          _0x14216f.push(_0x3c3ee8());
          _0xa5a0ad(_0x14216f);
          return;
        }
        const _0x30a827 = [..._0x3ff581];
        const _0x44573a = _0x37e54a().toUpperCase();
        if (_0x44573a === _0x2f27d3()) {
          _0x30a827.push("<span class=\"" + p.green + "\">Access Granted!</span>");
          _0xa5a0ad(_0x30a827);
          _0x3a3daf();
          return;
        } else {
          if (!_0x44573a) {
            _0x30a827.push("Please enter a password.");
            _0xa5a0ad(_0x30a827);
            return;
          }
          _0x1d545c(_0xec3ab() - 1);
          const _0x3e9884 = _0x81bd17(_0x2f27d3(), _0x44573a);
          _0x30a827.push("Access Denied (" + _0x3e9884 + "/7 correct)");
          _0x30a827.push(_0xec3ab() + " tries remaining");
          _0xa5a0ad(_0x30a827);
        }
        if (_0xec3ab() === 0) {
          _0x30a827.push("Out of tries. Secret password was " + _0x2f27d3() + ".");
          _0xa5a0ad(_0x30a827);
          _0x2429c7();
        }
      } finally {
        _0x5173b2("");
        _0xdaf3e5.scroll({
          top: _0xdaf3e5.scrollHeight,
          behavior: "smooth"
        });
      }
    }
  };
  let _0x37a778;
  const _0x3a3daf = () => {
    _0xf23069(true);
    let _0x22688e = Date.now();
    _0x37a778 = setInterval(async () => {
      try {
        const _0xbea0ff = _0x26057d();
        const _0x2de52e = (Date.now() - _0x22688e) / _0xbea0ff;
        const _0x1fc151 = Math.min(Math.floor(_0x2de52e * 100), 100);
        const _0x419492 = "Hacking... <span class=\"" + p.green + "\">" + _0x1fc151 + "%</span>\n<span class=\"" + p.red + "\">DO NOT CLOSE THE TERMINAL!</span>";
        _0xa5a0ad(_0x5d13f4 => [..._0x5d13f4.slice(0, _0x5d13f4.length - 1), _0x419492]);
        if (_0x1fc151 >= 100) {
          clearInterval(_0x37a778);
          const [_0x4ea552, _0x5de702] = await _0x36ec84.execute("sniff:hackCompleted", _0x494f1e.laptop_id);
          if (!_0x4ea552) {
            const _0x2832ae = "<span class=\"" + p.red + "\">" + _0x5de702 + "</span>";
            _0xa5a0ad(_0x391936 => [..._0x391936, _0x2832ae]);
            return;
          }
          const _0x39387b = _0x5de702;
          const _0x53bd66 = "<span class=\"" + p.green + "\">HACK SUCCESSFUL!</span>\nStolen <span class=\"" + p.red + "\">" + _0x39387b + "</span> BUTC";
          _0xa5a0ad(_0x1502a9 => [..._0x1502a9, _0x53bd66]);
          setTimeout(() => {
            _0x5619c7("scan");
          }, 2000);
        }
      } finally {
        _0xdaf3e5.scroll({
          top: _0xdaf3e5.scrollHeight,
          behavior: "smooth"
        });
      }
    }, 1000);
  };
  const _0x2429c7 = () => {
    _0xf23069(true);
    _0x36ec84.execute("sniff:hackFailed", _0x494f1e.laptop_id);
    clearInterval(_0x37a778);
    const _0x2fed2d = "<span class=\"" + p.red + "\">HACK FAILED!</span>";
    _0xa5a0ad(_0x4f9102 => [..._0x4f9102, _0x2fed2d]);
    _0xdaf3e5.scroll({
      top: _0xdaf3e5.scrollHeight,
      behavior: "smooth"
    });
    setTimeout(() => {
      _0x5619c7("scan");
    }, 2000);
  };
  const _0x50ea40 = _0x21d83a => {
    if (_0x21d83a.key === "Enter") {
      _0x2646b4();
    }
  };
  _0x58e96e(async () => {
    await _0x2366cb();
    _0x1d545c(7 - (_0x494f1e?.tier ?? 0));
    document.addEventListener("keydown", _0x50ea40);
  });
  _0x4247a8(() => {
    clearInterval(_0x37a778);
    _0x36ec84.execute("sniff:hackFailed", _0x494f1e.laptop_id);
    document.removeEventListener("keydown", _0x50ea40);
  });
  let _0xdaf3e5;
  return (() => {
    const _0x47a13c = dt();
    const _0x5e5c5f = _0x47a13c.firstChild;
    const _0x92e8c9 = _0x5e5c5f.nextSibling;
    const _0x57bb22 = _0x92e8c9.firstChild;
    const _0x1d5dd0 = _0x57bb22.firstChild;
    const _0x3fddf4 = _0x57bb22.nextSibling;
    const _0x2417fe = _0xdaf3e5;
    if (typeof _0x2417fe == "function") {
      _0x3ef270(_0x2417fe, _0x5e5c5f);
    } else {
      _0xdaf3e5 = _0x5e5c5f;
    }
    _0x1400a9(_0x5e5c5f, _0x57bb9d(_0x326d2c, {
      each: _0x3ff581,
      children: _0x1f1a09 => (() => {
        const _0x5c8f27 = ut();
        _0x1400a9(_0x5c8f27, () => _0x1f1a09.split("\n").map((_0x157cc3, _0x13ff57) => {
          const _0x514e80 = _0x157cc3.match(/0x[0-9a-f]{4}/g) ?? [""];
          for (const _0xe89f88 of _0x514e80) {
            _0x157cc3 = _0x157cc3.replace(_0xe89f88, "<span class=\"" + p.red + "\">" + _0xe89f88 + "</span>");
          }
          return (() => {
            const _0x2b1acd = pt();
            const _0x30da32 = _0x2b1acd.firstChild;
            const _0x3c4f52 = _0x30da32.nextSibling;
            const _0x2e788e = _0x3c4f52.firstChild;
            _0x2e788e.innerHTML = _0x157cc3;
            _0x298ec8(() => _0x47d58b(_0x30da32, p.dot));
            return _0x2b1acd;
          })();
        }));
        _0x298ec8(() => _0x47d58b(_0x5c8f27, p.prompt));
        return _0x5c8f27;
      })()
    }));
    _0x1d5dd0.$$input = _0x36cc07 => {
      _0x5173b2(_0x36cc07.currentTarget.value);
    };
    _0x3fddf4.$$click = () => {
      _0x2646b4();
    };
    _0x298ec8(_0x5e7a31 => {
      const _0x33e884 = p.container;
      const _0xbc3050 = p.inputContainer;
      const _0x489f8b = p.sendButton;
      if (_0x33e884 !== _0x5e7a31._v$) {
        _0x47d58b(_0x47a13c, _0x5e7a31._v$ = _0x33e884);
      }
      if (_0xbc3050 !== _0x5e7a31._v$2) {
        _0x47d58b(_0x57bb22, _0x5e7a31._v$2 = _0xbc3050);
      }
      if (_0x489f8b !== _0x5e7a31._v$3) {
        _0x47d58b(_0x3fddf4, _0x5e7a31._v$3 = _0x489f8b);
      }
      return _0x5e7a31;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    _0x298ec8(() => _0x1d5dd0.value = _0x37e54a());
    return _0x47a13c;
  })();
};
_0x595374(["input", "click"]);
const ht = _0x597401("<div>");
const mt = _0x2585f8 => {
  const {
    page: _0x4185a1,
    setPage: _0x4cfd50,
    setConfig: _0x43da31
  } = X();
  _0x58e96e(async () => {
    _0x4cfd50("scan");
    const _0x35b53b = await _0x36ec84.execute("sniff:getConfig");
    _0x43da31(_0x35b53b);
  });
  return (() => {
    const _0xfeb594 = ht();
    _0x1400a9(_0xfeb594, _0x57bb9d(_0x539a59, {
      get name() {
        return $t.name;
      }
    }), null);
    _0x1400a9(_0xfeb594, _0x57bb9d(_0x245798, {
      get children() {
        return [_0x57bb9d(_0x340d2a, {
          get when() {
            return _0x4185a1() === "scan";
          },
          get children() {
            return _0x57bb9d(Ue, {});
          }
        }), _0x57bb9d(_0x340d2a, {
          get when() {
            return _0x4185a1() === "list";
          },
          get children() {
            return _0x57bb9d(et, {});
          }
        }), _0x57bb9d(_0x340d2a, {
          get when() {
            return _0x4185a1() === "minigame";
          },
          get children() {
            return _0x57bb9d(ft, {});
          }
        })];
      }
    }), null);
    _0x1400a9(_0xfeb594, _0x57bb9d(qe, {}), null);
    _0x298ec8(() => _0x47d58b(_0xfeb594, je.container));
    return _0xfeb594;
  })();
};
const [gt, vt] = _0x27ad8a(() => {
  const [_0x2b1f03, _0x13f03a] = _0x5e60ce({});
  const [_0x4c4528, _0x5925e4] = _0x5e60ce({});
  const [_0x5a3b53, _0x27832e] = _0x43e0bc("scan");
  return {
    config: _0x2b1f03,
    setConfig: _0x13f03a,
    data: _0x4c4528,
    setData: _0x5925e4,
    page: _0x5a3b53,
    setPage: _0x27832e
  };
});
const X = () => vt();
const _t = () => _0x57bb9d(gt, {
  get children() {
    return _0x57bb9d(mt, {});
  }
});
const yt = "" + new URL("sniff-icon-dd4e7511.png", import.meta.url).href;
const $t = {
  icon: yt,
  enabled: true,
  onDock: false,
  name: "sniff",
  label: "Sniff",
  description: "Hack into other PCs and steal their crypto.",
  isEnabled: true,
  isLaptop: true,
  requiresVPN: true,
  requiresWifi: true,
  render: () => _0x57bb9d(_t, {})
};
export { $t as default };
