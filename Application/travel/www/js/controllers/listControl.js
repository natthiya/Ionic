angular.module('MySocial')

.controller('listController',function ($scope,$state) {

  $scope.myDataArray = [
    {
      name:'Phongsak Thomthitchong',
      nick:'Bank',
      social:'fb.com/senchaboxdev',
      mobile:'086-979-7070'
    },
    {
      name:'Wichai Thomthitchong',
      nick:'Dad',
      social:'youtube.com/senchabox',
      mobile:'1234567890'
    },
    {
      name:'Nakrit Thomthitchong',
      nick:'Namo',
      social:'senchabox.com',
      mobile:'0987654321'
    }
  ]

  $scope.btnDetail = function (data) {
    console.log(data);
    console.log('Pressed.');
    $state.go('detail',{name:data.name,nick:data.nick,social:data.social,mobile:data.mobile});
  }
})
