angular.module("SuperVillians", [])
    .controller("Evil", EvilController);

EvilController.$inject = ['$http'];

function EvilController ($http) {
    var eCtrl = this;

    eCtrl.greetings = 'Where are my minions?';

  eCtrl.getCharacters = function() {
        console.log("Getting list of characters...");
  

  $http.get('http://placekitten.com/200/300')
            .then(function(response){
            console.log("Response from API: ")
            eCtrl.charList = response.data;
        });
  }
}