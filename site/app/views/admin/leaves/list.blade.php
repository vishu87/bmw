<div ng-controller="leavesCtrl" ng-init="all_leaves(); status_type={{(Input::has('status_type'))?Input::get('status_type'):0}}" class="ng-cloak">
    <div class="row">
        <div class="col-md-8">
            <h1 class="page-title" style="margin-top: 0">
                Leave Requests
            </h1>
        </div>
    </div>

    <div class="alert alert-danger alert-dimissiable" ng-if="formError">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>
        @{{formError}}
    </div>

    <div class="alert alert-success alert-dimissiable" ng-if="formSuccess">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>
        @{{formSuccess}}
    </div>
    
    <ul class="nav nav-tabs">
        
        <li class="@{{status_type == 0 ? 'active':''}}">
            <a href="{{url('admin/leaves?status_type=0')}}"> Pending</a>
        </li>

        <li class="@{{status_type == 1 ? 'active':''}}">
            <a href="{{url('admin/leaves?status_type=1')}}"> Approved</a>
        </li>

        <li class="@{{status_type == 2 ? 'active':''}}">
            <a href="{{url('admin/leaves?status_type=2')}}"> Rejected</a>
        </li>

    </ul>
    <div class="opac" style="background: #fff;opacity: .7 ; width: 100%;height: 100%;z-index: 1;position: fixed" ng-if="processing">
        <i style="position: absolute;top:30%;left: 36%;font-size: 25px;" class="fa fa-spin fa-spinner"></i>
    </div>
    <div>
        <table datatable="ng" class="table table-striped table-bordered table-hover table-checkable order-column">
            <thead>
                <tr>
                    <th style="width: 50px;"> SN</th>
                    <th>Employee Name</th>
                    <th>Employee No</th>
                    <th>Type</th>
                    <th>Leave Type</th>
                    <th style="width: 100px;">From</th>
                    <th style="width: 100px;">To</th>
                    <th>Remarks</th>
                    <th style="width: 200px;">#</th>
                </tr>
            </thead>
            <tbody>
                
                <tr ng-repeat="leave in leaveRequests | filter :{status:status_type} | orderBy:created_at">
                    <td>@{{$index + 1}}</td>
                    <td>@{{leave.employee_name}}</td>
                    <td>@{{leave.employee_no}}</td>
                    <td>@{{leave.type == 1?'Official':'Personal'}}</td>
                    <td>@{{leave_list[leave.leave_type]}}</td>
                    <td>@{{leave.start_date | date:'dd-MM-yyyy'}}</td>
                    <td>@{{leave.end_date | date:'dd-MM-yyyy'}}</td>
                    <td>@{{leave.remarks}}</td>
                    <td>

                        <button type="button" ng-hide="status_type==1"  ng-click="markStatus(1,leave.id)" class="btn btn-sm btn-success " data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000" ><i class="fa fa-check"></i> Approve</button>

                        <button type="button" ng-hide="status_type==0"  ng-click="markStatus(0,leave.id)" class="btn btn-sm btn-primary " data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000" ><i class="fa fa-check"></i> Pending</button>

                        <button type="button" ng-hide="status_type==2"  ng-click="markStatus(2,leave.id)" class="btn btn-sm btn-danger " data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000" ><i class="fa fa-remove"></i> Reject</button>


                    </td>
                </tr>
                    
            </tbody>
        </table>
    </div>


</div>