app.service('EmployeeRemarkService', function($http, $rootScope){

    this.submitRemark = function(employee_id,data){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/employee_remarks/addRemark/"+employee_id,
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

    this.employeeRemarks = function(employee_id){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/employee_remarks/"+employee_id,
			
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

    this.deleteRemark = function(emp_remark_id){
    	var promise = $http({
			method: 'DELETE',
			url: base_url + "/api/employee_remarks/delete/"+emp_remark_id,
			
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
