app.controller('addressCtrl',function($scope , $http ,AddressBook){
	$scope.addresses = [];
	$scope.formData = {};
	$scope.formError = false;
	$scope.formSuccess = false;
	$scope.showContacts = false;
	$scope.processing = false;


    $scope.onSubmit = function(check){
    	$scope.processing = true;
    	$scope.addresses = [];
	    $scope.formError = '';
	    $scope.formSuccess = '';
		data = $scope.formData;
		// console.log(data);
		AddressBook.searchRecords(data).then(function(data){
			// console.log(data);
			if(data.success){
				$scope.formData = {};
				$scope.addresses = data.addresses;
	    		$scope.formSuccess = data.message;
	    		$scope.showContacts = true;

			}else{
	    		$scope.formError = data;
	    		$scope.showContacts = false;
			}
			$scope.processing = false;
		});
	}


});