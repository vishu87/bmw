<h1 class="page-title">
    {{(isset($department))?'Update department details':'Add New department'}}
</h1>
@if(isset($department))
{{Form::open(["url"=>"/admin/departments/update/".$department->id,"method"=>"post","class"=>"check_form","files"=>true])}}
@else
{{Form::open(["url"=>"/admin/departments/add","method"=>"post","class"=>"check_form","files"=>true])}}

@endif
<div class="form-body">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Department Name<span class="error">*</span></label>
                {{Form::text('department_name',(isset($department))?$department->department_name:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('department_name')}}</span>
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Parent Department</label>
                {{Form::select('parent_id',$departments,(isset($department))?$department->parent_id:'',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('parent_id')}}</span>
            </div>
        </div>

    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Head of Department</label>
                {{Form::select('hod_id',$employees,(isset($department))?$department->hod_id:'',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('hod_id')}}</span>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Request Categories <span class="error">*</span></label>
                {{Form::select('categories[]',$categories,(isset($department))?$department->selected_categories:'',["class"=>"form-control select2","multiple"=>true])}}
                <span class="error">{{$errors->first('categories')}}</span>
            </div>
        </div>
        
    </div>
</div>

<div class="form-actions" style="margin-top: 20px;">
    <button type="submit" class="btn blue">{{(isset($department))?'Update':'Add'}}</button>
</div>
