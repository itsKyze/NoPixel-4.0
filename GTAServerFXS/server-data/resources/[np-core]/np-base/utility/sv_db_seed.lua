AddEventHandler("onResourceStart", function(name)
    if name ~= GetCurrentResourceName() then return end
    Citizen.SetTimeout(2000, function()
        exports["oxmysql"]:execute([[CREATE TABLE IF NOT EXISTS `user_settings` (
            `id` INT NOT NULL AUTO_INCREMENT,
            `user_id` INT NOT NULL,
            `settings` LONGTEXT DEFAULT NULL,
            `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`), UNIQUE KEY `uq_user` (`user_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4]], {}, function()
            print("[np-base] user_settings table ready.")
        end)
        exports["oxmysql"]:execute([[CREATE TABLE IF NOT EXISTS `character_outfits` (
            `id` INT NOT NULL AUTO_INCREMENT,
            `character_id` INT NOT NULL,
            `name` VARCHAR(100) NOT NULL,
            `data` LONGTEXT DEFAULT NULL,
            `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`), INDEX `idx_char` (`character_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4]], {})
        exports["oxmysql"]:execute([[CREATE TABLE IF NOT EXISTS `twatter` (
            `id` BIGINT NOT NULL AUTO_INCREMENT,
            `character_id` INT NOT NULL,
            `message` TEXT NOT NULL,
            `image` VARCHAR(500) DEFAULT NULL,
            `likes` INT NOT NULL DEFAULT 0,
            `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`), INDEX `idx_char` (`character_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4]], {})
        exports["oxmysql"]:execute([[CREATE TABLE IF NOT EXISTS `character_progression` (
            `id` INT NOT NULL AUTO_INCREMENT,
            `character_id` INT NOT NULL,
            `xp` INT NOT NULL DEFAULT 0,
            `level` INT NOT NULL DEFAULT 1,
            PRIMARY KEY (`id`), UNIQUE KEY `uq_char` (`character_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4]], {})
    end)
end)