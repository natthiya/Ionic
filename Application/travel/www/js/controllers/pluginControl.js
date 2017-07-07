angular.module('MySocial')

  .controller('pluginController',function ($scope) {

    $scope.btnAlert = function(){
      console.log('btnAlert');
    };

    $scope.btnConfirm = function(){
      console.log('btnConfirm');
    };

    $scope.btnVibrate = function(){
      console.log('btnVibrate');
    };

    $scope.btnBeep = function(){
      console.log('btnBeep');
    }

  });
