$(document).ready(function() {
    var table = $('#table').DataTable();
    
    $(".select2").select2();

    $('.check_form').validate();

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

