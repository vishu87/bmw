app.controller('LoanCtrl',function($scope , $http ,LoanService){
	$scope.loans = [];
	$scope.type = 0;
	$scope.loanData = {};
	$scope.loan_id = 0;
	$scope.loan_access = false;
	$scope.hod = false;

	$scope.initials = function(){

		LoanService.initials($scope.type).then(function(data){
			console.log(data);
			if(data.success){
				$scope.loans = data.loans;
				$scope.items = data.items;
				$scope.loan_access = data.loan_access;
				$scope.hod = data.hod;
			}
		});
		
	}	

	$scope.addLoan = function(){
		$scope.loan_id = 0;
		$scope.loanData = {};
		$("#addLoan").modal("show");
	}

	$scope.addLoanData = function(){
		console.log($scope.loanData);
		$scope.processing = true;
		LoanService.addLoanData($scope.loanData).then(function(data){
			if(data.success){
				if($scope.loan_id != 0){
					for (var i = $scope.loans.length - 1; i >= 0; i--) {
						if($scope.loans[i]['id'] == data.loan.id){
							$scope.loans[i] = data.loan;
						}
					}
				} else {
					$scope.loans.push(data.loan);
				}
				
				$("#addLoan").modal("hide");
				
				$.notific8(data.message,{life:4000,theme: 'teal'});
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
			$scope.processing = false;
		});

	}

	$scope.editLoan = function(loan){
		$scope.loan_id = loan.id;
		$scope.loanData = loan;
		$("#addLoan").modal("show");

	}

	$scope.removeItemOption = function(index){
		$scope.purchaseItems.splice(index,1);
	}

	$scope.deleteLoan = function(loan,index){

		bootbox.confirm("Are you sure ?",function(result){
			if(result){
				loan.processing = true;
				LoanService.deleteLoan(loan).then(function(data){
					if(data.success){
						$scope.loans.splice(index,1);
						loan.processing = false;
					}else{
						bootbox.alert(data.message);
					}
				});
			}
		});
	}

	$scope.toggleLoanStatus = function(loan,status){

		bootbox.prompt({
		    title: "Please enter remark",
		    inputType: 'textarea',
		    callback: function (result) {
		    	if(result){
		        	console.log(status);
					loan['processing'] = true;
					loan['approval_remarks'] = result;
					loan['status'] = status;
					console.log(loan);
					LoanService.toggleLoanStatus(loan).then(function(data){
						console.log(data);
						if(data.success){
							window.location = base_url + '/loans?type='+$scope.type;
						}else{
							$.notific8(data.message,{life:4000,theme: 'ruby'});
						}
						loan['processing'] = false;
					});
		    	}
		    }
		});
	}

	$scope.viewLog = function(loan){
		$scope.logs = [];
		LoanService.viewLog(loan.id).then(function(data){
			if(data.success){
				console.log(data);
				$scope.log_loan = loan;
				$scope.logs = data.logs;
				$("#viewLog").modal("show");
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
		});
	}
	
	$scope.addRemark = function(loan){

		bootbox.prompt({
		    title: "Please enter remark",
		    inputType: 'textarea',
		    callback: function (result) {
		    	if(result){
		        	console.log(status);
					loan['processing'] = true;
					loan['remarks'] = result;
					console.log(loan);
					LoanService.addRemark(loan).then(function(data){
						console.log(data);
						if(data.success){
							$.notific8(data.message,{life:4000,theme: 'teal'});
						}else{
							$.notific8(data.message,{life:4000,theme: 'ruby'});
						}
						loan['processing'] = false;
					});
		    	}
		    }
		});
	}
});