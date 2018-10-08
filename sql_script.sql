CREATE DATABASE investment_wizard;
USE investment_wizard;

CREATE TABLE indicators(
  indicator_id   INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  indicator_code VARCHAR(100) NOT NULL,
  indicator_name VARCHAR(1000) NOT NULL,
  PRIMARY KEY(indicator_id)		
)ENGINE=InnoDB;

CREATE TABLE countries(
  country_id  INT UNSIGNED NOT NULL AUTO_INCREMENT,
  country_code VARCHAR(100) UNIQUE NOT NULL,
  country_name VARCHAR(1000) NOT NULL,
  PRIMARY KEY(country_id)
)ENGINE=InnoDB;

CREATE TABLE report_data(
  report_id  INT UNSIGNED NOT NULL AUTO_INCREMENT,
  country_code VARCHAR(100) UNIQUE NOT NULL,
  score DECIMAL(7,5) UNSIGNED NOT NULL,
  report_date DATETIME NOT NULL,	
  PRIMARY KEY(report_id),
  FOREIGN KEY(country_code) REFERENCES countries(country_code)
  ON UPDATE CASCADE ON DELETE CASCADE
)ENGINE=InnoDB;


  INSERT INTO countries(country_code,country_name) VALUES ('ken','KENYA');
  INSERT INTO countries(country_code,country_name) VALUES ('ug','UGANDA');
  INSERT INTO countries(country_code,country_name) VALUES ('tz','TANZANIA');
  INSERT INTO countries(country_code,country_name) VALUES ('eth','ETHIOPIA');
  INSERT INTO countries(country_code,country_name) VALUES ('rwa','RWANDA');
  INSERT INTO countries(country_code,country_name) VALUES ('dji','DJIBOUTI');
  INSERT INTO countries(country_code,country_name) VALUES ('eri','ERITREA');
  INSERT INTO countries(country_code,country_name) VALUES ('zmb','ZAMBIA');


INSERT INTO indicators(indicator_code,indicator_name) VALUES ('NY.GDP.MKTP.CD','Gross Domestic Product: Purchasing Power Parity');
INSERT INTO indicators(indicator_code,indicator_name) VALUES ('EG.ELC.ACCS.RU.ZS','Access to Electricity: Rural');
INSERT INTO indicators(indicator_code,indicator_name) VALUES ('EG.ELC.ACCS.UR.ZS','Access to Electricity: Urban');
INSERT INTO indicators(indicator_code,indicator_name) VALUES ('EG.FEC.RNEW.ZS','Renewable Energy Usage');