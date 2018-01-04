@if(isset($branch))
{{Form::open(["url"=>"/admin/drop-downs/branches/add/".$branch->id,"method"=>"post","class"=>"check_form","files"=>true])}}
@else
{{Form::open(["url"=>"/admin/drop-downs/branches/add","method"=>"post","class"=>"check_form","files"=>true])}}

@endif
<div class="form-body">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Name<span class="error">*</span></label>
                {{Form::text('branch_name',(isset($branch))?$branch->branch_name:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('branch_name')}}</span>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">City</label>
                {{Form::text('city',(isset($branch))?$branch->city:'',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('city')}}</span>
            </div>
        </div>
    </div>
    <div class="row">
    	<div class="col-md-6">
            <div class="form-group">
                <label class="control-label">State</label>
                {{Form::select('state_id',$states,(isset($branch))?$branch->state_id:'',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('state_id')}}</span>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Country</label>
                {{Form::select('country_id',$countries,(isset($branch))?$branch->country_id:'',["class"=>"form-control"])}}
                <span class="error">{{$errors->first('country_id')}}</span>
            </div>
        </div>
    </div>
    <div class="row">
    	<div class="col-md-12 form-group">
            <label class="control-label">Address</label>
            {{Form::textarea('address',(isset($branch))?$branch->address:'',["class"=>"form-control","rows"=>3])}}
            <span class="error">{{$errors->first('address')}}</span>
        </div>
    </div>
</div>

<div class="form-actions" style="margin-bottom: 20px;">
    <button type="submit" class="btn blue">{{(isset($branch))?'Update':'Add'}}</button>
</div>

@if(isset($branches))
    @if(sizeof($branches) >0)
    <div>
        <table class="table table-striped table-bordered table-hover table-checkable order-column" id="table">
            <thead>
                <tr>
                    <th style="width: 50px;"> SN</th>
                    <th> Name </th>
                    <th> Address </th>
                    <th> # </th>
                </tr>
            </thead>
            <tbody>
                <?php $count = 1;?>
                @foreach($branches as $branch)
                    <tr id="branche_{{$branch->id}}">
                        <td> {{$count}}</td>
                        <td> {{$branch->branch_name}} </td>
                        <td> {{$branch->address}} </td>
                        <td>

                            <a href="{{url('/admin/drop-downs/branches/edit/'.$branch->id)}}" class="btn btn-sm btn-primary " ><i class="fa fa-edit"></i> Edit</a>

                            <button action="{{('admin/drop-downs/branches/delete/'.$branch->id)}}" div-id="branche_{{$branch->id}}"  class="btn red-mint delete-div uppercase delete-div" data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>

                        </td>
                    </tr>
                    <?php $count++?>
                @endforeach
            </tbody>
        </table>
    </div>
    @else
    <div class="alert alert-danger ">No branches found</div>
    @endif
@endif