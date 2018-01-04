app.service('EmployeeDocumentService', function($http, $rootScope){

    this.submitContract = function(employee_id,data){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/employee_documents/addContract/"+employee_id,
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

    this.submitDocument = function(employee_id,data){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/employee_documents/addDocument/"+employee_id,
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
			url: base_url + "/api/employee_documents/"+employee_id,
			
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

    this.employeeDocuments = function(employee_id){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/employee_documents/"+employee_id,
			
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

    this.deleteDocument = function(document_id){
    	var promise = $http({
			method: 'DELETE',
			url: base_url + "/api/employee_documents/delete/"+document_id,
			
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
