<div style="padding: 10px 0; background: #3080a9">
    <div class="container-fluid title">
        <div class="row">
            <div class="col-md-6 col-xs-6">
                <div style="margin-top: 5px">KPI Dashboard</div>
            </div>
            <div class="col-md-6 col-xs-6 text-right">
                <a href="{{url('/sales')}}" class="btn dark"><i class="fa fa-angle-double-left"></i> Go Back</a>
            </div>
        </div>
    </div>
</div>

<div style="background:#FFF; padding: 50px 0">
    <div class="container-fluid">
        <form action="" method="GET">
            <div style="margin-bottom: 20px">
                <div class="row">
                    <div class="col-md-4">
                        <select class="form-control" name="dealer">
                            <option>Select a dealer</option>
                            <option>Dealer A</option>
                            <option>Dealer B</option>
                            <option>Dealer C</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <button class="btn blue">Submit</button>
                    </div>
                </div>
            </div>
        </form>
        <div class="row">
        @include('admin.sales.retail_trends')
        @include('admin.sales.equity_trend')
        @include('admin.sales.test_drive')
        @include('admin.sales.conversion_ratio')
        </div>
        
    </div>
</div>