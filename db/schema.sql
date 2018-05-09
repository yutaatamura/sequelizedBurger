DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int AUTO_INCREMENT,
    burger_name varchar(30) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Salmon Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES("Turky Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES("Avocado Bacon Burger", false);