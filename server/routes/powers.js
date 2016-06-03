var express = require('express');
var router = express.Router();
var path = require('path');
var Power = require('../models/powerModel');

router.post('/', function (req, res) {
  var power = new Power(req.body);
  power.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

router.get('/', function (req, res) {
  Power.find({}, function (err, powers) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(powers);
  });
});

module.exports = router;
