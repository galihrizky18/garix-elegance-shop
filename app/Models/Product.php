<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function keranjang(){
        return $this->belongsTo(Keranjang::class, 'id_product', 'id_product');
    }
}
