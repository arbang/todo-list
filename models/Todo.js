const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  task: {
    type: String,
    required: true,
    unique: true
  },
  completed: {
    type: Boolean,
    required: false,
    default: false
  }
});

module.exports = mongoose.model('todo', TodoSchema);
