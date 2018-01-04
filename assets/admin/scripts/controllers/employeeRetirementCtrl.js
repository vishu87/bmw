app.controller('employeeRetirementCtrl',function($scope ,$timeout , $http ,RetirementService,Upload){
	$scope.formData = {
		"type":"",
		"ret_reg_date":"",
		"remarks":"",
		"attachments":""
	};
	$scope.employeeRetirement = [];
	$scope.processing = false;
	$scope.employee_id = 0;
	$scope.form_success = false;
	$scope.form_error = false;
	$scope.attachments = '';

	$scope.uploadFile = function (file,name) {
		$scope['uploading_'+name] = true;
		var url = base_url+'/api/upload/file';
        Upload.upload({
            url: url,
            data: {
            	media: file
            }
        }).then(function (resp) {
            if(resp.data.success){
            	$scope.formData[name] = resp.data.media;
            	$scope[name] = resp.data.media;
            	console.log($scope[name]);
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
    	$scope.formData[file_name] = '';
    }


	
	$scope.employeeRetirement = function(){
		RetirementService.employeeRetirement($scope.employee_id).then(function(data){
	   		$scope.employeeRetirement = data.employeeRetirement;
	   	});
	}

   	$scope.submitRetirement = function(data){
   		$scope.form_success = false;
		$scope.form_error = false;

   		if($scope.employee_id != 0){
   			$scope.processing = true;
	   		RetirementService.submitRetirement($scope.employee_id,data).then(function(data){
	   			console.log(data);
		   		$scope.employeeRetirement = data.employeeRetirement;
	   			$scope.processing = false;
		   		if(data.success){
		   			$scope.form_success = data.message;
		   			$scope.formData = {};
		   		}else{
		   			$scope.form_error = data.message;
		   		}

		   	});
   		}
   		$timeout(function(){
   			$scope.processing = false;
   		},4000);
   		$scope.attachments = '';
   	}

   	$scope.deleteRetirement = function(index,emp_ret_id){
		$scope.processing = true;
		RetirementService.deleteRetirement(emp_ret_id).then(function(data){
    		if(data.success){
				$scope.employeeRetirement.splice(index , 1);
    			$scope.form_success = data.message;
    		}else{
    			$scope.form_error = data.message;

    		}
			$scope.processing =false;
		});

	}

});