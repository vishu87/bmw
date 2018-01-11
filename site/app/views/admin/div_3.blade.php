<div class="col-md-4 col-sm-12">
    <!-- BEGIN PORTLET-->
    <div class="portlet light bordered">
        <div class="portlet-title">
            <div class="caption">
                <i class="icon-bar-chart font-dark hide"></i>
                <span class="caption-subject font-dark bold uppercase">Coaching Calendar - JAN18</span>
            </div>
            <div class="actions">
                <div class="btn-group btn-group-devided" data-toggle="buttons">
                    <label class="btn red btn-outline btn-circle btn-sm active">
                        <input type="radio" name="options" class="toggle" id="option1"><i class="fa fa-chevron-right"></i>
                    </label>
                </div>
            </div>
        </div>
        <div class="portlet-body">
            <div>
                <table class="table table-bordered" style="margin-bottom:0">
                    <thead>
                        <tr>
                            <th>S</th>
                            <th>M</th>
                            <th>T</th>
                            <th>W</th>
                            <th>T</th>
                            <th>F</th>
                            <th>S</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <?php
                            $firstday = date("w", strtotime("01-01-2018"));
                            $count = 0;
                            $count_day = 1;
                            for ($i=0; $i < $firstday ; $i++) { 
                                echo '<td></td>';
                                $count++;
                            }
                            for ($i=1; $i <= 31; $i++) { 
                                if($count%7 == 0) echo '</tr><tr>';
                                echo '<td class="date-cal">';
                                echo '<div>'.$i.'</div>';
                                if(in_array($i, [1,4,8,9, 15,18,19,22,24,25,28])){
                                    echo '<span>&nbsp;'.rand(2,10).'&nbsp;</span>';
                                }
                                echo '</td>';
                                $count++;
                            }
                            for ($i=0; $i < 3 ; $i++) { 
                                echo '<td></td>';
                                $count++;
                            }
                        ?>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- END PORTLET-->
</div>