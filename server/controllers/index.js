var models = require('../models');
var express = require('express');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          res.sendStatus(400);
        } else {
          console.log('get message')
          res.sendStatus(200);
          // console.log(results);
          res.end(results.toString());
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log('REQ', req.body.messageBody)
      models.messages.post(req.body.messageBody,(err, text) => {
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
          console.log('get user:')
          res.sendStatus(200);
          res.end(results.toString());
        }
      });
    },
    post: function (req, res) {
      models.users.post(req.body.userName, (err, results) => {
        // console.log(req.body.userName)
        if (err) {
          console.log('post users')
          res.sendStatus(400);
        } else {
          res.sendStatus(201);

        }
      });
    }
  }
};

