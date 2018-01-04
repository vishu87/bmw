<?php
class AdminController  extends BaseController {
    protected $layout = 'layout';

    public function dashboard(){
        $this->layout->sidebar = "";
        $this->layout->main = View::make('admin.dashboard');
    }
   
}