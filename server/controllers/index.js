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
          res.end(results.toString());
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var sqlObj = {
        userName: req.body.userName,
        messageBody: req.body.messageBody,
        roomName: req.body.roomName
      };
      models.messages.post(sqlObj, (err, sqlObj) => {
        if (err) {
          res.sendStatus(400);
          res.end(err);
        } else {
          res.sendStatus(201);
          res.end(err, sqlObj);

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
          res.end(results.toString());
        }
      });
    },
    post: function (req, res) {
      var text = req.body.userName;
      models.users.post(text, (err, results) => {
        if (err) {
          console.log('error at controller user POST: ', err);
          res.sendStatus(400);
        } else {
          res.sendStatus(201);
          res.end(results.toString());
        }
      });
    }
  }
};

