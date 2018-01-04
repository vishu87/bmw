<div class="ng-cloak" ng-controller="salaryCtrl" ng-init="month_id={{(Input::has('month_id'))?Input::get('month_id'):0}}; year_id={{(Input::has('year_id'))?Input::get('year_id'):0}};initials()">
	
	<div class="ng-cloak">
        <table datatable="table" class="table table-striped table-bordered table-hover table-checkable order-column " id="table">
            <thead>
                <tr>
                    <th style="width: 50px;"> SN</th>
                    <th>Employee Name</th>
                    <th>Salary Slip</th>
                </tr>
            </thead>
            <tbody class="ng-cloak">
                
                <tr ng-repeat="employee in employees">
                    <td>@{{$index + 1}}</td>
                    <td>@{{employee.employee_name}}</td>
                    <td>
                    	<div class="form-group">
                            
                            <button ng-show="employee.salary_slip == ''" class="button btn upload-btn" ngf-select="uploadFile($file,'file',employee)" ngf-max-size="5MB" ladda="employee.uploading" data-style="expand-right" >Select Document</button>

                            <a class="btn blue ng-cloak" href="{{url('/')}}/@{{employee.salary_slip}}" ng-show="employee.salary_slip != '' " target="_blank">View</a>

                            <button class="btn red ng-cloak" ng-click="removeFile($index)" ng-show="employee.salary_slip != '' "><i class="fa fa-remove"></i></button>
                        </div>
                    </td>
                </tr>
                    
            </tbody>
        </table>

        <button ladda="processing" class="btn blue" ng-click="updateSalaries(month_id,year_id)">Update Salaries</button>
    </div>

</div>
