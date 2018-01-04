app.controller('outwardCtrl',function($scope , $http ,OutwardService, $timeout, Upload){
	
	$scope.outwards = [];
	$scope.clubs = [];
	$scope.associations = [];
	$scope.file_outward = '';
	$scope.access_right = false;
	$scope.outwardData = {'no_copies':1};
	$scope.sub_outwards = [];
	$scope.sub_outward_popup = {};
	$scope.sub_outward_popup_type = '';
	$scope.outward_id = 0;
	$scope.address_groups = [];

	$scope.fetch_outwards = function(){
		OutwardService.outwards().then(function(data){
			if(data.success){
				$scope.outwards = data.outwards;
			}else{
	    		$scope.formError = data;
			}
		});
	}

	$scope.putRemarks = function(sub_outward, type){
		$("#remarks").modal('show');
		console.log(sub_outward.suboutward_id);
		$scope.sub_outward_popup = sub_outward;
		$scope.sub_outward_popup_type = type;
	}

	$scope.changeCopies = function(){

		var count = [];
		$scope.sub_outwards = [];
		OutwardService.getGroupAddress($scope.outwardData.address_group_id).then(function(data){
			count = data.addresses;
			console.log(data);
			if(count.length > 0){
				angular.forEach(count, function(address) {
				  $scope.sub_outwards.push({
				  		title : address.name,
						suboutward_id : address.address_id,
						email : {
							processed : false,
							number : '',
							remarks: '',
							attachment: ''
						},
						courier : {
							processed : false,
							number : '',
							remarks: '',
							attachment: ''
						},
						fax : {
							processed : false,
							number : '',
							remarks: '',
							attachment: ''
						},
						by_hand : {
							processed : false,
							number : '',
							remarks: '',
							attachment: ''
						},
					});
				});
				
			};
			return $scope.sub_outwards;
		});


	}

	$scope.initialize = function(){
		
		OutwardService.getInitials().then(function(data){
			$scope.access_right = data.access_right;
			console.log(data);
			$scope.transport_types = data.transport_types;
			$scope.outward_status = data.outward_status;
			$scope.clubs = data.clubs;
			$scope.associations = data.associations;
			$scope.address_groups = data.address_groups;
		});
		
		if($scope.outward_id != 0){
			OutwardService.getOutwardData($scope.outward_id).then(function(data){
				$scope.outwardData = data.outward;
				$scope.sub_outwards = data.sub_outwards;
				$scope.outwardData.sent_by = data.sent_by;
				$scope.file_outward = data.outward.attachment;
				console.log(data.outward);
			});
		}

	}

	$scope.onSubmit = function(check){
	    $scope.outwardData['file_outward'] = $scope.file_outward;
	    $scope.outwardData['sub_outwards'] = $scope.sub_outwards;
	    data = $scope.outwardData;
		console.log(data);
		OutwardService.submitOutward($scope.outward_id , data).then(function(data){
			if(data.success){

				if($scope.outward_id != 0){
					$scope.outwardData = data.outwardData;
				}else{
					$scope.outwardData = {};
				}
				location.href = data.redirect_url;

	    		$scope.formSuccess = data.message;
	    		
			}else{
	    		$scope.formError = data;

			}
			$timeout(function() {

    			$scope.processing = false;
			}, 2000);

		});
	}

	$scope.removeRow = function(index){
		console.log(index);
		$scope.sub_outwards.splice(index,1);
		$scope.outwardData.no_copies = $scope.outwardData.no_copies-1;
	}
		
	$scope.uploadFile = function (file, name) {
		console.log(name);
		$scope['uploading_'+name] = true;
		var url = base_url+'/api/upload/file';
        Upload.upload({
            url: url,
            data: {
            	media: file
            }
        }).then(function (resp) {
            if(resp.data.success){
            	$scope.outwardData[name] = resp.data.media;
            	$scope[name] = resp.data.media;
            } else {
            	alert(resp.data.message);
            }
            $scope['uploading_'+name] = false;
        }, function (resp) {
            console.log('Error status: ' + resp.status);
            $scope['uploading_'+name] = false;
        }, function (evt) {
            $scope.uploading_percentage = parseInt(100.0 * evt.loaded / evt.total) + '%';
        });
    }

    $scope.removeFile = function(file_name){
    	$scope[file_name] = '';
    	$scope.outwardData[file_name] = '';
    }

    $scope.deleteOutward = function(index,outward_id){
		$scope.processing = true;
		OutwardService.deleteOutward(outward_id).then(function(data){
    		if(data.success){
				$scope.outwards.splice(index , 1);
    			$scope.formSuccess = data.message;
    		}else{
    			$scope.formError = data.message;
    		}
    		$scope.processing = false;
		});

	}

	$scope.toggleStatus = function(outward_id){
		$scope.processing = true;
		OutwardService.toggleStatus(outward_id).then(function(data){
    		if(data.success){
				// $scope.outwards.splice(index , 1);
				$scope.outwardData.status = !$scope.outwardData.status;
    			$scope.formSuccess = data.message;
    		}else{
    			$scope.formError = data.message;
    		}
    		$scope.processing = false;
		});
	}

});