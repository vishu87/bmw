<?php

Route::get('/logout', function(){
	Auth::logout();
	return Redirect::to('/');
});	

Route::get('/','UserController@login');
Route::post('/login','UserController@postLogin');

Route::get('/new-car-sales',function(){
	Session::put('back-url', 'sales');
	Session::put('name', 'New Car Sales');
	return Redirect::to('/sales');
});

Route::get('/used-car-sales',function(){
	Session::put('back-url', 'sales');
	Session::put('name', 'Used Car Sales');
	return Redirect::to('/sales');
});

Route::get('/data-management',function(){
	Session::put('back-url', 'sales');
	Session::put('name', 'Data Management');
	return Redirect::to('/sales');
});

Route::get('/customer-satisfaction',function(){
	Session::put('back-url', 'sales');
	Session::put('name', 'Customer Satisfaction (Voice)');
	return Redirect::to('/sales');
});

Route::get('/rpm-dealership',function(){
	Session::put('back-url', 'sales');
	Session::put('name', 'RPM Dealership Online');
	return Redirect::to('/sales');
});

Route::group(['before' => 'auth'], function () {
	Route::get('/dashboard','AdminController@dashboard');

	Route::group(['prefix' => 'sales'], function () {
		Route::get('/','AdminController@sales');
		Route::get('/coaching-calendar','AdminController@coachingCalendar');
		Route::get('/coaching-module-progress','AdminController@coachingModuleProgress');
		Route::get('/action-plans','AdminController@actionPlans');
		Route::get('/tasks-escalations','AdminController@tasksEscalations');
		Route::get('/kpi','AdminController@kpi');

	});

	Route::group(['prefix' => 'project-management'], function () {
		Route::get('/','AdminController@projectManagement');
		Route::get('/status-report','AdminController@statusReport');
		Route::get('/sales-performance','AdminController@salesPerformance');
		
	});

});