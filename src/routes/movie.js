const Ulti = require('../ulti')
const movieRouters = require('express').Router();

// Require Movie model in our routes module
var Movie = require('../models/Movie');

// Defined store route
movieRouters.route('/add').post((req, res, next) => {
    var item = new Movie(req.body);
    item.save()
    .then(item => {
      res.status(200).json(item);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  });

// Defined get data(index or listing) route
movieRouters.route('/').get(function (req, res) {
    Movie.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Defined delete | remove | destroy route
movieRouters.route('/delete/:id').get(function (req, res) {
    Movie.findByIdAndRemove({_id: req.params.id}, function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = movieRouters;
