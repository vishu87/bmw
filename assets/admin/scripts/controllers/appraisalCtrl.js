app.controller('appraisalCtrl',function($scope , $http ,AppraisalService,Upload){
	$scope.appraisalData = {};
	$scope.appraisalData.attachment = '';
	$scope.form_error = false;
	$scope.form_success = false;
	$scope.processing = false;
	$scope.employeeAppraisals = [];
	$scope.employee_arr = [];
	$scope.position_arr = [];
	$scope.department_arr = [];
	$scope.appraisal_id = 0;


    $scope.onSubmit = function(check){
    	$scope.processing = true;
	    $scope.form_error = '';
	    $scope.form_success = '';
		data = $scope.appraisalData;
		// console.log(data);
		AppraisalService.submitAppraisal(data,$scope.appraisal_id).then(function(data){
			// console.log(data);
			if(data.success){
				location.href = base_url + data.redirect_url;
				$d
			}else{
	    		$scope.form_error = data;
			}
			$scope.processing = false;
		});
	}

	$scope.initials = function(){
		AppraisalService.initials().then(function(data){
			$scope.employee_arr = data.employee_arr;
			$scope.position_arr = data.position_arr;
			$scope.department_arr = data.department_arr;
		});
		console.log($scope.appraisal_id);
		if($scope.appraisal_id != 0){
			AppraisalService.getAppraisalData($scope.appraisal_id).then(function(data){
				$scope.appraisalData = data.appraisalData;
				console.log(data);
			});
		}
	}

	$scope.listing = function(){
		AppraisalService.listing().then(function(data){
			$scope.employeeAppraisals = data.employeeAppraisals;
			console.log(data);
		});

		
	}

	$scope.uploadFile = function (file, name) {
		console.log(name);
		$scope['uploading_'+name] = true;
		var url = base_url+'/api/upload/employeeDocument';
        Upload.upload({
            url: url,
            data: {
            	media: file
            }
        }).then(function (resp) {
            if(resp.data.success){
            	$scope.appraisalData[name] = resp.data.media;
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
    	$scope.appraisalData[file_name] = '';
    }

    $scope.deleteAppraisal = function(index,appraisal_id){
		$scope.processing = true;
		AppraisalService.deleteAppraisal(appraisal_id).then(function(data){
    		if(data.success){
				$scope.employeeAppraisals.splice(index , 1);
    			$scope.formSuccess = data.message;
    		}else{
    			$scope.formError = data.message;

    		}
			$scope.processing =false;
		});

	}

});