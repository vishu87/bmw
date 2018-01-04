<tr id="department_{{$data->id}}">
    <td> {{$count}}</td>
    <td> {{$data->meeting_name}} </td>
    <td> {{date('d-m-Y',strtotime($data->meeting_date))}} </td>
    <td> 
    	@if($data->meeting_minute != '')
    		<a href="{{url($data->meeting_minute)}}" target="_blank">View</a>
    	@endif
    </td>
    <td> 
    	@if($data->meeting_audio != '')
    		<a href="{{url($data->meeting_audio)}}" target="_blank">View</a>
    	@endif
    </td>
    
    <td>
        
        <a href="{{url('/admin/meetings/edit/'.$data->id)}}" class="btn btn-sm blue " ><i class="fa fa-edit"></i> Edit</a>

        <button action="{{'admin/meetings/delete/'.$data->id}}" div-id="department_{{$data->id}}"  class="btn btn-sm red-mint delete-div uppercase delete-div" data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>

    </td>
</tr>