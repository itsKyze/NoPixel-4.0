-- ============================================================================
-- NoPixel 4.0 — Unified Database Schema
-- Charset: utf8mb4 | Collation: utf8mb4_unicode_ci | Engine: InnoDB
-- Automatically organized, verified and optimized
-- ============================================================================

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

CREATE DATABASE IF NOT EXISTS `nopixel4`
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE `nopixel4`;

-- ============================================================================
-- SECTION: 1. USERS & AUTHENTICATION
-- ============================================================================

-- TABLE: users (Core user accounts and identifiers (Steam, Discord, FiveM, License))
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id`          INT(11)      NOT NULL AUTO_INCREMENT,
  `license`     VARCHAR(100) NOT NULL,
  `license2`    VARCHAR(100)          DEFAULT NULL,
  `steam`       VARCHAR(100)          DEFAULT NULL,
  `discord`     VARCHAR(100)          DEFAULT NULL,
  `fivem`       VARCHAR(100)          DEFAULT NULL,
  `ip`          VARCHAR(45)           DEFAULT NULL,
  `tokens`      LONGTEXT              DEFAULT NULL,
  `is_banned`   TINYINT(1)   NOT NULL DEFAULT 0,
  `ban_reason`  TEXT                  DEFAULT NULL,
  `ban_until`   DATETIME              DEFAULT NULL,
  `whitelist`   TINYINT(1)   NOT NULL DEFAULT 0,
  `role`        VARCHAR(50)  NOT NULL DEFAULT 'user',
  `created_at`  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_seen`   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_license` (`license`),
  INDEX `idx_steam`   (`steam`),
  INDEX `idx_discord` (`discord`),
  INDEX `idx_fivem`   (`fivem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- TABLE: user_settings (Persistent user-level configuration and client preferences)
DROP TABLE IF EXISTS `user_settings`;
CREATE TABLE `user_settings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `settings` LONGTEXT DEFAULT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`), UNIQUE KEY `uq_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: queue_priority (Server queue priority and whitelist permissions)
DROP TABLE IF EXISTS `queue_priority`;
CREATE TABLE `queue_priority` (
  `id`         INT(11)      NOT NULL AUTO_INCREMENT,
  `identifier` VARCHAR(100) NOT NULL,
  `priority`   INT(11)      NOT NULL DEFAULT 0,
  `reason`     VARCHAR(255)          DEFAULT NULL,
  `added_at`   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_identifier` (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- SECTION: 2. CHARACTERS & PROGRESSION
-- ============================================================================

-- TABLE: characters (Player characters (name, cash, bank, job, gang, gender, metadata))
DROP TABLE IF EXISTS `characters`;
CREATE TABLE `characters` (
  `id`              INT(11)      NOT NULL AUTO_INCREMENT,
  `user_id`         INT(11)      NOT NULL,
  `slot`            TINYINT(1)   NOT NULL DEFAULT 1,
  `firstname`       VARCHAR(50)  NOT NULL DEFAULT '',
  `lastname`        VARCHAR(50)  NOT NULL DEFAULT '',
  `dateofbirth`     VARCHAR(20)           DEFAULT NULL,
  `gender`          VARCHAR(10)  NOT NULL DEFAULT 'male',
  `nationality`     VARCHAR(50)           DEFAULT NULL,
  `backstory`       TEXT                  DEFAULT NULL,
  `ped_model`       VARCHAR(100) NOT NULL DEFAULT 'mp_m_freemode_01',
  `ped_appearance`  LONGTEXT              DEFAULT NULL,
  `health`          FLOAT        NOT NULL DEFAULT 200,
  `armour`          FLOAT        NOT NULL DEFAULT 0,
  `cash`            BIGINT(15)   NOT NULL DEFAULT 500,
  `bank`            BIGINT(15)   NOT NULL DEFAULT 5000,
  `dirty_money`     BIGINT(15)   NOT NULL DEFAULT 0,
  `job`             VARCHAR(50)  NOT NULL DEFAULT 'unemployed',
  `job_grade`       INT(11)      NOT NULL DEFAULT 0,
  `job2`            VARCHAR(50)           DEFAULT NULL,
  `job2_grade`      INT(11)               DEFAULT 0,
  `gang`            VARCHAR(50)           DEFAULT NULL,
  `gang_grade`      INT(11)               DEFAULT 0,
  `position`        LONGTEXT              DEFAULT NULL,
  `metadata`        LONGTEXT              DEFAULT NULL,
  `is_dead`         TINYINT(1)   NOT NULL DEFAULT 0,
  `is_jailed`       TINYINT(1)   NOT NULL DEFAULT 0,
  `jail_time`       INT(11)      NOT NULL DEFAULT 0,
  `jail_reason`     VARCHAR(255)          DEFAULT NULL,
  `is_new`          TINYINT(1)   NOT NULL DEFAULT 1,
  `license`         VARCHAR(100)          DEFAULT NULL,
  `created_at`      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_user_id` (`user_id`),
  INDEX `idx_job`     (`job`),
  INDEX `idx_license` (`license`),
  CONSTRAINT `fk_char_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: character_outfits (Saved character clothing presets and outfit slots)
DROP TABLE IF EXISTS `character_outfits`;
CREATE TABLE `character_outfits` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `character_id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `data` LONGTEXT DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: character_progression (Character levels, XP and skill progression)
DROP TABLE IF EXISTS `character_progression`;
CREATE TABLE `character_progression` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `character_id` INT NOT NULL,
  `xp` INT NOT NULL DEFAULT 0,
  `level` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`), UNIQUE KEY `uq_char` (`character_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: progression (Global progression nodes, unlocks and crafting recipes)
DROP TABLE IF EXISTS `progression`;
CREATE TABLE `progression` (
  `id`           INT(11)      NOT NULL AUTO_INCREMENT,
  `character_id` INT(11)      NOT NULL,
  `skill`        VARCHAR(100) NOT NULL,
  `level`        INT(11)      NOT NULL DEFAULT 0,
  `experience`   INT(11)      NOT NULL DEFAULT 0,
  `updated_at`   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_char_skill` (`character_id`, `skill`),
  CONSTRAINT `fk_prog_char` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: player_settings (Character-specific settings and UI toggles)
DROP TABLE IF EXISTS `player_settings`;
CREATE TABLE `player_settings` (
  `character_id` INT(11)   NOT NULL,
  `data`         LONGTEXT  NOT NULL DEFAULT '{}',
  `updated_at`   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`character_id`),
  CONSTRAINT `fk_set_char` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: licenses (DMV, weapons, hunting, business and legal licenses)
DROP TABLE IF EXISTS `licenses`;
CREATE TABLE `licenses` (
  `id`           INT(11)     NOT NULL AUTO_INCREMENT,
  `character_id` INT(11)     NOT NULL,
  `type`         VARCHAR(50) NOT NULL,
  `is_suspended` TINYINT(1)  NOT NULL DEFAULT 0,
  `issued_at`    TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expires_at`   DATETIME             DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_char` (`character_id`),
  CONSTRAINT `fk_lic_char` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- SECTION: 3. ECONOMY, BANKING & INVENTORY
-- ============================================================================

-- TABLE: bank_accounts (Personal, business and shared bank accounts)
DROP TABLE IF EXISTS `bank_accounts`;
CREATE TABLE `bank_accounts` (
  `id`             INT(11)     NOT NULL AUTO_INCREMENT,
  `character_id`   INT(11)     NOT NULL,
  `type`           VARCHAR(20) NOT NULL DEFAULT 'checking',
  `balance`        BIGINT(15)  NOT NULL DEFAULT 0,
  `account_number` VARCHAR(20) NOT NULL,
  `pin`            VARCHAR(10)          DEFAULT NULL,
  `is_frozen`      TINYINT(1)  NOT NULL DEFAULT 0,
  `created_at`     TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_account_number` (`account_number`),
  INDEX `idx_char` (`character_id`),
  CONSTRAINT `fk_bank_char` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: transactions (Banking transaction ledger and transfer history)
DROP TABLE IF EXISTS `transactions`;
CREATE TABLE `transactions` (
  `id`          BIGINT(20)   NOT NULL AUTO_INCREMENT,
  `account_from` VARCHAR(20)          DEFAULT NULL,
  `account_to`  VARCHAR(20)           DEFAULT NULL,
  `amount`      BIGINT(15)   NOT NULL DEFAULT 0,
  `type`        VARCHAR(50)  NOT NULL DEFAULT 'transfer',
  `description` VARCHAR(255)          DEFAULT NULL,
  `created_at`  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_acc_from` (`account_from`),
  INDEX `idx_acc_to`   (`account_to`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: items (Master items definition dictionary (weights, stack limits, consumables))
DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
  `name`        VARCHAR(100) NOT NULL,
  `label`       VARCHAR(100) NOT NULL,
  `description` TEXT                  DEFAULT NULL,
  `weight`      FLOAT        NOT NULL DEFAULT 0.5,
  `max_stack`   INT(11)      NOT NULL DEFAULT 64,
  `useable`     TINYINT(1)   NOT NULL DEFAULT 0,
  `unique`      TINYINT(1)   NOT NULL DEFAULT 0,
  `can_remove`  TINYINT(1)   NOT NULL DEFAULT 1,
  `image`       VARCHAR(200)          DEFAULT NULL,
  `type`        VARCHAR(50)  NOT NULL DEFAULT 'item',
  `created_at`  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: inventories (Player, vehicle glovebox/trunk, drop and custom inventory containers)
DROP TABLE IF EXISTS `inventories`;
CREATE TABLE `inventories` (
  `id`          VARCHAR(100) NOT NULL,
  `type`        VARCHAR(50)  NOT NULL DEFAULT 'player',
  `label`       VARCHAR(100)          DEFAULT NULL,
  `max_weight`  FLOAT        NOT NULL DEFAULT 120.0,
  `data`        LONGTEXT              DEFAULT NULL,
  `created_at`  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_type` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: inventory_items (Items stored inside active inventory containers)
DROP TABLE IF EXISTS `inventory_items`;
CREATE TABLE `inventory_items` (
  `id`           BIGINT(20)   NOT NULL AUTO_INCREMENT,
  `inventory_id` VARCHAR(100) NOT NULL,
  `item_name`    VARCHAR(100) NOT NULL,
  `amount`       INT(11)      NOT NULL DEFAULT 1,
  `slot`         INT(11)               DEFAULT NULL,
  `metadata`     LONGTEXT              DEFAULT NULL,
  `quality`      FLOAT                 DEFAULT 100.0,
  `created_at`   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_inventory` (`inventory_id`),
  INDEX `idx_item_name` (`item_name`),
  CONSTRAINT `fk_item_inv` FOREIGN KEY (`inventory_id`) REFERENCES `inventories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: stashes (Permanent world stash containers and faction storage)
DROP TABLE IF EXISTS `stashes`;
CREATE TABLE `stashes` (
  `id`          VARCHAR(100) NOT NULL,
  `label`       VARCHAR(100) NOT NULL DEFAULT 'Stash',
  `type`        VARCHAR(50)  NOT NULL DEFAULT 'stash',
  `max_weight`  FLOAT        NOT NULL DEFAULT 500.0,
  `job`         VARCHAR(50)           DEFAULT NULL,
  `gang`        VARCHAR(50)           DEFAULT NULL,
  `data`        LONGTEXT              DEFAULT NULL,
  `created_at`  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: washing_machines (Money laundering machines and processing states)
DROP TABLE IF EXISTS `washing_machines`;
CREATE TABLE `washing_machines` (
  `id`           INT(11)      NOT NULL AUTO_INCREMENT,
  `location_id`  VARCHAR(100) NOT NULL,
  `owner_id`     INT(11)               DEFAULT NULL,
  `dirty_amount` BIGINT(15)   NOT NULL DEFAULT 0,
  `clean_amount` BIGINT(15)   NOT NULL DEFAULT 0,
  `stage`        INT(11)      NOT NULL DEFAULT 0,
  `started_at`   DATETIME              DEFAULT NULL,
  `ready_at`     DATETIME              DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_location` (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- SECTION: 4. JOBS & BUSINESSES
-- ============================================================================

-- TABLE: jobs (Job titles and whitelist definitions)
DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `name`           VARCHAR(50)  NOT NULL,
  `label`          VARCHAR(100) NOT NULL,
  `type`           VARCHAR(50)  NOT NULL DEFAULT 'civilian',
  `is_whitelisted` TINYINT(1)   NOT NULL DEFAULT 0,
  `created_at`     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: job_grades (Job ranks, titles and hourly salary tiers)
DROP TABLE IF EXISTS `job_grades`;
CREATE TABLE `job_grades` (
  `id`          INT(11)      NOT NULL AUTO_INCREMENT,
  `job_name`    VARCHAR(50)  NOT NULL,
  `grade`       INT(11)      NOT NULL DEFAULT 0,
  `name`        VARCHAR(50)  NOT NULL,
  `label`       VARCHAR(100) NOT NULL,
  `salary`      INT(11)      NOT NULL DEFAULT 0,
  `skin_male`   LONGTEXT              DEFAULT NULL,
  `skin_female` LONGTEXT              DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_job_name` (`job_name`),
  CONSTRAINT `fk_grade_job` FOREIGN KEY (`job_name`) REFERENCES `jobs` (`name`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: businesses (Player-owned commercial businesses, funds and management)
DROP TABLE IF EXISTS `businesses`;
CREATE TABLE `businesses` (
  `id`         INT(11)      NOT NULL AUTO_INCREMENT,
  `name`       VARCHAR(100) NOT NULL,
  `owner_id`   INT(11)               DEFAULT NULL,
  `type`       VARCHAR(50)  NOT NULL DEFAULT 'shop',
  `balance`    BIGINT(15)   NOT NULL DEFAULT 0,
  `employees`  LONGTEXT              DEFAULT NULL,
  `metadata`   LONGTEXT              DEFAULT NULL,
  `created_at` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_biz_char` FOREIGN KEY (`owner_id`) REFERENCES `characters` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- SECTION: 5. HOUSING & PROPERTY
-- ============================================================================

-- TABLE: houses (Real estate properties, interiors and locations)
DROP TABLE IF EXISTS `houses`;
CREATE TABLE `houses` (
  `id`              INT(11)      NOT NULL AUTO_INCREMENT,
  `identifier`      VARCHAR(100) NOT NULL,
  `owner_id`        INT(11)               DEFAULT NULL,
  `label`           VARCHAR(100) NOT NULL DEFAULT 'House',
  `price`           BIGINT(15)   NOT NULL DEFAULT 0,
  `location`        LONGTEXT              DEFAULT NULL,
  `spawn_point`     LONGTEXT              DEFAULT NULL,
  `furniture`       LONGTEXT              DEFAULT NULL,
  `lockcode`        VARCHAR(20)           DEFAULT NULL,
  `has_garage`      TINYINT(1)   NOT NULL DEFAULT 0,
  `garage_capacity` INT(11)      NOT NULL DEFAULT 2,
  `is_locked`       TINYINT(1)   NOT NULL DEFAULT 1,
  `cops_alert`      TINYINT(1)   NOT NULL DEFAULT 0,
  `owner_alert`     TINYINT(1)   NOT NULL DEFAULT 1,
  `security_level`  INT(11)      NOT NULL DEFAULT 0,
  `created_at`      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_identifier` (`identifier`),
  INDEX `idx_owner` (`owner_id`),
  CONSTRAINT `fk_house_char` FOREIGN KEY (`owner_id`) REFERENCES `characters` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: house_users (Keyholders and resident access permissions)
DROP TABLE IF EXISTS `house_users`;
CREATE TABLE `house_users` (
  `id`           INT(11)     NOT NULL AUTO_INCREMENT,
  `house_id`     INT(11)     NOT NULL,
  `character_id` INT(11)     NOT NULL,
  `permission`   VARCHAR(20) NOT NULL DEFAULT 'guest',
  PRIMARY KEY (`id`),
  INDEX `idx_house` (`house_id`),
  INDEX `idx_char`  (`character_id`),
  CONSTRAINT `fk_hu_house` FOREIGN KEY (`house_id`)    REFERENCES `houses`     (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_hu_char`  FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: apartments (Starting apartments and player room allocations)
DROP TABLE IF EXISTS `apartments`;
CREATE TABLE `apartments` (
  `id`          INT(11)      NOT NULL AUTO_INCREMENT,
  `identifier`  VARCHAR(100) NOT NULL,
  `owner_id`    INT(11)               DEFAULT NULL,
  `label`       VARCHAR(100) NOT NULL DEFAULT 'Apartment',
  `tier`        VARCHAR(20)  NOT NULL DEFAULT 'low',
  `furniture`   LONGTEXT              DEFAULT NULL,
  `is_locked`   TINYINT(1)   NOT NULL DEFAULT 1,
  `created_at`  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_apt_id` (`identifier`),
  CONSTRAINT `fk_apt_char` FOREIGN KEY (`owner_id`) REFERENCES `characters` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- SECTION: 6. VEHICLES, GARAGES & IMPOUND
-- ============================================================================

-- TABLE: owned_vehicles (Player-owned vehicles, plates, mods, fuel, damage and garage state)
DROP TABLE IF EXISTS `owned_vehicles`;
CREATE TABLE `owned_vehicles` (
  `id`             INT(11)      NOT NULL AUTO_INCREMENT,
  `character_id`   INT(11)      NOT NULL,
  `plate`          VARCHAR(20)  NOT NULL,
  `model`          VARCHAR(100) NOT NULL,
  `model_hash`     VARCHAR(20)           DEFAULT NULL,
  `garage`         VARCHAR(100) NOT NULL DEFAULT 'pillboxhill',
  `state`          TINYINT(1)   NOT NULL DEFAULT 1,
  `fuel`           FLOAT        NOT NULL DEFAULT 100.0,
  `engine`         FLOAT        NOT NULL DEFAULT 1000.0,
  `body`           FLOAT        NOT NULL DEFAULT 1000.0,
  `mods`           LONGTEXT              DEFAULT NULL,
  `keys`           LONGTEXT              DEFAULT NULL,
  `job`            VARCHAR(50)           DEFAULT NULL,
  `type`           VARCHAR(50)  NOT NULL DEFAULT 'car',
  `is_impounded`   TINYINT(1)   NOT NULL DEFAULT 0,
  `impound_reason` VARCHAR(255)          DEFAULT NULL,
  `purchased_at`   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_plate` (`plate`),
  INDEX `idx_character` (`character_id`),
  INDEX `idx_state`     (`state`),
  CONSTRAINT `fk_veh_char` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: garages (Public, private, job and impound garage parking locations)
DROP TABLE IF EXISTS `garages`;
CREATE TABLE `garages` (
  `id`     VARCHAR(100) NOT NULL,
  `label`  VARCHAR(100) NOT NULL,
  `type`   VARCHAR(50)  NOT NULL DEFAULT 'public',
  `job`    VARCHAR(50)           DEFAULT NULL,
  `coords` LONGTEXT              DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: impound (Police/mechanic vehicle impound records, fees and reasons)
DROP TABLE IF EXISTS `impound`;
CREATE TABLE `impound` (
  `id`          INT(11)   NOT NULL AUTO_INCREMENT,
  `vehicle_id`  INT(11)   NOT NULL,
  `reason`      TEXT               DEFAULT NULL,
  `officer_id`  INT(11)            DEFAULT NULL,
  `fee`         INT(11)   NOT NULL DEFAULT 500,
  `released_at` DATETIME           DEFAULT NULL,
  `created_at`  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_vehicle` (`vehicle_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- SECTION: 7. LAW ENFORCEMENT & GOVERNMENT (MDT)
-- ============================================================================

-- TABLE: mdt_records (Police MDT incident reports, profiles, criminal records and charges)
DROP TABLE IF EXISTS `mdt_records`;
CREATE TABLE `mdt_records` (
  `id`           INT(11)     NOT NULL AUTO_INCREMENT,
  `character_id` INT(11)     NOT NULL,
  `type`         VARCHAR(50) NOT NULL DEFAULT 'arrest',
  `officer_id`   INT(11)              DEFAULT NULL,
  `charges`      LONGTEXT             DEFAULT NULL,
  `fine`         INT(11)     NOT NULL DEFAULT 0,
  `jail_time`    INT(11)     NOT NULL DEFAULT 0,
  `notes`        TEXT                 DEFAULT NULL,
  `evidence`     LONGTEXT             DEFAULT NULL,
  `created_at`   TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_character` (`character_id`),
  INDEX `idx_officer`   (`officer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: warrants (Active and historical arrest warrants)
DROP TABLE IF EXISTS `warrants`;
CREATE TABLE `warrants` (
  `id`           INT(11)    NOT NULL AUTO_INCREMENT,
  `character_id` INT(11)    NOT NULL,
  `issued_by`    INT(11)             DEFAULT NULL,
  `reason`       TEXT                DEFAULT NULL,
  `expires_at`   DATETIME            DEFAULT NULL,
  `is_active`    TINYINT(1) NOT NULL DEFAULT 1,
  `created_at`   TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_char` (`character_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: evidence_logs (Ballistics, blood, DNA, weapon casing and forensic evidence)
DROP TABLE IF EXISTS `evidence_logs`;
CREATE TABLE `evidence_logs` (
  `id`           BIGINT(20)  NOT NULL AUTO_INCREMENT,
  `type`         VARCHAR(50) NOT NULL DEFAULT 'blood',
  `coords`       LONGTEXT             DEFAULT NULL,
  `data`         LONGTEXT             DEFAULT NULL,
  `collected_by` INT(11)              DEFAULT NULL,
  `created_at`   TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: dispatch_calls (911 / 311 emergency dispatch calls and responder assignments)
DROP TABLE IF EXISTS `dispatch_calls`;
CREATE TABLE `dispatch_calls` (
  `id`            INT(11)      NOT NULL AUTO_INCREMENT,
  `code`          VARCHAR(20)  NOT NULL DEFAULT '10-70',
  `title`         VARCHAR(200) NOT NULL,
  `description`   TEXT                  DEFAULT NULL,
  `coords`        LONGTEXT              DEFAULT NULL,
  `caller_id`     INT(11)               DEFAULT NULL,
  `caller_number` VARCHAR(20)           DEFAULT NULL,
  `units`         LONGTEXT              DEFAULT NULL,
  `status`        VARCHAR(20)  NOT NULL DEFAULT 'pending',
  `created_at`    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- SECTION: 8. COMMUNICATIONS & SOCIAL (PHONE & TWATTER)
-- ============================================================================

-- TABLE: contacts (Phone address book contacts)
DROP TABLE IF EXISTS `contacts`;
CREATE TABLE `contacts` (
  `id`           INT(11)      NOT NULL AUTO_INCREMENT,
  `character_id` INT(11)      NOT NULL,
  `name`         VARCHAR(100) NOT NULL,
  `phone_number` VARCHAR(20)           DEFAULT NULL,
  `iban`         VARCHAR(30)           DEFAULT NULL,
  `nickname`     VARCHAR(100)          DEFAULT NULL,
  `profile_pic`  VARCHAR(255)          DEFAULT NULL,
  `is_emergency` TINYINT(1)   NOT NULL DEFAULT 0,
  `created_at`   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_char` (`character_id`),
  CONSTRAINT `fk_cont_char` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: phone_messages (SMS messages and chat threads)
DROP TABLE IF EXISTS `phone_messages`;
CREATE TABLE `phone_messages` (
  `id`              BIGINT(20)   NOT NULL AUTO_INCREMENT,
  `conversation_id` VARCHAR(100) NOT NULL,
  `sender_id`       INT(11)               DEFAULT NULL,
  `sender_number`   VARCHAR(20)           DEFAULT NULL,
  `message`         TEXT                  DEFAULT NULL,
  `is_read`         TINYINT(1)   NOT NULL DEFAULT 0,
  `created_at`      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_conv`   (`conversation_id`),
  INDEX `idx_sender` (`sender_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: twatter (Twatter social feed posts and likes)
DROP TABLE IF EXISTS `twatter`;
CREATE TABLE `twatter` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `character_id` INT NOT NULL,
  `message` TEXT NOT NULL,
  `image` VARCHAR(500) DEFAULT NULL,
  `likes` INT NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: twatter_accounts (Twatter user profiles, handles and avatars)
DROP TABLE IF EXISTS `twatter_accounts`;
CREATE TABLE `twatter_accounts` (
  `id`           INT(11)      NOT NULL AUTO_INCREMENT,
  `character_id` INT(11)      NOT NULL,
  `handle`       VARCHAR(50)  NOT NULL,
  `display_name` VARCHAR(100) NOT NULL,
  `bio`          TEXT                  DEFAULT NULL,
  `avatar`       VARCHAR(255)          DEFAULT NULL,
  `followers`    INT(11)      NOT NULL DEFAULT 0,
  `following`    INT(11)      NOT NULL DEFAULT 0,
  `verified`     TINYINT(1)   NOT NULL DEFAULT 0,
  `created_at`   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_handle` (`handle`),
  INDEX `idx_char` (`character_id`),
  CONSTRAINT `fk_twat_char` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: twatter_posts (Extended Twatter thread messages)
DROP TABLE IF EXISTS `twatter_posts`;
CREATE TABLE `twatter_posts` (
  `id`         BIGINT(20)   NOT NULL AUTO_INCREMENT,
  `account_id` INT(11)      NOT NULL,
  `content`    TEXT         NOT NULL,
  `image`      VARCHAR(255)          DEFAULT NULL,
  `likes`      INT(11)      NOT NULL DEFAULT 0,
  `retweets`   INT(11)      NOT NULL DEFAULT 0,
  `is_deleted` TINYINT(1)   NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_account` (`account_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- SECTION: 9. GANGS, ACTIVITIES & ENTERTAINMENT
-- ============================================================================

-- TABLE: gangs (Criminal gangs and organizations)
DROP TABLE IF EXISTS `gangs`;
CREATE TABLE `gangs` (
  `name`       VARCHAR(50)  NOT NULL,
  `label`      VARCHAR(100) NOT NULL,
  `created_at` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: gang_grades (Gang hierarchy and member ranks)
DROP TABLE IF EXISTS `gang_grades`;
CREATE TABLE `gang_grades` (
  `id`        INT(11)      NOT NULL AUTO_INCREMENT,
  `gang_name` VARCHAR(50)  NOT NULL,
  `grade`     INT(11)      NOT NULL DEFAULT 0,
  `name`      VARCHAR(50)  NOT NULL,
  `label`     VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_gang_name` (`gang_name`),
  CONSTRAINT `fk_ggrade_gang` FOREIGN KEY (`gang_name`) REFERENCES `gangs` (`name`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: racing_records (Racing track records, leaderboards and lap times)
DROP TABLE IF EXISTS `racing_records`;
CREATE TABLE `racing_records` (
  `id`           INT(11)      NOT NULL AUTO_INCREMENT,
  `character_id` INT(11)      NOT NULL,
  `track_name`   VARCHAR(100) NOT NULL,
  `best_time`    FLOAT        NOT NULL DEFAULT 0,
  `total_races`  INT(11)      NOT NULL DEFAULT 0,
  `wins`         INT(11)      NOT NULL DEFAULT 0,
  `losses`       INT(11)      NOT NULL DEFAULT 0,
  `rating`       FLOAT        NOT NULL DEFAULT 0,
  `updated_at`   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_char`  (`character_id`),
  INDEX `idx_track` (`track_name`),
  CONSTRAINT `fk_race_char` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: fishing_data (Fishing tournaments, catches and weight records)
DROP TABLE IF EXISTS `fishing_data`;
CREATE TABLE `fishing_data` (
  `id`              INT(11)      NOT NULL AUTO_INCREMENT,
  `character_id`    INT(11)      NOT NULL,
  `total_fish`      INT(11)      NOT NULL DEFAULT 0,
  `total_weight`    FLOAT        NOT NULL DEFAULT 0,
  `largest_catch`   FLOAT        NOT NULL DEFAULT 0,
  `largest_species` VARCHAR(100)          DEFAULT NULL,
  `experience`      INT(11)      NOT NULL DEFAULT 0,
  `rank`            INT(11)      NOT NULL DEFAULT 0,
  `updated_at`      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_char` (`character_id`),
  CONSTRAINT `fk_fish_char` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: moonshine_data (Moonshine brewing stills and fermentation progress)
DROP TABLE IF EXISTS `moonshine_data`;
CREATE TABLE `moonshine_data` (
  `id`          INT(11)      NOT NULL AUTO_INCREMENT,
  `location_id` VARCHAR(100) NOT NULL,
  `owner_id`    INT(11)               DEFAULT NULL,
  `recipe`      VARCHAR(100)          DEFAULT NULL,
  `stage`       INT(11)      NOT NULL DEFAULT 0,
  `batch_size`  INT(11)      NOT NULL DEFAULT 0,
  `started_at`  DATETIME              DEFAULT NULL,
  `ready_at`    DATETIME              DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_location` (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: weed_plants (Cannabis cultivation plants, growth stages and yields)
DROP TABLE IF EXISTS `weed_plants`;
CREATE TABLE `weed_plants` (
  `id`           INT(11)      NOT NULL AUTO_INCREMENT,
  `owner_id`     INT(11)               DEFAULT NULL,
  `strain`       VARCHAR(100) NOT NULL DEFAULT 'OG Kush',
  `genetics`     LONGTEXT              DEFAULT NULL,
  `stage`        VARCHAR(20)  NOT NULL DEFAULT 'seed',
  `health`       FLOAT        NOT NULL DEFAULT 100.0,
  `water`        FLOAT        NOT NULL DEFAULT 100.0,
  `coords`       LONGTEXT              DEFAULT NULL,
  `planted_at`   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_watered` DATETIME              DEFAULT NULL,
  `harvest_at`   DATETIME              DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_owner` (`owner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: stock_market (Los Santos Stock Exchange listings and tickers)
DROP TABLE IF EXISTS `stock_market`;
CREATE TABLE `stock_market` (
  `id`         INT(11)      NOT NULL AUTO_INCREMENT,
  `symbol`     VARCHAR(10)  NOT NULL,
  `name`       VARCHAR(100) NOT NULL,
  `price`      FLOAT        NOT NULL DEFAULT 100.0,
  `change_pct` FLOAT        NOT NULL DEFAULT 0,
  `history`    LONGTEXT              DEFAULT NULL,
  `updated_at` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_symbol` (`symbol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: stock_holdings (Player investment portfolios and shares owned)
DROP TABLE IF EXISTS `stock_holdings`;
CREATE TABLE `stock_holdings` (
  `id`           INT(11)     NOT NULL AUTO_INCREMENT,
  `character_id` INT(11)     NOT NULL,
  `symbol`       VARCHAR(10) NOT NULL,
  `shares`       INT(11)     NOT NULL DEFAULT 0,
  `avg_cost`     FLOAT       NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_char_symbol` (`character_id`, `symbol`),
  CONSTRAINT `fk_hold_char` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: books (In-game readable books and legal documents)
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id`           INT(11)      NOT NULL AUTO_INCREMENT,
  `author_id`    INT(11)               DEFAULT NULL,
  `title`        VARCHAR(255) NOT NULL,
  `content`      LONGTEXT              DEFAULT NULL,
  `is_published` TINYINT(1)   NOT NULL DEFAULT 0,
  `created_at`   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_author` (`author_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- SECTION: 10. SYSTEM & AUDIT LOGS
-- ============================================================================

-- TABLE: admin_logs (Administrative actions, staff commands and audit trails)
DROP TABLE IF EXISTS `admin_logs`;
CREATE TABLE `admin_logs` (
  `id`         BIGINT(20)   NOT NULL AUTO_INCREMENT,
  `admin_id`   INT(11)               DEFAULT NULL,
  `target_id`  INT(11)               DEFAULT NULL,
  `action`     VARCHAR(100) NOT NULL,
  `reason`     TEXT                  DEFAULT NULL,
  `data`       LONGTEXT              DEFAULT NULL,
  `created_at` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_admin`  (`admin_id`),
  INDEX `idx_target` (`target_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- TABLE: error_logs (Server-side and client-side error telemetry logs)
DROP TABLE IF EXISTS `error_logs`;
CREATE TABLE `error_logs` (
  `id`         BIGINT(20)   NOT NULL AUTO_INCREMENT,
  `resource`   VARCHAR(100)          DEFAULT NULL,
  `error`      TEXT                  DEFAULT NULL,
  `stack`      LONGTEXT              DEFAULT NULL,
  `player_id`  INT(11)               DEFAULT NULL,
  `created_at` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- SECTION: INITIAL SEED DATA
-- ============================================================================

-- SEED: Jobs

INSERT INTO `jobs` (`name`, `label`, `type`, `is_whitelisted`) VALUES
  ('unemployed', 'Unemployed',         'civilian',   0),
  ('police',     'Los Santos Police',  'leo',        1),
  ('ems',        'Emergency Services', 'ems',        1),
  ('mechanic',   'Mechanic',           'civilian',   1),
  ('judge',      'Judge',              'government', 1),
  ('lawyer',     'Lawyer',             'government', 1),
  ('reporter',   'News Reporter',      'civilian',   1),
  ('taxi',       'Taxi Driver',        'civilian',   0),
  ('trucker',    'Trucker',            'civilian',   0),
  ('fisher',     'Fisher',             'civilian',   0);


-- SEED: Job Grades

INSERT INTO `job_grades` (`job_name`, `grade`, `name`, `label`, `salary`) VALUES
  ('unemployed', 0, 'unemployed', 'Unemployed',      200),
  ('police',     0, 'cadet',      'Cadet',           3000),
  ('police',     1, 'officer',    'Officer',         3500),
  ('police',     2, 'senior',     'Senior Officer',  4000),
  ('police',     3, 'corporal',   'Corporal',        4500),
  ('police',     4, 'sergeant',   'Sergeant',        5000),
  ('police',     5, 'lieutenant', 'Lieutenant',      6000),
  ('police',     6, 'captain',    'Captain',         7000),
  ('police',     7, 'deputy',     'Deputy Chief',    8000),
  ('police',     8, 'chief',      'Chief of Police', 10000),
  ('ems',        0, 'trainee',    'Trainee EMT',     2500),
  ('ems',        1, 'emt',        'EMT',             3000),
  ('ems',        2, 'paramedic',  'Paramedic',       3500),
  ('ems',        3, 'nurse',      'Nurse',           4000),
  ('ems',        4, 'doctor',     'Doctor',          5000),
  ('ems',        5, 'chief',      'Chief of EMS',    7000);


-- SEED: Gangs

INSERT INTO `gangs` (`name`, `label`) VALUES
  ('none',     'No Gang'),
  ('ballas',   'Ballas'),
  ('families', 'Families'),
  ('vagos',    'Vagos'),
  ('lost',     'The Lost MC'),
  ('angels',   'Leanbois Angels');

INSERT INTO `gang_grades` (`gang_name`, `grade`, `name`, `label`) VALUES
  ('ballas', 0, 'recruit',  'Recruit'),
  ('ballas', 1, 'gangster', 'Gangster'),
  ('ballas', 2, 'soldier',  'Soldier'),
  ('ballas', 3, 'boss',     'Boss');


-- SEED: Items

INSERT INTO `items` (`name`, `label`, `description`, `weight`, `max_stack`, `useable`, `type`) VALUES
  ('water',          'Water Bottle',    'Stay hydrated',       0.5,  10, 1, 'consumable'),
  ('bread',          'Bread',           'A loaf of bread',     0.3,   5, 1, 'consumable'),
  ('sandwich',       'Sandwich',        'Fills you up',        0.4,   5, 1, 'consumable'),
  ('coffee',         'Coffee',          'A hot cup of coffee', 0.3,   5, 1, 'consumable'),
  ('repairkit',      'Repair Kit',      'Fix your vehicle',    2.0,   3, 1, 'tool'),
  ('lockpick',       'Lockpick',        'Pick locks',          0.1,   5, 1, 'tool'),
  ('phone',          'Phone',           'Your smartphone',     0.2,   1, 1, 'unique'),
  ('wallet',         'Wallet',          'Holds cash',          0.1,   1, 0, 'unique'),
  ('id_card',        'ID Card',         'Proof of identity',   0.1,   1, 0, 'unique'),
  ('driver_license', 'Driver License',  'Drive legally',       0.1,   1, 0, 'unique'),
  ('weapon_pistol',  'Pistol',          'Standard sidearm',    1.5,   1, 1, 'weapon'),
  ('ammo_pistol',    'Pistol Ammo',     'Ammo for pistol',     0.1, 100, 0, 'ammo'),
  ('weed_og',        'OG Kush',         'Premium cannabis',    0.1,  50, 0, 'drug'),
  ('weed_white',     'White Widow',     'High grade cannabis', 0.1,  50, 0, 'drug'),
  ('coke',           'Cocaine',         'Illegal substance',   0.1,  50, 0, 'drug'),
  ('meth',           'Methamphetamine', 'Illegal substance',   0.1,  50, 0, 'drug'),
  ('fentanyl',       'Fentanyl',        'Illegal substance',   0.1,  50, 0, 'drug'),
  ('dirty_money',    'Dirty Money',     'Needs washing',       0.1, 500, 0, 'money'),
  ('black_money',    'Black Money',     'Unmarked bills',      0.1, 500, 0, 'money'),
  ('moonshine',      'Moonshine',       'Homemade liquor',     0.8,  10, 1, 'consumable'),
  ('fishing_rod',    'Fishing Rod',     'For fishing',         2.0,   1, 1, 'tool'),
  ('fish_raw',       'Raw Fish',        'Freshly caught',      1.0,  20, 0, 'food'),
  ('scrap',          'Scrap Metal',     'Recyclable metal',    1.5,  50, 0, 'material'),
  ('bandage',        'Bandage',         'Stop bleeding',       0.2,   5, 1, 'medical'),
  ('morphine',       'Morphine',        'Painkiller',          0.1,   5, 1, 'medical'),
  ('defib',          'Defibrillator',   'Revive someone',      3.0,   1, 1, 'medical'),
  ('medkit',         'Medical Kit',     'Full medical kit',    2.0,   1, 1, 'medical'),
  ('evidence_bag',   'Evidence Bag',    'Collect evidence',    0.1,  10, 1, 'tool'),
  ('handcuffs',      'Handcuffs',       'Detain suspects',     0.5,   2, 1, 'tool');


-- SEED: Stock Market

INSERT INTO `stock_market` (`symbol`, `name`, `price`, `change_pct`) VALUES
  ('CNT', 'Cluckin Bell',           45.20,  1.5),
  ('ECL', 'Eclipse Blvd Corp',     120.50, -0.8),
  ('LSC', 'Los Santos Customs',     89.75,  2.1),
  ('MZB', 'Maze Bank',             210.30, -1.2),
  ('WZF', 'Whiz Wireless',          67.40,  0.4),
  ('PBK', 'Pacific Bank Corp',     155.00,  3.2),
  ('TNK', 'Tequi-la-la Nightclub',  33.90, -2.0),
  ('VNW', 'Vinewood Pictures',      98.10,  1.8);

SET FOREIGN_KEY_CHECKS = 1;
