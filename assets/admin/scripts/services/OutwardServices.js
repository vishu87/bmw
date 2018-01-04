app.service('OutwardService', function($http, $rootScope){
    
    this.outwards = function(){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/outward",
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

    this.getInitials = function(){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/outward/getInitials",
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

    this.submitOutward = function(outward_id,data){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/outward/add/"+outward_id,
			headers: {
				'apiToken': api_token
			},
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


    

    this.getOutwardData = function(outward_id){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/outward/details/"+outward_id,
			
			
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

    this.getGroupAddress = function(group_id){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/outward/getGroupAddress/"+group_id,
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

    this.getOutwardDispatches = function(outward_id){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/outward/dispatch/"+outward_id,
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
    

    this.deleteOutward = function(outward_id){
    	var promise = $http({
			method: 'DELETE',
			url: base_url + "/api/outward/delete/"+outward_id,
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

    this.deleteDispatch = function(dispatch_id){
    	var promise = $http({
			method: 'DELETE',
			url: base_url + "/api/outward/deleteDispatch/"+dispatch_id,
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

    this.toggleStatus = function(outward_id){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/outward/toggleStatus/"+outward_id,
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

 });
