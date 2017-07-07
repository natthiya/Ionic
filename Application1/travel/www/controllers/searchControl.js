angular.module('travel')


  .controller('searchControler',function ($scope,$state) {
    console.log('Search controller start');


    $scope.btnhome = function () {
      console.log('Pressed.');
      $state.go('home');
    }

    $scope.btnsearch = function () {
      console.log('Pressed.');
      $state.go('search');
    }

    $scope.btnsetting = function () {
      console.log('Pressed.');
      $state.go('setting');
    }

    $scope.btncompose = function () {
      console.log('Pressed.');
      $state.go('compose');
    }

    $scope.btnlist= function () {
      console.log('Pressed.');
      $state.go('list');
    }

  })
