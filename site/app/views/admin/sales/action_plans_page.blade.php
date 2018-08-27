<div style="padding: 10px 0; background: #3080a9">
    <div class="container-fluid title">
        <div class="row">
            <div class="col-md-6 col-xs-6">
                <div style="margin-top: 5px">Action Plans</div>
            </div>
            <div class="col-md-6 col-xs-6 text-right">
                <a href="{{url('/sales')}}" class="btn dark"><i class="fa fa-angle-double-left"></i> Go Back</a>
            </div>
        </div>
    </div>
</div>

<div style="background:#FFF; padding: 50px 0">
    <div class="container-fluid">
        <form action="" method="GET">
            <div style="margin-bottom: 20px">
                <div class="row">
                    <div class="col-md-3">
                        <select class="form-control" name="coach">
                            <option value="">Select a Dealer</option>
                            <option>Dealer A</option>
                            <option>Dealer B</option>
                            <option>Dealer C</option>
                            <option>Dealer D</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <select class="form-control" name="coach">
                            <option value="">Select a Module</option>
                            <option>RCI 1.0</option>
                            <option>RCI 2.0</option>
                            <option>RPM</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <button class="btn blue">Submit</button>
                    </div>
                </div>
            </div>
        </form>
        <table class="table v-align-center">
                <thead>
                    <tr>
                        <th>Area</th>
                        <th>Action Plan</th>
                        <th>Responsibility</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Criticality</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sales</td>
                        <td>Dealer on hold due to XYZ issue</td>
                        <td>Kshitij/RM/Coach</td>
                        <td>18-Aug-2018</td>
                        <td>On Going</td>
                        <td>
                            <span class="red-dot"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>Sales</td>
                        <td>Action plan Signed</td>
                        <td>Coach</td>
                        <td>18-Aug-2018</td>
                        <td>Completed</td>
                        <td>
                            <span class="green-dot"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>Sales</td>
                        <td>Action plan Signed</td>
                        <td>Coach</td>
                        <td>18-Aug-2018</td>
                        <td>Completed</td>
                        <td>
                            <span class="green-dot"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>Sales</td>
                        <td>Action plan Signed</td>
                        <td>Coach</td>
                        <td>18-Aug-2018</td>
                        <td>Completed</td>
                        <td>
                            <span class="green-dot"></span>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
</div>