@if(isset($document))
{{Form::open(["url"=>"/admin/drop-downs/documents/add/".$document->id,"method"=>"post","class"=>"check_form","files"=>true])}}
@else
{{Form::open(["url"=>"/admin/drop-downs/documents/add","method"=>"post","class"=>"check_form","files"=>true])}}

@endif
<div class="form-body">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="control-label">Document Name<span class="error">*</span></label>
                {{Form::text('document',(isset($document))?$document->document:'',["class"=>"form-control","required"=>true])}}
                <span class="error">{{$errors->first('document')}}</span>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group mt-checkbox-list">
                <br>
                <label class="mt-checkbox mt-checkbox-outline">
                    {{Form::checkbox('hidden',1,(isset($document) && $document->hidden == 1)?true:false)}} 
                    Hidden
                    <span></span>
                </label>
                
            </div>
        </div>
    </div>
</div>

<div class="form-actions" style="margin-bottom: 20px ;">
    <button type="submit" class="btn blue">{{(isset($document))?'Update':'Add'}}</button>
</div>


@if(!isset($document))
    @if(sizeof($documents) >0)
    <div>
        <table class="table table-striped table-bordered table-hover table-checkable order-column" id="table">
            <thead>
                <tr>
                    <th style="width: 50px;"> SN</th>
                    <th> Document </th>
                    <th> Hidden </th>
                    <th> # </th>
                </tr>
            </thead>
            <tbody>
                <?php $count = 1;?>
                @foreach($documents as $document)
                    <tr id="document_{{$document->id}}">
                        <td> {{$count}}</td>
                        <td> {{$document->document}} </td>
                        <td>{{($document->hidden == 1)?'Yes':'No'}}</td>
                        <td>

                            <a href="{{url('/admin/drop-downs/documents/edit/'.$document->id.'?drop_down_type='.$drop_down_type)}}" class="btn btn-sm btn-primary " ><i class="fa fa-edit"></i> Edit</a>

                            <button action="{{('admin/drop-downs/documents/delete/'.$document->id)}}" div-id="document_{{$document->id}}"  class="btn red-mint delete-div uppercase delete-div" data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>

                        </td>
                    </tr>
                    <?php $count++?>
                @endforeach
            </tbody>
        </table>
    </div>
    @else
    <div class="alert alert-danger ">No documents found</div>
    @endif
@endif