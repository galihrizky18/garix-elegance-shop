<?php

namespace App\Http\Controllers;

use App\Models\Keranjang;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

use function Termwind\render;

class UserController extends Controller
{
    public function dashboard(){

        $product = Product::all();
        return Inertia::render('User/DashboardUser', [
            'product' => $product,
            'idUser' => Auth::user()->id_user,
        ]);
    }

    public function detailProduct($id){

        $product = Product::where('id_product', $id)->first();
        return Inertia::render('User/DetailProduct',[
            'product' => $product,
            'currentUser' => Auth::user(),
        ]);
    }

    public function keranjang($idUser){

        $keranjang = DB::table('keranjangs')->join('products', 'keranjangs.id_product', '=', 'products.id_product')->where('keranjangs.id_user', $idUser)->get();

        return Inertia::render('User/Keranjang',[
            'keranjang'=>$keranjang,

        ]);
    }

    public function inputKeranjang(Request $request){

        $keranjang = new Keranjang();
        $keranjang->id_user = Auth::user()->id_user;
        $keranjang->id_product = $request->id_product;
        $keranjang->kuantitas = $request->kuantitas;
        $keranjang->save();

        return redirect()->back();

    }

    public function deleteProductFromKeranjang($idProduct){

        $product = Keranjang::where('id_product', $idProduct);
        $product->delete();

        return redirect()->back();


    }

    public function categories(){
        $product = Product::all();
        return Inertia::render('User/Categories',[
            'product' => $product,
            'currentUser' => Auth::user(),

        ]);
    }

    public function kategori($kategori){
        $selectedProduct = Product::where('kategori', $kategori)->get();

        return Inertia::render('User/SelectedCategory', [
            'product' => $selectedProduct,
            'currentUser' => Auth::user(),
        ]);
    }




    public function tes(){
        return Inertia::render('User/SelectedCategory');
    }
    
}
