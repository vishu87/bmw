app.service('LeaveService', function($http, $rootScope){
    this.fetchUserLeaves = function() {
       	var promise = $http({
			method: 'GET',
			url: base_url + "/api/leaves",
			headers: {
				'apiToken': api_token
			}
		})
		.then(function(response) {
	        if(response.status == 200){
	        	// console.log(response.data.leaves);
	        	if(response.data.success){
	        		return response.data;
	        	}
	        }
	    });
	    return promise;
    }

    this.fetchLeave = function(leave_id){
    	var promise = $http({
				method: 'GET',
				url: base_url + "/api/leaves/"+leave_id,
				headers: {
					'apiToken': api_token
				}
			})
			.then(function(response) {
		        if(response.status == 200){
		        	console.log(response.data.leave);
		        	if(response.data.success){
		        		return response.data;
		        	}
		        }
		    });

    	return promise;

    }

    this.fetchLeaveCount = function(leave_id){
    	var promise = $http({
				method: 'GET',
				url: base_url + "/api/leaves/user_leave_count",
				headers: {
					'apiToken': api_token
				}
			})
			.then(function(response) {
		        if(response.status == 200){
		        	if(response.data.success){
		        		// console.log(response.data);
		        		return response.data;
		        	}
		        }
		    });

    	return promise;

    }

    

    this.LeaveTypesStatus = function(){
    	var promise = $http({
				method: 'GET',
				url: base_url + "/api/leaves/leave_types_status",
				
			})
			.then(function(response) {
		        if(response.status == 200){
		        	if(response.data.success){
		        		return response.data;
		        	}
		        }
		    });

    	return promise;

    }

    this.submitLeave = function(leave_id,data){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/leaves/request/"+leave_id,
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

    this.deleteLeave = function(leave_id){
    	var promise = $http({
			method: 'DELETE',
			url: base_url + "/api/leaves/delete-leave/"+leave_id,
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

    this.allLeaves = function(leave_id){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/leaves/leaveRequests",
			headers: {
				'apiToken': api_token
			}
		})
		.then(function(response) {
			if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	} else {
					// console.log(response.data);
	        		return response.data.message;
	        	}
	        }
	    });

	    return promise;
    }

    this.markStatus = function(status,leave_id){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/leaves/mark-leave/"+leave_id,
			headers: {
				'apiToken': api_token
			},
			data:{"change_status_to":status}
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
