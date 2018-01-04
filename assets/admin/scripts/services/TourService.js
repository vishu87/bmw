app.service('TourService', function($http, $rootScope){

    this.initials = function(type) {
       	var promise = $http({
			method: 'GET',
			url: base_url + "/api/travel-requests?type="+type,
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

    this.getClaimDetails = function(claim_id) {
        var promise = $http({
            method: 'GET',
            url: base_url + "/api/travel-requests/getClaimDetails/"+claim_id,
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

    this.viewLog = function(tour_id) {
        var promise = $http({
            method: 'GET',
            url: base_url + "/api/travel-requests/logs/"+tour_id,
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

    this.addTourData = function(data){
    	var promise = $http({
    		method:'POST',
    		url:base_url+'/api/travel-requests/add',
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
    		url:base_url+'/api/travel-requests/edit/'+data.id,
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
    
    this.deleteTour = function(data){
    	var promise = $http({
    		method:'DELETE',
    		url:base_url+'/api/travel-requests/delete/'+data.id,
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

    this.toggleTourStatus = function(data){
    	var promise = $http({
    		method:'POST',
    		url:base_url+'/api/travel-requests/toggleTourStatus/'+data.id,
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

    this.requestDetails = function(tour_id){
        var promise = $http({
            method:'GET',
            url:base_url+'/api/travel-requests/requestDetails/'+tour_id,
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

    this.addDestination = function(data){
        var promise = $http({
            method:'POST',
            url:base_url+'/api/travel-requests/addDestination/'+data.id,
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

    this.addRemark = function(data){
        var promise = $http({
            method:'POST',
            url:base_url+'/api/travel-requests/addRemark/'+data.id,
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

    this.viewLog = function(tour_id) {
        var promise = $http({
            method: 'GET',
            url: base_url + "/api/travel-requests/logs/"+tour_id,
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

    this.viewClaimLog = function(claim_id) {
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

    this.addClaimRemark = function(data){
        var promise = $http({
            method:'POST',
            url:base_url+'/api/claims/addRemark/'+data.id,
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
