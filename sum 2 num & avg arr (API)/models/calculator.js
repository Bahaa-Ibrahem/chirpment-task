const mongoose = require('mongoose');

const NumberOne = mongoose.model('Number', new mongoose.Schema({
  num1: {
    type: Number,
    min: 0
  },
  num2: {
    type: Number,
    min: 0
  },
  numbers: {
    type: Array,
    min: 0
  }
})
);

exports.Number = NumberOne; 
