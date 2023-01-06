-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema example_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema example_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `example_db` DEFAULT CHARACTER SET utf8 ;
USE `example_db` ;

-- -----------------------------------------------------
-- Table `example_db`.`Location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `example_db`.`Location` (
  `Location_id` INT NOT NULL AUTO_INCREMENT,
  `Location_name` VARCHAR(45) NULL,
  `Street_address` VARCHAR(45) NULL,
  `City` VARCHAR(30) NULL,
  `Zip` INT NULL,
  `Country` VARCHAR(30) NULL,
  PRIMARY KEY (`Location_id`),
  INDEX `ZipIndex` (`Zip` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `example_db`.`Event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `example_db`.`Event` (
  `Event_id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL COMMENT 'Name of an event',
  `Type` VARCHAR(15) NULL COMMENT 'Type = for example: musiiikki, teatteri, jne',
  `Location_Location_id` INT NOT NULL,
  PRIMARY KEY (`Event_id`),
  INDEX `fk_Event_Location1_idx` (`Location_Location_id` ASC),
  CONSTRAINT `fk_Event_Location1`
    FOREIGN KEY (`Location_Location_id`)
    REFERENCES `example_db`.`Location` (`Location_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `example_db`.`Event_date`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `example_db`.`Event_date` (
  `Date` DATE NOT NULL,
  `Event_id` INT NOT NULL,
  PRIMARY KEY (`Event_id`),
  CONSTRAINT `fk_Event_date_Event`
    FOREIGN KEY (`Event_id`)
    REFERENCES `example_db`.`Event` (`Event_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
