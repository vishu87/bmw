<div>
    <div class="row">
        <div class="col-md-8">
            <h1 class="page-title">Upload Attendance </h1>
        </div>
    </div>

    {{Form::open(["url"=>"/admin/upload-attendance/add/","method"=>"post","class"=>"check_form","files"=>true])}}

    <div class="form-body">
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label">Upload File<span class="error">*</span></label>
                    {{Form::file('attendance_file',["class"=>"form-control","required"=>true])}}
                    <span style="font-size: 11px;">Upload only excel/csv file</span>
                    <span class="error">{{$errors->first('attendance_file')}}</span>
                </div>
            </div>
            <div class="col-md-8 form-group">
                <button type="submit" class="btn blue" style="margin-top: 24px;">Upload</button>
            </div>
        </div>
    </div>
    {{Form::close()}}
</div>

<hr>
<h2 class="page-title">Lookup</h2>
{{Form::open(["url"=>"admin/upload-attendance","method"=>"GET"])}}
    <div class="form-body">
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label">Select Date<span class="error">*</span></label>
                    {{Form::text('attendance_date',(Input::has('attendance_date'))?Input::get('attendance_date'):'',["class"=>"form-control datepicker","required"=>true])}}
                    <span class="error">{{$errors->first('attendance_date')}}</span>
                </div>
            </div>
            <div class="col-md-8 form-group">
                <button type="submit" class="btn blue" style="margin-top: 24px;">View</button>
            </div>
        </div>
    </div>
{{Form::close()}}

@if(isset($attendanceData) )
    @if(sizeof($attendanceData) > 0)
        <div>
            <table class="table table-striped table-bordered table-hover table-checkable order-column" id="table">
                <thead>
                    <tr>
                        <th style="width: 50px;"> SN</th>
                        <th>Date </th>
                        <th>Employee Name</th>
                        <th>Status </th>
                        <th>Arr Time</th>
                        <th>Exit Time </th>
                    </tr>
                </thead>
                <tbody> 
                    <?php $count = 1; ?>
                    @foreach($attendanceData as $data)
                    <tr>
                        <td>{{$count++}}</td>
                        <td>{{date('d-m-Y',strtotime($data->date))}}</td>
                        <td>{{$data->employee_name}}</td>
                        <td>{{($data->attendance == 1)?'P':'A'}}</td>
                        <td>{{$data->entry_time}}</td>
                        <td>{{$data->exit_time}}</td>
                    </tr>
                    @endforeach
                       
                </tbody>
            </table>
        </div>
    @else
        <div class="alert alert-danger">
            No data found
        </div>
    @endif
@endif