<div style="padding: 10px 0; background: #3080a9">
    <div class="container-fluid title">
        <div class="row">
            <div class="col-md-6 col-xs-6">
                <div style="margin-top: 5px">Coaching Calendar</div>
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
        "day" => 2,
        "color" => "red",
        "text" => "NSC or EY",
        "subs" => array()
    );

    $ar2 = array(
        "name" => "Aftersales",
        "day" => "",
        "color" => "",
        "text" => "",
        "subs" => array(
            array("name" => "Bird Automative, 4 IDC","day" => "","color" => "","text" => ""),
            array("name" => "EVM Autokraft, Kochi","day" => "","color" => "","text" => ""),
            array("name" => "Krishna Automobile, All","day" => "","color" => "","text" => ""),
            array("name" => "Libra Autohaus, Delhi","day" => "","color" => "","text" => ""),
            array("name" => "Navnit Motors, Bangalore","day" => "6","color" => "blue","text" => "Coaching Day"),
            array("name" => "Deutsche Motoren, Faridabad & Noida","day" => "","color" => "","text" => ""),
            array("name" => "Kun exclusive Hyderabad","day" => "","color" => "","text" => ""),
            array("name" => "Kun exclusive Chennai","day" => "","color" => "","text" => ""),

        )
    );

    $ar3 = array(
        "name" => "VOC",
        "day" => "",
        "color" => "",
        "text" => "",
        "subs" => array(
            array("name" => "Bird Automative, 4 IDC","day" => "4","color" => "yellow","text" => "Health Check"),
            array("name" => "Navnit Motors, Bangalore","day" => "5","color" => "yellow","text" => "Health Check"),

        )
    );

    $ar4 = array(
        "name" => "Vacation",
        "day" => "3",
        "color" => "magenta",
        "text" => "Vacation",
        "subs" => []
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
                    @for($i = 0; $i < 10; $i++)
                        <th style="width: 8%" class="text-center">
                            {{date("d-M-y",strtotime("+".$i." days"))}}
                        </th>
                    @endfor
                </tr>
                <tr>
                    <th></th>
                    @for($i = 0; $i < 10; $i++)
                        <th class="text-center">
                            {{date("D",strtotime("+".$i." days"))}}
                        </th>
                    @endfor
                </tr>
            </thead>
            <tbody>
                @foreach($calendars as $key => $calendar)
                    <tr>
                        <td class="text-center">
                            <b>{{$key}}</b>
                        </td>
                        @for($i = 0; $i < 10; $i++)
                            <td></td>
                        @endfor
                    </tr>

                    @foreach($calendar as $level1)
                    <tr>
                        <td class="level1">
                            @if(sizeof($level1["subs"]) > 0)
                            <i class="fa fa-angle-up"></i>
                            @else
                            <i class="fa fa-angle-down"></i>
                            @endif
                            {{$level1["name"]}}
                        </td>
                        @for($i = 0; $i < 10; $i++)
                            @if($i == $level1["day"])
                                <td class="{{$level1['color']}} text-center">{{$level1['text']}}</td>
                            @else
                                <td></td>
                            @endif
                        @endfor
                    </tr>
                        @foreach($level1["subs"] as $level2)
                        <tr>
                            <td class="level2">{{$level2["name"]}}</td>
                            @for($i = 0; $i < 10; $i++)
                                @if($i == $level2["day"])
                                    <td class="{{$level2['color']}} text-center">{{$level2['text']}}</td>
                                @else
                                    <td></td>
                                @endif
                            @endfor
                        </tr>
                        @endforeach
                    @endforeach
                @endforeach
            </tbody>
        </table>
    </div>
</div>