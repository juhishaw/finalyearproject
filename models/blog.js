var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var user = require('./models/user');
var blogSchema = new Schema({
    title: {
        type: String,
        Required: 'Required to link Title'
    },
    post: {
        type: String,
        Required: 'Required to link post of title'
    },
    user_id: {
        type: number,
    }
});
console.log("yes");

module.exports = mongoose.model('blog', blogSchema);