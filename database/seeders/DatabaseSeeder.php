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

        // Kosmetik
        Product::create([
            'id_product' => 'product2',
            'product_name' => 'MAC',
            'kategori' => 'kosmetik',
            'product_price' => 47000,
            'product_stock' => 867,
            'product_img' => '/asset/products/product-mac.webp',
            'product_description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores labore necessitatibus fugiat id nobis possimus nisi, recusandae illum. Officia debitis laboriosam eum quae voluptate doloribus commodi deleniti officiis saepe illum, fuga, reprehenderit inventore accusamus minima quos voluptatem? Sint dolor dignissimos rem ratione obcaecati ipsum eaque unde. Reprehenderit iste veniam incidunt?',

        ]);
        Product::create([
            'id_product' => 'product3',
            'product_name' => 'Rare',
            'kategori' => 'kosmetik',
            'product_price' => 89000,
            'product_stock' => 1287,
            'product_img' => '/asset/products/product-rare.webp',
            'product_description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores labore necessitatibus fugiat id nobis possimus nisi, recusandae illum. Officia debitis laboriosam eum quae voluptate doloribus commodi deleniti officiis saepe illum, fuga, reprehenderit inventore accusamus minima quos voluptatem? Sint dolor dignissimos rem ratione obcaecati ipsum eaque unde. Reprehenderit iste veniam incidunt?',
        ]);
        Product::create([
            'id_product' => 'product6',
            'product_name' => 'Eyeliner Muslimah Sah Untuk Sholat Celak Gel Celak Mata Hitam Halal Semi Waterproof',
            'kategori' => 'kosmetik',
            'product_price' => 13500,
            'product_stock' => 1287,
            'product_img' => '/asset/products/eyeliner.jpeg',
            'product_description' => 'Celak Mata Ini sudah dilengkapi dengan Kuas Apply, Warna Hitam Pekat, Glossy Semi Waterproof..

            luntur dan tidak lunturnya setiap kulit berbeda, namun sudah dipastikan Celak ini Sah Untuk Sholat karena tidak menghalangi Air Wudhu.
            
            #EyelinerMuslimah #Celakgel #CelakTarim #CelakNajiyyah',
        ]);

        // Perawatan WAjah
        Product::create([
            'id_product' => 'product4',
            'product_name' => 'SK2',
            'kategori' => 'perawatan wajah',
            'product_price' => 512200,
            'product_stock' => 1287,
            'product_img' => '/asset/products/product-sk2.webp',
            'product_description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores labore necessitatibus fugiat id nobis possimus nisi, recusandae illum. Officia debitis laboriosam eum quae voluptate doloribus commodi deleniti officiis saepe illum, fuga, reprehenderit inventore accusamus minima quos voluptatem? Sint dolor dignissimos rem ratione obcaecati ipsum eaque unde. Reprehenderit iste veniam incidunt?',
        ]);
        Product::create([
            'id_product' => 'product5',
            'product_name' => 'SKINTIFIC SymWhite 377 Dark Spot Serum Mencerahkan Kulit Brightening Serum Pencerah Wajah Perawatan Kecantikan',
            'kategori' => 'perawatan wajah',
            'product_price' => 312200,
            'product_stock' => 1287,
            'product_img' => '/asset/products/product-skintific.png',
            'product_description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores labore necessitatibus fugiat id nobis possimus nisi, recusandae illum. Officia debitis laboriosam eum quae voluptate doloribus commodi deleniti officiis saepe illum, fuga, reprehenderit inventore accusamus minima quos voluptatem? Sint dolor dignissimos rem ratione obcaecati ipsum eaque unde. Reprehenderit iste veniam incidunt?',
        ]);
        Product::create([
            'id_product' => 'product7',
            'product_name' => '【BPOM】YOUBUY Whitening Freckle Cream Remove Dark Spots Anti Freckle Cream Niacinamide Fade Pigmentation Melasma Brighten',
            'kategori' => 'perawatan wajah',
            'product_price' => 75000,
            'product_stock' => 1287,
            'product_img' => '/asset/products/youbuy.png',
            'product_description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores labore necessitatibus fugiat id nobis possimus nisi, recusandae illum. Officia debitis laboriosam eum quae voluptate doloribus commodi deleniti officiis saepe illum, fuga, reprehenderit inventore accusamus minima quos voluptatem? Sint dolor dignissimos rem ratione obcaecati ipsum eaque unde. Reprehenderit iste veniam incidunt?',
        ]);

        // perawatan rambut
        Product::create([
            'id_product' => 'product8',
            'product_name' => 'Shampoo Black Herbal Natural Polygonum perawatan rambut anti uban penghilang uban permanen di usia muda penutup rambut uban',
            'kategori' => 'perawatan rambut',
            'product_price' => 35000,
            'product_stock' => 464,
            'product_img' => '/asset/products/shampooblack.jpeg',
            'product_description' => ' Polygonum multiflorum sampo herbal，Menutrisi kulit kepala / anti-rambut rontok / rambut hitam！！

            Formula herbal rahasia merek berusia 45 tahun
            
            Shampo Bergizi Polygonum Multiflorum
            
            Formula herbal membantu menghitamkan uban secara alami Meningkatkan pertumbuhan rambut dan mencegah kerontokan rambut
            
            Menumbuhkan akar rambut hitam dalam 7 hari
            
            menumbuhkan rambut hitam dalam waktu 30 hari
            
            Sampo herbal！ Kembalikan rambut indah yang sehat dalam 60 hari
            
            Menghilangkan rambut rontok dan masalah rambut beruban！
            
            Deskripsi khasiat: mengandung esensi akar Polygonum multiflorum, menutrisi rambut dan memperbaiki kerontokan rambut; tambahkan surfaktan asam amino untuk membersihkan dengan lembut. Shampo dapat mengatasi masalah rambut Anda: rambut berminyak, ketombe, rambut kasar',
        ]);
        Product::create([
            'id_product' => 'product9',
            'product_name' => 'JAHE SHAMPOO BLACK Jahe Sampo Rambut Anti Rambut Rontok Menutrisi Rambut Cepat Kuat Pertumbuhan Shampo ginger penumbuh',
            'kategori' => 'perawatan rambut',
            'product_price' => 55000,
            'product_stock' => 978,
            'product_img' => '/asset/products/jaheshampoo.jpeg',
            'product_description' => '✨Fungsi utama:


            Mencegah kerontokan rambut dan secara efektif meningkatkan regenerasi rambut
            
            
            Efektif membersihkan rambut, kulit kepala sensitif, berminyak, gatal, kulit kepala.
            
            
            Nutrisi bergizi, menutrisi rambut dan kulit kepala, memperbaiki kekeringan, kusut, dan kerusakan statis.
            
            
            Meningkatkan elastisitas rambut dan akar serta ekor rambut, menjadikan rambut halus, tebal dan bercahaya.
            
            
            
            
            ✨Informasi produk:
            
            
            Nama Produk: Shampo Raja Jahe
            
            
            Spesifikasi: 500ml
            
            
            Bahan utama: air, ekstrak jahe, minyak kelapa, asam sitrat dan bahan alami lainnya
            
            
            Khasiat Produk: Memperbaiki lingkungan kulit kepala, membuat rambut menyegarkan dan tidak berminyak, ringan dan tidak menyebabkan iritasi, dapat membersihkan bagian bawah kulit kepala dan membersihkan kotoran dan minyak yang terkumpul, dan meningkatkan kemampuan memperbaiki diri dari kulit kepala. Memperbaiki rambut rusak, menutrisi dan memperkuat rambut dari akarnya, memungkinkan rambut melepaskan vitalitas
            
            
            Orang yang berlaku: orang dengan kulit kepala berminyak, orang yang perlu memperkuat akar rambut, orang dengan rambut rontok
            
            
            Umur simpan: tiga tahun
            
            
            
              Cara Penggunaan:
            
            
            1. Peras sampo jahe dan gosok kulit kepala dan pijat kulit kepala selama 5-10 menit (Anda perlu menggosok dua kali untuk mendapatkan efek menutrisi rambut).
            
            
            2. Bilas rambut dengan air setelahnya.
            
            
            3. Anda juga bisa menggunakan kondisioner biasa jika diinginkan.
            
            
            
            
              Paket termasuk:
            
            
            1 X 500ML Shampo Jahe',
        ]);
        Product::create([
            'id_product' => 'product10',
            'product_name' => 'Polygonum Multiflorum Shampoo Penumbuh Rambut Cepat -Dandruff Nourishing Hair - Shampoo Pemanjang Rambut Tercepat',
            'kategori' => 'perawatan rambut',
            'product_price' => 41777,
            'product_stock' => 7866,
            'product_img' => '/asset/products/polygonum.jpeg',
            'product_description' => '[Detail produk]
            Nama Produk: Shampo Polygonum multiflorum
            Isi bersih: 300 ml/botol
            Masa simpan: 3 tahun
            Cocok untuk kualitas rambut: semua gaya rambut
            Deskripsi khasiat: mengandung esensi akar Polygonum multiflorum, menutrisi rambut dan memperbaiki kerontokan rambut; tambahkan surfaktan asam amino ke kulit kepala Nourish. Shampo Polygonum multiflorum dapat mengatasi masalah rambut putih Anda: rambut berminyak, ketombe, rambut kasar, dll
            
            
            【Dokter herbal direkomendasikan】Polygonum multiflorum sampo herbal，Menutrisi kulit kepala / anti-rambut rontok / rambut hitam！！
            
            Formula herbal rahasia merek berusia 45 tahun
            
            Shampo Bergizi Polygonum Multiflorum
            
            Formula herbal membantu menghitamkan uban secara alami Meningkatkan pertumbuhan rambut dan mencegah kerontokan rambut
            
            Menumbuhkan akar rambut hitam dalam 7 hari
            
            menumbuhkan rambut hitam dalam waktu 30 hari
            
            Sampo herbal！ Kembalikan rambut indah yang sehat dalam 60 hari
            
            Menghilangkan rambut rontok dan masalah rambut beruban！',
        ]);

        // Parfum
        Product::create([
            'id_product' => 'product1',
            'product_name' => 'dior',
            'kategori' => 'parfum',
            'product_price' => 40000,
            'product_stock' => 3987,
            'product_img' => '/asset/products/product-dior.webp',
            'product_description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores labore necessitatibus fugiat id nobis possimus nisi, recusandae illum. Officia debitis laboriosam eum quae voluptate doloribus commodi deleniti officiis saepe illum, fuga, reprehenderit inventore accusamus minima quos voluptatem? Sint dolor dignissimos rem ratione obcaecati ipsum eaque unde. Reprehenderit iste veniam incidunt?',
        ]);
        Product::create([
            'id_product' => 'product11',
            'product_name' => 'RAVER - SIgGMA | Parfum Pria untuk Dating Bertemu Wanita | Parfum memikat Wanita | Parfum untuk Dating | Cocok Indoor dan Outdoor',
            'kategori' => 'parfum',
            'product_price' => 69000,
            'product_stock' => 311,
            'product_img' => '/asset/products/raversigma.jpeg',
            'product_description' => 'RAVER "Wangi Disukai Wanita Cantik"
            Eau De Perfume (30 ml)
            by SIgGMA
            
            Longevity: 4-8 jam (outdoor), hingga 12 jam (indoor), dan tahan hingga seharian jika disemprot pada kain
            
            Character: Manly Romantic
            Aroma yang terkesan manly dan romantis cocok untuk anda yang ingin mendapatkan perhatian dari wanita 👌
            
            Top Notes : Bergamot, Plum, and Grapefruit
            Middle Notes : Hazelnut, Honey, Cedar, Cashmere Wood, Jasmine and Orange Blossom
            Base Notes : Amberwood, Patchouli, Oakmoss and Vetiver
            
            ATTENTION!
            * Pengiriman dilakukan setiap hari kecuali hari Minggu dan tanggal merah libur.
            
            * Batas pemesanan agar dikirim di hari yang sama pukul 14.00 WIB (Weekdays) dan 12.00 WIB (Sabtu). Lebih dari itu masuk pengiriman besok harinya.
            
            * Durasi pengiriman sesuai dengan kebijakan, jarak dan ketepatan waktu jasa antar masing-masing
            
            Jika ada kendala, silakan chat admin ya!
            ',
        ]);
        Product::create([
            'id_product' => 'product12',
            'product_name' => 'Parfum Pria HVM Extrait de Perfume Tahan Lama Unisex Parfume Wanita Cowok Cewek',
            'kategori' => 'parfum',
            'product_price' => 149000,
            'product_stock' => 10996,
            'product_img' => '/asset/products/parfumhvm.jpeg',
            'product_description' => "HVM Delicious Series (Delicious Intensely, Fckn.Delicious & Fckn Delicious V2 Extrait de Parfum)

            Ubah romansa manis menjadi hubungan cinta yang penuh gairah dengan Delicious Series by hvm.fragrances
            
            Aroma yang sangat manis memberikan kesan untuk kamu yang ingin membuat kesan awal yang sangat menarik untuk orang di sekitar kamu terutama ketika kamu bertujuan untuk mengesankan pasangan maupun gebetan ketika sedang Dating.
            
            [ New ] HVM DELICIOUS INTENSELY : Unisex 
            Main Accords/Komposisi Aroma
            Sweet Chocolate | Vanilla | Bitter Orange
            
            HVM FCKIN.DELICIOUS : Unisex 
            Main Accords/Komposisi Aroma
            Ice Cream | Vanilla | Caramel | Almond
            
            HVM FCKIN.DELICIOUS V2 : Unisex 
            Main Accords/Komposisi Aroma
            Red Apple | Vanilla | Amber
            
            Characteristics Delicious Series:
            Sweet Gourmand, Seductive, Romantic
            
            •
            
            HVM GOURMAND VIBES Extrait de Parfum : Unisex 
            Main Accords/Komposisi Aroma
            Cherry | Vanilla | Amber | Honey
            
            Characteristics:
            Seductive Sweet Fresh & Fruity Gourmand
            
            •
            
            HVM DESIRE Eau de Perfume
            
            HVM DESIRE Eau de Perfume : MEN Fragrance
            Main Accords/Komposisi Aroma
            Whiskey | Cinnamon | Vanilla | Bergamot
            
            Characteristics:
            Sweet Fresh, Manly Romantic, Badboy 
            
            •
            
            HVM OCEAN Extrait de Perfume: MEN Fragrance
            Main Accords/Komposisi Aroma 
            Fresh Oceanic | Fruity Citrus | Woody
            
            Characteristics:
            Powerful Fresh, Manly, Charismatic
            
            •
            
            HVM PERFECT GENTLEMAN Eau de Perfume : MEN Fragrance
            Main Accords/Komposisi Aroma 
            Fresh Coca-Cola | Cinnamon | Myrrh
            
            HVM PERFECT GENTLEMAN V2 Extrait de Perfume : MEN Fragrance
            Main Accords/Komposisi Aroma 
            Citrus | Cinnamon | Leather
            
            Characteristics PERFECT GENTLEMAN & PERFECT GENTLEMAN V2:
            Fresh Spicy,  Manly, Badboy
            
            •
            
            HVM BONNIE N'Cylde Extrait denPerfume : MEN Fragrance 
            Main Accords/Komposisi Aroma 
            Pineapple | Fruity | Woody | Tropical |
            
            Characteristics:
            Boozy, Cool Romantic, Powerful Fresh Sweet
            
            •
            
            HVM INSTANT LOVE : Female/Wanita
            Main Accords/Komposisi Aroma 
            Leci | Rose | Floral notes | Pear
            
            Characteristics:
            Fresh Sweet, Romantic, Elegant
            
            HVM ALL VARIANT
            Sillage/Jejak Aroma                     : Moderate/Sedang
            Projection/Pancaran Aroma       : 1 - 2meter
            Longevity/Ketahanan Aroma      : 6 - 12 jam
            
            ( outdoor ) 6 - 8 jam
            
            ( indoor ) 6 - 12 jam
            
            • NB: Request tester (sample) Mohon mencantumkan di CATATAN PESANAN (bukan di chat) Max 2 nama varian untuk 1 Parfum yang diorder, Tester akan dikirim jika stok tester masih tersedia.
            
            Apabila kedua Request tester (sample) tidak memiliki stok (habis), akan kami kirim secara random tester. (Terimakasih atas pengertiannya)
            
            Durasi dari pemesanan ke pengiriman paling cepat dikirim di hari yang sama jika konfirmasi pembayaran dilakukan sebelum jam 15:00 Lebih dari itu akan ikut pengiriman di hari berikutnya.
            
            Pengiriman dilakukan dari Kota Bandung, dan durasi pengiriman disesuaikan dengan kebijakan jarak dan ketepatan waktu masing-masing jasa antar. (Ekspedisi Pengiriman)
            
            With Love,
            HVM team.",
        ]);

        // perawatan kulit
        Product::create([
            'id_product' => 'product13',
            'product_name' => 'pemutih kulit permanen orang korea dalam satu kali pakai Handbody pemutih permanen 1 minggu Maycreate Spray instant',
            'kategori' => 'perawatan kulit',
            'product_price' => 15000,
            'product_stock' => 10996,
            'product_img' => '/asset/products/pemutihkulit.jpeg',
            'product_description' => "MAYCREATE MOISTURIZING SPRAY

            MAYCREATE SPRAY :
            Berfungsi untuk mencerahkan tubuh dan membuat tubuh tampak glowing bercahaya layaknya artis korea, bisa dipakai sehari2 atau untuk acara tertentu dengan membersikan kesan glamour & sexy pada kulit - Mengandung SPF
            
            isi 150 ml
            
            gunakan pada bagian seluruh tubuh
            Suncreen spray spf 50
            tidak melengket
            watefroof
            Boleh djadikan base makeup
            Boleh dpakai dmuka badan leher dan ketiak
            
            Mengandung:
            Multi vitamin collagen stem cell
            Alpha arbutin berry snow igy
            Moisturising mineral water..
            
            Kulit yang cocok: semua jenis kulit
            Kemanjuran produk: lembut dan ramah kulit, memberikan kulit dengan lapisan pelindung yang bernapas, iritasi rendah dan pelembab dalam
            Tanggal terbatas: lihat label kemasan
            150 ml
            Pemakaian:
            1. Kocok: kocok cairan semprot
            2. Semprot: semprotan cair
            3. Oleskan: oleskan lengan
            4. Oleskan: oleskan lengan
            
            Syarat & Ketentuan Garansi :
            Komplain dan pengembalian barang hanya berlaku apabila:
            - Bukan pergantian variasi produk: warna, ukuran, jenis, dll
            - Kerusakan bukan diakibatkan oleh pengiriman
            - Wajib ada Video dan Foto lengkap ( Sebelum, Sesudah Unboxing dan Diketahuinya isi brang )
            - Jika tidak ada maka kami tidak dapat memproses penukaran/pengembalian produk
            MEMBELI = SETUJU/SUDAH BACA",
        ]);
        Product::create([
            'id_product' => 'product14',
            'product_name' => 'CRSO Sunscreen Whitening Spray Pemutih Kulit Seluruh Tubuh 150 ml ORIGINAL Moisturizing Protection Body Cream Sunscreen / Whitening',
            'kategori' => 'perawatan kulit',
            'product_price' => 12860,
            'product_stock' => 696,
            'product_img' => '/asset/products/crsosunscreen.jpeg',
            'product_description' => 'CRSO ISOLATION PROTECTION BODY SPRAY 150 ml


            - Putih instan??!! Tinggal semprot, CLING! ✨
            - Ini ANTI LENGKET, tahan air, tahan keringet, SPF50, PA+++
            Trus ilangnya pake apa dong?! Ilangnya kalo pake sabun alias pas kalian mandi. Jd ga kawatir yahh luntur" ✌🏻
            
            CRSO Spray berfungsi untuk mencerahkan tubuh dan membuat tubuh tampak glowing bercahaya layaknya artis korea, bisa dipakai sehari - hari atau untuk acara tertentu dengan membersikan kesan glamour & sexy pada kulit.
            
            Produk ini juga berfungsi sebagai pelembab yang dapat menjaga kelembaban kulit. Dan juga dapat melindungi lebih lama dari sengatan sinar matahari.
            
            💃 gunakan pada bagian seluruh tubuh
            💃 Suncreen spray spf 50
            💃 tidak melengket
            💃 waterproof
            💃 Boleh djadikan base makeup
            💃 Boleh dpakai dmuka badan leher dan ketiak
            💃 Validity: 3 years
            
            COCOK UNTUK SEMUA JENIS KULIT
            
            Mengandung:
            
            - Multi vitamin collagen stem cell
            - Alpha arbutin berry snow igy
            - Moisturising mineral water..
            
            
            PRODUK DIJAMIN 100% SEPERTI DI PHOTO
            
            Pemakaian :
            
            1. Kocok botol
            2. Semprotkan pada bagian yg hendak digunakan
            3. Oleskan / Ratakan
            
            READY STOK SIAP KIRIM :
            
            •	Teliti
            •	Tepat
            •	Terpercaya
            •	Pesanan sudah dicek dengan kondisi terbaik
            •	Pengemasan aman sampai dengan kondisi baik di tangan pembeli
            
            
            PRODUK YANG KAMI JUAL :
            
            •	CRSO 100% ORIGINAL
            •	Garansi uang kembali untuk semua produk
            •	Produksi terbaru
            
            
            NOTE
            CATATAN
            
            Tidak menerima perubahan pesanan melalui chat. Kami hanya mengirim barang sesuai yang tertera pesanan masuk keranjang belanja. Jika ingin complain kirim barang kurang, WAJIB menyertakan video unboxing saat paket baru pertama kali dibuka.
            
            Terima Kasih
            
            
            
            #kosmetik #kosmetikmurah #makeupmurah #bestseller #beauty #supplierkosmetikmurah #tokomurah #makeup #suppliermakeup #batam #supplierbatam #kosmetikbatam #kecantikan #skincare #isolation',
        ]);
        Product::create([
            'id_product' => 'product15',
            'product_name' => '【100% Original】Salep gatal paling ampuh Obat psoriasis obat gatal salep kutil Obat Gatal Salep gatal Salep psoriasis 30G salep gatal',
            'kategori' => 'perawatan kulit',
            'product_price' => 87000,
            'product_stock' => 296,
            'product_img' => '/asset/products/salapgatal.jpeg',
            'product_description' => '【100% Original】Salep gatal paling ampuh Obat psoriasis obat gatal salep kutil Obat Gatal Salep gatal Salep psoriasis 30G salep gatal selangkangan obat alergi gatal kulit Kulit Kepala Psoriasis Tangan Tinea Kaki Bau Versicolor

            ✨【Kemanjuran】✨
            
            Dermatitis, eksim, urtikaria, alergi kulit, tinea tangan dan kaki, bau kaki, kaki gatal, tinea corporis, tinea versikolor, psoriasis, gigitan nyamuk, jerawat, lecet, pengelupasan, pruritus kulit, dll. Desinfeksi dan sterilisasi kulit dan paronikia jamur A berbagai infeksi kulit yang disebabkan oleh jamur.
             
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ✨【Keterangan】✨
            Pereda gatal instan dan tahan lama
            Mengurangi kemerahan dan bengkak
            Pelembab intensif
            Mempromosikan perbaikan sel dan regenerasi sel
            Membantu mencegah terulangnya flair up
            Menyerap dengan cepat dan menyebar dengan lancar
            Dapat digunakan dengan aman di tangan, kaki, dan kulit kepala
            Formula Ringan, Tidak Berminyak, tidak menyumbat pori-pori
            Bau alami yang menyenangkan, tidak ada aroma atau warna buatan
             
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ✨【Petunjuk】✨
            1. Ambil produk dalam jumlah yang sesuai
            2. Oleskan secara merata pada psoriasis jamur gatal
            3. Tunggu hingga produk terserap sepenuhnya
            
            ❤️CATATAN:
            Stok SEMUA READY STOCK saja
            SEMUA pesanan akan diproses dalam 24 jam',
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
