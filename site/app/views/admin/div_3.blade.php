<div class="col-md-4 col-sm-6">
    <!-- BEGIN PORTLET-->
    <div class="portlet light bordered">
        <div class="portlet-title">
            <div class="caption">
                <i class="icon-bar-chart font-dark hide"></i>
                <span class="caption-subject font-dark bold uppercase">Coaching Calendar - JAN18</span>
            </div>
            <div class="actions">
                <a href="#" class="next-btn"><i class="fa fa-angle-right"></i></a>
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