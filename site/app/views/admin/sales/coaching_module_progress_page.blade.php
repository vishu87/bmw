<div style="padding: 10px 0; background: #3080a9">
    <div class="container-fluid title">
        <div class="row">
            <div class="col-md-6 col-xs-6">
                <div style="margin-top: 5px">Coaching Calendar</div>
            </div>
            <div class="col-md-6 col-xs-6 text-right">
                <a href="{{url('/sales')}}" class="btn dark"><i class="fa fa-angle-double-left"></i> Go Back</a>
            </div>
        </div>
    </div>
</div>

<div style="background:#FFF; padding: 50px 0">
    <div class="container">
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th style="width: 200px"></th>
                    @for($i = 0; $i < 10; $i++)
                        <th>
                            {{date("d-M-y",strtotime("+".$i." days"))}}
                        </th>
                    @endfor
                </tr>
                <tr>
                    <th></th>
                    @for($i = 0; $i < 10; $i++)
                        <th>
                            {{date("D",strtotime("+".$i." days"))}}
                        </th>
                    @endfor
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-center">DJ</td>
                    @for($i = 0; $i < 10; $i++)
                        @if($i == 2)
                            <td class="red">NSC or EY</td>
                        @else
                            <td></td>
                        @endif
                    @endfor
                </tr>
            </tbody>
        </table>
    </div>
</div>