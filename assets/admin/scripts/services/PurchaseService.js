app.service('PurchaseService', function($http, $rootScope){

    this.initials = function(type) {
       	var promise = $http({
			method: 'GET',
			url: base_url + "/api/purchase?type="+type,
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

    this.addPurchaseData = function(data){
    	var promise = $http({
    		method:'POST',
    		url:base_url+'/api/purchase/add',
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

    this.editPurchase = function(data){
    	var promise = $http({
    		method:'GET',
    		url:base_url+'/api/purchase/edit/'+data.id,
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
    
    this.deletePurchase = function(data){
    	var promise = $http({
    		method:'DELETE',
    		url:base_url+'/api/purchase/delete/'+data.id,
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

    this.togglePurchaseStatus = function(data){
    	var promise = $http({
    		method:'POST',
    		url:base_url+'/api/purchase/togglePurchaseStatus/'+data.id,
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


    this.viewLog = function(loan_id) {
        var promise = $http({
            method: 'GET',
            url: base_url + "/api/purchase/logs/"+loan_id,
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

    this.submitRemark = function(data, purchase_id){
        var promise = $http({
            method:'POST',
            url:base_url+'/api/purchase/addRemark/'+purchase_id,
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
