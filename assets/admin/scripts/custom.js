$(document).ready(function() {
    // var table = $('#table').DataTable();
    
    // $(".select2").select2();

    // $('.check_form').validate();

});

$(document).on("click",".datepicker",function(){
	$(this).datepicker({
    	format:"dd-mm-yyyy"
    });
	$(this).datepicker("show");
});

$(document).on("click",".profile-menu",function(){
	var btn = $(this);
	var divId = btn.attr('div-id');
	$('#'+divId).css("display","block");
	for (var i = 20; i >= 0; i--) {
		if(i == parseInt(divId)){

			$("#div_"+i).css("display","block");	
			$("#menu_li_"+i).addClass('active');
		}else{
			$("#menu_li_"+i).removeClass('active');

			$("#div_"+i).css("display","none");
		}
	}
});


$(document).on("click", ".delete-div", function(e) {
	e.preventDefault();
    var btn = $(this);
    var initial_html = btn.html();
	btn.html(initial_html+' <i class="fa fa-spin fa-spinner"></i>');
	var deleteDiv = btn.attr('div-id');
	var formAction = base_url+'/'+btn.attr('action');

	$.ajax({
	    type: "DELETE",
	    url : formAction,
	    success : function(data){
	    	console.log(data);
	    	data = JSON.parse(data);
	    	if(!data.success) 
	    	$.notific8(data.message, {zindex: 1500,life:5000,theme:'ruby',sticky: true});
	    	else {
	    		$("#"+deleteDiv).hide('500', function(){
	    			$("#"+deleteDiv).remove();
		    	});
		    	
	    	}
	    	btn.html(initial_html);
	    }
	},"json");
});

$(document).on("click", ".details", function() {
    var btn = $(this);
    $(".modal").modal('show');
	$(".modal-body").html('Loading..');
	var initial_html = btn.html();
	
	var title = btn.attr('modal-title');
	var formAction = btn.attr('action');
	
	$(".modal-title").html(title);
	$.ajax({
	    type: "GET",
	    url : formAction,
	    success : function(data){
	    	if(data.success){
	    		$(".modal-body").modal("hide");
	    	}
	    	else{
	    		$(".modal-body").html(data);
	    	}
	    }
	},"json");

});

$(document).on("change","input[type=radio][name=link_type]",function(){
	if($(this).val() == 2){
		$("#notification_link").css("display","block");
		$("#notification_attachment").css("display","none");
	}else if($(this).val() == 3){
		$("#notification_link").css("display","none");
		$("#notification_attachment").css("display","block");
	}else{
		$("#notification_link").css("display","none");
		$("#notification_attachment").css("display","none");
	}
});

$(document).on("change","input[type=checkbox][name=same_current]",function(){
	var btn = $(this);
	if (btn.is(':checked')) {
        $('#permanent_addres').hide();
    } else {
        $('#permanent_addres').show();
    }
});


$(document).on("change","#addressBookType",function(){
	var btn = $(this);
	if (btn.val() == 1) {
        $('#association_id').parent().parent().show();
    } else {
        $('#association_id').parent().parent().hide();
    }
});

var options1 = {
	legend : {
		show: true,
		data: ["BMW 3","BMW Gran","BMW 5"]
	},
    tooltip : {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['Jan','Feb','Mar','Apr']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'BMW 3',
            type:'line',
            stack: 'BMW 3',
            data:[120, 132, 101, 134]
        },
        {
            name:'BMW Gran',
            type:'line',
            stack: 'BMW Gran',
            data:[220, 182, 191, 234]
        },
        {
            name:'BMW 5',
            type:'line',
            stack: 'BMW 5',
            data:[150, 232, 201, 154]
        }
    ]
};

var options2 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};


var options3 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['Health Check', 'Coaching Days','Review Days']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['Jan','Feb','Mar','Apr','May']
    },
    series: [
        {
            name: 'Health Check',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390]
        },
        {
            name: 'Coaching Days',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90]
        },
        {
            name: 'Review Days',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290]
        }
    ]
};

$(document).ready(function() {
   	var myChart1 = echarts.init(document.getElementById("chart1"));
    myChart1.setOption(options1);

    var myChart2 = echarts.init(document.getElementById("chart2"));
    myChart2.setOption(options2);

    var myChart3 = echarts.init(document.getElementById("chart3"));
    myChart3.setOption(options3);
});
