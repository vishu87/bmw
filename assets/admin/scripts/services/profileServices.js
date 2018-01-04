app.service('profileService', function($http, $rootScope){
    
    this.profileData = function(){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/profile",
			headers: {
				'apiToken': api_token
			}
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	}else{
	        		return response.data.message;
	        	}
	        }
	    });

	    return promise;
    }

    this.getStateCountry = function(){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/getStateCountry",
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	}else{
	        		return response.data.message;
	        	}
	        }
	    });

	    return promise;
    }

    this.updateUserData = function(data){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/profile/updateUserData",
			data : data,
			headers: {
				'apiToken': api_token
			}
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	}else{
	        		return response.data.message;
	        	}
	        }
	    });

	    return promise;
    }

 });
