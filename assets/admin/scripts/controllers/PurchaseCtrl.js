app.controller('PurchaseCtrl',function($scope , $http ,PurchaseService){
	$scope.purchases = [];
	$scope.type = 0;
	$scope.purchaseData = {};
	$scope.purchaseData.purchaseItems = [];
	$scope.purchase_id = 0;
	$scope.items = [];
	$scope.purchaseItems = [{item_id:'',quantity:''}];
	$scope.showPurchaseItems = [];

	$scope.remarkData = {};

	$scope.loading = true;

	$scope.initials = function(){

		PurchaseService.initials($scope.type).then(function(data){
			console.log(data);
			if(data.success){
				$scope.purchases = data.purchases;
				$scope.items = data.items;
				$scope.purchase_access = data.purchase_access;
				$scope.hod = data.hod;
				$scope.loading = false;
				// $scope.purchaseStatus = data.purchaseStatus;
			}
		});
		
	}	

	$scope.addPurchase = function(){
		$scope.purchase_id = 0;
		$scope.purchaseItems = [{item_id:'',quantity:''}];
		$scope.purchaseData = {};

		$("#addPurchase").modal("show");
	}

	$scope.addMoreItem = function(){
		$scope.purchaseItems.push({item_id:'',quantity:''});
	}

	$scope.addPurchaseData = function(){
		console.log($scope.purchaseData);
		$scope.processing = true;
		PurchaseService.addPurchaseData($scope.purchaseData).then(function(data){
			if(data.success){
				if($scope.purchase_id != 0){
					for (var i = $scope.purchases.length - 1; i >= 0; i--) {
						if($scope.purchases[i]['id'] == data.purchase.id){
							$scope.purchases[i] = data.purchase;
						}
					}
				}else{
					$scope.purchases.push(data.purchase);
				}
				$("#addPurchase").modal("hide");
				$.notific8(data.message,{life:4000,theme: 'teal'});
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
			$scope.processing = false;
		});

	}

	$scope.saveDraft = function(){
		$scope.purchaseData.status = -1;
		console.log($scope.purchaseData);
		$scope.savedraft = true;
		PurchaseService.addPurchaseData($scope.purchaseData).then(function(data){
			if(data.success){
				if($scope.purchase_id != 0){
					for (var i = $scope.purchases.length - 1; i >= 0; i--) {
						if($scope.purchases[i]['id'] == data.purchase.id){
							$scope.purchases[i] = data.purchase;
						}
					}
				}else{
					$scope.purchases.push(data.purchase);
				}
				$("#addPurchase").modal("hide");
				$.notific8(data.message,{life:4000,theme: 'teal'});
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
			$scope.savedraft = false;
		});

	}

	$scope.editPurchase = function(purchase){
		$scope.purchase_id = purchase.id;

		PurchaseService.editPurchase(purchase).then(function(data){
			console.log(data);
			if(data.success){
				$scope.purchaseItems = data.purchaseData.purchaseItem;
				$scope.purchaseData = data.purchaseData;
				$("#addPurchase").modal("show");
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
		});

	}

	$scope.removeItemOption = function(index){
		$scope.purchaseItems.splice(index,1);
	}

	$scope.deletePurchase = function(purchase,index){

		bootbox.confirm("Are you sure ?",function(result){
			if(result){
				PurchaseService.deletePurchase(purchase).then(function(){
					$scope.purchases.splice(index,1);
				});
			}
		});
	}

	$scope.viewPurchaseItems = function(purchase){
		PurchaseService.editPurchase(purchase).then(function(data){
			console.log(data);
			if(data.success){
				$scope.showPurchaseItems= data.purchaseData;
				$("#purchaseItems").modal("show");
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
		});

	}

	$scope.viewLog = function(purchase){
		$scope.logs = [];
		PurchaseService.viewLog(purchase.id).then(function(data){
			if(data.success){
				console.log(data);
				$scope.log_purchase = purchase;
				$scope.logs = data.logs;
				$("#viewLog").modal("show");
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
		});
	}

	$scope.addRemark = function(purchase){
		$scope.open_purchase = purchase;
		$scope.remarkData = {};
		$("#forwardModal").modal('show');
	}

	$scope.submitRemark = function(){
		console.log($scope.remarkData);
		// return;
		$scope.open_purchase.processing = true;
		PurchaseService.submitRemark($scope.remarkData, $scope.open_purchase.id).then(function(data){
			console.log(data);
			if(data.success){
				$.notific8(data.message,{life:4000,theme: 'teal'});
				$("#forwardModal").modal('hide');
				$scope.open_purchase.processing = false;
				if(data.remove_from_list){
					for (var i = 0; i < $scope.purchases.length; i++) {
						if($scope.purchases[i].id == $scope.open_purchase.id){
							$scope.purchases.splice(i,1);
						}
					};
				}
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
		});
	}


	// $scope.togglePurchaseStatus = function(showPurchaseItems,status){

	// 	bootbox.prompt({
	// 	    title: "Leave a remark for this approval",
	// 	    inputType: 'textarea',
	// 	    callback: function (result) {
	// 	    	if(result){
	// 	        	console.log(status);
	// 				showPurchaseItems['processing'+status] = true;
	// 				showPurchaseItems['approval_remarks'] = result;
	// 				showPurchaseItems['status'] = status;
	// 				console.log(showPurchaseItems);
	// 				PurchaseService.togglePurchaseStatus(showPurchaseItems).then(function(data){
	// 					console.log(data);
	// 					if(data.success){
	// 						window.location = base_url + '/purchase?type='+$scope.type;
	// 						$("#purchaseItems").modal("hide");
	// 					}else{
	// 						$.notific8(data.message,{life:4000,theme: 'ruby'});
	// 					}
	// 					showPurchaseItems['processing'+status] = false;
	// 				});
	// 	    	}
	// 	    }
	// 	});
	// }
});