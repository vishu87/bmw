<div style="padding: 10px 0; background: #3080a9">
    <div class="container-fluid title">
        <div class="row">
            <div class="col-md-6 col-xs-6">
                <div style="margin-top: 5px">Escalations</div>
            </div>
            <div class="col-md-6 col-xs-6 text-right">
                <a href="{{url(Session::get('back-url'))}}" class="btn dark"><i class="fa fa-angle-double-left"></i> Go Back</a>
            </div>
        </div>
    </div>
</div>

<div style="background:#FFF; padding: 50px 0">
    <div class="container">
        <table class="table v-align-center">
            <thead>
                <tr>
                    <th>Area</th>
                    <th>Dealer Name</th>
                    <th>Issue</th>
                    <th>Mitigation</th>
                    <th>Responsibility</th>
                    <th>Status</th>
                    <th>Criticality</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sales</td>
                    <td>Libra Autohaus</td>
                    <td>Dealer on hold due to XYZ issue</td>
                    <td>XYZ to be addressed</td>
                    <td>Kshitij/RM/Coach</td>
                    <td>
                        <select class="form-control">
                            <option>Open</option>
                            <option>Under Resolution</option>
                            <option>Resolved</option>
                        </select>
                    </td>
                    <td>
                        <span class="red-dot"></span>
                    </td>
                    <td><a href="javascript:;" class="comment-icon btn blue btn-icon"><i class="fa fa-comment"> Comment</a></td>
                </tr>
                <tr>
                    <td>Sales</td>
                    <td>EVM Autokraft</td>
                    <td>Action plan Signed</td>
                    <td>NA</td>
                    <td>Coach</td>
                    <td>
                        <select class="form-control">
                            <option>Open</option>
                            <option selected>Under Resolution</option>
                            <option>Resolved</option>
                        </select>
                    </td>
                    <td>
                        <span class="red-dot"></span>
                    </td>
                    <td><a href="javascript:;" class="comment-icon btn blue btn-icon"><i class="fa fa-comment"> Comment</a></td>
                </tr>
                <tr>
                    <td>Sales</td>
                    <td>Bird Automative, 4 IDC</td>
                    <td>Action plan Signed</td>
                    <td>NA</td>
                    <td>Coach</td>
                    <td>
                        <select class="form-control">
                            <option>Open</option>
                            <option selected>Under Resolution</option>
                            <option>Resolved</option>
                        </select>
                    </td>
                    <td>
                        <span class="green-dot"></span>
                    </td>
                    <td><a href="javascript:;" class="comment-icon btn blue btn-icon"><i class="fa fa-comment"> Comment</a></td>
                </tr>
                <tr>
                    <td>Sales</td>
                    <td>Krishna Automobile, All</td>
                    <td>Action plan Signed</td>
                    <td>NA</td>
                    <td>Coach</td>
                    <td>
                        <select class="form-control">
                            <option>Open</option>
                            <option>Under Resolution</option>
                            <option selected>Resolved</option>
                        </select>
                    </td>
                    <td>
                        <span class="green-dot"></span>
                    </td>
                    <td><a href="javascript:;" class="comment-icon btn blue btn-icon"><i class="fa fa-comment"> Comment</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div id="modal_comment" class="modal fade in modal-overflow" data-width="480">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
        <h4 class="modal-title">Add Comment</h4>
    </div>
    <div class="modal-body">
          <div class="folders row">

                <div class="item col-xs-12">
                    <textarea class="form-control" placeholder="Add Comment"></textarea>
                    <div class="text-left" style="margin:20px 0">
                        <button class="btn blue" onclick="close_modal()">Submit</button>
                    </div>
                </div>
                

            </div>
    </div>

</div>