var db = require('../db');
var express = require('express');

module.exports = {

  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', (err, results, fields) => {
        if (err) {
          callback(err, '');
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (sqlObj, callback) {

      db.query('INSERT INTO messages (messageBody, roomName, userName) VALUES(?,?,?);', [sqlObj.messageBody, sqlObj.roomName, sqlObj.userName], (err, results) => {
        if (err) {
          console.log('error at models POST: SQL ERROR!');
          callback(err);
        } else {
          callback(null, results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', (err, results, fields) => {
        if (err) {
          callback(err, '');
        } else {
          callback(null, results);
        }
      });
    },
    post: function (text, callback) {
      db.query(`INSERT INTO users (userName) VALUES (${text})`, (err, results) => {
        if (err) {
          callback(err, '');
        } else {
          callback(null, text);
        }
      });
    }
  }
};

