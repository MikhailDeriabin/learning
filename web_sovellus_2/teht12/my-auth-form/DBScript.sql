CREATE TABLE user(
    username VARCHAR(100) NOT NULL PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    created_date TIMESTAMP DEFAULT NOW()
);

CREATE TABLE userData(
    username VARCHAR(100) NOT NULL PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(255),
    FOREIGN KEY (username) REFERENCES user(username)
);