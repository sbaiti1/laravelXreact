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

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/getData' , [App\Http\Controllers\DataController::class, 'getData'] );
Route::post('/getEmployeeData' , [App\Http\Controllers\DataController::class, 'getEmployeeData'] );
Route::post('/update' , [App\Http\Controllers\DataController::class, 'updateEmployee'] );
