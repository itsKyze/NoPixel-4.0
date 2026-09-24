import { r as _0x30a80e, j as _0x18ce5c, a8 as _0x2706c6, a9 as _0x42f00c, aa as _0xcd9240, ab as _0x358077, ac as _0x3a95eb, ad as _0x2600b9, ae as _0x321e53, af as _0x12df14, ag as _0x5a8cd4, ah as _0x834176 } from "./vendor-69ed8822.js";
import { T as _0x200798 } from "./text-2b84715a.js";
import { m as _0x28a9ff } from "./styles-c7d7714e.js";
import { u as _0x37ae96, I as _0x3880fb, n as _0x1e5049 } from "./index-dcb6474f.js";
import { F as _0x4de62a } from "./input-67b043ed.js";
import { B as _0x4da389 } from "./button-b138ef6e.js";
import { appName } from "./store-0bcf49be.js";
const useStyles = _0x28a9ff({
  root: () => ({
    display: "flex",
    justifyContent: "start",
    width: "100%",
    paddingLeft: 0
  }),
  cardWrapper: param_1 => ({
    backgroundColor: "#fff",
    backgroundImage: "url('https://gta-assets.nopixel.net/images/polaroid.png')",
    color: "black",
    width: param_1.cardSize ?? "20vw"
  }),
  photoDateWrapper: () => ({
    padding: "0.2rem 1.5rem"
  }),
  photoDate: () => ({
    fontSize: "0.5em",
    fontFamily: "Quantico",
    fontWeight: "bold",
    textAlign: "right",
    margin: 0,
    padding: 0,
    color: "#9f9f9f"
  }),
  photoWrapper: () => ({
    width: "100%",
    padding: "0 1.5rem"
  }),
  photo: () => ({
    backgroundColor: "black",
    paddingTop: "100%",
    boxShadow: "0px 0px 1px #000 inset",
    maxHeight: "100%"
  }),
  photoDescription: param_1 => ({
    color: "#000",
    fontSize: "1.4rem",
    textAlign: "center",
    marginTop: "0.25rem",
    fontFamily: "Caveat",
    fontWeight: "bold",
    lineHeight: "1.5rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: param_1.lineLimit ?? "3",
    WebkitBoxOrient: "vertical",
    minHeight: "4.5rem",
    wordBreak: "break-word"
  }),
  photoDescriptionButton: () => ({
    display: "flex",
    justifyContent: "center"
  })
});
const UpdatePhotoModal = ({
  open: _0x59cbc7,
  handleClose: _0x41d753,
  currDesc: _0x2663d5
}) => {
  const [_0x4756ab, _0xba5a77] = _0x30a80e.useState("");
  _0x30a80e.useEffect(() => {
    _0xba5a77(_0x2663d5);
  }, [_0x2663d5]);
  return <_0x2706c6 open={_0x59cbc7} onClose={() => _0x41d753(false)} aria-labelledby="form-dialog-title"><_0x42f00c id="form-dialog-title" style={{
      backgroundColor: "#1c2028"
    }}>Photo Description</_0x42f00c><_0xcd9240 style={{
      backgroundColor: "#1c2028"
    }}><_0x358077>This is permanent and can't be changed.</_0x358077><section><div><_0x4de62a.TextArea onChange={param_1 => _0xba5a77(param_1)} label="Description" icon="share" value={_0x4756ab} autoFocus={true} maxLength={256} /></div></section><_0x3a95eb style={{
        backgroundColor: "#1c2028"
      }}><_0x4da389.Secondary onClick={() => _0x41d753(false)}>Cancel</_0x4da389.Secondary><_0x4da389.Primary onClick={() => {
          _0x41d753(true, _0x4756ab);
        }}>Set Description</_0x4da389.Primary></_0x3a95eb></_0xcd9240></_0x2706c6>;
};
const LazyCardMedia = param_1 => {
  const [_0x4b1882, _0xcf8c51] = _0x30a80e.useState(false);
  const varData_1 = _0x30a80e.useRef(null);
  _0x30a80e.useEffect(() => {
    if (!_0x4b1882 && varData_1.current) {
      const varData_2 = new IntersectionObserver(([{
        intersectionRatio: _0x52bb1b
      }]) => {
        if (_0x52bb1b > 0) {
          _0xcf8c51(true);
        }
      });
      varData_2.observe(varData_1.current);
      return () => varData_2.disconnect();
    }
  }, [_0x4b1882, varData_1]);
  if (_0x4b1882) {
    return <_0x2600b9 className={param_1.className} image={param_1.image} />;
  } else {
    return <div style={{
      backgroundColor: "#EEE"
    }} ref={varData_1} />;
  }
};
const ConvertTime = param_1 => {
  return new Date(param_1 * 1000).toISOString().substring(0, 10);
};
const IMAGE_EXTENSION = ".jpg";
const Photo = ({
  uuid: _0x27569f,
  data: {
    id: _0x2c9655,
    description: _0xa6bf19,
    created: _0x4126fe,
    photobookId: _0x5c066b,
    options: {
      cardSize: _0x176763,
      lineLimit: _0x5af998,
      showingOther = false,
      showingInBook = false,
      rotation = ""
    }
  }
}) => {
  const varData_3 = useStyles({
    cardSize: _0x176763,
    lineLimit: _0x5af998
  });
  const [_0x1216ba, _0x4449ac] = _0x30a80e.useState(false);
  const [_0x27d34b, _0x134849] = _0x30a80e.useState(_0xa6bf19);
  const [_0x118d7b, _0xe1c309] = _0x37ae96(appName);
  _0x30a80e.useEffect(() => {
    _0x134849(_0xa6bf19);
  }, [_0xa6bf19]);
  if (_0x27569f && _0x4126fe) {
    return <div className={varData_3.root}><_0x321e53 className={varData_3.cardWrapper}><_0x12df14 className={varData_3.photoDateWrapper} title={<_0x200798 variant="h6" className={varData_3.photoDate}>{ConvertTime(_0x4126fe)}</_0x200798>} /><div className={varData_3.photoWrapper}>{showingInBook ? <_0x2600b9 className={varData_3.photo} image={_0x118d7b.BASE_URL ? _0x118d7b.BASE_URL + _0x27569f + IMAGE_EXTENSION : "https://i.imgur.com/5G2zYum.png"} /> : <LazyCardMedia className={varData_3.photo} image={_0x118d7b.BASE_URL ? _0x118d7b.BASE_URL + _0x27569f + IMAGE_EXTENSION : "https://i.imgur.com/5G2zYum.png"} />}</div><_0x5a8cd4>{!_0x27d34b && showingInBook ? <div className={varData_3.photoDescriptionButton}><_0x834176 variant="extended" size="small" color="secondary" aria-label="add" className={varData_3.photoActionButton} onClick={() => {
              _0x4449ac(true);
            }}><_0x3880fb icon="marker" /> Add description</_0x834176></div> : <_0x200798 variant="body2" className={varData_3.photoDescription} style={{
            transform: rotation
          }}>{_0x27d34b}</_0x200798>}</_0x5a8cd4></_0x321e53><UpdatePhotoModal open={_0x1216ba} handleClose={async (param_1, param_2) => {
        if (param_1) {
          const varData_4 = _0x118d7b.photoBook;
          varData_4.photos[_0x27569f].description = param_2;
          _0xe1c309({
            photoBook: {
              ...varData_4
            }
          });
          _0x134849(param_2);
          _0x1e5049("np-polaroid:setDescription", {
            photobookId: _0x5c066b,
            id: _0x2c9655,
            uuid: _0x27569f,
            description: param_2
          });
        }
        _0x4449ac(false);
      }} currDesc="" /></div>;
  } else {
    return null;
  }
};
export { Photo as P };