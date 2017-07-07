angular.module('travel')


  .controller('loginControler',function ($scope,$state,$http) {
    console.log('login controller start');

    $scope.btnmain = function () {
      console.log('Pressed.');
      $state.go('main');
    }

    $scope.btnregister = function () {
      console.log('Pressed.');
      $state.go('register');
    }

    $scope.from ={};

    $scope.btnLogin = function () {
      console.log($scope.from.txt_usr);
      console.log($scope.from.txt_pwd);
      //console.log('Pressed.');

      $http(
        {
          url:'http://localhost/sample_website/webservice/ws_login.php',
          method:'POST',
          data:{
            'var_username':$scope.from.txt_usr,
              'var_password':$scope.from.txt_pwd

          }
        }
      ).then(function(response) {
          console.log(response);
        console.log(response.data.results);
        if(response.data.results == 'success_login'){
          $state.go('main');
        }
      },function(error) {
          console.log(error)
      });
    }
  })
