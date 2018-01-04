app.controller('itemCtrl',function($scope , $http ,ItemService){
	$scope.categories = [];
	$scope.categoryData = {};
	$scope.processing = false;
	$scope.category_id = 0;
	$scope.category_items = [];
	$scope.itemData = {};

	$scope.initials = function(){
    	console.log('m run');

		ItemService.initials().then(function(data){
			if(data.success){
				$scope.categories = data.categories;
			}
		});
	}	

	$scope.addCategory = function(){
		$scope.category_id = 0;
		$scope.categoryData = {};
		$("#addCategory").modal("show");
	}

	$scope.addCategoryData = function(){
		$scope.processing = true;
		ItemService.addCategoryData($scope.categoryData).then(function(data){
			if($scope.category_id != 0){
				for (var i = $scope.categories.length - 1; i >= 0; i--) {
					if($scope.categories[i]['id'] == data.category.id){
						$scope.categories[i] == data.category;
					}
				}
			}else{
				$scope.categories.push(data.category);
			}
			$scope.processing  = false;
			$("#addCategory").modal("hide");
			$scope.category_id = 0;
		});

	}

	$scope.editCategory = function(category){
		$scope.categoryData = category;
		$scope.category_id = category.id;
		$("#addCategory").modal("show");	

	}

	$scope.CategoryItems = function(category){
		$scope.category_id = category.id;
		ItemService.categoryItems(category).then(function(data){
			$scope.category_items = data.category_items;
		});
		$scope.itemData = {};
		$scope.category_name = category.category_name;
		$("#addItems").modal("show");
	}

	$scope.addCategoryItem = function(){
		$scope.processing = true;
		$scope.itemData['category_id'] = $scope.category_id;
		ItemService.addCategoryItem($scope.itemData).then(function(data){
			$scope.category_items.push(data.item);
			$scope.itemData = {};
			$scope.addCategoryItemForm.$setPristine();
			$scope.processing  = false;
		});

	}

	$scope.updateCategoryItem = function(item){
		item.processing = true;
		ItemService.addCategoryItem(item).then(function(data){

			if(data.success){
				item.processing = false;
				item.edit = false;
				item = data.item;
			}else{
				bootbox.alert(data.message);
				item.processing = false;
			}
			
			
		});

	}

	$scope.removeCategory = function(category,index){
		bootbox.confirm("Are you sure ?",function(result){
			if(result){
				ItemService.removeCategory(category).then(function(data){
					if(data.success){

						$scope.categories.splice(index,1);
					}
				});
			}
		});
	}

	$scope.removeItem = function(item,index){

		bootbox.confirm("Are you sure ?",function(result){
			if(result){
				ItemService.removeItem(item).then(function(data){
					if(data.success){
						$scope.category_items.splice(index,1);	
					}
				});
			}
		});
		
	}

});