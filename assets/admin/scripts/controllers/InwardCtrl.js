app.controller('InwardCtrl',function($scope , $http ,InwardService, $timeout, Upload){
	
	$scope.inwards = [];
	$scope.count = 0;
	$scope.processing = false;
	$scope.inward_add_access = false;
	$scope.inward_id = 0;
	$scope.document_types = [{id:1, name:'Official'},{id:2,name:'Personal'}];
	$scope.types = [
		{id:1, name:'Document'},
		{id:2,name:'Bill'},
		{id:3,name:'Inventory'},
		{id:5,name:'RTI'},
		{id:4,name:'Others'}
	];
	$scope.forward_types = [{id:1,name:'File'},{id:2,name:'Employee'}];

	$scope.loading = false;

	$scope.track = {};
	$scope.shared_with = [];
	$scope.track_process = false;
	$scope.share_details_process = false;

	$scope.pop_up_id = 0;
	$scope.inward_shared_employees = [];
	$scope.inward_forward_employee = 0;
	$scope.pop_up_type = 0;
	$scope.departments = [];
	$scope.department_tab = 0;

	$scope.process = {
		inward_id : 0,
		inward_process_id : 0,
		share_employees  : [],
		forward_to : 0,
		forward_to_text : ''
	};

	$scope.payment_data = {};
	$scope.payment_inward_id = 0;
	$scope.payment_entries = [];
	$scope.payment_process = false;
	$scope.payment_load_process = false;
	$scope.payment_types = [{id:1,name:'Paid'},{id:2,name:'Partially Paid'},{id:3,name:'Unpaid'}];
	$scope.payment_edit_id = 0;
	
	$scope.inventory_id = 0;
	$scope.inventory_data = {};
	$scope.inventory_items = [];
	$scope.itemDefault = {'item_id':'','quantity':''};
	$scope.itemData = [];

	$scope.Process = function(inward_id, inward_process_id){
		$("#process").modal('show');
		$scope.process.inward_id = inward_id;
		$scope.process.inward_process_id = inward_process_id;
		$scope.process.forward_to = 0;
		$scope.process.forward_to_text = '';
		$scope.process.share_employees = [];
		console.log($scope.process);
	}

	$scope.selectShare = function(inward){
		$("#employees").modal('show');
		$scope.pop_up_type = 1;
		$scope.inward_shared_employees = inward.share_employee_ids;
	}

	$scope.shareSelect = function(employee_id){
		var index = $scope.inward_shared_employees.indexOf(employee_id);
		if( index > -1){
			$scope.inward_shared_employees.splice(index,1);
		} else {
			$scope.inward_shared_employees.push(employee_id);
		}
	}

	$scope.selectShareProcess = function(){
		$("#employees").modal('show');
		$scope.pop_up_type = 1;
		
	}

	$scope.shareSelectProcess = function(employee_id){
		var index = $scope.process.share_employees.indexOf(employee_id);
		if( index > -1){
			$scope.process.share_employees.splice(index,1);
		} else {
			$scope.process.share_employees.push(employee_id);
		}
	}

	$scope.selectForward = function(inward){
		$("#employees").modal('show');
		$scope.pop_up_type = 2;
		$scope.pop_up_id = inward.id;
		$scope.inward_forward_employee = inward.forward_to;
	}

	$scope.forwardSelect = function(employee_id, employee_name){
		console.log(employee_id);
		$scope.inward_forward_employee = employee_id;

		for (var i = $scope.inwards.length - 1; i >= 0; i--) {
			if($scope.inwards[i].id == $scope.pop_up_id){
				$scope.inwards[i].forward_to = employee_id;
				$scope.inwards[i].forward_to_text = employee_name;
			}
		};
	}

	$scope.selectForwardProcess = function(){
		$("#employees").modal('show');
		$scope.pop_up_type = 2;
	}

	$scope.forwardSelectProcess = function(employee_id, employee_name){
		console.log(employee_id);
		$scope.process.forward_to = employee_id;
		$scope.process.forward_to_text = employee_name;
	}

	$scope.initialize = function(){
		
		InwardService.getInitials().then(function(data){
			
			$scope.inward_add_access = data.user_right;
			$scope.departments = data.departments;

		});

		if($scope.inward_id != 0){
			InwardService.getInwardData($scope.inward_id).then(function(data){
				console.log(data.inward);
				$scope.inwards.push(data.inward);
				$scope.loading = false;
			});
		} else {
			$scope.addMore();
		}

	}

	$scope.addMore = function(){
		$scope.count++;
		$scope.inwards.push({
			id : $scope.count,
			inward_no : 0,
			from : "",
			inward_date : "",
			subject : "",
			share_employee_ids : [],
			share_employee_text : '',
			type : "",
			document_type : "",
			forward_type : "",
			forward_to : 0,
			forward_to_text : '',
			attachment : ""
		});
	}

	$scope.fetch_inwards = function(){
		InwardService.inwards().then(function(data){
			if(data.success){
				console.log(data.inwards);
				$scope.inwards = data.inwards;
			} else {
	    		$scope.formError = data;
			}
			$scope.loading = false;
		});
	}

	$scope.onSubmit = function(){
    	$scope.processing = true;
		InwardService.submitInward($scope.inward_id, $scope.inwards[0]).then(function(data){

			if(data.success){
				var index = -1;
				$scope.inwards[0].inward_no = data.inward_no;
				$timeout(function() {
					$scope.inwards.splice(0, 1);
					$scope.processing = false;
					if($scope.inwards.length > 0){
						$scope.onSubmit();
					} else {
						$scope.addMore();
					}
				}, 2000);
			} else {
	    		alert(data.message);
	    		$scope.processing = false;
			}
		});
	};

	$scope.processSubmit = function(){
    	$scope.processing = true;
		InwardService.submitInwardProcess($scope.process).then(function(data){
			if(data.success){
				$scope.processing = false;
				$("#process").modal("hide");
				for (var i = $scope.inwards.length - 1; i >= 0; i--) {
					if($scope.inwards[i].id == $scope.process.inward_id){
						$scope.inwards[i].process_status = 1;
					}
				};
			} else {
	    		alert(data.message);
	    		$scope.processing = false;
			}
		});
	};

	// $scope.deleteInward = function(index,inward_id){
	// 	$scope.processing = true;
	// 	InwardService.deleteInward(inward_id).then(function(data){
 //    		if(data.success){
	// 			$scope.inwards.splice(index , 1);
 //    			$scope.formSuccess = data.message;
 //    		}else{
 //    			$scope.formError = data.message;
 //    		}
 //    		$scope.processing = false;
	// 	});

	// }
		
	$scope.uploadFile = function (file, name, inward) {
		inward.uploadind = true;
		var url = base_url+'/api/upload/file';
        Upload.upload({
            url: url,
            data: {
            	media: file
            }
        }).then(function (resp) {
        	console.log(resp);
            if(resp.data.success){
            	inward.attachment = resp.data.media;
            } else {
            	alert(resp.data.message);
            }
            inward.uploadind = false;
        }, function (resp) {
            console.log('Error status: ' + resp.status);
            inward.uploadind = false;
        }, function (evt) {
            // $scope.uploading_percentage = parseInt(100.0 * evt.loaded / evt.total) + '%';
        });
    }

    $scope.removeFile = function(inward){
    	inward.attachment = '';
    }

    $scope.trackProgress = function(inward_id){
		$("#track").modal('show');
		$scope.track_process = true;
		InwardService.trackInward(inward_id).then(function(data){
			$scope.track = data.track;
			$scope.track_process = false;
		});
    }

    $scope.employeeShared = function(inward_id, process_id){
		$("#shared").modal('show');
		$scope.share_details_process = true;
		InwardService.sharedWith(inward_id,process_id).then(function(data){
			$scope.shared_with = data.shared;
			$scope.share_details_process = false;
		});

    }

    $scope.showDepartment = function(department_id){
    	$scope.department_tab = department_id;
    }

    $scope.PaymentProcess = function(inward_id){
		$("#payment_process").modal('show');
		$scope.payment_inward_id = inward_id;
		$scope.payment_data = {};
		$scope.payment_entries = [];
		$scope.payment_load_process = true;
		$scope.payment_edit_id = 0;
		InwardService.loadPayment(inward_id).then(function(data){
			if(data.success){
				$scope.payment_entries = data.payment_entries;
			} else {
	    		alert(data.message);
			}
		});
	}

	$scope.processPaymentSubmit = function(){
    	$scope.payment_process = true;
		InwardService.processPaymentSubmit($scope.payment_inward_id, $scope.payment_data, $scope.payment_edit_id).then(function(data){
			if(data.success){
				$scope.payment_process = false;
				$("#payment_process").modal("hide");
				for (var i = $scope.inwards.length - 1; i >= 0; i--) {
					if($scope.inwards[i].id == $scope.payment_inward_id){
						$scope.inwards[i].payment_status = data.payment_status;
					}
				};
			} else {
	    		alert(data.message);
	    		$scope.payment_process = false;
			}
		});
	};

	$scope.editPayment = function(entry){
		$scope.payment_edit_id = entry.id;
		$scope.payment_data = entry;
	}


	$scope.InventoryItems = function(inward){

		inward.showInventory = true;
		$scope.inventory_id = 0;
		$scope.inventory_data = {};
		$scope.inventory_items = [];
		$scope.inward_id = inward.id;
		$scope.itemData = [];

		$scope.itemData.push(JSON.parse(JSON.stringify($scope.itemDefault)));

		InwardService.loadInventory(inward.id).then(function(data){
			if(data.success){
				$scope.items = data.items;
				$scope.inventory_items = data.inventory_items;
				if(data.inventory){

					$scope.inventory_id = data.inventory.id;
				}
				$("#process_inventory").modal('show');
			} else {
	    		alert(data.message);
			}
			inward.showInventory = false;
		});

	}

	$scope.addMoreItem = function(){
		$scope.itemData.push(JSON.parse(JSON.stringify($scope.itemDefault)));
	}	

	$scope.addInventoryItems = function(){
		$scope.process_inventory = true;
		var data = $scope.inventory_data;
		data.inward_id = $scope.inward_id;
		data.inventory_id = $scope.inventory_id;
		console.log(data);
		InwardService.addInventoryItems(data).then(function(data){
			if(data.success){
				$("#process_inventory").modal('hide');
			}else{
				alert(data.message);
			}
			$scope.process_inventory = false;
		});
	}

	$scope.removeItem = function(item,index){
		item.deleting = true;
		console.log(item);
		InwardService.removeItem(item).then(function(data){
			if(data.success){
				$scope.inventory_items.splice(index,1);
			}else{
				alert(data.message);
			}
			item.deleting = false;

		});
	}

});