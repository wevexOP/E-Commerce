
DROP DATABASE IF EXISTS ecommerce_db;

CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE category (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  category_name VARCHAR(300) NOT NULL,
);

CREATE TABLE product (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  price DECIMAL NOT NULL,
  CHECK (price >= 0),
  stock INTEGER NOT NULL DEFAULT 10,
  category_id INTEGER,
  CONSTRAINT product_fk0 FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE tag (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  tag_name VARCHAR(300) NOT NULL,
);

CREATE TABLE product_tag (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_id INTEGER,
  CONSTRAINT product_tag_fk0 FOREIGN KEY (product_id) REFERENCES product(id),
  tag_id INTEGER,
  CONSTRAINT product_tag_fk1 FOREIGN KEY (tag_id) REFERENCES tag(id)
);


