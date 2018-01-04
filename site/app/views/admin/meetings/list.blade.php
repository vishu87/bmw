<div class="row">
    <div class="col-md-8">
        <h1 class="page-title" style="margin-top: 0">
            EXCO/AGM/SGM
        </h1>
    </div>
    <div class="col-md-4">
        <a href="{{url('/admin/meetings/add')}}" class="btn green pull-right" >
            Add New
        </a>
    </div>
</div>


<div>
    <table class="table table-striped table-bordered table-hover table-checkable order-column" id="table">
        <thead>
            <tr>
                <th style="width: 50px;"> SN</th>
                <th> Name </th>
                <th> Date</th>
                <th> MoM</th>
                <th> Meeting Audio</th>
                <th> # </th>
            </tr>
        </thead>
        <tbody>
            <?php $count = 1;?>
            @foreach($meetings as $data)
                @include('admin.meetings.view')
                <?php $count++ ?>
            @endforeach
        </tbody>
    </table>
</div>
