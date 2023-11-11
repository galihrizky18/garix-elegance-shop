<?php

namespace App\Http\Controllers;

use App\Models\User;
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
        return Inertia::render('Register');
    }

    public function storeUser(Request $request){

        $validate = $request->validate([
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required',
            'username' => 'required',
            'passowrd' => 'required',
        ],
        [
            'firstName.required' => 'Username Tidak Boleh Kosong',
            'lastName.required' => 'Passowrd Tidak Boleh Kosong',
            'email.required' => 'Passowrd Tidak Boleh Kosong',
            'username.required' => 'Passowrd Tidak Boleh Kosong',
            'passowrd.required' => 'Passowrd Tidak Boleh Kosong',
        ]
        );

        $user = new User();
        $user->id_user = $validate['firstName'] .'_'. $validate['lastName'];
        $user->first_name = $validate['firstName'];
        $user->last_name = $validate['lastName'];
        $user->email = $validate['email'];
        $user->username = $validate['username'];
        $user->password =bcrypt( $validate['passowrd']);
        $user->save();

        return redirect('/')->with('berhasilRegister', 'Data Berhasil ditambahkan');
        

    }

    public function logout(){
        Auth::logout();

        return redirect('/');
    }
}
