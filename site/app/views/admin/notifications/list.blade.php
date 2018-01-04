<div class="row">
    <div class="col-md-8">
        <h1 class="page-title" style="margin-top: 0">
            Notices
        </h1>
    </div>
</div>

@if(isset($notification))
{{Form::open(["url"=>"/admin/notifications/update/".$notification->id,"method"=>"post","class"=>"check_form","files"=>true])}}
@else
{{Form::open(["url"=>"/admin/notifications/add","method"=>"post","class"=>"check_form","files"=>true])}}

@endif
<div class="form-body">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Title<span class="error"> *</span></label>
                {{Form::text('title',(isset($notification))?$notification->title:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('title')}}</span>
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Short Description<span class="error"> *</span></label>
                {{Form::text('short_description',(isset($notification))?$notification->short_description:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('short_description')}}</span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 form-group">
            <div class="mt-radio-inline">
            <label>Link Type <span class="error"> *</span></label><br>
            <label class="mt-radio">
                {{Form::radio('link_type',1,(isset($notification) && $notification->link_type == 1)?true:false)}} No link
                <span></span>
            </label>
            <label class="mt-radio">
                {{Form::radio('link_type',2,(isset($notification) && $notification->link_type == 2)?true:false)}} Link
                <span></span>
            </label>
            <label class="mt-radio">
                {{Form::radio('link_type',3,(isset($notification) && $notification->link_type == 3)?true:false)}} Attachment
                <span></span>
            </label>
            </div>
            <span class="error">{{$errors->first('link_type')}}</span>
        </div>
        <div class="col-md-6">


            <div class="form-group" id="notification_link" style="display: {{(isset($notification) && $notification->link_type == 2)?'block':'none'}}"> 
                <label class="control-label">Link<span class="error">*</span></label>
                {{Form::text('link',(isset($notification) && $notification->link_type == 2)?$notification->link:'',["class"=>"form-control",(isset($notification) && $notification->link !='' && $notification->link_type == 2)?'':"required"])}}

                @if(isset($notification) && $notification->link != '' && $notification->link_type == 2)
                    <a href="{{($notification->link)}}" target="_blank"> View old</a>
                @endif

                <span class="error">{{$errors->first('link')}}</span>
            </div>
            <div class="form-group" id="notification_attachment" style="display: {{(isset($notification) && $notification->link_type == 3)?'block':'none'}}">
                <label class="control-label">Attachment<span class="error">*</span></label>
                {{Form::file('link',["class"=>"form-control",(isset($notification) && $notification->link !='' && $notification->link_type == 3)?'':"required"])}}
                @if(isset($notification) && $notification->link != '' && $notification->link_type == 3)
                    <a href="{{url($notification->link)}}" target="_blank"> View old</a>
                @endif
                <span class="error">{{$errors->first('link')}}</span>
            </div>

        </div>

    </div>
</div>

<div class="form-actions" style="margin-bottom: 20px;">
    <button type="submit" class="btn blue">{{(isset($notification))?'Update':'Add'}}</button>
</div>

@if(!isset($notification))
    @if(sizeof($notifications) >0)
    <div>
        <table class="table table-striped table-bordered table-hover table-checkable order-column" id="table">
            <thead>
                <tr>
                    <th style="width: 50px;"> SN</th>
                    <th> Title </th>
                    <th> Short Description </th>
                    <th> Attachment </th>
                    <th> # </th>
                </tr>
            </thead>
            <tbody>
                <?php $count = 1;?>
                @foreach($notifications as $notification)
                    <tr id="notification_{{$notification->id}}">
                        <td> {{$count}}</td>
                        <td> {{$notification->title}} </td>
                        <td> {{$notification->short_description}} </td>
                        <td> @if($notification->link != '') <a href="{{url($notification->link)}}" target="_blank">View</a>  @endif</td>
                        <td>

                            <a href="{{url('/admin/notifications/edit/'.$notification->id)}}" class="btn btn-sm btn-primary " ><i class="fa fa-edit"></i> Edit</a>

                            <button action="{{('admin/notifications/delete/'.$notification->id)}}" div-id="notification_{{$notification->id}}"  class="btn red-mint delete-div uppercase delete-div" data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>

                        </td>
                    </tr>
                    <?php $count++?>
                @endforeach
            </tbody>
        </table>
    </div>
    @else
    <div class="alert alert-danger ">No notifications found</div>
    @endif
@endif