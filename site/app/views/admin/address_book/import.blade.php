<div class="row">
    <div class="col-md-8">
        
        <h1 class="page-title">
            Import Address Data
    </div>
    <div class="col-md-4">
        <a href="{{url('/admin/address-book')}}" class="btn blue pull-right">Go Back</a>
    </div>
</div>

{{Form::open(["url"=>"/admin/address-book/import","method"=>"post","class"=>"check_form","files"=>true])}}

<div class="form-body">
    <div class="row">
        <div class="col-md-4">
            <div class="form-group">
                <label class="control-label">Type</label>
                {{Form::select('category_id',$address_categories,'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('category_id')}}</span>
            </div>
        </div>

        <div class="col-md-4">
            <div class="form-group">
                <label class="control-label">File</label>
                {{Form::file('data_file',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('data_file')}}</span>
            </div>
        </div>
        
    </div>
</div>

<div class="form-actions" style="margin-top: 20px;">
    <button type="submit" class="btn blue">Upload</button>
</div>
