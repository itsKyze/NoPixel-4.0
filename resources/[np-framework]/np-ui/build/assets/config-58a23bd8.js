import { j as _0x1c194c, A as _0x5acb2a, m as _0x137e0b, r as _0x4dafbe, aN as _0x357f95, R as _0x5b8e90, n as _0x427b73 } from "./vendor-69ed8822.js";
import { s as _0x4086e1, k as _0x3fed2e, n as _0x353691, v as _0x9833ed, K as _0x3a0cc4, I as _0x108197, u as _0x2fd781, a as _0x46c1b6, A as _0x55c0dc } from "./index-dcb6474f.js";
import _0x22aa73 from "./store-52786cd5.js";
import { b as _0x4e2905, c as _0x5c0061, a as _0x1888fa, m as _0x2127fe, d as _0x207351 } from "./_config-dc44e3da.js";
import { F as _0x3a0185 } from "./input-67b043ed.js";
import { S as _0x4aedbf } from "./simple-form-10871a3d.js";
import { D as _0x274500 } from "./datetime-adb6ea7b.js";
import { G as _0x3f96c0 } from "./index-95666621.js";
import { D as _0x543da1 } from "./duration-timer-dc979963.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
import "./ui-app-b5e34f38.js";
import "./store-8a444d41.js";
import "./text-2b84715a.js";
import "./styles-c7d7714e.js";
import "./index-6dbd65c5.js";
import "./date-31836fe8.js";
const getState = () => _0x4086e1.getState()[_0x22aa73.key];
const updateState = param_1 => _0x3fed2e(param_1_1 => ({
  ...param_1_1,
  [_0x22aa73.key]: {
    ...param_1_1[_0x22aa73.key],
    ...param_1
  }
}))();
const getDocuments = async (param_1, _0x3f23aa = true, _0x14c4db = 1, _0x1ce961 = 2, _0x1c5172 = 3, _0x5a455a = 4) => {
  const varData_1 = getState();
  const varData_2 = param_1 === -1 ? varData_1.documentTypes.find(param_1_1 => param_1_1.name === "Notes").id : varData_1.notesTypeId;
  const varData_3 = param_1 !== -1 ? param_1 : varData_2;
  const varData_4 = varData_1.documentTypes.find(param_1_1 => param_1_1.id === varData_3);
  updateState({
    notesTypeId: varData_2,
    selectedDocumentType: varData_4
  });
  const varData_5 = await ([2, 4].includes(varData_3) ? _0x353691("np-ui:getDocuments", {
    type_id: varData_3
  }, {
    returnData: _0x9833ed.getDocuments(varData_3)
  }) : _0x353691("phone/getDocuments", {
    type_id: varData_3
  }, {
    returnData: _0x9833ed.getDocuments(varData_3),
    extApi: true
  }));
  const varData_6 = {
    fromShare: false,
    list: varData_5.data
  };
  updateState(varData_6);
};
const createDocument = () => {
  updateState({
    document: _0x22aa73.initialState.document,
    page: "editing"
  });
};
const saveDocument = async () => {
  const varData_7 = getState();
  _0x4e2905();
  const varData_8 = varData_7.document.id === -1;
  const varData_9 = "np-ui:" + (!varData_8 ? "edit" : "create") + "Document";
  const varData_10 = await _0x353691(varData_9, {
    type_id: varData_7.selectedDocumentType.id,
    document: varData_7.document
  });
  if (!varData_10.meta.ok) {
    _0x5c0061(varData_10.meta.message, true);
    return;
  }
  if (!varData_8) {
    startEditDocument(false);
  } else {
    getDocuments(varData_7.selectedDocumentType.id, varData_8);
  }
  _0x1888fa();
};
const viewDocument = async (param_1, _0x3c23ac = false) => {
  _0x4e2905();
  const varData_11 = await ([2, 4].includes(param_1.type_id) ? _0x353691("np-ui:getDocumentContent", {
    document: param_1
  }, {
    returnData: _0x9833ed.getDocumentContent(),
    timeout: 400
  }) : _0x353691("phone/getDocumentContent", {
    document: param_1
  }, {
    returnData: _0x9833ed.getDocumentContent(),
    timeout: 400,
    extApi: true
  }));
  if (!varData_11.meta.ok) {
    _0x5c0061(varData_11.meta.message, true);
    return;
  }
  await startEditDocument(false);
  const varData_12 = {
    fromShare: _0x3c23ac,
    document: varData_11.data,
    page: "editing"
  };
  if (_0x3c23ac) {
    const varData_13 = getState().documentTypes.find(param_1_1 => param_1_1.id === param_1.type_id) || getState().documentTypes[0];
    varData_12.selectedDocumentType = varData_13;
  }
  updateState(varData_12);
  _0x1888fa(false);
};
const startEditDocument = async (_0x2af124 = true) => {
  const varData_14 = getState();
  if (!_0x2af124 && !varData_14.unlocked) {
    return;
  }
  if (_0x2af124) {
    _0x4e2905();
  }
  const varData_15 = varData_14.document;
  const varData_16 = await _0x353691("np-ui:startEditDocument", {
    document: varData_15,
    unlock: _0x2af124
  }, {
    returnData: varData_15
  });
  if (!varData_16.meta.ok) {
    _0x5c0061("Document is being edited by someone else", true);
    return;
  }
  updateState({
    unlocked: _0x2af124
  });
  _0x1888fa(false);
};
const dropDocument = () => {
  const varData_17 = getState().document;
  _0x353691("np-ui:dropDocument", {
    document: varData_17
  });
};
const shareLocal = () => {
  const varData_18 = getState().document;
  _0x353691("np-ui:shareDocumentLocal", {
    document: varData_18
  });
};
const document_actions = "_document_actions_n8oq7_1";
const btn = "_btn_n8oq7_15";
const active = "_active_n8oq7_32";
const styles$2 = {
  document_actions,
  btn,
  active
};
const AppActions = param_1 => {
  const varData_19 = _0x3a0cc4(param_1.onClose);
  const varData_20 = {
    opacity: 1
  };
  const varData_21 = {
    opacity: 0
  };
  return <_0x5acb2a><div style={{
      zIndex: 1000
    }}>{param_1.show && <_0x137e0b.div className={styles$2.document_actions_container} initial={varData_21} animate={varData_20} exit={varData_21}><div className={styles$2.document_actions} ref={varData_19}>{param_1.options.map(param_1_1 => <_0x137e0b.button className={styles$2.btn} onClick={() => {
            param_1_1.onClick();
            param_1.onClose();
          }} key={param_1_1.label}><_0x108197 className={styles$2.icon} icon={param_1_1.icon} /><p>{param_1_1.label}</p></_0x137e0b.button>)}</div></_0x137e0b.div>}</div></_0x5acb2a>;
};
const index$5 = "";
const ShareForm = ({
  document: _0x436858
}) => <_0x4aedbf elements={[{
  name: "id",
  render: ({
    onChange: _0x23f46b,
    value: _0x331007
  }) => <_0x3a0185.CityID onChange={_0x23f46b} value={_0x331007} />
}]} onCancel={() => _0x1888fa(false)} onSubmit={({
  id: _0x3b9b6
}) => {
  _0x353691("np-ui:shareDocumentPermanent", {
    document: _0x436858,
    sharee_id: Number(_0x3b9b6)
  });
  _0x1888fa();
}} />;
const DocumentEditor = () => {
  const [_0x2a20bc, _0x5bbfb4] = _0x2fd781(_0x22aa73.key);
  const varData_22 = _0x2a20bc.document.editable && _0x2a20bc.selectedDocumentType.editable && !_0x2a20bc.fromShare;
  const varData_23 = _0x2a20bc.selectedDocumentType.shareable && !_0x2a20bc.fromShare;
  const varData_24 = !_0x2a20bc.document || _0x2a20bc.document.id === -1;
  const varData_25 = !varData_24 && (!varData_22 || varData_23 && !_0x2a20bc.unlocked && !_0x2a20bc.fromShare);
  const varData_26 = _0x2a20bc.selectedDocumentType.name === "Notes";
  const varData_27 = _0x2a20bc.selectedDocumentType.can_sign;
  const varData_28 = () => {
    _0x5bbfb4({
      fromShare: false,
      page: "home"
    });
    if (!varData_24) {
      startEditDocument(false);
    }
  };
  const varData_29 = [];
  if (!varData_25 && !_0x2a20bc.fromShare) {
    varData_29.push({
      icon: "cloud-upload-alt",
      onClick: () => saveDocument(),
      label: "Save",
      color: "green"
    });
  }
  if (varData_25 && varData_22) {
    varData_29.push({
      icon: "pencil-alt",
      onClick: () => startEditDocument(),
      label: "Edit Document",
      color: "orange"
    });
  }
  if (!varData_24 && !_0x2a20bc.fromShare) {
    if (varData_26) {
      varData_29.push({
        icon: "qrcode",
        onClick: () => dropDocument(),
        label: "Drop QR Code"
      });
    }
    varData_29.push({
      icon: "share-alt",
      onClick: () => shareLocal(),
      label: "Share (Local)"
    });
    if (varData_23) {
      varData_29.push({
        icon: "share",
        onClick: () => _0x2127fe(<ShareForm document={_0x2a20bc.document} />),
        label: "Share (Permanent)"
      });
    }
    if (!!varData_22 && !varData_26 && !_0x2a20bc.unlocked) {
      varData_29.push({
        icon: "stamp",
        onClick: () => _0x207351(async () => {
          _0x4e2905();
          const varData_30 = await _0x353691("np-ui:finalizeDocument", {
            document: _0x2a20bc.document
          });
          if (!varData_30.meta.ok) {
            _0x5c0061(varData_30.meta.message, true);
            return;
          }
          _0x5bbfb4({
            document: {
              ..._0x2a20bc.document,
              editable: false
            }
          });
          _0x1888fa();
          getDocuments(_0x2a20bc.selectedDocumentType.id, false);
        }, "Are you sure? This cannot be undone"),
        label: "Finalize"
      });
    }
    if (!varData_22 && !!varData_27) {
      varData_29.push({
        icon: "pen-nib",
        onClick: () => _0x5bbfb4({
          page: "signatures"
        }),
        label: "Signatures"
      });
    }
    varData_29.push({
      icon: "trash",
      onClick: () => _0x207351(async () => {
        _0x4e2905();
        await _0x353691("np-ui:deleteDocument", {
          document: _0x2a20bc.document
        });
        _0x1888fa();
        getDocuments(_0x2a20bc.selectedDocumentType.id);
      }, "Are you sure? This cannot be undone"),
      label: "Delete"
    });
  }
  if (!varData_24 && _0x2a20bc.fromShare && !varData_22 && !!varData_27) {
    varData_29.push({
      icon: "pen-nib",
      onClick: () => _0x5bbfb4({
        page: "signatures"
      }),
      label: "Signatures"
    });
  }
  const varData_31 = param_1 => {
    const varData_32 = {
      ..._0x2a20bc.document,
      ...param_1
    };
    _0x5bbfb4({
      document: varData_32
    });
  };
  const [_0x4faf5c, _0x53bf6e] = _0x4dafbe.useState(false);
  return <div className="document-view"><div className="header"><div className="main-container"><_0x108197 className="icon" icon="angle-left" onClick={varData_28} /><div className="info">{varData_25 ? <h1 className="title">{_0x2a20bc.document.title}</h1> : <_0x3a0185.Text icon={null} onChange={param_1 => varData_31({
            title: param_1
          })} value={_0x2a20bc.document.title} placeholder="Title" />}</div></div><button className="view-btn" onClick={() => _0x53bf6e(!_0x4faf5c)}><_0x108197 icon="ellipsis-v" /><AppActions show={_0x4faf5c} options={varData_29} onClose={() => _0x53bf6e(false)} /></button></div><div className="markdown-container"><_0x357f95 id="document-editor" dark={true} readOnly={varData_25} onChange={param_1 => {
        varData_31({
          content: param_1()
        });
      }} placeholder="Document content goes here..." defaultValue={_0x2a20bc.document.content} key={_0x2a20bc.document.id} /></div></div>;
};
const index$4 = "";
const DocumentSignatures = () => {
  const [_0x1c9f4d, _0x2e46f4] = _0x2fd781(_0x22aa73.key);
  const {
    state: _0x1701a0
  } = _0x46c1b6();
  const [_0x53991d, _0x4a1894] = _0x4dafbe.useState("");
  const varData_33 = _0x1c9f4d.selectedDocumentType.max_signatures;
  const varData_34 = _0x1c9f4d.signatures.find(param_1 => param_1.id === _0x1701a0.character?.id);
  const varData_35 = varData_34 && !varData_34.timestamp;
  const varData_36 = !_0x1c9f4d.signaturesToRender[varData_33 - 1];
  const varData_37 = async () => {
    const varData_38 = await _0x353691("np-ui:getDocumentSignatures", {
      document: _0x1c9f4d.document
    }, {
      returnData: _0x9833ed.getDocumentSignatures()
    });
    const varData_39 = varData_38.data;
    const varData_40 = [];
    const varData_41 = _0x1c9f4d.selectedDocumentType.max_signatures;
    for (let loopIdx = 0; loopIdx < varData_41; loopIdx += 1) {
      varData_40.push(varData_39[loopIdx] || null);
    }
    _0x2e46f4({
      signatures: varData_39,
      signaturesToRender: varData_40
    });
  };
  const varData_42 = async () => {
    _0x207351(async () => {
      _0x1888fa();
      await _0x353691("np-ui:signDocument", {
        document: _0x1c9f4d.document
      });
      varData_37();
    });
  };
  const varData_43 = async () => {
    _0x2127fe(<RequestSignatureForm onCancel={() => _0x1888fa(false)} onSubmit={async ({
      id: _0x130a2d
    }) => {
      _0x4e2905();
      const varData_44 = await _0x353691("np-ui:requestDocumentSignature", {
        signee_id: Number(_0x130a2d),
        document: _0x1c9f4d.document
      });
      if (!varData_44.meta.ok) {
        _0x5c0061(varData_44.meta.message);
        return;
      }
      _0x1888fa();
      varData_37();
    }} />);
  };
  _0x4dafbe.useEffect(() => {
    varData_37();
  }, []);
  return <div className="document-signatures"><div className="actions-container"><DocumentBtn icon="chevron-left" title="Go back" onClick={() => _0x2e46f4({
        page: "editing"
      })} />{varData_35 && <DocumentBtn icon="pen-fancy" title="Sign Document" onClick={varData_42} />}{varData_36 && <DocumentBtn icon="pen-fancy" title="Request Signature" onClick={varData_43} />}</div><div className="signed-container"><h1 className="header">Signatures</h1><ul className="signed-list">{_0x1c9f4d.signaturesToRender.map((param_1, param_2) => {
          const varData_45 = !param_1 ? "Unsigned" : param_1.first_name + " " + param_1.last_name;
          const varData_46 = !param_1 ? "" : !param_1?.timestamp ? "Requested" : <_0x274500 timestamp={param_1.timestamp} typeface="body2" />;
          return <DocumentBtn icon="user" title={varData_45} description={varData_46} />;
        })}</ul></div></div>;
};
const DocumentBtn = param_1 => {
  return <li className="document-btn" onClick={param_1.onClick}><div className="main-container"><div className="icon-container"><_0x108197 className="icon" icon={param_1.icon} /></div><div className="info"><h1 className="title">{param_1.title}</h1>{param_1.description && <p className="description">{param_1.description}</p>}</div></div></li>;
};
const RequestSignatureForm = ({
  onCancel: _0x327c71,
  onSubmit: _0x435408
}) => <_0x4aedbf elements={[{
  name: "id",
  render: ({
    onChange: _0x1450cb,
    value: _0xb6307c
  }) => <_0x3a0185.CityID onChange={_0x1450cb} value={_0xb6307c} />
}]} onCancel={_0x327c71} onSubmit={_0x435408} />;
const DOCUMENT_PREVIEW_INFO = {
  1: {
    icon: "clipboard",
    title: "Notes",
    description: "Capture thoughts and ideas."
  },
  2: {
    icon: "id-card",
    title: "Licenses",
    description: "Personal identification cards."
  },
  3: {
    icon: "passport",
    title: "Documents",
    description: "Misc paperwork."
  },
  4: {
    icon: "car-alt",
    title: "Vehicle Registration",
    description: "Car ownership records."
  },
  5: {
    icon: "home",
    title: "Housing Documents",
    description: "House paperwork."
  },
  6: {
    icon: "pen-fancy",
    title: "Contracts",
    description: "Legal agreements."
  }
};
const index$3 = "";
const ListItem = ({
  info: _0x5e8543,
  onClick: _0x179b01
}) => {
  return <li className="document-type-item"><div className="main-container"><div className="icon-container"><_0x108197 className="icon" icon={_0x5e8543.icon} /></div><div className="info"><h1 className="title">{_0x5e8543.title}</h1><p className="description">{_0x5e8543.description}</p></div></div><div className="view-btn" onClick={() => _0x179b01(_0x5e8543.id)}><_0x108197 icon="chevron-right" /></div></li>;
};
const container$1 = "_container_3fjez_1";
const icon = "_icon_3fjez_28";
const styles$1 = {
  container: container$1,
  icon
};
const GenericAppInput = ({
  value: _0x14090a,
  onChange: _0x356094,
  icon: _0x1ee27e,
  placeholder: _0x13fc56
}) => {
  return <div className={styles$1.container}><input placeholder={_0x13fc56} value={_0x14090a} onChange={param_1 => _0x356094(param_1.target.value)} /><div className={styles$1.icon}><_0x108197 icon={_0x1ee27e} size="lg" /></div></div>;
};
const index$2 = "";
const DocumentTypeView = () => {
  const [_0x4b66c5, _0x500c44] = _0x2fd781(_0x22aa73.key);
  const [_0x59ba82, _0x3725c6] = _0x5b8e90.useState("");
  const varData_47 = param_1 => {
    _0x500c44({
      list: [],
      page: "documents_list",
      selectedDocumentViewType: param_1
    });
  };
  const varData_48 = _0x5b8e90.useMemo(() => {
    const varData_49 = _0x4b66c5.documentTypes.map(param_1 => ({
      ...param_1,
      ...DOCUMENT_PREVIEW_INFO[param_1.id]
    }));
    return varData_49.filter(param_1 => {
      return param_1.title.toLocaleLowerCase().includes(_0x59ba82.toLocaleLowerCase());
    });
  }, [_0x59ba82, _0x4b66c5.documentTypes]);
  return <div className="documents-type-view"><GenericAppInput placeholder="Search" onChange={param_1 => _0x3725c6(param_1)} value={_0x59ba82} icon="search" /><ul className="document-list">{varData_48.map(param_1 => <ListItem info={param_1} onClick={varData_47} key={param_1.id} />)}</ul></div>;
};
const index$1 = "";
const DocumentListItem = ({
  info: _0xf681a2
}) => {
  const varData_50 = () => {
    viewDocument(_0xf681a2);
  };
  return <li className="document-list-item"><div className="main-container"><_0x108197 className="icon" icon="file-alt" /><div className="info"><h1 className="title">{_0xf681a2.title}</h1></div></div><div className="view-btn" onClick={varData_50}><_0x108197 icon={_0xf681a2.signature_requested ? "pen-nib" : _0xf681a2.editable ? "edit" : "eye"} /></div></li>;
};
const SvgNoDocuments = param_1 => _0x4dafbe.createElement("svg", {
  width: 89,
  height: 108,
  viewBox: "0 0 89 108",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0x4dafbe.createElement("path", {
  d: "M6.85535 85.9H8.35035V95H7.18035L2.89035 88.825V95H1.39535V85.9H2.56535L6.85535 92.075V85.9ZM13.1448 95.169C12.1915 95.169 11.3811 94.8397 10.7138 94.181C10.0465 93.5223 9.71281 92.712 9.71281 91.75C9.71281 90.788 10.0465 89.9777 10.7138 89.319C11.3811 88.6603 12.1915 88.331 13.1448 88.331C14.1068 88.331 14.9171 88.6603 15.5758 89.319C16.2431 89.9777 16.5768 90.788 16.5768 91.75C16.5768 92.712 16.2431 93.5223 15.5758 94.181C14.9171 94.8397 14.1068 95.169 13.1448 95.169ZM11.7018 93.219C12.0918 93.609 12.5728 93.804 13.1448 93.804C13.7168 93.804 14.1978 93.609 14.5878 93.219C14.9778 92.829 15.1728 92.3393 15.1728 91.75C15.1728 91.1607 14.9778 90.671 14.5878 90.281C14.1978 89.891 13.7168 89.696 13.1448 89.696C12.5728 89.696 12.0918 89.891 11.7018 90.281C11.3118 90.671 11.1168 91.1607 11.1168 91.75C11.1168 92.3393 11.3118 92.829 11.7018 93.219ZM24.7623 85.9C26.0103 85.9 27.046 86.3377 27.8693 87.213C28.7013 88.0883 29.1173 89.1673 29.1173 90.45C29.1173 91.724 28.7013 92.803 27.8693 93.687C27.046 94.5623 26.0103 95 24.7623 95H21.1873V85.9H24.7623ZM24.7623 93.57C25.6203 93.57 26.318 93.2753 26.8553 92.686C27.4013 92.0967 27.6743 91.3513 27.6743 90.45C27.6743 89.54 27.4013 88.7947 26.8553 88.214C26.318 87.6247 25.6203 87.33 24.7623 87.33H22.6823V93.57H24.7623ZM33.4573 95.169C32.504 95.169 31.6936 94.8397 31.0263 94.181C30.359 93.5223 30.0253 92.712 30.0253 91.75C30.0253 90.788 30.359 89.9777 31.0263 89.319C31.6936 88.6603 32.504 88.331 33.4573 88.331C34.4193 88.331 35.2296 88.6603 35.8883 89.319C36.5556 89.9777 36.8893 90.788 36.8893 91.75C36.8893 92.712 36.5556 93.5223 35.8883 94.181C35.2296 94.8397 34.4193 95.169 33.4573 95.169ZM32.0143 93.219C32.4043 93.609 32.8853 93.804 33.4573 93.804C34.0293 93.804 34.5103 93.609 34.9003 93.219C35.2903 92.829 35.4853 92.3393 35.4853 91.75C35.4853 91.1607 35.2903 90.671 34.9003 90.281C34.5103 89.891 34.0293 89.696 33.4573 89.696C32.8853 89.696 32.4043 89.891 32.0143 90.281C31.6243 90.671 31.4293 91.1607 31.4293 91.75C31.4293 92.3393 31.6243 92.829 32.0143 93.219ZM41.2268 95.169C40.2475 95.169 39.4285 94.8397 38.7698 94.181C38.1198 93.5223 37.7948 92.712 37.7948 91.75C37.7948 90.7793 38.1198 89.969 38.7698 89.319C39.4285 88.6603 40.2475 88.331 41.2268 88.331C41.8595 88.331 42.4358 88.4827 42.9558 88.786C43.4758 89.0893 43.8658 89.4967 44.1258 90.008L42.9168 90.71C42.7695 90.398 42.5442 90.1553 42.2408 89.982C41.9462 89.8 41.6038 89.709 41.2138 89.709C40.6418 89.709 40.1608 89.904 39.7708 90.294C39.3895 90.684 39.1988 91.1693 39.1988 91.75C39.1988 92.3307 39.3895 92.816 39.7708 93.206C40.1608 93.596 40.6418 93.791 41.2138 93.791C41.5952 93.791 41.9375 93.7 42.2408 93.518C42.5528 93.336 42.7868 93.0933 42.9428 92.79L44.1518 93.479C43.8745 93.999 43.4758 94.4107 42.9558 94.714C42.4358 95.0173 41.8595 95.169 41.2268 95.169ZM49.5857 88.5H50.9897V95H49.5857V94.168C49.1611 94.8353 48.4894 95.169 47.5707 95.169C46.8254 95.169 46.2231 94.9307 45.7637 94.454C45.3044 93.9773 45.0747 93.323 45.0747 92.491V88.5H46.4787V92.348C46.4787 92.8333 46.6087 93.206 46.8687 93.466C47.1287 93.726 47.4841 93.856 47.9347 93.856C48.4287 93.856 48.8274 93.7043 49.1307 93.401C49.4341 93.089 49.5857 92.6167 49.5857 91.984V88.5ZM59.7295 88.331C60.4662 88.331 61.0598 88.5693 61.5105 89.046C61.9612 89.5227 62.1865 90.164 62.1865 90.97V95H60.7825V91.061C60.7825 90.6103 60.6698 90.2637 60.4445 90.021C60.2192 89.7697 59.9115 89.644 59.5215 89.644C59.0882 89.644 58.7415 89.787 58.4815 90.073C58.2302 90.359 58.1045 90.788 58.1045 91.36V95H56.7005V91.061C56.7005 90.6103 56.5922 90.2637 56.3755 90.021C56.1675 89.7697 55.8685 89.644 55.4785 89.644C55.0538 89.644 54.7072 89.7913 54.4385 90.086C54.1698 90.372 54.0355 90.7967 54.0355 91.36V95H52.6315V88.5H54.0355V89.28C54.4515 88.6473 55.0712 88.331 55.8945 88.331C56.7265 88.331 57.3418 88.6733 57.7405 89.358C58.1738 88.6733 58.8368 88.331 59.7295 88.331ZM64.7941 92.348C64.8981 92.842 65.1365 93.2233 65.5091 93.492C65.8818 93.752 66.3368 93.882 66.8741 93.882C67.6195 93.882 68.1785 93.6133 68.5511 93.076L69.7081 93.752C69.0668 94.6967 68.1178 95.169 66.8611 95.169C65.8038 95.169 64.9501 94.8483 64.3001 94.207C63.6501 93.557 63.3251 92.738 63.3251 91.75C63.3251 90.7793 63.6458 89.969 64.2871 89.319C64.9285 88.6603 65.7518 88.331 66.7571 88.331C67.7105 88.331 68.4905 88.6647 69.0971 89.332C69.7125 89.9993 70.0201 90.8097 70.0201 91.763C70.0201 91.9103 70.0028 92.1053 69.9681 92.348H64.7941ZM64.7811 91.204H68.6031C68.5078 90.6753 68.2868 90.2767 67.9401 90.008C67.6021 89.7393 67.2035 89.605 66.7441 89.605C66.2241 89.605 65.7908 89.748 65.4441 90.034C65.0975 90.32 64.8765 90.71 64.7811 91.204ZM74.6745 88.331C75.4199 88.331 76.0222 88.5693 76.4815 89.046C76.9409 89.5227 77.1705 90.177 77.1705 91.009V95H75.7665V91.152C75.7665 90.6667 75.6365 90.294 75.3765 90.034C75.1165 89.774 74.7612 89.644 74.3105 89.644C73.8165 89.644 73.4179 89.8 73.1145 90.112C72.8112 90.4153 72.6595 90.8833 72.6595 91.516V95H71.2555V88.5H72.6595V89.332C73.0842 88.6647 73.7559 88.331 74.6745 88.331ZM82.3093 89.852H80.6973V92.972C80.6973 93.2407 80.7579 93.4357 80.8793 93.557C81.0006 93.6697 81.1783 93.7347 81.4123 93.752C81.6549 93.7607 81.9539 93.7563 82.3093 93.739V95C81.2346 95.13 80.4633 95.039 79.9953 94.727C79.5273 94.4063 79.2933 93.8213 79.2933 92.972V89.852H78.0973V88.5H79.2933V87.096L80.6973 86.68V88.5H82.3093V89.852ZM84.6025 90.294C84.6025 90.5107 84.7195 90.684 84.9535 90.814C85.1961 90.9353 85.4865 91.0437 85.8245 91.139C86.1711 91.2257 86.5178 91.3297 86.8645 91.451C87.2111 91.5723 87.5015 91.7803 87.7355 92.075C87.9781 92.361 88.0995 92.725 88.0995 93.167C88.0995 93.791 87.8568 94.2807 87.3715 94.636C86.8948 94.9913 86.2925 95.169 85.5645 95.169C84.9231 95.169 84.3728 95.0347 83.9135 94.766C83.4541 94.4973 83.1205 94.1247 82.9125 93.648L84.1215 92.946C84.3468 93.57 84.8278 93.882 85.5645 93.882C86.3011 93.882 86.6695 93.6393 86.6695 93.154C86.6695 92.946 86.5481 92.777 86.3055 92.647C86.0715 92.517 85.7811 92.4087 85.4345 92.322C85.0965 92.2267 84.7541 92.1183 84.4075 91.997C84.0608 91.8757 83.7661 91.6763 83.5235 91.399C83.2895 91.113 83.1725 90.7533 83.1725 90.32C83.1725 89.722 83.3978 89.241 83.8485 88.877C84.3078 88.513 84.8755 88.331 85.5515 88.331C86.0888 88.331 86.5655 88.4523 86.9815 88.695C87.4061 88.929 87.7311 89.2583 87.9565 89.683L86.7735 90.346C86.5481 89.852 86.1408 89.605 85.5515 89.605C85.2828 89.605 85.0575 89.6657 84.8755 89.787C84.6935 89.8997 84.6025 90.0687 84.6025 90.294Z",
  fill: "white",
  fillOpacity: 0.55
}), _0x4dafbe.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M30.3279 0.344289C29.7152 0.636294 27.7054 2.56819 20.5804 9.71375C15.6438 14.6646 11.4954 18.9336 11.3617 19.2004C10.7791 20.3638 10.9042 21.6429 11.709 22.7533C12.4762 23.8114 13.9582 24.2651 15.3934 23.881C16.0749 23.6985 16.7723 23.0412 25.2767 14.5671C31.3752 8.4902 34.5283 5.24019 34.7313 4.82216C35.1356 3.98965 35.1379 2.62896 34.7363 1.84211C33.8882 0.181088 32.0093 -0.457375 30.3279 0.344289ZM51.5525 0.165816C51.1313 0.291534 46.685 4.64385 31.3591 19.9333C20.5499 30.7168 11.5776 39.786 11.4208 40.0869C10.6933 41.4826 10.9517 43.0039 12.0952 44.0571C13.1628 45.0405 14.4659 45.2694 15.7407 44.6974C16.7547 44.2424 55.255 5.76852 55.7104 4.75522C56.9395 2.0195 54.4718 -0.704491 51.5525 0.165816ZM70.0758 3.05471C69.7787 3.11117 69.3272 3.26943 69.0725 3.40625C68.8178 3.54308 56.3774 15.894 41.4272 30.8527C12.5736 59.7228 13.8884 58.3452 13.8884 59.7071C13.8884 61.0124 14.9876 62.4451 16.3085 62.8611C17.0047 63.0805 17.2404 63.089 18.0108 62.9219L18.9051 62.728L46.1215 35.5541C61.0905 20.6085 73.4491 8.17197 73.5852 7.91745C74.4544 6.2916 73.7965 4.14174 72.2025 3.39962C71.3868 3.01985 70.7779 2.92112 70.0758 3.05471ZM72.2369 21.2704C71.2229 21.7254 32.7226 60.1993 32.2673 61.2126C31.2621 63.4498 32.8586 65.9945 35.2674 65.9945C36.6673 65.9945 35.716 66.8844 56.6852 45.9571C68.0006 34.6641 76.511 26.0529 76.6539 25.752C78.0115 22.893 75.1319 19.9714 72.2369 21.2704ZM72.2369 42.2499C71.324 42.6603 53.7159 60.181 53.2468 61.1457C52.8419 61.978 52.8396 63.3384 53.2414 64.1257C53.8327 65.284 55.01 65.9938 56.3377 65.9922C57.6491 65.9905 57.9678 65.7104 67.4068 56.2541C73.8589 49.7902 76.4621 47.0835 76.6408 46.6526C77.8138 43.8257 74.9962 41.009 72.2369 42.2499Z",
  fill: "url(#paint0_radial_52_43)",
  fillOpacity: 0.55
}), _0x4dafbe.createElement("defs", null, _0x4dafbe.createElement("radialGradient", {
  id: "paint0_radial_52_43",
  cx: 0,
  cy: 0,
  r: 1,
  gradientUnits: "userSpaceOnUse",
  gradientTransform: "translate(44 33) rotate(90) scale(49)"
}, _0x4dafbe.createElement("stop", {
  stopColor: "white"
}), _0x4dafbe.createElement("stop", {
  offset: 1,
  stopColor: "white",
  stopOpacity: 0
}))));
const noDocuments = "" + new URL("no-documents-b0e55f4b.svg", import.meta.url).href;
const index = "";
const DocumentListView = () => {
  const [_0x4f4217, _0x39955d] = _0x5b8e90.useState(true);
  const [_0x2a0a70] = _0x2fd781(_0x22aa73.key);
  const [_0x5acebb, _0xc751b3] = _0x5b8e90.useState("");
  const varData_51 = _0x5b8e90.useMemo(() => {
    return _0x2a0a70.list.filter(param_1 => {
      return param_1.title.toLocaleLowerCase().includes(_0x5acebb.toLocaleLowerCase());
    });
  }, [_0x5acebb, _0x2a0a70.list]);
  _0x5b8e90.useEffect(() => {
    if (!_0x2a0a70.selectedDocumentViewType) {
      return;
    }
    (async () => {
      _0x39955d(true);
      await getDocuments(_0x2a0a70.selectedDocumentViewType);
      _0x39955d(false);
    })();
  }, [_0x2a0a70.selectedDocumentViewType]);
  return <div className="documents-list-view"><div className="search-container"><GenericAppInput value={_0x5acebb} icon="search" placeholder="Search" onChange={param_1 => _0xc751b3(param_1)} /></div>{!_0x4f4217 && <_0x5b8e90.Fragment>{varData_51.length > 0 && <ul className="document-list">{varData_51.map(param_1 => <DocumentListItem info={param_1} key={param_1.title} />)}</ul>}{varData_51.length <= 0 && <div className="empty-container"><SvgNoDocuments className="icon" /></div>}</_0x5b8e90.Fragment>}</div>;
};
const container = "_container_198yt_1";
const styles = {
  container
};
const DocumentsApp = () => {
  const [_0x33b79a, _0x339331] = _0x2fd781(_0x22aa73.key);
  return <div className={_0x427b73("app", styles.container)}><_0x3f96c0 title="Documents" action={{
      onClick: () => createDocument(),
      tooltip: "New Document",
      icon: "plus"
    }} onBack={_0x33b79a.page === "documents_list" ? () => {
      _0x339331({
        page: "home",
        list: []
      });
    } : undefined} />{_0x33b79a.page === "editing" && <DocumentEditor />}{_0x33b79a.page === "signatures" && <DocumentSignatures />}{_0x33b79a.page === "home" && <DocumentTypeView />}{_0x33b79a.page === "documents_list" && <DocumentListView />}</div>;
};
let id = 0;
const getId = (_0x337e7b = false) => {
  if (_0x337e7b) {
    id = id + 1;
  }
  return id;
};
const events = param_1 => {
  param_1("note-qr-code", ({
    data: _0x3081af,
    state: _0x5b242c
  }) => {
    setTimeout(() => viewDocument(_0x3081af, true), 1000);
    return {
      ..._0x5b242c,
      phone: {
        ..._0x5b242c.phone,
        activeApp: "documents",
        status: "show"
      }
    };
  });
  param_1("view-document", ({
    data: _0x4403e4,
    state: _0x2d3711
  }) => {
    _0x55c0dc({
      appName: "documents",
      id: getId(true),
      onAccept: () => {
        const varData_52 = param_1_1 => {
          setTimeout(() => viewDocument(_0x4403e4, true), 0);
          return {
            ...param_1_1,
            phone: {
              ...param_1_1.phone,
              activeApp: "documents",
              status: "show"
            }
          };
        };
        _0x4086e1.dispatch({
          cb: varData_52,
          type: "np-ui-action"
        });
      },
      onAcceptOptions: {
        onAccept: null,
        onReject: null,
        dismiss: false,
        blockDismissOnClick: true,
        id: getId(),
        text: "Viewing...",
        timeout: 2500
      },
      onReject: () => {},
      state: _0x2d3711,
      timeout: 30000,
      title: "view document",
      text: <_0x543da1 countdown={true} extra="a document is being shared with you" startTime={30} />
    });
    return {
      ..._0x2d3711
    };
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/documents.svg";
const config = param_1 => {
  return {
    ...param_1,
    events: () => events,
    iconPng: myIcon,
    init: async () => {
      const varData_53 = (await _0x353691("np-ui:getDocumentTypes", {}, {
        returnData: _0x9833ed.getDocumentTypes()
      })).data;
      return {
        key: _0x22aa73.key,
        data: {
          ..._0x22aa73.initialState,
          documentTypes: varData_53
        }
      };
    },
    label: "Documents",
    name: "documents",
    position: 45,
    render: () => <DocumentsApp />
  };
};
export { config as default };