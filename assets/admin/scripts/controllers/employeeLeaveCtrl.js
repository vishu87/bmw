app.controller('empLeaveCtrl',function($scope , $http , EmployeeLeaveService,$timeout){
	
	$scope.empLeaves = [];
	$scope.leaveHistory = [];
	$scope.employee_id = 0;
	$scope.formData = {};
	$scope.processing = false;

	$scope.initials = function(){
		EmployeeLeaveService.initials($scope.employee_id).then(function(data){
			if(data.success){
				console.log(data);
				$scope.empLeaves = data.empLeaves;
				$scope.leaveHistory = data.leaveHistory;
				$scope.leave_types = data.leave_types;
			}
		});
	}

	$scope.onSubmit = function(){
		$scope.processing = true;
		EmployeeLeaveService.onSubmit($scope.formData,$scope.employee_id).then(function(data){
			if(data.success){
				$scope.formData = {};
				$scope.empLeaves = data.empLeaves;
				$scope.leaveHistory.push(data.leave);
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
			$scope.processing = false;

		});
	}
	
});

app.service('EmployeeLeaveService', function($http, $rootScope){
    
    this.initials = function(employee_id){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/employee_leave_quota/"+ employee_id,
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

    this.onSubmit = function(data,employee_id){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/employee_leave_quota/add/"+ employee_id,
			data:data,
			headers :{
				apiToken : api_token
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

    

 });
