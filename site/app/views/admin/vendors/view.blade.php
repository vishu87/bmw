<tr id="vendor_{{$data->id}}">
    <td> {{$count}}</td>
    <td> {{$data->vendor_name}} </td>
    <td> {{$data->email}} </td>
    <td> {{$data->mobile}}</td>
    <td> {{$data->city_name}}</td>
    <td> {{$data->description}}</td>
    <td>
        
        <a href="{{url('/admin/vendors/edit/'.$data->id)}}" class="btn btn-sm blue " ><i class="fa fa-edit"></i> Edit</a>

        <button action="{{'admin/vendors/delete/'.$data->id}}" div-id="vendor_{{$data->id}}"  class="btn btn-sm red-mint delete-div uppercase delete-div" data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>

    </td>
</tr>