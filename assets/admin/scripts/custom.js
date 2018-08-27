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
            name: 'Days Completed',
            nameLocation : 'center',
            nameGap: 30
        }
    ],
    series : [
        {
            name:'Nos of days completed',
            type:'bar',
            barWidth: '60%',
            data:[60, 75, 78, 65]
        }
    ]
};


var options_equity = {
    legend : {
        show: true,
        data: ["Target","Achievement"],
        bottom: 0
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        }
    },
    grid: {
        top: 10,
        left: '3%',
        right: '3%',
        bottom: 50,
        containLabel: true
    },
    xAxis : {
        show: 'true',
        axisTick: {show: false},
        axisLabel: {
            interval : 0,
            showMinLabel: true,
            fontSize: 12
        },
        data : ['Walk-in','Inbound\nPhone','Event','Internet','NSC','Networking','Outbound\nPhone','Own\nReferrals','Existing\nOwners',],
        silent: false
    },
    yAxis : [
        {
            type : 'value',
            max: 150
        }
    ],
    series : [
        {
            name:'Target',
            type: 'bar',
            barGap:0,
            data:[45,25,10,35,35,20,40,25,80]
        },
        {
            name:'Achievement',
            type: 'bar',
            data:[32,10,8,35,20,10,5,25,15,60]
        }
    ]
};

var options_retail = {
    legend : {
        show: true,
        data: ["Target","Achievement"],
        bottom: 0,
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 10,
        left: '3%',
        right: '3%',
        bottom: 50,
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data: ["3 Ser","5 Ser","7 Ser","X1","X3","X5","6 GT","Total"]
        }
    ],
    yAxis : [
        {
            type : 'value',
            min: 0,
            max: 60
        }
    ],
    series : [
        {
            name:'Target',
            type:'bar',
            stack: 'Target',
            barGap: 0,
            data:[5,3,0,10,5,8,7,38]
        },
        {
            name:'Achievement',
            type:'bar',
            stack: 'Achievement',
            data:[10,4,0,20,6,10,8,58]
        }
    ]
};

var options_test_drive = {
    legend : {
        show: true,
        data: ["Target","Achievement","%TD"],
        bottom: 0
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 10,
        left: '3%',
        right: '3%',
        bottom: 50,
        containLabel: true
    },
    xAxis : [
        {
            show: 'true',
            axisTick: {show: false},
            axisLabel: {
                interval : 0,
                showMinLabel: true,
                fontSize: 12
            },
            data : ['Walk-in','Inbound\ncalls','Outbound\ncalls','Internet','NSC','Existing\nOwners','Network','Own\nReferrals'],
            silent: false
        }
    ],
    yAxis : [
        {
            type : 'value',
            min: 0,
            max: 100
        },
        {
            type : 'value',
            min: 0,
            max: 100
        }
    ],
    series : [
        {
            name:'Target',
            type:'bar',
            stack: 'Target',
            barWidth: '35%',
            barGap: 0,
            data:[30,18,30,18,48,35,7,18]
        },
        {
            name:'Achievement',
            type:'bar',
            stack: 'Achievement',
            barWidth: '35%',
            data:[20,14,21,12,32,28,8,12]
        },
        {
            name:'TD%',
            type:'line',
            stack: 'TD%',
            data:[35,42,40,42,84,34,14,36]
        }
    ]
};

var options_conversion = {
    legend : {
        show: true,
        data: ["Target","Achievement","Conversion Ratio"],
        bottom: 0,
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 10,
        left: '3%',
        right: '3%',
        bottom: 50,
        containLabel: true
    },
    xAxis : [
        {
            show: 'true',
            axisTick: {show: false},
            axisLabel: {
                interval : 0,
                showMinLabel: true,
                fontSize: 12
            },
            data : ['Walk-in','Inbound\ncalls','Outbound\ncalls','Internet','NSC','Existing\nOwners','Network','Own\nReferrals'],
            silent: false
        }
    ],
    yAxis : [
        {
            type : 'value',
            min: 0,
            max: 100
        },
        {
            type : 'value',
            min: 0,
            max: 100
        }
    ],
    series : [
        {
            name:'Target',
            type:'bar',
            stack: 'Target',
            barWidth: '35%',
            barGap: 0,
            data:[30,18,30,18,48,35,7,18]
        },
        {
            name:'Achievement',
            type:'bar',
            stack: 'Achievement',
            barWidth: '35%',
            data:[20,14,21,12,32,28,8,12]
        },
        {
            name:'Conversion Ratio',
            type:'line',
            stack: 'Conversion Ratio',
            data:[35,42,40,42,84,34,14,36]
        }
    ]
};

var options_conversion_model = {
    legend : {
        show: true,
        data: ["Conversion Ratio"],
        bottom: 0
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 10,
        left: '3%',
        right: '3%',
        bottom: 50,
        containLabel: true
    },
    xAxis : [
        {
            show: 'true',
            axisTick: {show: false},
            axisLabel: {
                interval : 0,
                showMinLabel: true,
                fontSize: 12
            },
            data : ['Walk-in','Inbound\ncalls','Outbound\ncalls','Internet','NSC','Existing\nOwners','Network','Own\nReferrals'],
            silent: false
        }
    ],
    yAxis : [
        {
            type : 'value',
            min: 0,
            max: 30
        }
    ],
    series : [
        {
            name:'Conversion Ratio',
            type:'bar',
            stack: 'Target',
            data:[0,10,0,13,10,20,14]
        }
    ]
};

var options_rpm_dealer = {
    legend : {
        show: true,
        data: ["RPM Dealers","Peergroup","Sales Outperformance"],
        bottom: 0
    },
    grid: {
        top: 10,
        left: '3%',
        right: '3%',
        bottom: 50,
        containLabel: true
    },
    tooltip : {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisTick: {show: false},
            axisLabel: {
                interval : 0,
                showMinLabel: true,
                fontSize: 12
            },
            data : ['Apr-18','May-18','Jun-18','Jul-18','Aug-18','Sep-18','Oct-18','Nov-18','Dec-18','Jan-18','Feb-18','Mar-18'],
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

var options_rpm_dealer_group = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 10,
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            show: 'true',
            axisTick: {show: false},
            axisLabel: {
                interval : 0,
                showMinLabel: true,
                fontSize: 12
            },
            data : ['Apr-18','May-18','Jun-18','Jul-18','Aug-18','Sep-18','Oct-18','Nov-18','Dec-18','Jan-18','Feb-18','Mar-18'],
            silent: false
        }
    ],
    yAxis : [
        {
            type : 'value',
            min: 0,
            max: 100
        }
    ],
    series : [
        {
            name:'Target',
            type:'bar',
            stack: 'Target',
            barWidth: '35%',
            barGap: 0,
            data:[30,18,30,18,48,35,7,18]
        },
    ]
};

var options_pdt_1 = {
    legend : {
        show: true,
        data: ["PDT Outperformance vs Peer Group","Outperformance Target","Target Date"],
        bottom: 0
    },
    grid: {
        top: 10,
        left: '3%',
        right: '3%',
        bottom: 50,
        containLabel: true
    },
    tooltip : {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
            axisTick: {show: false},
            axisLabel: {
                interval : 0,
                showMinLabel: true,
                fontSize: 12
            },
            data : ['Apr-18','May-18','Jun-18','Jul-18','Aug-18','Sep-18','Oct-18','Nov-18','Dec-18','Jan-18','Feb-18','Mar-18'],
        }
    ],
    yAxis : [
        {
            type : 'value',
            min: 0,
            max: 14
        }
    ],
    series : [
        {
            name:'PDT Outperformance vs Peer Group',
            type:'bar',
            stack: 'PDT Outperformance vs Peer Group',
            data:[2, 7, 3, 8]
        },
        {
            name:'Outperformance Target',
            type:'line',
            stack: 'Outperformance Target',
            data:[3,3,3,3]
        }
    ]
};

var options_pdt_2 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 10,
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            show: 'true',
            axisTick: {show: false},
            axisLabel: {
                interval : 0,
                showMinLabel: true,
                fontSize: 12
            },
            data : ['Apr-18','May-18','Jun-18','Jul-18','Aug-18','Sep-18','Oct-18','Nov-18','Dec-18','Jan-18','Feb-18','Mar-18'],
            silent: false
        }
    ],
    yAxis : [
        {
            type : 'value',
            min: 0,
            max: 120000000
        }
    ],
    series : [
        {
            name:'RPM Group',
            type:'line',
            stack: 'RPM Group',
            barGap: 0,
            data:[30,18,30,18,48,35,7,18]
        },
        {
            name:'Ref. Value',
            type:'line',
            stack: 'Ref. Value',
            barGap: 0,
            data:[30,18,30,18,48,35,7,18]
        },
    ]
};

$(document).ready(function() {
    if($("#chart1").length > 0){
        var myChart1 = echarts.init(document.getElementById("chart1"));
        myChart1.setOption(options1);
    }

    if($("#chart2").length > 0){
        var myChart2 = echarts.init(document.getElementById("chart2"));
        myChart2.setOption(options2);
    }

    if($("#chart3").length > 0){
        var myChart3 = echarts.init(document.getElementById("chart3"));
        myChart3.setOption(options3);
    }

    if($("#chart_equity").length > 0){
        var myChart_equity = echarts.init(document.getElementById("chart_equity"));
        myChart_equity.setOption(options_equity);
    }

    if($("#chart_retail").length > 0){
        var myChart_retail = echarts.init(document.getElementById("chart_retail"));
        myChart_retail.setOption(options_retail);
    }

    if($("#chart_test_drive").length > 0){
        var myChart_test_drive = echarts.init(document.getElementById("chart_test_drive"));
        myChart_test_drive.setOption(options_test_drive);
    }

    if($("#chart_conversion").length > 0){
        var myChart_conversion = echarts.init(document.getElementById("chart_conversion"));
        myChart_conversion.setOption(options_conversion);
    }

    if($("#chart_conversion_model").length > 0){
        var myChart_conversion_model = echarts.init(document.getElementById("chart_conversion_model"));
        myChart_conversion_model.setOption(options_conversion_model);
    }

    if($("#chart_rpm_dealer").length > 0){
        var myChart_rpm_dealer = echarts.init(document.getElementById("chart_rpm_dealer"));
        myChart_rpm_dealer.setOption(options_rpm_dealer);
    }

    if($("#chart_rpm_dealer_group").length > 0){
        var myChart_rpm_dealer_group = echarts.init(document.getElementById("chart_rpm_dealer_group"));
        myChart_rpm_dealer_group.setOption(options_rpm_dealer_group);
    }

    if($("#chart_pdt_1").length > 0){
        var myChart_pdt_1 = echarts.init(document.getElementById("chart_pdt_1"));
        myChart_pdt_1.setOption(options_pdt_1);
    }

    if($("#chart_pdt_2").length > 0){
        var myChart_pdt_2 = echarts.init(document.getElementById("chart_pdt_2"));
        myChart_pdt_2.setOption(options_pdt_2);
    }

});


$(".folder").click(function(e){
    $("#modal1").modal('show');
});


$(".comment-icon").click(function(e){
    $("#modal_comment").modal('show');
});


function close_modal(){
    $("#modal_comment").modal('hide');
}
