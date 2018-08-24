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
         <form action="" method="GET">
            <div style="margin-bottom: 20px">
                <div class="row">
                    <div class="col-md-4">
                        <select class="form-control" name="dealer">
                            <option>Select a Coach</option>
                            <option>DJ</option>
                            <option>Kunal</option>
                            <option>Rajesh</option>
                            <option>Amit</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <button class="btn blue">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
<?php
    $ar1 = array(
        "name" => "NSC or EY Internal",
        "0_col" => "", "1_col" => "", "2_col"=>"","3_col"=>"17","4_col"=>"",
        "subs" => array()
    );

    $ar2 = array(
        "name" => "Aftersales",
        "0_col" => "26", "1_col" => "86", "2_col"=>"","3_col"=>"","4_col"=>"",
        "subs" => array(
            array(
                "name" => "RCI 1.0",
                "0_col" => "3", "1_col" => "16", "2_col"=>"","3_col"=>"","4_col"=>"",
                "subs" => array(
                    array(
                        "name" => "Libra Autohaus",
                        "0_col" => "3", "1_col" => "16", "2_col"=>"","3_col"=>"","4_col"=>"",
                    )
                )
            ),

            array(
                "name" => "RCI 2.0",
                "0_col" => "3", "1_col" => "5", "2_col"=>"","3_col"=>"","4_col"=>"",
                "subs" => array(
                    array(
                        "name" => "EVM Autokraft",
                        "0_col" => "3", "1_col" => "5", "2_col"=>"","3_col"=>"","4_col"=>"",
                    )
                )
            ),

            array(
                "name" => "RPM",
                "0_col" => "20", "1_col" => "65", "2_col"=>"","3_col"=>"","4_col"=>"",
                "subs" => array(
                    array(
                        "name" => "Bird Automative, 4 IDC",
                        "0_col" => "1", "1_col" => "10", "2_col"=>"","3_col"=>"","4_col"=>"",
                    ),
                    array(
                        "name" => "Krishna Automobile, All",
                        "0_col" => "5", "1_col" => "12", "2_col"=>"","3_col"=>"","4_col"=>"",
                    ),
                    array(
                        "name" => "Navnit Motors, Bangalore",
                        "0_col" => "5", "1_col" => "13", "2_col"=>"","3_col"=>"","4_col"=>"",
                    ),
                    array(
                        "name" => "Deutsche Motoren, Faridabad & Noida",
                        "0_col" => "5", "1_col" => "9", "2_col"=>"","3_col"=>"","4_col"=>"",
                    ),
                    array(
                        "name" => "Kun Exclusive Hyderabad",
                        "0_col" => "3", "1_col" => "4", "2_col"=>"","3_col"=>"","4_col"=>"",
                    ),
                    array(
                        "name" => "Kun Exclusive Chennai",
                        "0_col" => "1", "1_col" => "17", "2_col"=>"","3_col"=>"","4_col"=>"",
                    )
                )
            ),

        ),
    );

    $ar3 = array(
        "name" => "VOC",
        "0_col" => "2", "1_col" => "3", "2_col"=>"","3_col"=>"","4_col"=>"",
        "subs" => array(
            array(
                "name" => "VOC",
                "0_col" => "2", "1_col" => "3", "2_col"=>"","3_col"=>"","4_col"=>"",
                "subs" => array(
                    array(
                        "name" => "Bird Automative, 4 IDC",
                        "0_col" => "", "1_col" => "3", "2_col"=>"","3_col"=>"","4_col"=>"",
                    ),
                    array(
                        "name" => "Navnit Motors, Bangalore",
                        "0_col" => "2", "1_col" => "", "2_col"=>"","3_col"=>"","4_col"=>"",
                    )
                )
            ),
        ),
    );

    $ar4 = array(
        "name" => "Vacation",
        "0_col" => "", "1_col" => "", "2_col"=>"","3_col"=>"","4_col"=>"29",
        "subs" => array(
        ),
    );


    $calendars["DJ"] = [$ar1,$ar2,$ar3,$ar4];
    $calendars["Kunal"] = [$ar1,$ar2,$ar3,$ar4];

?>
<div style="background:#FFF; padding: 50px 0">
    <div class="container-fluid">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th style="width: 20%"></th>
                    @for($i = 0; $i <= 4; $i++)
                        <th style="width: 8%" class="text-center">
                            {{date("d-M-y",strtotime("+".$i." days"))}}
                        </th>
                    @endfor
                </tr>
                <tr>
                    <th></th>
                    @for($i = 0; $i <= 4; $i++)
                        <th class="text-center">
                            {{date("D",strtotime("+".$i." days"))}}
                        </th>
                    @endfor
                </tr>
            </thead>
            <tbody>
                @foreach($calendars as $key => $calendar)
                    <tr>
                        <td>
                            <i class="fa fa-angle-up"></i>
                            <b>{{$key}}</b>
                        </td>
                        <td><b>28</b></td>
                        <td><b>89</b></td>
                        <td><b></b></td>
                        <td><b>17</b></td>
                        <td><b>29</b></td>
                    </tr>

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
                        @for($i = 0; $i <= 4; $i++)
                            <td><b>{{$level1[$i."_col"]}}</b></td>
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
                            @for($i = 0; $i <= 4; $i++)
                                <td>{{$level2[$i."_col"]}}</td>
                            @endfor
                        </tr>

                            @foreach($level2["subs"] as $level3)
                            <tr>
                                <td class="level33">{{$level3["name"]}}</td>
                                @for($i = 0; $i <= 4; $i++)
                                    <td>{{$level3[$i."_col"]}}</td>
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