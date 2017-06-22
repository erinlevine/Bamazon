CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  PRIMARY KEY (id),
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- unique id for each product --
  item_id INTEGER(30) NOT NULL,
  -- name of product--
  product_name VARCHAR(30) NOT NULL,
  -- name of department --
  department_name VARCHAR(30) NOT NULL,
  -- price for product --
  price INTEGER(200) NOT NULL,
  -- how many items are in stock
  stock_quantity INTEGER(200) NOT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4472, "Ruby's Rockin' Rawhide", "Pet Supplies", 15, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1702, "Eileen's Edible Eclairs", "Baking", 10, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1305, "Peter's Plain Pajamas", "Sleepwear", 25, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1172, "Michelle's Music Machine", "Technology", 100, 3);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5563, "Paula's Player Piano", "Music", 250, 1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8735, "Diane's Devilish Deep Fryer", "Baking", 100, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3571, "Maggie's Magnificent Magnets ", "Houseware", 3, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4582, "Brianne's Brilliant Bananas", "Grocery", 5, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9592, "Sam's Splendid Sandwich", "Grocery", 7, 3);

SELECT * FROM products;





