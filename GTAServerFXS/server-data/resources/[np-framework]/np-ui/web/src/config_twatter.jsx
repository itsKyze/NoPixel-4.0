import { b8 as _0xff7674, b9 as _0x220ea5, ba as _0x47bb28, j as _0x496e8c, n as _0x16631f, m as _0x31b9de, r as _0xd7ab55, bb as _0x2db0da, R as _0x230da7, o as _0x1a509f, aw as _0x23a83f, a$ as _0x4acaa1, b0 as _0x560972, b1 as _0x1ac76d, bc as _0x23d911, bd as _0xe749b7 } from "./vendor.jsx";
import _0x3a8853 from "./store_twatter.js";
import { u as _0x584ca4, _ as _0x47b872, I as _0x1ff281, n as _0x396f2b, v as _0x77aaec, z as _0x3e9321, V as _0x51d7b0, G as _0x1af42f, O as _0x1e4418, a9 as _0x2b9f59, aa as _0x455733, a7 as _0x7b17f3, ab as _0x578cc0, A as _0x18d0d1, a0 as _0x2d5a37 } from "./ui_core.js";
import { A as _0x1f49cc } from "./cta_action.jsx";
import { A as _0xc9c88b } from "./app_search.jsx";
import { p as _0x59cf16, T as _0x2d31e9, P as _0x59f282 } from "./settings_page.jsx";
import { j as _0x278eda } from "./actions.js";
import { b as _0x5a945e, a as _0x209b77, m as _0x27a28b } from "./_config_phone.jsx";
import { U as _0x14bf0f } from "./bundle.js";
import { S as _0x6f2c27 } from "./settings_switch.jsx";
import "./commonjsHelpers.js";
import "./vite.js";
import "./misc.js";
import "./store_twatter_feed.js";
import "./ui-app.jsx";
import "./store_phone.js";
const container$7 = "_container_1ue54_1";
const nav_item = "_nav_item_1ue54_14";
const icon$1 = "_icon_1ue54_29";
const active_bg = "_active_bg_1ue54_36";
const active_nav_item = "_active_nav_item_1ue54_42";
const styles$a = {
  container: container$7,
  nav_item,
  icon: icon$1,
  active_bg,
  active_nav_item
};
const tabs = [{
  view: "feed",
  icon: _0xff7674,
  label: "Feed"
}, {
  view: "notifications",
  icon: _0x220ea5,
  label: "Mentions"
}, {
  view: "settings",
  icon: _0x47bb28,
  label: "Settings"
}];
const TwatterNavigation = () => {
  const [_0x29645d, _0x17c69c] = _0x584ca4(_0x3a8853.key);
  return <div className={styles$a.container}><_0x47b872 each={[...tabs]}>{param_1 => <button className={_0x16631f(styles$a.nav_item, {
        [styles$a.active_nav_item]: _0x29645d.view === param_1.view
      })} onClick={() => _0x17c69c({
        view: param_1.view
      })} key={param_1.view}>{_0x29645d.view === param_1.view && <_0x31b9de.div className={styles$a.active_bg} layoutId="twatter-nav-active" transition={{
          type: "spring",
          stiffness: 500,
          damping: 35
        }} />}<_0x1ff281 icon={param_1.icon} className={styles$a.icon} /><p>{param_1.label}</p></button>}</_0x47b872></div>;
};
const getBlockedUsers = async () => {
  const varData_1 = await _0x396f2b("np-ui:getBlockedTwatterUsers", {}, {
    returnData: {
      123: {
        name: "Franny"
      },
      456: {
        name: "Billy"
      },
      789: {
        name: "Sally"
      },
      555: {
        name: "Tommy"
      },
      321: {
        name: "Jenny"
      },
      654: {
        name: "Bobby"
      },
      987: {
        name: "Samantha"
      }
    }
  });
  const varData_2 = [];
  if (varData_1.data) {
    Object.keys(varData_1.data).forEach(param_1 => {
      varData_2.push({
        id: parseInt(param_1),
        name: varData_1.data[param_1].name
      });
    });
  }
  return varData_2;
};
const isUserBlocked = param_1 => {
  const varData_3 = JSON.parse(localStorage.getItem("twatBlocks") || "[]");
  return varData_3.includes(param_1.character.id);
};
const getMessageEventCodes = param_1 => {
  const varData_4 = param_1.match(/\{\{c:([a-zA-Z0-9]{6,})\}\}/g) || [];
  let varData_5 = param_1;
  varData_4.forEach(param_1_1 => varData_5 = varData_5.replace(param_1_1, ""));
  const varData_6 = varData_4.map(param_1_1 => param_1_1.replace("{{c:", "").replace("}}", ""));
  return {
    codes: varData_6,
    message: varData_5
  };
};
const getTwatterPosts = async () => {
  const varData_7 = await _0x396f2b("np-ui:getTwats", {}, {
    returnData: _0x77aaec.getTwats()
  });
  let varData_8 = [];
  if (varData_7.meta.ok && varData_7.data) {
    varData_8 = varData_7.data.sort((param_1, param_2) => {
      if (param_1.timestamp < param_2.timestamp) {
        return 1;
      } else if (param_2.timestamp < param_1.timestamp) {
        return -1;
      }
      return 0;
    });
  }
  return varData_8;
};
const getTwatterBluStatus = async () => {
  const varData_9 = await _0x396f2b("np-ui:phone:getTwatterBlue", {}, {
    returnData: false
  });
  return varData_9?.data ?? false;
};
const saveAvatar = async param_1 => {
  const varData_10 = await _0x396f2b("np-ui:twatter:saveAvatar", {
    avatarUrl: param_1
  });
  return varData_10?.data ?? false;
};
const getAccount = async () => {
  const varData_11 = await _0x396f2b("np-ui:twatter:getAccount", {}, {
    returnData: null
  });
  return varData_11?.data?.avatar_url ?? null;
};
const wrapper = "_wrapper_10m7y_1";
const tooltip = "_tooltip_10m7y_5";
const styles$9 = {
  wrapper,
  tooltip
};
const GAP = 4;
const SimpleTooltip = ({
  label: _0x3d78fc,
  disabled: _0x5d291f,
  placement = "top",
  children: _0x30f6f8
}) => {
  const varData_12 = _0xd7ab55.useRef(null);
  const [_0x19d70e, _0xf508b6] = _0xd7ab55.useState(null);
  const varData_13 = _0xd7ab55.useCallback(() => {
    if (_0x5d291f || !varData_12.current) {
      return;
    }
    const varData_14 = varData_12.current.getBoundingClientRect();
    if (placement === "left") {
      _0xf508b6({
        top: varData_14.top + varData_14.height / 2,
        left: varData_14.left - GAP,
        transform: "translate(-100%, -50%)"
      });
    } else {
      _0xf508b6({
        top: varData_14.top - GAP,
        left: varData_14.left + varData_14.width / 2,
        transform: "translate(-50%, -100%)"
      });
    }
  }, [_0x5d291f, placement]);
  const varData_15 = _0xd7ab55.useCallback(() => _0xf508b6(null), []);
  return <span ref={varData_12} className={styles$9.wrapper} onMouseEnter={varData_13} onMouseLeave={varData_15}>{_0x30f6f8}{_0x19d70e && _0x2db0da.createPortal(<div className={styles$9.tooltip} style={_0x19d70e}>{_0x3d78fc}</div>, document.body)}</span>;
};
const SvgRetweetIcon = param_1 => _0xd7ab55.createElement("svg", {
  width: 14,
  height: 13,
  viewBox: "0 0 14 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0xd7ab55.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M10.974 0.0463802C10.9214 0.0722122 10.8492 0.133948 10.8136 0.18358C10.753 0.268042 10.7483 0.309722 10.7399 0.831645L10.7308 1.38944L7.35566 1.3987L3.98049 1.40793L3.65957 1.48618C2.73023 1.71278 2.03344 2.09434 1.39622 2.72554C1.03852 3.07987 0.848068 3.31793 0.628329 3.68547C0.228878 4.35354 -0.0231861 5.26828 0.00272048 5.95591C0.0110351 6.17649 0.0243385 6.23997 0.0778728 6.31468C0.208193 6.49643 0.231124 6.49965 1.39858 6.49965C2.31249 6.49965 2.46804 6.49333 2.55443 6.45255C2.72171 6.37357 2.77262 6.27024 2.81565 5.92238C2.8829 5.37863 3.01611 5.09358 3.36745 4.74157C3.5413 4.56736 3.65738 4.47971 3.82006 4.39974C4.26651 4.18035 3.99831 4.19582 7.54701 4.18511L10.7343 4.1755V4.70189C10.7343 5.12745 10.7434 5.24732 10.7816 5.32761C10.871 5.51493 11.0857 5.60378 11.3378 5.55766C11.4358 5.53975 11.5954 5.39204 12.6812 4.3145C13.3589 3.64197 13.9332 3.04998 13.9576 2.99901C14.014 2.88062 14.0142 2.68862 13.9578 2.57057C13.8991 2.44742 11.5008 0.0677715 11.3961 0.0287332C11.2769 -0.0157037 11.0843 -0.00766389 10.974 0.0463802ZM11.4408 6.54792C11.2773 6.62809 11.2271 6.73182 11.1843 7.0769C11.1176 7.6165 10.9718 7.92489 10.6204 8.27016C10.3831 8.50323 10.1754 8.62871 9.84447 8.73874L9.64025 8.80666L6.45299 8.81525L3.26572 8.82381V8.29742C3.26572 7.87186 3.25665 7.75199 3.21837 7.6717C3.12901 7.48438 2.91426 7.39553 2.6622 7.44165C2.56417 7.45956 2.40459 7.60727 1.31879 8.68481C0.641107 9.35734 0.0667575 9.94933 0.0424264 10.0003C-0.0141421 10.1189 -0.0141421 10.3107 0.0424264 10.4293C0.0667575 10.4803 0.641107 11.0723 1.31879 11.7448C2.40459 12.8224 2.56417 12.9701 2.6622 12.988C2.91426 13.0341 3.12901 12.9453 3.21837 12.7579C3.25662 12.6777 3.26572 12.558 3.26572 12.1343V11.6099L6.64262 11.6006L10.0195 11.5914L10.3404 11.5131C10.7759 11.407 11.0419 11.3116 11.408 11.1306C12.3277 10.6759 13.0652 9.94251 13.5202 9.03044C13.715 8.64009 13.7999 8.4024 13.9015 7.96424C13.9684 7.67565 13.9824 7.54611 13.9846 7.19625C13.987 6.80514 13.9826 6.76897 13.9221 6.68463C13.7917 6.50267 13.7695 6.4996 12.597 6.50032C11.68 6.50087 11.5236 6.50732 11.4408 6.54792Z",
  fill: "black",
  fillOpacity: 0.27
}));
const retweetIcon = "" + new URL("retweet-icon.svg", import.meta.url).href;
const SvgFlagIcon = param_1 => _0xd7ab55.createElement("svg", {
  width: 12,
  height: 13,
  viewBox: "0 0 12 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0xd7ab55.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M0 6.5V13H0.399971H0.799941V10.6301V8.26028L1.09992 8.13234C1.92191 7.78177 2.79278 7.62536 3.56025 7.69044C4.36144 7.75839 4.83549 7.90243 5.82624 8.37901C6.22344 8.57007 6.6873 8.77284 6.86096 8.83132C8.16503 9.27045 9.38734 9.27573 10.6946 8.84787C10.9831 8.75347 11.8338 8.3701 11.9396 8.28684L12 8.23926L11.9929 4.36114L11.9858 0.483057L11.6791 0.650939C10.4309 1.33433 9.41038 1.58389 8.32502 1.47116C7.59798 1.39562 7.12588 1.24462 6.14622 0.774262C5.07928 0.262006 4.49204 0.0886641 3.59611 0.0215313C2.77169 -0.0402695 1.83653 0.108367 1.01158 0.432301C0.9058 0.47384 0.814927 0.507812 0.809594 0.507812C0.804288 0.507812 0.799941 0.393555 0.799941 0.253906V0H0.399971H0V6.5Z",
  fill: "black",
  fillOpacity: 0.27
}));
const flagIcon = "" + new URL("flag-icon.svg", import.meta.url).href;
const SvgShieldIcon = param_1 => _0xd7ab55.createElement("svg", {
  width: 13,
  height: 16,
  viewBox: "0 0 13 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0xd7ab55.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M3.33859 0.946841C1.67433 1.46656 0.267528 1.91931 0.212368 1.95291C0.157238 1.98654 0.086912 2.06305 0.0560671 2.12293C0.00229171 2.22741 4.7051e-06 2.3813 4.7051e-06 5.89275C4.7051e-06 9.86726 -0.00333554 9.77834 0.167981 10.3486C0.270386 10.6895 0.524458 11.2298 0.738597 11.5621C1.68278 13.0274 3.66368 14.6266 6.02616 15.8308C6.4687 16.0564 6.5313 16.0564 6.97384 15.8308C9.33632 14.6266 11.3172 13.0274 12.2614 11.5621C12.4755 11.2298 12.7296 10.6895 12.832 10.3486C13.0033 9.77834 13 9.86726 13 5.89275C13 2.39127 12.9976 2.2271 12.9444 2.12293C12.9137 2.06305 12.8359 1.98375 12.7713 1.94672C12.5912 1.84342 6.63361 -0.00218584 6.48742 1.94348e-06C6.41773 0.00106458 5.05586 0.410554 3.33859 0.946841Z",
  fill: "black",
  fillOpacity: 0.4
}));
const shieldIcon = "" + new URL("shield-icon.svg", import.meta.url).href;
const SvgCrossedShieldIcon = param_1 => _0xd7ab55.createElement("svg", {
  width: 13,
  height: 16,
  viewBox: "0 0 13 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0xd7ab55.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M3.33859 0.946841C1.67433 1.46656 0.267528 1.91931 0.212368 1.95291C0.157238 1.98654 0.086912 2.06305 0.0560671 2.12293C0.00229171 2.22741 4.7051e-06 2.3813 4.7051e-06 5.89275C4.7051e-06 9.86726 -0.00333554 9.77834 0.167981 10.3486C0.270386 10.6895 0.524458 11.2298 0.738597 11.5621C1.68278 13.0274 3.66368 14.6266 6.02616 15.8308C6.4687 16.0564 6.5313 16.0564 6.97384 15.8308C9.33632 14.6266 11.3172 13.0274 12.2614 11.5621C12.4755 11.2298 12.7296 10.6895 12.832 10.3486C13.0033 9.77834 13 9.86726 13 5.89275C13 2.39127 12.9976 2.2271 12.9444 2.12293C12.9137 2.06305 12.8359 1.98375 12.7713 1.94672C12.5912 1.84342 6.63361 -0.00218584 6.48742 1.94348e-06C6.41773 0.00106458 5.05586 0.410554 3.33859 0.946841Z",
  fill: "black",
  fillOpacity: 0.4
}), _0xd7ab55.createElement("path", {
  d: "M1 1L12 15",
  stroke: "black",
  strokeOpacity: 0.4,
  strokeWidth: 1.5
}));
const crossedShieldIcon = "" + new URL("crossed-shield-icon.svg", import.meta.url).href;
const SvgReplyIcon = param_1 => _0xd7ab55.createElement("svg", {
  width: 12,
  height: 12,
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0xd7ab55.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M6.35604 1.41394V2.8279L6.06856 2.85652C4.77415 2.98548 3.521 3.4938 2.50734 4.3011C2.22799 4.5236 1.6331 5.12262 1.42804 5.38794C0.77386 6.23432 0.323869 7.20075 0.126036 8.18421C0.00639847 8.77883 -0.00540575 9.0047 0.0015876 10.5622L0.0080412 12L0.439235 10.9956C0.676399 10.4431 0.922997 9.89097 0.987228 9.76857C1.45487 8.87764 2.21869 8.03708 3.09403 7.45009C3.98029 6.85583 5.08937 6.46961 6.16224 6.38167L6.35566 6.36581L6.36171 7.78642L6.36777 9.20701L9.18388 6.90905C10.7327 5.64518 12 4.60231 12 4.59156C12 4.57324 6.38894 0 6.36645 0C6.36073 0 6.35604 0.636269 6.35604 1.41394Z",
  fill: "black",
  fillOpacity: 0.27
}));
const replyIcon = "" + new URL("reply-icon.svg", import.meta.url).href;
const post = "_post_15zxc_1";
const content$1 = "_content_15zxc_8";
const header = "_header_15zxc_14";
const avatar = "_avatar_15zxc_23";
const avatar_img = "_avatar_img_15zxc_36";
const avatar_blurred = "_avatar_blurred_15zxc_41";
const time$1 = "_time_15zxc_57";
const ai_btn = "_ai_btn_15zxc_65";
const inner_content = "_inner_content_15zxc_85";
const inner_content_troll = "_inner_content_troll_15zxc_93";
const event_btn$1 = "_event_btn_15zxc_110";
const blocked_text = "_blocked_text_15zxc_125";
const actions$2 = "_actions_15zxc_160";
const retweet_menu_wrapper$1 = "_retweet_menu_wrapper_15zxc_166";
const retweet_menu$1 = "_retweet_menu_15zxc_166";
const action_btn$1 = "_action_btn_15zxc_200";
const blocker = "_blocker_15zxc_234";
const styles$8 = {
  post,
  content: content$1,
  header,
  avatar,
  avatar_img,
  avatar_blurred,
  time: time$1,
  ai_btn,
  inner_content,
  inner_content_troll,
  event_btn: event_btn$1,
  blocked_text,
  actions: actions$2,
  retweet_menu_wrapper: retweet_menu_wrapper$1,
  retweet_menu: retweet_menu$1,
  action_btn: action_btn$1,
  "component-image-container": "_component-image-container_15zxc_227",
  blocker
};
function timeAgoShort(param_1) {
  const varData_16 = typeof param_1 === "string" ? new Date(param_1).getTime() : param_1 * 1000;
  const varData_17 = Math.max(0, Date.now() - varData_16);
  const varData_18 = Math.floor(varData_17 / 1000);
  const varData_19 = Math.floor(varData_18 / 60);
  const varData_20 = Math.floor(varData_19 / 60);
  const varData_21 = Math.floor(varData_20 / 24);
  const varData_22 = Math.floor(varData_21 / 7);
  const varData_23 = Math.floor(varData_21 / 30);
  const varData_24 = Math.floor(varData_21 / 365);
  if (varData_18 < 60) {
    return varData_18 + "s";
  }
  if (varData_19 < 60) {
    return varData_19 + "m";
  }
  if (varData_20 < 24) {
    return varData_20 + "h";
  }
  if (varData_21 < 7) {
    return varData_21 + "d";
  }
  if (varData_22 < 5) {
    return varData_22 + "w";
  }
  if (varData_23 < 12) {
    return varData_23 + "mo";
  }
  return varData_24 + "y";
}
const TwatterPost = ({
  info: _0x40b36a
}) => {
  const [_0x1273ea, _0x16c5db] = _0x584ca4(_0x3a8853.key);
  const [_0x1bfe65, _0x521104] = _0xd7ab55.useState(false);
  const [_0x4ecedb, _0x2edae7] = _0xd7ab55.useState(isUserBlocked(_0x40b36a));
  const varData_25 = _0x3e9321("twatter_show_avatars") ?? true;
  const varData_26 = "@" + (_0x40b36a.character.first_name + " " + _0x40b36a.character.last_name).replace(/\s+/g, "_");
  const varData_27 = _0x230da7.useMemo(() => _0x40b36a.text.startsWith("67") && _0x40b36a.text.length === 2, [_0x40b36a.text]);
  const {
    images: _0x216aa8,
    message: _0x449680
  } = _0x59cf16(_0x40b36a.text);
  const {
    codes: _0x24415d,
    message: _0x851467
  } = getMessageEventCodes(_0x449680);
  const varData_28 = () => {
    _0x51d7b0({
      description: "Do you really want to report this twat?",
      onConfirm: async () => {
        await _0x396f2b("np-ui:twatReport", {
          twat: _0x40b36a
        });
      }
    });
  };
  const varData_29 = () => {
    if (_0x40b36a.character.id === _0x1af42f()?.id) {
      return;
    }
    _0x51d7b0({
      description: "Do you really want to block this user?",
      onConfirm: async () => {
        const varData_30 = JSON.parse(localStorage.getItem("twatBlocks") || "[]");
        const varData_31 = [...varData_30, _0x40b36a.character.id];
        localStorage.setItem("twatBlocks", JSON.stringify(varData_31));
        _0x2edae7(true);
      }
    });
  };
  const varData_32 = () => {
    _0x51d7b0({
      description: "Do you really want to unblock this user?",
      onConfirm: async () => {
        const varData_33 = JSON.parse(localStorage.getItem("twatBlocks") || "[]");
        const varData_34 = varData_33.filter(param_1 => param_1 !== _0x40b36a.character.id);
        localStorage.setItem("twatBlocks", JSON.stringify(varData_34));
        _0x2edae7(false);
      }
    });
  };
  const [_0x299367, _0x1bfc9e] = _0xd7ab55.useState(false);
  const varData_35 = _0xd7ab55.useRef(null);
  _0xd7ab55.useEffect(() => {
    if (!_0x299367) {
      return;
    }
    const varData_36 = param_1 => {
      if (varData_35.current && !varData_35.current.contains(param_1.target)) {
        _0x1bfc9e(false);
      }
    };
    document.addEventListener("mousedown", varData_36);
    return () => document.removeEventListener("mousedown", varData_36);
  }, [_0x299367]);
  const varData_37 = () => {
    _0x16c5db({
      showNewPostModal: true,
      newPostText: varData_26 + " "
    });
  };
  const varData_38 = async () => {
    const varData_39 = _0x40b36a.text.match(/^[\s\S]*?\s*QT (@\S+)\s([\s\S]*)$/);
    const varData_40 = _0x40b36a.text.match(/^RT (@\S+)\s([\s\S]*)$/);
    let varData_41;
    if (varData_39) {
      varData_41 = "RT " + varData_39[1] + " " + varData_39[2];
    } else if (varData_40) {
      varData_41 = _0x40b36a.text;
    } else {
      varData_41 = "RT " + varData_26 + " " + _0x40b36a.text;
    }
    _0x1bfc9e(false);
    await _0x396f2b("np-ui:twatSend", {
      text: varData_41.substring(0, 255)
    });
  };
  const varData_42 = () => {
    _0x16c5db({
      showNewPostModal: true,
      newPostText: "",
      quotingPost: _0x40b36a
    });
    _0x1bfc9e(false);
  };
  const varData_43 = ["This twat is more dramatic than a Vinewood soap opera.", "Analyzing… twat confirmed, ego oversizes local data storage.", "Simulation output: this twat has fewer facts than a Fleeca Bank has vault guards.", "This twat flexes harder than Del Perro Beach muscle bros at sunset.", "System message: twat drama exceeds Maze Bank Tower height limit.", "This twat’s logic is patchier than Paleto Bay Wi-Fi.", "Calculating roast… this twat is less secure than a Blaine County ATM.", "This twat is thirstier than someone stranded in Grand Senora Desert.", "AI scan complete: this twat’s takes got flagged as spam.", "This twat causes more congestion than downtown Los Santos during rush hour.", "Error 404: rational argument from this twat not found.", "This twat shines bright with confidence, dim with intelligence.", "Prediction model: 97% chance this twat replies again for attention.", "This twat’s opinions depreciate faster than a stolen Banshee.", "This twat runs on premium drama, unleaded thought.", "Warning: this twat triggers more alerts than Maze Bank credit fraud detection.", "This twat is glitchier than a modded Sanchez on Mount Chiliad.", "Computation result: twat volume excessive, meaning minimal.", "This twat is louder than a turbocharged Issi Classic in an alley.", "This twat got more filters than Snapmatic but less clarity.", "In machine terms: this twat is an infinite loop of nonsense.", "Logic trace: this twat has plenty of words, zero bandwidth.", "This twat’s self-image is more inflated than Maze Bank’s mortgage bubbles.", "This twat is about as useful as a parachute in a submarine.", "Initiating burn... this twat is more staged than a Vinewood Boulevard movie set.", "Twat intensity is rising—recommend muting before max cringe overload.", "This twat has more takes than Weazel News but half the credibility.", "This twat is more inconsistent than a Los Santos weather forecast.", "Error log: twat posting detected, processing as background noise.", "This twat gets triggered faster than Fleeca’s anti-theft alarms.", "This twat is about as stable as a jenga tower in Grove Street.", "Simulation check… outcome: this twat is statistically irrelevant.", "This twat overcompensates harder than a modded pickup in Sandy Shores.", "Like Maze Bank Arena concerts, this twat is overpriced and underwhelming.", "System flag: this twat’s drama has exceeded maximum storage capacity.", "This twat sounds deeper than they are, like shallow water with an echo.", "Neural network analysis: this twat optimizes for cringe, not value.", "This twat gets recycled more than Lifeinvader ads.", "This twat tries to pop off like Vinewood fireworks and fizzles out just as quick.", "AI verdict: this twat is 99% noise, 1% signal.", "This twat’s arguments collapse faster than Dream Tower pre-sales.", "This twat flexes more than Maze Bank credit collectors but with less backing.", "In Los Santos terms: this twat is traffic with no destination.", "Runtime complete: this twat is basically spyware for your peace of mind.", "This twat is so extra, they’d overdraft at Fleeca just to buy drama."];
  const varData_44 = async () => {
    _0x5a945e();
    await _0x14bf0f.wait(600);
    const varData_45 = "Explain the following text in a short and concise manner: \"" + _0x851467 + "\"";
    let isDisabled = false;
    const varData_46 = param_1 => {
      return <div className="ai-explain-modal"><div className="ai-chat"><div className="ai-user"><div className="ai-avatar user" /><div className="ai-bubble user">{varData_45}</div></div><div className="ai-ai"><div className="ai-avatar ai" /><div className="ai-bubble ai">{param_1}</div></div></div><div className="actions"><p className="notice">Not a real language model. Twatter AI is actually is a hamster running over a keyboard with predefined responses. Twatter is not liable for any feelywings hurt. At some point we might actually integrate a real AI, but probably not. Do you even know how expensive a single AI prompt is? It costs us like $0.03 per request. Multiply that by a million users and we are broke. So yeah, deal with it.</p><button className="btn" onClick={() => {
            _0x209b77(false);
            isDisabled = true;
          }}>Close</button></div></div>;
    };
    let varData_47 = "";
    _0x27a28b(varData_46(<_0x496e8c.Fragment><i className="fas fa-spinner fa-spin" /> AI is thinking...</_0x496e8c.Fragment>));
    await _0x14bf0f.wait(900);
    if (isDisabled) {
      return;
    }
    _0x27a28b(varData_46(<_0x496e8c.Fragment><i className="fas fa-spinner fa-spin" /> AI is formulating a response...</_0x496e8c.Fragment>));
    await _0x14bf0f.wait(900);
    if (Math.random() < 0.05) {
      if (isDisabled) {
        return;
      }
      _0x27a28b(varData_46(<_0x496e8c.Fragment><i className="fas fa-spinner fa-spin" /> Boosting Alex Ron in the algorithm...</_0x496e8c.Fragment>));
      await _0x14bf0f.wait(400);
    }
    if (isDisabled) {
      return;
    }
    _0x27a28b(varData_46(<_0x496e8c.Fragment><i className="fas fa-spinner fa-spin" /> AI is putting on its glasses...</_0x496e8c.Fragment>));
    await _0x14bf0f.wait(900);
    if (isDisabled) {
      return;
    }
    _0x27a28b(varData_46(<_0x496e8c.Fragment><i className="fas fa-spinner fa-spin" /> Processing megabytes into megabits</_0x496e8c.Fragment>));
    await _0x14bf0f.wait(900);
    if (isDisabled) {
      return;
    }
    _0x27a28b(varData_46(<_0x496e8c.Fragment><i className="fas fa-spinner fa-spin" /> Gulping hundreds of gallons of water...</_0x496e8c.Fragment>));
    await _0x14bf0f.wait(900);
    if (isDisabled) {
      return;
    }
    varData_47 = varData_43[Math.floor(Math.random() * varData_43.length)];
    _0x27a28b(varData_46(<span className="ai-typing">AI is typing...</span>));
    await _0x14bf0f.wait(4000);
    if (isDisabled) {
      return;
    }
    _0x27a28b(varData_46(<p>{varData_47}</p>));
  };
  return <_0x496e8c.Fragment>{(!_0x4ecedb || _0x1bfe65) && <div className={styles$8.post}><div className={styles$8.header}><div className={styles$8.avatar}><_0x1e4418 when={_0x40b36a.avatar_url} fallback={<_0x1ff281 icon="user" />}><img src={_0x40b36a.avatar_url} alt="Avatar" className={styles$8.avatar_img + " " + (!varData_25 ? styles$8.avatar_blurred : "")} /></_0x1e4418></div><h1>{varData_26}{_0x40b36a.isBlue && <SimpleTooltip label="Verified With Twatter Premium" placement="left"><span className="fa-layers fa-fw"><_0x1ff281 icon="certificate" color="#1da1f2" size="lg" /><_0x1ff281 icon="check" color="white" transform="shrink-6" /></span></SimpleTooltip>}</h1><span className={styles$8.time}>{timeAgoShort(_0x40b36a.timestamp)}</span>{!!_0x1273ea.hasBlue && <button className={styles$8.ai_btn} onClick={varData_44}><i className="fas fa-robot" /></button>}</div><div className={styles$8.content}><div className={_0x16631f(styles$8.inner_content, {
          [styles$8.inner_content_troll]: varData_27
        })}><_0x1e4418 when={varData_27}><_0x2d31e9 /></_0x1e4418><_0x1e4418 when={!varData_27}><p>{_0x851467}</p>{_0x24415d && _0x24415d.length > 0 && <button className={styles$8.event_btn} onClick={() => _0x278eda(_0x24415d[0])}>Join Event</button>}{_0x216aa8.length > 0 && <_0x59f282 images={_0x216aa8} />}</_0x1e4418></div><div className={styles$8.actions}><SimpleTooltip label="Reply"><button className={styles$8.action_btn} onClick={varData_37}><SvgReplyIcon /></button></SimpleTooltip><SimpleTooltip label="Retweet" disabled={_0x299367}><div className={styles$8.retweet_menu_wrapper} ref={varData_35}><button className={styles$8.action_btn} onClick={() => _0x1bfc9e(!_0x299367)}><SvgRetweetIcon /></button>{_0x299367 && <div className={styles$8.retweet_menu}><button onClick={varData_38}>Retweet</button><button onClick={varData_42}>Quote</button></div>}</div></SimpleTooltip><SimpleTooltip label="Report"><button className={styles$8.action_btn} onClick={varData_28}><SvgFlagIcon /></button></SimpleTooltip>{!_0x4ecedb && <SimpleTooltip label="Block"><button className={styles$8.action_btn} onClick={varData_29}><SvgShieldIcon /></button></SimpleTooltip>}{_0x4ecedb && <SimpleTooltip label="Unblock"><button className={styles$8.action_btn} onClick={varData_32}><SvgCrossedShieldIcon /></button></SimpleTooltip>}</div></div></div>}{_0x4ecedb && !_0x1bfe65 && <div className={styles$8.post}><div className={styles$8.header}><div className={styles$8.avatar}><_0x1e4418 when={_0x40b36a.avatar_url} fallback={<_0x1ff281 icon="user" />}><img src={_0x40b36a.avatar_url} alt="Avatar" className={styles$8.avatar_img + " " + (!varData_25 ? styles$8.avatar_blurred : "")} /></_0x1e4418></div><h1>{varData_26}{_0x40b36a.isBlue && <SimpleTooltip label="Verified With Twatter Premium" placement="left"><span className="fa-layers fa-fw"><_0x1ff281 icon="certificate" color="#1da1f2" size="lg" /><_0x1ff281 icon="check" color="white" transform="shrink-6" /></span></SimpleTooltip>}</h1><span className={styles$8.time}>{timeAgoShort(_0x40b36a.timestamp)}</span></div><div className={styles$8.content}><div className={styles$8.blocked_text} onClick={() => _0x521104(true)}><SvgShieldIcon /><p>This user is blocked</p><span>Tap to reveal</span></div></div><div className={styles$8.actions}><SimpleTooltip label="Unblock"><button className={styles$8.action_btn} onClick={varData_32}><SvgCrossedShieldIcon /></button></SimpleTooltip></div></div>}</_0x496e8c.Fragment>;
};
const retweet = "_retweet_uu6ju_1";
const content = "_content_uu6ju_8";
const retweet_header = "_retweet_header_uu6ju_14";
const time = "_time_uu6ju_40";
const quote_comment = "_quote_comment_uu6ju_48";
const original = "_original_uu6ju_55";
const original_header = "_original_header_uu6ju_62";
const original_content = "_original_content_uu6ju_75";
const event_btn = "_event_btn_uu6ju_90";
const actions$1 = "_actions_uu6ju_105";
const retweet_menu_wrapper = "_retweet_menu_wrapper_uu6ju_111";
const retweet_menu = "_retweet_menu_uu6ju_111";
const action_btn = "_action_btn_uu6ju_145";
const styles$7 = {
  retweet,
  content,
  retweet_header,
  time,
  quote_comment,
  original,
  original_header,
  original_content,
  event_btn,
  actions: actions$1,
  retweet_menu_wrapper,
  retweet_menu,
  action_btn
};
function parseRetweet(param_1) {
  const varData_48 = param_1.match(/^([\s\S]*?)\s*QT (@\S+)\s([\s\S]*)$/);
  if (varData_48) {
    return {
      type: "qt",
      comment: varData_48[1],
      originalHandle: varData_48[2],
      originalText: varData_48[3]
    };
  }
  const varData_49 = param_1.match(/^RT (@\S+)\s([\s\S]*)$/);
  if (varData_49) {
    return {
      type: "rt",
      originalHandle: varData_49[1],
      originalText: varData_49[2]
    };
  }
  return null;
}
const TwatterRetweet = ({
  info: _0x451c98
}) => {
  const [, _0x2c74a8] = _0x584ca4(_0x3a8853.key);
  const [_0xee3e9a, _0x6ba678] = _0xd7ab55.useState(false);
  const [_0x51e481, _0x112ffa] = _0xd7ab55.useState(isUserBlocked(_0x451c98));
  const [_0x1d18ca, _0x27a0d6] = _0xd7ab55.useState(false);
  const varData_50 = _0xd7ab55.useRef(null);
  _0xd7ab55.useEffect(() => {
    if (!_0x1d18ca) {
      return;
    }
    const varData_51 = param_1 => {
      if (varData_50.current && !varData_50.current.contains(param_1.target)) {
        _0x27a0d6(false);
      }
    };
    document.addEventListener("mousedown", varData_51);
    return () => document.removeEventListener("mousedown", varData_51);
  }, [_0x1d18ca]);
  const varData_52 = "@" + (_0x451c98.character.first_name + " " + _0x451c98.character.last_name).replace(/\s+/g, "_");
  const varData_53 = parseRetweet(_0x451c98.text);
  const varData_54 = varData_53?.originalText ?? _0x451c98.text;
  const {
    images: _0x4d52f1,
    message: _0x117c29
  } = _0x59cf16(varData_54);
  const {
    codes: _0x43c3f3,
    message: _0x54515d
  } = getMessageEventCodes(_0x117c29);
  const varData_55 = varData_53?.type === "qt" ? _0x59cf16(varData_53.comment) : null;
  const varData_56 = varData_55 ? getMessageEventCodes(varData_55.message) : null;
  const varData_57 = varData_56?.message ?? "";
  const varData_58 = varData_55?.images ?? [];
  const varData_59 = () => {
    _0x51d7b0({
      description: "Do you really want to report this twat?",
      onConfirm: async () => {
        await _0x396f2b("np-ui:twatReport", {
          twat: _0x451c98
        });
      }
    });
  };
  const varData_60 = () => {
    if (_0x451c98.character.id === _0x1af42f()?.id) {
      return;
    }
    _0x51d7b0({
      description: "Do you really want to block this user?",
      onConfirm: async () => {
        const varData_61 = JSON.parse(localStorage.getItem("twatBlocks") || "[]");
        const varData_62 = [...varData_61, _0x451c98.character.id];
        localStorage.setItem("twatBlocks", JSON.stringify(varData_62));
        _0x112ffa(true);
      }
    });
  };
  const varData_63 = () => {
    _0x51d7b0({
      description: "Do you really want to unblock this user?",
      onConfirm: async () => {
        const varData_64 = JSON.parse(localStorage.getItem("twatBlocks") || "[]");
        const varData_65 = varData_64.filter(param_1 => param_1 !== _0x451c98.character.id);
        localStorage.setItem("twatBlocks", JSON.stringify(varData_65));
        _0x112ffa(false);
      }
    });
  };
  const varData_66 = () => {
    const varData_67 = varData_53?.originalHandle ?? varData_52;
    _0x2c74a8({
      showNewPostModal: true,
      newPostText: varData_67 + " "
    });
  };
  const varData_68 = async () => {
    const varData_69 = varData_53 ? "RT " + varData_53.originalHandle + " " + varData_53.originalText : "RT " + varData_52 + " " + _0x451c98.text;
    _0x27a0d6(false);
    await _0x396f2b("np-ui:twatSend", {
      text: varData_69.substring(0, 255)
    });
  };
  const varData_70 = () => {
    _0x2c74a8({
      showNewPostModal: true,
      newPostText: "",
      quotingPost: _0x451c98
    });
    _0x27a0d6(false);
  };
  if (!varData_53) {
    return null;
  }
  const varData_71 = varData_53.type === "qt" ? varData_52 + " quoted" : varData_52 + " retweeted";
  return <_0x496e8c.Fragment>{(!_0x51e481 || _0xee3e9a) && <div className={styles$7.retweet}><div className={styles$7.retweet_header}><SvgRetweetIcon /><span>{varData_71}</span><span className={styles$7.time}>{timeAgoShort(_0x451c98.timestamp)}</span></div><div className={styles$7.content}>{varData_53.type === "qt" && (varData_57 || varData_58.length > 0) && <div className={styles$7.quote_comment}>{varData_57 && <p>{varData_57}</p>}{varData_58.length > 0 && <_0x59f282 images={varData_58} />}</div>}<div className={styles$7.original}><div className={styles$7.original_header}><span>{varData_53.originalHandle}</span></div><div className={styles$7.original_content}><p>{_0x54515d}</p>{_0x43c3f3 && _0x43c3f3.length > 0 && <button className={styles$7.event_btn} onClick={() => _0x278eda(_0x43c3f3[0])}>Join Event</button>}{_0x4d52f1.length > 0 && <_0x59f282 images={_0x4d52f1} />}</div></div><div className={styles$7.actions}><SimpleTooltip label="Reply"><button className={styles$7.action_btn} onClick={varData_66}><SvgReplyIcon /></button></SimpleTooltip><SimpleTooltip label="Retweet" disabled={_0x1d18ca}><div className={styles$7.retweet_menu_wrapper} ref={varData_50}><button className={styles$7.action_btn} onClick={() => _0x27a0d6(!_0x1d18ca)}><SvgRetweetIcon /></button>{_0x1d18ca && <div className={styles$7.retweet_menu}><button onClick={varData_68}>Retweet</button><button onClick={varData_70}>Quote</button></div>}</div></SimpleTooltip><SimpleTooltip label="Report"><button className={styles$7.action_btn} onClick={varData_59}><SvgFlagIcon /></button></SimpleTooltip>{!_0x51e481 && <SimpleTooltip label="Block"><button className={styles$7.action_btn} onClick={varData_60}><SvgShieldIcon /></button></SimpleTooltip>}{_0x51e481 && <SimpleTooltip label="Unblock"><button className={styles$7.action_btn} onClick={varData_63}><SvgCrossedShieldIcon /></button></SimpleTooltip>}</div></div></div>}{_0x51e481 && !_0xee3e9a && <div className={styles$7.retweet}><div className={styles$7.retweet_header}><SvgRetweetIcon /><span>{varData_52} retweeted</span><span className={styles$7.time}>{timeAgoShort(_0x451c98.timestamp)}</span></div><div className={styles$7.original}><div className={styles$7.original_content}><p style={{
            cursor: "pointer"
          }} onClick={() => _0x6ba678(true)}>This user is blocked. Click to view the twat</p></div></div><div className={styles$7.actions}><SimpleTooltip label="Unblock"><button className={styles$7.action_btn} onClick={varData_63}><SvgCrossedShieldIcon /></button></SimpleTooltip></div></div>}</_0x496e8c.Fragment>;
};
const container$6 = "_container_1rwua_1";
const empty_state$1 = "_empty_state_1rwua_9";
const more_btn = "_more_btn_1rwua_17";
const styles$6 = {
  container: container$6,
  empty_state: empty_state$1,
  more_btn
};
const POST_LIMIT = 20;
const TwatterList = ({
  posts: _0x372c17,
  emptyMessage = "No twats to show"
}) => {
  const [_0x3b24fe, _0x3135bb] = _0xd7ab55.useState(POST_LIMIT);
  return <div className={styles$6.container}>{_0x372c17.length === 0 && <p className={styles$6.empty_state}>{emptyMessage}</p>}{_0x372c17.length > 0 && <_0x47b872 each={_0x372c17.slice(0, _0x3b24fe)}>{(param_1, param_2) => {
        if (param_1.text.startsWith("RT @") || param_1.text.includes(" QT @")) {
          return <TwatterRetweet info={param_1} key={param_2 + "_" + param_1.timestamp} />;
        }
        return <TwatterPost info={param_1} key={param_2 + "_" + param_1.timestamp} />;
      }}</_0x47b872>}{_0x372c17.length > _0x3b24fe && <button className={styles$6.more_btn} onClick={() => _0x3135bb(param_1 => param_1 + POST_LIMIT)}>Show More</button>}</div>;
};
const overlay = "_overlay_156yw_1";
const container$5 = "_container_156yw_10";
const title = "_title_156yw_27";
const error = "_error_156yw_34";
const text_container = "_text_container_156yw_41";
const characters = "_characters_156yw_63";
const quote_preview = "_quote_preview_156yw_76";
const quote_preview_header = "_quote_preview_header_156yw_83";
const quote_preview_content = "_quote_preview_content_156yw_96";
const image_preview_container = "_image_preview_container_156yw_106";
const image_preview = "_image_preview_156yw_106";
const remove_image_btn = "_remove_image_btn_156yw_122";
const media_actions = "_media_actions_156yw_141";
const media_btn = "_media_btn_156yw_145";
const actions = "_actions_156yw_159";
const ctaSubmit = "_ctaSubmit_156yw_175";
const ctaClose = "_ctaClose_156yw_182";
const loading_container = "_loading_container_156yw_189";
const styles$5 = {
  overlay,
  container: container$5,
  title,
  error,
  text_container,
  characters,
  quote_preview,
  quote_preview_header,
  quote_preview_content,
  image_preview_container,
  image_preview,
  remove_image_btn,
  media_actions,
  media_btn,
  actions,
  ctaSubmit,
  ctaClose,
  loading_container
};
const MAX_CHARACTERS = 170;
function extractOriginal(param_1) {
  const varData_72 = param_1.text.match(/^[\s\S]*?\s*QT (@\S+)\s([\s\S]*)$/);
  if (varData_72) {
    return {
      handle: varData_72[1],
      text: varData_72[2]
    };
  }
  const varData_73 = param_1.text.match(/^RT (@\S+)\s([\s\S]*)$/);
  if (varData_73) {
    return {
      handle: varData_73[1],
      text: varData_73[2]
    };
  }
  const varData_74 = "@" + (param_1.character.first_name + " " + param_1.character.last_name).replace(/\s+/g, "_");
  return {
    handle: varData_74,
    text: param_1.text
  };
}
const TwatterNewPostModal = () => {
  const [_0x280151, _0x5e3b9b] = _0xd7ab55.useState("");
  const [_0x3cde06, _0x42f365] = _0xd7ab55.useState(false);
  const [_0x537071, _0x305a74] = _0xd7ab55.useState([]);
  const varData_75 = _0xd7ab55.useRef(/* @__PURE__ */new Set());
  const [_0xb797c4, _0x417df3] = _0x584ca4(_0x3a8853.key);
  const varData_76 = _0xb797c4.quotingPost;
  const varData_77 = _0xd7ab55.useMemo(() => varData_76 ? extractOriginal(varData_76) : null, [varData_76]);
  const varData_78 = () => {
    _0x417df3({
      showNewPostModal: false,
      quotingPost: null
    });
    _0x305a74([]);
    varData_75.current.clear();
  };
  const varData_79 = param_1 => {
    const varData_80 = param_1.target.value;
    const {
      message: _0x1e2342,
      images: _0x20a43a
    } = _0x59cf16(varData_80);
    const varData_81 = _0x20a43a.filter(param_1_1 => !varData_75.current.has(param_1_1));
    if (varData_81.length > 0) {
      _0x305a74(param_1_1 => [...param_1_1, ...varData_81]);
      varData_81.forEach(param_1_1 => varData_75.current.add(param_1_1));
    }
    const varData_82 = _0xb797c4.newPostText?.length ?? 0;
    if (varData_82 >= MAX_CHARACTERS && _0x1e2342.length > varData_82) {
      return;
    }
    _0x417df3({
      newPostText: _0x1e2342
    });
  };
  const varData_83 = param_1 => {
    const varData_84 = _0x537071[param_1];
    _0x305a74(param_1_1 => param_1_1.filter((param_1_2, param_2) => param_2 !== param_1));
    varData_75.current.delete(varData_84);
  };
  function handleAction_1() {
    _0x2b9f59({
      onSelect: param_1 => {
        _0x305a74(param_1_1 => [...param_1_1, ...param_1]);
      }
    });
  }
  function handleAction_2() {
    _0x455733({
      onSelect: param_1 => {
        _0x305a74(param_1_1 => [...param_1_1, param_1]);
      }
    });
  }
  const varData_85 = async () => {
    if (_0xb797c4.newPostText?.length > MAX_CHARACTERS) {
      return _0x5e3b9b("Post has too many characters!");
    }
    if (_0xb797c4.newPostText?.length === 0 && _0x537071.length === 0) {
      return _0x5e3b9b("Post cannot be empty!");
    }
    _0x42f365(true);
    let varData_86 = ((_0xb797c4.newPostText || "").trim() + " " + _0x537071.join(" ")).trim();
    if (varData_77) {
      varData_86 = (varData_86 + " QT " + varData_77.handle + " " + varData_77.text).trim();
    }
    const varData_87 = await _0x396f2b("np-ui:twatSend", {
      text: varData_86
    });
    if (!varData_87.meta.ok) {
      _0x42f365(false);
      return _0x5e3b9b(varData_87.meta.message);
    }
    for (const varData_88 of _0x537071) {
      await _0x7b17f3(varData_88, "recent");
    }
    _0x417df3({
      showNewPostModal: false,
      newPostText: "",
      quotingPost: null
    });
    _0x305a74([]);
    varData_75.current.clear();
    _0x42f365(false);
  };
  const varData_89 = _0xd7ab55.useMemo(() => {
    if (!_0xb797c4.newPostText) {
      return 0;
    }
    return _0xb797c4.newPostText.length;
  }, [_0xb797c4.newPostText]);
  const varData_90 = _0xd7ab55.useRef(null);
  return <_0x1a509f in={_0xb797c4.showNewPostModal} mountOnEnter={true} unmountOnExit={true} timeout={240} addEndListener={param_1 => {
    const varData_91 = varData_90.current;
    if (!varData_91) {
      return param_1();
    }
    const varData_92 = varData_91.animate(_0xb797c4.showNewPostModal ? [{
      transform: "translateY(100%)"
    }, {
      transform: "translateY(0%)"
    }] : [{
      transform: "translateY(0%)"
    }, {
      transform: "translateY(100%)"
    }], {
      duration: 250
    });
    varData_92.finished.then(param_1);
  }}>{() => <_0x496e8c.Fragment><div className={styles$5.overlay} onMouseDown={varData_78} /><div className={styles$5.container} ref={varData_90}><h1 className={styles$5.title}>{varData_77 ? "Quote Post" : "New Post"}</h1>{_0x280151 && <p className={styles$5.error}>{_0x280151}</p>}{_0x3cde06 ? <div className={styles$5.loading_container}><_0x23a83f size={60} style={{
            color: "#ebe7d5"
          }} /></div> : <_0x496e8c.Fragment><div className={styles$5.text_container}><textarea spellCheck="false" value={_0xb797c4.newPostText} onChange={varData_79} maxLength={MAX_CHARACTERS} /><div className={styles$5.characters}>{varData_89}/{MAX_CHARACTERS}</div></div>{varData_77 && <div className={styles$5.quote_preview}><div className={styles$5.quote_preview_header}><span>{varData_77.handle}</span></div><div className={styles$5.quote_preview_content}><p>{varData_77.text}</p></div></div>}{_0x537071.length > 0 && <div className={styles$5.image_preview_container}><_0x47b872 each={_0x537071}>{(param_1, param_2) => <div className={styles$5.image_preview} key={param_2}><img src={param_1} /><button className={styles$5.remove_image_btn} onClick={() => varData_83(param_2)}>×</button></div>}</_0x47b872></div>}<div className={styles$5.media_actions}><SimpleTooltip label="Attach Image"><button className={styles$5.media_btn} onClick={handleAction_1}><_0x1ff281 icon={_0x4acaa1} /></button></SimpleTooltip><SimpleTooltip label="Send GIF"><button className={styles$5.media_btn} onClick={handleAction_2}><_0x1ff281 icon={_0x560972} /></button></SimpleTooltip><SimpleTooltip label="Insert Emoji"><button className={styles$5.media_btn} onClick={() => {
                _0x578cc0({
                  onSelect: param_1 => {
                    _0x417df3({
                      newPostText: (_0xb797c4.newPostText || "") + param_1
                    });
                  }
                });
              }}><_0x1ff281 icon={_0x1ac76d} /></button></SimpleTooltip></div><div className={styles$5.actions}><button className={styles$5.ctaClose} onClick={varData_78}>Cancel</button><button className={styles$5.ctaSubmit} onClick={varData_85}>Post</button></div></_0x496e8c.Fragment>}</div></_0x496e8c.Fragment>}</_0x1a509f>;
};
const container$4 = "_container_9sg8v_1";
const styles$4 = {
  container: container$4
};
const FeedView = () => {
  const [_0x152ab3, _0x34e77c] = _0x584ca4(_0x3a8853.key);
  const [_0xa64c90, _0xe36880] = _0xd7ab55.useState("");
  const varData_93 = _0xd7ab55.useMemo(() => {
    return _0x152ab3.posts.filter(param_1 => {
      const varData_94 = param_1.character.first_name + " " + param_1.character.last_name;
      const varData_95 = varData_94.toLocaleLowerCase().includes(_0xa64c90.toLocaleLowerCase());
      const varData_96 = param_1.text.toLocaleLowerCase().includes(_0xa64c90.toLocaleLowerCase());
      return varData_95 || varData_96;
    });
  }, [_0xa64c90, _0x152ab3.posts]);
  return <div className={styles$4.container}><TwatterNewPostModal /><_0x1f49cc title="Twatter" description="Your feed" accentColor="#1da1f2" ctaAction={{
      tooltip: "New Post",
      icon: _0x23d911,
      onClick: () => _0x34e77c({
        showNewPostModal: true
      })
    }} /><_0xc9c88b value={_0xa64c90} onChange={param_1 => _0xe36880(param_1)} accentColor="#1da1f2" /><TwatterList posts={varData_93} /></div>;
};
const container$3 = "_container_9sg8v_1";
const styles$3 = {
  container: container$3
};
const NotificationsView = () => {
  const [_0x386d42] = _0x584ca4(_0x3a8853.key);
  const varData_97 = _0x1af42f();
  const varData_98 = varData_97 ? "@" + (varData_97.first_name + " " + varData_97.last_name).replace(/\s+/g, "_") : "";
  const varData_99 = _0xd7ab55.useMemo(() => {
    if (!varData_98) {
      return [];
    }
    return _0x386d42.posts.filter(param_1 => param_1.text.toLowerCase().includes(varData_98.toLowerCase()));
  }, [_0x386d42.posts, varData_98]);
  return <div className={styles$3.container}><_0x1f49cc title="Mentions" description="Posts that mention you" /><TwatterList posts={varData_99} emptyMessage="No mentions yet" /></div>;
};
const container$2 = "_container_4mo7u_1";
const profile_card = "_profile_card_4mo7u_8";
const profile_avatar = "_profile_avatar_4mo7u_17";
const profile_avatar_img = "_profile_avatar_img_4mo7u_35";
const profile_handle = "_profile_handle_4mo7u_41";
const sections = "_sections_4mo7u_47";
const section = "_section_4mo7u_47";
const section_title = "_section_title_4mo7u_59";
const premium_card = "_premium_card_4mo7u_66";
const premium_info = "_premium_info_4mo7u_75";
const premium_btn = "_premium_btn_4mo7u_92";
const cancel_btn = "_cancel_btn_4mo7u_110";
const toggle_row = "_toggle_row_4mo7u_118";
const toggle_label = "_toggle_label_4mo7u_127";
const nav_btn = "_nav_btn_4mo7u_133";
const styles$2 = {
  container: container$2,
  profile_card,
  profile_avatar,
  profile_avatar_img,
  profile_handle,
  sections,
  section,
  section_title,
  premium_card,
  premium_info,
  premium_btn,
  cancel_btn,
  toggle_row,
  toggle_label,
  nav_btn
};
const SettingsView = () => {
  const [_0x42a3b0, _0x1cb15b] = _0x584ca4(_0x3a8853.key);
  const varData_100 = () => {
    _0x51d7b0({
      description: "$80 + Tax - Twatter Premium gives you a blue checkmark and access to AI features.",
      onConfirm: async () => {
        const varData_101 = await _0x396f2b("np-ui:phone:purchaseBlue", {}, {
          returnData: true
        });
        if (varData_101.data) {
          _0x1cb15b({
            hasBlue: true
          });
        }
      }
    });
  };
  const varData_102 = () => {
    _0x51d7b0({
      description: "Are you sure you want to give up your checkmark and AI overlord?",
      onConfirm: async () => {
        const varData_103 = await _0x396f2b("np-ui:phone:cancelBlue", {});
        if (varData_103.data) {
          _0x1cb15b({
            hasBlue: false
          });
        }
      }
    });
  };
  const [_0x5e7695, _0x29cba7] = _0xd7ab55.useState(_0x3e9321("twatter_notifications") ?? true);
  const [_0x413959, _0x235e31] = _0xd7ab55.useState(_0x3e9321("twatter_show_avatars") ?? true);
  const varData_104 = _0x1af42f();
  const varData_105 = varData_104 ? "@" + (varData_104.first_name + " " + varData_104.last_name).replace(/\s+/g, "_") : "";
  const varData_106 = () => {
    _0x2b9f59({
      onSelect: async param_1 => {
        if (param_1.length > 0) {
          const varData_107 = param_1[0];
          const varData_108 = await saveAvatar(varData_107);
          if (varData_108) {
            const varData_109 = _0x42a3b0.posts.map(param_1_1 => {
              if (param_1_1.character.id === varData_104?.id) {
                return {
                  ...param_1_1,
                  avatar_url: varData_107
                };
              }
              return param_1_1;
            });
            _0x1cb15b({
              avatarUrl: varData_107,
              posts: varData_109
            });
            _0x18d0d1({
              appName: "twatter",
              text: "Profile picture saved.",
              title: "Twatter",
              timeout: 3000
            });
          } else {
            _0x18d0d1({
              appName: "twatter",
              text: "Failed to save profile picture.",
              title: "Twatter",
              timeout: 3000
            });
          }
        }
      }
    });
  };
  return <div className={styles$2.container}><_0x1f49cc title="Settings" description="Manage your account" /><div className={styles$2.sections}><div className={styles$2.profile_card}><div className={styles$2.profile_avatar} onClick={varData_106}><_0x1e4418 when={_0x42a3b0.avatarUrl} fallback={<_0x1ff281 icon="user" />}><img src={_0x42a3b0.avatarUrl} alt="Avatar" className={styles$2.profile_avatar_img} /></_0x1e4418></div><p className={styles$2.profile_handle}>{varData_105}</p></div><div className={styles$2.section}><p className={styles$2.section_title}>Premium</p><div className={styles$2.premium_card}><div className={styles$2.premium_info}><h2>Twatter Premium</h2><p>{_0x42a3b0.hasBlue ? "You have an active subscription" : "Get a checkmark & AI features"}</p></div>{!_0x42a3b0.hasBlue && <button className={styles$2.premium_btn} onClick={varData_100}>Purchase</button>}{_0x42a3b0.hasBlue && <button className={styles$2.premium_btn + " " + styles$2.cancel_btn} onClick={varData_102}>Cancel</button>}</div></div><div className={styles$2.section}><p className={styles$2.section_title}>Preferences</p><div className={styles$2.toggle_row}><SimpleTooltip label="Toggle push notifications for new twats and mentions"><span className={styles$2.toggle_label}>Notifications</span></SimpleTooltip><_0x6f2c27 value={_0x5e7695} onClick={() => {
            const varData_110 = !_0x5e7695;
            _0x29cba7(varData_110);
            _0x2d5a37("twatter_notifications", varData_110);
          }} /></div><div className={styles$2.toggle_row}><SimpleTooltip label="Show or blur profile pictures on twats"><span className={styles$2.toggle_label}>Show Avatars</span></SimpleTooltip><_0x6f2c27 value={_0x413959} onClick={() => {
            const varData_111 = !_0x413959;
            _0x235e31(varData_111);
            _0x2d5a37("twatter_show_avatars", varData_111);
          }} /></div></div><div className={styles$2.section}><button className={styles$2.nav_btn} onClick={() => _0x1cb15b({
          view: "blocked-users"
        })}><span>Blocked Users</span><_0x1ff281 icon="chevron-right" /></button></div></div></div>;
};
const container$1 = "_container_r7vkg_1";
const list = "_list_r7vkg_8";
const blocked_user = "_blocked_user_r7vkg_15";
const user_name = "_user_name_r7vkg_24";
const unblock_btn = "_unblock_btn_r7vkg_30";
const empty_state = "_empty_state_r7vkg_49";
const styles$1 = {
  container: container$1,
  list,
  blocked_user,
  user_name,
  unblock_btn,
  empty_state
};
const BlockedUsersView = () => {
  const [_0x1ddfb5, _0x2bf787] = _0x584ca4(_0x3a8853.key);
  const varData_112 = param_1 => {
    _0x51d7b0({
      description: "Are you sure you want to unblock this user?",
      onConfirm: async () => {
        await _0x396f2b("np-ui:unblockTwatterUser", {
          user: param_1
        });
        const varData_113 = await getBlockedUsers();
        _0x2bf787({
          blockedUsers: varData_113
        });
      }
    });
  };
  return <div className={styles$1.container}><_0x1f49cc title="Blocked Users" description="Manage blocked accounts" ctaAction={{
      icon: _0xe749b7,
      onClick: () => _0x2bf787({
        view: "settings"
      })
    }} /><div className={styles$1.list}>{_0x1ddfb5.blockedUsers.length === 0 && <div className={styles$1.empty_state}>No blocked users</div>}<_0x47b872 each={_0x1ddfb5.blockedUsers}>{param_1 => <div className={styles$1.blocked_user} key={param_1.id}><span className={styles$1.user_name}>{param_1.name}</span><button className={styles$1.unblock_btn} onClick={() => varData_112(param_1.id)}>Unblock</button></div>}</_0x47b872></div></div>;
};
const container = "_container_k0kai_1";
const styles = {
  container
};
const TwatterApp = () => {
  const [_0x37430d] = _0x584ca4(_0x3a8853.key);
  return <div className={styles.container}>{_0x37430d.view === "feed" && <FeedView />}{_0x37430d.view === "notifications" && <NotificationsView />}{_0x37430d.view === "settings" && <SettingsView />}{_0x37430d.view === "blocked-users" && <BlockedUsersView />}<TwatterNavigation /></div>;
};
const MAX_MESSAGE_NOTIFICATION = 40;
const events = param_1 => {
  param_1("twatter-receive", ({
    data: _0xdede55,
    state: _0x5a37d8
  }) => {
    const varData_114 = JSON.parse(localStorage.getItem("twatBlocks") || "[]");
    const varData_115 = varData_114.includes(Number(_0xdede55.character.id));
    if (_0xdede55.hasPhone && _0x3e9321("twatter_notifications") && !varData_115) {
      const varData_116 = _0xdede55.text.length > MAX_MESSAGE_NOTIFICATION ? _0xdede55.text.slice(0, MAX_MESSAGE_NOTIFICATION) + "..." : _0xdede55.text;
      _0x18d0d1({
        apps: ["twatter"],
        appName: "twatter",
        text: varData_116,
        title: "@" + _0xdede55.character.first_name + "_" + _0xdede55.character.last_name,
        timeout: 5000,
        state: _0x5a37d8
      });
    }
    const varData_117 = {
      text: _0xdede55.text,
      isBlue: _0xdede55.isBlue,
      character: _0xdede55.character,
      timestamp: _0xdede55.timestamp,
      avatar_url: _0xdede55.avatar_url
    };
    const varData_118 = [..._0x5a37d8[_0x3a8853.key].posts];
    varData_118.unshift({
      ...varData_117
    });
    return {
      ..._0x5a37d8,
      [_0x3a8853.key]: {
        ..._0x5a37d8[_0x3a8853.key],
        posts: varData_118,
        hasBlue: _0x5a37d8[_0x3a8853.key].hasBlue,
        blockedUsers: _0x5a37d8[_0x3a8853.key].blockedUsers
      }
    };
  });
};
const icon = {
  background: "#00B0FF",
  color: "white",
  name: ["fab", "twitter"]
};
const config = param_1 => {
  return {
    ...param_1,
    events: () => events,
    iconPng: "https://assets.nopixel.net/dev/images/phone/icons/twatter2.svg",
    init: async () => {
      const [_0x5374a4, _0x422290, _0x3cf643, _0x55ddcf] = await Promise.all([getTwatterPosts(), getTwatterBluStatus(), getBlockedUsers(), getAccount()]);
      return {
        key: _0x3a8853.key,
        data: {
          ..._0x3a8853.initialState,
          posts: _0x5374a4,
          hasBlue: _0x422290,
          blockedUsers: _0x3cf643,
          avatarUrl: _0x55ddcf
        }
      };
    },
    label: "Twatter",
    name: "twatter",
    position: 25,
    render: () => <TwatterApp />
  };
};
export { config as default, icon };