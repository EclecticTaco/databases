var models = require('../models');
var express = require('express');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.sendStatus(200);
          // console.log(results);
          res.end(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post((err, text) => {
        if (err) {
          res.sendStatus(400);
        } else {
          console.log('posted message');
          res.sendStatus(201);
          res.end();

        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.sendStatus(200);
          res.end(results);
        }
      });
    },
    post: function (req, res) {
      models.users.post((err, results) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.sendStatus(201);
          res.end();
        }
      });
    }
  }
};

