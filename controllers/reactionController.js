const { Reaction, Post, Friend } = require('../models');

module.exports = {
  getReactions(req, res) {
    Reaction.find()
      .then((reaction) => res.json(reaction))
      .catch((err) => res.status(500).json(err));
  },
  //TODO more with reactions
};