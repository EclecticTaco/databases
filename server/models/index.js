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
      console.log('text to post to SQL: ', text);
      db.query(`INSERT INTO messages (messageBody) VALUES (${text})`, (err) => {
        if (err) {
          callback(err);
        } else {
          callback();
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
      var sql = `INSERT INTO messages (messageBody) VALUES (${text})`;
      db.query(sql, (err, results) => {

        if (err) {
          callback(err, console.log('error at modles post CB'));
        } else {
          callback(null, results);
        }
      });
    }
  }
};

