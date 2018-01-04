<h1 class="page-title">
    {{(isset($vendor))?'Update vendor details':'Add New vendor'}}
</h1>

@if(isset($vendor))
    {{Form::open(["url"=>"/admin/vendors/update/".$vendor->id,"method"=>"post","class"=>"check_form","files"=>true])}}
@else
    {{Form::open(["url"=>"/admin/vendors/add","method"=>"post","class"=>"check_form","files"=>true])}}

@endif
<div class="form-body">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Vendor Name<span class="error">*</span></label>
                {{Form::text('vendor_name',(isset($vendor))?$vendor->vendor_name:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('vendor_name')}}</span>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Email<span class="error">*</span></label>
                {{Form::text('email',(isset($vendor))?$vendor->email:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('email')}}</span>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">City<span class="error">*</span></label>
                {{Form::text('city_name',(isset($vendor))?$vendor->city_name:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('city_id')}}</span>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Mobile</label>
                {{Form::text('mobile',(isset($vendor))?$vendor->mobile:'',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('mobile')}}</span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Address</label>
                {{Form::text('address',(isset($vendor))?$vendor->address:'',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('address')}}</span>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">description</label>
                {{Form::text('description',(isset($vendor))?$vendor->description:'',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('description')}}</span>
            </div>
        </div>
    </div>
    
</div>

<div class="form-actions" style="margin-top: 20px;">
    <button type="submit" class="btn blue">{{(isset($vendor))?'Update':'Add'}}</button>
</div>
