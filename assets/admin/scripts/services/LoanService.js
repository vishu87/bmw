app.service('LoanService', function($http, $rootScope){

    this.initials = function(type) {
       	var promise = $http({
			method: 'GET',
			url: base_url + "/api/loans?type="+type,
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

    this.viewLog = function(loan_id) {
        var promise = $http({
            method: 'GET',
            url: base_url + "/api/loans/logs/"+loan_id,
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

    this.addLoanData = function(data){
    	var promise = $http({
    		method:'POST',
    		url:base_url+'/api/loans/add',
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
    		url:base_url+'/api/loans/edit/'+data.id,
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
    		url:base_url+'/api/loans/delete/'+data.id,
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

    this.toggleLoanStatus = function(data){
    	var promise = $http({
    		method:'POST',
    		url:base_url+'/api/loans/toggleLoanStatus/'+data.id,
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
            url:base_url+'/api/loans/addRemark/'+data.id,
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
