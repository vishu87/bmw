app.controller('leavesCtrl',function($scope , $http ,LeaveService , $timeout){
	$scope.leaves = [];
	$scope.leaveRequests = [];
	$scope.leave_types = [];
	$scope.leave_id = 0;

	$scope.leaveData = {};
	$scope.leaveItem = {
		start_date : "",
		end_date : "",
		type : 1,
		leave_type: "",
		remarks: ""
	};
	
	$scope.active_li = 0;
	$scope.formError = false;
	$scope.formSuccess = false;
	$scope.processing = false;
	$scope.leaveCount = {"cl":0,"ml":0,"el":0,"count":0};


	$scope.fetch_leave_list = function(){
		LeaveService.fetchUserLeaves().then(function(data){
			$scope.leaves = data.leaves;
		});
		LeaveService.LeaveTypesStatus().then(function(data){
			$scope.leave_types = data.leave_type;
			$scope.leave_status = data.leave_status;
		});
	}

	$scope.all_leaves = function(){
		LeaveService.allLeaves().then(function(data){
			console.log(data);
			if(data.success){
				$scope.leaveRequests = data.leaves;
			}
		});
		
		LeaveService.LeaveTypesStatus().then(function(data){
			if(data.success){

				$scope.leave_list = data.leave_list;
				$scope.leave_status = data.leave_status;
			}
		});
	}

	$scope.fetch_leaves_count = function(){
		LeaveService.fetchLeaveCount().then(function(data){
			if(data.success){
				$scope.leaveCount = data.leaveCount;
			}
		});
	}

	$scope.initialize = function(){
		if($scope.leave_id != 0 ){
		    LeaveService.fetchLeave($scope.leave_id).then(function(data){	
				$scope.leaveData = data.leave;
		    });
		} else {
			$scope.leaveData.items = [];
			$scope.leaveData.items.push(JSON.parse(JSON.stringify($scope.leaveItem)));
		}

		LeaveService.LeaveTypesStatus().then(function(data){
			$scope.leave_types = data.leave_type;
			$scope.leave_status = data.leave_status;
		});
	}

    $scope.onSubmit = function(check){
    	$scope.processing = true;
	    $scope.formError = '';
	    $scope.formSuccess = '';
		data = $scope.leaveData;
		console.log(data);
		LeaveService.submitLeave($scope.leave_id , data).then(function(data){
			if(data.success){

				if($scope.leave_id != 0){
					$scope.leaveData = data.leaveData;
				}else{
					$scope.leaveData = {};
				}

	    		$scope.formSuccess = data.message;
	    		
			}else{
	    		$scope.formError = data;

			}
    		$scope.processing = false;

		});
	}

	$scope.deleteLeave = function(index,leave_id){
		$scope.processing = true;
		LeaveService.deleteLeave(leave_id).then(function(data){
    		if(data.success){
				$scope.leaves.splice(index , 1);
    			$scope.formSuccess = data.message;
    		}else{
    			$scope.formError = data.message;

    		}
			$scope.processing =false;
		});

	}

	$scope.markStatus = function(status,leave_id){
		// console.log(status);
		$scope.processing = true;
		$scope.formSuccess = false;
		$scope.formError = false;
		LeaveService.markStatus(status,leave_id).then(function(data){
			if(data.success){
				$scope.all_leaves();
				$timeout(function() {
					$scope.formSuccess = data.message;
				}, 2000);	
				
			}else{
				$timeout(function() {
					$scope.formError = data;
				}, 2000);
			}
		});
		$timeout(function() {
			$scope.processing = false;
		}, 2000);
	}

	
});