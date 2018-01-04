app.service('AddressBook', function($http, $rootScope){
    

    this.searchRecords = function(data){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/search-address-book",
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

 });
