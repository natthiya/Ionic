angular.module('travel')


  .controller('composeControler',function ($scope,$state,$cordovaCamera) {
    console.log('Compose controller start');


    $scope.btnhome = function () {
      console.log('Pressed.');
      $state.go('home');
    };

    $scope.btnsearch = function () {
      console.log('Pressed.');
      $state.go('search');
    };

    $scope.btnsetting = function () {
      console.log('Pressed.');
      $state.go('setting');
    };

    $scope.btncompose = function () {
      console.log('Pressed.');
      $state.go('compose');
    };

    $scope.btnlist= function () {
      console.log('Pressed.');
      $state.go('list');
    };

    $scope.btncamara= function () {
      console.log('camara Ok');
      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
       // allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 1000,
        targetHeight: 500,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('camara');
        image.src = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
      });
    };

    $scope.btnGallery= function () {
      console.log('Gallrary Ok');
      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
       // allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 1000,
        targetHeight: 500,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation: true
      };

      $cordovaCamera.getPicture(options).then(function (imageData) {
        var image = document.getElementById('Gallery');
        image.src = "data:image/jpeg;base64," + imageData;
      }, function (err) {
        // error
      });
    }

  });
