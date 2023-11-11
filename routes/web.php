<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


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


Route::get('/tes', [UserController::class, 'tes']);

Route::get('/', [UserController::class, 'dashboard']);
Route::get('/detail/{id}', [UserController::class, 'detailProduct']);
Route::get('/keranjang', [UserController::class, 'keranjang']);
