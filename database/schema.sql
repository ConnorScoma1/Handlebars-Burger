CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
	id INT NOT NULL auto_increment,
    burger_name VARCHAR(20) NOT NULL,
    eat BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);
