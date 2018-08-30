<div class="dashboard-section container">
    <div class="container-fluid dash-img">
        <div class="row">
            <div class="col-md-4 col-sm-6 dash-item-front">
                <div class="dash-on" onclick="gotosales()">
                    <div class="text">New Cars Sales</div>
                    <div class="icon">
                        <img src="{{url('/assets/img/car-icon.png')}}">
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 dash-item-front">
                <div class="dash-on"  onclick="gotousedsales()">
                    <div class="text">Used Cars Sales</div>
                    <div class="icon">
                        <i class="fa fa-car"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 dash-item-front">
                <div class="dash-on"  onclick="gotodatamanagement()">
                    <div class="text">Data Management</div>
                    <div class="icon">
                        <i class="fa fa-database"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="col-md-4 col-sm-6 dash-item-front">
                <div class="dash-on"  onclick="gotocustomervoice()">
                    <div class="text">Customer Satisfaction (Voice)</div>
                    <div class="icon">
                        <i class="fa fa-user"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 dash-item-front">
                <div class="dash-on"  onclick="gotorpmdealership()">
                    <div class="text">RPM Dealership Online</div>
                    <div class="icon">
                        <i class="fa fa-clock-o"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 dash-item-front">
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
        location.href = '{{url('/')}}/new-car-sales';
    }

    function gotousedsales(){
        location.href = '{{url('/')}}/used-car-sales';
    }

    function gotodatamanagement(){
        location.href = '{{url('/')}}/data-management';
    }

    function gotocustomervoice(){
        location.href = '{{url('/')}}/customer-satisfaction';
    }

    function gotorpmdealership(){
        location.href = '{{url('/')}}/rpm-dealership';
    }

    function gotoproject(){
        location.href = '{{url('/')}}/project-management';
    }
</script>