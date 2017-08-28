var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 3000;
var messages = require('./routes/messages.js')


app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/messages', messages);



var databaseUrl= 'mongodb://localhost:27017/messaging';

mongoose.connect(databaseUrl,
{
    useMongoClient: true
});

mongoose.connection.on('connected', function(){
    console.log('mongoose connection error to:', databaseUrl); 
});
mongoose.connection.on('error', function(err){
    console.log('mongoose connection error to:', err);    
});


app.listen(port, function(){
    console.log('listening at ', port);    
})