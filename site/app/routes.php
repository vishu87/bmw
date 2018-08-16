<?php

Route::get('/logout', function(){
	Auth::logout();
	return Redirect::to('/');
});	

Route::get('/','UserController@login');
Route::post('/login','UserController@postLogin');

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