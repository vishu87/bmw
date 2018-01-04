app.service('AppraisalService', function($http, $rootScope){
    

    this.initials = function(){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/appraisal/initials",
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

    this.listing = function(){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/appraisal",
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

    this.deleteAppraisal = function(appraisal_id){
    	var promise = $http({
			method: 'DELETE',
			url: base_url + "/api/appraisal/delete/"+appraisal_id,
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

    this.getAppraisalData = function(appraisal_id){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/appraisal/getAppraisalData/"+appraisal_id,
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

    this.submitAppraisal = function(data,appraisal_id){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/appraisal/add/"+appraisal_id,
			data: data
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
