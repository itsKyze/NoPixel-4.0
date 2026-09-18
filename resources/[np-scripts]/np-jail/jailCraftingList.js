globalThis.jailCraftingList = [
    {
        id: 'bandage',
        time: 1000 * 60 * 2,
        progression: 0,
        needs: [
            {
                id: 'scrap_plastic',
                amount: 3,
            },
            {
                id: 'chemicals',
                amount: 1,
            },
            {
                id: 'scrap_rubber',
                amount: 2,
            },
        ],
    },
    {
        id: 'lockpick',
        variant: 'jail_lockpick',
        time: 1000 * 60 * 5,
        progression: 5,
        needs: [
            {
                id: 'scrap_steel',
                amount: 4,
            },
            {
                id: 'scrap_aluminium',
                amount: 2,
            },
            {
                id: 'scrap_scrapmetal',
                amount: 2,
            },
        ],
    },
    {
        id: 'lockpick',
        time: 1000 * 60 * 10,
        progression: 15,
        needs: [
            {
                id: 'lockpick',
                variant: 'jail_lockpick',
                amount: 1,
            },
            {
                id: 'scrap_steel',
                amount: 4,
            },
            {
                id: 'scrap_scrapmetal',
                amount: 2,
            },
        ],
    },
    {
        id: 'battery',
        time: 1000 * 60 * 10,
        progression: 25,
        needs: [
            {
                id: 'usedbattery',
                amount: 3,
            },
            {
                id: 'chemicals',
                amount: 7,
            },
            {
                id: 'scrap_plastic',
                amount: 10,
            },
            {
                id: 'scrap_copper',
                amount: 8,
            },
            {
                id: 'scrap_electronics',
                amount: 5,
            },
            {
                id: 'scrap_rubber',
                amount: 2,
            },
        ],
    },
    {
        id: 'mobilephone',
        time: 1000 * 60 * 20,
        progression: 40,
        needs: [
            {
                id: 'battery',
                amount: 1,
            },
            {
                id: 'scrap_glass',
                amount: 15,
            },
            {
                id: 'scrap_electronics',
                amount: 8,
            },
            {
                id: 'scrap_copper',
                amount: 8,
            },
            {
                id: 'scrap_plastic',
                amount: 5,
            },
            {
                id: 'scrap_rubber',
                amount: 3,
            },
        ],
    },
    {
        id: 'lockpick',
        variant: 'durable_lockpick',
        time: 1000 * 60 * 15,
        progression: 45,
        needs: [
            {
                id: 'lockpick',
                amount: 1,
            },
            {
                id: 'scrap_steel',
                amount: 3,
            },
            {
                id: 'scrap_scrapmetal',
                amount: 8,
            },
        ],
    },
    {
        id: 'advlockpick',
        time: 1000 * 60 * 15,
        progression: 55,
        needs: [
            {
                id: 'lockpick',
                variant: 'durable_lockpick',
                amount: 1,
            },
            {
                id: 'scrap_steel',
                amount: 8,
            },
            {
                id: 'scrap_scrapmetal',
                amount: 4,
            },
            {
                id: 'scrap_plastic',
                amount: 4,
            },
            {
                id: 'scrap_rubber',
                amount: 4,
            },
        ],
    },
    {
        id: 'rc_cargo_drone_chip',
        time: 1000 * 60 * 30,
        progression: 70,
        needs: [
            {
                id: 'scrap_electronics',
                amount: 50,
            },
            {
                id: 'scrap_plastic',
                amount: 15,
            },
            {
                id: 'scrap_copper',
                amount: 25,
            },
            {
                id: 'scrap_aluminium',
                amount: 17,
            },
        ],
    },
];
