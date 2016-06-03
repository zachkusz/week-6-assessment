var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PowerSchema = new Schema({
  power_name: String
});

var Power = mongoose.model('Power', PowerSchema);

module.exports = Power;
