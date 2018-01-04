<div class="row">
    <div class="col-md-9">
        <h1 class="page-title" style="margin-top: 0">
            Address Book
        </h1>
    </div>
    <div class="col-md-3">
        <a href="{{url('/admin/address-book/add')}}" class="btn btn-sm btn-primary pull-right" >
            Add Contact
        </a>

        <a href="{{url('/admin/address-book/import')}}" class="btn btn-sm green " >
            Import Contact
        </a>
    </div>
</div>
{{Form::open(["url"=>"/admin/address-book","method"=>"GET"])}}
<div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <label>View by Category</label>
            {{Form::select('category_id',$address_categories,(Input::has('category_id'))?Input::get('category_id'):'',["class"=>"form-control"])}}
        </div>
    </div>
    <div class="col-md-6">
        <button type="submit" class="btn blue" style="margin-top: 23px;">Search</button>
    </div>
</div>
{{Form::close()}}

@if(sizeof($book_data) > 0)
<div>
    <table class="table table-striped table-bordered table-hover table-checkable order-column" id="table">
        <thead>
            <tr>
                <th style="width: 50px;"> SN</th>
                <th> Name </th>
                <th> Email</th>
                <th> Mobile</th>
                <th> Address</th>
                <th> # </th>
            </tr>
        </thead>
        <tbody>
            <?php $count = 1;?>
            @foreach($book_data as $data)
                @include('admin.address_book.view')
                <?php $count++ ?>
            @endforeach
        </tbody>
    </table>
</div>
@else
<div class="alert alert-danger ">No contact found please add contact</div>
@endif