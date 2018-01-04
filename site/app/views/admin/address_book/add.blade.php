<div class="row">
    <div class="col-md-8">
        
        <h1 class="page-title">
            {{(isset($book_data))?'Update Contact Book':'Add New Book Contact'}}
        </h1>
    </div>
    <div class="col-md-4">
        <a href="{{url('/admin/address-book')}}" class="btn blue pull-right">Go Back</a>
    </div>
</div>
@if(isset($book_data))
    {{Form::open(["url"=>"/admin/address-book/update/".$book_data->id,"method"=>"post","class"=>"check_form","files"=>true])}}
@else
    {{Form::open(["url"=>"/admin/address-book/add","method"=>"post","class"=>"check_form","files"=>true])}}
@endif
<div class="form-body">
    <div class="row">
        <div class="col-md-6">
            
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label">First Name<span class="error">*</span></label>
                        {{Form::text('first_name',(isset($book_data))?$book_data->first_name:'',["class"=>"form-control","required"=>true])}}
                        <span class="error">{{$errors->first('first_name')}}</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label">Last Name</label>
                        {{Form::text('last_name',(isset($book_data))?$book_data->last_name:'',["class"=>"form-control"])}}
                        <span class="error">{{$errors->first('last_name')}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Designation</label>
                {{Form::text('designation',(isset($book_data))?$book_data->designation:'',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('designation')}}</span>
            </div>
        </div>
    </div>

    <div class="row">

        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Organization</label>
                {{Form::text('organization_name',(isset($book_data))?$book_data->organization_name:'',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('organization_name')}}</span>
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Email</label>
                {{Form::text('email',(isset($book_data))?$book_data->email:'',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('email')}}</span>
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Telephone No</label>
                {{Form::text('mobile',(isset($book_data))?$book_data->mobile:'',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('mobile')}}</span>
            </div>
        </div>
 
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Fax</label>
                {{Form::text('fax',(isset($book_data))?$book_data->fax:'',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('fax')}}</span>
            </div>
        </div>

        <div class="clear col-md-12">
            <h3 class="modal-title">Address</h3>
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">Address</label>
                        {{Form::text('address',(isset($book_data))?$book_data->address:'',["class"=>"form-control"])}}
                        <span class="error">{{$errors->first('address')}}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">City</label>
                        {{Form::text('city',(isset($book_data))?$book_data->city:'',["class"=>"form-control"])}}
                        <span class="error">{{$errors->first('city')}}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label">State</label>
                        {{Form::select('state_id',$states,(isset($book_data))?$book_data->state_id:'',["class"=>"form-control"])}}
                        <span class="error">{{$errors->first('state_id')}}</span>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Type</label>
                {{Form::select('categories[]',$address_categories,(isset($book_data))?$book_data->selected_categories:'',["class"=>"form-control select2","multiple"=>true , "required"=>true])}}
                <span class="error">{{$errors->first('categories')}}</span>
            </div>
        </div>
        
    </div>

</div>

<div class="form-actions" style="margin-top: 20px;">
    <button type="submit" class="btn blue">{{(isset($book_data))?'Update':'Add'}}</button>
</div>
