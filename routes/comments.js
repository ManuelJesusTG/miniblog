var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Comment = require("../models/Comment.js")
var Post = require('../models/Post.js');
var User = require('../models/User.js');
var db = mongoose.connection;

router.get('/', function(req, res, next) {
    Comment.find().sort('-publicationdate').populate('user').exec(function(err, comments) {
        if (err) {
            res.status(500).send(err);
            console.log(err);
        } else res.status(200).json(comments);
    });
});

router.delete('/:id', function(req, res, next) {
    Comment.findByIdAndDelete(req.params.id, function(err, userinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

module.exports = router;