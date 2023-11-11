<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class UserController extends Controller
{
    public function dashboard(){

        $product = Product::all();
        return Inertia::render('User/DashboardUser', [
            'product' => $product,
        ]);
    }

    public function detailProduct($id){

        $product = Product::where('id_product', $id)->first();
        return Inertia::render('User/DetailProduct',[
            'product' => $product,
        ]);
    }

    public function keranjang(){
        return Inertia::render('User/Keranjang');
    }

    public function tes(){
        return Inertia::render('tes');
    }
    
}
