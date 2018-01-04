<div class="row">
    <div class="col-md-6">
        <h1 class="page-title">
            {{(isset($meeting))?'Update EXCO/AGM/SGM':'Add New EXCO/AGM/SGM'}}
        </h1>
    </div>
    <div class="col-md-6" style="text-align: right;">
        <a href="{{url('admin/meetings')}}" class="btn dark">Go Back</a>
    </div>
</div>
@if(isset($meeting))
{{Form::open(["url"=>"/admin/meetings/update/".$meeting->id,"method"=>"post","class"=>"check_form","files"=>true])}}
@else
{{Form::open(["url"=>"/admin/meetings/add","method"=>"post","class"=>"check_form","files"=>true])}}

@endif
<div class="form-body">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Meeting Name<span class="error">*</span></label>
                {{Form::text('meeting_name',(isset($meeting))?$meeting->meeting_name:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('meeting_name')}}</span>
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Meeting date <span class="error"> *</span></label>
                {{Form::text('meeting_date',(isset($meeting))?date('d-m-Y',strtotime($meeting->meeting_date)):'',["class"=>"form-control datepicker","required" => true])}}
                <span class="error">{{$errors->first('meeting_date')}}</span>
            </div>
        </div>

    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Minutes of Meeting (MoM) </label>
                {{Form::file('meeting_minute',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('meeting_minute')}}</span>
                @if(isset($meeting) && $meeting->meeting_minute != '')
                    <a href="{{url($meeting->meeting_minute)}}" target="_blank">View</a>
                @endif
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Meeting Audio</label>
                {{Form::file('meeting_audio',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('meeting_audio')}}</span>
                @if(isset($meeting) && $meeting->meeting_audio != '')
                    <a href="{{url($meeting->meeting_audio)}}" target="_blank">View</a>
                @endif
            </div>
        </div>
        
    </div>
</div>

<div class="form-actions" style="margin-top: 20px;">
    <button type="submit" class="btn blue">{{(isset($meeting))?'Update':'Add'}}</button>
</div>
