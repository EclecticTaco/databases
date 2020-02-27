var db = require('../db');
var express = require('express');

module.exports = {
  messages: {
    get: function (callback) {
      connection.query('SELECT * FROM messages', (err, results, fields) => {
        if (err) {
          callback(err, '');
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (text, callback) {
      connection.query(`INSERT INTO messages (messageBody) VALUES (${text})`, (err, text) => {
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
    get: function () { },
    post: function () { }
  }
};

