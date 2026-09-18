Generic = {}
Generic.NPCS = {}

Generic.ShopKeeperLocations = {
  vector4(-3037.773, 584.8989, 6.97, 30.0),
  vector4(1960.64, 3739.03, 31.50, 321.36),
  vector4(1393.84, 3606.8, 33.99, 172.8),
  vector4(549.01, 2672.44, 41.16, 122.33),
  vector4(2558.39, 380.74, 107.63, 21.54),
  vector4(-1819.57, 793.59, 137.09, 134.3),
  vector4(-1221.26, -907.92, 11.3, 54.44),
  vector4(-706.12, -914.56, 18.22, 94.66),
  vector4(24.47, -1348.47, 28.5, 298.26),
  vector4(-47.36, -1758.68, 28.43, 50.84),
  vector4(1164.95, -323.7, 68.21, 101.73),
  vector4(372.19, 325.74, 102.57, 276.17),
  vector4(2678.63, 3278.86, 54.25, 344.4),
  vector4(1727.3, 6414.27, 34.04, 259.1),
  -- vector4(-160.56,6320.76,30.59,319.99),
  vector4(1165.29, 2710.85, 37.16, 178.47),
  vector4(1697.23, 4923.42, 41.07, 327.94),
  -- vector4(159.84,6640.89,30.7,242.18),
  vector4(-1486.81, -377.38, 39.17, 143.01),
  vector4(-3241.1, 999.93, 11.84, 10.23),
  vector4(-2966.38, 391.79, 14.05, 99.55),
  vector4(1134.29, -983.39, 45.42, 292.7),
  -- vector4(-1422.56,-271.43,45.27,34.69)
}

Generic.LaundromatLocations = {
  vector4(83.03, -1558.26, 28.61, 321.46),
  vector4(636.45, 2750.47, 40.94, 92.28),
  vector4(-761.78, 244.61, 74.64, 99.76),
}

Generic.ClickLoversLocations = {
  vector4(212.46, -1507.40, 28.29, 221.25),
  vector4(358.82, 208.76, 102.08, 247.84),
  vector4(-1348.07, -334.9, 35.65, 205.83),
}

Generic.LocksmithLocations = {
  vector4(331.43, -1642.93, 31.54, 146.28),
  vector4(-449.41, 6015.77, 30.72, 317.66),
  vector4(-542.05, -195.34, 37.23, 166.75),
}

Generic.SewersLocations = {
  vector4(211.56, -1648.65, -1.53, 90.01),
}

Generic.LibraryLocations = {
  vector4(1159.62, -388.66, 64.03, 162.88),
}

Generic.WeaponShopLocations = {
  vector4(23.36, -1105.82, 28.8, 156.03),
  vector4(1696.02, 3760.72, 33.71, 193.37),
  vector4(254.32, -49.28, 68.95, 70.86),
  vector4(840.21, -1032.9, 27.2, 289.83),
  vector4(-331.75, 6084.95, 30.46, 224.64),
  vector4(-666.13, -938.73, 20.83, 269.52),
  vector4(-1310.05, -389.17, 35.7, 144.36),
  vector4(-1116.51, 2700.33, 17.58, 149.9),
  vector4(2571.79, 298.1, 107.74, 84.22),
  vector4(-3169.53, 1089.59, 19.84, 237.35),
}

Generic.ToolShopLocations = {
  -- vector4(44.838947296143, -1748.5364990234, 28.549386978149, 35.3),
  vector4(2749.2309570313, 3472.3308105469, 54.679393768311, 244.4),
}

Generic.LicenseBuyLocations = {
  -- Temp moved because building doesn't exist (old location -540.57,-191.22,37.23,119.25).
  vector4(331.34, -1644.19, 31.54, 51.46),
  vector4(-450.54, 6016.8, 30.72, 314.75),
  vector4(-541.05, -197.66, 37.23, 74.84),
  -- vector4(-41.81,-206.78,44.79,219.28), driving school
}

Generic.SportsGuyLocations = {
  vector4(-1692.09, 162.55, 63.01, 124.22),
}

Generic.ShowroomManagers = {
  vector4(-1133.98, -2871.68, 12.96, 331.19), -- Heli showroom
  vector4(297.9, -1451.16, 28.97, 327.23),
  vector4(-1237.55, -3377.58, 12.96, 91.59), -- Plane showroom
  vector4(-777.42, -1375.42, 0.6, 182.5), -- Boat showroom
}

Generic.OxyRunDealers = {
  vector4(-123.45, 2796.94, 52.11, 11.0),
  vector4(1289.45, 3631.97, 32.04, 89.3),
  vector4(2519.49, 4119.74, 37.64, 71.76),
  vector4(1952.29, 4644.95, 39.66, 208.97),
}

Generic.NPCS[#Generic.NPCS + 1] = {
  id = "court_security",
  name = "Court House Security",
  pedType = 4,
  model = "s_m_m_security_01",
  networked = false,
  distance = 150.0,
  position = {
    coords = vector3(314.25, -1635.46, 31.54),
    heading = 48.98,
    random = false
  },
  appearance = nil,
  settings = {
    { mode = "invincible", active = true },
    { mode = "ignore",     active = true },
    { mode = "freeze",     active = true }
  },
  flags = {
    ['isNPC'] = true,
  }
}

Generic.NPCS[#Generic.NPCS + 1] = {
  id = "court_security_b",
  name = "Court House Security",
  pedType = 4,
  model = "s_m_m_security_01",
  networked = false,
  distance = 150.0,
  position = {
    coords = vector3(-554.14, -202.87, 37.23),
    heading = 312.71,
    random = false
  },
  appearance = nil,
  settings = {
    { mode = "invincible", active = true },
    { mode = "ignore",     active = true },
    { mode = "freeze",     active = true }
  },
  flags = {
    ['isNPC'] = true,
  }
}


Generic.NPCS[#Generic.NPCS + 1] = {
  id = 'air_manager_01',
  name = 'Air Manager',
  pedType = 4,
  model = 's_m_y_pilot_01',
  networked = false,
  distance = 50.0,
  position = {
    coords = vector3(-991.36,-2942.17,12.96),
    heading = 56.21,
    random = false
  },
  appearance = nil,
  scenario = 'WORLD_HUMAN_SMOKING_CLUBHOUSE',
  settings = {
    { mode = 'invincible', active = true },
    { mode = 'ignore',     active = true },
    { mode = 'freeze',     active = true }
  },
  flags = {
    ['isNPC'] = true,
  }
}

Generic.NPCS[#Generic.NPCS + 1] = {
  id = 'air_manager_02',
  name = 'Air Manager',
  pedType = 4,
  model = 's_m_y_pilot_01',
  networked = false,
  distance = 25.0,
  position = {
    coords = vector3(-912.84, -3022.05, 12.95),
    heading = 60.0,
    random = false
  },
  appearance = nil,
  scenario = 'WORLD_HUMAN_SMOKING_CLUBHOUSE',
  settings = {
    { mode = 'invincible', active = true },
    { mode = 'ignore',     active = true },
    { mode = 'freeze',     active = true }
  },
  flags = {
    ['isNPC'] = true,
  }
}
