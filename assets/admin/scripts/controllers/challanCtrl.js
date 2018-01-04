app.controller('challanCtrl',function($scope , $http ,ChallanService,Upload){
	$scope.challans = [];
	$scope.categories = [];
	$scope.formData = {};
	$scope.formData.document = '';

	$scope.initials = function(){
		ChallanService.initials().then(function(data){
			if(data.success){
				$scope.challans = data.challans;
				$scope.categories = data.categories;
				console.log(data);
			}
		});
	}

	$scope.addChallan = function(){
		$scope.formData = {};
		$scope.formData.document = '';

		$("#addChallan").modal("show");
	}

	$scope.editChallan = function(challan){
		$scope.formData = challan;
		$("#addChallan").modal("show");
	}

	$scope.addChallanData = function(){
		$scope.processing = true;
		ChallanService.addChallanData($scope.formData).then(function(data){
			if(data.success){
				if($scope.formData.id && $scope.formData.id != 0){
					for (var i = $scope.challans.length - 1; i >= 0; i--) {
						if($scope.challans[i]['id'] == data.challan.id){
							$scope.challans[i] == data.challan;
						}
					}
				}else{
					$scope.challans.push(data.challan);
				}
				$("#addChallan").modal("hide");
			}else{

			}
			$scope.processing = false;
		});
	}

	$scope.uploadFile = function (file, name, formData) {
		formData.uploading = true;
		var url = base_url+'/api/upload/file';
        Upload.upload({
            url: url,
            data: {
            	media: file
            }
        }).then(function (resp) {
        	console.log(resp);
            if(resp.data.success){
            	formData.document = resp.data.media;
            } else {
            	alert(resp.data.message);
            }
            formData.uploading = false;
        }, function (resp) {
            console.log('Error status: ' + resp.status);
            formData.uploading = false;
        }, function (evt) {
            // $scope.uploading_percentage = parseInt(100.0 * evt.loaded / evt.total) + '%';
        });
    }

    $scope.removeFile = function(formData){
    	formData.document = '';
    }

    $scope.deleteChallan = function(challan , index){

    	bootbox.confirm("Are you sure?",function(result){
    		if(result){
    			
		    	challan.processing = true;
		    	ChallanService.deleteChallan(challan.id).then(function(data){
		    		if(data.success){
		    			$scope.challans.splice(index,1);
		    		}else{
		    			$.notific8(data.message,{life:4000,theme: 'ruby'});
		    		}
		    	});
    		}
    	});



    }

});

app.service('ChallanService', function($http, $rootScope){

	this.initials = function(){
		var promise = $http({
			method: 'GET',
			url: base_url + "/api/challans",
			
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	} else {
	        		return response.data.message;
	        	}
	        }
	    });

	    return promise;
	}

	this.addChallanData = function(data){
		var promise = $http({
			method: 'POST',
			url: base_url + "/api/challans/add",
			data:data
			
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	} else {
	        		return response.data.message;
	        	}
	        }
	    });

	    return promise;
	}

	this.deleteChallan = function(challan_id){
		var promise = $http({
			method: 'DELETE',
			url: base_url + "/api/challans/delete/"+challan_id,
			
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	} else {
	        		return response.data.message;
	        	}
	        }
	    });

	    return promise;
	}

	

});