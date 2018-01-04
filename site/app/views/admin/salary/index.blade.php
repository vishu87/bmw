@if(!isset($updateSalary))
	<div class="row">
	    <div class="col-md-8">
	        <h1 class="page-title" style="margin-top: 0">
	            Salaries
	        </h1>
	    </div>
	</div>
	{{Form::open(["url" => "admin/salary" , "method"=>"GET"])}}
		<div class="row">
			<div class="col-md-2">
				<div class="form-group">
					<label>Year</label>
					{{Form::select('year_id',$years,(Input::get('year_id'))?Input::get('year_id'):'',["class"=>"form-control"])}}
				</div>
			</div>
			<div class="col-md-2">
				<div class="form-group">
					<label>Month</label>
					{{Form::select('month_id',$months,(Input::get('month_id'))?Input::get('month_id'):'',["class"=>"form-control"])}}
				</div>
			</div>
			<div class="col-md-2">
				<div style="margin-top: 23px;">
					
					<button class="btn btn-success"> Submit</button>
				</div>
			</div>
		</div>
	{{Form::close()}}

	@if(Input::has('month_id') && Input::has('year_id'))

		@include('admin.salary.add')

	@endif


@endif