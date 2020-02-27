var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, res) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.sendStatus(200).json(res);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.get((err, res) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.sendStatus(201).json(res);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

