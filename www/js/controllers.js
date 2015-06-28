angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('HomeTabCtrl', function($scope, $ionicModal,  $ionicActionSheet) {
  console.log('HomeTabCtrl');

  $ionicModal.fromTemplateUrl('templates/mylongform.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
  $scope.maleModal = function(){
    $scope.modal.show();
  }
  $scope.closeModal = function(){
    $scope.modal.hide();
  }

    $scope.closeModal2 = function(){
    $scope.modal2.hide();
  }
  $ionicModal.fromTemplateUrl('templates/mylongform2.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal2) {
      $scope.modal2 = modal2;
    });
   $scope.femaleModal = function(){
    $scope.modal2.show();
  }

  $scope.score = 100


  $scope.reduce = function(){
    console.log("DSwd");
    $scope.score = $scope.score -20;
  }

  $scope.increase = function(){
    console.log("DSwd");
    $scope.score = $scope.score +20;
  }
  $scope.show = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'Wrong Answer' },
       { text: 'Wrong choice' }
     ],

     cancelText: 'Condom',
     cancel: function() {
          $scope.score = $scope.score + 20
        },
     buttonClicked: function(index) {
       $scope.score = $scope.score - 20;
     }
   });

  };

 document.getElementById('audio').play();

});
