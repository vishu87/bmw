<div style="padding: 10px 0; background: #3080a9">
    <div class="container-fluid title">
        <div class="row">
            <div class="col-md-6 col-xs-6">
                <div style="margin-top: 5px">Sales Performance</div>
            </div>
            <div class="col-md-6 col-xs-6 text-right">
                <a href="{{url('/project-management')}}" class="btn dark"><i class="fa fa-angle-double-left"></i> Go Back</a>
            </div>
        </div>
    </div>
</div>

<div style="background:#FFF; padding: 50px 0">
    <div class="container-fluid">
        <h2 class="text-center" style="margin-bottom: 40px">Sales Performance Report</h2>
        <div class="row">
            @include('admin.sales.rpm_dealer_performance')
            @include('admin.sales.rpm_dealer_group')
        </div>
    </div>

    <div class="container-fluid">
        <h2 class="text-center" style="margin-bottom: 40px">Customer Satisfaction Performance Report</h2>
        <div class="row">
            @include('admin.sales.cust_satisfaction_pdt_1')
            @include('admin.sales.cust_satisfaction_pdt_2')
        </div>
    </div>

</div>