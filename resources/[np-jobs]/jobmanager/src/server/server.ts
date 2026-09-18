;
(function () {
  // jobmanager - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const jobDefinitions = new Map();
  exports("RegisterJob", (jobName, jobData) => {
    jobDefinitions.set(jobName, jobData);
  });
  exports("GetJob", jobName => jobDefinitions.get(jobName));
  exports("GetAllJobs", () => Array.from(jobDefinitions.values()));
  exports("SetPlayerJob", (src, jobName, grade) => {
    const player = exports["np-base"]?.GetPlayer(src);
    if (!player?.character?.id) {
      return;
    }
    exports.oxmysql.execute("UPDATE `characters` SET `job`=?,`job_grade`=? WHERE `id`=?", [jobName, grade || 0, player.character.id]);
    if (player.character) {
      player.character.job = jobName;
      player.character.job_grade = grade || 0;
    }
    emitNet("jobmanager:jobUpdated", src, jobName, grade);
  });
  exports("GetPlayerJob", src => {
    const p = exports["np-base"]?.GetPlayer(src);
    if (p?.character) {
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
    const p = exports["np-base"]?.GetPlayer(source);
    if (!p?.character) {
      return;
    }
    emitNet("jobmanager:receiveMyJob", source, {
      job: p.character.job,
      grade: p.character.job_grade
    });
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Job Manager loaded.`);
    }
  });
})();