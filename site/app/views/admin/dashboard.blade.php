<div style="margin-top: 100px; padding: 80px 0;">
    <div class="container-fluid dash-img">
        <div class="row">
            <div class="col-md-2 col-md-offset-1">
                <div class="dash-on" onclick="gotosales()">
                    <div class="text">Sales</div>
                    <div class="icon">
                        <i class="fa fa-bar-chart"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="dash-on">
                    <div class="text">After Sales</div>
                    <div class="icon">
                        <i class="fa fa-clock-o"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="dash-on">
                    <div class="text">Digital</div>
                    <div class="icon">
                        <i class="fa fa-wifi"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="dash-on">
                    <div class="text">Data Management</div>
                    <div class="icon">
                        <i class="fa fa-database"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="dash-on">
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
</script>