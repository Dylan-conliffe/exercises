angular.module('friends',[])
.controller('friendsbutt',friendsbuttController);

function friendsbuttController (){
var fbutton = this;
 fbutton.friendclick = friendclick;

function friendclick(){
    console.log.apply ("clicked")
   
}

}

