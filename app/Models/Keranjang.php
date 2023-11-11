<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keranjang extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class, 'id_user', 'id_user');
    }

    public function products(){
        return $this->hasMany(Product::class, 'id_product', 'id_product');
    }
}
