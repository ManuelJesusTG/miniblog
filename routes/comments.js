var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Comment = require("../models/Comment.js")
var Post = require('../models/Post.js');
var User = require('../models/User.js');
var db = mongoose.connection;

router.get('/', function(req, res, next) {
    Comment.find().sort('-publicationdate').populate('comment').exec(function(err, comments) {
        if (err) {
            res.status(500).send(err);
            console.log(err);
        } else res.status(200).json(comments);
    });
});


router.post('/', function(req, res, next) {
    Comment.create(req.body, function(err, Commentinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

router.get('/:id', function(req, res, next) {
    Comment.findById(req.params.id, function(err, Commentinfo) {
        if (err) res.status(500).send(err);
        else res.status(200).json(Commentinfo);
    });
});

router.put('/:id', function(req, res, next) {
    Comment.findByIdAndUpdate(req.params.id, req.body, function(err, Commentinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

router.delete('/:id', function(req, res, next) {
    Comment.findByIdAndDelete(req.params.id, function(err, Commentinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

module.exports = router;