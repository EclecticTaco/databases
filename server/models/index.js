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
    post: function (text, callback) {
      console.log('text:', text, 'db:', db);
      db.connection.query(`INSERT INTO messages (messageBody) VALUES (${text})`, (err, text) => {
        if (err) {
          callback(err, '');
        } else {
          callback(null, text);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.connection.query('SELECT * FROM users', (err, results, fields) => {
        if (err) {
          callback(err, '');
        } else {
          callback(null, results);
        }
      });
    },
    post: function (text, callback) {
      db.query(`INSERT INTO users (userName) VALUES (${text})`, (err, text) => {
        if (err) {
          callback(err, '');
        } else {
          callback(null, text);
        }
      });
    }
  }
};

