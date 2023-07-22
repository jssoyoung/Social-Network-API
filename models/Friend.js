const { Schema, model } = require('mongoose');

const friendSchema = new Schema({
    text: String,
    username: String,
  });
  
  // Initialize the Friend model
  const Friend = model('friend', friendSchema);
  
  module.exports = Friend;