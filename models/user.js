var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var blog = require('./models/blog');
// set up a mongoose model
module.exports = mongoose.model('User', new Schema({
//    user_id: number,
    username: String,
    email: String,
    password: String,
    comment: String,
    rating: Number
}));