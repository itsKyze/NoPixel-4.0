const DOJ = {
    judge: true,
    mayor: true,
    deputy_mayor: true,
    city_council: true,
    treasurer: true,
    dib: true,
};

const DOJ_SAMA = {
    ...DOJ,
    sama_director: true,
};

const MEDICAL = {
    ...DOJ,
    ems: true,
    doctor: true,
    therapist: true,
    sama_director: true,
};

const COPS = {
    ...DOJ,
    police: true,
};

// const COPS_JUDGE = {
//     ...COPS,
//     judge: true,
// };

const EMERGENCY = {
    ...MEDICAL,
    ...COPS,
};

const DOJ_EMERGENCY = {
    ...DOJ,
    ...EMERGENCY,
};

const COPS_DOC = {
    ...COPS,
    doc: true,
    judge: true,
};

const COPS_EMS = {
    ...COPS,
    ems: true,
};

const AIR_PERSONEL = {
    air_master: true,
    air_instructor: true,
};

const offsets = {
    PRISON_GATES: [3.68, 0, 2.5],
};

globalThis.DOORS = [
    [
        {
            id: 'central-med-pcu',
            coords: [362.8, -1391.43, 33.09, 49.99999237060547],
            model: -1026546088,
            locked: true,
            access: {
                jobs: EMERGENCY,
            },
        },
        {
            id: 'central-med-pcu',
            coords: [364.35, -1389.74, 33.09, 230],
            model: -1026546088,
            locked: true,
            access: {
                jobs: EMERGENCY,
            },
        },
    ],
    [
        {
            id: 'central-med-operating',
            coords: [369.64, -1394.17, 33.09, 230.00001525878906],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
        {
            id: 'central-med-operating',
            coords: [368.08, -1395.87, 33.09, 49.999977111816406],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
    ],
    [
        {
            id: 'central-med-operating-1_r',
            coords: [375.26, -1402.36, 31.94, 320.0],
            model: 'hospital_entrancedoor_l',
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
        {
            id: 'central-med-operating-1_l',
            coords: [377.03, -1403.85, 31.94, 140.0],
            model: 'hospital_entrancedoor_l',
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
    ],
    {
        id: 'central-med-staff',
        coords: [381.66, -1407.84, 33.09, 139.6],
        model: -1298168329,
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-mri',
        coords: [377.1, -1399.85, 33.09, 27.077129364013672],
        model: 'hospital_door6',
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    [
        {
            id: 'central-med-doctors',
            coords: [346.07, -1421.69, 32.58, 45.98460388183594],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
        {
            id: 'central-med-doctors',
            coords: [347.62, -1419.99, 32.58, 229.75209045410156],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
    ],
    {
        id: 'central-med-exam',
        coords: [354.99, -1426.95, 32.58, 230.00001525878906],
        model: 'hospital_door6',
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    [
        {
            id: 'central-med-cafeteria',
            coords: [341.29, -1422.43, 32.45, 140.0],
            model: 'hospital_door',
            locked: true,
            access: {
                jobs: EMERGENCY,
            },
        },
        {
            id: 'central-med-cafeteria',
            coords: [343.06, -1423.91, 32.45, 320.0],
            model: 'hospital_door',
            locked: true,
            access: {
                jobs: EMERGENCY,
            },
        },
    ],
    {
        id: 'central-med-wc',
        coords: [340.56, -1421.81, 32.45, 318.71],
        model: 'hospital_door',
        locked: true,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-patient-1',
        coords: [338.65, -1415.9, 32.58, 320.0],
        model: 'hospital_door6',
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-patient-2',
        coords: [336.28, -1413.91, 32.58, 320.0],
        model: 'hospital_door6',
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-emergency-right',
        coords: [341.8, -1414.68, 32.58, 139.99998474121094],
        model: -1026546088,
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-emergency-left',
        coords: [336.7, -1410.26, 32.58, 319.87493896484375],
        model: -1026546088,
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    [
        {
            id: 'central-med-large-emergency',
            coords: [333.57, -1411.21, 32.58, 49.745540618896484],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
        {
            id: 'central-med-large-emergency',
            coords: [335.13, -1409.51, 32.58, 229.70225524902344],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
    ],
    {
        id: 'central-med-emergency-2-right',
        coords: [332.51, -1413.21, 32.58, 230.1800079345703],
        model: -1026546088,
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-emergency-2-left',
        coords: [328.1, -1418.32, 32.58, 49.999977111816406],
        model: -1026546088,
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-patient-3',
        coords: [329.65, -1421.24, 32.58, 50.0],
        model: 'hospital_door6',
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-patient-4',
        coords: [326.24, -1423.21, 32.58, 320.4060363769531],
        model: 'hospital_door6',
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    [
        {
            id: 'central-med-large-2-left',
            coords: [320.49, -1417.95, 32.58, 49.737945556640625],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
        {
            id: 'central-med-large-2-right',
            coords: [322.04, -1416.25, 32.58, 230.23585510253906],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
    ],

    {
        id: 'sandy-med-lab',
        coords: [1815.71, 3682.0, 34.31, 300.0],
        model: -1046694301,
        locked: true,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'sandy-med-mri',
        coords: [1817.89, 3678.26, 34.31, 300.0],
        model: -1046694301,
        locked: true,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'sandy-med-surgery',
        coords: [1820.62, 3673.51, 34.31, 300.0],
        model: -1046694301,
        locked: true,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'sandy-med-recovery1',
        coords: [1834.96, 3687.3, 34.31, 300.09],
        model: -1046694301,
        locked: true,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'sandy-med-recovery2',
        coords: [1836.86, 3684.02, 34.31, 300.0],
        model: -1046694301,
        locked: true,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'sandy-med-dod1',
        coords: [1838.74, 3680.76, 34.31, 296.85],
        model: -1046694301,
        locked: true,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'sandy-med-dod2',
        coords: [1840.82, 3677.19, 34.31, 300.0],
        model: -1046694301,
        locked: true,
        access: {
            jobs: EMERGENCY,
        },
    },

    [
        {
            id: 'mrpd-entrance1-right',
            coords: [434.7, -979.63, 30.84, 90.0],
            model: 'sm_op_prop_pd_door_ent_01_r',
            locked: false,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-entrance1-left',
            coords: [434.7, -982.23, 30.84, 270.0],
            model: 'sm_op_prop_pd_door_ent_01_l',
            locked: false,
            access: {
                jobs: COPS,
            },
        },
    ],
    [
        {
            id: 'mrpd-entrance2-right',
            coords: [434.7, -983.02, 30.84, 90.0],
            model: 'sm_op_prop_pd_door_ent_01_r',
            locked: false,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-entrance2-left',
            coords: [434.7, -985.62, 30.84, 270.0],
            model: 'sm_op_prop_pd_door_ent_01_l',
            locked: false,
            access: {
                jobs: COPS,
            },
        },
    ],
    [
        {
            id: 'mrpd-briefing-left',
            coords: [440.38, -989.82, 30.84, 270.0],
            model: 'sm_op_prop_int_door_001_01b',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-briefing-right',
            coords: [440.38, -987.22, 30.84, 90.0],
            model: 'sm_op_prop_int_door_001_01b',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'mrpd-briefing-emergency',
        coords: [425.75, -998.76, 30.84, 0.0],
        model: 'sm_op_prop_utility_door_01a_r',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-briefing-exit',
        coords: [439.07, -997.62, 30.84, 270.99],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    [
        {
            id: 'mrpd-sideentrance-left',
            coords: [440.59, -998.82, 30.84, 180.0],
            model: 'sm_op_prop_pd_door_ent_01_l',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-sideentrance-right',
            coords: [443.19, -998.82, 30.84, 0.0],
            model: 'sm_op_prop_pd_door_ent_01_r',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'mrpd-hall-right',
        coords: [450.01, -990.75, 30.84, 359.68],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-hall-left',
        coords: [450.12, -978.02, 30.84, 270.0],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-records-enter',
        coords: [441.28, -978.02, 30.84, 270.0],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    [
        {
            id: 'mrpd-sideleftentrance-left',
            coords: [467.42, -972.03, 30.84, 180.0],
            model: 'sm_op_prop_pd_door_ent_01_l',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-sideleftentrance-right',
            coords: [470.02, -972.03, 30.84, 0.0],
            model: 'sm_op_prop_pd_door_ent_01_r',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'mrpd-stairs-under',
        coords: [471.29, -978.95, 26.54, 269.64],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    [
        {
            id: 'mrpd-garagetoint1-left',
            coords: [457.6, -991.67, 26.54, 90.0],
            model: 'sm_op_prop_int_door_001_01b',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-garagetoint1-right',
            coords: [457.6, -994.27, 26.54, 270.0],
            model: 'sm_op_prop_int_door_001_01b',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    [
        {
            id: 'mrpd-garagetoint2-left',
            coords: [457.6, -979.61, 26.54, 90.37],
            model: 'sm_op_prop_int_door_001_01b',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-garagetoint2-right',
            coords: [457.6, -982.21, 26.54, 269.65],
            model: 'sm_op_prop_int_door_001_01b',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'mrpd-garagecontrol-1',
        coords: [461.43, -991.14, 26.54, 0.35],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-garagecontrol-2',
        coords: [461.43, -982.74, 26.54, 359.65],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-reception-1',
        coords: [453.17, -978.45, 30.84, 0.0],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    // {
    //     id: 'mrpd-stairs2-under',
    //     coords: [466.8, -1001.69, 26.54, 90.41],
    //     model: 'sm_op_prop_int_door_001_01b',
    //     locked: false,
    //     access: {
    //         jobs: COPS,
    //     },
    // },
    [
        {
            id: 'mrpd-side-under-entrance-left',
            coords: [467.42, -1014.5, 26.54, 0.35],
            model: 'sm_op_prop_utility_door_01a_r',
            locked: true,
            access: {
                jobs: COPS_EMS,
            },
        },
        {
            id: 'mrpd-garagetoint2-right',
            coords: [470.02, -1014.5, 26.54, 179.67],
            model: 'sm_op_prop_utility_door_01a_l',
            locked: true,
            access: {
                jobs: COPS_EMS,
            },
        },
    ],
    [
        {
            id: 'mrpd-garage-to-exit-hall_left',
            coords: [467.42, -1004.54, 26.54, 180.0],
            model: 'sm_op_prop_int_door_001_01b',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-garage-to-exit-hall_right',
            coords: [470.02, -1004.54, 26.54],
            model: 'sm_op_prop_int_door_001_01b',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'mrpd-interrogation-1',
        coords: [474.11, -1008.54, 26.54, 359.64],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-interrogation-2',
        coords: [475.06, -1016.13, 26.54, 270.0],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-interrogation-3',
        coords: [476.77, -1008.54, 26.54, 179.65],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-interrogation-4',
        coords: [482.97, -1008.54, 26.54, 0.0],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-interrogation-5',
        coords: [484.68, -1016.13, 26.54, 270.0],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-interrogation-6',
        coords: [485.64, -1008.54, 26.54, 180.0],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-enter',
        coords: [480.77, -1004.62, 26.48, 0.0],
        model: 'sm_op_prop_pd_prisoncell_door_01',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-enter2',
        coords: [480.77, -1000.52, 26.48, 0.0],
        model: 'sm_op_prop_pd_prisoncell_door_01',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section1-enter',
        coords: [482.28, -996.72, 26.46, 180.0],
        model: 'sm_op_prop_pd_prisoncell_door_01',
        locked: true,

        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section1-1',
        coords: [484.35, -998.3, 26.57, 90.0],
        model: 'sm_op_prop_pr_door_cell_01',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section1-2',
        coords: [484.35, -1002.88, 26.57, 90.0],
        model: 'sm_op_prop_pr_door_cell_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-bigcell',
        coords: [485.43, -986.94, 25.42, 0.0],
        model: 'sm_op_prop_pd_prisoncell_door_02',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section2-enter',
        coords: [478.99, -987.7, 26.46, 90.0],
        model: 'sm_op_prop_pd_prisoncell_door_01',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section2-1',
        coords: [477.41, -989.75, 26.57, 0.0],
        model: 'sm_op_prop_pr_door_cell_01',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section2-2',
        coords: [472.68, -989.75, 26.57, 0.0],
        model: 'sm_op_prop_pr_door_cell_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section2-3',
        coords: [472.68, -986.96, 26.57, 180.0],
        model: 'sm_op_prop_pr_door_cell_01',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section2-4',
        coords: [477.41, -986.96, 26.57, 180.0],
        model: 'sm_op_prop_pr_door_cell_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-shortcut',
        coords: [481.12, -986.88, 26.54, 359.65],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-garage-1',
        coords: [432.54, -1001.23, 26.7, 360.0],
        model: 'sm_op_prop_lspd_garagedoor_01a',
        locked: true,
        automatic: {
            distance: 8,
            rate: 2,
        },
        access: {
            jobs: COPS,
        },
        disconnectInteractionCoordsFromDoor: true,
        interactionOffset: [0, 0, -0.25],
    },
    {
        id: 'mrpd-garage-2',
        coords: [451.39, -1001.22, 26.67, 0.0],
        model: 'sm_op_prop_lspd_garagedoor_01a',
        locked: true,
        automatic: {
            distance: 8,
            rate: 2,
        },
        access: {
            jobs: COPS,
        },
        disconnectInteractionCoordsFromDoor: true,
        interactionOffset: [0, 0, -0.25],
    },
    // {
    //     id: 'mrpd-stairs-mid',
    //     coords: [466.8, -1004.4, 30.84, 90.31],
    //     model: 'sm_op_prop_int_door_001_01b',
    //     locked: false,
    //     access: {
    //         jobs: COPS,
    //     },
    // },
    // {
    //     id: 'mrpd-stairs-top',
    //     coords: [466.8, -1004.4, 40.36, 89.69],
    //     model: 'sm_op_prop_int_door_001_01b',
    //     locked: true,
    //     access: {
    //         jobs: COPS,
    //     },
    // },
    {
        id: 'mrpd-top-exit1',
        coords: [469.67, -983.34, 45.36, 179.52],
        model: 'sm_op_prop_utility_door_01a_r',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-top-exit2',
        coords: [469.67, -990.54, 45.36, 179.58],
        model: 'sm_op_prop_utility_door_01a_l',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-chief-office',
        coords: [458.8, -978.51, 30.84, 180.0],
        model: 'sm_op_prop_int_door_001_01',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-asschief-office',
        coords: [458.95, -994.55, 30.84, 0.0],
        model: 'sm_op_prop_int_door_001_01',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'cityhall-mayor',
        coords: [337.44, -1621.37, 54.75, 139.94],
        model: 979561841,
        locked: true,
        access: {
            jobs: DOJ,
        },
    },
    {
        id: 'cityhall-chief-of-staff',
        coords: [327.38, -1627.43, 54.74, 229.95],
        model: 979561841,
        locked: true,
        access: {
            jobs: DOJ,
        },
    },
    {
        id: 'cityhall-leo',
        coords: [319.32, -1645.14, 54.74, 319.95001220703125],
        model: 979561841,
        locked: true,
        access: {
            jobs: DOJ_EMERGENCY,
        },
    },
    {
        id: 'cityhall-med',
        coords: [326.48, -1651.16, 54.73, 319.95001220703125],
        model: 979561841,
        locked: true,
        access: {
            jobs: DOJ_EMERGENCY,
        },
    },
    [
        {
            id: 'cityhall-meeting-left',
            coords: [340.31, -1640.46, 54.74, 139.95001220703125],
            model: 979561841,
            locked: true,
            access: {
                jobs: DOJ_SAMA,
            },
        },
        {
            id: 'cityhall-meeting-right',
            coords: [342.31, -1642.14, 54.74, 319.95001220703125],
            model: 979561841,
            locked: true,
            access: {
                jobs: DOJ_SAMA,
            },
        },
    ],
    {
        id: 'cityhall-deputy_mayor',
        coords: [330.68, -1659.3, 47.4, 319.95001220703125],
        model: 1730900584,
        locked: true,
        access: {
            jobs: DOJ,
        },
    },
    {
        id: 'cityhall-head-of-bar',
        coords: [336.76, -1660.71, 47.4, 49.949974060058594],
        model: 1730900584,
        locked: true,
        access: {
            jobs: {
                ...DOJ,
                defender: true,
            },
        },
    },
    [
        {
            id: 'cityhall-doj-meeting-left',
            coords: [346.83, -1650.29, 38.66, 49.949974060058594],
            model: 1730900584,
            locked: true,
            access: {
                jobs: DOJ,
            },
        },
        {
            id: 'cityhall-doj-meeting-right',
            coords: [345.16, -1652.28, 38.66, 229.95004272460938],
            model: 1730900584,
            locked: true,
            access: {
                jobs: DOJ,
            },
        },
    ],
    {
        id: 'cityhall-courtlower-judge-outer',
        coords: [351.99, -1636.94, 38.65, 229.95],
        model: 1730900584,
        locked: true,
        access: {
            jobs: {
                judge: true,
            },
        },
    },
    {
        id: 'cityhall-courtlower-judge-inner',
        coords: [348.8, -1636.93, 38.64, 139.94],
        model: 431155231,
        locked: true,
        access: {
            jobs: {
                judge: true,
            },
        },
    },
    {
        id: 'sewers-1',
        coords: [218.6, -1278.67, 28.35, 270.0],
        model: '3dp_uc_prop_door_sewer_lid',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'sewers-2',
        coords: [515.08, -1473.88, 28.3, 270.0],
        model: '3dp_uc_prop_door_sewer_lid',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'sewers-3',
        coords: [470.88, -1698.23, 28.15, 90.0],
        model: '3dp_uc_prop_door_sewer_lid',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'sewers-4',
        coords: [203.08, -2023.24, 17.26, 90.0],
        model: '3dp_uc_prop_door_sewer_lid',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'sewers-5',
        coords: [-5.1, -1847.13, 23.79, 270.0],
        model: '3dp_uc_prop_door_sewer_lid',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'sewers-6',
        coords: [-108.68, -1590.33, 30.92, 90.0],
        model: '3dp_uc_prop_door_sewer_lid',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'sewers-7',
        coords: [176.67, -1633.95, 0.54],
        model: -1662762281,
        locked: true,
        access: {
            cid: {
                1015: true,
            },
            keyType: 'sewer_gate',
        },
        disableInteraction: true,
    },
    {
        id: 'sewers-8',
        coords: [173.15, -1621.94, 9.2],
        model: 2123782136,
        locked: true,
        access: {
            cid: {
                1015: true,
            },
            keyType: 'sewer_bunker',
        },
        disableInteraction: true,
    },
    {
        id: 'sewers-9',
        coords: [53.35, 3714.88, 38.65, 270.0],
        model: '3dp_sc_shame_pit_slide_door_01',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'jewelry-1',
        coords: [-631.96, -236.33, 38.21, 305.70245361328125],
        model: 1425919976,
        locked: true,
        access: { none: true },
        disableInteraction: true,
    },
    {
        id: 'jewelry-2',
        coords: [-630.43, -238.44, 38.21, 306.0000305175781],
        model: 9467943,
        locked: true,
        access: { none: true },
        disableInteraction: true,
    },
    {
        id: 'jewelry-3',
        coords: [-629.13, -230.15, 38.21, 36.0],
        model: 'v_ilev_j2_door',
        locked: true,
        access: { none: true },
        disableInteraction: false,
    },
    {
        id: 'prison-front-gate',
        coords: [1845.0, 2604.81, 44.64, 90.0],
        model: 741314661,
        locked: true,
        automatic: {
            distance: 10,
            rate: 10,
        },
        access: {
            jobs: COPS_DOC,
        },
        disconnectInteractionCoordsFromDoor: true,
        interactionOffset: offsets.PRISON_GATES,
    },
    {
        id: 'prison-second-gate',
        coords: [1818.54, 2604.81, 44.61, 90.0],
        model: 741314661,
        locked: true,
        automatic: {
            distance: 10,
            rate: 10,
        },
        access: {
            jobs: COPS_DOC,
        },
        disconnectInteractionCoordsFromDoor: true,
        interactionOffset: offsets.PRISON_GATES,
    },
    {
        id: 'prison-front-staff-left',
        coords: [1843.12, 2577, 46.04, 179.99998474121094],
        model: 463723735,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-front-staff-right',
        coords: [1836.35, 2576.99, 46.04, 179.99998474121094],
        model: 463723735,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-cellblock-7-1',
        coords: [1755.09, 2501.6, 45.83, 209.9],
        model: 705715602,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
        disconnectInteractionCoordsFromDoor: true,
        interactionOffset: [0, 0, -5.0],
    },
    {
        id: 'prison-cellblock-7-2',
        coords: [1758.34, 2493.59, 45.9, 29.93],
        model: -1033001619,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
        disconnectInteractionCoordsFromDoor: true,
        interactionOffset: [0, 0, -5.0],
    },

    {
        id: 'prison-front-exit-inner',
        coords: [1837.74, 2592.16, 46.04, 0.2316722720861435],
        model: -684929024,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-front-questioning',
        coords: [1838.62, 2593.71, 46.04, 272.85687255859375],
        model: -684929024,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-front-exit-outer-2',
        coords: [1831.34, 2594.99, 46.04, 87.13077545166016],
        model: -684929024,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-driveway',
        coords: [1797.76, 2596.56, 46.39, 179.9998779296875],
        model: -1156020871,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-infirmary-staff',
        coords: [1772.81, 2570.3, 45.74, 358.6668701171875],
        model: 2074175368,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    [
        {
            id: 'prison-infirmary-surgery-left',
            coords: [1767.32, 2584.61, 45.75, 88.31095886230469],
            model: -1624297821,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
        },
        {
            id: 'prison-infirmary-surgery-right',
            coords: [1767.32, 2582.31, 45.75, 270.1683654785156],
            model: -1624297821,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
        },
    ],
    // Disabled to stop jail medical check-in placing players behind locked doors
    // [
    //     {
    //         id: 'prison-infirmary-icu-left',
    //         coords: [1764.03, 2589.56, 45.75, 179.11647033691406],
    //         model: -1624297821,
    //         locked: true,
    //         access: {
    //             jobs: COPS_DOC,
    //         },
    //     },
    //     {
    //         id: 'prison-infirmary-icu-right',
    //         coords: [1766.33, 2589.56, 45.75, 0.8811312913894653],
    //         model: -1624297821,
    //         locked: true,
    //         access: {
    //             jobs: COPS_DOC,
    //         },
    //     },
    // ],
    [
        {
            id: 'prison-lobby-left',
            coords: [1771.93, 2494.18, 50.51, 299.93487548828125],
            model: -2109504629,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
        },
        {
            id: 'prison-lobby-right',
            coords: [1773.23, 2491.92, 50.51, 119.93480682373047],
            model: -2109504629,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
        },
    ],
    {
        id: 'prison-lower-right-1',
        coords: [1751.54, 2472.23, 44.76, 29.934831619262695],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-lower-right-2',
        coords: [1754.56, 2473.97, 44.75, 29.934831619262695],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-lower-right-3',
        coords: [1757.57, 2475.7, 44.75, 29.934831619262695],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-lower-right-4',
        coords: [1760.58, 2477.43, 44.75, 29.934831619262695],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-lower-right-5',
        coords: [1763.59, 2479.17, 44.75, 29.934831619262695],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-lower-right-6',
        coords: [1766.6, 2480.9, 44.75, 29.934831619262695],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-lower-right-7',
        coords: [1769.61, 2482.64, 44.75, 29.934831619262695],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-lower-right-8',
        coords: [1772.62, 2484.37, 44.75, 29.934831619262695],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-lower-left-1',
        coords: [1743.68, 2485.15, 44.75, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-lower-left-2',
        coords: [1746.69, 2486.88, 44.75, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-lower-left-3',
        coords: [1749.7, 2488.61, 44.75, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-lower-left-4',
        coords: [1752.72, 2490.35, 44.75, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-lower-left-5',
        coords: [1755.73, 2492.08, 44.76, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-lower-left-6',
        coords: [1761.75, 2495.55, 44.76, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-lower-left-7',
        coords: [1764.76, 2497.29, 44.76, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-right-1',
        coords: [1751.54, 2472.23, 49.36, 29.934831619262695],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-right-2',
        coords: [1754.56, 2473.96, 49.36, 29.934831619262695],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-right-3',
        coords: [1757.57, 2475.7, 49.36, 29.934831619262695],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-right-4',
        coords: [1760.58, 2477.43, 49.36, 29.934831619262695],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-right-5',
        coords: [1763.59, 2479.17, 49.36, 29.934831619262695],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-right-6',
        coords: [1766.6, 2480.9, 49.36, 29.93483543395996],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-right-7',
        coords: [1769.61, 2482.64, 49.36, 29.93483543395996],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-right-8',
        coords: [1772.63, 2484.37, 49.36, 29.93483543395996],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-left-1',
        coords: [1764.76, 2497.29, 49.36, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-left-2',
        coords: [1761.75, 2495.55, 49.36, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-left-3',
        coords: [1758.73, 2493.83, 49.36, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-left-4',
        coords: [1755.73, 2492.08, 49.36, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-left-5',
        coords: [1752.72, 2490.35, 49.36, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-left-6',
        coords: [1749.7, 2488.61, 49.36, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-left-7',
        coords: [1746.69, 2486.88, 49.36, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-upper-left-8',
        coords: [1743.68, 2485.15, 49.36, 209.934],
        model: -1167410167,
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    [
        {
            id: 'prison-moat-right-1',
            coords: [1813.75, 2488.91, 44.46, 251.98],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
        {
            id: 'prison-moat-left-1',
            coords: [1808.99, 2474.54, 44.48, 70.91],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
    ],
    [
        {
            id: 'prison-moat-right-2',
            coords: [1762.54, 2426.51, 44.44, 206.13],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
        {
            id: 'prison-moat-left-2',
            coords: [1749.14, 2419.81, 44.42, 26.76],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
    ],
    [
        {
            id: 'prison-moat-right-3',
            coords: [1667.67, 2407.65, 44.43, 173.0],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
        {
            id: 'prison-moat-left-3',
            coords: [1652.98, 2409.57, 44.44, 353.0],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
    ],
    [
        {
            id: 'prison-moat-right-4',
            coords: [1558.22, 2469.35, 44.39, 118.05],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
        {
            id: 'prison-moat-left-4',
            coords: [1550.93, 2482.74, 44.39, 298.05],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
    ],
    [
        {
            id: 'prison-moat-right-5',
            coords: [1546.98, 2576.13, 44.39, 87.01],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
        {
            id: 'prison-moat-left-5',
            coords: [1547.71, 2591.28, 44.51, 267.01],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
    ],
    [
        {
            id: 'prison-moat-right-6',
            coords: [1575.72, 2667.15, 44.51, 54.55],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
        {
            id: 'prison-moat-left-6',
            coords: [1584.66, 2679.75, 44.51, 233.71],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
    ],
    [
        {
            id: 'prison-moat-right-7',
            coords: [1648.41, 2741.67, 44.44, 27.18],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
        {
            id: 'prison-moat-left-7',
            coords: [1662.01, 2748.7, 44.44, 207.18],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
    ],
    [
        {
            id: 'prison-moat-right-8',
            coords: [1762.19, 2752.49, 44.44, 339.62],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
        },
        {
            id: 'prison-moat-left-8',
            coords: [1780.26, 2745.84, 44.44, 160.03],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
    ],
    [
        {
            id: 'prison-moat-right-9',
            coords: [1830.13, 2703.5, 44.45, 289.17],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
        {
            id: 'prison-moat-left-9',
            coords: [1835.28, 2689.1, 44.45, 110.0],
            model: 741314661,
            locked: true,
            access: {
                jobs: COPS_DOC,
            },
            automatic: {
                distance: 8,
                rate: 2,
            },
            disconnectInteractionCoordsFromDoor: true,
            interactionOffset: offsets.PRISON_GATES,
        },
    ],
    {
        id: 'prison-moat-10',
        coords: [1799.61, 2616.98, 44.6, 180.0],
        model: 741314661,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
        automatic: {
            distance: 8,
            rate: 2,
        },
        disconnectInteractionCoordsFromDoor: true,
        interactionOffset: offsets.PRISON_GATES,
    },
    {
        id: 'prison-outer-tower-1',
        coords: [1821.17, 2476.26, 45.69, 64.88],
        model: -1033001619,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-outer-tower-2',
        coords: [1759.62, 2412.84, 45.71, 25.0],
        model: -1033001619,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-outer-tower-3',
        coords: [1658.58, 2397.72, 45.72, 355.0],
        model: -1033001619,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-outer-tower-4',
        coords: [1543.24, 2471.29, 45.71, 290.0],
        model: -1033001619,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-outer-tower-5',
        coords: [1537.81, 2586.0, 45.69, 270.0],
        model: -1033001619,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-outer-tower-6',
        coords: [1572.66, 2679.19, 45.73, 235.0],
        model: -1033001619,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-outer-tower-7',
        coords: [1651.16, 2755.44, 45.88, 200.14],
        model: -1033001619,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-outer-tower-8',
        coords: [1773.11, 2759.7, 45.89, 165.0],
        model: -1033001619,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-outer-tower-9',
        coords: [1845.79, 2698.62, 45.96, 95.0],
        model: -1033001619,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-outer-tower-10',
        coords: [1820.77, 2620.77, 45.95, 85.0],
        model: -1033001619,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },

    {
        id: 'police-four-cell-1',
        coords: [1597.37, 2553.19, 45.84, 89.99996185302734],
        model: 705715602,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-four-cell-2',
        coords: [1587.82, 2542.86, 45.95, 89.99996185302734],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-four-cell-3',
        coords: [1587.82, 2546.49, 45.95, 89.99996185302734],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-four-cell-4',
        coords: [1587.82, 2550.12, 45.95, 89.99996185302734],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-four-cell-5',
        coords: [1587.82, 2557.39, 45.95, 89.99996185302734],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-four-cell-6',
        coords: [1587.82, 2561.02, 45.95, 89.99996185302734],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-four-cell-7',
        coords: [1587.82, 2542.86, 49.9, 90.0],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-four-cell-8',
        coords: [1587.82, 2546.49, 49.9, 89.99996185302734],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-four-cell-9',
        coords: [1587.82, 2550.12, 49.9, 89.99996185302734],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-four-cell-10',
        coords: [1587.82, 2553.76, 49.9, 89.99996185302734],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-four-cell-11',
        coords: [1587.82, 2557.39, 49.9, 89.99996185302734],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-four-cell-12',
        coords: [1587.82, 2561.02, 49.9, 89.99996185302734],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-four-cell-13',
        coords: [1587.82, 2564.65, 49.9, 89.99996185302734],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-two-cell-14',
        coords: [1573.12, 2563.43, 45.95, 270],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-two-cell-15',
        coords: [1573.12, 2559.8, 45.95, 270],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-two-cell-16',
        coords: [1573.12, 2556.17, 45.95, 270],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-two-cell-17',
        coords: [1573.12, 2552.54, 45.95, 270],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-two-cell-18',
        coords: [1573.12, 2548.9, 45.95, 270],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-two-cell-19',
        coords: [1573.12, 2545.27, 45.95, 270],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-two-cell-20',
        coords: [1573.12, 2541.64, 45.95, 270],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-two-cell-21',
        coords: [1573.12, 2563.43, 49.9, 270],
        model: -38586192,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-two-cell-22',
        coords: [1573.12, 2559.8, 49.9, 270],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-two-cell-23',
        coords: [1573.12, 2556.17, 49.9, 270],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-two-cell-24',
        coords: [1573.12, 2552.54, 49.9, 270],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-two-cell-25',
        coords: [1573.12, 2548.9, 49.9, 270],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-two-cell-26',
        coords: [1573.12, 2545.27, 49.9, 270],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'police-two-cell-27',
        coords: [1573.12, 2541.64, 49.9, 270],
        model: 913760512,
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    [
        {
            id: 'rr-entrance-right',
            coords: [-150.45, 295.14, 98.99, 0.0],
            model: 'school_upper_door_r',
            locked: true,
            access: {
                cid: {
                    1010: true,
                    13910: true,
                    1015: true,
                },
                keyType: 'roosters-rest',
            },
        },
        {
            id: 'rr-entrance-left',
            coords: [-152.83, 295.14, 98.99, 0.0],
            model: 'school_upper_door_l',
            locked: true,
            access: {
                cid: {
                    1010: true,
                    13910: true,
                    1015: true,
                },
                keyType: 'roosters-rest',
            },
        },
    ],
    [
        {
            id: 'rr-entrance2-left',
            coords: [-178.32, 315.57, 98.21, 269.98],
            model: 'ss1_13_door_l_01',
            locked: true,
            access: {
                cid: {
                    1010: true,
                    13910: true,
                    1015: true,
                },
                keyType: 'roosters-rest',
            },
        },
        {
            id: 'rr-entrance2-right',
            coords: [-178.32, 313.13, 98.21, 269.98],
            model: 'ss1_13_door_r_01',
            locked: true,
            access: {
                cid: {
                    1010: true,
                    13910: true,
                    1015: true,
                },
                keyType: 'roosters-rest',
            },
        },
    ],
    {
        id: 'rr-entrance2-back',
        coords: [-236.6, 306.59, 92.51, 90.0],
        model: -829583017,
        locked: true,
        access: {
            cid: {
                1010: true,
                13910: true,
                1015: true,
            },
            keyType: 'roosters-rest',
        },
        disableInteraction: true,
    },
    {
        id: 'sandy-pd-front-desk',
        coords: [1858.08, 3688.17, 34.39, 29.999996185302734],
        model: 385070503,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    [
        {
            id: '-906299485-1854-3687-34',
            coords: [1854.32, 3687.36, 34.4, 119.7354736328125],
            model: -906299485,
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'sandy-pd-front-right',
            coords: [1853.38, 3688.99, 34.4, 299.9999694824219],
            model: -906299485,
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'sandy-pd-meeting-room',
        coords: [1853.29, 3686.32, 34.4, 238.5016632080078],
        model: 385070503,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'sandy-pd-lockers',
        coords: [1847.51, 3690.67, 34.39, 170.29],
        model: 385070503,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'sandy-pd-armory',
        coords: [1848.6, 3697.46, 34.39, 210.00001525878906],
        model: 385070503,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'sandy-pd-cells',
        coords: [1855.34, 3699.84, 34.39, 300.0],
        model: 'hane_sheriff_main_int_door',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'sandy-pd-backentry',
        coords: [1853.43, 3705.6, 34.31, 208.05270385742188],
        model: -1385904007,
        locked: true,
        access: {
            jobs: COPS_EMS,
        },
    },
    {
        id: 'sandy-pd-backentry-inner',
        coords: [1856.82, 3702.31, 34.4, 29.857481002807617],
        model: -1919309060,
        locked: true,
        access: {
            jobs: COPS_EMS,
        },
    },
    {
        id: 'sandy-pd-cells-inner',
        coords: [1861.99, 3702.18, 34.39, 299],
        model: -1919309060,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'sandy-pd-observation',
        coords: [1861.9, 3705.24, 34.4, 29.999996185302734],
        model: 385070503,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'sandy-pd-interrogation',
        coords: [1865.03, 3707.04, 34.39, 29.999996185302734],
        model: 385070503,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'sandy-pd-drunktank',
        coords: [1871.79, 3710.73, 34.39, 120.00000762939453],
        model: -1919309060,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    [
        {
            id: 'sandy-pd-offices-right',
            coords: [1870.59, 3695.08, 34.4, 299.9999694824219],
            model: 841810412,
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'sandy-pd-offices-left',
            coords: [1869.51, 3696.95, 34.4, 299.9999694824219],
            model: 1209636955,
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'sandy-pd-deputy-sheriff',
        coords: [1869.37, 3698.69, 34.4, 210],
        model: 508173611,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'sandy-pd-sheriff',
        coords: [1875.9, 3702.43, 34.4, 210.00001525878906],
        model: 508173611,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'vault-front-3',
        coords: [260.65, 203.23, 106.43, 160.0],
        model: 1335309163,
        locked: true,
        access: {
            none: true,
        },
    },
    {
        id: 'vault-front-4',
        coords: [258.21, 204.12, 106.43, 340.0],
        model: 1335309163,
        locked: true,
        access: {
            none: true,
        },
    },
    {
        id: 'vault-inner-1',
        coords: [237.77, 227.87, 106.43, 339.99],
        model: 'v_ilev_bk_door',
        locked: true,
        access: {
            none: true,
        },
    },
    {
        id: 'vault-inner-2',
        coords: [266.36, 217.57, 110.43, 340.19],
        model: 'v_ilev_bk_door',
        locked: true,
        access: {
            none: true,
        },
    },
    // Tunershop paint booths
    {
        id: 'tunershop-paintbooth-1',
        coords: [940.49, -1030.93, 39.96, 90.0],
        model: 'np_tuna_spray_door',
        locked: true,
        access: {
            none: true,
        },
    },
    {
        id: 'tunershop-paintbooth-2',
        coords: [940.56, -1016.16, 39.96, 90.0],
        model: 'np_tuna_spray_door',
        locked: true,
        access: {
            none: true,
        },
    },
    // End of Tunershop paint booths

    {
        id: 'prison-shower-corridor',
        coords: [1754.46, 2498.43, 45.9],
        model: 'v_ilev_gtdoor',
        locked: false,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-laboratory',
        coords: [1767.32, 2580.83, 45.75],
        model: 'sanhje_Prison_infirmary_door2',
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-maxsec-entry-door',
        coords: [1587.78, 2554.3, 45.95],
        model: 'sanhje_Prison_block_door',
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-maxsec-gym-door',
        coords: [1581.59, 2566.54, 45.95],
        model: 'sanhje_Prison_block_door',
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-maxsec-rec-door',
        coords: [1579.36, 2566.53, 45.95],
        model: 'sanhje_Prison_block_door',
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
        disableInteraction: true,
    },
    {
        id: 'prison-laboratory',
        coords: [1767.32, 2580.83, 45.75],
        model: 'sanhje_Prison_infirmary_door2',
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-maxsec-entry-door',
        coords: [1587.78, 2554.3, 45.95],
        model: 'sanhje_Prison_block_door',
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-maxsec-gym-door',
        coords: [1581.59, 2566.54, 45.95],
        model: 'sanhje_Prison_block_door',
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'prison-maxsec-rec-door',
        coords: [1579.36, 2566.53, 45.95],
        model: 'sanhje_Prison_block_door',
        locked: true,
        access: {
            jobs: COPS_DOC,
        },
    },
    {
        id: 'dib-gate',
        coords: [397.89, -1607.38, 28.34, 140.0],
        model: 'courthouse_garage_gate',
        locked: true,
        automatic: {
            distance: 6,
            rate: 3,
        },
        access: {
            jobs: DOJ,
        },
        disconnectInteractionCoordsFromDoor: true,
        interactionOffset: [-4.0, 0, 1.5],
    },
    [
        {
            id: 'dib-entrance-1',
            coords: [365.86, -1592.4, 29.42, 50.0],
            model: '3dp_davis_doj_prop_door01',
            locked: true,
            access: {
                jobs: DOJ,
            },
        },
        {
            id: 'dib-entrance-2',
            coords: [364.25, -1594.32, 29.42, 230.0],
            model: '3dp_davis_doj_prop_door01',
            locked: true,
            access: {
                jobs: DOJ,
            },
        },
    ],
    [
        {
            id: 'dib-back-1',
            coords: [369.96, -1606.34, 29.41, 50.0],
            model: '3dp_davis_doj_ent_door_r',
            locked: true,
            access: {
                jobs: DOJ,
            },
        },
        {
            id: 'dib-back-2',
            coords: [368.35, -1608.26, 29.41, 230.0],
            model: '3dp_davis_doj_ent_door_l',
            locked: true,
            access: {
                jobs: DOJ,
            },
        },
    ],
    [
        {
            id: 'dib-cells-entrance-1',
            coords: [361.46, -1603.32, 29.42, 319.78],
            model: '3dp_davis_doj_prop_door01',
            locked: true,
            access: {
                jobs: DOJ,
            },
        },
        {
            id: 'dib-cells-entrance-2',
            coords: [359.55, -1601.72, 29.42, 140.22],
            model: '3dp_davis_doj_prop_door01',
            locked: true,
            access: {
                jobs: DOJ,
            },
        },
    ],
    {
        id: 'dib-cell-1',
        coords: [354.37, -1602.18, 29.51, 140.0],
        model: '3dp_davis_doj_cell_door01',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 3,
        },
        access: {
            jobs: DOJ,
        },
    },
    {
        id: 'dib-cell-2',
        coords: [357.66, -1604.95, 29.51, 140.0],
        model: '3dp_davis_doj_cell_door01',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 3,
        },
        access: {
            jobs: DOJ,
        },
    },
    {
        id: 'dib-cell-3',
        coords: [361.0, -1607.75, 29.51, 140.0],
        model: '3dp_davis_doj_cell_door01',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 3,
        },
        access: {
            jobs: DOJ,
        },
    },
    {
        id: 'dib-cell-4',
        coords: [365.04, -1606.97, 29.42, 50.08],
        model: '3dp_davis_doj_prop_door01',
        locked: true,
        access: {
            jobs: DOJ,
        },
    },

    // FIB office doors
    {
        id: 'fib-office-1',
        coords: [117.79, -761.38, 202.24],
        model: 'v_ilev_fib_door1',
        locked: true,
        access: { fib_office: true },
    },
    {
        id: 'fib-office-2',
        coords: [117.11, -760.75, 202.24],
        model: 'v_ilev_fib_door1',
        locked: true,
        access: { fib_office: true },
    },
    {
        id: 'fib-office-3',
        coords: [111.81, -749.36, 202.24],
        model: 'v_ilev_fib_door1',
        locked: true,
        access: { fib_office: true },
    },
    {
        id: 'fib-office-4',
        coords: [111.77, -748.44, 202.24],
        model: 'v_ilev_fib_door1',
        locked: true,
        access: { fib_office: true },
    },
    {
        id: 'fib-office-5',
        coords: [114.23, -738.09, 202.24],
        model: 'v_ilev_fib_door1',
        locked: true,
        access: { fib_office: true },
    },
    {
        id: 'fib-office-6',
        coords: [114.4, -737.62, 202.24],
        model: 'v_ilev_fib_door1',
        locked: true,
        access: { fib_office: true },
    },
    {
        id: 'fib-office-7',
        coords: [117.91, -743.96, 202.24],
        model: 'v_ilev_fib_door1',
        locked: true,
        access: { fib_office: true },
    },
    {
        id: 'fib-office-8',
        coords: [125.39, -757.5, 202.24],
        model: 'v_ilev_fib_door1',
        locked: true,
        access: { fib_office: true },
    },
    {
        id: 'fib-office-9',
        coords: [125.18, -759.55, 202.24],
        model: 'v_ilev_fib_door1',
        locked: true,
        access: { fib_office: true },
    },
    {
        id: 'paleto-gate-1',
        coords: [-106.47, 6476.16, 31.95, 314.96],
        model: 'v_ilev_cbankvaulgate02',
        locked: true,
        access: { none: true },
    },

    {
        id: 'fleeca_gate_life_invader',
        coords: [-1209.56, -336.18, 37.98, 206.86],
        model: '3dp_fleeca_gitter_door_vault',
        locked: true,
        access: { none: true },
    },
    {
        id: 'fleeca_gate_legion',
        coords: [148.0, -1046.71, 29.57, 159.85],
        model: '3dp_fleeca_gitter_door_vault',
        locked: true,
        access: { none: true },
    },
    {
        id: 'fleeca_gate_pink_cage',
        coords: [312.33, -285.08, 54.36, 159.87],
        model: '3dp_fleeca_gitter_door_vault',
        locked: true,
        access: { none: true },
    },
    {
        id: 'fleeca_gate_harmony',
        coords: [1174.76, 2713.08, 38.29, 0.0],
        model: '3dp_fleeca_gitter_door_vault',
        locked: true,
        access: { none: true },
    },
    {
        id: 'fleeca_gate_hawick_ave',
        coords: [-352.37, -56.05, 49.24, 160.86],
        model: '3dp_fleeca_gitter_door_vault',
        locked: true,
        access: { none: true },
    },
    {
        id: 'fleeca_gate_great_ocean',
        coords: [-2956.28, 483.3, 15.9, 267.54],
        model: '3dp_fleeca_gitter_door_vault',
        locked: true,
        access: { none: true },
    },
    {
        id: 'iso-compliance',
        coords: [453.47, -970.85, 30.84, 90.0],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'cargoship_1',
        coords: [-400.04, -4124.1, 25.5, 42.94],
        model: '3dp_cargoship_door_01',
        locked: true,
        access: { none: true },
    },
    {
        id: 'cargoship_2',
        coords: [3683.51, -2416.39, 25.5, 52.31],
        model: '3dp_cargoship_door_01',
        locked: true,
        access: { none: true },
    },
    {
        id: 'cargoship_3',
        coords: [4554.08, 3385.23, 25.5, 40.0],
        model: '3dp_cargoship_door_01',
        locked: true,
        access: { none: true },
    },
    {
        id: 'cargoship_4',
        coords: [1328.51, 8150.0, 25.5, 40.0],
        model: '3dp_cargoship_door_01',
        locked: true,
        access: { none: true },
    },
    {
        id: 'cargoship_5',
        coords: [-2923.49, 7257.66, 25.5, 72.99],
        model: '3dp_cargoship_door_01',
        locked: true,
        access: { none: true },
    },

    // Pawn Shops
    {
        id: 'carson_pawnshop_1',
        coords: [143.88, -1720.91, 29.53, 140.0],
        model: '3dp_pawnshop_door_03',
        locked: false,
        access: { pawnshop: true },
    },
    {
        id: 'carson_pawnshop_2',
        coords: [154.72, -1715.24, 29.53, 140.0],
        model: '3dp_pawnshop_door_02',
        locked: true,
        access: { pawnshop: true },
    },
    {
        id: 'carson_pawnshop_3',
        coords: [154.24, -1711.61, 29.53, 230.0],
        model: '3dp_pawnshop_door_01',
        locked: true,
        access: { pawnshop: true },
    },
    {
        id: 'hawick_pawnshop_1',
        coords: [35.06, -127.48, 55.93, 160.0],
        model: '3dp_pawnshop_door_03',
        locked: true,
        access: { pawnshop: true },
    },
    {
        id: 'hawick_pawnshop_2',
        coords: [43.31, -118.44, 55.93, 160.0],
        model: '3dp_pawnshop_door_02',
        locked: true,
        access: { pawnshop: true },
    },
    {
        id: 'hawick_pawnshop_3',
        coords: [41.61, -115.19, 55.93, 250.0],
        model: '3dp_pawnshop_door_01',
        locked: true,
        access: { pawnshop: true },
    },
    {
        id: 'sinner_pawnshop_1',
        coords: [392.5, -795.55, 29.56, 270.0],
        model: '3dp_pawnshop_door_03',
        locked: true,
        access: { pawnshop: true },
    },
    {
        id: 'sinner_pawnshop_2',
        coords: [381.19, -790.89, 29.56, 270.0],
        model: '3dp_pawnshop_door_02',
        locked: true,
        access: { pawnshop: true },
    },
    {
        id: 'sinner_pawnshop_3',
        coords: [378.71, -793.6, 29.56, 360.0],
        model: '3dp_pawnshop_door_01',
        locked: true,
        access: { pawnshop: true },
    },
    {
        id: 'baycity_pawnshop_1',
        coords: [-1194.64, -1179.42, 7.98, 100.0],
        model: '3dp_pawnshop_door_03',
        locked: false,
        access: { pawnshop: true },
    },
    {
        id: 'baycity_pawnshop_2',
        coords: [-1182.69, -1182.05, 7.98, 100.0],
        model: '3dp_pawnshop_door_02',
        locked: true,
        access: { pawnshop: true },
    },
    {
        id: 'baycity_pawnshop_3',
        coords: [-1180.72, -1178.95, 7.98, 190.0],
        model: '3dp_pawnshop_door_01',
        locked: true,
        access: { pawnshop: true },
    },
    // End Of Pawn Shops

    {
        id: 'fib_restricted_1',
        coords: [118.32, -733.7, 202.24, 159.98],
        model: 'v_ilev_fib_door2',
        locked: true,
        access: { none: true },
    },

    // 247 Stores
    {
        id: '247_store_innocence',
        coords: [24.34, -1341.87, 29.65, 348.53],
        model: 'v_ilev_losttoiletdoor',
        locked: true,
        access: { none: true },
    },
    {
        id: '247_store_grove',
        coords: [24.34, -1341.87, 29.65, 348.53],
        model: 'v_ilev_losttoiletdoor',
        locked: true,
        access: { none: true },
    },
    {
        id: '247_store_vinewood',
        coords: [373.76, 331.73, 103.72, 345.88],
        model: 'v_ilev_losttoiletdoor',
        locked: true,
        access: { none: true },
    },
    {
        id: '247_store_palomino',
        coords: [2551.77, 380.91, 108.77, 87.72],
        model: 'v_ilev_losttoiletdoor',
        locked: true,
        access: { none: true },
    },
    {
        id: '247_store_chumash',
        coords: [-3044.11, 582.75, 8.06, 107.76],
        model: 'v_ilev_losttoiletdoor',
        locked: true,
        access: { none: true },
    },
    {
        id: '247_store_chumash2',
        coords: [-3247.7, 1000.32, 12.98, 85.07],
        model: 'v_ilev_losttoiletdoor',
        locked: true,
        access: { none: true },
    },
    {
        id: '247_store_harmony',
        coords: [549.9, 2665.96, 42.31, 187.5],
        model: 'v_ilev_losttoiletdoor',
        locked: true,
        access: { none: true },
    },
    {
        id: '247_store_sandy',
        coords: [2673.23, 3281.95, 55.39, 60.87],
        model: 'v_ilev_losttoiletdoor',
        locked: true,
        access: { none: true },
    },
    {
        id: '247_store_sandy2',
        coords: [1957.26, 3744.66, 32.49, 30.0],
        model: 'v_ilev_losttoiletdoor',
        locked: true,
        access: { none: true },
    },
    {
        id: '247_store_paleto',
        coords: [1730.16, 6420.15, 35.19, 333.64],
        model: 'v_ilev_losttoiletdoor',
        locked: true,
        access: { none: true },
    },
    {
        id: 'air_training_hangar_garage_door',
        coords: [-960.59, -3056.57, 15.48],
        model: 'prop_com_gar_door_01',
        locked: true,
        access: {
            jobs: AIR_PERSONEL,
        },
        automatic: {
            distance: 8,
            rate: 1.5,
        },
        disconnectInteractionCoordsFromDoor: true,
    },
    {
        id: 'air_training_hangar_back_door',
        coords: [-935.6409912109375, -2927.185546875, 14.094473838806152],
        model: 'v_ilev_ss_door04',
        locked: true,
        access: {
            jobs: AIR_PERSONEL,
        },
    },
    [
        {
            id: 'kortz-art-1',
            coords: [-2292.09, 281.23, 169.92],
            model: 'kortz_prop_ch1_07_door_01l',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
        {
            id: 'kortz-art-2',
            coords: [-2293.22, 283.79, 169.92],
            model: 'kortz_prop_ch1_07_door_01r',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
    ],
    [
        {
            id: 'kortz-art-3',
            coords: [-2296.06, 290.12, 169.92],
            model: 'kortz_prop_ch1_07_door_01l',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
        {
            id: 'kortz-art-4',
            coords: [-2297.19, 292.69, 169.92],
            model: 'kortz_prop_ch1_07_door_01r',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
    ],
    [
        {
            id: 'kortz-art-5',
            coords: [-2300.01, 299.07, 169.93],
            model: 'kortz_prop_ch1_07_door_01l',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
        {
            id: 'kortz-art-6',
            coords: [-2301.14, 301.63, 169.92],
            model: 'kortz_prop_ch1_07_door_01r',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
    ],
    [
        {
            id: 'kortz-art-7',
            coords: [-2303.99, 307.96, 169.92],
            model: 'kortz_prop_ch1_07_door_01l',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
        {
            id: 'kortz-art-8',
            coords: [-2305.13, 310.52, 169.92],
            model: 'kortz_prop_ch1_07_door_01r',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
    ],
    [
        {
            id: 'kortz-art-9',
            coords: [-2298.53, 338.03, 174.93],
            model: 'kortz_prop_ch1_07_door_01l',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
        {
            id: 'kortz-art-10',
            coords: [-2301.09, 336.9, 174.94],
            model: 'kortz_prop_ch1_07_door_01r',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
    ],
    [
        {
            id: 'kortz-art-11',
            coords: [-2298.52, 338.05, 184.95],
            model: 'kortz_prop_ch1_07_door_01l',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
        {
            id: 'kortz-art-12',
            coords: [-2301.08, 336.91, 184.94],
            model: 'kortz_prop_ch1_07_door_01r',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
    ],
    [
        {
            id: 'kortz-art-13',
            coords: [-2278.03, 266.57, 184.92],
            model: 'kortz_prop_ch1_07_door_01l',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
        {
            id: 'kortz-art-14',
            coords: [-2280.57, 265.39, 184.92],
            model: 'kortz_prop_ch1_07_door_01r',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
    ],
    [
        {
            id: 'kortz-art-15',
            coords: [-2316.19, 320.36, 184.93],
            model: 'kortz_prop_ch1_07_door_01l',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
        {
            id: 'kortz-art-16',
            coords: [-2313.63, 321.5, 184.93],
            model: 'kortz_prop_ch1_07_door_01r',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
    ],
    [
        {
            id: 'kortz-art-17',
            coords: [-2308.11, 268.12, 184.95],
            model: 'prop_ch1_07_door_01l',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
        {
            id: 'kortz-art-18',
            coords: [-2305.55, 269.26, 184.95],
            model: 'prop_ch1_07_door_01r',
            locked: true,
            access: {
                jobs: {
                    mayor: true,
                },
            },
        },
    ],
    {
        id: 'lh1',
        coords: [-5530.33, 6674.2, 30.92],
        model: -1479660859,
        locked: true,
        access: {
            cid: {
                1015: true,
            },
            keyType: 'lh',
        },
        disableInteraction: true,
    },
    {
        id: 'lh2',
        coords: [-5524.78, 6671.62, 31.36],
        model: -1479660859,
        locked: true,
        access: {
            cid: {
                1015: true,
            },
            keyType: 'lh',
        },
        disableInteraction: true,
    },
    {
        id: 'lh3',
        coords: [3427.14, 5174.04, 7.51],
        model: -1632521199,
        locked: true,
        access: {
            cid: {
                1015: true,
            },
            keyType: 'lh',
        },
        disableInteraction: true,
    },
    {
        id: 'meth_lab_1',
        coords: [-323.9, -1356.89, 31.62],
        model: 1367156170,
        locked: true,
        access: { none: true },
        disableInteraction: true,
    },
    {
        id: 'meth_lab_2',
        coords: [913.93, -1274.43, 27.25],
        model: 1367156170,
        locked: true,
        access: { none: true },
        disableInteraction: true,
    },
    {
        id: 'meth_lab_3',
        coords: [896.39, -896.87, 27.94],
        model: 1367156170,
        locked: true,
        access: { none: true },
        disableInteraction: true,
    },
    {
        id: 'meth_lab_4',
        coords: [-1508.28, -887.06, 10.39],
        model: 1367156170,
        locked: true,
        access: { none: true },
        disableInteraction: true,
    },
    {
        id: 'ron_oil_door_1',
        coords: [1744.43, -1622.29, 112.77],
        model: -1726331785,
        locked: true,
        access: { business: 'ron_oil' },
    },
    {
        id: 'ron_oil_door_2',
        coords: [1741.54, -1605.99, 116.37],
        model: 972866457,
        locked: true,
        access: { business: 'ron_oil' },
    },
    {
        id: 'ron_oil_door_3',
        coords: [1744.42, -1622.3, 116.37],
        model: 972866457,
        locked: true,
        access: { business: 'ron_oil' },
    },
    {
        id: 'ron_oil_door_4',
        coords: [1755.13, -1634.04, 116.34],
        model: 385493758,
        locked: true,
        access: { business: 'ron_oil' },
    },
    {
        id: 'ron_oil_door_5',
        coords: [1751.62, -1623.9, 116.37],
        model: 385493758,
        locked: true,
        access: { business: 'ron_oil' },
    },
    {
        id: 'ron_oil_door_6',
        coords: [1749.3, -1624.37, 116.37],
        model: 385493758,
        locked: true,
        access: { business: 'ron_oil' },
    },
    {
        id: 'lm_lower',
        coords: [-1797.84, 409.93, 113.72],
        model: -1947913255,
        locked: true,
        access: {
            cid: {
                1010: true,
                1015: true,
            },
            keyType: 'lm',
        },
        disableInteraction: true,
    },
    {
        id: 'lm_upper',
        coords: [-1799.07, 413.6, 128.53],
        model: 1039241570,
        locked: true,
        access: {
            cid: {
                1010: true,
                1015: true,
            },
            keyType: 'lm',
        },
        disableInteraction: true,
    },
    {
        id: 'lm_garage',
        coords: [-1787.73, 411.86, 112.49],
        model: -1165779266,
        locked: true,
        access: {
            cid: {
                1010: true,
                1015: true,
            },
            keyType: 'lm',
        },
        disableInteraction: true,
    },
    {
        id: 'lm_elevator',
        coords: [-1785.81, 461.96, 88.87],
        model: 1724828423,
        locked: true,
        access: {
            cid: {
                1010: true,
                1015: true,
            },
            keyType: 'lm',
        },
        disableInteraction: true,
    },
    {
        id: 'lm_desk',
        coords: [-1803.47, 420.4, 112.41],
        model: 516398581,
        locked: true,
        access: {
            cid: {
                1010: true,
                1015: true,
            },
            keyType: 'lm',
        },
        disableInteraction: true,
    },
    {
        id: 'lm_southsecret',
        coords: [-1801.88, 416.12, 113.99],
        model: 1068669483,
        locked: true,
        access: {
            cid: {
                1010: true,
                1015: true,
            },
            keyType: 'lm',
        },
        disableInteraction: true,
    },
    {
        id: 'lm_toolbox',
        coords: [-1812.45, 426.68, 113.53],
        model: 1062943690,
        locked: true,
        access: {
            cid: {
                1010: true,
                1015: true,
            },
            keyType: 'lm',
        },
        disableInteraction: true,
    },
    {
        id: 'liquid-library-1',
        coords: [1147.13, -418.23, 67.63, 344.67],
        model: 'll_secretdoor_01',
        locked: true,
        access: {
            cid: {
                17076: true,
                1015: true,
            },
            keyType: 'liquid-library',
        },
        disableInteraction: true,
    },
    {
        id: 'liquid-library-2',
        coords: [1147.01, -421.37, 66.48, 344.67],
        model: 'll_slidingsecret',
        locked: false,
        access: {
            cid: {
                17076: true,
                1015: true,
            },
        },
        disableInteraction: true,
        automatic: {
            distance: 5,
            rate: 1.5,
        },
        keyType: 'liquid-library',
    },
    {
        id: 'liquid-library-3',
        coords: [1161.38, -424.21, 59.87, 344.67],
        model: 'll_secretdoor_04',
        locked: true,
        access: {
            cid: {
                17076: true,
                1015: true,
            },
            keyType: 'liquid-library',
        },
        disableInteraction: true,
    },
    [
        {
            id: 'liquid-library-4',
            coords: [1149.13, -406.26, 61.14, 344.67],
            model: 'll_barreldoor_r',
            locked: true,
            access: {
                cid: {
                    17076: true,
                    1015: true,
                },
                keyType: 'liquid-library',
            },
            disableInteraction: true,
        },
        {
            id: 'liquid-library-4',
            coords: [1150.43, -406.61, 61.14, 344.67],
            model: 'll_barreldoor_l',
            locked: true,
            access: {
                cid: {
                    17076: true,
                    1015: true,
                },
                keyType: 'liquid-library',
            },
            disableInteraction: true,
        },
    ],
    [
        {
            id: 'liquid-library-5',
            coords: [1160.12, -408.0, 67.64, 24.67],
            model: 'll_stairdoor_r',
            locked: true,
            access: {
                cid: {
                    17076: true,
                    1015: true,
                },
                keyType: 'liquid-library',
            },
            disableInteraction: true,
        },
        {
            id: 'liquid-library-5',
            coords: [1161.92, -407.17, 67.64, 24.67],
            model: 'll_stairdoor_l',
            locked: true,
            access: {
                cid: {
                    17076: true,
                    1015: true,
                },
                keyType: 'liquid-library',
            },
            disableInteraction: true,
        },
    ],
    [
        {
            id: 'liquid-library-6',
            coords: [1162.33, -405.39, 61.44, 254.67],
            model: 'll_maindoor2',
            locked: true,
            access: {
                cid: {
                    17076: true,
                    1015: true,
                },
                keyType: 'liquid-library',
            },
            disableInteraction: true,
        },
        {
            id: 'liquid-library-6',
            coords: [1161.64, -407.92, 61.44, 74.67],
            model: 'll_maindoor2',
            locked: true,
            access: {
                cid: {
                    17076: true,
                    1015: true,
                },
                keyType: 'liquid-library',
            },
            disableInteraction: true,
        },
    ],
    {
        id: 'liquid-library-7',
        coords: [1161.51, -395.75, 64.04, 254.67],
        model: 'll_secretdoor_09',
        locked: true,
        access: {
            cid: {
                17076: true,
                1015: true,
            },
            keyType: 'liquid-library',
        },
        disableInteraction: true,
    },
    {
        id: 'liquid-library-8',
        coords: [1151.36, -438.95, 67.29, 75.23],
        model: 'll_doradoor',
        locked: true,
        access: {
            cid: {
                17076: true,
                1015: true,
            },
            keyType: 'liquid-library',
        },
        disableInteraction: true,
    },
    {
        id: 'liquid-library-9',
        coords: [1161.21, -430.77, 66.13, 345.35],
        model: 'll_secretdoor_03',
        locked: true,
        access: {
            cid: {
                17076: true,
                1015: true,
            },
            keyType: 'liquid-library',
        },
        disableInteraction: true,
    },
    {
        id: 'liquid-library-10',
        coords: [1152.88, -416.13, 68.13, 344.67],
        model: 'll_bountyboard',
        locked: true,
        access: {
            cid: {
                17076: true,
                1015: true,
            },
            keyType: 'liquid-library',
        },
        disableInteraction: true,
    },
    {
        id: 'liquid-library-11',
        coords: [1163.92, -399.91, 63.82, 343.22],
        model: 'll_secretdoor_08',
        locked: true,
        access: {
            cid: {
                17076: true,
                1015: true,
            },
            keyType: 'liquid-library',
        },
        disableInteraction: true,
    },
    {
        id: 'liquid-library-12',
        coords: [1150.3, -416.12, 67.62],
        model: 'll_secretdoor_02',
        locked: true,
        access: {
            cid: {
                17076: true,
                1015: true,
            },
            keyType: 'liquid-library',
        },
        disableInteraction: true,
    },
    {
        id: 'sandy_ems_lockerroom',
        coords: [1832.09, 3692.28, 34.31],
        model: 'hn_bc_med_door2',
        locked: true,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'sandy-pd-othercell',
        coords: [1871.66, 3711.17, 34.39, 300.0],
        model: -1919309060,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'vivs-garage-exterior',
        coords: [868.85, -607.86, 58.34, 47.27],
        model: 821679672,
        locked: true,
        access: {
            cid: {
                1032: true,
                1945: true,
            },
            keyType: 'vivs-garage',
        },
    },
    {
        id: 'vivs-garage-interior',
        coords: [864.02, -611.34, 46.97, 137.5],
        model: 318880184,
        locked: true,
        access: {
            cid: {
                1032: true,
                1945: true,
            },
            keyType: 'vivs-garage',
        },
    },
    {
        id: 'soze_gym_1',
        coords: [-1194.53, -1577.63, 4.67, 305.0],
        model: '3dp_vb_lockers_door_01',
        locked: true,
        access: {
            cid: { 11966: true },
            item: { itemId: 'soze_gym_key' },
        },
    },
    {
        id: 'soze_gym_2',
        coords: [-1192.68, -1580.29, 4.76, 124.99],
        model: '3dp_vb_lockers_door_02',
        locked: true,
        access: {
            cid: { 11966: true },
            item: { itemId: 'soze_gym_key' },
        },
    },
    {
        id: 'mrpd_back',
        coords: [488.78, -1024.41, 27.03, 270.0],
        model: 'op_prop_mrpd_facgate_01',
        locked: true,
        disconnectInteractionCoordsFromDoor: true,
        interactionOffset: [-3.0, 0, 1.5],
        automatic: {
            distance: 8,
            rate: 2,
        },
        access: {
            jobs: COPS,
        },
    },
    [
        {
            id: 'paleto_front_left',
            coords: [-442.66, 6015.22, 31.87, 315.0],
            model: 'v_ilev_shrf2door',
            locked: false,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'paleto_front_right',
            coords: [-444.5, 6017.06, 31.87, 135.0],
            model: 'v_ilev_shrf2door',
            locked: false,
            access: {
                jobs: COPS,
            },
        },
    ],
    [
        {
            id: 'courthouse_side_l',
            coords: [-568.55, -234.42, 34.36, 119.99],
            model: 'gabz_townhall_door_side_r',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'courthouse_side_r',
            coords: [-567.49, -236.27, 34.36, 299.99],
            model: 'gabz_townhall_door_side_l',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'courthouse_cell_l',
        coords: [-557.94, -233.11, 34.48, 209.99],
        model: 'gabz_townhall_cell_door',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'courthouse_cell_r',
        coords: [-560.54, -234.61, 34.48, 209.99],
        model: 'gabz_townhall_cell_door',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'courthouse_judge_room',
        coords: [-582.5, -207.5, 38.32, 119.99],
        model: 'gabz_townhall_door_office',
        locked: true,
        access: {
            jobs: {
                judge: true,
            },
        },
    },
    {
        id: 'courthouse_judge_meeting_room',
        coords: [-577.25, -216.61, 38.32, 299.99],
        model: 'gabz_townhall_door_office',
        locked: true,
        access: {
            jobs: {
                judge: true,
            },
        },
    },
    {
        id: 'courthouse_lower_office_3',
        coords: [-531.34, -186.61, 38.33, 209.99],
        model: 'gabz_townhall_door_office',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'courthouse_lower_office_2',
        coords: [-536.2, -189.42, 38.33, 209.99],
        model: 'gabz_townhall_door_office',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'courthouse_lower_office_1',
        coords: [-541.02, -192.2, 38.33, 209.99],
        model: 'gabz_townhall_door_office',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'courthouse_upper_office_4',
        coords: [-541.01, -192.2, 43.47, 209.99],
        model: 'gabz_townhall_door_office',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'courthouse_upper_mayor_office',
        coords: [-536.19, -189.41, 43.47, 209.99],
        model: 'gabz_townhall_door_office',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'courthouse_upper_meeting_room',
        coords: [-538.4, -185.58, 43.47, 209.99],
        model: 'gabz_townhall_door_office',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: "carmeeting-door",
        coords: [
            950.82,
            -1698.23,
            31.73,
            85.05498504638672
        ],
        model: -982531572,
        locked: true,
        access: {
            cid: {
                1005: true,
            },
            keyType: 'banktruck-spot',
        },
        disableInteraction: true,
    }
];
