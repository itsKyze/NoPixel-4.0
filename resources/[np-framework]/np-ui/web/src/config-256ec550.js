import { j as _0x12a642, n as _0x42480c, r as _0x32e89e, A as _0x101b3b, m as _0x33307f, R as _0x335ed5 } from "./vendor-69ed8822.js";
import { A as _0x35f6a2, n as _0x6b0007, v as _0x4da73f, k as _0x12cf32, u as _0x4bdebd, I as _0x486899, K as _0x2b1dab } from "./index-dcb6474f.js";
import { c as _0x1e17b5 } from "./lib-553efcee.js";
import _0x1f417b from "./store-8da1623c.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
const events = param_1 => {
  param_1("crypto-receive", ({
    data: _0x31396a,
    state: _0x38507d
  }) => {
    _0x35f6a2({
      appName: "crypto",
      timeout: 5000,
      state: _0x38507d,
      title: _0x1e17b5(_0x31396a.number, _0x38507d).name,
      text: _0x31396a.message
    });
    return _0x38507d;
  });
};
const fetchCrypto = async () => {
  const varData_1 = await _0x6b0007("stock-market:getStocks", {}, {
    returnData: _0x4da73f.getCrypto()
  });
  const varData_2 = varData_1?.data ?? [];
  return _0x12cf32(param_1 => ({
    ...param_1,
    [_0x1f417b.key]: {
      ...param_1[_0x1f417b.key],
      stocks: varData_2,
      selectedStock: varData_2.length > 0 ? varData_2[0] : null
    }
  }))();
};
const fetchTransactions = async param_1 => {
  const varData_3 = [{
    id: "1",
    character_id: 69,
    ticker: "NPC",
    amount: 121.878,
    price: 5000,
    created_at: 1700980645
  }, {
    id: "2",
    character_id: 69,
    ticker: "NPC",
    amount: 121.878,
    price: 39,
    created_at: 1700980645
  }, {
    id: "3",
    character_id: 69,
    ticker: "NPC",
    amount: 121.878,
    price: 20000,
    created_at: 1700980645
  }];
  const varData_4 = await _0x6b0007("stock-market:getTransactions", {
    ticker: param_1
  }, {
    returnData: varData_3
  });
  return varData_4.data ?? [];
};
const container$b = "_container_12vh5_1";
const left$1 = "_left_12vh5_16";
const icon$3 = "_icon_12vh5_21";
const label$2 = "_label_12vh5_32";
const ticker = "_ticker_12vh5_43";
const right = "_right_12vh5_48";
const price$1 = "_price_12vh5_48";
const down$1 = "_down_12vh5_63";
const styles$b = {
  container: container$b,
  left: left$1,
  icon: icon$3,
  label: label$2,
  ticker,
  right,
  price: price$1,
  down: down$1
};
const StockItem = param_1 => {
  const [_0x5eb02a, _0x33028d] = _0x4bdebd(_0x1f417b.key);
  return <div className={styles$b.container} onClick={() => _0x33028d({
    selectedStock: param_1.info,
    view: "portfolio"
  })}><div className={styles$b.left}><div className={styles$b.icon}><_0x486899 icon={param_1.info.icon} /></div><h1 className={styles$b.label}>{param_1.info.name} <p className={styles$b.ticker}>{param_1.info.ticker}</p></h1></div><div className={styles$b.right}><h1 className={styles$b.price}>${param_1.info.price.toLocaleString()}<span className={_0x42480c({
          [styles$b.down]: param_1.info.daily_percentage < 0
        })}>{param_1.info.daily_percentage.toFixed(3)}%</span></h1></div></div>;
};
const container$a = "_container_qokjm_1";
const search_container = "_search_container_qokjm_8";
const filter_options = "_filter_options_qokjm_39";
const filter_item = "_filter_item_qokjm_45";
const active$1 = "_active_qokjm_64";
const list$2 = "_list_qokjm_69";
const styles$a = {
  container: container$a,
  search_container,
  filter_options,
  filter_item,
  active: active$1,
  list: list$2
};
const FILTERS = ["Commercial", "Crypto", "ESG"];
const MarketView = () => {
  const [_0x2d2ef5] = _0x4bdebd(_0x1f417b.key);
  const [_0x1584de, _0x7911a] = _0x32e89e.useState(null);
  const [_0x4658d3, _0x6633f4] = _0x32e89e.useState("");
  const varData_5 = param_1 => {
    _0x7911a(param_1_1 => param_1 === param_1_1 ? null : param_1);
  };
  return <div className={styles$a.container}><div className={styles$a.search_container}><_0x486899 icon="search" /><input placeholder="Search..." value={_0x4658d3} onChange={param_1 => _0x6633f4(param_1.target.value)} /></div><div className={styles$a.filter_options}>{FILTERS.map(param_1 => <button className={_0x42480c(styles$a.filter_item, {
        [styles$a.active]: _0x1584de === param_1
      })} onClick={() => varData_5(param_1)} key={param_1}>{param_1}</button>)}</div><div className={styles$a.list}>{_0x2d2ef5.stocks.filter(param_1 => !_0x1584de || param_1.categories.includes(_0x1584de.toLowerCase())).filter(param_1 => param_1.name.toLocaleLowerCase().includes(_0x4658d3.toLocaleLowerCase())).map(param_1 => <StockItem info={param_1} />)}</div></div>;
};
const container$9 = "_container_1w5x2_1";
const information$2 = "_information_1w5x2_8";
const amount$1 = "_amount_1w5x2_18";
const details$2 = "_details_1w5x2_29";
const detail_text$2 = "_detail_text_1w5x2_34";
const numbers$3 = "_numbers_1w5x2_43";
const number$1 = "_number_1w5x2_43";
const btn$4 = "_btn_1w5x2_75";
const styles$9 = {
  container: container$9,
  information: information$2,
  amount: amount$1,
  details: details$2,
  detail_text: detail_text$2,
  numbers: numbers$3,
  number: number$1,
  btn: btn$4
};
const container$8 = "_container_l5mk5_1";
const left = "_left_l5mk5_13";
const label$1 = "_label_l5mk5_19";
const price = "_price_l5mk5_26";
const down = "_down_l5mk5_37";
const icon$2 = "_icon_l5mk5_40";
const styles$8 = {
  container: container$8,
  left,
  label: label$1,
  price,
  down,
  icon: icon$2
};
const StockDropdownItem = ({
  info: _0x5bde9f,
  onClick: _0x10ef4e
}) => {
  const varData_6 = _0x5bde9f.daily_percentage ?? 0;
  return <div className={styles$8.container} onClick={() => _0x10ef4e(_0x5bde9f)}><div className={styles$8.left}><h1 className={styles$8.label}>{_0x5bde9f.name ?? "N/A"}</h1><p className={styles$8.price}>${_0x5bde9f.price.toFixed(2).toLocaleString() ?? "NA"}<span className={_0x42480c({
          [styles$8.down]: varData_6 < 0
        })}>{varData_6.toFixed(2)}%</span></p></div><div className={styles$8.icon}><_0x486899 icon={_0x5bde9f.icon} /></div></div>;
};
const container$7 = "_container_1iic2_1";
const dropdown = "_dropdown_1iic2_4";
const styles$7 = {
  container: container$7,
  dropdown
};
const StockOptions = param_1 => {
  const [_0xdd7580, _0x4f94c1] = _0x4bdebd(_0x1f417b.key);
  const [_0x3a2abf, _0x614836] = _0x32e89e.useState(false);
  const varData_7 = _0x2b1dab(() => _0x614836(false));
  const varData_8 = {
    opacity: 1
  };
  const varData_9 = {
    opacity: 0
  };
  return <_0x101b3b><div className={styles$7.container}>{_0xdd7580.selectedStock && <StockDropdownItem info={_0xdd7580.selectedStock} onClick={() => _0x614836(param_1_1 => !param_1_1)} />}{_0x3a2abf && <_0x33307f.div className={styles$7.dropdown} initial={varData_9} animate={varData_8} exit={varData_9} ref={varData_7}>{_0xdd7580.stocks.map((param_1_1, param_2) => <StockDropdownItem info={param_1_1} onClick={() => {
          if (typeof param_1.onChange === "function") {
            param_1.onChange(param_1_1);
          }
          _0x4f94c1({
            selectedStock: param_1_1
          });
          _0x614836(false);
        }} key={param_2} />)}</_0x33307f.div>}</div></_0x101b3b>;
};
const numbers$2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"];
const PurchaseView = () => {
  const [_0x43bcb9] = _0x4bdebd(_0x1f417b.key);
  const [_0x1c446d, _0x4b371d] = _0x32e89e.useState("0");
  const [_0x1d01d9, _0x3e081] = _0x32e89e.useState(false);
  const varData_10 = param_1 => {
    _0x4b371d(param_1_1 => {
      if (param_1_1.includes(".") && param_1 === ".") {
        return param_1_1;
      }
      if (_0x1c446d === "0" && param_1 !== ".") {
        return param_1;
      } else {
        return param_1_1 + param_1;
      }
    });
  };
  const varData_11 = () => {
    _0x4b371d(param_1 => {
      if (param_1.length === 1) {
        return "0";
      }
      return param_1.slice(0, -1);
    });
  };
  const varData_12 = async () => {
    if (_0x1d01d9 || !_0x43bcb9.selectedStock) {
      return;
    }
    _0x3e081(true);
    const varData_13 = await _0x6b0007("stock-market:purchaseStock", {
      ticker: _0x43bcb9.selectedStock.ticker,
      amount: parseFloat(_0x1c446d)
    });
    if (varData_13.data) {
      fetchCrypto();
    }
    _0x3e081(false);
  };
  const varData_14 = _0x32e89e.useCallback(() => {
    if (!_0x43bcb9.selectedStock) {
      return "N/A";
    }
    return (parseFloat(_0x1c446d) / _0x43bcb9.selectedStock.price).toPrecision(6);
  }, [_0x43bcb9.selectedStock, _0x1c446d]);
  const varData_15 = _0x32e89e.useMemo(() => {
    if (!_0x43bcb9.selectedStock) {
      return 0;
    }
    return parseFloat(_0x1c446d);
  }, [_0x1c446d, _0x43bcb9.selectedStock]);
  const varData_16 = _0x43bcb9.selectedStock ? _0x43bcb9.selectedStock.ticker : "N/A";
  return <div className={styles$9.container}><div className={styles$9.information}><StockOptions /><h1 className={styles$9.amount}>${parseFloat(_0x1c446d).toLocaleString()}</h1><div className={styles$9.details}><p className={styles$9.detail_text}>Total: <span>${varData_15.toLocaleString()}</span></p><p className={styles$9.detail_text}>You'll get:<span>{varData_14()} {varData_16}</span></p></div></div><div className={styles$9.numbers}>{numbers$2.map(param_1 => <button className={styles$9.number} onClick={() => varData_10(param_1)} key={param_1}>{param_1}</button>)}<button className={styles$9.number} onClick={varData_11}><_0x486899 icon="backspace" /></button></div><button className={styles$9.btn} onClick={varData_12}>{_0x1d01d9 ? "Purchasing..." : "Complete Purchase"}</button></div>;
};
const SvgBuyIcon = param_1 => _0x32e89e.createElement("svg", {
  fill: "#FFFFFF",
  width: "800px",
  height: "800px",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0x32e89e.createElement("path", {
  d: "M379.141 472.367H215.035c-16.962 0-30.72-13.758-30.72-30.72V71.676c0-16.962 13.758-30.72 30.72-30.72h591.8c16.962 0 30.72 13.758 30.72 30.72v364.851c0 16.962-13.758 30.72-30.72 30.72h-96.768v40.96h96.768c39.583 0 71.68-32.097 71.68-71.68V71.676c0-39.583-32.097-71.68-71.68-71.68h-591.8c-39.583 0-71.68 32.097-71.68 71.68v369.971c0 39.583 32.097 71.68 71.68 71.68h164.106v-40.96z"
}), _0x32e89e.createElement("path", {
  d: "M550.66 165.528c0-23.331-18.909-42.24-42.24-42.24s-42.24 18.909-42.24 42.24c0 23.331 18.909 42.24 42.24 42.24s42.24-18.909 42.24-42.24zm40.96 0c0 45.953-37.247 83.2-83.2 83.2s-83.2-37.247-83.2-83.2 37.247-83.2 83.2-83.2 83.2 37.247 83.2 83.2zm-318.72 160h474.88c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H272.9c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm0 92.16h252.672c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H272.9c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm324.825 95.581c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H330.942c-11.311 0-20.48 9.169-20.48 20.48v106.26a61.445 61.445 0 006.638 27.787l61.112 120.504a40.922 40.922 0 014.431 18.528v237.189c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V765.868a81.856 81.856 0 00-8.865-37.063L353.63 608.309a20.48 20.48 0 01-2.209-9.261v-85.78h246.303zm40.918 489.788V783.87a51.175 51.175 0 0116.723-37.846l46.466-42.328a81.887 81.887 0 0026.759-60.565V537.772c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v105.359a40.934 40.934 0 01-13.377 30.28l-46.464 42.327a92.126 92.126 0 00-30.107 68.132v219.187c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
}), _0x32e89e.createElement("path", {
  d: "M625.769 545.158V426.036c0-16.968 13.754-30.72 30.72-30.72 17.396 0 31.15 13.752 31.15 30.72v139.602c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V426.036c0-39.591-32.094-71.68-71.68-71.68-40.016 0-72.11 32.089-72.11 71.68v119.122c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
}));
const PurchaseIcon = "" + new URL("buy-icon-a122abbc.svg", import.meta.url).href;
const SvgSellIcon = param_1 => _0x32e89e.createElement("svg", {
  fill: "#FFFFFF",
  width: "800px",
  height: "800px",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0x32e89e.createElement("path", {
  d: "M379.141 467.247H225.275c-16.962 0-30.72-13.758-30.72-30.72V71.676c0-16.962 13.758-30.72 30.72-30.72h592.824c16.962 0 30.72 13.758 30.72 30.72v364.851c0 16.962-13.758 30.72-30.72 30.72h-76.288v40.96h76.288c39.583 0 71.68-32.097 71.68-71.68V71.676c0-39.583-32.097-71.68-71.68-71.68H225.275c-39.583 0-71.68 32.097-71.68 71.68v364.851c0 39.583 32.097 71.68 71.68 71.68h153.866v-40.96z"
}), _0x32e89e.createElement("path", {
  d: "M560.9 155.288c0-23.331-18.909-42.24-42.24-42.24s-42.24 18.909-42.24 42.24c0 23.331 18.909 42.24 42.24 42.24s42.24-18.909 42.24-42.24zm40.96 0c0 45.953-37.247 83.2-83.2 83.2s-83.2-37.247-83.2-83.2 37.247-83.2 83.2-83.2 83.2 37.247 83.2 83.2zm-318.72 160h474.88c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H283.14c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm386.123 687.36V874.341a40.952 40.952 0 0117.858-33.817l36.384-24.853a81.929 81.929 0 0035.706-67.64v-79.596c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v79.596a40.964 40.964 0 01-17.853 33.82l-36.379 24.85a81.908 81.908 0 00-35.716 67.64v128.307c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48zM341.081 654.171v91.423c0 28.832 15.164 55.54 39.919 70.328l43.023 25.685a40.98 40.98 0 0119.96 35.172v125.87c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-125.87a81.942 81.942 0 00-39.919-70.338l-43.023-25.685a40.963 40.963 0 01-19.96-35.162v-91.423c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"
}), _0x32e89e.createElement("path", {
  d: "M759.113 709.211V495.533c0-36.757-29.803-66.56-66.56-66.56h-2.222c-36.757 0-66.56 29.803-66.56 66.56v126.638c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V495.533c0-14.136 11.464-25.6 25.6-25.6h2.222c14.136 0 25.6 11.464 25.6 25.6v213.678c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
}), _0x32e89e.createElement("path", {
  d: "M664.734 576.049V449.411c0-36.757-29.803-66.56-66.56-66.56h-2.222c-36.757 0-66.56 29.803-66.56 66.56v165.55c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-165.55c0-14.136 11.464-25.6 25.6-25.6h2.222c14.136 0 25.6 11.464 25.6 25.6v126.638c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
}), _0x32e89e.createElement("path", {
  d: "M570.921 616.966V403.288c0-36.757-29.803-66.56-66.56-66.56h-2.222c-36.757 0-66.56 29.803-66.56 66.56V566.79c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V403.288c0-14.136 11.464-25.6 25.6-25.6h2.222c14.136 0 25.6 11.464 25.6 25.6v213.678c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
}), _0x32e89e.createElement("path", {
  d: "M476.489 612.913V449.411c0-36.757-29.803-66.56-66.56-66.56h-2.222c-36.757 0-66.56 29.803-66.56 66.56v213.678c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V449.411c0-14.136 11.464-25.6 25.6-25.6h2.222c14.136 0 25.6 11.464 25.6 25.6v163.502c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
}));
const SellIcon = "" + new URL("sell-icon-e5a4c384.svg", import.meta.url).href;
const SvgExchangeIcon = param_1 => _0x32e89e.createElement("svg", {
  fill: "#FFFFFF",
  width: "800px",
  height: "800px",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0x32e89e.createElement("path", {
  d: "M75.249 184.32h92.805c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H75.249c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z"
}), _0x32e89e.createElement("path", {
  d: "M188.534 256.645V163.84c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v92.805c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
}), _0x32e89e.createElement("path", {
  d: "M178.331 844.362c-87.4-87.4-137.372-205.543-137.372-331.641 0-119.519 44.857-231.97 124.29-318.029 7.672-8.312 7.153-21.268-1.159-28.94s-21.268-7.153-28.94 1.159C48.801 260.463-.001 382.804-.001 512.721c0 137.072 54.364 265.599 149.369 360.604 7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963zm769.796-5.999h-92.805c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48h92.805c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48z"
}), _0x32e89e.createElement("path", {
  d: "M834.842 766.038v92.805c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-92.805c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"
}), _0x32e89e.createElement("path", {
  d: "M845.045 178.322c87.4 87.4 137.372 205.543 137.372 331.641 0 119.519-44.857 231.97-124.29 318.029-7.672 8.312-7.153 21.268 1.159 28.94s21.268 7.153 28.94-1.159c86.349-93.552 135.151-215.893 135.151-345.81 0-137.072-54.364-265.599-149.369-360.604-7.998-7.998-20.965-7.998-28.963 0s-7.998 20.965 0 28.963zm-87.918 495.217c16.962 0 30.72-13.758 30.72-30.72V379.047c0-16.968-13.754-30.72-30.72-30.72H268.351c-16.966 0-30.72 13.752-30.72 30.72v263.772c0 16.962 13.758 30.72 30.72 30.72h488.776zm0 40.96H268.351c-39.583 0-71.68-32.097-71.68-71.68V379.047c0-39.591 32.094-71.68 71.68-71.68h488.776c39.586 0 71.68 32.089 71.68 71.68v263.772c0 39.583-32.097 71.68-71.68 71.68z"
}), _0x32e89e.createElement("path", {
  d: "M586.34 510.932c0-40.651-32.952-73.605-73.605-73.605-40.644 0-73.595 32.956-73.595 73.605s32.951 73.605 73.595 73.605c40.653 0 73.605-32.954 73.605-73.605zm40.96 0c0 63.272-51.29 114.565-114.565 114.565-63.267 0-114.555-51.295-114.555-114.565s51.288-114.565 114.555-114.565c63.276 0 114.565 51.293 114.565 114.565z"
}));
const ExchangeIcon = "" + new URL("exchange-icon-7b628d7e.svg", import.meta.url).href;
const container$6 = "_container_sg931_1";
const actions$1 = "_actions_sg931_8";
const action_item = "_action_item_sg931_14";
const icon_container = "_icon_container_sg931_22";
const icon$1 = "_icon_sg931_22";
const label = "_label_sg931_35";
const trend_container = "_trend_container_sg931_51";
const title$2 = "_title_sg931_57";
const list$1 = "_list_sg931_74";
const styles$6 = {
  container: container$6,
  actions: actions$1,
  action_item,
  icon_container,
  icon: icon$1,
  label,
  trend_container,
  title: title$2,
  list: list$1
};
const HomepageView = () => {
  const [_0x560671, _0x1d0924] = _0x4bdebd(_0x1f417b.key);
  return <div className={styles$6.container}><div className={styles$6.actions}><ActionItem label="Purchase" icon={PurchaseIcon} onClick={() => _0x1d0924({
        view: "purchase"
      })} /><ActionItem label="Withdraw" icon={SellIcon} onClick={() => _0x1d0924({
        view: "withdraw"
      })} /><ActionItem label="Transfer" icon={ExchangeIcon} onClick={() => _0x1d0924({
        view: "transfer"
      })} /></div><div className={styles$6.trend_container}><h1 className={styles$6.title}>Trending <span onClick={() => _0x1d0924({
          view: "market"
        })}>View all</span></h1><div className={styles$6.list}>{_0x560671.stocks && _0x560671.stocks.slice(0, 6).map((param_1, param_2) => <StockItem info={param_1} key={param_2} />)}</div></div></div>;
};
const ActionItem = param_1 => {
  return <div className={styles$6.action_item} onClick={param_1.onClick}><div className={styles$6.icon_container}><img src={param_1.icon} className={styles$6.icon} /></div><h1 className={styles$6.label}>{param_1.label}</h1></div>;
};
const container$5 = "_container_1w5x2_1";
const information$1 = "_information_1w5x2_8";
const amount = "_amount_1w5x2_18";
const details$1 = "_details_1w5x2_29";
const detail_text$1 = "_detail_text_1w5x2_34";
const numbers$1 = "_numbers_1w5x2_43";
const number = "_number_1w5x2_43";
const btn$3 = "_btn_1w5x2_75";
const styles$5 = {
  container: container$5,
  information: information$1,
  amount,
  details: details$1,
  detail_text: detail_text$1,
  numbers: numbers$1,
  number,
  btn: btn$3
};
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"];
const WithdrawView = () => {
  const [_0x2d6b50] = _0x4bdebd(_0x1f417b.key);
  const [_0x53b649, _0x154b40] = _0x32e89e.useState("0");
  const [_0x3c9c50, _0x3d85bf] = _0x32e89e.useState(false);
  const varData_17 = param_1 => {
    _0x154b40(param_1_1 => {
      if (param_1_1.includes(".") && param_1 === ".") {
        return param_1_1;
      }
      if (_0x53b649 === "0" && param_1 !== ".") {
        return param_1;
      } else {
        return param_1_1 + param_1;
      }
    });
  };
  const varData_18 = () => {
    _0x154b40(param_1 => {
      if (param_1.length === 1) {
        return "0";
      }
      return param_1.slice(0, -1);
    });
  };
  const varData_19 = async () => {
    if (_0x3c9c50 || !_0x2d6b50.selectedStock) {
      return;
    }
    _0x3d85bf(true);
    const varData_20 = await _0x6b0007("stock-market:withdrawStock", {
      ticker: _0x2d6b50.selectedStock.ticker,
      amount: parseFloat(_0x53b649)
    });
    if (varData_20.data) {
      fetchCrypto();
    }
    _0x3d85bf(false);
  };
  const varData_21 = _0x32e89e.useCallback(() => {
    if (!_0x2d6b50.selectedStock) {
      return 0;
    }
    const varData_22 = parseFloat(_0x53b649);
    return _0x2d6b50.selectedStock.fee * varData_22;
  }, [_0x2d6b50.selectedStock, _0x53b649]);
  const varData_23 = _0x32e89e.useMemo(() => {
    return parseFloat(_0x53b649) - varData_21();
  }, [_0x53b649, varData_21]);
  const varData_24 = _0x2d6b50?.selectedStock?.quantity ?? 0;
  const varData_25 = _0x2d6b50?.selectedStock?.price ?? 0;
  return <div className={styles$5.container}><div className={styles$5.information}><StockOptions /><h1 className={styles$5.amount}>{_0x53b649}</h1><div className={styles$5.details}><p className={styles$5.detail_text}>Available Balance: <span>${(varData_24 * varData_25).toLocaleString()}</span></p><p className={styles$5.detail_text}>Fee: <span>${varData_21()}</span></p><p className={styles$5.detail_text}>You'll get:<span>${varData_23}</span></p></div></div><div className={styles$5.numbers}>{numbers.map(param_1 => <button className={styles$5.number} onClick={() => varData_17(param_1)} key={param_1}>{param_1}</button>)}<button className={styles$5.number} onClick={varData_18}><_0x486899 icon="backspace" /></button></div><button className={styles$5.btn} onClick={varData_19}>{_0x3c9c50 ? "Withdrawing..." : "Request Withdraw"}</button></div>;
};
const container$4 = "_container_x81h7_1";
const information = "_information_x81h7_8";
const details = "_details_x81h7_18";
const detail_text = "_detail_text_x81h7_23";
const btn$2 = "_btn_x81h7_32";
const input_container = "_input_container_x81h7_51";
const error = "_error_x81h7_84";
const styles$4 = {
  container: container$4,
  information,
  details,
  detail_text,
  btn: btn$2,
  input_container,
  error
};
const ExchangeView = () => {
  const [_0x127087] = _0x4bdebd(_0x1f417b.key);
  const [_0x2bde7c, _0x218809] = _0x32e89e.useState(0);
  const [_0xab1c5d, _0xe53598] = _0x32e89e.useState(0);
  const [_0xe73f6c, _0x1a90bb] = _0x32e89e.useState(false);
  const [_0x31a89a, _0x50c6f2] = _0x32e89e.useState(null);
  const varData_26 = async () => {
    if (_0xe73f6c || !_0x127087.selectedStock) {
      return;
    }
    if (isNaN(_0xab1c5d) || isNaN(_0x2bde7c) || _0x2bde7c < 0 || _0xab1c5d < 0) {
      return _0x50c6f2("Invalid target or stock amount...");
    }
    _0x50c6f2(null);
    _0x1a90bb(true);
    const varData_27 = await _0x6b0007("stock-market:transferStock", {
      ticker: _0x127087.selectedStock.ticker,
      amount: _0x2bde7c,
      target: _0xab1c5d
    });
    if (varData_27.data) {
      fetchCrypto();
    }
    _0x1a90bb(false);
  };
  const varData_28 = _0x127087?.selectedStock?.quantity ?? 0;
  return <div className={styles$4.container}><div className={styles$4.information}><StockOptions /><div className={styles$4.input_container}><label>Stock Amount</label><input placeholder="Enter amount.." type="number" value={_0x2bde7c} onChange={param_1 => _0x218809(parseFloat(param_1.target.value))} /></div><div className={styles$4.input_container}><label>Target (State Id)</label><input placeholder="Enter target.." type="number" value={_0xab1c5d} onChange={param_1 => _0xe53598(parseFloat(param_1.target.value))} /></div><div className={styles$4.details}><p className={styles$4.detail_text}>Available Balance: <span>{varData_28.toPrecision(6)}</span></p><p className={styles$4.detail_text}>Total: <span>{_0x2bde7c.toPrecision(6)}</span></p></div>{_0x31a89a && <p className={styles$4.error}>{_0x31a89a}</p>}</div><button className={styles$4.btn} onClick={varData_26}>{_0xe73f6c ? "Transfering..." : "Finalize Transfer"}</button></div>;
};
const container$3 = "_container_mt4at_1";
const overview = "_overview_mt4at_8";
const type = "_type_mt4at_19";
const balance = "_balance_mt4at_27";
const actions = "_actions_mt4at_34";
const btn$1 = "_btn_mt4at_39";
const transactions_container = "_transactions_container_mt4at_65";
const title$1 = "_title_mt4at_71";
const list = "_list_mt4at_88";
const transaction_item = "_transaction_item_mt4at_93";
const styles$3 = {
  container: container$3,
  overview,
  type,
  balance,
  actions,
  btn: btn$1,
  transactions_container,
  title: title$1,
  list,
  transaction_item
};
const PortfolioView = () => {
  const [_0x30a4fc, _0x36a9b2] = _0x4bdebd(_0x1f417b.key);
  const [_0x4f21d5, _0x2e8be8] = _0x32e89e.useState([]);
  const varData_29 = async () => {
    if (!_0x30a4fc.selectedStock) {
      return [];
    }
    const varData_30 = await fetchTransactions(_0x30a4fc.selectedStock.ticker);
    _0x2e8be8(varData_30);
  };
  _0x32e89e.useEffect(() => {
    varData_29();
  }, [_0x30a4fc.selectedStock]);
  return <div className={styles$3.container}><div className={styles$3.overview}><StockOptions />{_0x30a4fc.selectedStock && <h1 className={styles$3.balance}>${(_0x30a4fc.selectedStock.quantity * _0x30a4fc.selectedStock.price).toLocaleString()}<p className={styles$3.type}>{_0x30a4fc.selectedStock.quantity} {_0x30a4fc.selectedStock.ticker}</p></h1>}<div className={styles$3.actions}>{!_0x30a4fc.selectedStock?.blockPurchase && <button className={styles$3.btn} onClick={() => _0x36a9b2({
          view: "purchase"
        })}>Purchase</button>}<button className={styles$3.btn} onClick={() => _0x36a9b2({
          view: "withdraw"
        })}>Sell</button></div></div><div className={styles$3.transactions_container}><h1 className={styles$3.title}>Transactions</h1><div className={styles$3.list}><TransactionItem amount="Amount" price="Price" date="Date" />{_0x4f21d5.map((param_1, param_2) => <TransactionItem amount={param_1.amount} price={"$" + parseFloat(param_1.price).toFixed(2).toLocaleString()} date={"" + new Date(param_1.created_at * 1000).toLocaleDateString()} key={param_2} />)}</div></div></div>;
};
const TransactionItem = param_1 => {
  return <div className={styles$3.transaction_item}><p>{param_1.amount}</p><p>{param_1.price}</p><p>{param_1.date}</p></div>;
};
const SvgLogo = param_1 => _0x32e89e.createElement("svg", {
  width: 353,
  height: 128,
  viewBox: "0 0 353 128",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0x32e89e.createElement("path", {
  d: "M0 126.297L20.6744 1.70342H54.4831L38.43 99.0418H88.7783L84.1569 126.297H0Z",
  fill: "white"
}), _0x32e89e.createElement("path", {
  d: "M222.006 48.4259H188.198C188.441 45.5463 188.279 42.9506 187.711 40.6388C187.144 38.327 186.171 36.3397 184.793 34.6768C183.414 32.9734 181.61 31.6755 179.381 30.7833C177.151 29.891 174.496 29.4449 171.415 29.4449C165.496 29.4449 160.206 30.9252 155.544 33.8859C150.883 36.8061 147.011 41.0038 143.93 46.4791C140.849 51.9138 138.66 58.403 137.363 65.9468C136.228 73.2472 136.187 79.3105 137.241 84.1369C138.336 88.9632 140.464 92.5729 143.626 94.9658C146.829 97.3587 150.984 98.5551 156.092 98.5551C159.497 98.5551 162.618 98.1496 165.456 97.3384C168.334 96.5273 170.888 95.3714 173.118 93.8707C175.388 92.3295 177.313 90.5044 178.894 88.3954C180.516 86.2459 181.752 83.8733 182.604 81.2776H216.655C215.358 86.5501 213.048 91.9442 209.723 97.4601C206.399 102.935 202.102 107.985 196.832 112.608C191.562 117.191 185.36 120.902 178.225 123.741C171.091 126.58 163.064 128 154.146 128C142.471 128 132.397 125.445 123.925 120.335C115.493 115.224 109.372 107.762 105.561 97.9468C101.791 88.1318 101.041 76.1673 103.311 62.0532C105.581 48.4259 110.061 37.0089 116.749 27.8023C123.438 18.5957 131.566 11.6603 141.133 6.9962C150.7 2.33207 160.875 0 171.658 0C179.806 0 187.103 1.07478 193.549 3.22433C200.035 5.37389 205.487 8.51711 209.906 12.654C214.365 16.7503 217.649 21.7997 219.757 27.8023C221.865 33.8048 222.615 40.6793 222.006 48.4259Z",
  fill: "white"
}), _0x32e89e.createElement("path", {
  d: "M353 1.70342L332.326 126.297H304.111L270.059 60.8365H269.33L258.384 126.297H224.576L245.25 1.70342H273.951L307.516 66.9202H308.489L319.191 1.70342H353Z",
  fill: "white"
}));
const Logo = "" + new URL("logo-20926a19.svg", import.meta.url).href;
const container$2 = "_container_1otez_1";
const logo = "_logo_1otez_6";
const icon = "_icon_1otez_9";
const title = "_title_1otez_18";
const styles$2 = {
  container: container$2,
  logo,
  icon,
  title
};
const Header = () => {
  const [_0x2466c4, _0x133025] = _0x4bdebd(_0x1f417b.key);
  const varData_31 = _0x32e89e.useMemo(() => _0x2466c4.view === "homepage", [_0x2466c4.view]);
  const varData_32 = _0x32e89e.useMemo(() => APP_VIEWS.find(param_1 => param_1.view === _0x2466c4.view), [_0x2466c4.view]);
  return <div className={styles$2.container}>{varData_31 && <_0x335ed5.Fragment><img src={Logo} className={styles$2.logo} /><_0x486899 icon="bell" className={styles$2.icon} /></_0x335ed5.Fragment>}{!varData_31 && <_0x335ed5.Fragment><div onClick={() => _0x133025({
        view: "homepage"
      })}><_0x486899 icon="angle-left" className={styles$2.icon} /></div><p className={styles$2.title}>{varData_32.label}</p><_0x486899 icon="bell" className={styles$2.icon} /></_0x335ed5.Fragment>}</div>;
};
const container$1 = "_container_9gl2j_1";
const btn = "_btn_9gl2j_16";
const active = "_active_9gl2j_25";
const styles$1 = {
  container: container$1,
  btn,
  active
};
const Navigation = () => {
  const [_0x263e69, _0xea2faf] = _0x4bdebd(_0x1f417b.key);
  return <div className={styles$1.container}>{APP_VIEWS.filter(param_1 => !param_1.hidden).map((param_1, param_2) => <div onClick={() => _0xea2faf({
      view: param_1.view
    })} key={"view-" + param_1.view}><_0x486899 icon={param_1.icon} className={_0x42480c(styles$1.btn, {
        [styles$1.active]: _0x263e69.view === param_1.view
      })} key={param_1.label} /></div>)}</div>;
};
const container = "_container_12hme_1";
const inner = "_inner_12hme_8";
const styles = {
  container,
  inner
};
const CryptoApp = () => {
  const [_0x4bf641] = _0x4bdebd(_0x1f417b.key);
  _0x32e89e.useEffect(() => {
    fetchCrypto();
  }, []);
  return <div className={styles.container}><div className={styles.inner}><Header />{_0x4bf641.view === "homepage" && <HomepageView />}{_0x4bf641.view === "market" && <MarketView />}{_0x4bf641.view === "purchase" && <PurchaseView />}{_0x4bf641.view === "withdraw" && <WithdrawView />}{_0x4bf641.view === "transfer" && <ExchangeView />}{_0x4bf641.view === "portfolio" && <PortfolioView />}</div><Navigation /></div>;
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/crypto.svg";
const APP_VIEWS = [{
  icon: "home",
  label: "Home",
  view: "homepage"
}, {
  icon: "chart-bar",
  label: "Portfolio",
  view: "portfolio"
}, {
  icon: "coins",
  label: "Market",
  view: "market"
}, {
  icon: "cog",
  label: "Settings",
  view: "settings",
  hidden: true
}, {
  icon: "cog",
  label: "Purchase",
  view: "purchase",
  hidden: true
}, {
  icon: "cog",
  label: "Withdraw",
  view: "withdraw",
  hidden: true
}, {
  icon: "cog",
  label: "Transfer",
  view: "transfer",
  hidden: true
}];
const config = param_1 => {
  return {
    ...param_1,
    events: () => events,
    iconPng: myIcon,
    label: "Stocks",
    name: "crypto",
    position: 55,
    render: () => <CryptoApp />
  };
};
export { APP_VIEWS, config as default };