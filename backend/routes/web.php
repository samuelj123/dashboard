<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Route::get('/', function () { */
/*     return "This is being called from /backend"; */
/* }); */
Route::middleware('cors')->get('/', function () {
    /* return '{"title":"This is being called from backend"}'; */
		return response ()->json(["title"=>"This is being called from backend"]);
});

