var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('../models/User.js');
var Post = require('../models/Post.js');

var CommentSchema = new Schema({
    post: {
        type: Schema.ObjectId,
        ref: 'Post'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    texto: String,
    publicationdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);
