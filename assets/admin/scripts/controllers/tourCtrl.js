app.controller('tourCtrl',function($scope , $http ,TourService,Upload,ClaimService){
	$scope.tours = [];
	$scope.tourDetails = [];
	$scope.type = 0;
	$scope.tour_id = 0;
	$scope.formData = {
	};
	$scope.tour_id = 0;
	$scope.tour_access = false;
	$scope.hod = false;
	$scope.defaultItems = {'date':'', mode : 3};
	$scope.formData.accomodations = [];
	$scope.formData.travels = [];
	$scope.formData.personalLeaves = [];
	$scope.formData.taxis = [];
	$scope.cities = [];
	$scope.formData.team_upload = '';
	$scope.claimItems = [];

	// $scope.myModel = 1;
	$scope.selected_cities = [];

	$scope.myConfig = {
	    onChange: function(value){
	    	var idx = $scope.selected_cities.indexOf(value);
	    	if(idx == -1){
	    		$scope.selected_cities.push(value*1);
	    	} else {
	    		$scope.selected_cities.splice(idx,1);
	    	}
	    	console.log($scope.selected_cities);
	    },
	    maxItems: 1,
	    // required: true,
	}

	$scope.initials = function(){
		$scope.formData.travels.push(JSON.parse(JSON.stringify($scope.defaultItems)));
		$scope.formData.accomodations.push(JSON.parse(JSON.stringify($scope.defaultItems)));
		$scope.formData.personalLeaves.push(JSON.parse(JSON.stringify($scope.defaultItems)));
		$scope.formData.taxis.push(JSON.parse(JSON.stringify($scope.defaultItems)));
		
		TourService.initials($scope.type).then(function(data){
			if(data.success){
				$scope.tours = data.tours;
				$scope.claims = data.claims;
				$scope.items = data.items;
				$scope.cities = data.cities;
				$scope.travel_modes = data.travel_modes;
				$scope.leave_types = data.leave_types;
				$scope.tour_access = data.tour_access;
				$scope.hod = data.hod;
			}
		});
	}

	$scope.addTour = function(){
		$scope.tour_id = 0;
		$scope.clubCL = 0;
		$scope.clubML = 0;
		$scope.clubEL = 0;
		$scope.formData.travels = [];
		$scope.formData.accomodations = [];
		$scope.formData.personalLeaves = [];
		$scope.formData.travels.push(JSON.parse(JSON.stringify($scope.defaultItems)));
		$scope.formData.accomodations.push(JSON.parse(JSON.stringify($scope.defaultItems)));
		$scope.formData.taxis.push(JSON.parse(JSON.stringify($scope.defaultItems)));
		$("#addTour").modal("show");
	}

	$scope.addMoreItem = function(){
		$scope.formData.travels.push(JSON.parse(JSON.stringify($scope.defaultItems)));
	}

	$scope.removeItem = function(index){
		$scope.formData.travels.splice(index,1);
	}

	$scope.addMoreAccomodation = function(){
		$scope.formData.accomodations.push(JSON.parse(JSON.stringify($scope.defaultItems)));
	}

	$scope.addMoreLeave = function(){
		$scope.formData.personalLeaves.push(JSON.parse(JSON.stringify($scope.defaultItems)));
	}

	$scope.addMoreTaxi = function(){
		$scope.formData.taxis.push(JSON.parse(JSON.stringify($scope.defaultItems)));
	}

	$scope.addTourData = function(){
		console.log($scope.formData);
		$scope.processing = true;
		TourService.addTourData($scope.formData).then(function(data){
			if(data.success){
				window.location = base_url + '/travel-requests';
				bootbox.alert(data.message);
			}else{
				bootbox.alert(data.message);
			}
			$scope.processing = false;
		});
	}

	$scope.editTour = function(){

		if($scope.tour_id != 0 && $scope.tour_id != ''){

			TourService.requestDetails($scope.tour_id).then(function(data){
				if(data.success){
					console.log(data);
					$scope.formData = data.tour;
					if($scope.formData.travels.length < 1){
						$scope.addMoreItem();
					} else {
						$scope.setSelectedCities();
					}

					if($scope.formData.accomodations.length < 1){
						$scope.addMoreAccomodation();
					}

					if($scope.formData.personalLeaves.length < 1){
						$scope.addMoreLeave();
					}

					if($scope.formData.taxis.length < 1){
						$scope.addMoreTaxi();
					}

					
				}else{
					$.notific8(data.message,{life:4000,theme: 'ruby'});
				}
				$scope.processing = false;
			});
		}
	}

	$scope.setSelectedCities = function(){
		for (var i = 0; i < $scope.formData.travels.length; i++) {
			$scope.selected_cities.push($scope.formData.travels[i].from_city);
			$scope.selected_cities.push($scope.formData.travels[i].to_city);
		};
		console.log($scope.selected_cities);
	}

	$scope.deleteTour = function(tour,index){

		bootbox.confirm("Are you sure ?",function(result){
			if(result){
				TourService.deleteTour(tour).then(function(){
					$scope.tours.splice(index,1);
				});
			}
		});
	}


	$scope.toggleTourStatus = function(claimDetails,status){
		bootbox.prompt({
		    title: "Leave a remark for this action",
		    inputType: 'textarea',
		    callback: function (result) {
		    	if(result){
		        	console.log(status);
					claimDetails['processing'+status] = true;
					claimDetails['approval_remarks'] = result;
					claimDetails['status'] = status;
					console.log(claimDetails);
					TourService.toggleTourStatus(claimDetails).then(function(data){
						console.log(data);
						if(data.success){
							window.location = base_url + '/travel-requests?type='+$scope.type;
							$.notific8(data.message,{life:4000,theme: 'teal'});
						}else{
							$.notific8(data.message,{life:4000,theme: 'ruby'});
						}
						claimDetails['processing'+status] = false;
					});
		    	}
		    }
		});
	}

	$scope.changeClaimStatus = function(claim_id){
		$scope.claimDetails = {};
		TourService.getClaimDetails(claim_id).then(function(data){
			console.log(data);
			if(data.success){
				$scope.claimDetails = data.claimDetails;
				$("#changeClaimStatus").modal("show");
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
			
		});
		
	}

	$scope.toggleClaimStatus = function(claim,status){
		console.log('dd fasd fadsfadsf a1263');
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
							window.location = base_url + '/travel-requests?type='+$scope.type;
						}else{
							$.notific8(data.message,{life:4000,theme: 'ruby'});
						}
						claim['processing'+status] = false;
					});
		    	}
		    }
		});
	}


	$scope.viewRequestDetails = function(tour){
		$scope.formData.travels = [];
		TourService.requestDetails(tour.id).then(function(data){
			if(data.success){
				console.log(data);
				$scope.tour = data.tour;
				
				$("#itemsList").modal("show");
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
			$scope.processing = false;
		});
	}


	$scope.uploadFile = function (file, name, formData) {
		formData.uploading = true;
		var url = base_url+'/api/upload/file';
        Upload.upload({
            url: url,
            data: {
            	media: file
            }
        }).then(function (resp) {
        	console.log(resp);
            if(resp.data.success){
            	formData.team_upload = resp.data.media;
            } else {
            	alert(resp.data.message);
            }
            formData.uploading = false;
        }, function (resp) {
            console.log('Error status: ' + resp.status);
            formData.uploading = false;
        }, function (evt) {
            // $scope.uploading_percentage = parseInt(100.0 * evt.loaded / evt.total) + '%';
        });
    }

    $scope.removeFile = function(formData){
    	formData.team_upload = '';
    }


    $scope.addRemark = function(tour){

		bootbox.prompt({
		    title: "Please enter remark",
		    inputType: 'textarea',
		    callback: function (result) {
		    	if(result){
		        	console.log(status);
					tour['processing'] = true;
					tour['remarks'] = result;
					console.log(tour);
					TourService.addRemark(tour).then(function(data){
						console.log(data);
						if(data.success){
							$.notific8(data.message,{life:4000,theme: 'teal'});
						}else{
							$.notific8(data.message,{life:4000,theme: 'ruby'});
						}
						tour['processing'] = false;
					});
		    	}
		    }
		});
	}


	$scope.viewLog = function(tour){
		$scope.logs = [];
		TourService.viewLog(tour.id).then(function(data){
			if(data.success){
				console.log(data);
				$scope.log_tour = tour;
				$scope.logs = data.logs;
				$("#viewLog").modal("show");
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
		});
	}

	$scope.viewClaimLog = function(claim){
		$scope.logs = [];
		TourService.viewClaimLog(claim.id).then(function(data){
			if(data.success){
				console.log(data);
				$scope.log_tour = claim;
				$scope.logs = data.logs;
				$("#viewLog").modal("show");
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
		});
	}


	$scope.addClaimRemark = function(claim){

		bootbox.prompt({
		    title: "Please enter remark",
		    inputType: 'textarea',
		    callback: function (result) {
		    	if(result){
		        	console.log(status);
					claim['processing'] = true;
					claim['remarks'] = result;
					console.log(claim);
					TourService.addClaimRemark(claim).then(function(data){
						console.log(data);
						if(data.success){
							$.notific8(data.message,{life:4000,theme: 'teal'});
						}else{
							$.notific8(data.message,{life:4000,theme: 'ruby'});
						}
						claim['processing'] = false;
					});
		    	}
		    }
		});
	}

});