app.controller('serviceRequestCtrl',function($scope , $http ,ServiceRequset,Upload){
	$scope.requests = [];
	$scope.categories = [];
	$scope.formData = {};
	$scope.formData.document = '';
	$scope.request_access = false;
	$scope.type = 0;

	$scope.initials = function(){
		ServiceRequset.initials($scope.type).then(function(data){
			if(data.success){
				$scope.requests = data.requests;
				$scope.categories = data.categories;
				if(data.request_access){
					$scope.request_access = true;
				}
				console.log(data);
			}
		});
	}

	$scope.addRequest = function(){
		$scope.formData = {};

		$("#addRequest").modal("show");
	}

	$scope.editRequest = function(request){
		$scope.formData = request;
		$("#addRequest").modal("show");
	}

	$scope.addRequestData = function(){
		$scope.processing = true;
		ServiceRequset.addRequestData($scope.formData).then(function(data){
			if(data.success){
				if($scope.formData.id && $scope.formData.id != 0){
					for (var i = $scope.requests.length - 1; i >= 0; i--) {
						if($scope.requests[i]['id'] == data.request.id){
							$scope.requests[i] == data.request;
						}
					}
				}else{
					$scope.requests.push(data.request);
				}
				$("#addRequest").modal("hide");
			}else{

			}
			$scope.processing = false;
		});
	}

	
    $scope.deleteRequest = function(request , index){

    	bootbox.confirm("Are you sure?",function(result){
    		if(result){
    			
		    	request.processing = true;
		    	ServiceRequset.deleteRequest(request.id).then(function(data){
		    		if(data.success){
		    			$scope.requests.splice(index,1);
		    		}else{
		    			$.notific8(data.message,{life:4000,theme: 'ruby'});
		    		}
		    	});
    		}
    	});

    }

    $scope.toggleStatus = function(request,index,status){
    	
    	bootbox.prompt({
		    title: "Leave a remark for this action",
		    inputType: 'textarea',
		    callback: function (remark) {
		    	if(remark){
    			
			    	request['processing'] = true;
			    	ServiceRequset.toggleStatus(request.id,remark,status).then(function(data){
			    		if(data.success){
			    			$scope.requests.splice(index,1);
			    		}else{
			    			$.notific8(data.message,{life:4000,theme: 'ruby'});
			    		}
			    		request['processing'] = false;
			    	});
	    		}
		    }
		});

    }

    $scope.viewLog = function(request){
		$scope.logs = [];
		ServiceRequset.viewLog(request.id).then(function(data){
			if(data.success){
				console.log(data);
				$scope.log_request = request;
				$scope.logs = data.logs;
				$("#viewLog").modal("show");
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
		});
	}
	
	$scope.addRemark = function(request){

		bootbox.prompt({
		    title: "Please enter remark",
		    inputType: 'textarea',
		    callback: function (result) {
		    	if(result){
		        	console.log(status);
					request['processing'] = true;
					request['remarks'] = result;
					console.log(request);
					ServiceRequset.addRemark(request).then(function(data){
						console.log(data);
						if(data.success){
							$.notific8(data.message,{life:4000,theme: 'teal'});
						}else{
							$.notific8(data.message,{life:4000,theme: 'ruby'});
						}
						request['processing'] = false;
					});
		    	}
		    }
		});
	}

});

app.service('ServiceRequset', function($http, $rootScope){

	this.initials = function(type){
		var promise = $http({
			method: 'GET',
			url: base_url + "/api/service-requests?type="+type,
			headers: {
				'apiToken': api_token
			}
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

	this.addRequestData = function(data){
		var promise = $http({
			method: 'POST',
			url: base_url + "/api/service-requests/add",
			data:data,
			headers: {
				'apiToken': api_token
			}
			
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

	this.deleteRequest = function(request_id){
		var promise = $http({
			method: 'DELETE',
			url: base_url + "/api/service-requests/delete/"+request_id,
			
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

	this.toggleStatus = function(request_id,remark,status){	
		var promise = $http({
			method: 'POST',
			url: base_url + "/api/service-requests/action/"+request_id,
			headers: {
				'apiToken': api_token
			},
			data:{
				'remarks':remark,
				'status':status
			}
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

	this.viewLog = function(loan_id) {
        var promise = $http({
            method: 'GET',
            url: base_url + "/api/service-requests/logs/"+loan_id,
            headers: {
                'apiToken': api_token
            }
        })
        .then(function(response) {
            if(response.status == 200){
                if(response.data.success){
                    return response.data;
                }else{
                    return response.data;
                }
            }
        });
        return promise;
    }

    this.addRemark = function(data){
        var promise = $http({
            method:'POST',
            url:base_url+'/api/service-requests/addRemark/'+data.id,
            headers:{
                'apiToken':api_token
            },
            data:data
        })
        .then(function(response){
            if(response.status == 200){
                if(response.data.success){
                    return response.data;
                }else{
                    return response.data;
                }
            }
        });
        return promise;
    }

});