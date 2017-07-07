angular.module('travel')

  .controller('mainControler',function ($scope,$state) {
  console.log('main controller start');

  $scope.btngologin = function () {
    console.log('Pressed.');
    $state.go('login');
  }

    $scope.btnhome = function () {
      console.log('Pressed.');
      $state.go('home');
    }

})
