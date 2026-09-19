import { j as _0x2dd1ea, m as _0x1b5b77, n as _0x2016dd, aD as _0x12f41e, aE as _0x4785f0, bm as _0x14af6b, r as _0x5b8a31, bn as _0xe38e82, bo as _0xd3d405, bp as _0x3e9cc9, bq as _0x2e3fad, A as _0x3e13b4 } from "./vendor-69ed8822.js";
import { n as _0x1da1ed, q as _0x685703, A as _0x550616, o as _0x2695dc, i as _0xfb6ba3, ae as _0x1a946d, p as _0x4d8bb7, a6 as _0x46e6c2, e as _0x35ff8a, I as _0x202dd8, O as _0x95a9a, _ as _0x128e88, G as _0x1e8aa4, a4 as _0x448163, a5 as _0x19f44a } from "./index-dcb6474f.js";
import { A as _0x5d4a82 } from "./index-2aafdbb2.js";
import { A as _0x2e756e } from "./index-a5eeee26.js";
import { c as _0x4c35c1 } from "./events-4cb64c8a.js";
import { c as _0x2800d1 } from "./lib-553efcee.js";
import { c as _0x3f6e56 } from "./misc-a4c951c6.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
import "./duration-timer-dc979963.js";
import "./_config-dc44e3da.js";
import "./ui-app-b5e34f38.js";
import "./store-8a444d41.js";
async function GetAdvertisements() {
  const varData_1 = await _0x1da1ed("yellow-pages:getAdvertisements");
  return varData_1.data;
}
async function CreateAdvertisement(param_1, param_2) {
  const varData_2 = _0x685703();
  if (!varData_2) {
    return false;
  }
  const varData_3 = varData_2.areaCode + varData_2.number;
  const varData_4 = await _0x1da1ed("yellow-pages:addAdvertisements", {
    number: varData_3,
    category: param_1,
    description: param_2
  });
  const [_0x5c21d3, _0x51fdfc] = varData_4.data;
  _0x550616({
    appName: "yellow-pages",
    text: _0x51fdfc,
    title: "Lemon List",
    timeout: 5000
  });
  return _0x5c21d3;
}
async function RemoveAdvertisement() {
  const varData_5 = await _0x1da1ed("yellow-pages:removeAdvertisements");
  const [_0x3a0143, _0x174495] = varData_5.data;
  _0x550616({
    appName: "yellow-pages",
    text: _0x174495,
    title: "Lemon List",
    timeout: 5000
  });
  return _0x3a0143;
}
const initialState = {
  search: "",
  selectedCategory: null,
  advertisements: []
};
const devState = {
  search: "",
  selectedCategory: null,
  advertisements: [{
    characterId: 1008,
    name: "Alex Ron",
    number: "1231231234",
    category: "Services",
    description: "The river glows at sunset as quiet winds ripple gold light across the patient water below afterlight"
  }, {
    characterId: 1008,
    name: "Billy Joe",
    number: "1231231234",
    category: "Services",
    description: "Small application description are there in few words"
  }, {
    characterId: 1,
    name: "Joe Rogan",
    number: "1231231234",
    category: "Services",
    description: "Small application description are there in few words"
  }, {
    characterId: 1008,
    name: "Mitch",
    number: "1231231234",
    category: "Services",
    description: "Small application description are there in few words"
  }, {
    characterId: 1008,
    name: "sssssss",
    number: "1231231234",
    category: "Services",
    description: "Small application description are there in few words"
  }, {
    characterId: 1008,
    name: "Mitch",
    number: "1231231234",
    category: "Services",
    description: "Small application description are there in few words"
  }]
};
const [ContextProvider, useFallible] = _0x2695dc(() => _0xfb6ba3() ? {
  ...devState
} : {
  ...initialState
}, ({
  state: _0x24dfa2,
  setState: _0x3e8ef6
}) => ({
  reset: () => {
    _0x3e8ef6(() => ({
      ...initialState
    }));
  },
  fetchAdvertisements: async () => {
    const varData_6 = await GetAdvertisements();
    if (!Array.isArray(varData_6)) {
      return;
    }
    _0x3e8ef6(param_1 => {
      param_1.advertisements = varData_6;
    });
  }
}));
const useYellowPagesApp = () => useFallible();
const container$2 = "_container_i95c4_1";
const information = "_information_i95c4_9";
const header = "_header_i95c4_14";
const title = "_title_i95c4_20";
const description = "_description_i95c4_31";
const details = "_details_i95c4_37";
const number = "_number_i95c4_41";
const call_btn = "_call_btn_i95c4_53";
const text_btn = "_text_btn_i95c4_67";
const remove_btn = "_remove_btn_i95c4_81";
const category_container = "_category_container_i95c4_95";
const styles$2 = {
  container: container$2,
  information,
  header,
  title,
  description,
  details,
  number,
  call_btn,
  text_btn,
  remove_btn,
  category_container
};
const Advertisement = param_1 => {
  const {
    fetchAdvertisements: _0x440378
  } = useYellowPagesApp();
  const {
    hasName: _0x1d14be,
    name: _0x40e0a6
  } = _0x2800d1(param_1.info.number);
  const varData_7 = async () => {
    const varData_8 = await RemoveAdvertisement();
    if (!varData_8) {
      return;
    }
    await _0x440378();
  };
  const varData_9 = () => {
    _0x1a946d({
      title: "Message " + (_0x1d14be ? _0x40e0a6 : _0x4d8bb7(param_1.info.number)),
      inputs: [{
        key: "message",
        label: "Message",
        type: "text_area",
        placeholder: "Enter message"
      }],
      submitCb: async param_1_1 => {
        if (param_1_1.message.length <= 0) {
          return {
            success: false,
            errorMsg: "Message cannot be empty"
          };
        }
        const [_0x265e2e, _0x14f4bd] = await _0x46e6c2("text", param_1.info.number, param_1_1.message);
        if (!_0x265e2e) {
          return {
            success: false,
            errorMsg: _0x14f4bd
          };
        }
        return {
          success: true
        };
      }
    });
  };
  const varData_10 = 15;
  const varData_11 = param_1.index / varData_10;
  return <_0x1b5b77.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: 20
  }} transition={{
    duration: 0.4,
    ease: [0.25, 0.25, 0, 1],
    delay: varData_11
  }} key={param_1.index}><div className={_0x2016dd(styles$2.container)}><div className={styles$2.information}><div className={styles$2.header}><h1 className={styles$2.title}>{param_1.info.name}</h1><div className={styles$2.category_container}>{param_1.info.category}</div></div><p className={styles$2.description}>{param_1.info.description}</p></div><div className={styles$2.details}><_0x35ff8a title="Call Number"><div className={styles$2.call_btn} onClick={() => _0x4c35c1({
            number: param_1.info.number
          })}><_0x202dd8 icon={_0x12f41e} /></div></_0x35ff8a><_0x35ff8a title="Text Number"><div className={styles$2.text_btn} onClick={() => varData_9()}><_0x202dd8 icon={_0x4785f0} /></div></_0x35ff8a><_0x35ff8a title="Copy Number"><div className={styles$2.number} onClick={() => _0x3f6e56(param_1.info.number)}>{_0x4d8bb7(param_1.info.number)}</div></_0x35ff8a><_0x95a9a when={param_1.myAd}><div className={styles$2.remove_btn} onClick={varData_7}><_0x202dd8 icon={_0x14af6b} /></div></_0x95a9a></div></div></_0x1b5b77.div>;
};
const container$1 = "_container_1nqdf_1";
const button = "_button_1nqdf_7";
const active = "_active_1nqdf_19";
const arrowBtn = "_arrowBtn_1nqdf_24";
const list = "_list_1nqdf_36";
const styles$1 = {
  container: container$1,
  button,
  active,
  arrowBtn,
  list
};
const Categories = param_1 => {
  const {
    state: _0x26d103,
    setState: _0x1e40ea
  } = useYellowPagesApp();
  const [_0x4256c5, _0x35e637] = _0x5b8a31.useState([...param_1.categories]);
  const varData_12 = () => {
    const varData_13 = [..._0x4256c5];
    varData_13.push(varData_13.shift());
    _0x35e637(varData_13);
  };
  const varData_14 = () => {
    const varData_15 = [..._0x4256c5];
    varData_15.unshift(varData_15.pop());
    _0x35e637(varData_15);
  };
  return <div className={styles$1.container}><button className={styles$1.arrowBtn} onClick={varData_14}><_0x202dd8 icon={_0xe38e82} /></button><div className={styles$1.list}><_0x128e88 each={_0x4256c5}>{param_1_1 => <button className={_0x2016dd(styles$1.button, {
          [styles$1.active]: _0x26d103.selectedCategory === param_1_1
        })} onClick={() => _0x1e40ea("selectedCategory", _0x26d103.selectedCategory === param_1_1 ? null : param_1_1)}>{param_1_1}</button>}</_0x128e88></div><button className={styles$1.arrowBtn} onClick={varData_12}><_0x202dd8 icon={_0xd3d405} /></button></div>;
};
const container = "_container_40xq9_1";
const advertisements = "_advertisements_40xq9_11";
const empty_container = "_empty_container_40xq9_18";
const empty_icon = "_empty_icon_40xq9_33";
const styles = {
  container,
  advertisements,
  empty_container,
  empty_icon
};
const CATEGORIES = ["Mechanic", "Services", "Food", "Taxi", "Government"];
const isGovernment = param_1 => {
  const varData_16 = ["police", "ems", "judge", "defender", "mayor", "deputy_mayor", "county_clerk", "city_council", "sama_director", "dib"];
  return varData_16.includes(param_1?.toLowerCase());
};
const YellowPages = () => {
  const {
    state: _0x25e1b2,
    setState: _0x342e07,
    fetchAdvertisements: _0x1eea86,
    reset: _0x17711b
  } = useYellowPagesApp();
  const varData_17 = () => {
    const varData_18 = _0x1e8aa4();
    if (!varData_18) {
      return;
    }
    _0x1a946d({
      title: "New Advertisement",
      inputs: [{
        key: "category",
        label: "Category",
        type: "select",
        placeholder: "Enter category",
        options: CATEGORIES.filter(param_1 => {
          if (param_1 === "Government" && !isGovernment(varData_18.job)) {
            return false;
          }
          return true;
        }).map(param_1 => ({
          id: param_1,
          label: _0x3e9cc9(param_1)
        })),
        defaultValue: "Services"
      }, {
        key: "description",
        label: "Description",
        type: "text_area",
        placeholder: "Enter description"
      }],
      submitCb: async param_1 => {
        if (param_1.description.length <= 0) {
          return {
            success: false,
            errorMsg: "Description cannot be empty"
          };
        }
        if (param_1.description.length > 100) {
          return {
            success: false,
            errorMsg: "Description is too long (100 character max)"
          };
        }
        const varData_19 = await CreateAdvertisement(param_1.category, param_1.description);
        if (varData_19) {
          await _0x1eea86();
        }
        return {
          success: true
        };
      }
    });
  };
  _0x5b8a31.useEffect(() => {
    _0x1eea86();
    return () => _0x17711b();
  }, []);
  const varData_20 = _0x5b8a31.useMemo(() => {
    const varData_21 = _0x1e8aa4();
    const varData_22 = _0x25e1b2.selectedCategory ? _0x25e1b2.advertisements.filter(param_1 => param_1.category === _0x25e1b2.selectedCategory) : _0x25e1b2.advertisements;
    const varData_23 = varData_22.filter(param_1 => {
      const varData_24 = _0x25e1b2.search.toLocaleLowerCase();
      const varData_25 = param_1.name.toLocaleLowerCase().includes(varData_24);
      const varData_26 = param_1.description.toLocaleLowerCase().includes(varData_24);
      return varData_25 || varData_26;
    });
    const varData_27 = _0x25e1b2.advertisements.find(param_1 => param_1.characterId === varData_21?.id);
    if (!_0x25e1b2.selectedCategory && varData_27) {
      return [varData_27, ...varData_23.filter(param_1 => param_1 !== varData_27)];
    }
    return varData_23;
  }, [_0x25e1b2.advertisements, _0x25e1b2.search, _0x25e1b2.selectedCategory]);
  return <div className={styles.container}><_0x5d4a82 title="Lemon List" description="Advertise your services" ctaAction={{
      icon: _0x2e3fad,
      onClick: varData_17
    }} /><_0x2e756e value={_0x25e1b2.search} onChange={param_1 => _0x342e07("search", param_1)} /><Categories categories={CATEGORIES} /><_0x95a9a when={varData_20.length > 0}><div className={styles.advertisements}><_0x3e13b4 mode="popLayout">{varData_20.map((param_1, param_2) => <Advertisement info={param_1} myAd={!!_0x1e8aa4() && param_1.characterId === _0x1e8aa4()?.id} index={param_2} key={param_2} />)}</_0x3e13b4></div></_0x95a9a><_0x95a9a when={varData_20.length <= 0}><div className={styles.empty_container}><_0x448163 fallback={<div className={styles.empty_text}>No advertisements found</div>}><_0x19f44a when={_0x25e1b2.selectedCategory !== null}><div className={styles.empty_text}>No advertisements found in <span>{_0x25e1b2.selectedCategory}</span> category</div></_0x19f44a></_0x448163></div></_0x95a9a></div>;
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/yellowpages.svg";
const config = param_1 => {
  return {
    ...param_1,
    iconPng: myIcon,
    label: "Lemon List",
    name: "yellow-pages",
    position: 20,
    render: () => <ContextProvider><YellowPages /></ContextProvider>
  };
};
export { config as default };