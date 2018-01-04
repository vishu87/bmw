<tr id="book_address_{{$data->id}}">
    <td> {{$count}}</td>
    <td> {{$data->name}} </td>
    <td> {{$data->email}} </td>
    <td> {{$data->mobile}}</td>
    <td> {{$data->address}}</td>
    <td>
        
        <a href="{{url('/admin/address-book/edit/'.$data->id)}}" class="btn btn-sm btn-primary " ><i class="fa fa-edit"></i> Edit</a>

        <button action="{{'admin/address-book/delete/'.$data->id}}" div-id="book_address_{{$data->id}}"  class="btn red-mint delete-div uppercase delete-div" data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>

    </td>
</tr>