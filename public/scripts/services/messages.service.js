app.service('MessagingService', ['$http', function ($http){
    var self = this;

    self.messages ={ list: []};

    self.getMessages = function(){
        console.log('getMessages was hit at service');
        $http.get
        ('/messages').then(function(response){
            self.messages.list= response.data;
        });
    }// end of self.getMessages

    self.submit = function(newMessage){
        console.log('going to send this object to the server', newMessage);
        $http.post('/messages', newMessage).then(function (response){
            console.log('response:',response)
            self.getMessages();
        });  
    };//end of self.submit


self.getMessages()

}]) //end of app.service