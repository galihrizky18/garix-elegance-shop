<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Keranjang;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        User::create([
            'id_user' => 'user1',
            'first_name' => 'Galih',
            'last_name' => 'Rizky',
            'email' => 'garix@gmail.com',
            'username' => 'user',
            'password' => bcrypt('123'),
        ]);
        User::create([
            'id_user' => 'user2',
            'first_name' => 'Heri',
            'last_name' => 'Prima',
            'email' => 'HeriPrimax@gmail.com',
            'username' => 'user2',
            'password' => bcrypt('123'),
        ]);

        Product::create([
            'id_product' => 'product1',
            'product_name' => 'dior',
            'product_price' => 40000,
            'product_stock' => 3987,
            'product_img' => '/asset/products/product-dior.webp',
            'product_description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores labore necessitatibus fugiat id nobis possimus nisi, recusandae illum. Officia debitis laboriosam eum quae voluptate doloribus commodi deleniti officiis saepe illum, fuga, reprehenderit inventore accusamus minima quos voluptatem? Sint dolor dignissimos rem ratione obcaecati ipsum eaque unde. Reprehenderit iste veniam incidunt?',
        ]);
        Product::create([
            'id_product' => 'product2',
            'product_name' => 'MAC',
            'product_price' => 47000,
            'product_stock' => 867,
            'product_img' => '/asset/products/product-mac.webp',
            'product_description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores labore necessitatibus fugiat id nobis possimus nisi, recusandae illum. Officia debitis laboriosam eum quae voluptate doloribus commodi deleniti officiis saepe illum, fuga, reprehenderit inventore accusamus minima quos voluptatem? Sint dolor dignissimos rem ratione obcaecati ipsum eaque unde. Reprehenderit iste veniam incidunt?',

        ]);
        Product::create([
            'id_product' => 'product3',
            'product_name' => 'Rare',
            'product_price' => 89000,
            'product_stock' => 1287,
            'product_img' => '/asset/products/product-rare.webp',
            'product_description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores labore necessitatibus fugiat id nobis possimus nisi, recusandae illum. Officia debitis laboriosam eum quae voluptate doloribus commodi deleniti officiis saepe illum, fuga, reprehenderit inventore accusamus minima quos voluptatem? Sint dolor dignissimos rem ratione obcaecati ipsum eaque unde. Reprehenderit iste veniam incidunt?',

        ]);
        Product::create([
            'id_product' => 'product4',
            'product_name' => 'SK2',
            'product_price' => 512200,
            'product_stock' => 1287,
            'product_img' => '/asset/products/product-sk2.webp',
            'product_description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores labore necessitatibus fugiat id nobis possimus nisi, recusandae illum. Officia debitis laboriosam eum quae voluptate doloribus commodi deleniti officiis saepe illum, fuga, reprehenderit inventore accusamus minima quos voluptatem? Sint dolor dignissimos rem ratione obcaecati ipsum eaque unde. Reprehenderit iste veniam incidunt?',
        ]);

        Keranjang::create([
            'id_user'=>'user1',
            'id_product'=>'product2',
            'kuantitas'=>10,
        ]);
        Keranjang::create([
            'id_user'=>'user1',
            'id_product'=>'product3',
            'kuantitas'=>45,
        ]);
        Keranjang::create([
            'id_user'=>'user1',
            'id_product'=>'product4',
            'kuantitas'=>6,
        ]);
    }
}
