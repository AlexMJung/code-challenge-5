var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messagesSchema = new Schema({
    message: {type: String, default: 'no message'},
    name: { type: String, default: 'no name' }
});

module.exports= mongoose.model('messages', messagesSchema);