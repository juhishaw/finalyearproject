var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var blog = new Schema({
    categ: {
      type: String
    },
    title: {
        type: String
    },
    
    text: {
    type: String
}
});
module.exports = mongoose.model('blog', blog);