app.controller('MessagingController', ['MessagingService', function(MessagingService){

var self = this;

self.messages=MessagingService.messages;


self.submitMsg = function (){
    console.log('button was clicked');
    
        console.log('submiting messages from the controller', self.newMessage )
        MessagingService.submit(self.newMessage);
};



}]);//end of app.controller