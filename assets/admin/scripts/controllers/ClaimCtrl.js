app.controller('ClaimCtrl',function($scope , $http ,ClaimService,Upload){
	$scope.type = 0;
	$scope.claim_id = 0;
	$scope.tour_id = 0;
	$scope.claim_access = false;
	$scope.hod = false;
	$scope.defaultItems = {'date':''};
	$scope.formData = {};
	$scope.formData.travelsData = [];
	$scope.formData.hotelsData = [];
	$scope.formData.convenceData = [];
	$scope.formData.otherPayments = [];
	$scope.claimDetails = [];
	$scope.grand_total = 0;
	$scope.other_total = 0;
	$scope.travel_total = 0;
	$scope.hotel_total = 0;
	$scope.convence_total = 0;


	$scope.initials = function(){
		$scope.formData.travelsData.push(JSON.parse(JSON.stringify($scope.defaultItems)));
		$scope.formData.hotelsData.push(JSON.parse(JSON.stringify($scope.defaultItems)));
		$scope.formData.convenceData.push(JSON.parse(JSON.stringify($scope.defaultItems)));
		$scope.formData.otherPayments.push(JSON.parse(JSON.stringify($scope.defaultItems)));

		ClaimService.initials($scope.type,$scope.tour_id).then(function(data){
			if(data.success){
				$scope.travel_types = data.travel_types;
				$scope.cities = data.cities;
				$scope.tour = data.tour;
				$scope.claim_id = data.tour.claim_id;
				$scope.formData = data.claim;
				if($scope.formData.travelsData.length < 1){
					$scope.addTravel();
				}

				if($scope.formData.hotelsData.length < 1){
					$scope.addHotel();
				}

				if($scope.formData.convenceData.length < 1){
					$scope.addConvence();
				}

				if($scope.formData.otherPayments.length < 1){
					$scope.addOtherPayment();
				}

				$scope.travelTotal();
				$scope.hotelTotal();
				$scope.convenceTotal();
				$scope.otherTotal();
				$scope.grandTotal();

				console.log($scope.formData);
			}
		});
	}	

	$scope.viewLog = function(claim){
		$scope.logs = [];
		ClaimService.viewLog(claim.id).then(function(data){
			if(data.success){
				console.log(data);
				$scope.logs = data.logs;
				$("#viewLog").modal("show");
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
		});
	}

	$scope.addTravel = function(){
		$scope.formData.travelsData.push(JSON.parse(JSON.stringify($scope.defaultItems)));
	}
	$scope.addHotel = function(){
		$scope.formData.hotelsData.push(JSON.parse(JSON.stringify($scope.defaultItems)));
	}
	$scope.addConvence = function(){
		$scope.formData.convenceData.push(JSON.parse(JSON.stringify($scope.defaultItems)));
	}
	$scope.addOtherPayment = function(){
		$scope.formData.otherPayments.push(JSON.parse(JSON.stringify($scope.defaultItems)));
	}


	$scope.onSubmit = function(status,ladda){
		$scope.formData['tour_id'] = $scope.tour.id;
		$scope.formData['grand_total'] = $scope.grand_total;
		$scope.formData['other_total'] = $scope.other_total;
		$scope.formData['travel_total'] = $scope.travel_total;
		$scope.formData['hotel_total'] = $scope.hotel_total;
		$scope.formData['convence_total'] = $scope.convence_total;
		$scope.formData['status'] = status;
		console.log($scope.formData);
		$scope[ladda] = true;
		ClaimService.onSubmit($scope.formData).then(function(data){
			if(data.success){
				// window.location = base_url + '/travel-requests';
				$.notific8(data.message,{life:4000,theme: 'teal'});
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
			$scope[ladda] = false;
		});

	}

	$scope.toggleClaimStatus = function(claim,status){

		bootbox.prompt({
		    title: "Leave a remark for this action",
		    inputType: 'textarea',
		    callback: function (result) {
		    	if(result){
		        	console.log(status);
					claim['processing'+status] = true;
					claim['approval_remarks'] = result;
					claim['status'] = status;
					console.log(claim);
					ClaimService.toggleClaimStatus(claim).then(function(data){
						console.log(data);
						if(data.success){
							window.location = base_url + '/claims?type='+$scope.type;
						}else{
							$.notific8(data.message,{life:4000,theme: 'ruby'});
						}
						claim['processing'+status] = false;
					});
		    	}
		    }
		});
	}


	$scope.uploadFile = function (file, name, object) {
		object.uploading = true;
		var url = base_url+'/api/upload/file';
        Upload.upload({
            url: url,
            data: {
            	media: file
            }
        }).then(function (resp) {
        	console.log(resp);
            if(resp.data.success){
            	object.attachment = resp.data.media;
            } else {
            	alert(resp.data.message);
            }
            object.uploading = false;
        }, function (resp) {
            console.log('Error status: ' + resp.status);
            object.uploading = false;
        }, function (evt) {
            // $scope.uploading_percentage = parseInt(100.0 * evt.loaded / evt.total) + '%';
        });
    }

    $scope.removeFile = function(object){
    	object.attachment = '';
    }

    $scope.travelTotal = function(){
    	$scope.travel_total = 0;
		var objs = $scope.formData.travelsData;

		angular.forEach(objs, function(obj) {
			if(obj.amount){
				$scope.travel_total = $scope.travel_total + parseInt(obj.amount);
			}
		});
		$scope.grandTotal();
    }

    $scope.hotelTotal = function(){
    	$scope.hotel_total = 0;
		var objs = $scope.formData.hotelsData;

		angular.forEach(objs, function(obj) {
			if(obj.amount){
				$scope.hotel_total = $scope.hotel_total + parseInt(obj.amount);
			}
		});
		$scope.grandTotal();

    }

    $scope.convenceTotal = function(){
    	$scope.convence_total = 0;
		var objs = $scope.formData.convenceData;

		angular.forEach(objs, function(obj) {
			if(obj.amount){
				$scope.convence_total = $scope.convence_total + parseInt(obj.amount);
			}
		});
		$scope.grandTotal();

    }

    $scope.otherTotal = function(){
    	$scope.other_total = 0;
		var objs = $scope.formData.otherPayments;

		angular.forEach(objs, function(obj) {
			if(obj.amount){
				$scope.other_total = $scope.other_total + parseInt(obj.amount);
			}
		});
		$scope.grandTotal();

    }

    $scope.grandTotal = function(){
		$scope.grand_total = 0;
		$scope.grand_total = $scope.travel_total + $scope.hotel_total + $scope.convence_total + $scope.other_total;
	}


});