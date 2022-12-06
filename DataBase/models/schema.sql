 DROP DATABASE Vue_Cart ;
CREATE DATABASE Vue_Cart;

USE Vue_Cart;

CREATE TABLE users(
    UserID INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (UserID)
);

CREATE TABLE products (
    productID INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(255),
    price INT,
    image VARCHAR(255),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (productID)
);

CREATE TABLE cart(
    id INT AUTO_INCREMENT NOT NULL,
    BuyerId INT,
    productId INT,
    FOREIGN KEY (BuyerId) REFERENCES users(UserID),
    FOREIGN KEY (productId) REFERENCES products(productID),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);