<div style="padding:20px 70px ">
	<div style="text-align: center">
		<img src="{{url('/assets/img/logo.png')}}" style="width: 200px;">
	</div>
	<h1>Purchase Request</h1>

	<div>
		<span><b>Subject</b> - {{$purchase->subject}}</span> <br>
		<span><b>Request Remark</b> - {{$purchase->remarks}}</span> <br>
		<span><b>Request By</b> - {{$purchase->user_name}}</span> <br>
		<span><b>Status</b> - {{$status}}</span> <br>

		@if($purchase->status == 1 || $purchase->status == 2)
			<span><b>Approved By</b> - {{$purchase->approved_by_user}}</span> <br>
			<span><b>Approval Remark</b> - {{$purchase->approval_remarks}}</span>
			
		@elseif($purchase->status == 3 || $purchase->status == 4)
			<span><b>Disapproved By</b> - {{$purchase->approved_by_user}}</span> <br>
			<span><b>Disapproval Remark</b> - {{$purchase->approval_remarks}}</span>
		@endif
	</div>
	<div style="text-align: center;padding: 50px 0">
		<table style="width: 100%;" cellspacing="0">
			
			<tr>
				<td><b>SN</b></td>
				<td><b>Item</b></td>
				<td><b>Quantity</b></td>
			</tr>
			<?php $count = 1 ; ?>
			@foreach($purchase->purchaseItem as $item)
			<tr>
				<td>{{$count++}}</td>	
				<td>{{$item->item_name}}</td>
				<td>{{$item->quantity}}</td>
			</tr>

			@endforeach
		</table>
	</div>
</div>
<style type="text/css">
	h1{
		padding: 0;
	    font-size: 28px;
	    letter-spacing: -1px;
	    display: block;
	    color: #666;
	    margin: 0 0 15px;
	    font-weight: 300;
	    text-align: center;
	}

	table td{
		border: 1px solid #ccc;
		padding: 10px 15px

	}
	table tr:nth-child(even){
		background: #F3F4F6;
	}
	span{
		padding: 0;
	    font-size: 20px;
	    letter-spacing: -1px;
	    display: block;
	    color: #666;
	    /*margin: 0 0 15px;*/
	    font-weight: 300;
	}
</style>