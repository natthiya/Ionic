angular.module('MySocial')

  .controller('cameraController',function ($scope,$cordovaCamera){

    $scope.btnCamera = function(){
      console.log('btnCamera');
     var options = {
     quality: 50,
     destinationType: Camera.DestinationType.DATA_URL,
     sourceType: Camera.PictureSourceType.CAMERA,
     allowEdit: true,
     encodingType: Camera.EncodingType.JPEG,
     targetWidth: 500,
     targetHeight: 500,
     popoverOptions: CameraPopoverOptions,
     saveToPhotoAlbum: false,
   correctOrientation:true
   };

   $cordovaCamera.getPicture(options).then(function(imageData) {
     var image = document.getElementById('myImage');
     image.src = "data:image/jpeg;base64," + imageData;
   }, function(err) {
     // error
   });

    };

    $scope.btnGallery = function(){
      console.log('btnGallery');

      var options = {
     quality: 50,
     destinationType: Camera.DestinationType.DATA_URL,
     sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
     allowEdit: true,
     encodingType: Camera.EncodingType.JPEG,
     targetWidth: 500,
     targetHeight: 500,
     popoverOptions: CameraPopoverOptions,
     saveToPhotoAlbum: false,
   correctOrientation:true
   };

   $cordovaCamera.getPicture(options).then(function(imageData) {
     var image = document.getElementById('myImage');
     image.src = "data:image/jpeg;base64," + imageData;
   }, function(err) {
     // error
   });
 };
    $scope.btnUpload = function(){
      console.log('btnUpload');
      var img = document.getElementById('myImage');
      var imageURI = img.src;

      var server = "http:senchabox.com/ionic/www_upload777/upload.php";
      var trustHosts = true;

      var options = {};

      $cordovaFileTransfer.upload(server, imageURI, options)
           .then(function(result) {

           $cordovaDialogs.alert('Upload Status','Complete','OK')
           .then(function(){
             img.scr = 'img/camera_art.jpg';
           });
           //success
         },function(err){
          // Error
         },function(proqress){
         });



    }
  });
