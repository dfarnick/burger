CREATE DATABASE burgers_db;
-- switch to or use burgers_db --
USE burgers_db;
-- create table burgers --
CREATE TABLE burgers
(
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255)NOT NULL,
    devoured BOOLEAN DEFAULT FALSE
);