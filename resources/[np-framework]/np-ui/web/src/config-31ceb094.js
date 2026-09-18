import { r as _0x1c9d75, aB as _0x2e12ea, aP as _0x29828d, R as _0x503125, j as _0x2a2723, m as _0x2ccf11, ar as _0x12401e, aq as _0x390c05, A as _0x459ce7, n as _0x127666 } from "./vendor-69ed8822.js";
import { W as _0x51db42, A as _0x4fcda7, a0 as _0x2e0846, I as _0x103c09, O as _0x1dcabc, a1 as _0x289112, a2 as _0x50fca1, _ as _0x277c8a } from "./index-dcb6474f.js";
import { A as _0x5e321c } from "./index-2aafdbb2.js";
import { c as _0x5034cc } from "./misc-a4c951c6.js";
import { f as _0x3bd405, g as _0x19a790 } from "./_config-dc44e3da.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
import "./ui-app-b5e34f38.js";
import "./store-8a444d41.js";
const selectSound = "" + new URL("gallery-select-275d9447.ogg", import.meta.url).href;
const container$2 = "_container_14gsw_1";
const header = "_header_14gsw_9";
const exitBtn = "_exitBtn_14gsw_15";
const icon = "_icon_14gsw_28";
const dateInfo = "_dateInfo_14gsw_34";
const date = "_date_14gsw_34";
const time = "_time_14gsw_49";
const mainImageContainer = "_mainImageContainer_14gsw_57";
const mainImage = "_mainImage_14gsw_57";
const thumbnail_footer = "_thumbnail_footer_14gsw_74";
const thumbnail = "_thumbnail_14gsw_74";
const thumbnailActive = "_thumbnailActive_14gsw_105";
const thumbnailImage = "_thumbnailImage_14gsw_109";
const cycling_arrows = "_cycling_arrows_14gsw_116";
const arrowCta = "_arrowCta_14gsw_128";
const actionsCta = "_actionsCta_14gsw_142";
const styles$2 = {
  container: container$2,
  header,
  exitBtn,
  icon,
  dateInfo,
  date,
  time,
  mainImageContainer,
  mainImage,
  thumbnail_footer,
  thumbnail,
  thumbnailActive,
  thumbnailImage,
  cycling_arrows,
  arrowCta,
  actionsCta
};
const CarouselView = ({
  images: _0x19b580,
  startImage: _0x13cf9f,
  onClose: _0x5fd56e
}) => {
  const [_0x4e5cf4, _0x2f7db1] = _0x1c9d75.useState(0);
  const [_0x25f30b, _0x54702e] = _0x1c9d75.useState(_0x13cf9f);
  function handleAction_1() {
    _0x2f7db1(-1);
    _0x54702e(param_1 => {
      const varData_1 = param_1 ? _0x19b580[_0x19b580.indexOf(param_1) > 0 ? _0x19b580.indexOf(param_1) - 1 : _0x19b580.length - 1] : _0x19b580[_0x19b580.length - 1];
      setTimeout(() => {
        const varData_2 = document.getElementById("img-thumb-" + varData_1.id);
        if (varData_2) {
          varData_2.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
          });
        }
      }, 0);
      return varData_1;
    });
  }
  function handleAction_2() {
    _0x2f7db1(1);
    _0x54702e(param_1 => {
      const varData_3 = param_1 ? _0x19b580[_0x19b580.indexOf(param_1) < _0x19b580.length - 1 ? _0x19b580.indexOf(param_1) + 1 : 0] : _0x19b580[0];
      setTimeout(() => {
        const varData_4 = document.getElementById("img-thumb-" + varData_3.id);
        if (varData_4) {
          varData_4.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
          });
        }
      }, 0);
      return varData_3;
    });
  }
  function handleAction_3(param_1) {
    _0x54702e(_0x19b580[param_1]);
  }
  function handleAction_4() {
    if (!_0x25f30b) {
      return;
    }
    _0x51db42({
      title: "Image Actions",
      actions: [{
        label: "Copy URL",
        icon: _0x2e12ea,
        onSelect: () => {
          _0x5034cc(_0x25f30b.image);
          _0x4fcda7({
            appName: "gallery",
            text: "Image URL copied to clipboard.",
            title: "Gallery",
            timeout: 5000
          });
        }
      }, {
        label: "Set as Wallpaper",
        icon: _0x29828d,
        onSelect: () => {
          _0x2e0846("phone_wallpaper", _0x25f30b.image);
          _0x4fcda7({
            appName: "gallery",
            text: "Phone wallpaper updated.",
            title: "Gallery",
            timeout: 5000
          });
        }
      }]
    });
  }
  const varData_5 = {
    enter: param_1 => ({
      x: param_1 > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: param_1 => ({
      x: param_1 < 0 ? 1000 : -1000,
      opacity: 0
    })
  };
  const varData_6 = _0x503125.useMemo(() => {
    if (!_0x25f30b) {
      return "Unknown";
    }
    const varData_7 = {
      weekday: "long",
      month: "long",
      day: "numeric"
    };
    return new Date(_0x25f30b?.timestamp).toLocaleDateString("en-US", varData_7);
  }, [_0x25f30b]);
  const varData_8 = _0x503125.useMemo(() => {
    if (!_0x25f30b) {
      return "Unknown";
    }
    const varData_9 = {
      hour: "2-digit",
      minute: "2-digit"
    };
    return new Date(_0x25f30b?.timestamp).toLocaleTimeString("en-US", varData_9);
  }, [_0x25f30b]);
  return <_0x2ccf11.div initial={{
    opacity: 0,
    scale: 0.8
  }} animate={{
    opacity: 1,
    scale: 1
  }} exit={{
    opacity: 0,
    scale: 0.8
  }} className={styles$2.container}><div className={styles$2.header}><button onClick={_0x5fd56e} className={styles$2.exitBtn}><_0x103c09 icon={_0x12401e} /></button><div className={styles$2.dateInfo}><div className={styles$2.date}>{varData_6}</div><div className={styles$2.time}>{varData_8}</div></div></div><div className={styles$2.mainImageContainer}><div className={styles$2.cycling_arrows}><button onClick={handleAction_1} className={styles$2.arrowCta}><_0x103c09 icon={_0x12401e} /></button><button onClick={handleAction_2} className={styles$2.arrowCta}><_0x103c09 icon={_0x390c05} /></button></div><_0x459ce7 initial={false} custom={_0x4e5cf4}><_0x1dcabc when={_0x25f30b}>{param_1 => <_0x2ccf11.img src={param_1.image} className={styles$2.mainImage} custom={_0x4e5cf4} variants={varData_5} initial="enter" animate="center" exit="exit" transition={{
            x: {
              type: "spring",
              stiffness: 300,
              damping: 30
            },
            opacity: {
              duration: 0.2
            }
          }} key={param_1.id} />}</_0x1dcabc></_0x459ce7><button onClick={handleAction_4} className={styles$2.actionsCta}>Image Actions</button></div><div className={styles$2.thumbnail_footer}>{_0x19b580.map((param_1, param_2) => <ThumbnailImage image={param_1} isActive={_0x25f30b?.id === param_1.id} onClick={() => handleAction_3(param_2)} key={param_1.id} />)}</div></_0x2ccf11.div>;
};
const ThumbnailImage = ({
  image: _0x31c1a9,
  isActive: _0x100362,
  onClick: _0x7fff6a
}) => {
  const varData_10 = _0x503125.useRef(null);
  return <_0x2ccf11.button ref={varData_10} id={"img-thumb-" + _0x31c1a9.id} onClick={() => {
    _0x7fff6a();
    varData_10.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
  }} className={styles$2.thumbnail} whileHover={{
    scale: 1.2
  }} whileTap={{
    scale: 0.95
  }} animate={{
    scale: _0x100362 ? 1.2 : 1,
    opacity: _0x100362 ? 1 : 0.6
  }} transition={{
    duration: 0.1
  }} key={_0x31c1a9.id}><img src={_0x31c1a9.image} className={styles$2.thumbnailImage} /></_0x2ccf11.button>;
};
const container$1 = "_container_q15t0_1";
const grid_container = "_grid_container_q15t0_11";
const date_groups = "_date_groups_q15t0_20";
const date_group = "_date_group_q15t0_20";
const date_group_header = "_date_group_header_q15t0_32";
const title = "_title_q15t0_37";
const image_list = "_image_list_q15t0_46";
const image_thumbnail = "_image_thumbnail_q15t0_54";
const selected = "_selected_q15t0_63";
const actions_container = "_actions_container_q15t0_71";
const ctaSubmit = "_ctaSubmit_q15t0_98";
const ctaClose = "_ctaClose_q15t0_105";
const styles$1 = {
  container: container$1,
  grid_container,
  date_groups,
  date_group,
  date_group_header,
  title,
  image_list,
  image_thumbnail,
  selected,
  actions_container,
  ctaSubmit,
  ctaClose
};
const container = "_container_1ype6_1";
const empty_container = "_empty_container_1ype6_10";
const styles = {
  container,
  empty_container
};
const EmptyView = () => {
  return <_0x2ccf11.div initial={{
    opacity: 0,
    scale: 0.8
  }} animate={{
    opacity: 1,
    scale: 1
  }} exit={{
    opacity: 0,
    scale: 0.8
  }} className={styles.container}><_0x5e321c title="Gallery" description="Browse your photos and videos" /><div className={styles.empty_container}><div className={styles.empty_text}> No photos available</div></div></_0x2ccf11.div>;
};
const AppContainer = () => {
  const {
    state: _0x4d5acb,
    setState: _0x5ce320
  } = _0x3bd405();
  const [_0x59e5a9, _0x352425] = _0x503125.useState(false);
  const [_0x1c9ba3, _0x1850aa] = _0x503125.useState([]);
  const [_0x2eb82b, _0x5af57f] = _0x503125.useState(null);
  function handleAction_5(param_1) {
    const varData_11 = new Date(param_1);
    return varData_11.toISOString().split("T")[0];
  }
  async function handleAction_6() {
    if (_0x59e5a9) {
      return;
    }
    _0x352425(true);
    let varData_12 = 0;
    try {
      for (const varData_13 of _0x1c9ba3) {
        const varData_14 = await _0x289112(varData_13);
        if (varData_14) {
          varData_12++;
        }
      }
    } finally {
      _0x352425(false);
      _0x1850aa([]);
      const varData_15 = await _0x50fca1("gallery");
      _0x5ce320("photos", varData_15);
    }
    if (varData_12 > 0) {
      _0x4fcda7({
        timeout: 3000,
        title: "Gallery",
        appName: "gallery",
        text: varData_12 + " image" + (varData_12 > 1 ? "s" : "") + " deleted successfully"
      });
    }
  }
  _0x503125.useEffect(() => {
    (async () => {
      const varData_16 = await _0x50fca1("gallery");
      _0x5ce320("photos", varData_16);
    })();
  }, []);
  const varData_17 = _0x503125.useMemo(() => {
    return _0x4d5acb.photos.reduce((param_1, param_2) => {
      const varData_18 = handleAction_5(param_2.timestamp);
      if (!param_1[varData_18]) {
        param_1[varData_18] = [];
      }
      param_1[varData_18].push(param_2);
      return param_1;
    }, {});
  }, [_0x4d5acb.photos]);
  const varData_19 = Object.keys(varData_17).sort((param_1, param_2) => param_2.localeCompare(param_1));
  const varData_20 = param_1 => {
    const varData_21 = new Date(param_1);
    const varData_22 = /* @__PURE__ */new Date();
    const varData_23 = new Date(varData_22);
    varData_23.setDate(varData_23.getDate() - 1);
    const varData_24 = new Date(varData_21.getFullYear(), varData_21.getMonth(), varData_21.getDate());
    const varData_25 = new Date(varData_22.getFullYear(), varData_22.getMonth(), varData_22.getDate());
    const varData_26 = new Date(varData_23.getFullYear(), varData_23.getMonth(), varData_23.getDate());
    if (varData_24.getTime() === varData_25.getTime()) {
      return "Today";
    } else if (varData_24.getTime() === varData_26.getTime()) {
      return "Yesterday";
    } else {
      return varData_21.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric"
      });
    }
  };
  const varData_27 = () => {
    const varData_28 = new Audio(selectSound);
    varData_28.volume = 0.05;
    varData_28.controls = false;
    varData_28.play();
    setTimeout(() => {
      varData_28.remove();
    }, varData_28.duration);
  };
  const varData_29 = param_1 => {
    varData_27();
    if (_0x1c9ba3.includes(param_1.id)) {
      _0x1850aa(_0x1c9ba3.filter(param_1_1 => param_1_1 !== param_1.id));
    } else {
      _0x1850aa([..._0x1c9ba3, param_1.id]);
    }
  };
  const varData_30 = _0x503125.useRef(false);
  const varData_31 = param_1 => {
    varData_30.current = false;
    const timerId = setTimeout(() => {
      varData_30.current = true;
      varData_27();
      _0x1850aa(param_1_1 => param_1_1.includes(param_1.id) ? param_1_1.filter(param_1_2 => param_1_2 !== param_1.id) : [...param_1_1, param_1.id]);
    }, 500);
    const varData_32 = () => {
      clearTimeout(timerId);
      window.removeEventListener("mouseup", varData_32);
      window.removeEventListener("touchend", varData_32);
    };
    window.addEventListener("mouseup", varData_32, {
      once: true
    });
    window.addEventListener("touchend", varData_32, {
      once: true
    });
  };
  const varData_33 = param_1 => {
    if (varData_30.current) {
      varData_30.current = false;
      return;
    }
    if (_0x1c9ba3.length > 0) {
      return varData_29(param_1);
    }
    _0x5af57f(param_1);
  };
  return <div className={styles$1.container}><_0x1dcabc when={_0x4d5acb.photos.length === 0}><EmptyView /></_0x1dcabc><_0x1dcabc when={_0x4d5acb.photos.length > 0 && _0x2eb82b !== null}>{_0x4d5acb.photos.length > 0 && <CarouselView images={_0x4d5acb.photos} startImage={_0x2eb82b} onClose={() => _0x5af57f(null)} />}</_0x1dcabc><_0x1dcabc when={!_0x2eb82b && _0x4d5acb.photos.length > 0}><div className={styles$1.grid_container}><_0x5e321c title="Gallery" description="Browse your photos and videos" /><div className={styles$1.date_groups}><_0x277c8a each={varData_19}>{(param_1, param_2) => <div className={styles$1.date_group}><div className={styles$1.date_group_header}><h2 className={styles$1.title}>{varData_20(param_1)}</h2></div><div className={styles$1.image_list}><_0x277c8a each={varData_17[param_1]}>{(param_1_1, param_2_1) => <_0x2ccf11.div className={_0x127666(styles$1.image_thumbnail, {
                    [styles$1.selected]: _0x1c9ba3.includes(param_1_1.id)
                  })} initial={{
                    opacity: 0,
                    scale: 0.8
                  }} animate={{
                    opacity: 1,
                    scale: 1
                  }} exit={{
                    opacity: 0,
                    scale: 0.8
                  }} transition={{
                    duration: 0.2,
                    delay: param_2 * param_2_1 * 0.03
                  }} key={param_1_1.id}><img src={param_1_1.image} onClick={() => varData_33(param_1_1)} onMouseDown={() => varData_31(param_1_1)} onTouchStart={() => varData_31(param_1_1)} /></_0x2ccf11.div>}</_0x277c8a></div></div>}</_0x277c8a></div><_0x459ce7 mode="popLayout">{_0x1c9ba3.length > 0 && <_0x2ccf11.div className={styles$1.actions_container} initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.8
          }}><button className={styles$1.ctaClose} onClick={handleAction_6} disabled={_0x59e5a9}>{_0x59e5a9 ? "Deleting..." : "Delete " + _0x1c9ba3.length + " image" + (_0x1c9ba3.length > 1 ? "s" : "")}</button></_0x2ccf11.div>}</_0x459ce7></div></_0x1dcabc></div>;
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/gallery.svg";
const config = param_1 => {
  return {
    ...param_1,
    iconPng: myIcon,
    label: "Gallery",
    name: "gallery",
    render: () => <_0x19a790><AppContainer /></_0x19a790>
  };
};
export { config as default };