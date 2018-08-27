<div style="padding: 10px 0; background: #3080a9">
    <div class="container-fluid title">
        <div class="row">
            <div class="col-md-6 col-xs-6">
                <div style="margin-top: 5px">Coaching Module Progress</div>
            </div>
            <div class="col-md-6 col-xs-6 text-right">
                <a href="{{url(Session::get('back-url'))}}" class="btn dark"><i class="fa fa-angle-double-left"></i> Go Back</a>
            </div>
        </div>

    </div>
</div>
<?php
    if(isset($_GET["coach"])){
        if($_GET["coach"] == ""){
            $coach_name = "All Coaches";
        } else {
            $coach_name = $_GET["coach"];
        }
    } else {
        $coach_name = "All Coaches";
    }

    $modules = ["Health Checks","Coaching Days","Review Days"];

    // $ar1 = array(
    //     "name" => "NSC or EY Internal",
    //     "0_col" => "", "1_col" => "", "2_col"=>"","3_col"=>"17","4_col"=>"",
    //     "subs" => array()
    // );

    $ar2 = array(
        "name" => "Aftersales",
        "0_col" => "25", "1_col" => "50", "2_col"=>"50%","3_col"=>"24","4_col"=>"32","5_col"=>"75%","6_col"=>"24","7_col"=>"40","8_col"=>"60%",
        "subs" => array(
            array(
                "name" => "RCI 1.0",
                "0_col" => "5", "1_col" => "10", "2_col"=>"50%","3_col"=>"2","4_col"=>"4","5_col"=>"50%","6_col"=>"1","7_col"=>"3","8_col"=>"33%",
                "subs" => array(
                    array(
                        "name" => "Libra Autohaus",
                        "0_col" => "5", "1_col" => "10", "2_col"=>"50%","3_col"=>"2","4_col"=>"4","5_col"=>"50%","6_col"=>"1","7_col"=>"3","8_col"=>"33%",
                    )
                )
            ),

            array(
                "name" => "RCI 2.0",
                "0_col" => "5", "1_col" => "15", "2_col"=>"67%","3_col"=>"2","4_col"=>"3","5_col"=>"67%","6_col"=>"2","7_col"=>"3","8_col"=>"67%",
                "subs" => array(
                    array(
                        "name" => "EVM Autokraft",
                        "0_col" => "5", "1_col" => "15", "2_col"=>"67%","3_col"=>"2","4_col"=>"3","5_col"=>"67%","6_col"=>"2","7_col"=>"3","8_col"=>"67%",
                    )
                )
            ),

            array(
                "name" => "RPM",
                "0_col" => "12", "1_col" => "20", "2_col"=>"60%","3_col"=>"18","4_col"=>"20","5_col"=>"90%","6_col"=>"18","7_col"=>"29","8_col"=>"62%",
                "subs" => array(
                    array(
                        "name" => "Bird Automative, 4 IDC",
                        "0_col" => "1", "1_col" => "2", "2_col"=>"50%","3_col"=>"2","4_col"=>"2","5_col"=>"100%","6_col"=>"2","7_col"=>"2","8_col"=>"100%",
                    ),
                    array(
                        "name" => "Krishna Automobile, All",
                        "0_col" => "1", "1_col" => "5", "2_col"=>"20%","3_col"=>"3","4_col"=>"5","5_col"=>"60%","6_col"=>"6","7_col"=>"10","8_col"=>"60%",
                    ),
                    array(
                        "name" => "Navnit Motors, Bangalore",
                        "0_col" => "2", "1_col" => "4", "2_col"=>"50%","3_col"=>"4","4_col"=>"4","5_col"=>"100%","6_col"=>"3","7_col"=>"4","8_col"=>"75%",
                    ),
                    array(
                        "name" => "Deutsche Motoren, Faridabad & Noida",
                        "0_col" => "2", "1_col" => "2", "2_col"=>"100%","3_col"=>"2","4_col"=>"2","5_col"=>"100%","6_col"=>"3","7_col"=>"6","8_col"=>"50%",
                    ),
                    array(
                        "name" => "Kun Exclusive Hyderabad",
                        "0_col" => "3", "1_col" => "4", "2_col"=>"75%","3_col"=>"4","4_col"=>"4","5_col"=>"100%","6_col"=>"2","7_col"=>"4","8_col"=>"50%",
                    ),
                    array(
                        "name" => "Kun Exclusive Chennai",
                        "0_col" => "3", "1_col" => "3", "2_col"=>"100%","3_col"=>"3","4_col"=>"3","5_col"=>"100%","6_col"=>"2","7_col"=>"3","8_col"=>"67%",
                    )
                )
            ),

        ),
    );

    $ar3 = array(
        "name" => "VOC",
        "0_col" => "3", "1_col" => "5", "2_col"=>"60%","3_col"=>"3","4_col"=>"5","5_col"=>"60%","6_col"=>"3","7_col"=>"5","8_col"=>"60%",
        "subs" => array(
            array(
                "name" => "VOC",
                "0_col" => "3", "1_col" => "5", "2_col"=>"60%","3_col"=>"3","4_col"=>"5","5_col"=>"60%","6_col"=>"3","7_col"=>"5","8_col"=>"60%",
                "subs" => array(
                    array(
                        "name" => "Bird Automative, 4 IDC",
                        "0_col" => "1", "1_col" => "2", "2_col"=>"50%","3_col"=>"1","4_col"=>"3","5_col"=>"33%","6_col"=>"1","7_col"=>"1","8_col"=>"100%",
                    ),
                    array(
                        "name" => "Navnit Motors, Bangalore",
                        "0_col" => "2", "1_col" => "3", "2_col"=>"67%","3_col"=>"2","4_col"=>"2","5_col"=>"100%","6_col"=>"2","7_col"=>"4","8_col"=>"50%",
                    )
                )
            ),
        ),
    );

    // $ar4 = array(
    //     "name" => "Vacation",
    //     "0_col" => "", "1_col" => "", "2_col"=>"","3_col"=>"","4_col"=>"29","5_col"=>"","6_col"=>"","7_col"=>"","8_col"=>"",
    //     "subs" => array(
    //     ),
    // );


    $calendars["DJ"] = [$ar2,$ar3];
    // $calendars["Kunal"] = [$ar1,$ar2,$ar3,$ar4];

?>
<div style="background:#FFF; padding: 50px 0">
    <div class="container-fluid">
        <form action="" method="GET">
            <div style="margin-bottom: 20px">
                <div class="row">
                    <div class="col-md-4">
                        <select class="form-control" name="coach">
                            <option value="">Select a Coach</option>
                            <option {{ ($coach_name == "DJ") ? 'selected' : '' }} >DJ</option>
                            <option {{ ($coach_name == "Kunal") ? 'selected' : '' }}>Kunal</option>
                            <option {{ ($coach_name == "Rajesh") ? 'selected' : '' }}>Rajesh</option>
                            <option {{ ($coach_name == "Amit") ? 'selected' : '' }}>Amit</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <button class="btn blue">Submit</button>
                    </div>
                </div>
            </div>
        </form>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th style="width: 20%"></th>
                    @foreach($modules as $module)
                        <th colspan="3" style="width: 8%" class="text-center">
                            {{$module}}
                        </th>
                    @endforeach
                </tr>
                <tr>
                    <th></th>
                    @foreach($modules as $module)
                        <th class="text-center">
                            Completed
                        </th>
                        <th class="text-center">
                            Target
                        </th>
                        <th class="text-center">
                            % Completion
                        </th>
                    @endforeach
                </tr>
            </thead>
            <tbody>
                @foreach($calendars as $key => $calendar)
                    <!-- <tr>
                        <td>
                            <i class="fa fa-angle-up"></i>
                            <b>{{$coach_name}}</b>
                        </td>
                        <td><b>28</b></td>
                        <td><b>89</b></td>
                        <td><b></b></td>
                        <td><b>17</b></td>
                        <td><b>29</b></td>
                    </tr> -->

                    @foreach($calendar as $level1)
                    <tr>
                        <td class="level11">
                            @if(sizeof($level1["subs"]) > 0)
                            <i class="fa fa-angle-up"></i>
                            @else
                            <i class="fa fa-angle-down"></i>
                            @endif
                            {{$level1["name"]}}
                        </td>
                        @for($i = 0; $i <= 8; $i++)
                            <td><b>{{isset($level1[$i."_col"])?$level1[$i."_col"]:''}}</b></td>
                        @endfor
                    </tr>
                        @foreach($level1["subs"] as $level2)
                        <tr>
                            <td class="level22">
                                @if(sizeof($level2["subs"]) > 0)
                                <i class="fa fa-angle-up"></i>
                                @else
                                <i class="fa fa-angle-down"></i>
                                @endif
                                {{$level2["name"]}}
                            </td>
                            @for($i = 0; $i <= 8; $i++)
                                <td>{{(isset($level2[$i."_col"]))?$level2[$i."_col"]:''}}</td>
                            @endfor
                        </tr>

                            @foreach($level2["subs"] as $level3)
                            <tr>
                                <td class="level33">{{$level3["name"]}}</td>
                                @for($i = 0; $i <= 8; $i++)
                                    <td>{{(isset($level3[$i."_col"]))?$level3[$i."_col"]:''}}</td>
                                @endfor
                            </tr>
                            @endforeach

                        @endforeach
                    @endforeach
                @endforeach
            </tbody>
        </table>
    </div>
</div>