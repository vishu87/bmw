app.service('NotificationService', function($http, $rootScope){

    this.fetchNotifications = function(){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/get-notifications",
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
