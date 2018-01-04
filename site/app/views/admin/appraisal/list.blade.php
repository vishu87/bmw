<div ng-controller="appraisalCtrl" ng-init="listing()" class="ng-cloak">

    <div class="alert alert-success alert-dismissable" ng-if="form_success">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>
        @{{form_success}}
    </div>

    <div class="alert alert-danger" ng-if="form_error">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <i class="fa fa-ban-circle"></i><strong>Failure!</strong> @{{form_error}}
    </div>
    <div class="row">
        <div class="col-md-8">
            <h1 class="page-title">
                Employee Appraisals
            </h1>
        </div>
        <div class="col-md-4">
            <a href="{{url('/admin/appraisal/add')}}" class="btn btn-sm btn-success pull-right">
                Add Appraisal
            </a>
        </div>
    </div>

    <div ng-if="employeeAppraisals.length > 0">
        <table class="table table-striped table-bordered table-hover table-checkable order-column" datatable="ng">
            <thead>
                <tr>
                    <th style="width: 50px;"> SN</th>
                    <th>Date </th>
                    <th>Employee Name</th>
                    <th>Position </th>
                    <th>Department</th>
                    <th>Remarks </th>
                    <th>Attachment</th>
                    <th> # </th>
                </tr>
            </thead>
            <tbody>
                
                    <tr ng-repeat="appraisal in employeeAppraisals">
                        <td>@{{$index+1}}</td>
                        <td>@{{appraisal.appraisal_date | date:"dd-MM-y"}} </td>
                        <td>@{{appraisal.employee_name}} </td>
                        <td>@{{appraisal.position_name}} </td>
                        <td>@{{appraisal.department_name}} </td>
                        <td>@{{appraisal.remarks}} </td>
                        <td>
                            <a ng-if="appraisal.attachment != ''" href="{{url()}}/@{{appraisal.attachment}}" target="_blank"> View</a>
                        </td>
                        <td>
                            <a class="btn btn-sm btn-primary" href="{{url('/admin/appraisal/add/')}}/@{{appraisal.id}}"><i class="fa fa-edit"> </i> Edit</a>

                            <button type="button"  class="btn red-mint uppercase " ng-click="deleteAppraisal($index , appraisal.id)" data-toggle="confirmation" ng-disabled="processing" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>
                        </td>
                    </tr>
                   
            </tbody>
        </table>
    </div>

</div>
