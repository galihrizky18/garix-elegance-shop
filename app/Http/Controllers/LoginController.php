<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function login(){
        return Inertia::render('Login');
    }

    public function authenticate(Request $request){

        $validate = $request->validate([
            'username'=>'required',
            'password'=>'required',
        ],[
            'username.required' => 'Username Tidak Boleh Kosong',
            'password.required' => 'Passowrd Tidak Boleh Kosong',
        ]
        );
        if(Auth::attempt($validate)){
            $request->session()->regenerate();
            return redirect()->intended('/dashboard');
        }
        return redirect('/')->with('failedlogin', "Gagal Login");
    }

    public function register(){
        return Inertia::render('');
    }

    public function logout(){
        Auth::logout();

        return redirect('/');
    }
}
