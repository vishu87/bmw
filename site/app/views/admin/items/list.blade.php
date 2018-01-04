<div ng-controller="itemCtrl" ng-init="initials()">
    <div class="row">
        <div class="col-md-8">
            <h1 class="page-title" style="margin-top: 0">
                Items
            </h1>
        </div>
        <div class="col-md-4">
            <button class="btn blue pull-right" ng-click="addCategory()">Add Category</button>
        </div>
    </div>


    <div class="ng-cloak">
        <table class="table table-striped table-bordered table-hover table-checkable order-column" id="table">
            <thead>
                <tr>
                    <th style="width: 50px;"> SN</th>
                    <th> Item Categories </th>
                    <th> # </th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="category in categories">
                    <td> @{{$index+1}}</td>
                    <td> @{{category.category_name}} </td>
                    
                    <td>

                        <button class="btn btn-sm yellow" ng-click="editCategory(category)" ><i class="fa fa-edit"></i> Edit</button>
                        <button class="btn btn-sm btn-primary" ng-click="CategoryItems(category)" > Items</button>

                        <button class="btn red-mint uppercase" ng-click="removeCategory(category,$index)" ><i class="fa fa-remove"></i></button>

                    </td>
                </tr>
                    
            </tbody>
        </table>
    </div>
        
    @include('admin.items.angular_modal')    
</div>