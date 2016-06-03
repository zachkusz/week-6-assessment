var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HeroSchema = new Schema({
  alias: String,
  first_name: String,
  last_name: String,
  city: String,
  power_name: String
});

var Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero;
