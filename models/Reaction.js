const { Schema, model } = require('mongoose');

// Schema for what makes up a comment
const reactionSchema = new Schema({
    text: String,
    // TODO: Emoji? or string?
    username: String,
  });
  
  // Initialize the Reaction model
  const Reaction = model('reaction', reactionSchema);
  
  module.exports = Reaction;