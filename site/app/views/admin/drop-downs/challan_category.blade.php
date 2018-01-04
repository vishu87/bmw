<div >
    <div class="row">
        
        @if(isset($category))
            {{Form::open(["url"=>"/admin/drop-downs/categories/add/".$category->id,"method"=>"post","class"=>"check_form","files"=>true])}}
        @else
            {{Form::open(["url"=>"/admin/drop-downs/categories/add","method"=>"post","class"=>"check_form","files"=>true])}}

        @endif
            <div class="form-group col-md-6">
                <label>Category Name <span class="error"> *</span></label>
                {{Form::text('category_name',(isset($category))?$category->category_name:'',["class"=>"form-control"])}}
            </div>
            <div class="col-md-3">
                <button class="btn btn-primary" style="margin-top: 20px;" ladda="processing">Submit</button>
            </div>

        {{Form::close()}}
    </div>

    <div>
        <table class="table table-striped table-bordered table-hover table-checkable order-column ng-cloak" id="table" >
            <thead>
                <tr>
                    <th style="width: 50px;"> SN</th>
                    <th> Category</th>
                    <th> # </th>
                </tr>
            </thead>
            <tbody>
                <?php $count = 1 ?>
                @foreach($categories as $category)
                <tr id="branche_{{$category->id}}">
                    <td>{{$count++}}</td>
                    <td>{{$category->category_name}}</td>
                    
                    <td style="width: 150px">
                       <a href="{{url('/admin/drop-downs/categories/edit/'.$category->id)}}" class="btn btn-sm btn-primary " ><i class="fa fa-edit"></i> Edit</a>

                        <button action="{{('admin/drop-downs/categories/delete/'.$category->id)}}" div-id="branche_{{$category->id}}"  class="btn red-mint delete-div uppercase delete-div" data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>

</div>