app.service('EmployeePromotionService', function($http, $rootScope){
    

    this.submitPromotion = function(employee_id,data){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/employee_promotions/addPromotion/"+employee_id,
			data: data
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

    this.employeePromotions = function(employee_id){
    	var promise = $http({
			method: 'POST',
			url: base_url + "/api/employee_promotions/"+employee_id,
			
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

    this.deletePromotion = function(emp_promotion_id){
    	var promise = $http({
			method: 'DELETE',
			url: base_url + "/api/employee_promotions/delete/"+emp_promotion_id,
			
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

  	this.position_array = function(){

  		var promise = $http({
  			method : 'GET',
  			url : base_url + "/api/getPositionArray"
  		}).then(function(response){
  			if(response.status == 200){
  				if(response.data.success){
  					return response.data;
  				}else{
  					return response.data.message;
  				}
  			}
  		});
  		return promise;
  	}
 });
