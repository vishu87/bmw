<!-- Begin  Modal -->
    <div id="addCategory" class="modal fade in modal-overflow" data-width="790">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            <h4 class="modal-title">@{{(category_id != 0)?'Update':'Add'}} Category</h4>
        </div>
        <div class="modal-body">
    		<form name="addCategoryForm" ng-submit="addCategoryData(addCategoryForm.$valid)">
    			<div class="form-group">
    				<label>Category Name</label>
    				<input type="text" ng-model="categoryData.category_name" class="form-control">
    			</div>
			    <div class="row" style="margin-top: 20px">
			        <div class="col-md-6" style="text-align: right;">
			            <button class="btn btn green" ladda="processing">Submit</button>
			        </div>
			    </div>
    		</form>
		    
		</div>

    </div>
    <div id="addItems" class="modal fade in modal-overflow" data-width="790">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            <h4 class="modal-title"> Add Items</h4>
        </div>
        <div class="modal-body">
    		<form name="addCategoryItemForm" ng-submit="addCategoryItem(addCategoryItemForm.$valid)">
    			<div class="form-group">
    				<label>Item Name</label>
    				<input type="text" ng-model="itemData.item_name" class="form-control">
    			</div>
			    <div class="row" style="margin-top: 20px">
			        <div class="col-md-6" style="text-align: right;">
			            <button class="btn btn green" ladda="processing">Submit</button>
			        </div>
			    </div>
    		</form>
    		<h2 class="page-title">@{{category_name}}</h2>
		    <div class="ng-cloak">
		        <table class="table table-striped table-bordered table-hover table-checkable order-column" id="table">
		            <thead>
		                <tr>
		                    <th style="width: 50px;"> SN</th>
		                    <th> Item  </th>
		                    <th> # </th>
		                </tr>
		            </thead>
		            <tbody>
		                <tr ng-repeat="item in category_items">
		                    <td> @{{$index+1}}</td>
		                    <td ng-if="!item.edit"> @{{item.item_name}} </td>
		                    <td ng-if="item.edit"> 
		                    	<input type="text" ng-model="item.item_name" class="form-control">
		                    </td>
		                    
		                    <td>

		                        <button ng-if="!item.edit" class="btn btn-sm yellow" ng-click="item.edit=true" ><i class="fa fa-edit"></i> Edit</button>

		                        <button type="button" ng-if="item.edit" class="btn btn-sm btn-primary" ng-click="updateCategoryItem(item)" ladda="item.processing" ><i class="fa fa-edit"></i> Update</button>

		                        <button class="btn red-mint uppercase" ng-click="removeItem(item,$index)"><i class="fa fa-remove"></i></button>
		                    </td>
		                </tr>
		                    
		            </tbody>
		        </table>
		    </div>
		</div>

    </div>
<!-- End modal -->