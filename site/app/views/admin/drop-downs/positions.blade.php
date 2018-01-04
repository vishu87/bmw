@if(isset($position))
{{Form::open(["url"=>"/admin/drop-downs/positions/add/".$position->id,"method"=>"post","class"=>"check_form","files"=>true])}}
@else
{{Form::open(["url"=>"/admin/drop-downs/positions/add","method"=>"post","class"=>"check_form","files"=>true])}}

@endif
<div class="form-body">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Title<span class="error">*</span></label>
                {{Form::text('position_name',(isset($position))?$position->position_name:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('position_name')}}</span>
            </div>
        </div>
    </div>
</div>

<div class="form-actions" style="margin-bottom: 20px ;">
    <button type="submit" class="btn blue">{{(isset($position))?'Update':'Add'}}</button>
</div>


@if(!isset($position))
    @if(sizeof($positions) >0)
    <div>
        <table class="table table-striped table-bordered table-hover table-checkable order-column" id="table">
            <thead>
                <tr>
                    <th style="width: 50px;"> SN</th>
                    <th> Title </th>
                    <th> # </th>
                </tr>
            </thead>
            <tbody>
                <?php $count = 1;?>
                @foreach($positions as $position)
                    <tr id="position_{{$position->id}}">
                        <td> {{$count}}</td>
                        <td> {{$position->position_name}} </td>
                        <td>

                            <a href="{{url('/admin/drop-downs/positions/edit/'.$position->id.'?drop_down_type='.$drop_down_type)}}" class="btn btn-sm btn-primary " ><i class="fa fa-edit"></i> Edit</a>

                            <button action="{{('admin/drop-downs/positions/delete/'.$position->id)}}" div-id="position_{{$position->id}}"  class="btn red-mint delete-div uppercase delete-div" data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>

                        </td>
                    </tr>
                    <?php $count++?>
                @endforeach
            </tbody>
        </table>
    </div>
    @else
    <div class="alert alert-danger ">No positions found</div>
    @endif
@endif