// np-ropes: cl_main.js
// Clean implementation of NoPixel Ropes system without obfuscator deadloops

const activeRopes = new Map();
function GetRope(ropeId) {
  return activeRopes.get(ropeId) || null;
}
if (typeof globalThis.exports === "function") {
  globalThis.exports("GetRope", GetRope);
} else if (globalThis.exports) {
  globalThis.exports.GetRope = GetRope;
}

// Handle rope update (attachment, winching, etc.)
async function UpdateRope(ropeId, updateData) {
  let ropeObj = activeRopes.get(ropeId);
  if (!ropeObj) {
    ropeObj = {
      id: ropeId,
      data: {},
      handle: null
    };
    activeRopes.set(ropeId, ropeObj);
  }
  if (updateData) {
    ropeObj.data = Object.assign(ropeObj.data || {}, updateData);
    if (updateData.attachedTo) {
      const {
        ent1,
        ent2,
        ent1Offset,
        ent2Offset
      } = updateData.attachedTo;
      if (ent1 && ent2) {
        const e1 = typeof NetworkDoesNetworkIdExist === "function" && NetworkDoesNetworkIdExist(ent1) ? NetworkGetEntityFromNetworkId(ent1) : ent1;
        const e2 = typeof NetworkDoesNetworkIdExist === "function" && NetworkDoesNetworkIdExist(ent2) ? NetworkGetEntityFromNetworkId(ent2) : ent2;
        if (typeof DoesEntityExist === "function" && DoesEntityExist(e1) && DoesEntityExist(e2)) {
          if (!ropeObj.handle && typeof AddRope === "function") {
            const [x, y, z] = GetEntityCoords(e1);
            RopeLoadTextures();
            ropeObj.handle = AddRope(x, y, z, 0, 0, 0, 30, 1, 30, 0.1, 0.5, false, false, true, 1, false, 0);
          }
          if (ropeObj.handle && typeof AttachEntitiesToRope === "function") {
            const o1 = ent1Offset || [0, 0, 0];
            const o2 = ent2Offset || [0, 0, 0];
            AttachEntitiesToRope(ropeObj.handle, e1, e2, o1[0], o1[1], o1[2], o2[0], o2[1], o2[2], 30, false, false, null, null);
          }
        }
      }
    }
    if (updateData.winching && ropeObj.handle && typeof StartRopeWinding === "function") {
      StartRopeWinding(ropeObj.handle);
    }
  }
  return true;
}
if (globalThis.NPX && globalThis.NPX.Procedures && globalThis.NPX.Procedures.register) {
  try {
    globalThis.NPX.Procedures.register("np-ropes:UpdateRope", async (ropeId, data) => {
      return await UpdateRope(ropeId, data);
    });
  } catch (e) {}
}
onNet("np-ropes:UpdateRope", (ropeId, data) => {
  UpdateRope(ropeId, data);
});
onNet("np-ropes:ropeDeleted", ropeId => {
  const ropeObj = activeRopes.get(ropeId);
  if (ropeObj) {
    if (ropeObj.handle && typeof DeleteRope === "function") {
      DeleteRope(ropeObj.handle);
    }
    activeRopes.delete(ropeId);
  }
  emit("np-ropes:ropeDeleted", ropeId);
});
on("onResourceStop", res => {
  if (res === GetCurrentResourceName()) {
    for (const [id, ropeObj] of activeRopes.entries()) {
      if (ropeObj.handle && typeof DeleteRope === "function") {
        DeleteRope(ropeObj.handle);
      }
    }
    activeRopes.clear();
  }
});