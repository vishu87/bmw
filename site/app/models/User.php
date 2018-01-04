<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password', 'remember_token');

	public static function UserTypes(){
		return array(
			"1" => "Admin",
			"2" => "Employee",
			"3" => "IT",
			"4" => "Receptionist",
		);
	}

	public static function AccessRights(){

		$combine_array = AccessRight::lists('name', 'id');

		return $combine_array;
		// return array(
		// 		"1" => "Admin",
		// 		// "2" => "Employee",
		// 		// "3" => "IT",
		// 		// "4" => "Receptionist",
		// 		"5" => "Inward",
		// 		"6" => "Outward",

		// );
	}

	public static function check_auth($api_token){

		$user = User::where('api_token',$api_token)->first();

		return $user;
	}
	
	public static function check_hod($user_id){
		$user = Department::where('hod_id',$user_id)->count();
		if($user > 0){
			return true;
		}else{
			return false;
		}
	}

	public static function AuthPrivilege($user_id){
		$user_access = [];
		$user_access =  UserPrivilege::where('employee_id',$user_id)->lists('privilege');
		return $user_access;
	}

	public static function AuthPrivilegeCurrent(){
		$user_access = [];
		if(Auth::user()){
			$user_access =  UserPrivilege::where('employee_id',Auth::user()->user_id)->lists('privilege');
		}
		return $user_access;
	}

	public static function fileExtensions(){
		return array (
			"pdf" , "jpg" , "jpeg", "xls","xlsx" ,"png" , "JPG" ,"JPEG" , "PDF" ,"PNG","XLSX","XLS"
		);
	}
	
}
