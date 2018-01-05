<?php

Route::get('/logout', function(){
	Auth::logout();
	return Redirect::to('/');
});	

Route::get('/','UserController@login');
Route::post('/login','UserController@postLogin');

Route::get('/dashboard','AdminController@dashboard');

Route::get('/sales','AdminController@sales');
