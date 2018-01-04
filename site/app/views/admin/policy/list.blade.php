<div class="row">
    <div class="col-md-8">
        <h1 class="page-title" style="margin-top: 0">
            Aiff Policy & Procedures
        </h1>
    </div>
</div>

@if(isset($policy))
{{Form::open(["url"=>"/admin/policy-procedures/update/".$policy->id,"method"=>"post","class"=>"check_form","files"=>true])}}
@else
{{Form::open(["url"=>"/admin/policy-procedures/add","method"=>"post","class"=>"check_form","files"=>true])}}

@endif
<div class="form-body">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Policy Name <span class="error">*</span></label>
                {{Form::text('policy_name',(isset($policy))?$policy->policy_name:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('policy_name')}}</span>
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Upload Policy <span class="error">*</span></label>
                {{Form::file('file',["class"=>"form-control",(isset($policy) && $policy->file !='')?'':"required"])}}
                @if(isset($policy) && $policy->file != '')
                    <a href="{{url($policy->file)}}" target="_blank"> View old</a>
                @endif
                <span class="error">{{$errors->first('file')}}</span>
            </div>
        </div>

    </div>
</div>

<div class="form-actions" style="margin-bottom: 20px;">
    <button type="submit" class="btn blue">{{(isset($policy))?'Update':'Add'}}</button>
</div>

@if(!isset($policy))
    @if(sizeof($policies) >0)
    <div>
        <table class="table table-striped table-bordered table-hover table-checkable order-column" id="table">
            <thead>
                <tr>
                    <th style="width: 50px;"> SN</th>
                    <th> Name </th>
                    <th> File </th>
                    <th> # </th>
                </tr>
            </thead>
            <tbody>
                <?php $count = 1;?>
                @foreach($policies as $policy)
                    <tr id="policy_{{$policy->id}}">
                        <td> {{$count}}</td>
                        <td> {{$policy->policy_name}} </td>
                        <td> @if($policy->file != '') <a href="{{url($policy->file)}}" target="_blank">View</a>  @endif</td>
                        <td>

                            <a href="{{url('/admin/policy-procedures/edit/'.$policy->id)}}" class="btn btn-sm btn-primary " ><i class="fa fa-edit"></i> Edit</a>

                            <button action="{{('admin/policy-procedures/delete/'.$policy->id)}}" div-id="policy_{{$policy->id}}"  class="btn red-mint delete-div uppercase delete-div" data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>

                        </td>
                    </tr>
                    <?php $count++?>
                @endforeach
            </tbody>
        </table>
    </div>
    @else
    <div class="alert alert-danger ">No policy found please add policy</div>
    @endif
@endif