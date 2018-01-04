<div class="row">
    <div class="col-md-8">
        <h1 class="page-title" style="margin-top: 0">
            Departments
        </h1>
    </div>
    <div class="col-md-4">
        <a href="{{url('/admin/departments/add')}}" class="btn green pull-right" >
            Add Department
        </a>
    </div>
</div>


<div>
    <table class="table table-striped table-bordered table-hover table-checkable order-column" id="table">
        <thead>
            <tr>
                <th style="width: 50px;"> SN</th>
                <th> Name </th>
                <th> Parent Department </th>
                <th> Head of Department</th>
                <th> # </th>
            </tr>
        </thead>
        <tbody>
            <?php $count = 1;?>
            @foreach($departments as $data)
                @include('admin.departments.view')
                <?php $count++ ?>
            @endforeach
        </tbody>
    </table>
</div>
