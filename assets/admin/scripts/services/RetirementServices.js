app.service('RetirementService', function($http, $rootScope){
    

    this.submitRetirement = function(employee_id,data){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/employee_retirements/addRetirement/"+employee_id,
			data: data
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

    this.employeeRetirement = function(employee_id){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/employee_retirements/"+employee_id,
			
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

    this.deleteRetirement = function(emp_ret_id){
    	var promise = $http({
			method: 'DELETE',
			url: base_url + "/api/employee_retirements/delete/"+emp_ret_id,
			
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
