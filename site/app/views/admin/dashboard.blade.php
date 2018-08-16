<div class="dashboard-section container">
    <div class="container-fluid dash-img">
        <div class="row dash-row">
            <div class="col-md-3 col-sm-6 dash-item-front   col-md-offset-1 ">
                <div class="dash-on" onclick="gotosales()">
                    <div class="text">New Cars Sales</div>
                    <div class="icon">
                        <i class="fa fa-bar-chart"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 dash-item-front">
                <div class="dash-on">
                    <div class="text">Used Cars Sales</div>
                    <div class="icon">
                        <i class="fa fa-clock-o"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 dash-item-front">
                <div class="dash-on">
                    <div class="text">Data Management</div>
                    <div class="icon">
                        <i class="fa fa-database"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="row dash-row">
            
            <div class="col-md-3 col-sm-6 dash-item-front  col-md-offset-1">
                <div class="dash-on">
                    <div class="text">Customer Satisfaction (Voice)</div>
                    <div class="icon">
                        <i class="fa fa-user"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 dash-item-front">
                <div class="dash-on">
                    <div class="text">RPM Dealership Online</div>
                    <div class="icon">
                        <i class="fa fa-car"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 dash-item-front">
                <div class="dash-on" onclick="gotoproject()">
                    <div class="text">Project Management</div>
                    <div class="icon">
                        <i class="fa fa-pie-chart"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    function gotosales(){
        location.href = '{{url('/')}}/sales';
    }

    function gotoproject(){
        location.href = '{{url('/')}}/project-management';
    }
</script>