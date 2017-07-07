angular.module('travel')

  .controller('homeControler',function ($scope,$state,$http) {
    console.log('Home controller start');

    $http.get('http://localhost/timetotravel/web/content').then(function(response){
      console.log(response);
      $scope.myDataArray = response.data.items;
    },function(error){
      console.log(error);
    });

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

    $scope.btnviewscompos = function (data) {
      console.log(data);
      console.log('Pressed.');
      $state.go('present',{name:data.name,nickname:data.nickname,social:data.social,mobile:data.mobile});
    }

  })
