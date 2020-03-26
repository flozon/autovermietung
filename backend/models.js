const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
  name: String,
  description: String,
  power: Number,
  age: Number,
  main_picture: String,
  add_picture: [String]
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);

module.exports = Car;