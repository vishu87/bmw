<?php
class AdminController  extends BaseController {
    protected $layout = 'layout';

    public function dashboard(){
        $this->layout->sidebar = "";
        $this->layout->main = View::make('admin.dashboard');
    }

    public function sales(){
        $this->layout->sidebar = "";
        $this->layout->main = View::make('admin.sales.sales');
    }

    public function coachingCalendar(){
    	$this->layout->sidebar = "";
        $this->layout->main = View::make('admin.sales.coaching_calendar_page');
    }

    public function coachingModuleProgress(){
    	$this->layout->sidebar = "";
        $this->layout->main = View::make('admin.sales.coaching_module_progress_page');
    }

    public function actionPlans(){
        $this->layout->sidebar = "";
        $this->layout->main = View::make('admin.sales.action_plans_page');
    }

    public function tasksEscalations(){
        $this->layout->sidebar = "";
        $this->layout->main = View::make('admin.sales.tasks_escalations_page');
    }

    public function kpi(){
        $this->layout->sidebar = "";
        $this->layout->main = View::make('admin.sales.kpi');
    }

    public function projectManagement(){
        $this->layout->sidebar = "";
        $this->layout->main = View::make('admin.sales.project_management');
    }

    public function statusReport(){
        $this->layout->sidebar = "";
        $this->layout->main = View::make('admin.sales.status_report_page');
    }

    public function salesPerformance(){
        $this->layout->sidebar = "";
        $this->layout->main = View::make('admin.sales.sales_performance_page');
    }

}