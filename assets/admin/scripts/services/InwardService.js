app.service('InwardService', function($http, $rootScope){
    
    this.inwards = function(){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/inward",
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
			url: base_url + "/api/inward/getInitials",
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

    this.submitInward = function(inward_id,data){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/inward/add/"+inward_id,
			headers: {
				'apiToken': api_token
			},
			data: data
		})
		.then(function(response) {
	        if(response.status == 200){
	        	return response.data;
	        }
	    });

	    return promise;
    }

    this.submitInwardProcess = function(data){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/inward/process",
			headers: {
				'apiToken': api_token
			},
			data: data
		})
		.then(function(response) {
	        if(response.status == 200){
	        	return response.data;
	        }
	    });

	    return promise;
    }

    this.getInwardData = function(inward_id){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/inward/details/"+inward_id,
			
			
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

    this.deleteInward = function(inward_id){
    	var promise = $http({
			method: 'DELETE',
			url: base_url + "/api/inward/delete/"+inward_id,
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

    this.trackInward = function(inward_id){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/inward/track/"+inward_id,
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

    this.sharedWith = function(inward_id, process_id){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/inward/shared/"+inward_id+"/"+process_id,
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

    this.processPaymentSubmit = function(inward_id, data, inward_account_id){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/inward/payment/process/"+inward_id+"/"+inward_account_id,
			headers: {
				'apiToken': api_token
			},
			data: data
		})
		.then(function(response) {
	        if(response.status == 200){
	        	return response.data;
	        }
	    });

	    return promise;
    }

    this.loadPayment = function(inward_id){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/inward/payment/load/"+inward_id,
			headers: {
				'apiToken': api_token
			}
		})
		.then(function(response) {
	        if(response.status == 200){
	        	return response.data;
	        }
	    });

	    return promise;
    }

    this.loadInventory = function(inward_id){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/inward/inventory/load/"+inward_id,
			headers: {
				'apiToken': api_token
			}
		})
		.then(function(response) {
	        if(response.status == 200){
	        	return response.data;
	        }
	    });

	    return promise;
    }

    this.addInventoryItems = function(data){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/inward/inventory/add/"+data.inward_id,
			headers: {
				'apiToken': api_token
			},
			data:data
		})
		.then(function(response) {
	        if(response.status == 200){
	        	return response.data;
	        }
	    });

	    return promise;
    }

    this.removeItem = function(item){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/inward/inventory/deleteItem/"+item.inventory_id,
			data:item
		})
		.then(function(response) {
	        if(response.status == 200){
	        	return response.data;
	        }
	    });

	    return promise;
    }
   
});
