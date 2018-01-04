app.service('ItemService', function($http, $rootScope){

    this.initials = function(){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/items"
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	} else {
	        		return response.data;
	        	}
	        }
	    });

	    return promise;
    }

    this.addCategoryData = function(data){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/items/addCategory",
			data:data
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	} else {
	        		return response.data;
	        	}
	        }
	    });

	    return promise;
    }

    this.categoryItems = function(category){
    	var promise = $http({
			method: 'GET',
			url: base_url + "/api/items/"+category.id
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	} else {
	        		return response.data;
	        	}
	        }
	    });

	    return promise;
    }

    
    this.addCategoryItem = function(data){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/items/add",
			data:data
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	} else {
	        		return response.data;
	        	}
	        }
	    });

	    return promise;
    }

    this.removeCategory = function(category){
    	var promise = $http({
			method: 'DELETE',
			url: base_url + "/api/items/deleteCategory/"+category.id,
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	} else {
	        		return response.data;
	        	}
	        }
	    });

	    return promise;
    }

    this.removeItem = function(item){
    	var promise = $http({
			method: 'DELETE',
			url: base_url + "/api/items/delete/"+item.id,
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	} else {
	        		return response.data;
	        	}
	        }
	    });

	    return promise;
    }


 });
