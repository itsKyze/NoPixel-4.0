;
(function () {
  // jobs - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    const jm = exports.jobmanager;
    if (!jm) {
      console.warn("[jobs] jobmanager not found");
      return;
    }
    const jobList = [{
      name: "unemployed",
      label: "Unemployed",
      grades: [{
        label: "Civilian",
        salary: 0
      }]
    }, {
      name: "police",
      label: "LSPD",
      grades: [{
        label: "Cadet",
        salary: 200
      }, {
        label: "Officer",
        salary: 350
      }, {
        label: "Sergeant",
        salary: 500
      }, {
        label: "Lieutenant",
        salary: 700
      }, {
        label: "Captain",
        salary: 1000
      }]
    }, {
      name: "ems",
      label: "EMS",
      grades: [{
        label: "Paramedic",
        salary: 200
      }, {
        label: "Doctor",
        salary: 350
      }, {
        label: "Chief",
        salary: 500
      }]
    }, {
      name: "mechanic",
      label: "Mechanic",
      grades: [{
        label: "Apprentice",
        salary: 150
      }, {
        label: "Mechanic",
        salary: 250
      }, {
        label: "Senior",
        salary: 400
      }]
    }, {
      name: "taxi",
      label: "Taxi",
      grades: [{
        label: "Driver",
        salary: 50
      }]
    }, {
      name: "trucker",
      label: "Trucker",
      grades: [{
        label: "Driver",
        salary: 100
      }]
    }, {
      name: "fisherman",
      label: "Fisherman",
      grades: [{
        label: "Fisher",
        salary: 75
      }]
    }, {
      name: "miner",
      label: "Miner",
      grades: [{
        label: "Miner",
        salary: 100
      }]
    }, {
      name: "farmer",
      label: "Farmer",
      grades: [{
        label: "Farmer",
        salary: 80
      }]
    }, {
      name: "news",
      label: "Weazel News",
      grades: [{
        label: "Reporter",
        salary: 200
      }]
    }, {
      name: "towing",
      label: "Towing",
      grades: [{
        label: "Driver",
        salary: 80
      }]
    }, {
      name: "gruppe6",
      label: "Gruppe 6",
      grades: [{
        label: "Guard",
        salary: 250
      }]
    }];
    for (const job of jobList) {
      jm.RegisterJob(job.name, job);
    }
    console.log(`[${resourceName}] Jobs registered.`);
  });
})();