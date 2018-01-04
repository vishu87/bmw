<div class="row">
    <div class="col-md-8">
        <h1 class="page-title" style="margin-top: 0">
            Events
        </h1>
    </div>
</div>

@if(isset($event))
{{Form::open(["url"=>"/admin/events/update/".$event->id,"method"=>"post","class"=>"check_form","files"=>true])}}
@else
{{Form::open(["url"=>"/admin/events/add","method"=>"post","class"=>"check_form","files"=>true])}}

@endif
<div class="form-body">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Name<span class="error">*</span></label>
                {{Form::text('event_name',(isset($event))?$event->event_name:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('event_name')}}</span>
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Date<span class="error">*</span></label>
                {{Form::text('event_date',(isset($event))?date('d-m-Y',strtotime($event->event_date)):'',["class"=>"form-control datepicker","required"=>true])}}
                <span class="error">{{$errors->first('event_date')}}</span>
            </div>
        </div>

    </div>
    <div class="row">

        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Event Type<span class="error">*</span></label>
                {{Form::select('type',$event_types,(isset($event))?$event->type:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('type')}}</span>
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Description<span class="error">*</span></label>
                {{Form::text('description',(isset($event))?$event->description:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('description')}}</span>
            </div>
        </div>
    </div>
    <div class="row">    
        <div class="col-md-6 form-group">
            <div class="mt-radio-inline">
            <label>Link Type <span class="error"> *</span></label><br>
            <label class="mt-radio">
                {{Form::radio('link_type',1,(isset($event) && $event->link_type == 1)?true:false , ["required"=>true])}} No link
                <span></span>
            </label>
            <label class="mt-radio">
                {{Form::radio('link_type',2,(isset($event) && $event->link_type == 2)?true:false , ["required"=>true])}} Link
                <span></span>
            </label>
            <label class="mt-radio">
                {{Form::radio('link_type',3,(isset($event) && $event->link_type == 3)?true:false , ["required"=>true])}} Attachment
                <span></span>
            </label>
            </div>
            <span class="error">{{$errors->first('link_type')}}</span>
        </div>

        <div class="col-md-6">
            <div class="form-group" id="notification_link" style="display: {{(isset($event) && $event->link_type == 2)?'block':'none'}}"> 
                <label class="control-label">Link<span class="error">*</span></label>
                {{Form::text('attachment',(isset($event) && $event->link_type == 2)?$event->attachment:'',["class"=>"form-control",(isset($event) && $event->attachment !='' && $event->link_type == 2)?'':"required"])}}

                @if(isset($event) && $event->attachment != '' && $event->link_type == 2)
                    <a href="{{($event->attachment)}}" target="_blank"> View old</a>
                @endif

                <span class="error">{{$errors->first('attachment')}}</span>
            </div>
            <div class="form-group" id="notification_attachment" style="display: {{(isset($event) && $event->link_type == 3)?'block':'none'}}">
                <label class="control-label">Attachment<span class="error">*</span></label>
                {{Form::file('attachment',["class"=>"form-control",(isset($event) && $event->attachment !='' && $event->link_type == 3)?'':"required"])}}
                @if(isset($event) && $event->attachment != '' && $event->link_type == 3)
                    <a href="{{url($event->attachment)}}" target="_blank"> View old</a>
                @endif
                <span class="error">{{$errors->first('attachment')}}</span>
            </div>
        </div>

    </div>
</div>

<div class="form-actions" style="margin-bottom: 20px;">
    <button type="submit" class="btn blue">{{(isset($event))?'Update':'Add'}}</button>
</div>

@if(!isset($event))
    @if(sizeof($events) >0)
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
                @foreach($events as $event)
                    <tr id="event_{{$event->id}}">
                        <td> {{$count}}</td>
                        <td> {{$event->event_name}} </td>
                        <td> {{(isset($event_types[$event->type]))?$event_types[$event->type]:''}} </td>
                        <td> @if($event->attachment != '') <a href="{{url($event->attachment)}}" target="_blank">View</a>  @endif</td>
                        <td>

                            <a href="{{url('/admin/events/edit/'.$event->id)}}" class="btn btn-sm btn-primary " ><i class="fa fa-edit"></i> Edit</a>

                            <button action="{{('admin/events/delete/'.$event->id)}}" div-id="event_{{$event->id}}"  class="btn red-mint delete-div uppercase delete-div" data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>

                        </td>
                    </tr>
                    <?php $count++?>
                @endforeach
            </tbody>
        </table>
    </div>
    @else
    <div class="alert alert-danger ">No events found</div>
    @endif
@endif