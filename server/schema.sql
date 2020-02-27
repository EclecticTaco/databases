CREATE DATABASE chat;

USE chat;

CREATE TABLE users (

  userID INT, username VARCHAR(50), PRIMARY KEY (userID);

);


CREATE TABLE messages (
  messageID INT, messageBody VARCHAR(240), roomName VARCHAR(20), FOREIGN KEY (senderID), REFERENCES (users(userID));
);

/* Create other tables and define schemas for them here! */

CREATE TABLE friends (

FOREIGN KEY (userID1) REFERENCES users(userID), FOREIGN KEY (userID2) REFERENCES users(userID);

);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

