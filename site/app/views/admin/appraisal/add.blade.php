<div ng-controller="appraisalCtrl" ng-init="appraisal_id = {{$appraisal_id}};initials();" class="ng-cloak">
    <div class="row">
        <div class="col-md-8"><h1 class="page-title">@{{appraisal_id == 0 ? 'Add' : 'Update'}} Employee Appraisal</h1></div>
        <div class="col-md-4"><a href="{{url('/admin/appraisal')}}" class="btn btn-sm btn-success pull-right">Go back</a></div>
    </div>

    <div class="alert alert-success alert-dismissable" ng-if="form_success">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>
        @{{form_success}}
    </div>

    <div class="alert alert-danger" ng-if="form_error">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <i class="fa fa-ban-circle"></i><strong>Failure!</strong> @{{form_error}}
    </div>

    <div class="row" >
        <div class="col-md-6 form-group">
            <label>Employee<span class="error"> *</span></label>
            <select ng-model="appraisalData.employee_id" class="form-control" >
                <option ng-repeat="employee in employee_arr" ng-value="employee.id">@{{employee.employee_name}}</option>
            </select>
        </div>

        <div class="col-md-6 form-group">
            <label>Date <span class="error"> *</span></label>
            <input type="text" ng-model="appraisalData.appraisal_date" class="form-control datepicker" placeholder="date">
        </div>

        <div class="col-md-6 form-group">
            <label>Position <span class="error"> *</span></label>
            <select ng-model="appraisalData.position_id" class="form-control" >
                <option ng-repeat="position in position_arr" ng-value="position.id">@{{position.position_name}}</option>
            </select>
        </div>

        <div class="col-md-6 form-group">
            <label>Department <span class="error"> *</span></label>
            <select ng-model="appraisalData.department_id" class="form-control" >
                <option ng-repeat="department in department_arr" ng-value="department.id">@{{department.department_name}}</option>
            </select>
        </div>

        <div class="col-md-6 form-group">
            <label>Remarks <span class="error"> *</span></label>
            <input type="text" ng-model="appraisalData.remarks" class="form-control " placeholder="Remarks">
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Attachment </label><br>
                <button ng-show="appraisalData.attachment == ''" class="button btn upload-btn" ngf-select="uploadFile($file,'attachment')" ngf-max-size="5MB" ladda="uploading_attachment" data-style="expand-right" >Select Document</button>
                <a class="btn blue ng-cloak" href="{{url('/')}}/@{{attachment}}" ng-show="appraisalData.attachment != '' " target="_blank">View</a>
                <a class="btn red ng-cloak" ng-click="removeFile('attachment')" ng-show="appraisalData.attachment != '' "><i class="fa fa-remove"></i></a>
            </div>
        </div>

    </div>
    <div>
        <button class="btn btn-success btn-sm " ng-disabled="processing" type="button" ng-click="onSubmit()" style="margin-bottom: 25px;" >@{{appraisal_id == 0 ? 'Add' : 'Update'}}</button>
    </div>

</div>
