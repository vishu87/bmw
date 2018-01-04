app.controller('outwardCtrl',function($scope , $http ,OutwardService, $timeout, Upload){
	
	$scope.outwards = [];
	$scope.outward_dispatches = [];
	$scope.departments = [];
	$scope.outwardData = {};
	$scope.formError = false;
	$scope.formSuccess = false;
	$scope.outward_id = 0;
	$scope.processing = false;
	$scope.file_outward = '';
	$scope.outward_access = false;
	$scope.postDispatchData = {};

    $scope.fetch_outwards = function(){
		OutwardService.outwards().then(function(data){
			if(data.success){
				$scope.outwards = data.outwards;
			}else{
	    		$scope.formError = data;
			}
		});
	}

	$scope.initialize = function(){
		
		OutwardService.getInitials().then(function(data){
			
			$scope.user_rights = data.user_rights;
			$scope.transport_types = data.transport_types;
			$scope.outward_status = data.outward_status;
			for (var i = data.user_rights.length - 1; i >= 0; i--) {

				if(data.user_rights[i] == 1){

					$scope.outward_access = true;
				}

				if(data.user_rights[i] == 4){

					$scope.outward_access = true;
				}

				if(data.user_rights[i] == 6){

					$scope.outward_access = true;
				}

			}

		});

		if($scope.outward_id != 0){
			OutwardService.getOutwardData($scope.outward_id).then(function(data){
				$scope.outwardData = data.outward;
				$scope.file_outward = data.outward.attachment;
			});
		}

	}

	$scope.onSubmit = function(check){
    	$scope.processing = true;
	    $scope.formError = '';
	    $scope.formSuccess = '';
	    $scope.outwardData['file_outward'] = $scope.file_outward;
		data = $scope.outwardData;

		OutwardService.submitOutward($scope.outward_id , data).then(function(data){
			if(data.success){

				if($scope.outward_id != 0){
					$scope.outwardData = data.outwardData;
				}else{
					$scope.outwardData = {};
				}
				location.href = data.redirect_url;

	    		$scope.formSuccess = data.message;
	    		
			}else{
	    		$scope.formError = data;

			}
			$timeout(function() {

    			$scope.processing = false;
			}, 2000);

		});
	}

	$scope.postOutward = function(check){
    	$scope.processing = true;
	    $scope.formError = '';
	    $scope.formSuccess = '';
	    
		data = $scope.postDispatchData;
		console.log(data);

		OutwardService.postOutward($scope.outward_id , data).then(function(data){
			if(data.success){

				$scope.postDispatchData = {};
				$scope.outward_dispatches = data.outward_dispatches;
	    		$scope.formSuccess = data.message;
	    		
			}else{
	    		$scope.formError = data;

			}
			$scope.processing = false;
			

		});
	}

	$scope.outwardDetails = function(outward_id){
		if(outward_id != 0){
			OutwardService.getOutwardDispatches(outward_id).then(function(data){
				$scope.outward_dispatches = data.outward_dispatches;
				console.log($scope.outward_dispatches.length);
			});
		}
	}

	$scope.deleteOutward = function(index,outward_id){
		$scope.processing = true;
		OutwardService.deleteOutward(outward_id).then(function(data){
    		if(data.success){
				$scope.outwards.splice(index , 1);
    			$scope.formSuccess = data.message;
    		}else{
    			$scope.formError = data.message;
    		}
    		$scope.processing = false;
		});

	}

	$scope.deleteDispatch = function(index,dispatch_id){
		$scope.processing = true;
		OutwardService.deleteDispatch(dispatch_id).then(function(data){
    		if(data.success){
				$scope.outward_dispatches.splice(index , 1);
    			$scope.formSuccess = data.message;
    		}else{
    			$scope.formError = data.message;
    		}
    		$scope.processing = false;
		});

	}

		
	$scope.uploadFile = function (file, name) {
		$scope['uploading_'+name] = true;
		var url = base_url+'/api/upload/file';
        Upload.upload({
            url: url,
            data: {
            	media: file
            }
        }).then(function (resp) {
            if(resp.data.success){
            	$scope.outwardData[name] = resp.data.media;
            	$scope[name] = resp.data.media;
            } else {
            	alert(resp.data.message);
            }
            $scope['uploading_'+name] = false;
        }, function (resp) {
            console.log('Error status: ' + resp.status);
            $scope['uploading_'+name] = false;
        }, function (evt) {
            $scope.uploading_percentage = parseInt(100.0 * evt.loaded / evt.total) + '%';
        });
    }

    $scope.removeFile = function(file_name){
    	$scope[file_name] = '';
    	$scope.outwardData[file_name] = '';
    }

});