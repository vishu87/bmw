<h1 class="page-title">Login Screen Images</h1>

@if(isset($image))
{{Form::open(["url"=>"/admin/login-screen/add/".$image->id,"method"=>"post","class"=>"check_form","files"=>true])}}
@else
{{Form::open(["url"=>"/admin/login-screen/add","method"=>"post","class"=>"check_form","files"=>true])}}
@endif
<div class="form-body">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Title<span class="error">*</span></label>
                {{Form::text('title',(isset($image))?$image->title:'',["class"=>"form-control" , "required"=>true])}}
                <span class="error">{{$errors->first('title')}}</span>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Subtitle<span class="error">*</span></label>
                {{Form::text('sub_title',(isset($image))?$image->sub_title:'',["class"=>"form-control" , "required"=>true])}}
                <span class="error">{{$errors->first('sub_title')}}</span>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Upload Image<span class="error">*</span></label>
                {{Form::file('image_url',["class"=>"form-control" , (isset($image) && $image->image_url != '')?'':'required'])}}
                <span class="error">{{$errors->first('image_url')}}</span>
                @if(isset($image) && $image->image_url != '')
                    <a href="{{url($image->image_url)}}" target="_blank">View</a>
                @endif
            </div>
        </div>
    </div>
</div>

<div class="form-actions" style="margin-bottom: 20px;">
    <button type="submit" class="btn blue">{{(isset($image))?'Update':'Add'}}</button>
</div>

@if(isset($images))
    @if(sizeof($images) >0)
    <div>
        <table class="table table-striped table-bordered table-hover table-checkable order-column" id="table">
            <thead>
                <tr>
                    <th style="width: 50px;"> SN</th>
                    <th>Title</th>
                    <th>Sub Title</th>
                    <th> Image </th>
                    <th> # </th>
                </tr>
            </thead>
            <tbody>
                <?php $count = 1;?>
                @foreach($images as $image)
                    <tr id="image_{{$image->id}}">
                        <td> {{$count}}</td>
                        <td> {{$image->title}}</td>
                        <td> {{$image->sub_title}}</td>
                        <td> 
                            <img src="{{url($image->image_url)}}" style="width: 250px">
                        </td>
                        <td>
                            <a href="{{url('/admin/login-screen/edit/'.$image->id)}}" class="btn btn-sm btn-primary " ><i class="fa fa-edit"></i> Edit</a>

                            <button action="{{('admin/login-screen/delete/'.$image->id)}}" div-id="image_{{$image->id}}"  class="btn red-mint delete-div uppercase delete-div" data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>

                        </td>
                    </tr>
                    <?php $count++?>
                @endforeach
            </tbody>
        </table>
    </div>
    @else
    <div class="alert alert-danger ">No images found</div>
    @endif
@endif