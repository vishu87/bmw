app.controller('hodCtrl',function($scope , $http ){
	$scope.hodList = [];

	$scope.initials = function(){

		$http({
			method: 'GET',
			url: base_url + "/api/hod",
			headers: {
				'apiToken': api_token
			}
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		$scope.hodList = response.data.hodList;
	        	}else{
	        		bootbox.alert(response.data.message);
	        		
	        	}
	        }
	    });

	}

	$scope.updateApprovers = function(){
		$scope.processing = true;
		var data = {};
		data['hodList'] = $scope.hodList;
		console.log(data);
		$http({
			method: 'POST',
			url: base_url + "/api/hod/updateApprovers",
			headers: {
				'apiToken': api_token
			},
			data:data
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		$scope.hodList = response.data.hodList;
	        	}

	        	bootbox.alert(response.data.message);

	        	$scope.processing = false;
	        }
	    });

	}

});