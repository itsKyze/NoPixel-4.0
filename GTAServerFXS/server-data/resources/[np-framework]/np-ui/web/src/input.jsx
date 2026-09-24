import { j as _0xa4be9c, I as _0x4966e0, H as _0x16f530, J as _0x4113e3, K as _0x3c56df, L as _0x28e4f1, N as _0x274728, O as _0x573bee, r as _0x361097, Q as _0x411b82, V as _0x2ad815, R as _0x498b20, W as _0x538ebf, D as _0x1dedde, Y as _0x2734cd, Z as _0x468760, _ as _0x3ae4c5, a0 as _0x571fa7, a1 as _0x20dad1 } from "./vendor.jsx";
import { T as _0x586b82 } from "./text.jsx";
import { I as _0x54946f, h as _0x52c92d, m as _0x8ab82c, p as _0x30712c, s as _0x50531b } from "./ui_core.js";
import { m as _0x2519b3, b as _0x449655 } from "./styles.js";
import { B as _0x33e3bd } from "./loading.jsx";
const useStyles = _0x2519b3(param_1 => ({
  root: {
    "& .Mui-focused, .MuiFormControlLabel-root, .MuiInput-underline:after, .MuiInputAdornment-root": {
      color: param_1.palette.text.secondary + " !important",
      borderColor: param_1.palette.text.secondary + " !important"
    }
  },
  imageListContainer: () => ({
    display: "flex",
    flexDirection: "column",
    maxHeight: _0x449655.responsiveHeight(384),
    overflowY: "scroll",
    marginTop: 16,
    gap: _0x449655.responsiveHeight(8)
  }),
  pageImageContainer: () => ({
    display: "flex",
    justifyContent: "space-between",
    alignContent: "flex-start"
  }),
  pageImage: () => ({
    width: _0x449655.responsiveWidth(200)
  }),
  pageUrlInputContainer: () => ({
    display: "flex",
    gap: _0x449655.responsiveWidth(8)
  }),
  addButton: () => ({
    minWidth: _0x449655.responsiveWidth(32),
    height: "auto"
  }),
  removeButton: () => ({
    minWidth: _0x449655.responsiveWidth(32),
    marginTop: _0x449655.responsiveWidth(14)
  }),
  pageUrlInput: () => ({
    flexGrow: "1"
  })
}));
const useEmailStyles = _0x2519b3(param_1 => ({
  root: param_1_1 => ({
    "& .Mui-focused, .MuiFormControlLabel-root, .MuiInput-underline:after, .MuiInputAdornment-root": {
      color: param_1.palette.text.secondary + " !important",
      borderColor: param_1.palette.text.secondary + " !important"
    },
    "& .MuiChip-root.MuiAutocomplete-tag.MuiChip-outlined.MuiChip-deletable": {
      height: "24px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between"
    },
    "& .MuiAutocomplete-inputRoot[class*=\"MuiInput-root\"]": {
      overflowY: "auto",
      maxHeight: !param_1_1.isEditingCC ? "36px" : "initial"
    }
  })
}));
function FormInput({
  adornment = null,
  autoFocus = false,
  error = false,
  iconAdornment = null,
  label = "",
  helperText = "",
  multiline = false,
  onChange = param_1 => {},
  placeholder = "",
  rows = 1,
  maxRows = 0,
  minRows = 0,
  style = {},
  type = "",
  value = "",
  onPaste = () => {},
  disabled = false,
  onKeyUp = () => {},
  maxLength = -1,
  InputProps = {}
}) {
  let varData_1 = <_0x4966e0 position="start">{adornment}</_0x4966e0>;
  if (iconAdornment) {
    varData_1 = <_0x4966e0 position="start"><_0x54946f icon={iconAdornment} /></_0x4966e0>;
  }
  return <div className="input-wrapper" style={style}>{multiline === true ? <_0x16f530 style={{
      width: "100%"
    }}><div style={{
        height: 50
      }}><_0x4113e3 style={{
          width: "100%"
        }}>{label}</_0x4113e3></div><div><_0x3c56df autoFocus={autoFocus} onChange={onChange} maxRows={maxRows} minRows={minRows} value={value} style={{
          width: "100%"
        }} maxLength={maxLength} /></div>{helperText && <_0x28e4f1>{helperText}</_0x28e4f1>}</_0x16f530> : <_0x274728 autoFocus={autoFocus} error={error} helperText={helperText} label={label} multiline={multiline} onChange={onChange} placeholder={placeholder} inputProps={{
      maxLength
    }} InputProps={{
      startAdornment: varData_1,
      ...InputProps
    }} minRows={rows} type={type} value={value} style={{
      width: "100%"
    }} disabled={disabled} onPaste={onPaste} onKeyUp={onKeyUp} />}</div>;
}
FormInput.Name = ({
  autoFocus = false,
  onChange: _0x1aace0,
  value: _0x2ab8ed,
  label = "Name",
  disabled = false
}) => <FormInput autoFocus={autoFocus} iconAdornment="user" label={label} onChange={param_1 => _0x1aace0(param_1.target.value, param_1)} value={_0x2ab8ed} disabled={disabled} />;
FormInput.Search = ({
  autoFocus = false,
  onChange: _0x47778a,
  value: _0x42e341,
  style = {}
}) => <FormInput autoFocus={autoFocus} iconAdornment="search" placeholder="Search" style={style} onChange={param_1 => _0x47778a(param_1.target.value, param_1)} value={_0x42e341} />;
FormInput.Phone = async ({
  autoFocus = false,
  onChange: _0x1e0b42,
  useNormalInput = false,
  value = ""
}) => {
  if (useNormalInput) {
    return <FormInput autoFocus={autoFocus} iconAdornment="phone" label="Phone Number" onChange={param_1 => _0x1e0b42(param_1.target.value.replace(/[^0-9]+/g, "").substring(0, 10), param_1)} value={value} />;
  }
  const varData_2 = await _0x52c92d();
  return <_0x573bee freeSolo={true} value={value} onChange={(param_1, param_2) => {
    if (typeof param_2 === "string") {
      _0x1e0b42(param_2);
    } else if (param_2 && param_2.inputValue) {
      _0x1e0b42(param_2.inputValue);
    } else if (param_2 && param_2.number) {
      _0x1e0b42(param_2.number);
    } else {
      _0x1e0b42("");
    }
  }} defaultValue={value} id={"autocomplete-" + Math.random()} filterOptions={param_1 => param_1.filter(param_1_1 => !value || ("" + param_1_1.title + param_1_1.number).toLowerCase().indexOf(value.toLowerCase()) !== -1)} options={varData_2.map(param_1 => ({
    title: param_1.name,
    number: param_1.number
  }))} getOptionLabel={param_1 => param_1.number || param_1} style={{
    width: "100%"
  }} renderInput={param_1 => <_0x274728 {...param_1} autoFocus={autoFocus} label="Phone Number" style={{
    width: "100%"
  }} onChange={param_1_1 => _0x1e0b42(param_1_1.target.value, param_1_1)} />} renderOption={param_1 => <_0x586b82>{param_1.title}</_0x586b82>} />;
};
FormInput.Password = ({
  autoFocus = false,
  onChange: _0x33f054,
  value: _0x31187f,
  label = "Password"
}) => <FormInput autoFocus={autoFocus} iconAdornment="user-lock" label={label} onChange={param_1 => _0x33f054(param_1.target.value, param_1)} type="password" value={_0x31187f} />;
FormInput.CityID = ({
  autoFocus = false,
  onChange: _0x11e41e,
  value: _0x4c6519
}) => <FormInput autoFocus={autoFocus} iconAdornment="id-card" label="State ID" onChange={param_1 => _0x11e41e(param_1.target.value, param_1)} value={_0x4c6519} />;
FormInput.AccountID = ({
  autoFocus = false,
  label = "ID",
  onChange: _0x1629d0,
  value: _0x3063cb
}) => <FormInput autoFocus={autoFocus} iconAdornment="passport" label={"Account " + label} onChange={param_1 => _0x1629d0(param_1.target.value, param_1)} value={_0x3063cb} />;
FormInput.Business = ({
  autoFocus = false,
  onChange: _0x569a09,
  value: _0xf2b3e3
}) => <FormInput autoFocus={autoFocus} iconAdornment="briefcase" label="Business Name" onChange={param_1 => _0x569a09(param_1.target.value, param_1)} value={_0xf2b3e3} />;
FormInput.PaypalID = ({
  autoFocus = false,
  onChange: _0x1c7658,
  value: _0x3feab9
}) => <FormInput autoFocus={autoFocus} iconAdornment="id-card-alt" placeholder="Paypal ID" onChange={param_1 => _0x1c7658(param_1.target.value, param_1)} value={_0x3feab9} />;
FormInput.Currency = ({
  autoFocus = false,
  onChange: _0x47e055,
  style = {},
  value: _0x5a4185,
  label = "",
  disabled = false
}) => <FormInput autoFocus={autoFocus} iconAdornment="dollar-sign" helperText={_0x8ab82c(_0x5a4185 || 0)} label={label || "Amount"} onChange={param_1 => _0x47e055(param_1.target.value, param_1)} style={style} value={_0x5a4185} disabled={disabled} />;
FormInput.Comment = ({
  autoFocus = false,
  onChange: _0x3960a9,
  value: _0x17f7e8
}) => <FormInput autoFocus={autoFocus} iconAdornment="comment" label="Comment" onChange={param_1 => _0x3960a9(param_1.target.value, param_1)} value={_0x17f7e8} />;
FormInput.Text = ({
  autoFocus = false,
  icon: _0x56498f,
  label: _0x336d5e,
  onChange: _0x3600d2,
  placeholder = "",
  value: _0x14c73e,
  helperText = "",
  onPaste = () => {},
  onKeyUp = () => {},
  maxLength = -1,
  onClick = () => {},
  InputProps = {}
}) => <FormInput autoFocus={autoFocus} iconAdornment={_0x56498f} label={_0x336d5e} onChange={param_1 => _0x3600d2(param_1.target.value, param_1)} placeholder={placeholder} value={_0x14c73e} helperText={helperText} onPaste={onPaste} onKeyUp={onKeyUp} maxLength={maxLength} onClick={onClick} InputProps={InputProps} />;
FormInput.TextArea = ({
  autoFocus = false,
  icon: _0x307040,
  label = null,
  helperText = "",
  onChange: _0x52c028,
  value: _0x4b925e,
  maxLength = -1,
  placeholder = ""
}) => <FormInput autoFocus={autoFocus} iconAdornment={_0x307040} label={label} helperText={helperText} onChange={param_1 => _0x52c028(param_1.target.value, param_1)} value={_0x4b925e} multiline={true} minRows={2} maxRows={20} placeholder={placeholder} maxLength={maxLength} />;
const CImageList = ({
  autoFocus = false,
  icon: _0x3e8ab1,
  label: _0x4b5b0c,
  minWidth: _0x343b2f,
  minHeight: _0x35ecb0,
  onChange: _0x4163b2,
  placeholder = "",
  value: _0x179ea7,
  onPaste = () => {},
  onKeyUp = () => {},
  maxLength = -1,
  InputProps = {}
}) => {
  const [_0x5f2bb9, _0x13c841] = _0x361097.useState(_0x179ea7 ?? []);
  const [_0x16bc3b, _0x7c9ac2] = _0x361097.useState("");
  const [_0x4681c7, _0x832248] = _0x361097.useState("");
  const varData_3 = _0x361097.useRef(null);
  _0x361097.useEffect(() => {
    varData_3.current?.scroll({
      top: varData_3.current?.scrollHeight,
      behavior: "smooth"
    });
  }, [_0x5f2bb9]);
  const varData_4 = (param_1, param_2) => {
    const varData_5 = Math.abs(param_1.naturalWidth / param_2.naturalWidth);
    const varData_6 = Math.abs(param_1.naturalHeight / param_2.naturalHeight);
    return varData_5 < 1.1 && varData_5 > 0.9 && varData_6 < 1.1 && varData_6 > 0.9;
  };
  const varData_7 = param_1 => {
    return new Promise((param_1_1, param_2) => {
      let varData_8 = new Image();
      varData_8.onload = () => param_1_1(varData_8);
      varData_8.onerror = param_1_2 => param_2(param_1_2);
      varData_8.src = param_1;
    });
  };
  const varData_9 = async () => {
    if (_0x16bc3b.length === 0) {
      return;
    }
    const varData_10 = await varData_7(_0x16bc3b);
    if (_0x343b2f && varData_10.naturalWidth < _0x343b2f) {
      return _0x832248("Your pages must be at least " + _0x343b2f + "x" + _0x35ecb0 + ".");
    }
    if (_0x35ecb0 && varData_10.naturalHeight < _0x35ecb0) {
      return _0x832248("Your pages must be at least " + _0x343b2f + "x" + _0x35ecb0 + ".");
    }
    if (_0x5f2bb9.length > 0 && !varData_4(_0x5f2bb9[0], varData_10)) {
      return _0x832248("Your pages must all be approximately the same size.");
    }
    _0x832248("");
    const varData_11 = [..._0x5f2bb9, varData_10];
    _0x13c841(varData_11);
    _0x7c9ac2("");
    _0x4163b2({
      pagesUrls: varData_11.map(param_1 => param_1.src),
      width: varData_11[0]?.naturalWidth ?? 0,
      height: varData_11[0]?.naturalHeight ?? 0
    });
  };
  const varData_12 = param_1 => {
    if (_0x5f2bb9.length === 0) {
      return;
    }
    _0x832248("");
    const varData_13 = [..._0x5f2bb9];
    varData_13.splice(param_1, 1);
    _0x13c841(varData_13);
    _0x4163b2({
      pagesUrls: varData_13.map(param_1_1 => param_1_1.src),
      width: varData_13[0]?.naturalWidth ?? 0,
      height: varData_13[0]?.naturalHeight ?? 0
    });
  };
  const varData_14 = useStyles();
  return <div><_0x4113e3 className="MuiInputLabel-shrink" style={{
      width: "100%"
    }}>{_0x4b5b0c}</_0x4113e3><div className={varData_14.imageListContainer} ref={varData_3}>{_0x5f2bb9.map((param_1, param_2) => <div className={varData_14.pageImageContainer}><img src={param_1.src} className={varData_14.pageImage} /><_0x33e3bd className={varData_14.removeButton} onClick={() => varData_12(param_2)} type="primary">-</_0x33e3bd></div>)}</div><div className={varData_14.pageUrlInputContainer}><div className={varData_14.pageUrlInput}><FormInput autoFocus={autoFocus} iconAdornment={_0x3e8ab1} onChange={param_1 => _0x7c9ac2(param_1.target.value)} placeholder={placeholder} value={_0x16bc3b} error={_0x4681c7.length > 0} helperText={_0x4681c7} onPaste={onPaste} onKeyUp={onKeyUp} maxLength={maxLength} InputProps={InputProps} /></div><_0x33e3bd className={varData_14.addButton} onClick={() => varData_9()} type="primary">+</_0x33e3bd></div></div>;
};
FormInput.ImageList = CImageList;
const CCheckbox = ({
  checked: _0x33da55,
  label: _0x1b12d1,
  labelPlacement: _0x50a768,
  onChange: _0x43f811
}) => {
  return <_0x16f530><_0x411b82 control={<_0x2ad815 checked={_0x33da55} onChange={param_1 => _0x43f811(param_1.target.checked)} />} label={_0x1b12d1} labelPlacement={_0x50a768} /></_0x16f530>;
};
FormInput.Checkbox = CCheckbox;
const CSelect = ({
  items: _0x220dea,
  label: _0x92bac4,
  onChange: _0x3a3ac5,
  value: _0x4ff1b5
}) => {
  _0x498b20.useEffect(() => {
    if (_0x4ff1b5) {
      _0x3a3ac5(_0x4ff1b5);
    }
  }, [_0x4ff1b5]);
  return <_0x16f530><_0x4113e3>{_0x92bac4}</_0x4113e3><_0x538ebf value={_0x4ff1b5} onChange={param_1 => _0x3a3ac5(param_1.target.value, param_1)}>{_0x220dea.map(({
        id: _0x22f12a,
        name: _0x19b8ef
      }) => <_0x1dedde value={_0x22f12a} key={_0x22f12a}>{_0x19b8ef}</_0x1dedde>)}</_0x538ebf></_0x16f530>;
};
FormInput.Select = CSelect;
FormInput.DatePicker = ({
  label: _0x116be5,
  onChange: _0x2c854e,
  value: _0x48016d
}) => {
  return <_0x2734cd utils={_0x468760}><_0x3ae4c5 autoOk={true} disableToolbar={true} className="mui-datepicker" variant="inline" format="MM/dd/yyyy" margin="normal" label={_0x116be5} value={new Date(_0x48016d)} onChange={_0x2c854e} /></_0x2734cd>;
};
FormInput.DateTimePicker = ({
  label: _0x3248fa,
  onChange: _0x2f88c6,
  value: _0xd3e02e
}) => {
  return <_0x2734cd utils={_0x468760}><_0x571fa7 autoOk={true} className="mui-datepicker" variant="inline" format="MM/dd/yyyy HH:mm" margin="normal" label={_0x3248fa} value={_0xd3e02e} onChange={_0x2f88c6} /></_0x2734cd>;
};
const ChipSelect = ({
  label: _0x26474c,
  onChange: _0x465fca,
  value: _0x56c197,
  items: _0x464ca2,
  disabled = false
}) => {
  return <_0x16f530><_0x4113e3 id="chip-select">{_0x26474c}</_0x4113e3><_0x538ebf labelId="chip-select" multiple={true} value={_0x56c197} onChange={_0x465fca} disabled={disabled} renderValue={param_1 => <div>{param_1.map(param_1_1 => <_0x20dad1 label={param_1_1} key={param_1_1} />)}</div>}>{_0x464ca2.map(({
        id: _0x3b1638,
        name: _0x5434cd
      }) => <_0x1dedde value={_0x3b1638} key={_0x3b1638}>{_0x5434cd}</_0x1dedde>)}</_0x538ebf></_0x16f530>;
};
FormInput.ChipSelect = ChipSelect;
const Email = ({
  autoFocus = false,
  onChange: _0x11fbfa,
  label = "Email",
  readOnly = false,
  useNormalInput = false,
  value = ""
}) => {
  const varData_15 = useEmailStyles();
  if (useNormalInput) {
    return <FormInput autoFocus={autoFocus} iconAdornment="at" helperText={_0x30712c(value)} label="Email" onChange={_0x11fbfa} value={value} />;
  }
  const varData_16 = _0x50531b.getState()["phone.apps.lifeinvader"].list;
  return <_0x16f530 classes={varData_15}><_0x573bee freeSolo={true} value={value} onChange={(param_1, param_2) => {
      if (typeof param_2 === "string") {
        _0x11fbfa(param_2);
      } else if (param_2 && param_2.inputValue) {
        _0x11fbfa(param_2.inputValue);
      } else if (param_2 && param_2.email) {
        _0x11fbfa(param_2.email);
      } else {
        _0x11fbfa("");
      }
    }} defaultValue={value} id={"autocomplete-" + Math.random()} filterOptions={param_1 => param_1.filter(param_1_1 => !value || ("" + param_1_1.title + param_1_1.email).toLowerCase().indexOf(value.toLowerCase()) !== -1)} options={varData_16.map(param_1 => ({
      title: param_1.name,
      email: param_1.email
    }))} getOptionLabel={param_1 => param_1.email || param_1} style={{
      width: "100%"
    }} disabled={readOnly} renderInput={param_1 => <_0x274728 {...param_1} autoFocus={autoFocus} label={label} style={{
      width: "100%"
    }} onChange={param_1_1 => _0x11fbfa(param_1_1.target.value, param_1_1)} />} renderOption={param_1 => <_0x586b82>{param_1.title}</_0x586b82>} /></_0x16f530>;
};
FormInput.Email = Email;
const MultiEmail = ({
  label = "Emails",
  onChange: _0x5b487a,
  value = [],
  readOnly = false
}) => {
  const [_0x1cf03e, _0x4c6036] = _0x361097.useState(false);
  const varData_17 = useEmailStyles({
    isEditingCC: _0x1cf03e
  });
  const varData_18 = _0x50531b.getState()["phone.apps.lifeinvader"].list;
  return <_0x16f530 classes={varData_17}><_0x573bee multiple={true} id="tags-filled" options={varData_18.map(param_1 => ({
      title: param_1.name,
      email: param_1.email
    }))} defaultValue={value} value={value} freeSolo={true} onChange={(param_1, param_2) => {
      if (readOnly) {
        return;
      }
      const varData_19 = param_2.map(param_1_1 => typeof param_1_1 === "string" ? {
        title: param_1_1,
        email: param_1_1
      } : param_1_1);
      const varData_20 = varData_19.filter((param_1_1, param_2_1, param_3) => param_3.findIndex(param_1_2 => param_1_2.email === param_1_1.email) === param_2_1);
      _0x5b487a(varData_20);
    }} onFocus={() => _0x4c6036(true)} onBlur={() => _0x4c6036(false)} getOptionLabel={param_1 => param_1.title || param_1} renderTags={(param_1, param_2) => param_1.map((param_1_1, param_2_1) => <_0x20dad1 variant="outlined" label={param_1_1.title} {...param_2({
      index: param_2_1
    })} />)} renderInput={param_1 => <_0x274728 {...param_1} InputProps={{
      ...param_1.InputProps,
      readOnly
    }} label={label} placeholder="Enter address..." />} /></_0x16f530>;
};
FormInput.MultiEmail = MultiEmail;
export { FormInput as F };