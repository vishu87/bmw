<div style="padding: 10px 0; background: #3080a9">
    <div class="container-fluid title">
        <div class="row">
            <div class="col-md-6 col-xs-6">
                <div style="margin-top: 5px">Task/Escalations</div>
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
                    <td>On Going</td>
                    <td>
                        <span class="red-dot"></span>
                    </td>
                </tr>
                <tr>
                    <td>Sales</td>
                    <td>EVM Autokraft</td>
                    <td>Action plan Signed</td>
                    <td>NA</td>
                    <td>Coach</td>
                    <td>Completed</td>
                    <td>
                        <span class="green-dot"></span>
                    </td>
                </tr>
                <tr>
                    <td>Sales</td>
                    <td>Bird Automative, 4 IDC</td>
                    <td>Action plan Signed</td>
                    <td>NA</td>
                    <td>Coach</td>
                    <td>Completed</td>
                    <td>
                        <span class="green-dot"></span>
                    </td>
                </tr>
                <tr>
                    <td>Sales</td>
                    <td>Krishna Automobile, All</td>
                    <td>Action plan Signed</td>
                    <td>NA</td>
                    <td>Coach</td>
                    <td>Completed</td>
                    <td>
                        <span class="red-dot"></span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>