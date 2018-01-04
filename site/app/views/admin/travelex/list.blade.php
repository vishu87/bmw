<div>
	<div >
		<h1 class="page-title">TravelEx Details</h1>
	</div>

	{{Form::open(array("url"=>"admin/travel-connect","method"=>"POST"))}}
		<?php $count = 1; ?>
		
		<table class="table table-hover">
			<thead>
				<tr>
					<th>SN</th>
					<th>User</th>
					<th>User Name</th>
					<th>Password</th>
				</tr>
			</thead>
			<tbody>
				@foreach($employees as $employee)
				<tr>
					<td>{{$count++}}</td>
					<td>{{$employee->first_name}} {{$employee->last_name}}</td>
					<td>
						{{Form::text($employee->id.'_username',$employee->travelex_username,["class"=>"form-control"])}}
					</td>
					<td>
						{{Form::text($employee->id.'_password',$employee->travelex_password,["class"=>"form-control"])}}
					</td>
				</tr>
				@endforeach
			</tbody>
		</table>
		
		<?php $count++; ?>

		<div>
			<button class="btn blue" type="submit">Update</button>
		</div>
	{{Form::close()}}
</div>