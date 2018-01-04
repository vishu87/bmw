<!-- Begin  Modal -->
    <div id="addPurchase" class="modal fade in modal-overflow" data-width="790">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            <h4 class="modal-title">@{{(purchase_id != 0)?'Update':'Add'}} Purchase</h4>
        </div>
        <div class="modal-body">
    		<form name="addPurchaseForm" ng-submit="addPurchaseData(addPurchaseForm.$valid)">

                <div class="form-group">
                    <label>Value of the Items <span class="error"> *</span></label><br>
                    <input type="radio" ng-model="purchaseData.value_items" value = "1"> No Value/Sponsored
                    &nbsp;&nbsp;<input type="radio" ng-model="purchaseData.value_items" value = "2"> Less than Rs 5000
                    &nbsp;&nbsp;<input type="radio" ng-model="purchaseData.value_items" value = "3"> More than Rs 5000
                </div>
    			<div class="form-group">
    				<label>Subject <span class="error"> *</span></label>
    				<input type="text" ng-model="purchaseData.subject" class="form-control" required="required">
    			</div>

    			<div class="form-group">
    				<label>Remarks <span class="error"> *</span></label>
    				<input type="text" ng-model="purchaseData.remarks" class="form-control" required="required">
    			</div>

    			<div class="row">
    				<div ng-repeat="purchaseItem in purchaseItems track by $index" class="clear">
    					<div class="col-md-1 form-group">
    						<label ng-if="$index == 0">SN </label>
							<br ng-if="$index ==0">
    						@{{$index+1}}
    					</div>
    					<div class="col-md-5 form-group">
    						<label ng-if="$index == 0">Item</label>
    						<select ng-model="purchaseData.purchaseItem[$index].item_id" class="form-control">
    							<option ng-value="">Select</option>
    							<option ng-repeat="item in items" ng-value="item.id">@{{item.item_name}}</option>
    						</select>
    					</div>
    					<div class="col-md-5 form-group">
    						<label ng-if="$index == 0">Quantity</label>
    						<input type="text" ng-model="purchaseData.purchaseItem[$index].quantity" class="form-control">

    					</div>
    					<div class="col-md-1 form-group">
    						<button type="button" ng-if="$index != 0" class="btn red-mint" ng-click="removeItemOption($index)"><i class="fa fa-remove"></i></button>
    					</div>
    				</div>
    			</div>

			    <div class="row" style="margin-top: 20px">
			        <div class="col-md-6">
                        <button type="button" class="btn btn yellow pull-left" ng-click="addMoreItem()" >Add More Item</button>
			            <button type="button" class="btn btn blue pull-left" ng-click="saveDraft()" ladda="savedraft" ng-if="purchaseData.status == -1 || purchaseData.status == 4">Save Draft</button>
			        </div>
			        <div class="col-md-6">
			            <button class="btn btn green pull-right" ladda="processing">Submit</button>
			        </div>
			    </div>
    		</form>
		    
		</div>

    </div>


    <div id="viewLog" class="modal fade in modal-overflow" data-width="400">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            <h4 class="modal-title">Status logs</h4>
        </div>
        <div class="modal-body">

            <div class="log-status pending" ng-if="log_loan.status == 1">
               <i class="fa fa-warning"></i> Pending for approval by HOD
            </div>
            <div class="log-status approved" ng-if="log_loan.status == 2">
                <i class="fa fa-check"></i> Approved by HOD
            </div>
            <div class="log-status closed" ng-if="log_loan.status == 3">
               <i class="fa fa-check"></i> Closed
            </div>
            <div class="log-status revert-back" ng-if="log_loan.status == 4">
                <i class="fa fa-warning"></i> Revert Back
            </div>

            <div class="ng-cloak">
                <div ng-repeat="log in logs track by $index" class="log">
                    <div class="remarks">@{{log.remarks}}</div>
                    <div class="name">by @{{log.user_name}} <span class="date">@{{log.user_name}}</span></div>
                </div>
                <div ng-if="logs.length == 0" style="text-align: center;">No remarks are available</div>
            </div>
        </div>

    </div>

    
    <!-- <div id="purchaseItems" class="modal fade in modal-overflow" data-width="790">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            <h3 class="modal-title uppercase">Subject - @{{showPurchaseItems.subject}}</h3>
        </div>
        <div class="modal-body">
        	<h1 class="page-title">Remarks - <small>@{{showPurchaseItems.remarks}}</small> </h1>
		    <div class="ng-cloak">
		        <table class="table table-striped table-bordered table-hover table-checkable order-column" datatable="ng">
		            <thead>
		                <tr>
		                    <th style="width: 50px;"> SN</th>
		                    <th> Item  </th>
		                    <th> Quantity  </th>
		                </tr>
		            </thead>
		            <tbody>
		                <tr ng-repeat="item in showPurchaseItems.purchaseItem">
		                    <td>@{{$index+1}}</td>
		                    <td>@{{item.item_name}}</td>
		                    <td>@{{item.quantity}}</td>
		                </tr>
		            </tbody>
		        </table>

		        <div class="row" style="margin-top: 20px" >
                    <div class="col-md-5">
                        <a class="btn green pull-right" href="{{url('/purchase/getPrint')}}/@{{showPurchaseItems.id}}" target="_blank"><i class="fa fa-print"></i> Print</a>
                        
                    </div>
                    <div class="col-md-7" ng-if="showPurchaseItems.approval_access">
                        
			            <button ng-if="showPurchaseItems.status != 2" class="btn  blue" ng-click="togglePurchaseStatus(showPurchaseItems , 2)" ladda="showPurchaseItems.processing1" style="margin-right:10px;">
                            Delivered
                        </button>

                        <button ng-if="showPurchaseItems.status != 0" class="btn  red-mint" ng-click="togglePurchaseStatus(showPurchaseItems , 0)" ladda="showPurchaseItems.processing2" style="margin-right:10px;">
                            Pending
                        </button>

                        <button ng-if="showPurchaseItems.status != 1" class="btn  yellow" ng-click="togglePurchaseStatus(showPurchaseItems , 1)" ladda="showPurchaseItems.processing0">
                            In Process
                        </button>
			        </div>
			    </div>
		    </div>
		</div>
    </div> -->
<!-- End modal -->

    <div id="forwardModal" class="modal fade in modal-overflow" data-width="800" data-top="50px">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            <h4 class="modal-title">Purchase Request</h4>
        </div>
        <div class="modal-body">
            <div ng-if="open_purchase">
                <!-- hod -->
                <div ng-if="open_purchase.status == 1">
                    <form name="addPurchaseForm" ng-submit="submitRemark(addPurchaseForm.$valid)">
                        <div class="form-group">
                            <label>Remarks <span class="error"> *</span></label>
                            <input type="text" ng-model="remarkData.remarks" class="form-control" required="required">
                        </div>
                        <div style="margin-top: 20px">
                            <button class="btn btn green" ladda="open_purchase.processing">Approve</button>
                        </div>
                    </form>
                </div>
                <!-- hod end -->

                 <!-- purchase manager -->
                <div ng-if="open_purchase.status == 2">
                    <form name="addPurchaseForm" ng-submit="submitRemark(addPurchaseForm.$valid)">
                        <div class="form-group">
                            <label>Remarks <span class="error"> *</span></label>
                            <input type="text" ng-model="remarkData.remarks" class="form-control" required="required">
                        </div>
                        <div style="margin-top: 20px">
                            <button class="btn btn green" ladda="open_purchase.processing">Approve</button>
                        </div>
                    </form>
                </div>
                <!-- purchase manager end -->

                <!-- purchase committee -->
                <div ng-if="open_purchase.status == 3">
                    <form name="addPurchaseForm" ng-submit="submitRemark(addPurchaseForm.$valid)">
                        <div class="form-group">
                            <label>Select Vendor <span class="error"> *</span></label>
                            <select ng-model="remarkData.vendor_id" class="form-control" required="required">
                                <option value="1">Vendor 1</option>
                                <option value="2">Vendor 2</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Amount <span class="error"> *</span></label>
                            <input type="text" ng-model="remarkData.amount" class="form-control" required="required">
                        </div>
                        <div class="form-group">
                            <label>Remarks <span class="error"> *</span></label>
                            <input type="text" ng-model="remarkData.remarks" class="form-control" required="required">
                        </div>
                        <div style="margin-top: 20px">
                            <button class="btn btn green" ladda="open_purchase.processing">Approve</button>
                        </div>
                    </form>
                </div>
                <!-- purchase committee end -->

                <!-- purchase committee -->
                <div ng-if="open_purchase.status == 4">
                    <form name="addPurchaseForm" ng-submit="submitRemark(addPurchaseForm.$valid)">
                        <div class="form-group">
                            <label>Select Vendor <span class="error"> *</span></label>
                            <select ng-model="remarkData.vendor_id" class="form-control" required="required">
                                <option value="1">Vendor 1</option>
                                <option value="2">Vendor 2</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Purchase Order Number (SAP Generated)<span class="error"> *</span></label>
                            <input type="text" ng-model="remarkData.purchase_order_no" class="form-control" required="required">
                        </div>
                        <div class="form-group">
                            <label>Purchase Order Date <span class="error"> *</span></label>
                            <input type="text" ng-model="remarkData.purchase_order_date" class="form-control datepicker" required="required">
                        </div>
                        <div class="form-group">
                            <label>Remarks <span class="error"> *</span></label>
                            <input type="text" ng-model="remarkData.remarks" class="form-control" required="required">
                        </div>
                        <div style="margin-top: 20px">
                            <button class="btn btn green" ladda="open_purchase.processing">Approve</button>
                        </div>
                    </form>
                </div>
                <!-- purchase committee end -->

                 <!-- purchase committee -->
                <div ng-if="open_purchase.status == 5">
                    <form name="addPurchaseForm" ng-submit="submitRemark(addPurchaseForm.$valid)">
                        <div class="form-group">
                            <label>Inward No. <span class="error"> *</span></label>
                            <input type="text" ng-model="remarkData.inward_no" class="form-control" required="required">
                        </div>
                        <div class="form-group">
                            <label>Remarks <span class="error"> *</span></label>
                            <input type="text" ng-model="remarkData.remarks" class="form-control" required="required">
                        </div>
                        <div style="margin-top: 20px">
                            <button class="btn btn green" ladda="open_purchase.processing">Close</button>
                        </div>
                    </form>
                </div>
                <!-- purchase committee end -->

            </div>
        </div>

    </div>