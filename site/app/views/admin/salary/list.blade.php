<div id="div_2" style="display: none" >
	@if(isset($salaries))
	    @if(sizeof($salaries) >0)
	    <div>
	        <table class="table table-striped table-bordered table-hover table-checkable order-column" id="table">
	            <thead>
	                <tr>
	                    <th style="width: 50px;"> SN</th>
	                    <th>Employee Name </th>
	                    <th>Month</th>
	                    <th>Salary Slip</th>
	                    <th> # </th>
	                </tr>
	            </thead>
	            <tbody>
	                <?php $count = 1;?>
	                @foreach($salaries as $salary)
	                    <tr id="salary_{{$salary->id}}">
	                        <td> {{$count}}</td>
	                        <td> {{$salary->employee_name}} </td>
	                        <td> {{$months[$salary->month_id]}} {{$years[$salary->year_id]}} </td>
	                        <td> @if($salary->salary_slip != '') <a href="{{url($salary->salary_slip)}}" target="_blank">View</a>  @endif</td>
	                        <td>

	                            <a href="{{url('/admin/salary/edit/'.$salary->id)}}" class="btn btn-sm btn-primary " ><i class="fa fa-edit"></i> Edit</a>

	                            <button action="{{('admin/salary/delete/'.$salary->id)}}" div-id="salary_{{$salary->id}}"  class="btn red-mint delete-div uppercase delete-div" data-toggle="confirmation" data-placement="top" data-original-title="" title="" aria-describedby="confirmation8000"><i class="fa fa-remove"></i></button>

	                        </td>
	                    </tr>
	                    <?php $count++?>
	                @endforeach
	            </tbody>
	        </table>
	    </div>
	    @else
	    <div class="alert alert-danger ">No data found</div>
	    @endif
	@endif
</div>