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
Route::post('/register', [LoginController::class, 'storeUser']);

Route::get('/tes', [UserController::class, 'tes']);

Route::middleware('auth')->group(function(){
    Route::get('/dashboard', [UserController::class, 'dashboard']);
    Route::get('/detail/{id}', [UserController::class, 'detailProduct']);
    Route::get('/keranjang/{idUser}', [UserController::class, 'keranjang']);
    Route::get('/delete/{id}', [UserController::class, 'deleteProductFromKeranjang']);
    Route::post('/inputKeranjang', [UserController::class, 'inputKeranjang']);
    Route::get('/kategories', [UserController::class, 'categories']);
    Route::get('/kategories/{kategori}', [UserController::class, 'kategori']);
    Route::get('/product/{product}', [UserController::class, 'productSearch']);
    Route::post('/check-out', [UserController::class, 'checkOut']);

    Route::post('/updateKuantitas', [UserController::class, 'updateKuantitas']);
});
