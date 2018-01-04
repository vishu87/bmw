app.service('ClaimService', function($http, $rootScope){

    this.initials = function(type,tour_id) {
       	var promise = $http({
			method: 'GET',
			url: base_url + "/api/claims?type="+type+"&tour_id="+tour_id,
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

    this.viewLog = function(claim_id) {
        var promise = $http({
            method: 'GET',
            url: base_url + "/api/claims/logs/"+claim_id,
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

    this.onSubmit = function(data){
    	var promise = $http({
    		method:'POST',
    		url:base_url+'/api/claims/add',
    		data:data,
    		headers:{
    			'apiToken':api_token
    		}
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

    this.editLoan = function(data){
    	var promise = $http({
    		method:'GET',
    		url:base_url+'/api/claims/edit/'+data.id,
    		headers:{
    			'apiToken':api_token
    		}
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
    
    this.deleteLoan = function(data){
    	var promise = $http({
    		method:'DELETE',
    		url:base_url+'/api/claims/delete/'+data.id,
    		headers:{
    			'apiToken':api_token
    		}
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

    this.toggleClaimStatus = function(data){
    	var promise = $http({
    		method:'POST',
    		url:base_url+'/api/claims/toggleClaimStatus/'+data.id,
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

    this.showDetails = function(claim_id){
        var promise = $http({
            method:'GET',
            url:base_url+'/api/claims/details/'+claim_id,
            headers:{
                apiToken : api_token
            }
            
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

    this.addClaimItems = function(data){
        var promise = $http({
            method:'POST',
            url:base_url+'/api/claims/addClaimItems/'+data.id,
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
