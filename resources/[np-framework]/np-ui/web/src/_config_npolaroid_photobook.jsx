import { j as _0x14eac2, a8 as _0x192319, a9 as _0x3bed46, ac as _0x382ca0, r as _0x2d7d58, ai as _0x3b2fe6, aj as _0x5c6bc0, u as _0x193a20 } from "./vendor.jsx";
import _0x199bb2 from "./store_npolaroid_photobook.js";
import { A as _0x2409c5 } from "./ui-app.jsx";
import { m as _0x2d8094 } from "./styles.js";
import { P as _0x5b8200 } from "./phone_icons.jsx";
import { u as _0x1eef7d, n as _0x13dda3, I as _0x4afe1c, k as _0x4deb4b, C as _0x428c3b } from "./ui_core.js";
import { B as _0x189ca6 } from "./button.jsx";
import { appName } from "./store_npolaroid_photo.js";
import "./commonjsHelpers.js";
import "./text.jsx";
import "./input.jsx";
import "./loading.jsx";
import "./vite.js";
import "./bundle.js";
const useStyles$1 = _0x2d8094({
  photoBookBacking: () => ({
    backgroundColor: "rgb(200,200,200, 0.3)",
    padding: "3rem",
    borderRadius: "0.5rem",
    position: "relative",
    height: "90vh",
    width: "75vw"
  }),
  photobookPlastic: () => ({
    padding: "3rem",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    rowGap: "5rem",
    columnGap: "5rem",
    overflowY: "scroll",
    pointerEvents: "all",
    userSelect: "none",
    animation: "fadeIn 2s"
  }),
  tapeSection: () => ({
    position: "absolute",
    width: "100%",
    "&:first-of-type": {
      top: "0"
    },
    "&:last-of-type": {
      bottom: "0"
    },
    "&:before, &:after": {
      content: "''",
      width: "5vmin",
      height: "2vmin",
      position: "absolute",
      backgroundColor: "#dbd8be",
      opacity: "0.6",
      borderRight: "1px dotted #b7b49d",
      borderLeft: "1px dotted #b7b49d"
    },
    "&:last-of-type:after": {
      transform: "rotate(-55deg)",
      right: "-2vmin",
      top: "-2vmin"
    },
    "&:first-of-type:before": {
      transform: "rotate(-55deg)",
      left: "-2vmin"
    },
    "&:first-of-type:after": {
      transform: "rotate(55deg)",
      right: "-2vmin",
      opacity: 0,
      top: 0
    },
    "&:last-of-type:before": {
      transform: "rotate(55deg)",
      left: "-2vmin",
      bottom: "0",
      opacity: 0
    }
  }),
  photoAction: () => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    padding: "1rem",
    gap: "1.5rem"
  })
});
const useStyles = _0x2d8094({
  modalContainer: () => ({
    background: "#31394d"
  }),
  modalTitle: () => ({
    color: "#fff",
    textAlign: "center",
    background: "#31394d"
  }),
  listingBtn: () => ({
    fontSize: 11,
    color: "#fff",
    fontWeight: 500,
    textTransform: "none",
    backgroundColor: "#3787FF"
  }),
  listingRedBtn: () => ({
    fontSize: 11,
    color: "#fff",
    fontWeight: 500,
    textTransform: "none",
    backgroundColor: "#c74242"
  })
});
const ConfirmationModal = param_1 => {
  const varData_1 = useStyles();
  const varData_2 = () => {
    param_1.confirm();
    param_1.close();
  };
  return <_0x192319 open={param_1.show} onClose={param_1.close} aria-labelledby="form-dialog-title"><_0x3bed46 id="form-dialog-title" className={varData_1.modalTitle}>{param_1.children}</_0x3bed46><_0x382ca0 className={varData_1.modalContainer}><_0x189ca6.Primary className={varData_1.listingBtn} onClick={varData_2}>Confirm</_0x189ca6.Primary><_0x189ca6.Primary className={varData_1.listingRedBtn} onClick={param_1.close}>Cancel</_0x189ca6.Primary></_0x382ca0></_0x192319>;
};
const DisplayPhotoModal = ({
  photo: _0x1dd8b2,
  setCurrentPhoto: _0x30b7bb
}) => {
  const [_0x3ba8a8, _0xa4066b] = _0x1eef7d(appName);
  const [_0x3d7f3c, _0xf26a8a] = _0x2d7d58.useState(false);
  const varData_3 = async param_1 => {
    const varData_4 = _0x3ba8a8.photoBook.photos[_0x1dd8b2.uuid];
    await _0x13dda3("np-polaroid:showOthers", {
      photoInfo: {
        uuid: _0x1dd8b2.uuid,
        description: varData_4.description,
        created: _0x1dd8b2.created
      },
      fromBinder: true
    });
    _0x30b7bb(undefined);
  };
  const varData_5 = () => {
    const varData_6 = {
      ..._0x3ba8a8.photoBook
    };
    delete varData_6.photos[_0x1dd8b2.uuid];
    _0x30b7bb(undefined);
    _0xa4066b({
      photoBook: varData_6
    });
  };
  const varData_7 = async param_1 => {
    await _0x13dda3("np-polaroid:moveToInventory", {
      id: _0x1dd8b2.id,
      uuid: _0x1dd8b2.uuid,
      photoBookId: _0x3ba8a8.photoBook.id
    });
    varData_5();
  };
  const varData_8 = async () => {
    await _0x13dda3("np-polaroid:deletePhoto", {
      id: _0x1dd8b2.id,
      uuid: _0x1dd8b2.uuid,
      photoBookId: _0x3ba8a8.photoBook.id
    });
    varData_5();
  };
  const varData_9 = useStyles$1(true);
  return <div><_0x3b2fe6 disableEnforceFocus={true} open={_0x1dd8b2 ? true : false} onClose={() => _0x30b7bb(undefined)} style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}><div><_0x5b8200 uuid={_0x1dd8b2.uuid} data={{
          ..._0x3ba8a8.photoBook.photos[_0x1dd8b2.uuid],
          photobookId: _0x3ba8a8.photoBook.id,
          options: {
            rotation: _0x1dd8b2.rotation,
            cardSize: "40vw",
            lineLimit: 10,
            showingInBook: true
          }
        }} /><div className={varData_9.photoAction}><_0x5c6bc0 variant="extended" size="small" color="primary" aria-label="add" className={varData_9.photoActionButton} onMouseUp={varData_3}><_0x4afe1c icon="share" /> Show others</_0x5c6bc0><_0x5c6bc0 variant="extended" size="small" color="secondary" aria-label="add" className={varData_9.photoActionButton} onMouseUp={varData_7}><_0x4afe1c icon="archive" /> Move to Inventory</_0x5c6bc0><_0x5c6bc0 variant="extended" size="small" color="default" aria-label="add" className={varData_9.photoActionButton} onClick={() => _0xf26a8a(true)} style={{
            backgroundColor: "rgb(199, 66, 66)",
            color: "white"
          }}><_0x4afe1c icon="trash" /> Delete</_0x5c6bc0></div></div></_0x3b2fe6><ConfirmationModal show={_0x3d7f3c} close={() => _0xf26a8a(false)} confirm={varData_8}>Are you sure you want to delete this photo?</ConfirmationModal></div>;
};
function flattenAndSortPhotos(param_1) {
  const varData_10 = Object.entries(param_1).map(([_0x3a3ab6, _0x23ca69]) => ({
    ..._0x23ca69,
    rotation: "rotate(" + (Math.random() > 0.5 ? "-" : "") + "0.9deg)",
    uuid: _0x3a3ab6
  }));
  return varData_10.sort((param_1_1, param_2) => param_2.created - param_1_1.created);
}
const Photobook = () => {
  const varData_11 = useStyles$1(true);
  const varData_12 = _0x193a20(param_1 => param_1[_0x199bb2.key]);
  const [_0x49faae, _0x2454d5] = _0x2d7d58.useState();
  const varData_13 = _0x2d7d58.useMemo(() => flattenAndSortPhotos(varData_12.photoBook.photos), [varData_12.photoBook]);
  return varData_12.photoBook.photos && <div className={varData_11.photoBookBacking}><div className={varData_11.photobookPlastic}>{varData_13.map((param_1, param_2) => <div style={{
        transform: param_1.rotation
      }} onClick={param_1_1 => _0x2454d5(param_1)} className={varData_11.photoWrapper} key={"photo_" + param_2}><div className={varData_11.tapeSection} /><_0x5b8200 uuid={param_1.uuid} data={{
          ...varData_12.photoBook.photos[param_1.uuid],
          photobookId: varData_12.photoBook.id,
          options: {
            cardSize: "100%",
            rotation: param_1.rotation
          }
        }} /><div className={varData_11.tapeSection} /></div>)}</div><div>{_0x49faae && <DisplayPhotoModal photo={_0x49faae} setCurrentPhoto={_0x2454d5} />}</div></div>;
};
const updatePhotoState = param_1 => _0x4deb4b(param_1_1 => ({
  ...param_1_1,
  [_0x199bb2.key]: {
    ...param_1_1[_0x199bb2.key],
    ...param_1
  }
}))();
const App = () => {
  const varData_14 = _0x193a20(param_1 => param_1[_0x199bb2.key].showPhotoBook);
  const varData_15 = param_1 => {
    updatePhotoState({
      showPhotoBook: true,
      photoBook: param_1
    });
  };
  const varData_16 = () => {
    updatePhotoState({
      showPhotoBook: false,
      photoBook: {}
    });
  };
  return <_0x2409c5 center={true} name="npolaroid-photobook" onError={varData_16} onEscape={varData_16} onHide={varData_16} onShow={varData_15}>{varData_14 && <Photobook />}</_0x2409c5>;
};
const config = () => {
  return {
    name: "npolaroid-photobook",
    render: App,
    type: _0x428c3b.Application
  };
};
export { config as default };