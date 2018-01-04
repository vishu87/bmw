@if(isset($address_group))
{{Form::open(["url"=>"/admin/drop-downs/address_groups/add/".$address_group->id,"method"=>"post","class"=>"check_form","files"=>true])}}
@else
{{Form::open(["url"=>"/admin/drop-downs/address_groups/add","method"=>"post","class"=>"check_form","files"=>true])}}

@endif
<div class="form-body">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Name<span class="error">*</span></label>
                {{Form::text('name',(isset($address_group))?$address_group->name:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('name')}}</span>
            </div>
        </div>
    </div>
</div>

<div class="form-actions" style="margin-bottom: 20px ;">
    <button type="submit" class="btn blue">{{(isset($address_group))?'Update':'Add'}}</button>
</div>


@if(!isset($address_group))
    @if(sizeof($address_groups) >0)
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
                @foreach($address_groups as $address_group)
                    <tr id="address_group_{{$address_group->id}}">
                        <td> {{$count}}</td>
                        <td> {{$address_group->name}} </td>
                        <td>

                            <a href="{{url('/admin/drop-downs/address_groups/edit/'.$address_group->id.'?drop_down_type='.$drop_down_type)}}" class="btn btn-sm btn-primary " ><i class="fa fa-edit"></i> Edit</a>

                            <button action="{{('admin/drop-downs/address_groups/delete/'.$address_group->id)}}" div-id="address_group_{{$address_group->id}}"  class="btn red-mint delete-div uppercase delete-div" data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>

                        </td>
                    </tr>
                    <?php $count++?>
                @endforeach
            </tbody>
        </table>
    </div>
    @else
    <div class="alert alert-danger ">No address group found</div>
    @endif
@endif