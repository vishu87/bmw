app.controller('empItemCtrl',function($scope , $http,EmployeeItemService){
	
	$scope.emp_items = [];
	$scope.employee_id = 0;
	$scope.formData = {};
	$scope.processItem = false;


	$scope.initials = function(){
		EmployeeItemService.initials($scope.employee_id).then(function(data){
			if(data.success){
				console.log(data);
				$scope.items = data.items;
				$scope.emp_items = data.emp_items;
			}
		});
	}

	$scope.addEmpItems = function(){
		$scope.processItem = true;
		EmployeeItemService.addEmpItems($scope.formData,$scope.employee_id).then(function(data){
			if(data.success){
				$scope.formData = {};
				if(data.update){
					for (var i = $scope.emp_items.length - 1; i >= 0; i--) {
						if($scope.emp_items[i]['id'] == data.item.id){
							$scope.emp_items[i] = data.item;
						}
					}
				}else{

					$scope.emp_items.push(data.item);
				}
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
			$scope.processItem = false;

		});
	}
	
});

app.service('EmployeeItemService', function($http, $rootScope){
    
    this.initials = function(employee_id){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/employeeItems/"+ employee_id,
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

    this.addEmpItems = function(data,employee_id){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/employeeItems/add/"+ employee_id,
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
