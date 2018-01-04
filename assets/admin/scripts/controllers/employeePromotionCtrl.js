app.controller('employeePromotionCtrl',function($scope ,$timeout , $http ,EmployeePromotionService){
	$scope.promotionData = {};
	$scope.position_arr = [];
	$scope.department_arr = [];
	$scope.employeePromotions = [];
	$scope.processing = false;
	$scope.employee_id = 0;
	$scope.form_success = false;
	$scope.form_error = false;
	
	$scope.promotions = function(){
		EmployeePromotionService.employeePromotions($scope.employee_id).then(function(data){
	   		$scope.employeePromotions = data.employeePromotions;
	   	});
	}

   	$scope.submitPromotion = function(data){
   		$scope.form_success = false;
		$scope.form_error = false;

   		if($scope.employee_id != 0){
   			$scope.processing = true;
	   		EmployeePromotionService.submitPromotion($scope.employee_id,data).then(function(data){
		   		$scope.employeePromotions = data.employeePromotions;
	   			$scope.processing = false;
		   		if(data.success){
		   			$scope.form_success = data.message;
		   			$scope.promotionData = {};
		   		}else{
		   			$scope.form_error = data.message;
		   		}

		   	});
   		}
   		$timeout(function(){
   			$scope.processing = false;
   		},4000);
   	}

   	EmployeePromotionService.position_array().then(function(data){
   		$scope.position_arr = data.positions;
   		$scope.department_arr = data.departments;
   	});
   	

   	$scope.deletePromotion = function(index,emp_promotion_id){
		$scope.processing = true;
		EmployeePromotionService.deletePromotion(emp_promotion_id).then(function(data){
    		if(data.success){
				$scope.employeePromotions.splice(index , 1);
    			$scope.form_success = data.message;
    		}else{
    			$scope.form_error = data.message;

    		}
			$scope.processing =false;
		});

	}

});