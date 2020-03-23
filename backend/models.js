const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
  name: String,
  /*description: String,
  price: Number,
  images: [String],
  props:{
      ps: Number,
      doors: Number,
      age: Number,
  }*/
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);

module.exports = Car;