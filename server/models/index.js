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
      console.log('post M', text)
      db.query(`INSERT INTO messages (messageBody) VALUES (${text})`, (err, ) => {
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
      console.log(text);
      db.query(`INSERT INTO users (userName) VALUES (${text})`, (err, results) => {
        console.log('results', results);
        if (err) {
          callback(err, '');
        } else {
          callback(null, text);
        }
      });
    }
  }
};

