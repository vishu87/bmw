<?php
class AdminController  extends BaseController {
    protected $layout = 'layout';

    public function dashboard(){
        $this->layout->sidebar = "";
        $this->layout->main = View::make('admin.dashboard');
    }

    public function sales(){
        $this->layout->sidebar = "";
        $this->layout->main = View::make('admin.sales');
    }
   
}