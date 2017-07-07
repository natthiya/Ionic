// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('travel', ['ionic','ngCordova'])

.config(function ($stateProvider,$urlRouterProvider) {
  var db;
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginControler'
    })

    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'mainControler'
    })

    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'registerControler'
    })

    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeControler'

    })

  .state('compose', {
    url: '/compose',
    templateUrl: 'templates/compose.html',
    controller: 'composeControler'
  })

  .state('search', {
    url: '/search',
    templateUrl: 'templates/search.html',
    controller: 'searchControler'
  })

  .state('setting', {
    url: '/setting',
    templateUrl: 'templates/setting.html',
    controller: 'settingControler'
  })


    .state('present', {
      url:'/present',
      templateUrl: 'templates/present.html',
      controller: 'presentControler'
    })


  .state('list', {
    url: '/list',
    templateUrl: 'templates/list.html',
    controller: 'listControler'

  });



  $urlRouterProvider.otherwise('/main')
})
