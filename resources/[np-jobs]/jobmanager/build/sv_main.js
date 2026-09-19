;
(function() {
  const resourceName = GetCurrentResourceName();
  const jobDefinitions = /* @__PURE__ */ new Map();
  exports("RegisterJob", (jobName, jobData) => {
    jobDefinitions.set(jobName, jobData);
  });
  exports("GetJob", (jobName) => jobDefinitions.get(jobName));
  exports("GetAllJobs", () => Array.from(jobDefinitions.values()));
  exports("SetPlayerJob", (src, jobName, grade) => {
    var _a, _b;
    const player = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(src);
    if (!((_b = player == null ? void 0 : player.character) == null ? void 0 : _b.id)) {
      return;
    }
    exports.oxmysql.execute("UPDATE `characters` SET `job`=?,`job_grade`=? WHERE `id`=?", [jobName, grade || 0, player.character.id]);
    if (player.character) {
      player.character.job = jobName;
      player.character.job_grade = grade || 0;
    }
    emitNet("jobmanager:jobUpdated", src, jobName, grade);
  });
  exports("GetPlayerJob", (src) => {
    var _a;
    const p = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(src);
    if (p == null ? void 0 : p.character) {
      return {
        job: p.character.job,
        grade: p.character.job_grade
      };
    } else {
      return null;
    }
  });
  onNet("jobmanager:getJobList", () => {
    emitNet("jobmanager:receiveJobList", source, Array.from(jobDefinitions.values()));
  });
  onNet("jobmanager:requestMyJob", () => {
    var _a;
    const p = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(source);
    if (!(p == null ? void 0 : p.character)) {
      return;
    }
    emitNet("jobmanager:receiveMyJob", source, {
      job: p.character.job,
      grade: p.character.job_grade
    });
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Job Manager loaded.`);
    }
  });
})();
