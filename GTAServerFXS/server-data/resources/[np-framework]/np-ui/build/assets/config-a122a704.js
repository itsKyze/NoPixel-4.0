var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { j as _0x39c164, R as _0x5e59de, r as _0x3bca3b, T as _0x52172c, k as _0x57f834 } from "./vendor-69ed8822.js";
import { n as _0x64c0d0, I as _0xbb86da, d as _0x41f5a3, v as _0x31f4d9, A as _0x4b3388, m as _0x549c91 } from "./index-dcb6474f.js";
import { A as _0x2d2975 } from "./app-container-77494df0.js";
import { m as _0x1d3a6d, a as _0x58823d, b as _0x32f27a, c as _0x469ded, d as _0x4a8755 } from "./_config-dc44e3da.js";
import { P as _0x1d9ea2 } from "./paper-438d2075.js";
import { S as _0x40965d } from "./simple-form-10871a3d.js";
import { B as _0x253fe3 } from "./button-b138ef6e.js";
import { F as _0x53f850 } from "./input-67b043ed.js";
import { m as _0x59d27b, b as _0x16bb09 } from "./styles-c7d7714e.js";
import { a as _0xb414be } from "./date-31836fe8.js";
import { T as _0x242bdd } from "./text-2b84715a.js";
import _0x103cac from "./store-e1b061eb.js";
import { D as _0x39ee82 } from "./duration-timer-dc979963.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
import "./ui-app-b5e34f38.js";
import "./store-8a444d41.js";
import "./index-6dbd65c5.js";
const hasPermission = (param_1, param_2) => {
  return param_1.includes(param_2);
};
const permissions = ["Hire", "Fire", "Change Role", "Pay Employee", "Pay External", "Charge External", "Property Keys", "Stash Access", "Craft Access", "View Logs"];
const customPermissions = {
  tuner: ["Buy Car"]
};
const generatePermissions = param_1 => {
  if (customPermissions[param_1]) {
    return permissions.concat(customPermissions[param_1]);
  } else {
    return permissions;
  }
};
const makePermString = param_1 => param_1.toLowerCase().replace(" ", "_");
const makePermissionsList = (param_1, param_2) => {
  generatePermissions(param_2).forEach(param_1_1 => {
    param_1.push({
      name: param_1_1,
      render: ({
        onChange: _0x539a31,
        value: _0x46673b
      }) => <_0x53f850.Checkbox checked={_0x46673b} onChange={_0x539a31} label={param_1_1} />
    });
  });
};
const manageRollForm = param_1 => {
  const varData_1 = [{
    name: "name",
    render: ({
      onChange: _0x3231be,
      value: _0x388f80
    }) => <_0x53f850.Name onChange={_0x3231be} value={_0x388f80} />,
    validate: ["text", "Name"]
  }];
  makePermissionsList(varData_1, param_1.activeBusiness.code);
  _0x1d3a6d(<_0x40965d elements={varData_1} onCancel={() => _0x58823d(false)} onSubmit={async param_1_1 => {
    _0x32f27a();
    const varData_2 = [];
    generatePermissions(param_1.activeBusiness.code).forEach(param_1_2 => {
      if (param_1_1[param_1_2]) {
        varData_2.push(makePermString(param_1_2));
      }
    });
    const varData_3 = await _0x64c0d0("np-ui:createBusinessRole", {
      permissions: varData_2,
      name: param_1_1.name,
      business: param_1.activeBusiness
    });
    if (!varData_3.meta.ok) {
      _0x469ded(varData_3.meta.message);
      return;
    }
    param_1.manageBusiness(param_1.activeBusiness);
    _0x58823d();
  }} />);
};
const changeRoleForm = ({
  employee: _0x2965c6,
  p: _0x17aaa7
}) => {
  _0x1d3a6d(<_0x40965d defaultValues={{
    role: _0x17aaa7.roles[0].id
  }} elements={[{
    name: "role",
    render: ({
      onChange: _0x5178dc,
      value: _0x2cab18
    }) => <_0x53f850.Select onChange={_0x5178dc} value={_0x2cab18} label="Role" items={_0x17aaa7.roles} />
  }]} onCancel={() => _0x58823d(false)} onSubmit={async param_1 => {
    _0x32f27a();
    const varData_4 = await _0x64c0d0("np-ui:changeBusinessRole", {
      role_id: param_1.role,
      employee: _0x2965c6,
      business: _0x17aaa7.activeBusiness
    });
    if (!varData_4.meta.ok) {
      _0x469ded(varData_4.meta.message);
      return;
    }
    _0x17aaa7.manageBusiness(_0x17aaa7.activeBusiness);
    _0x58823d();
  }} />);
};
const deleteRoleForm = param_1 => {
  _0x1d3a6d(<_0x40965d defaultValues={{
    role: param_1.roles[0].id
  }} elements={[{
    name: "role",
    render: ({
      onChange: _0x59ebad,
      value: _0x859944
    }) => <_0x53f850.Select onChange={_0x59ebad} value={_0x859944} label="Role" items={param_1.roles} />
  }]} onCancel={() => _0x58823d(false)} onSubmit={async param_1_1 => {
    _0x32f27a();
    const varData_5 = await _0x64c0d0("np-ui:deleteBusinessRole", {
      role_id: param_1_1.role,
      business: param_1.activeBusiness
    });
    if (!varData_5.meta.ok) {
      _0x469ded(varData_5.meta.message);
      return;
    }
    param_1.manageBusiness(param_1.activeBusiness);
    _0x58823d();
  }} />);
};
const editRoleForm = param_1 => {
  const varData_6 = () => {
    const [_0x258ea5, _0x5b75b0] = _0x5e59de.useState(param_1.roles[0].id);
    const [_0x28c89c, _0x26b086] = _0x5e59de.useState(param_1.roles[0].permissions);
    const varData_7 = param_1.roles.find(param_1_1 => param_1_1.id === _0x258ea5);
    _0x5e59de.useEffect(() => {
      _0x26b086(varData_7.permissions);
    }, [_0x258ea5, varData_7.permissions]);
    const varData_8 = (param_1_1, param_2) => {
      const varData_9 = [..._0x28c89c];
      if (param_1_1) {
        varData_9.push(param_2);
      } else {
        const varData_10 = varData_9.indexOf(param_2);
        varData_9.splice(varData_10, 1);
      }
      _0x26b086(varData_9);
    };
    return <div style={{
      width: "100%"
    }}><div><_0x53f850.Select onChange={_0x5b75b0} value={_0x258ea5} label="Role" items={param_1.roles} /></div>{generatePermissions(param_1.activeBusiness.code).map(param_1_1 => {
        return <_0x53f850.Checkbox checked={_0x28c89c.includes(makePermString(param_1_1))} onChange={param_1_2 => varData_8(param_1_2, makePermString(param_1_1))} label={param_1_1} />;
      })}<div style={{
        display: "flex",
        justifyContent: "space-between"
      }}><_0x253fe3.Secondary onClick={() => _0x58823d(false)}>Cancel</_0x253fe3.Secondary><_0x253fe3.Primary onClick={async () => {
          _0x32f27a();
          const varData_11 = await _0x64c0d0("np-ui:editBusinessRole", {
            role_id: _0x258ea5,
            permissions: _0x28c89c,
            business: param_1.activeBusiness
          });
          if (!varData_11.meta.ok) {
            _0x469ded(varData_11.meta.message);
            return;
          }
          param_1.manageBusiness(param_1.activeBusiness);
          _0x58823d();
        }}>Save</_0x253fe3.Primary></div></div>;
  };
  _0x1d3a6d(<varData_6 />);
};
const hireForm = param_1 => {
  _0x1d3a6d(<_0x40965d defaultValues={{
    role: param_1.roles[0].id
  }} elements={[{
    name: "stateId",
    render: ({
      onChange: _0x3489d8,
      value: _0x128753
    }) => <_0x53f850.CityID onChange={_0x3489d8} value={_0x128753} />,
    validate: ["number", "State ID"]
  }, {
    name: "role",
    render: ({
      onChange: _0x5994bd,
      value: _0x11e9b5
    }) => <_0x53f850.Select onChange={_0x5994bd} value={_0x11e9b5} label="Role" items={param_1.roles} />
  }]} onCancel={() => _0x58823d(false)} onSubmit={async param_1_1 => {
    _0x32f27a();
    const varData_12 = await _0x64c0d0("np-ui:hireBusinessEmployee", {
      role_id: param_1_1.role,
      state_id: Number(param_1_1.stateId),
      business: param_1.activeBusiness
    });
    if (!varData_12.meta.ok) {
      _0x469ded(varData_12.meta.message);
      return;
    }
    param_1.manageBusiness(param_1.activeBusiness);
    _0x58823d();
  }} />);
};
const payEmployeeForm = (param_1, param_2) => {
  _0x1d3a6d(<div style={{
    width: "100%"
  }}><_0x40965d elements={[{
      name: "amount",
      render: ({
        onChange: _0x3350cf,
        value: _0x1bfafa
      }) => <_0x53f850.Currency onChange={_0x3350cf} value={_0x1bfafa} />
    }, {
      name: "comment",
      render: ({
        onChange: _0x4e90e4,
        value: _0x4f2302
      }) => <_0x53f850.TextArea maxLength={254} label="Comment" icon="comment-o" onChange={_0x4e90e4} value={_0x4f2302} />
    }]} onCancel={() => _0x58823d(false)} onSubmit={async param_1_1 => {
      _0x32f27a();
      const varData_13 = await _0x64c0d0("np-ui:businessPayEmployee", {
        employee_id: Number(param_1.id),
        amount: Number(param_1_1.amount),
        comment: param_1_1.comment,
        business: param_2.activeBusiness,
        character: param_2.character
      });
      if (!varData_13.meta.ok) {
        _0x469ded(varData_13.meta.message || "unknown error");
        return;
      }
      _0x58823d();
    }} /></div>);
};
const payExternalForm = param_1 => {
  _0x1d3a6d(<_0x40965d elements={[{
    name: "accountId",
    render: ({
      onChange: _0x2441f1,
      value: _0x24fdb1
    }) => <_0x53f850.AccountID onChange={_0x2441f1} value={_0x24fdb1} />,
    validate: ["number", "Account ID"]
  }, {
    name: "amount",
    render: ({
      onChange: _0x54af31,
      value: _0x3d4685
    }) => <_0x53f850.Currency onChange={_0x54af31} value={_0x3d4685} />
  }, {
    name: "comment",
    render: ({
      onChange: _0x12c307,
      value: _0x144d85
    }) => <_0x53f850.TextArea label="Comment" icon="comment-o" onChange={_0x12c307} value={_0x144d85} />
  }]} onCancel={() => _0x58823d(false)} onSubmit={async param_1_1 => {
    _0x32f27a();
    const varData_14 = await _0x64c0d0("np-ui:businessPayExternal", {
      target_account_id: Number(param_1_1.accountId),
      amount: Number(param_1_1.amount),
      comment: param_1_1.comment,
      business: param_1.activeBusiness,
      character: param_1.character
    });
    if (!varData_14.meta.ok) {
      _0x469ded(varData_14.meta.message);
      return;
    }
    _0x58823d();
  }} />);
};
const chargeExternalForm = param_1 => {
  _0x1d3a6d(<_0x40965d elements={[{
    name: "stateId",
    render: ({
      onChange: _0x3212c5,
      value: _0x123612
    }) => <_0x53f850.CityID onChange={_0x3212c5} value={_0x123612} />,
    validate: ["number", "State ID"]
  }, {
    name: "amount",
    render: ({
      onChange: _0x472c01,
      value: _0x196912
    }) => <_0x53f850.Currency onChange={_0x472c01} value={_0x196912} />
  }, {
    name: "comment",
    render: ({
      onChange: _0x50a97f,
      value: _0x4b1d4e
    }) => <_0x53f850.TextArea icon="comment-o" onChange={_0x50a97f} value={_0x4b1d4e} />
  }]} onCancel={() => _0x58823d(false)} onSubmit={async param_1_1 => {
    _0x32f27a();
    const varData_15 = await _0x64c0d0("np-ui:businessChargeExternal", {
      state_id: Number(param_1_1.stateId),
      amount: Number(param_1_1.amount),
      comment: param_1_1.comment,
      business: param_1.activeBusiness,
      character: param_1.character
    });
    if (!varData_15.meta.ok) {
      _0x469ded(varData_15.meta.message);
      return;
    }
    _0x58823d();
  }} />);
};
const EmployeeItem = ({
  business: _0x1fe0e5,
  employee: _0x1a8aa9,
  p: _0x2cc795
}) => {
  const varData_16 = [];
  if (_0x1a8aa9.role !== "Owner" && hasPermission(_0x1fe0e5.permissions, "change_role")) {
    varData_16.push({
      icon: "user-tag",
      onClick: () => changeRoleForm({
        employee: _0x1a8aa9,
        p: _0x2cc795
      }),
      title: "Change Role"
    });
  }
  if (hasPermission(_0x1fe0e5.permissions, "pay_employee")) {
    varData_16.push({
      icon: "hand-holding-usd",
      onClick: () => payEmployeeForm(_0x1a8aa9, {
        ..._0x2cc795
      }),
      title: "Pay"
    });
  }
  if (_0x1fe0e5.access_level === -1 && _0x1a8aa9.role !== "Owner") {
    varData_16.push({
      icon: "university",
      onClick: async () => {
        _0x32f27a();
        const varData_17 = (await _0x64c0d0("np-ui:getAccountCharacters", {
          account_id: _0x1fe0e5.bank_account_id
        }, {
          returnData: "getAccountCharacters"
        })).data;
        const varData_18 = varData_17?.find(param_1 => param_1.id === _0x1a8aa9.id);
        const varData_19 = [];
        const varData_20 = {};
        ["balance", "deposit", "transfer", "transactions", "withdraw"].forEach(param_1 => {
          varData_20[param_1] = varData_18 && varData_18.access.includes(param_1);
          varData_19.push({
            name: param_1,
            render: ({
              onChange: _0x4cb5ba,
              value: _0xc19c7
            }) => <_0x53f850.Checkbox checked={_0xc19c7 || false} onChange={_0x4cb5ba} label={param_1} />
          });
        });
        _0x1d3a6d(<_0x40965d defaultValues={varData_20} elements={varData_19} onCancel={() => _0x58823d(false)} onSubmit={async param_1 => {
          _0x32f27a();
          const varData_21 = Object.keys(param_1).filter(param_1_1 => !!param_1[param_1_1]);
          if (varData_21.length === 0) {
            await _0x64c0d0("np-ui:removeCharacterFromAccount", {
              character: {
                id: _0x1a8aa9.id
              },
              account: {
                id: _0x1fe0e5.bank_account_id
              }
            });
          } else {
            const varData_22 = {
              character: {
                id: _0x1a8aa9.id,
                access: varData_21
              },
              account: {
                id: _0x1fe0e5.bank_account_id
              }
            };
            const varData_23 = await _0x64c0d0("np-ui:addAccountCharacterPermissions", varData_22);
            if (!varData_23.meta.ok) {
              await _0x64c0d0("np-ui:editAccountCharacterPermissions", varData_22);
            }
          }
          _0x58823d();
        }} />);
      },
      title: "Bank Access"
    });
  }
  if (_0x1a8aa9.role !== "Owner" && hasPermission(_0x1fe0e5.permissions, "fire")) {
    varData_16.push({
      icon: "user-slash",
      onClick: () => _0x4a8755(async () => {
        _0x32f27a();
        const varData_24 = await _0x64c0d0("np-ui:removeBusinessEmployee", {
          business: _0x1fe0e5,
          employee: _0x1a8aa9
        });
        if (!varData_24.meta.ok) {
          _0x469ded(varData_24.meta.message);
          return;
        }
        _0x64c0d0("np-ui:removeCharacterFromAccount", {
          character: {
            id: _0x1a8aa9.id
          },
          account: {
            id: _0x1fe0e5.bank_account_id
          }
        });
        _0x2cc795.manageBusiness(_0x2cc795.activeBusiness);
        _0x58823d();
      }),
      title: "Remove Employee"
    });
  }
  return <div className="paper-group"><_0x1d9ea2 actions={varData_16}><_0x1d9ea2.Icon icon={_0x1a8aa9.role === "Owner" ? "user-secret" : "user-tie"} /><_0x1d9ea2.Details description={_0x1a8aa9.role} title={_0x1a8aa9.first_name + " " + _0x1a8aa9.last_name} /></_0x1d9ea2></div>;
};
const Business = param_1 => {
  const [_0x33a0fd, _0x1ac1c6] = _0x5e59de.useState(param_1.employees);
  _0x5e59de.useEffect(() => {
    _0x1ac1c6(param_1.employees);
  }, [param_1.employees]);
  const varData_25 = [];
  const varData_26 = [];
  if (param_1.activeBusiness !== -1) {
    if (param_1.roles.length > 0 && hasPermission(param_1.activeBusiness.permissions, "hire")) {
      varData_25.push({
        icon: "user-plus",
        title: "Hire",
        onClick: () => hireForm(param_1)
      });
    }
    if (hasPermission(param_1.activeBusiness.permissions, "pay_external")) {
      varData_25.push({
        icon: "hand-holding-usd",
        title: "Pay External",
        onClick: () => payExternalForm(param_1)
      });
    }
    if (hasPermission(param_1.activeBusiness.permissions, "charge_external")) {
      varData_25.push({
        icon: "credit-card",
        title: "Charge Customer",
        onClick: () => chargeExternalForm(param_1)
      });
    }
    if (hasPermission(param_1.activeBusiness.permissions, "change_role")) {
      varData_25.push({
        icon: "user-tag",
        title: "Create Role",
        onClick: () => manageRollForm(param_1)
      });
    }
    if (hasPermission(param_1.activeBusiness.permissions, "change_role") && param_1.roles.length > 0) {
      varData_25.push({
        icon: "user-tag",
        title: "Edit Role",
        onClick: () => editRoleForm(param_1)
      });
    }
    if (hasPermission(param_1.activeBusiness.permissions, "change_role") && param_1.roles.length > 0) {
      varData_25.push({
        icon: "user-tag",
        title: "Delete Role",
        onClick: () => deleteRoleForm(param_1)
      });
    }
    if (hasPermission(param_1.activeBusiness.permissions, "view_logs")) {
      varData_25.push({
        icon: "list",
        title: "Logs",
        onClick: () => param_1.viewLogs()
      });
    }
    if (param_1.activeBusiness.role !== "Owner") {
      varData_25.push({
        icon: "sign-out-alt",
        title: "Quit",
        onClick: () => _0x4a8755(async () => {
          _0x32f27a();
          const varData_27 = await _0x64c0d0("np-ui:removeBusinessEmployee", {
            business: param_1.activeBusiness,
            employee: {
              id: param_1.character.id,
              role: param_1.activeBusiness.role
            }
          });
          if (!varData_27.meta.ok) {
            _0x469ded(varData_27.meta.message);
            return;
          }
          _0x64c0d0("np-ui:removeCharacterFromAccount", {
            character: {
              id: param_1.character.id
            },
            account: {
              id: param_1.activeBusiness.bank_account_id
            }
          });
          param_1.updateState({
            activeBusiness: -1,
            page: 0
          });
          _0x58823d();
        })
      });
    }
  }
  return <_0x2d2975 auxActions={varData_25} heading={param_1.activeBusiness.name} emptyMessage={_0x33a0fd.length === 0} onClickBack={() => param_1.updateState({
    activeBusiness: -1,
    page: 0
  })} primaryActions={varData_26} search={{
    filter: ["first_name", "last_name", "role"],
    list: param_1.employees,
    onChange: _0x1ac1c6
  }}>{param_1.activeBusiness !== -1 && _0x33a0fd.map((param_1_1, param_2) => <EmployeeItem business={param_1.activeBusiness} employee={param_1_1} p={param_1} key={param_2} />)}</_0x2d2975>;
};
const useStyles$1 = _0x59d27b({
  wrapper: () => ({
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden"
  }),
  page: () => ({
    height: "100%",
    width: "100%",
    transition: "all 400ms ease",
    position: "absolute",
    top: "0",
    left: "0",
    willChange: "left"
  }),
  hide: () => ({
    visibility: "hidden",
    pointerEvents: "none"
  }),
  hideLeft: () => ({
    left: "-100%"
  }),
  hideRight: () => ({
    left: "100%"
  })
});
const oldStyles = "";
const MultiPager = param_1 => {
  const varData_28 = useStyles$1();
  if (param_1.landscapeOptions.split) {
    const varData_29 = param_1.pages.find(param_1_1 => param_1_1.index === param_1.landscapeOptions.indexLeft);
    const varData_30 = param_1.pages.find(param_1_1 => param_1_1.index === param_1.landscapeOptions.indexRight);
    const varData_31 = !!param_1.landscapeOptions.hideRight;
    return <div className="inner-phone-app-container-multi-pager inner-phone-app-container-multi-pager-landscape"><div className={"page " + (varData_31 ? "" : "page-landscape-left")}>{varData_29.content}</div><div className={"page page-landscape-right " + (!varData_31 ? "" : "page-landscape-right-hidden")}>{varData_30.content}</div></div>;
  }
  return <div className={varData_28.wrapper}>{param_1.pages.map(param_1_1 => {
      const varData_32 = [varData_28.page];
      if (param_1_1.index < param_1.activeIndex) {
        varData_32.push(varData_28.hide + " " + varData_28.hideLeft);
      } else if (param_1_1.index > param_1.activeIndex) {
        varData_32.push(varData_28.hide + " " + varData_28.hideRight);
      }
      return <div className={varData_32.join(" ")} key={param_1_1.index}>{param_1_1.content}</div>;
    })}</div>;
};
const useStyles = _0x59d27b({
  searchContainer: () => ({
    width: "100%",
    display: "flex",
    marginBottom: "1rem"
  }),
  backButton: () => ({
    display: "flex",
    width: _0x16bb09.responsiveWidth(40),
    alignItems: "center"
  })
});
const LogEvents = {
  hire: "Hired",
  fire: "Fired",
  create_role: "Created Role",
  delete_role: "Deleted Role",
  edit_role: "Edited Role",
  pay_employee: "Paid Employee",
  charge_external: "Charged External"
};
const buildLogText = param_1 => {
  const varData_33 = LogEvents[param_1.event];
  switch (varData_33) {
    case LogEvents.create_role:
    case LogEvents.delete_role:
    case LogEvents.edit_role:
      return ["users", <div><_0x242bdd variant="body2" style={{
          fontWeight: "bold"
        }}>{param_1.invoker}</_0x242bdd><_0x242bdd variant="body2">{varData_33} "<_0x242bdd variant="body2" style={{
            display: "inline-block",
            fontWeight: "bold"
          }}>{param_1.role}</_0x242bdd>"</_0x242bdd></div>];
    case LogEvents.pay_employee:
    case LogEvents.charge_external:
      return ["dollar-sign", <div><_0x242bdd variant="body2" style={{
          fontWeight: "bold"
        }}>{param_1.invoker}</_0x242bdd><_0x242bdd variant="body2">{varData_33} <_0x242bdd variant="body2" style={{
            display: "inline-block",
            fontWeight: "bold"
          }}>{param_1.target} </_0x242bdd> </_0x242bdd><_0x242bdd variant="body2" style={{
          fontWeight: "bold",
          color: "green"
        }}>${param_1.amount}</_0x242bdd></div>];
    case LogEvents.hire:
    case LogEvents.fire:
      return [varData_33 === LogEvents.hire ? "user-plus" : "user-minus", <div><_0x242bdd variant="body2" style={{
          fontWeight: "bold"
        }}>{param_1.invoker}</_0x242bdd><_0x242bdd variant="body2">{varData_33} <_0x242bdd style={{
            display: "inline-block",
            fontWeight: "bold"
          }}>{param_1.target} as {param_1.role}</_0x242bdd></_0x242bdd></div>];
    default:
      return ["book-open", <div><_0x242bdd variant="body2" style={{
          fontWeight: "bold"
        }}>{param_1.invoker}</_0x242bdd><_0x242bdd variant="body2">{varData_33} <_0x242bdd style={{
            display: "inline-block",
            fontWeight: "bold"
          }}>{param_1.target}</_0x242bdd></_0x242bdd></div>];
  }
};
const BusinessLogs = param_1 => {
  const [_0x43ed92, _0x3a0e66] = _0x3bca3b.useState("");
  const [_0x593883, _0x2abe5b] = _0x3bca3b.useState([]);
  const varData_34 = useStyles(param_1);
  const varData_35 = _0x3bca3b.useCallback((param_1_1, param_2, param_3) => {
    return param_1_1.filter(param_1_2 => {
      for (const varData_36 of param_3) {
        let varData_37 = param_1_2[varData_36];
        if (varData_36 === "event") {
          varData_37 = LogEvents[varData_37];
        }
        if (varData_37 && varData_37.toString().toLowerCase().includes(param_2.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }, []);
  const varData_38 = _0x3bca3b.useCallback(async () => {
    if (param_1.activeBusiness === -1) {
      return;
    }
    const varData_39 = param_1.activeBusiness?.id;
    const varData_40 = await _0x64c0d0("np-ui:businessGetLogs", {
      businessId: varData_39
    });
    if (varData_40.meta.ok) {
      _0x2abe5b(varData_40.data);
    }
  }, [param_1.activeBusiness]);
  _0x3bca3b.useEffect(() => {
    if (param_1.showingLogs) {
      varData_38();
    }
  }, [varData_38, param_1.activeBusiness, param_1.showingLogs]);
  return <_0x2d2975 emptyMessage={_0x593883.length === 0}><div className={varData_34.searchContainer}><_0x52172c title="Go Back" placement="right"><div className={varData_34.backButton} onClick={() => param_1.updateState({
          page: 1,
          showingLogs: false
        })}><_0xbb86da icon="chevron-left" size="lg" style={{
            color: "white"
          }} /></div></_0x52172c><_0x53f850.Search onChange={param_1_1 => _0x3a0e66(param_1_1)} value={_0x43ed92} style={{
        width: "100%"
      }} /></div>{_0x593883 && varData_35(_0x593883, _0x43ed92, ["event", "invoker", "target"]).map((param_1_1, param_2) => {
      const [_0xee7dd7, _0x39877a] = buildLogText(param_1_1);
      return <_0x1d9ea2 key={param_2}><_0x1d9ea2.Icon icon={_0xee7dd7} /><_0x1d9ea2.Details title={_0x39877a} description={<_0x242bdd variant="subtitle2">{_0xb414be(param_1_1.event_time)}</_0x242bdd>} /></_0x1d9ea2>;
    })}</_0x2d2975>;
};
const employment = "";
const EmploymentItem = ({
  business: _0x35ccd8,
  onClick: _0x33a9cf
}) => {
  let varData_41 = "business-time";
  if (_0x35ccd8.business_type === "Showroom") {
    varData_41 = "car";
  }
  return <_0x1d9ea2 onClick={() => _0x33a9cf(_0x35ccd8)}><_0x1d9ea2.Icon icon={varData_41} /><_0x1d9ea2.Details description={_0x35ccd8.role} title={_0x35ccd8.name} /></_0x1d9ea2>;
};
const Employment$1 = param_1 => {
  const [_0x2a52d5, _0x11f6d2] = _0x5e59de.useState(param_1.list);
  _0x5e59de.useEffect(() => {
    _0x11f6d2(param_1.list);
  }, [param_1.list]);
  return <MultiPager activeIndex={param_1.page} landscapeOptions={{}} pages={[{
    index: 0,
    content: <_0x2d2975 heading="Employment" emptyMessage={_0x2a52d5.length === 0} emptyMessageText="You are unemployed." search={{
      filter: ["name"],
      list: param_1.list,
      onChange: _0x11f6d2
    }}><div className="paper-group">{_0x2a52d5.map((param_1_1, param_2) => <EmploymentItem business={param_1_1} onClick={param_1_2 => param_1.manageBusiness(param_1_2)} key={param_2} />)}</div></_0x2d2975>
  }, {
    index: 1,
    content: <Business {...param_1} />
  }, {
    index: 2,
    content: <BusinessLogs {...param_1} />
  }]} />;
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x41f5a3(_0x103cac, {
  mapStateToProps: param_1 => ({
    character: param_1.character
  })
});
class Employment extends _0x5e59de.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "getEmployment", async () => {
      const varData_42 = await _0x64c0d0("np-ui:getEmploymentInformation", {}, {
        returnData: _0x31f4d9.getEmploymentInformation()
      });
      this.props.updateState({
        list: varData_42.data
      });
    });
    __publicField(this, "manageBusiness", async param_1 => {
      this.props.updateState({
        activeBusiness: param_1,
        page: 1
      });
      const [_0x53e644, _0x4f8d55] = await Promise.all([_0x64c0d0("np-ui:getBusinessEmployees", {
        id: param_1.id
      }, {
        returnData: _0x31f4d9.getBusinessEmployees()
      }), _0x64c0d0("np-ui:getBusinessRoles", {
        id: param_1.id
      }, {
        returnData: _0x31f4d9.getBusinessRoles()
      })]);
      const varData_43 = _0x53e644.data;
      varData_43.sort((param_1_1, param_2) => {
        if (param_1_1.role === "Founder") {
          return -1;
        } else if (param_2.role === "Founder") {
          return 1;
        } else if (param_1_1.role === "Owner") {
          return -1;
        } else if (param_2.role === "Owner") {
          return 1;
        } else if (param_1_1.role === "CEO") {
          return -1;
        } else if (param_2.role === "CEO") {
          return 1;
        } else if (param_1_1.permissions.length > param_2.permissions.length) {
          return -1;
        } else if (param_1_1.permissions.length < param_2.permissions.length) {
          return 1;
        } else if (param_1_1.permissions.length === param_2.permissions.length) {
          if (param_1_1.role > param_2.role) {
            return 1;
          } else if (param_1_1.role < param_2.role) {
            return -1;
          }
          return 0;
        }
        return 0;
      });
      this.props.updateState({
        employees: varData_43,
        roles: _0x4f8d55.data
      });
    });
    __publicField(this, "viewLogs", async () => {
      this.props.updateState({
        showingLogs: true,
        page: 3
      });
    });
  }
  componentDidMount() {
    this.getEmployment();
    this.props.updateState({
      search: null,
      selectedLoanType: 1
    });
  }
  render() {
    return <Employment$1 {...this.props} manageBusiness={this.manageBusiness} viewLogs={this.viewLogs} />;
  }
}
const Container = _0x57f834(mapStateToProps, mapDispatchToProps)(Employment);
let id = 0;
const getId = (_0x416f79 = false) => {
  if (_0x416f79) {
    id = id + 1;
  }
  return id;
};
const events = param_1 => {
  param_1("loan-offer", ({
    data: {
      data: _0x3996ea
    },
    state: _0x2921b8
  }) => {
    _0x4b3388({
      appName: "employment",
      id: getId(true),
      onAccept: async () => {
        setTimeout(async () => {
          const varData_44 = await _0x64c0d0("np-ui:loanAccept", {
            ..._0x3996ea,
            loanee: _0x3996ea.character,
            character: _0x2921b8.character
          });
          _0x4b3388({
            appName: "employment",
            id: getId(),
            state: _0x2921b8,
            text: varData_44.meta.ok ? "Loan Received!" : varData_44.meta.message,
            title: "loan offer - " + Number(_0x3996ea.interest) + "%",
            timeout: 2500
          });
        });
      },
      onAcceptOptions: {
        onAccept: null,
        onReject: null,
        dismiss: false,
        blockDismissOnClick: true,
        id: getId(),
        text: "Accepting...",
        timeout: -1
      },
      onReject: () => {},
      state: _0x2921b8,
      timeout: 30000,
      title: "loan offer - " + Number(_0x3996ea.interest) + "%",
      text: <_0x39ee82 countdown={true} extra={_0x549c91(_0x3996ea.amount) + " - " + _0x3996ea.business.name} startTime={30} />
    });
    return {
      ..._0x2921b8
    };
  });
  param_1("charge-accept", ({
    data: {
      data: _0x4706e6
    },
    state: _0x1ecaaf
  }) => {
    _0x4b3388({
      appName: "employment",
      id: getId(true),
      onAccept: async () => {
        setTimeout(async () => {
          const varData_45 = await _0x64c0d0("np-ui:businessChargeAccept", {
            ..._0x4706e6,
            charger: _0x4706e6.character,
            character: _0x1ecaaf.character
          });
          _0x4b3388({
            appName: "employment",
            id: getId(),
            state: _0x1ecaaf,
            text: varData_45.meta.ok ? "Charge Accepted!" : varData_45.meta.message,
            title: "services charge",
            timeout: 2500
          });
        });
      },
      onAcceptOptions: {
        onAccept: null,
        onReject: null,
        dismiss: false,
        blockDismissOnClick: true,
        id: getId(),
        text: "Accepting...",
        timeout: -1
      },
      onReject: () => {
        setTimeout(() => {
          _0x64c0d0("np-ui:businessChargeReject", {
            ..._0x4706e6,
            charger: _0x4706e6.character,
            character: _0x1ecaaf.character
          });
        });
      },
      state: _0x1ecaaf,
      timeout: 30000,
      title: "services charge",
      text: <_0x39ee82 countdown={true} extra={_0x549c91(_0x4706e6.amount + _0x4706e6.tax) + " incl tax - " + _0x4706e6.business.name} startTime={30} />
    });
    return {
      ..._0x1ecaaf
    };
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/employment.svg";
const config = param_1 => {
  return {
    ...param_1,
    events: () => events,
    iconPng: myIcon,
    init: async () => {
      const varData_46 = await _0x64c0d0("np-ui:getEmploymentInformation", {}, {
        returnData: _0x31f4d9.getEmploymentInformation()
      });
      const varData_47 = _0x103cac.key;
      return {
        key: varData_47,
        data: {
          ..._0x103cac.initialState,
          list: varData_46.data
        }
      };
    },
    label: "Employment",
    name: "employment",
    position: 65,
    hidden: () => true,
    render: () => <Container />
  };
};
export { config as default };