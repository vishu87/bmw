<div ng-controller="PurchaseCtrl" ng-init="type={{$type}};initials()">
    <div class="row">
        <div class="col-md-8">
            <h1 class="page-title" style="margin-top: 0">
                @if($type == 0)
                    My Reuqests
                @elseif($type == 1)
                    Purchase Request Approval
                @elseif($type == 2)
                    Purchase Manager
                @elseif($type == 3)
                    Purchase Committee
                @elseif($type == 4)
                    Purchase Department
                @endif
            </h1>
        </div>
        @if($type == 0)
        <div class="col-md-4" ng-if="type==0">
            <button class="btn blue pull-right" ng-click="addPurchase()">Add New</button>
        </div>
        @endif
    </div>

    
    <ul class="nav nav-tabs ng-cloak hidden" >
        <li class="@{{(type==0)?'active':''}}"><a href="{{url('/purchase?type=0')}}">My Request</a></li>
        <li ng-show="purchase_access || hod" class="@{{(type==1)?'active':''}}"><a href="{{url('/purchase?type=1')}}">For Approval</a></li>
        <li ng-show="purchase_access" class="@{{(type==2)?'active':''}}"><a href="{{url('/purchase?type=2')}}">History</a></li>
       
    </ul>

    <div class="ng-cloak" ng-if="!loading">
        <table class="table table-striped table-bordered table-hover table-checkable order-column" datatable="ng">
            <thead>
                <tr>
                    <th style="width: 50px;"> SN</th>
                    <th> Subject</th>
                    <th>Remarks</th>
                    <th>Added By</th>
                    <th>Status</th>
                    <th style="width: 200px;"> # </th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="purchase in purchases track by $index">
                    <td> @{{$index+1}}</td>
                    <td> @{{purchase.subject}}</td>
                    <td> @{{purchase.remarks}}</td>
                    <td> @{{purchase.user_name}}</td>
                    <td >
                         <a href="javascript:;" ng-click="viewLog(purchase)">
                            @{{purchase.status_value}}
                        </a>
                    </td>
                    <td>

                        <button ladda="purchase.processing" ng-if="(purchase.status == 0 || purchase.status == 7) && type == 0" class="btn btn-sm yellow" ng-click="editPurchase(purchase)" ng-disabled="purchase.processing">
                            Edit
                        </button>

                       <!--  <button ladda="purchase.processing" ng-if="purchase.status == 1 && hod && type==1" class="btn  btn-sm green" ng-click="togglePurchaseStatus(purchase, 2)" ng-disabled="purchase.processing" tooltips tooltip-template="Approve">
                            <i class="fa fa-check"></i> Approve
                        </button>

                        <button ladda="purchase.processing" ng-if="purchase.status == 2 && purchase_access && type==1" class="btn  btn-sm green" ng-click="togglePurchaseStatus(purchase, 3)" ng-disabled="purchase.processing" tooltips tooltip-template="Close the request">
                            <i class="fa fa-check"></i> Close
                        </button> -->

                        <button ladda="purchase.processing" ng-if="type != 0 && type != 7 && type != 8" class="btn btn-sm red" ng-click="togglePurchaseStatus(purchase, 4)" ng-disabled="purchase.processing" tooltips tooltip-template="Revert Back" >
                            <i class="fa fa-undo"></i>
                        </button>

                        <button ladda="purchase.processing" ng-if="type != 0 && type != 7" class="btn btn-sm yellow" ng-click="addRemark(purchase)" ng-disabled="purchase.processing">
                            @{{purchase.status == 5 ? 'Close' : 'Forward'}}
                        </button>

                        <!--delete power only for purchase manager -->
                        <button ladda="purchase.processing" class="btn  btn-sm red-mint" ng-if="type == 2" ng-click="deletePurchase(purchase,$index)" ng-disabled="purchase.processing">
                            <i class="fa fa-remove"></i>
                        </button>

                    </td>
                </tr>
                    
            </tbody>
        </table>
    </div>
        
    @include('admin.purchase.angular_modal')    
</div>