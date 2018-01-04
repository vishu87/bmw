
<div class="row">
    <div class="col-md-8">
        <h1 class="page-title" style="margin-top: 0">
            RTI Requests
        </h1>
    </div>
</div>

<div>
    <table class="table table-striped table-bordered table-hover table-checkable order-column" datatable="table">
        <thead>
            <tr>
                <th style="width: 50px;"> SN</th>
                <th>Inward No</th>
                <th>From</th>
                <th>Date</th>
                <th>Subject</th>
                <th>Type</th>
                <th>Attachment</th>
                <th ></th>
            </tr>
        </thead>
        <tbody>
            <?php $count = 1;?>
            @foreach($inwards as $inward)
            <tr>
                <td>{{$count++}}</td>
                <td>{{$inward->inward_no}}</td>
                <td>{{$inward->from}}</td>
                <td>{{date('d-m-Y',strtotime($inward->inward_date))}}</td>
                <td>{{$inward->subject}}</td>
                <td>
                    {{$inward->type_name}}
                    <div ng-if="$inward->payment_status == 1">
                        <span class="label label-sm label-success">Paid</span>
                    </div>
                    
                </td>
                <td>
                    <a href="{{$inward->attachment}}" ng-show="$inward->attachment != '' " target="_blank">
                        View
                    </a>
                </td>
                
                <td>
                    
                    <a  class="btn btn-sm btn-block yellow" href="{{url('/correspondence-gateway/outward/add?inward_ref_no='.$inward->id)}}">Create Outward</a>

                </td>
            </tr>
            @endforeach

        </tbody>
    </table>
</div>
