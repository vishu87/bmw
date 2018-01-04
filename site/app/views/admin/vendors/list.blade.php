<div class="row">
    <div class="col-md-8">
        <h1 class="page-title" style="margin-top: 0">
            Vendors
        </h1>
    </div>
    <div class="col-md-4">
        <a href="{{url('/admin/vendors/add')}}" class="btn green pull-right" >
            Add add
        </a>
    </div>
</div>


<div>
    <table class="table table-striped table-bordered table-hover table-checkable order-column" id="table">
        <thead>
            <tr>
                <th style="width: 50px;">SN</th>
                <th>Name </th>
                <th>Email</th>
                <th>Mobile</th>
                <th>City</th>
                <th>Description</th>
                <th>#</th>
            </tr>
        </thead>
        <tbody>
            <?php $count = 1;?>
            @foreach($vendors as $data)
                @include('admin.vendors.view')
                <?php $count++ ?>
            @endforeach
        </tbody>
    </table>
</div>
