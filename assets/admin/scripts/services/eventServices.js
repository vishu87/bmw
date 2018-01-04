app.service('EventService', function($http, $rootScope){

    this.fetchEvents = function(){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/get-events",
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

    this.fetchCalendar = function(month, year){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/calendar",
			data: {
				month : month,
				year : year
			}
		})
		.then(function(response) {
	        if(response.status == 200){
	        	console.log(response);
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
