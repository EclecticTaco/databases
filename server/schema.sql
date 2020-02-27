CREATE DATABASE chat;

USE chat;

CREATE TABLE users (

  userID INT,
  userName VARCHAR(50),
  PRIMARY KEY (userID)

);


CREATE TABLE messages (
  messageID INT,
  messageBody VARCHAR(240),
  roomName VARCHAR(20),
  senderID INT,
  userName VARCHAR(50),
  PRIMARY KEY (messageID),
  FOREIGN KEY (senderID) REFERENCES users(userID)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE friends (

userID1 INT,
userID2 INT,
FOREIGN KEY (userID1) REFERENCES users(userID),
FOREIGN KEY (userID2) REFERENCES users(userID)

);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ERROR 1072 (42000) at line 14: Key column 'senderID' doesn't exist in table