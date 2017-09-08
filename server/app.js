var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var messages = require('./routes/messages.js')


app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/messages', messages);

var databaseURI = '';
// process.env.MONGODB_URI will only be defined if you are running on Heroku
if (process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    databaseURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    databaseURI = 'mongodb://localhost:27017/messaging';
}

mongoose.connect(databaseURI);
{
    useMongoClient: true
};

mongoose.connection.on('connected', function(){
    console.log('mongoose connection error to:', databaseURI); 
});
mongoose.connection.on('error', function(err){
    console.log('mongoose connection error to:', err);    
});


app.listen(port, function(){
    console.log('listening at ', port);    
})