angular.module('travel')


  .controller('registerControler',function ($scope,$state) {

    
    console.log('register controller start');

    $scope.btnsubmit = function () {
      console.log('Pressed.');
      $state.go('main');
    }

    $scope.btnmain = function () {
      console.log('Pressed.');
      $state.go('main');
    }

  })
