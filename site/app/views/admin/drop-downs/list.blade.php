<div class="row">
    <div class="col-md-8">
        <h1 class="page-title" style="margin-top: 0">
            Drop Downs
        </h1>
    </div>
    
</div>

<ul class="nav nav-tabs">
    <li class="{{($drop_down_type == 'positions')?'active':''}}"><a href="{{url('/admin/drop-downs?drop_down_type=positions')}}">Employee Positions</a></li>
    <li class="{{($drop_down_type == 'branches')?'active':''}}"><a href="{{url('/admin/drop-downs?drop_down_type=branches')}}">Branches</a></li>
    <li class="{{($drop_down_type == 'documents')?'active':''}}"><a href="{{url('/admin/drop-downs?drop_down_type=documents')}}">Documents</a></li>
    <li class="{{($drop_down_type == 'challan_category')?'active':''}}"><a href="{{url('/admin/drop-downs?drop_down_type=challan_category')}}">Challan Category</a></li>
    <li class="{{($drop_down_type == 'service_request')?'active':''}}"><a href="{{url('/admin/drop-downs?drop_down_type=service_request')}}">Request Category</a></li>
    <li class="{{($drop_down_type == 'address_groups')?'active':''}}"><a href="{{url('/admin/drop-downs?drop_down_type=address_groups')}}">Address Group</a></li>
</ul>

@if($drop_down_type == 'positions')
    @include('admin.drop-downs.positions')
@elseif($drop_down_type == 'branches')
    @include('admin.drop-downs.branches')
@elseif($drop_down_type == 'documents')
    @include('admin.drop-downs.documents')
@elseif($drop_down_type == 'challan_category')
    @include('admin.drop-downs.challan_category')
@elseif($drop_down_type == 'service_request')
    @include('admin.drop-downs.request_categories')
@elseif($drop_down_type == 'address_groups')
    @include('admin.drop-downs.address_groups')
@endif        
