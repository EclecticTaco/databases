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
      var text = req.body.messageBody;
      models.messages.post(text, (err, text) => {
        if (err) {
          console.log('ERROR in controller post', err);
          res.sendStatus(400);
          res.end(err);
        } else {
          console.log('controller posted: ');
          console.log('text var in controller post:', text);
          res.sendStatus(201);
          res.end(err, text);

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
      models.users.post(req.body.userName, (err, results) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.sendStatus(201);

        }
      });
    }
  }
};

