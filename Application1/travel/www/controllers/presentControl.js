angular.module('travel')


  .controller('presentControler',function ($scope,$state,$stateParams) {
    console.log('DETAIL START.');
    console.log($stateParams);

    $scope.txtName = $stateParams.name;
    $scope.txtNickName = $stateParams.nickname;
    $scope.txtSocial = $stateParams.social;
    $scope.txtMobile = $stateParams.mobile;

  })
