var express = require('express');
var router = express.Router();
var Duck = require('../models/ducks');

router.get('/duck/:id', function(req, res, next) {
  Duck.findByIdQ(req.params.id)
    .then(function(results) {
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    }).done();
});

router.get('/ducks',function(req, res, next) {
  Duck.findQ()
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    }).done();
    });

router.post('/duck/:name/:age', function(req, res, next){
  new Duck({
    name: req.params.name,
    age: req.params.age
  }).saveQ()
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      rs.json({'message': results});
    }).done();
  });


module.exports = router;
