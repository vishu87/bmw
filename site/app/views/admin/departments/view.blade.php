<tr id="department_{{$data->id}}">
    <td> {{$count}}</td>
    <td> {{$data->department_name}} </td>
    <td> {{$data->parent_department}} </td>
    <td> {{$data->hod}}</td>
    <td>
        
        <a href="{{url('/admin/departments/edit/'.$data->id)}}" class="btn btn-sm blue " ><i class="fa fa-edit"></i> Edit</a>

        <button action="{{'admin/departments/delete/'.$data->id}}" div-id="department_{{$data->id}}"  class="btn btn-sm red-mint delete-div uppercase delete-div" data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>

    </td>
</tr>