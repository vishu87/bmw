<div style="padding: 10px 0; background: #3080a9">
    <div class="container-fluid title">
        <div class="row">
            <div class="col-md-6 col-xs-6">
                <div style="margin-top: 5px">Project Management</div>
            </div>
            <div class="col-md-6 col-xs-6 text-right">
                <a href="{{url('/dashboard')}}" class="btn dark"><i class="fa fa-angle-double-left"></i> Go Back</a>
            </div>
        </div>
    </div>
</div>

<div style="background:#FFF; padding: 50px 0">
    <div class="container">
        @include('admin.sales.status_report')
        @include('admin.sales.sales_performance')
        @include('admin.sales.coaching_calendar')
        
        @include('admin.sales.coaching_module_progress')

        @include('admin.sales.tasks_escalations')
        
        
        
        
    </div>
</div>