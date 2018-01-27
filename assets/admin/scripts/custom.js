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
		data: ["RPM Dealers","Peergroup","Sales Outperformance"]
	},
    tooltip : {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['Apr 18','May 18','Jun 18','Jul 18']
        }
    ],
    yAxis : [
        {
            type : 'value',
            min: -10,
            max: 10
        }
    ],
    series : [
        {
            name:'RPM Dealers',
            type:'line',
            stack: 'RPM Dealers',
            data:[2, 7, 3, 8]
        },
        {
            name:'Peergroup',
            type:'line',
            stack: 'Peergroup',
            data:[-6, -1, 2, 1]
        },
        {
            name:'Sales Outperformance',
            type:'line',
            stack: 'Peergroup',
            data:[7, 8, 7, 7]
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
        top: 10,
        left: '7%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Jul-17','Aug-17','Sep-17','Oct-17', 'Nov-17', 'Dec-17', 'Jan-18'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            max: 15,
            name: 'Outperformance (%)',
            nameLocation : 'center',
            nameGap: 28
        }
    ],
    series : [
        {
            name:'Outperformance',
            type:'bar',
            barWidth: '60%',
            data:[9,7,3,8,10,12,12]
        }
    ]
};

var options3 = { // coaching module
    tooltip : {
        trigger: 'axis',
        axisPointer : {    
            type : 'shadow'
        }
    },
    color : ['#2f4554'],
    legend : {
        bottom: 0
    },
    grid: {
        top: 10,
        left: '5%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['DJ', 'Kunal', 'Rajesh', 'Amit'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            min: 0,
            max: 100,
            name: '% Completed',
            nameLocation : 'center',
            nameGap: 30
        }
    ],
    series : [
        {
            name:'Completion',
            type:'bar',
            barWidth: '60%',
            data:[60, 75, 78, 65]
        }
    ]
};



$(document).ready(function() {
   	var myChart1 = echarts.init(document.getElementById("chart1"));
    myChart1.setOption(options1);

    // var myChart2 = echarts.init(document.getElementById("chart2"));
    // myChart2.setOption(options2);

    var myChart3 = echarts.init(document.getElementById("chart3"));
    myChart3.setOption(options3);
});


$(".folder").click(function(e){
    $("#modal1").modal('show');
});
