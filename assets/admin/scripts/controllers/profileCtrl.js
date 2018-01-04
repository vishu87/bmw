app.controller('profileCtrl', function($scope, $http, profileService, Upload, $timeout) {
	
	$scope.profileData = {};
	$scope.userDetails = {};
	$scope.documents = [];
	$scope.formSuccess = false;
	$scope.formError = false;
	$scope.processing = false;
	$scope.loading = true;
	$scope.picture = '';
	$scope.employee_id = 0;
	$scope.profile_tab = 1;

	$scope.myImage='';
    $scope.myCroppedImage='';
    $scope.uploading=false;

	$scope.profileData = function(){
		profileService.profileData().then(function(data){
			if(data.success){
				$scope.profileData = data.profile;
	    		$scope.userDetails = data.user_details;
	    		$scope.documents = data.user_documents;
	    		
	    		$scope.employee_id = $scope.userDetails.employee_id;
	    		$scope.picture = $scope.userDetails.photograph_thumb;
	    		$scope.loading = false;

			}else{
	    		$scope.formError = data;
			}

		});
	}

	$scope.getStateCountry = function(){
		profileService.getStateCountry().then(function(data){
			if(data.success){
				$scope.states = data.states;
				$scope.countries = data.countries;
			}
		});
	}

	$scope.updateProfile = function(){
		$scope.processing = true;
		$scope.formSuccess = false;
		$scope.formError = false;
		profileService.updateUserData($scope.userDetails).then(function(data){
			if(data.success){
				$scope.profileData = data.profile;
	    		$scope.userDetails = data.user_details;
				$scope.formSuccess = data.message;
			}else{
				$scope.formError = data;

			}
			$scope.processing = false;
		});
	}

	var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage=evt.target.result;
        });
      };
      
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

	$scope.discard = function () {
	 	$scope.myImage='';
    	$scope.myCroppedImage='';
    }

    $scope.upload = function (dataUrl, name) {
	 	$scope.uploading = true;
	 	name = 'image';
	 	var url = base_url+'/upload/photo';
        Upload.upload({
            url: url,
            data: {
                photo: Upload.dataUrltoBlob(dataUrl, name),
                employee_id: $scope.employee_id
            },
        }).then(function (response) {
            $timeout(function () {
                
                $scope.picture = response.data.picture;
                
                $("#profilePic").modal("hide");
                $scope.myImage='';
			    $scope.myCroppedImage='';
			    $scope.uploading=false;
            });
        }, function (response) {
            if (response.status > 0) $scope.errorMsg = response.status 
                + ': ' + response.data;
            $scope.uploading = false;
        }, function (evt) {
            $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
        });
    }

	// $scope.uploadPhoto = function (file) {
	// 	$scope.uploading = true;
	// 	var url = base_url+'/upload/photo';
	// 	console.log($scope.employee_id);
 //        Upload.upload({
 //            url: url,
 //            data: {
 //            	photo: file,
 //            	employee_id: $scope.employee_id
 //            }
 //        }).then(function (resp) {
 //            if(resp.data.success){
 //            	$scope.picture = resp.data.picture;
 //            } else {
 //            	bootbox.alert(resp.data.message);
 //            }
 //            $scope.uploading = false;
 //        }, function (resp) {
 //            console.log('Error status: ' + resp.status);
 //            $scope.uploading = false;
 //        }, function (evt) {
 //            $scope.uploading_percentage = parseInt(100.0 * evt.loaded / evt.total) + '%';
 //        });
 //    };

});
