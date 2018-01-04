app.controller('policyCtrl',function($scope , $http ,PolicyService){
	$scope.policies = [];
	$scope.formData = {};
	$scope.formError = false;
	$scope.formSuccess = false;
	$scope.showPolicyList = false;


    $scope.onSubmit = function(check){
    	$scope.policies = [];
	    $scope.formError = '';
	    $scope.formSuccess = '';
		data = $scope.formData;
		console.log(data);
		PolicyService.searchPolicies(data).then(function(data){
			console.log(data);
			if(data.success){
				$scope.formData = {};
				$scope.policies = data.policies;
	    		$scope.formSuccess = data.message;
	    		$scope.showPolicyList = true;

			}else{
	    		$scope.formError = data;
	    		$scope.showPolicyList = false;
			}

		});
	}


});