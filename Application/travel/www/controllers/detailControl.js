angular.module('MySocial')

.controller('detailController',function ($scope,$state,$stateParams,$ionicPopup) {

  console.log('DETAIL START.');
  console.log($stateParams);

  $scope.txtName = $stateParams.name;
  $scope.txtNickName = $stateParams.nick;
  $scope.txtSocial = $stateParams.social;
  $scope.txtMobile = $stateParams.mobile;

  $scope.btnBack = function () {
    console.log('back pressed.');
    $state.go('list');
  }

  $scope.btnCall = function () {
    console.log('btn Calling.......');

    var confirmPopup = $ionicPopup.confirm({
      title: 'Call',
      template: $stateParams.mobile
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('OK');
      } else {
        console.log('Cancel');
      }
    });

  }
})
