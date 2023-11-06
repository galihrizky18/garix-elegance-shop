<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'], // Ini harus berisi array yang memisahkan metode-metode yang diizinkan

    'allowed_origins' => ['https://x5m66z1p-8000.asse.devtunnels.ms'], // Hilangkan tanda "/" di akhir domain

    'allowed_origins_patterns' => [], // Anda dapat menghapus baris ini jika tidak memerlukannya

    'allowed_headers' => ['*'], // Ini harus berisi array yang memisahkan header-header yang diizinkan

    'exposed_headers' => [
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Credentials',
        'Access-Control-Allow-Private-Network'
    ],

    'max_age' => 0,

    'supports_credentials' => false,

];
