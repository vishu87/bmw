app.controller('contractCtrl',function($scope , $http ,ContractService,Upload){
	$scope.contracts = [];
	$scope.categories = [];
	$scope.formData = {};
	$scope.formData.attachment = '';
	$scope.contract_id = 0;
	$scope.initials = function(){
		ContractService.initials().then(function(data){
			if(data.success){
				$scope.contracts = data.contracts;
				$scope.categories = data.categories;
				console.log(data);
			}
		});
	}

	$scope.addContract = function(){
		$scope.formData = {};
		$scope.formData.attachment = '';

		$("#addContract").modal("show");
	}

	$scope.editContract = function(contract){
		$scope.contract_id = contract.id;
		$scope.formData = contract;
		$("#addContract").modal("show");
	}

	$scope.addContractData = function(){
		$scope.processing = true;
		ContractService.addContractData($scope.formData).then(function(data){
			if(data.success){
				if($scope.formData.id && $scope.formData.id != 0){
					for (var i = $scope.contracts.length - 1; i >= 0; i--) {
						if($scope.contracts[i]['id'] == data.contract.id){
							$scope.contracts[i] == data.contract;
						}
					}
				}else{
					$scope.contracts.push(data.contract);
				}
				$("#addContract").modal("hide");
			}else{
				bootbox.alert(data.message);
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
            	formData.attachment = resp.data.media;
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
    	formData.attachment = '';
    }

    $scope.deleteContract = function(contract , index){

    	bootbox.confirm("Are you sure?",function(result){
    		if(result){
    			
		    	contract.processing = true;
		    	ContractService.deleteContract(contract.id).then(function(data){
		    		if(data.success){
		    			$scope.contracts.splice(index,1);
		    		}else{
		    			$.notific8(data.message,{life:4000,theme: 'ruby'});
		    		}
		    	});
    		}
    	});



    }

});

app.service('ContractService', function($http, $rootScope){

	this.initials = function(){
		var promise = $http({
			method: 'GET',
			url: base_url + "/api/contracts",
			
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

	this.addContractData = function(data){
		var promise = $http({
			method: 'POST',
			url: base_url + "/api/contracts/add",
			data:data
			
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	} else {
	        		return response.data;
	        	}
	        }
	    });

	    return promise;
	}

	this.deleteContract = function(contract_id){
		var promise = $http({
			method: 'DELETE',
			url: base_url + "/api/contracts/delete/"+contract_id,
			
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