app.controller('cityCtrl',function($scope , $http ){
	$scope.countries = [];
	$scope.cities = [];
	$scope.processing = false;
	$scope.country_code = '';
	$scope.initials = function(){

		$http({
			method: 'GET',
			url: base_url + "/api/cities",
			headers: {
				'apiToken': api_token
			}
		})
		.then(function(response) {
	        if(response.status == 200){
	        	console.log(response);
	        	if(response.data.success){
	        		$scope.countries = response.data.countries;
	        	}else{
	        		bootbox.alert(response.data.message);
	        		
	        	}
	        }
	    });

	}

	$scope.getCities = function(){
		$scope.processing = true;
		$scope.cities = [];
		var data = {"country_code":$scope.country_code};
		$http({
			method: 'POST',
			url: base_url + "/api/cities/getCities",
			data:data
		})
		.then(function(response) {
	        if(response.status == 200){
	        	console.log(response);
	        	if(response.data.success){
	        		$scope.cities = response.data.cities;
	        	}else{
	        		bootbox.alert(response.data.message);
	        	}
				$scope.processing = false;
	        }
	    });
	}

	$scope.toggleShowValue = function(city){
		city.processing = true;
		$http({
			method: 'POST',
			url: base_url + "/api/cities/toggleShowValue",
			data:city
		})
		.then(function(response) {
	        if(response.status == 200){
	        	console.log(response);
	        	if(response.data.success){
	        		for (var i = $scope.cities.length - 1; i >= 0; i--) {
	        			if($scope.cities[i]['id'] == response.data.city.id){
	        				$scope.cities[i] = response.data.city;
	        			}
	        		}
	        	}else{
	        		bootbox.alert(response.data.message);
	        	}

				city.processing = true;

	        }
	    });
	}

	$scope.markAll = function(value){
		var data = {"show":value , "country_code":$scope.country_code};
		console.log(data);
		$scope.processingMarkAll = true;
		$http({
			method: 'POST',
			url: base_url + "/api/cities/markAll",
			data:data
		})
		.then(function(response) {
	        if(response.status == 200){
	        	console.log(response);
	        	if(response.data.success){
	        		$scope.cities = response.data.cities;
	        	}else{
	        		bootbox.alert(response.data.message);
	        	}

				$scope.processingMarkAll = false;
				

	        }
	    });
	}

});