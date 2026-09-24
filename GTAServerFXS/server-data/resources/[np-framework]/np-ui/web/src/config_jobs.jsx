import { r as _0xb4a72a, j as _0x3d5c52, n as _0x336260, a4 as _0x25a867, m as _0x11d90f, aL as _0x3dbe37, aM as _0x352284, aT as _0x290d0b, aU as _0x5d52ec, R as _0x515a43, A as _0x36e555 } from "./vendor.jsx";
import _0x24b697 from "./store_jobs.js";
import { k as _0xc8f186, n as _0x1cff5c, s as _0x10a95a, A as _0x1fe13e, u as _0x1213fe, I as _0x487a5b, v as _0x1284a8, e as _0x336c39, G as _0x223360, m as _0x36a3e1 } from "./ui_core.js";
import { d as _0x5034e0 } from "./date.js";
import { D as _0xc88d19 } from "./duration-timer.jsx";
import { T as _0x27ae5b } from "./text.jsx";
import "./commonjsHelpers.js";
import "./vite.js";
import "./bundle.js";
const VIEW_TRANSITIONS = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};
const SvgArrowRight = param_1 => _0xb4a72a.createElement("svg", {
  width: 11,
  height: 20,
  viewBox: "0 0 11 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0xb4a72a.createElement("path", {
  d: "M1 1L10 10L1 19",
  stroke: "url(#paint0_linear_105_603)"
}), _0xb4a72a.createElement("defs", null, _0xb4a72a.createElement("linearGradient", {
  id: "paint0_linear_105_603",
  x1: -5.5,
  y1: 10,
  x2: 121.5,
  y2: 10,
  gradientUnits: "userSpaceOnUse"
}, _0xb4a72a.createElement("stop", {
  stopColor: "#2C3145"
}), _0xb4a72a.createElement("stop", {
  offset: 1,
  stopColor: "#2C3145",
  stopOpacity: 0
}))));
const arrowRight = "" + new URL("arrow-right.svg", import.meta.url).href;
const index$7 = "";
const JobsHeader = ({
  title: _0x14825e,
  customText: _0x2ce966
}) => {
  return <div className="jobs-header"><h1 className="title">Job</h1><div className="status-bar"><h1 className="status">{_0x14825e}</h1>{_0x2ce966 ? <h1 className="custom-text">{_0x2ce966}</h1> : <div className="arrows"><SvgArrowRight className="arrow" /><SvgArrowRight className="arrow" /><SvgArrowRight className="arrow" /><SvgArrowRight className="arrow" /><SvgArrowRight className="arrow" /><SvgArrowRight className="arrow" /></div>}</div></div>;
};
const SvgTrophyIcon = param_1 => _0xb4a72a.createElement("svg", {
  width: 31,
  height: 33,
  viewBox: "0 0 31 33",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0xb4a72a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M5.46712 0.311685C5.10428 0.684585 4.91528 1.25186 4.84932 2.16563L4.80317 2.805H2.82714C0.61002 2.805 0.442368 2.84163 0.157464 3.38761C-0.05481 3.79442 -0.0517606 6.15376 0.162359 7.22024C0.471179 8.75853 1.16314 10.0172 2.31993 11.1452C3.48667 12.2827 4.81577 12.9299 6.41067 13.137L7.17839 13.2366L7.42244 13.8164C8.68758 16.8225 10.5651 19.4523 12.4973 20.9248C13.2352 21.4871 14.358 22.1046 15.0385 22.3224C15.4819 22.4643 15.5181 22.4643 15.9615 22.3224C16.635 22.1069 17.7625 21.4889 18.4797 20.9422C20.4318 19.4543 22.3092 16.8301 23.5776 13.8164L23.8216 13.2366L24.5893 13.137C26.1842 12.9299 27.5133 12.2827 28.6801 11.1452C29.8369 10.0172 30.5288 8.75853 30.8376 7.22024C31.0518 6.15376 31.0548 3.79442 30.8425 3.38761C30.5576 2.84163 30.39 2.805 28.1729 2.805H26.1968L26.1507 2.16563C26.0858 1.26753 25.9052 0.723525 25.5412 0.330165L25.2357 0H15.503H5.77032L5.46712 0.311685ZM16.1882 5.21813L16.827 6.55875L18.2543 6.77614C19.0392 6.89568 19.6988 7.01126 19.72 7.03296C19.7411 7.05474 19.2845 7.5419 18.7053 8.11553L17.6523 9.15841L17.8974 10.6597C18.0322 11.4855 18.1348 12.1674 18.1254 12.1753C18.116 12.1831 17.5485 11.8805 16.8643 11.5028C16.1802 11.1251 15.5662 10.8161 15.5 10.8161C15.4338 10.8161 14.8198 11.1251 14.1357 11.5028C13.4515 11.8805 12.8826 12.1816 12.8713 12.172C12.8601 12.1622 12.9639 11.4778 13.1019 10.651L13.3528 9.1476L12.2963 8.11099C11.7153 7.54083 11.256 7.05763 11.2759 7.03725C11.2957 7.01696 11.9202 6.90995 12.6636 6.79957C13.407 6.68927 14.0546 6.58408 14.1026 6.56593C14.1507 6.54778 14.4731 5.93546 14.8191 5.20517C15.1652 4.47497 15.471 3.8775 15.4988 3.8775C15.5266 3.8775 15.8368 4.48082 16.1882 5.21813ZM5.01785 5.42438C5.1164 6.3002 5.99126 9.89315 6.31356 10.7456C6.39173 10.9525 6.14703 10.9339 5.50122 10.684C3.52327 9.91865 2.26054 8.09993 2.12491 5.82079L2.07306 4.95H3.51877H4.96456L5.01785 5.42438ZM28.8773 5.75438C28.8501 6.19682 28.7708 6.78018 28.7012 7.05086C28.3246 8.51441 27.2999 9.80018 25.9767 10.4695C25.4749 10.7234 24.7636 10.9528 24.6956 10.8829C24.6742 10.8609 24.7644 10.4915 24.8959 10.0621C25.2401 8.93838 25.8375 6.42593 25.9496 5.63063L26.0456 4.95H27.4861H28.9268L28.8773 5.75438ZM13.636 23.2822C13.5598 23.6131 13.3306 24.2309 13.1269 24.6552C12.8273 25.2788 12.631 25.5559 12.1018 26.1016C11.7417 26.4728 11.3388 26.8568 11.2064 26.955L10.9656 27.1333H15.5H20.0344L19.7936 26.955C19.6612 26.8568 19.2583 26.4728 18.8982 26.1016C18.369 25.5559 18.1727 25.2788 17.8731 24.6552C17.6694 24.2309 17.4402 23.6131 17.364 23.2822C17.2573 22.8191 17.1978 22.6906 17.1051 22.7236C17.0389 22.7471 16.6506 22.8849 16.2424 23.0296L15.5 23.2928L14.7576 23.0296C14.3493 22.8849 13.9611 22.7471 13.8949 22.7236C13.8022 22.6906 13.7427 22.8191 13.636 23.2822ZM5.18727 28.1234C4.79811 28.3081 4.32694 28.7842 4.12919 29.1926C4.00488 29.4494 3.97984 29.7519 3.95897 31.2469L3.93449 33H15.5H27.0655L27.041 31.2469C27.0201 29.7468 26.9954 29.4499 26.8697 29.1902C26.6663 28.77 26.2093 28.3062 25.8192 28.124C25.506 27.9778 25.057 27.9711 15.5 27.9711C5.95498 27.9711 5.49392 27.9779 5.18727 28.1234Z",
  fill: "url(#paint0_radial_105_852)"
}), _0xb4a72a.createElement("defs", null, _0xb4a72a.createElement("radialGradient", {
  id: "paint0_radial_105_852",
  cx: 0,
  cy: 0,
  r: 1,
  gradientUnits: "userSpaceOnUse",
  gradientTransform: "translate(15.5 16.5) rotate(90) scale(28.7692 27.0256)"
}, _0xb4a72a.createElement("stop", {
  stopColor: "#FCFCFC"
}), _0xb4a72a.createElement("stop", {
  offset: 1,
  stopColor: "#FCFCFC",
  stopOpacity: 0
}))));
const trophyIcon = "" + new URL("trophy-icon.svg", import.meta.url).href;
const index$6 = "";
const ActivityItem = ({
  info: _0x2b8175
}) => {
  const varData_1 = _0x2b8175.count >= _0x2b8175.wanted;
  return <div className={_0x336260("activity-item", {
    "activity-completed": varData_1
  })}><SvgTrophyIcon className="icon" /><div className="info-container"><p className="description">{_0x2b8175.description}</p></div><div className="requirements">{_0x2b8175.count}/{_0x2b8175.wanted}</div></div>;
};
const index$5 = "";
let inFlight = 0;
const updateState = param_1 => _0xc8f186(param_1_1 => ({
  ...param_1_1,
  [_0x24b697.key]: {
    ...param_1_1[_0x24b697.key],
    ...param_1
  }
}))();
const jobsCheckout = async () => {
  const varData_2 = await _0x1cff5c("np-ui:jobCenterCheckout");
  if (varData_2.meta.ok) {
    return;
  }
  return _0xc8f186(param_1 => ({
    ...param_1,
    [_0x24b697.key]: {
      ..._0x24b697.initialState
    }
  }))();
};
const jobsCreateGroup = async () => {
  const varData_3 = _0x10a95a.getState()[_0x24b697.key];
  const varData_4 = varData_3.requestId + 1;
  if (inFlight === varData_4) {
    return;
  }
  inFlight = varData_4;
  _0x1fe13e({
    apps: [],
    appName: "jobs",
    icon,
    id: "groups_" + varData_4,
    state: _0x10a95a.getState(),
    timeout: -1,
    title: "Creating Group",
    text: "Please wait..."
  });
  const varData_5 = await _0x1cff5c("np-ui:createJobCenterGroup", {
    requestId: varData_4
  }, {
    returnData: {
      group_id: 1
    }
  });
  inFlight = 0;
  if (!varData_5.data.ok) {
    return;
  }
  return _0xc8f186(param_1 => ({
    ...param_1,
    [_0x24b697.key]: {
      ...param_1[_0x24b697.key],
      requestId: varData_4
    }
  }))();
};
const jobsRequestToJoin = async param_1 => {
  const varData_6 = _0x10a95a.getState()[_0x24b697.key];
  const varData_7 = varData_6.requestId + 1;
  if (inFlight === varData_7) {
    return;
  }
  inFlight = varData_7;
  const varData_8 = await _0x1cff5c("np-ui:requestToJoinJobCenterGroup", {
    group: param_1,
    requestId: varData_7
  });
  inFlight = 0;
  _0x1fe13e({
    appName: "jobs",
    id: "groups_" + varData_7,
    onReject: async () => {
      await _0x1cff5c("np-ui:requestToJoinJobCenterGroupCancel", {
        group: param_1,
        requestId: varData_7
      });
    },
    onRejectText: "Cancel",
    state: _0x10a95a.getState(),
    timeout: 30000,
    title: "Requesting to Join",
    text: <_0xc88d19 countdown={true} startTime={30} />
  });
  setTimeout(() => {
    updateState({
      requestId: varData_7
    });
  }, 1000);
};
const jobsLeaveGroup = async param_1 => {
  const varData_9 = await _0x1cff5c("np-ui:jobCenterGroupLeave", {
    group_id: param_1
  });
  return varData_9;
};
const jobsDisbandGroup = async param_1 => {
  const varData_10 = await _0x1cff5c("np-ui:jobCenterGroupDisband", {
    group_id: param_1
  });
  return varData_10;
};
const jobsUpdateReadyStatus = async (param_1, param_2) => {
  const varData_11 = {
    ready: "np-ui:jobCenterGroupReady",
    unready: "np-ui:jobCenterGroupNotReady"
  };
  const varData_12 = await _0x1cff5c(varData_11[param_2], {
    group_id: param_1
  });
  return varData_12;
};
const jobsRemoveFromGroup = async (param_1, param_2) => {
  const varData_13 = await _0x1cff5c("np-ui:jobCenterGroupRemove", {
    group_id: param_1,
    member_id: param_2
  });
  return varData_13;
};
const jobsPromoteToLeader = async (param_1, param_2) => {
  const varData_14 = await _0x1cff5c("np-ui:jobCenterGroupPromote", {
    group_id: param_1,
    member_id: param_2
  });
  return varData_14;
};
const jobsAbandonActivity = async param_1 => {
  const varData_15 = await _0x1cff5c("np-ui:jobCenterActivityAbandon", {
    activity: param_1
  });
  return varData_15;
};
const Activity = () => {
  const [_0xdd8918] = _0x1213fe(_0x24b697.key);
  const varData_16 = _0xb4a72a.useMemo(() => {
    if (!_0xdd8918.activity) {
      return [];
    }
    return _0xdd8918.activity.tasks;
  }, [_0xdd8918.activity]);
  const varData_17 = () => {
    const varData_18 = _0x5034e0(_0xdd8918.activity.deadline) / 1000;
    return _0x25a867.utc(varData_18 * 1000).format("HH:mm:ss");
  };
  return <_0x11d90f.div className="jobs-activity" initial={VIEW_TRANSITIONS.initial} animate={VIEW_TRANSITIONS.animate} exit={VIEW_TRANSITIONS.exit}><JobsHeader title={_0xdd8918?.activity.name ?? "N/A"} customText={varData_17()} /><div className="activity-container"><h1 className="heading">Task List</h1><li className="task-list">{varData_16.map((param_1, param_2) => <ActivityItem info={param_1} key={param_2} />)}</li></div><div className="actions"><div className="btn" onClick={() => jobsAbandonActivity(_0xdd8918.activity)}>Abandon Job <_0x487a5b icon="chevron-right" /></div></div></_0x11d90f.div>;
};
const SvgUserRadial = param_1 => _0xb4a72a.createElement("svg", {
  width: 34,
  height: 39,
  viewBox: "0 0 34 39",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0xb4a72a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14.9506 0.107899C12.5115 0.530874 10.3075 1.86722 8.76651 3.85763C7.52058 5.46686 6.9127 7.27286 6.91406 9.36127C6.91565 11.9588 7.78147 14.0469 9.61871 15.884C11.0901 17.3553 12.7392 18.2368 14.7976 18.6526C15.7425 18.8434 17.7642 18.8423 18.6998 18.6505C20.7381 18.2325 22.4896 17.2904 23.9027 15.8519C26.0124 13.7042 26.928 10.8772 26.4668 7.93592C26.1611 5.98692 25.3031 4.3481 23.8209 2.8818C22.2552 1.33297 20.4987 0.424177 18.4587 0.107289C17.536 -0.0360167 15.7786 -0.0357117 14.9506 0.107899ZM7.46244 18.9461C5.58698 19.2713 3.91005 20.2623 2.77115 21.7185C0.945772 24.0524 -0.088005 27.9756 0.00588781 32.2123C0.03838 33.679 0.0595637 33.8717 0.257384 34.5003C0.938843 36.666 2.65145 38.2272 5.00467 38.8279L5.67904 39H16.9876H28.2961L28.9731 38.8275C31.1818 38.2647 32.837 36.8606 33.5745 34.924C33.9236 34.0074 34.0063 33.3941 33.9996 31.7714C33.9747 25.7387 31.998 21.2478 28.6545 19.6278C27.6775 19.1545 26.2819 18.8274 25.2396 18.8275C24.5811 18.8276 24.1828 18.9997 22.6419 19.9501C21.2786 20.7909 20.9588 20.9473 19.8944 21.2944C17.8847 21.9495 16.1363 21.9616 14.2003 21.3337C13.1847 21.0044 12.5237 20.684 11.2935 19.9248C9.74351 18.9683 9.40059 18.826 8.66545 18.8344C8.33695 18.838 7.79557 18.8884 7.46244 18.9461Z",
  fill: "url(#paint0_radial_105_555)"
}), _0xb4a72a.createElement("defs", null, _0xb4a72a.createElement("radialGradient", {
  id: "paint0_radial_105_555",
  cx: 0,
  cy: 0,
  r: 1,
  gradientUnits: "userSpaceOnUse",
  gradientTransform: "translate(17 19.5) rotate(90) scale(34 29.641)"
}, _0xb4a72a.createElement("stop", {
  stopColor: "#FCFCFC"
}), _0xb4a72a.createElement("stop", {
  offset: 1,
  stopColor: "#FCFCFC",
  stopOpacity: 0
}))));
const userRadial = "" + new URL("user-radial.svg", import.meta.url).href;
const index$4 = "";
const Groups = () => {
  const [_0x38bd73] = _0x1213fe(_0x24b697.key);
  const [_0xc0d46b, _0x29804c] = _0x3dbe37();
  _0xb4a72a.useEffect(() => {
    if (!_0x38bd73.groups) {
      return;
    }
    (async () => {
      await _0x29804c("li", {
        opacity: 1
      }, {
        delay: _0x352284(0.1)
      });
    })();
  }, [_0x38bd73.groups]);
  return <_0x11d90f.div className="job-groups" initial={VIEW_TRANSITIONS.initial} animate={VIEW_TRANSITIONS.animate} exit={VIEW_TRANSITIONS.exit}><JobsHeader title={_0x38bd73.job.name} /><div className="group-options"><GroupsActionItem title="Create Group" description="Create your own group and begin your journey." onClick={jobsCreateGroup} icon="user-plus" /><GroupsActionItem title="Check Out" description="Sign out of this job, and explore other opportunities." onClick={jobsCheckout} icon="door-open" /></div>{_0x38bd73.groups.length > 0 && <div className="available-groups"><h1 className="heading">Available Groups</h1><div className="groups-list" ref={_0xc0d46b}>{_0x38bd73.groups && _0x38bd73.groups.map(param_1 => <GroupItem info={param_1} key={param_1.id} />)}</div></div>}</_0x11d90f.div>;
};
const GroupsActionItem = param_1 => {
  return <div className="group-action"><div className="info"><_0x487a5b className="icon" icon={param_1.icon} /><h1 className="title">{param_1.title}</h1><p className="description">{param_1.description}</p><_0x487a5b className="bg-icon" icon={param_1.icon} /></div><button className="btn" onClick={param_1.onClick}>{param_1.title} <_0x487a5b icon="chevron-right" /></button></div>;
};
const GroupItem = ({
  info: _0x25c886
}) => {
  const varData_19 = _0x25c886.status !== "idle" || _0x25c886.size >= _0x25c886.capacity;
  const varData_20 = async () => {
    if (varData_19) {
      return;
    }
    await jobsRequestToJoin(_0x25c886);
  };
  return <li className={_0x336260("group-item", {
    "group-busy": varData_19
  })} onClick={varData_20}><SvgUserRadial className="icon" /><div className="info-container"><h1 className="title">{_0x25c886.leader.first_name} {_0x25c886.leader.last_name}</h1><div className="group-value">Members: {_0x25c886.size}/{_0x25c886.capacity}</div></div></li>;
};
const index$3 = "";
const JobsListingsItem = ({
  info: _0x59abe6
}) => {
  const varData_21 = () => {
    _0x1cff5c("np-ui:setGPSMarker", {
      coords: _0x59abe6.headquarters,
      job: _0x59abe6
    });
  };
  return <li className="jobs-item"><div className={_0x336260("header-info")}><div className="item-check-container"><div className="item-check" onClick={() => {
          varData_21();
        }}>Set GPS</div></div><div className="icon-container"><_0x487a5b className="icon" icon={_0x59abe6.icon} /></div><div className="item-texts"><_0x27ae5b className="item-name" variant="body2">{_0x59abe6.name}</_0x27ae5b><_0x27ae5b className="item-description" variant="body2">{_0x59abe6.description}</_0x27ae5b></div></div></li>;
};
const StyledRating = _0x290d0b(_0x5d52ec)({
  "& .MuiRating-iconFilled": {
    color: "#2bc2d1"
  }
});
const index$2 = "";
const JobsListings = () => {
  const [_0x223bf6, _0x1f231d] = _0xb4a72a.useState([]);
  const [_0xc3fc3b, _0x18a8f5] = _0xb4a72a.useState("");
  const [_0x5d58ee, _0x454cf7] = _0x3dbe37();
  const varData_22 = param_1 => {
    _0x18a8f5(param_1.target.value);
  };
  const varData_23 = _0xb4a72a.useMemo(() => {
    return _0x223bf6.filter(param_1 => !param_1.vpn && !param_1.hidden).filter(param_1 => param_1.name.toLocaleLowerCase().includes(_0xc3fc3b.toLocaleLowerCase()));
  }, [_0x223bf6, _0xc3fc3b]);
  const varData_24 = async () => {
    const varData_25 = await _0x1cff5c("np-ui:getJobCenterJobs", {}, {
      returnData: _0x1284a8.getJobCenterJobs()
    });
    _0x1f231d(varData_25.data);
  };
  _0xb4a72a.useEffect(() => {
    varData_24();
  }, []);
  _0xb4a72a.useEffect(() => {
    if (!varData_23) {
      return;
    }
    (async () => {
      await _0x454cf7("li", {
        opacity: 1
      }, {
        delay: _0x352284(0.1)
      });
    })();
  }, [varData_23]);
  return <_0x11d90f.div className="jobs-container" initial={VIEW_TRANSITIONS.initial} animate={VIEW_TRANSITIONS.animate} exit={VIEW_TRANSITIONS.exit}><div className="search-container"><input placeholder="Search Job" onChange={varData_22} value={_0xc3fc3b} /><_0x487a5b className="icon" icon="search" /></div><div className="jobs-offerings"><h1 className="jobs-heading">Available Jobs</h1><ul className="jobs-list" ref={_0x5d58ee}>{varData_23.map(param_1 => <JobsListingsItem info={param_1} key={param_1.name} />)}</ul></div></_0x11d90f.div>;
};
const index$1 = "";
const MyGroupMember = ({
  info: _0x5eadb3,
  isLeader: _0x50936,
  groupId: _0x2cdec9
}) => {
  return <li className={_0x336260("member-item", {
    "member-red": !_0x5eadb3.is_online
  })}><SvgUserRadial className="icon" /><div className="info-container"><h1 className="title">{_0x5eadb3.first_name} {_0x5eadb3.last_name}</h1><div className="group-value">{_0x5eadb3.is_online ? "Online" : "Offline"}</div>{_0x50936 && !_0x5eadb3.is_leader && <_0x515a43.Fragment><_0x336c39 title="Remove from group" placement="left"><div className="group-value action" onClick={() => jobsRemoveFromGroup(_0x2cdec9, _0x5eadb3.id)}><_0x487a5b className="icon" icon="user-minus" /></div></_0x336c39><_0x336c39 title="Promote to leader" placement="left"><div className="group-value action" onClick={() => jobsPromoteToLeader(_0x2cdec9, _0x5eadb3.id)}><_0x487a5b className="icon" icon="user-graduate" /></div></_0x336c39></_0x515a43.Fragment>}</div></li>;
};
const index = "";
const MyGroup = () => {
  const [_0x3350ac] = _0x1213fe(_0x24b697.key);
  const [_0x307d1c, _0x55de17] = _0x3dbe37();
  const varData_26 = _0xb4a72a.useMemo(() => {
    if (!_0x3350ac.group) {
      return false;
    }
    const varData_27 = _0x223360();
    return varData_27?.id === _0x3350ac.group.members.find(param_1 => param_1.is_leader)?.id;
  }, [_0x3350ac.group]);
  const varData_28 = _0xb4a72a.useMemo(() => {
    return _0x3350ac.group?.ready ?? false;
  }, [_0x3350ac.group]);
  const varData_29 = () => {
    if (!_0x3350ac.group) {
      return;
    }
    jobsDisbandGroup(_0x3350ac.group.id);
  };
  const varData_30 = () => {
    if (!_0x3350ac.group) {
      return;
    }
    jobsLeaveGroup(_0x3350ac.group.id);
  };
  const varData_31 = () => {
    if (!_0x3350ac.group) {
      return;
    }
    const varData_32 = varData_28 ? "unready" : "ready";
    jobsUpdateReadyStatus(_0x3350ac.group.id, varData_32);
  };
  _0xb4a72a.useEffect(() => {
    if (!_0x3350ac.group) {
      return;
    }
    (async () => {
      await _0x55de17("li", {
        opacity: 1
      }, {
        delay: _0x352284(0.1)
      });
    })();
  }, [_0x3350ac.group]);
  return <_0x11d90f.div className="jobs-mygroup" initial={VIEW_TRANSITIONS.initial} animate={VIEW_TRANSITIONS.animate} exit={VIEW_TRANSITIONS.exit}><JobsHeader title={varData_28 ? "Searching" : "Waiting"} /><ul className="group-members" ref={_0x307d1c}>{_0x3350ac.group && _0x3350ac.group.members.map(param_1 => <MyGroupMember info={param_1} isLeader={varData_26} groupId={_0x3350ac.group?.id ?? 0} key={param_1.id} />)}</ul>{!varData_26 && <div className="group-actions"><div className="btn" onClick={varData_30}>Leave Group <_0x487a5b icon="chevron-right" /></div></div>}{varData_26 && <div className="group-actions"><div className="btn">{varData_28 ? "Unready" : "Ready"} for jobs <SwitchButton value={varData_28} onClick={varData_31} /></div><div className="btn" onClick={varData_29}>Disband Group <_0x487a5b icon="chevron-right" /></div></div>}</_0x11d90f.div>;
};
const SwitchButton = param_1 => {
  return <div className="switch" data-isOn={param_1.value} onClick={param_1.onClick}><_0x11d90f.div className="handle" layout={true} transition={{
      type: "spring",
      stiffness: 700,
      damping: 30
    }} /></div>;
};
const SvgBlob1 = param_1 => _0xb4a72a.createElement("svg", {
  width: 337,
  height: 483,
  viewBox: "0 0 337 483",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0xb4a72a.createElement("g", null, _0xb4a72a.createElement("path", {
  d: "M121 145.882C121 167.486 103.539 185 82 185C60.4609 185 43 167.486 43 145.882C43 124.277 82 36.528 82 106.763C82 176.999 121 124.277 121 145.882Z",
  fill: "#00F8B9"
}), _0xb4a72a.createElement("path", {
  d: "M166.12 243.895C166.12 265.462 103.498 307 81.9734 307C60.449 307 43 289.516 43 267.95C43 246.383 127.147 134.731 127.147 204.845C127.147 274.958 191.365 103.668 166.12 243.895Z",
  fill: "#0032E5"
}), _0xb4a72a.createElement("path", {
  d: "M294 288.823C294 310.207 248.817 301.052 209.881 301.052C170.945 301.052 153 310.207 153 288.823C153 267.44 197.864 278.173 209.881 239.015C221.898 199.857 294 210.857 294 288.823Z",
  fill: "#F87700"
}), _0xb4a72a.createElement("path", {
  d: "M280.318 161.239C166.475 276.796 235.353 173.564 196.606 173.564C157.858 173.564 140 182.79 140 161.239C140 139.687 154.516 132.297 166.475 92.8308C178.434 53.3649 335.406 105.322 280.318 161.239Z",
  fill: "#F86969"
})));
const blob1 = "" + new URL("blob-1.svg", import.meta.url).href;
const SvgBlob2 = param_1 => _0xb4a72a.createElement("svg", {
  width: 337,
  height: 416,
  viewBox: "0 0 337 416",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0xb4a72a.createElement("g", null, _0xb4a72a.createElement("circle", {
  cx: 108,
  cy: 518,
  r: 155,
  fill: "#00F8B9"
}), _0xb4a72a.createElement("circle", {
  cx: 36,
  cy: 435,
  r: 155,
  fill: "#D300E5"
}), _0xb4a72a.createElement("circle", {
  cx: -74,
  cy: 363,
  r: 155,
  fill: "#F87700"
})));
const blob2 = "" + new URL("blob-2.svg", import.meta.url).href;
const container = "";
const JobsContainer = () => {
  const [_0x44d9fe] = _0x1213fe(_0x24b697.key);
  return <div className="app jobs-center-app"><_0x36e555 mode="wait" initial={false}>{!_0x44d9fe.job && <JobsListings />}{!!_0x44d9fe.job && !_0x44d9fe.group && <Groups />}{!_0x44d9fe.activity && !!_0x44d9fe.group && <MyGroup />}{!!_0x44d9fe.activity && <Activity />}</_0x36e555><SvgBlob1 className="blob-1" /><SvgBlob2 className="blob-2" /></div>;
};
let id = 0;
const getId = (_0xc48573 = false) => {
  if (_0xc48573) {
    id = id + 1;
  }
  return id;
};
const groupResponse = param_1 => ({
  data: _0x5664ed,
  state: _0x4229f1
}) => {
  _0x1fe13e({
    appName: "jobs",
    state: _0x4229f1,
    timeout: 30000,
    title: "Requesting to Join",
    text: param_1 === "deny" ? "Request Denied" : "Joined Group!"
  });
  return _0x4229f1;
};
const events = param_1 => {
  let isDisabled = false;
  param_1("jobs-update", ({
    data: _0x4565d2,
    state: _0x44098c
  }) => {
    if (_0x4565d2.state.activity && _0x4565d2.state.activity.tasks && _0x4565d2.state.activity.tasks.length > 0) {
      const varData_33 = _0x4565d2.state.activity.tasks.find(param_1_1 => param_1_1.count < param_1_1.wanted);
      if (!varData_33 && !isDisabled) {
        isDisabled = true;
        _0x1fe13e({
          appName: "jobs",
          state: _0x44098c,
          timeout: 1500,
          title: "complete",
          text: "All tasks complete!"
        });
      } else if (varData_33) {
        isDisabled = false;
        const varData_34 = varData_33.wanted > 1 ? "(" + varData_33.count + " / " + varData_33.wanted + ") Current" : "Current";
        _0x1fe13e({
          appName: "jobs",
          state: _0x44098c,
          timeout: -1,
          title: varData_34,
          text: varData_33.description
        });
      }
    }
    return {
      ..._0x44098c,
      [_0x24b697.key]: {
        ..._0x44098c[_0x24b697.key],
        ..._0x4565d2.state
      }
    };
  });
  param_1("job-group-join-deny", groupResponse("deny"));
  param_1("job-group-join-accept", groupResponse("accept"));
  param_1("job-group-join-request", ({
    data: _0x5ae1a9,
    state: _0x45f967
  }) => {
    _0x1fe13e({
      appName: "jobs",
      onAccept: () => {
        _0x1cff5c("np-ui:requestToJoinJobCenterGroupAccept", {
          group_id: _0x5ae1a9.group_id,
          member_id: _0x5ae1a9.member.id,
          request_id: _0x5ae1a9.request_id,
          character: _0x45f967.character
        });
      },
      onAcceptText: "Accept",
      onReject: () => {
        _0x1cff5c("np-ui:requestToJoinJobCenterGroupReject", {
          group_id: _0x5ae1a9.group_id,
          member_id: _0x5ae1a9.member.id,
          request_id: _0x5ae1a9.request_id,
          character: _0x45f967.character
        });
      },
      onRejectText: "Reject",
      state: _0x45f967,
      text: _0x5ae1a9.member.first_name + " " + _0x5ae1a9.member.last_name,
      title: "Request to Join",
      timeout: -1
    });
    return _0x45f967;
  });
  param_1("job-group-offer-activity", ({
    data: _0x2b17ce,
    state: _0x3e88c7
  }) => {
    _0x1fe13e({
      appName: "jobs",
      onAccept: async () => {
        const varData_35 = await _0x1cff5c("np-ui:jobCenterActivityAccept", {
          activity_id: _0x2b17ce.activity_id,
          character: _0x3e88c7.character,
          group_id: _0x2b17ce.group_id
        });
        setTimeout(() => {
          _0x1fe13e({
            appName: "jobs",
            state: _0x3e88c7,
            text: varData_35.meta.ok ? "Job pending..." : "Job was unavailable.",
            title: "Job Offer",
            timeout: 5000
          });
        }, 0);
      },
      onAcceptOptions: {
        onAccept: null,
        onReject: null,
        dismiss: false,
        blockDismissOnClick: true,
        id: "activity_" + _0x2b17ce.activity_id,
        text: "Accepting...",
        timeout: -1
      },
      onAcceptText: "Accept",
      onReject: () => {
        _0x1cff5c("np-ui:jobCenterActivityReject", {
          activity_id: _0x2b17ce.activity_id,
          character: _0x3e88c7.character,
          group_id: _0x2b17ce.group_id
        });
      },
      onRejectText: "Reject",
      state: _0x3e88c7,
      text: _0x2b17ce.message,
      title: "Job Offer",
      timeout: 30000
    });
    return _0x3e88c7;
  });
  param_1("jobs-pending-selection", ({
    data: _0x5d0cfe,
    state: _0x3d591b
  }) => {
    _0x1fe13e({
      appName: "jobs",
      state: _0x3d591b,
      text: _0x5d0cfe.got_job ? "Job starting!" : "Didn't get the job this time.",
      title: "Job Update",
      timeout: 5000
    });
    return _0x3d591b;
  });
  param_1("business-charge", ({
    data: _0x4d04b8,
    state: _0x4eb922
  }) => {
    _0x1fe13e({
      appName: "jobs",
      id: getId(true),
      onReject: async () => {
        setTimeout(async () => {
          _0x1cff5c("business:externalChargeReject", {
            price: _0x4d04b8.price,
            tax: _0x4d04b8.tax,
            character: _0x4eb922.character,
            _data: _0x4d04b8._data
          });
          _0x1fe13e({
            appName: "jobs",
            id: getId(),
            state: _0x4eb922,
            text: "Charge Rejected!",
            title: _0x4d04b8._data.title ? _0x4d04b8._data.title : "Services charge",
            timeout: 2500
          });
        });
      },
      onAccept: async () => {
        setTimeout(async () => {
          const varData_36 = await _0x1cff5c(_0x4d04b8._data.nuiCallback ? _0x4d04b8._data.nuiCallback : "business:externalChargeAccepted", {
            price: _0x4d04b8.price,
            tax: _0x4d04b8.tax,
            character: _0x4eb922.character,
            _data: _0x4d04b8._data
          });
          _0x1fe13e({
            appName: "jobs",
            id: getId(),
            state: _0x4eb922,
            text: varData_36.meta.ok ? "Charge Accepted!" : varData_36.meta.message,
            title: _0x4d04b8._data.title ? _0x4d04b8._data.title : "Services charge",
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
      state: _0x4eb922,
      timeout: 30000,
      title: _0x4d04b8._data.title ? _0x4d04b8._data.title : "Services charge",
      text: <_0xc88d19 countdown={true} extra={_0x36a3e1(_0x4d04b8.price + _0x4d04b8.tax) + " incl. tax"} startTime={30} />
    });
    return {
      ..._0x4eb922
    };
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/jobs.svg";
const icon = {
  background: "#90CAF9",
  color: "white",
  name: "people-carry"
};
const config = param_1 => {
  return {
    ...param_1,
    events: () => events,
    iconPng: myIcon,
    label: "Job Center",
    name: "jobs",
    position: 60,
    render: () => <JobsContainer />
  };
};
export { config as default, icon };