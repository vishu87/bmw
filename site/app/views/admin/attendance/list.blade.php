<div>
    <div class="row">
        <div class="col-md-6">
            <h1 class="page-title">Leave Entry</h1>
        </div>
        <div class="col-md-6" style="text-align: right;">
            {{Form::open(["url"=>"admin/attendance","method"=>"GET"])}}
                <div class="form-body">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-7">
                            <div class="form-group">
                                Select Date {{Form::text('attendance_date',$attendance_date,["class"=>"form-control datepicker","required"=>true, "style"=>"width:100px; display:inline-block"])}}
                                <span class="error">{{$errors->first('attendance_date')}}</span>
                            </div>
                        </div>
                        <div class="col-md-2 form-group">
                            <button type="submit" class="btn blue">View</button>
                        </div>
                    </div>
                </div>
            {{Form::close()}}
        </div>
        <div class="col-md-6">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Leave Type</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                @foreach($leaves as $leave)
                    <tr>
                        <td>{{$leave->employee_name}}</td>
                        <td>{{$leave->leave_type_name}}</td>
                        <td>
                            @if($leave->leave_request_id == 0)
                                <a href="javascript:;" class="btn btn-xs red">Delete</a>
                            @endif
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
        <div class="col-md-6">
            {{Form::open(["url"=>"admin/attendance/add","method"=>"POST"])}}
                <div class="form-body">
                    <h4>Add more leaves for {{$attendance_date}}</h4>
                    <input type="hidden" name="date" value="{{$attendance_date}}">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Select Employee</label>
                                {{Form::select('employee_id',$employees,'',["class"=>"form-control","required"=>true])}}
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Select Leave Type</label>
                                {{Form::select('leave_type',$leave_types,'',["class"=>"form-control ","required"=>true])}}
                            </div>
                        </div>
                        <div class="col-md-6 form-group">
                            <button type="submit" class="btn blue">Add</button>
                        </div>
                    </div>
                </div>
            {{Form::close()}}
        </div>
    </div>
</div>

<hr>
<h2 class="page-title">View Attendance</h2>
{{Form::open(["url"=>"admin/attendance","method"=>"POST"])}}
    <div class="form-body">
        <div class="row">
            <input type="hidden" name="get_attendance" value="1">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label">Select Employees<span class="error">*</span></label>
                    {{Form::select('employee_ids[]',$employees,$employee_ids,["class"=>"form-control","required"=>true, "multiple"=>"true"])}}
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label class="control-label">Select Month<span class="error">*</span></label>
                    {{Form::select('month',$months,Input::get("month"),["class"=>"form-control","required"=>true])}}
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label class="control-label">Select Year<span class="error">*</span></label>
                    {{Form::select('year',$years,Input::get("year"),["class"=>"form-control","required"=>true])}}
                </div>
            </div>
            <div class="col-md-8 form-group">
                <button type="submit" class="btn blue" style="margin-top: 10px;">View</button>
            </div>
        </div>
    </div>
{{Form::close()}}

<div style="overflow-x: auto">
    @if(sizeof($employee_ids) > 0)
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Employee</th>
                @for($i = strtotime($start_date); $i <= strtotime($end_date); $i = $i + 86400)
                    <th>{{date("d",$i)}}</th>
                @endfor
                <th>Employee</th>
            </tr>
        </thead>
        <tbody>
    @endif

    @foreach($employee_ids as $employee_id)
        <tr>
            <th>{{$employees[$employee_id]}}</th>
            @for($i = strtotime($start_date); $i <= strtotime($end_date); $i = $i + 86400)
                <?php $date_compare = date("Y-m-d",$i); ?>
                @if($date_compare > $today)
                <th>
                    -
                </th>
                @else
                <th>
                    <?php $flag = true; ?>
                    @if(isset($leaves_details[$employee_id]))
                        @if(isset($leaves_details[$employee_id][$date_compare]))
                        <span style="color: #c3130b">{{$leave_types[$leaves_details[$employee_id][$date_compare]]}}
                        </span>
                        <?php $flag = false; ?>
                        @endif
                    @endif
                    @if($flag)
                        @if(in_array($date_compare,$holidays))
                            <span style="color: #38c938">H</span>
                            <?php $flag = false; ?>
                        @endif
                    @endif
                    @if($flag)
                        <?php $check_day = date("N",$i); ?>
                        @if($check_day == 6 || $check_day == 7)
                            <span style="color: #38c938">S</span>
                        @else
                            <span style="color: #AAA">P</span>
                        @endif
                    @endif
                </th>
                @endif
            @endfor
            <th>{{$employees[$employee_id]}}</th>
        </tr>
    @endforeach

    @if(sizeof($employee_ids) > 0)
        </tbody>
    </table>
    @endif
</div>