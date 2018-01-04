<div ng-controller="hodCtrl" ng-init="initials()">
	<div >
		<h1 class="page-title">HOD Approvers</h1>
	</div>

	<form name="hod_approvals" ng-submit="updateApprovers()">
		<div class="row" ng-repeat="hod in hodList">
			<div class="col-md-1 form-group">
				<label ng-if="$index==0" style="padding-bottom: 10px;font-size: 16px;">SN</label>
				<div class="form-control">@{{$index+1}}</div>
			</div>
			<div class="col-md-6 form-group">
					<label ng-if="$index==0" style="padding-bottom: 10px;font-size: 16px;">Hod Name / Department</label>
				<div class="form-control">
					@{{hod.employee_name}} / @{{hod.department_name}}
				</div>
			</div>

			<div class="col-md-5 form-group">
				<label ng-if="$index==0" style="padding-bottom: 10px;font-size: 16px;">Hod Approver</label>
				<select class="form-control" ng-model="hod.approver_id" convert-to-number>
					<option value="0">Select</option>
					<option ng-repeat="hods in hodList" value="@{{hods.hod_id}}">@{{hods.employee_name}}</option>
				</select>
				
			</div>

		</div>

		<div>
			<button class="btn blue pull-right" ladda="processing">Update</button>
		</div>
	</form>
</div>