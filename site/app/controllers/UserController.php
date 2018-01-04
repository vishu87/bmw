<?php
class UserController extends BaseController {
    protected $layout = 'layout';
    
    public function login(){
        
        return View::make('login');
    }

    public function postLogin(){
        $credentials = [
            'username' => Input::get('username'),
            'password' => Input::get('password')
        ];
        $rules = [
            'username' => 'required',
            'password' => 'required'
        ];
        $validator = Validator::make($credentials, $rules);
        if ($validator->passes()) {
            if (Auth::attempt(['username' => Input::get('username'), 'password' => Input::get('password'), 'active' => 0] )){

                
                return Redirect::to('dashboard');
                
            }
            else {
                return Redirect::back()->withInput()->with('failure', 'username or password is invalid!');}
        } else {
            return Redirect::back()->withErrors($validator)->withInput()->with('failure','All Fields Are Not Filled!');
        }
    }

}