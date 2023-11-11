<?php

use App\Http\Controllers\LoginController;
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



Route::get('/', [LoginController::class, 'login'])->name('login');
Route::post('/login', [LoginController::class, 'authenticate']);
Route::get('/logout',[LoginController::class, 'logout']);
Route::get('/register', [LoginController::class, 'register']);


Route::get('/tes', [UserController::class, 'tes']);

Route::middleware('auth')->group(function(){
    Route::get('/dashboard', [UserController::class, 'dashboard']);
    Route::get('/detail/{id}', [UserController::class, 'detailProduct']);
    Route::get('/keranjang', [UserController::class, 'keranjang']);
});
