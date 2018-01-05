<div style="padding: 10px 0; background: #3080a9">
	<!-- <div class="container nav-top">
        <ul>
            <li class="active"><a href="#">Sales</a></li>
            <li><a href="#">Aftersales</a></li>
        </ul>
    </div> -->
    <div class="container-fluid title">
        Sales Dashboard
    </div>
</div>

<div style="background:#FFF; padding: 50px 0">
    <div class="container">
        @include('admin.div_1')
        @include('admin.div_2')
        @include('admin.div_3')
        @include('admin.div_4')
        @include('admin.div_5')
        @include('admin.div_6')
    </div>
</div>

<script type="text/javascript">
    function gotosales(){
        location.href = '{{url('/')}}/sales';
    }
</script>