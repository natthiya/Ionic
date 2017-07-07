angular.module('MySocial', ['ionic','ngCordova'])

.run(function($ionicPlatform,$ionicPopup) {

  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .config(function ($stateProvider,$urlRouterProvider) {

    $stateProvider

    .state('list',{
      url:'/list',
      templateUrl:'templates/list.html',
     controller:'listController'
    })



    .state('detail',{
     url:'/detail:{name}/{nick}/{social}/{mobile}',
      templateUrl:'templates/detail.html',
      controller:'detailController'
    })



      .state('plugin',{
        url:'/plugin',
        templateUrl:'templates/plugin.html',
        controller:'pluginController'
      })

      .state('camera',{
        url:'/camera',
        templateUrl:'templates/camera.html',
        controller:'cameraController'
      })

    $urlRouterProvider.otherwise('/detail')

  });
