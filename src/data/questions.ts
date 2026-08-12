import { Question } from '../types';

export const QUESTIONS_DATA: Question[] = [
  // PILIHAN GANDA (1 - 30)
  {
    id: 1,
    type: 'pg',
    level: 'C5',
    category: 'Pilihan Ganda',
    questionText: 'Sebuah tim siswa merancang botol minum untuk pelajar. Hasil observasi menunjukkan pengguna sering kesulitan membuka tutup botol ketika terburu-buru. Tim mengusulkan tutup dengan mekanisme sekali tekan. Sebelum membuat prototipe, tindakan yang paling tepat untuk mengevaluasi kualitas desain adalah …',
    options: [
      { key: 'a', text: 'langsung membuat desain final agar waktu produksi lebih cepat' },
      { key: 'b', text: 'membandingkan kebutuhan pengguna dengan fungsi, keamanan, ergonomi, dan kemudahan penggunaan desain' },
      { key: 'c', text: 'memilih warna botol berdasarkan selera anggota tim' },
      { key: 'd', text: 'mengurangi jumlah fitur tanpa menguji kebutuhan pengguna' },
      { key: 'e', text: 'meniru bentuk botol yang paling laris di pasaran' }
    ],
    correctAnswer: 'b',
    pembahasan: 'Desain perlu dinilai terhadap kebutuhan nyata pengguna, fungsi, keamanan, ergonomi, dan kemudahan sebelum prototipe dikembangkan lebih jauh.'
  },
  {
    id: 2,
    type: 'pg',
    level: 'C5',
    category: 'Pilihan Ganda',
    questionText: 'Sebuah kemasan makanan memiliki tampilan menarik, tetapi tutupnya mudah terbuka saat dibawa. Jika tujuan desain adalah meningkatkan pengalaman pengguna, keputusan evaluasi yang paling tepat adalah …',
    options: [
      { key: 'a', text: 'mempertahankan desain karena visual lebih penting' },
      { key: 'b', text: 'menambah ornamen agar kemasan terlihat premium' },
      { key: 'c', text: 'mengubah mekanisme penutup dan mengujinya kembali pada kondisi penggunaan nyata' },
      { key: 'd', text: 'mengganti nama merek saja' },
      { key: 'e', text: 'menambah ukuran logo' }
    ],
    correctAnswer: 'c',
    pembahasan: 'Masalah tutup menyentuh fungsi dan pengalaman pengguna. Revisi mekanisme perlu divalidasi melalui pengujian ulang.'
  },
  {
    id: 3,
    type: 'pg',
    level: 'C5',
    category: 'Pilihan Ganda',
    questionText: 'Dua alternatif desain kursi belajar diuji. Desain A murah tetapi kurang ergonomis; desain B lebih mahal tetapi mendukung postur dan tahan lama. Jika target pengguna adalah siswa yang menggunakan kursi setiap hari, keputusan paling rasional adalah …',
    options: [
      { key: 'a', text: 'selalu memilih desain termurah' },
      { key: 'b', text: 'memilih desain B setelah menghitung kelayakan biaya dan manfaat jangka panjang' },
      { key: 'c', text: 'memilih desain A tanpa pengujian' },
      { key: 'd', text: 'memilih berdasarkan warna' },
      { key: 'e', text: 'menggabungkan semua fitur tanpa analisis biaya' }
    ],
    correctAnswer: 'b',
    pembahasan: 'Keputusan desain perlu mempertimbangkan manfaat dan biaya jangka panjang, bukan hanya harga awal.'
  },
  {
    id: 4,
    type: 'pg',
    level: 'C5',
    category: 'Pilihan Ganda',
    questionText: 'Prototipe tempat sampah pintar gagal mendeteksi objek kecil secara konsisten. Tim ingin melakukan perbaikan. Langkah evaluatif yang paling tepat adalah …',
    options: [
      { key: 'a', text: 'menghapus sensor' },
      { key: 'b', text: 'mencari penyebab kegagalan melalui data uji, memperbaiki parameter/desain, lalu melakukan pengujian ulang' },
      { key: 'c', text: 'langsung memproduksi massal' },
      { key: 'd', text: 'mengganti nama produk' },
      { key: 'e', text: 'mengurangi jumlah pengguna uji' }
    ],
    correctAnswer: 'b',
    pembahasan: 'Data kegagalan perlu dianalisis untuk menemukan penyebab, kemudian desain diperbaiki dan diuji kembali.'
  },
  {
    id: 5,
    type: 'pg',
    level: 'C5',
    category: 'Pilihan Ganda',
    questionText: 'Hasil uji pengguna menunjukkan tiga masalah: pegangan licin, ukuran terlalu besar, dan instruksi penggunaan sulit dipahami. Prioritas perbaikan yang paling tepat adalah …',
    options: [
      { key: 'a', text: 'memperbaiki masalah keselamatan/ergonomi terlebih dahulu, kemudian ukuran dan instruksi' },
      { key: 'b', text: 'memperbaiki warna terlebih dahulu' },
      { key: 'c', text: 'menghapus instruksi' },
      { key: 'd', text: 'memperbesar logo' },
      { key: 'e', text: 'mempertahankan semua karena produk sudah diuji' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Masalah keselamatan dan ergonomi perlu diprioritaskan karena berdampak langsung pada penggunaan; setelah itu masalah ukuran dan instruksi.'
  },
  {
    id: 6,
    type: 'pg',
    level: 'C5',
    category: 'Pilihan Ganda',
    questionText: 'Dalam pengembangan lampu meja, tim menemukan desain awal estetis tetapi menghasilkan cahaya yang menyilaukan. Berdasarkan prinsip desain berpusat pada pengguna, evaluasi terbaik adalah …',
    options: [
      { key: 'a', text: 'mengutamakan estetika dan mengabaikan keluhan' },
      { key: 'b', text: 'menyesuaikan arah, intensitas, atau diffuser cahaya lalu menguji kembali kenyamanan pengguna' },
      { key: 'c', text: 'menambah dekorasi' },
      { key: 'd', text: 'mengganti kemasan' },
      { key: 'e', text: 'memproduksi desain awal sebanyak mungkin' }
    ],
    correctAnswer: 'b',
    pembahasan: 'Kenyamanan pengguna merupakan bagian penting dari kualitas desain. Perubahan teknis perlu dibuktikan dengan uji ulang.'
  },
  {
    id: 7,
    type: 'pg',
    level: 'C5',
    category: 'Pilihan Ganda',
    questionText: 'Sebuah produk memiliki 10 fitur, tetapi hanya 4 yang benar-benar digunakan konsumen. Biaya produksi menjadi tinggi. Keputusan desain yang paling tepat adalah …',
    options: [
      { key: 'a', text: 'mempertahankan semua fitur agar terlihat canggih' },
      { key: 'b', text: 'menganalisis nilai setiap fitur terhadap kebutuhan pengguna dan mempertimbangkan pengurangan fitur yang tidak bernilai' },
      { key: 'c', text: 'menambah fitur baru' },
      { key: 'd', text: 'menghapus semua fitur' },
      { key: 'e', text: 'menaikkan harga tanpa analisis' }
    ],
    correctAnswer: 'b',
    pembahasan: 'Fitur perlu dinilai berdasarkan nilai bagi pengguna dan biaya. Fitur yang tidak bernilai dapat disederhanakan.'
  },
  {
    id: 8,
    type: 'pg',
    level: 'C5',
    category: 'Pilihan Ganda',
    questionText: 'Sebuah kelompok memperoleh dua hasil uji prototipe yang bertentangan. Sebagian pengguna menyukai ukuran produk, sebagian lainnya merasa terlalu besar. Cara evaluasi paling tepat adalah …',
    options: [
      { key: 'a', text: 'mengabaikan kelompok minoritas' },
      { key: 'b', text: 'mengambil keputusan berdasarkan data yang paling keras disuarakan' },
      { key: 'c', text: 'menganalisis karakteristik masing-masing kelompok pengguna dan menentukan segmen sasaran sebelum revisi desain' },
      { key: 'd', text: 'menghapus produk' },
      { key: 'e', text: 'memilih ukuran secara acak' }
    ],
    correctAnswer: 'c',
    pembahasan: 'Perbedaan respons dapat menunjukkan segmen pengguna yang berbeda. Keputusan sebaiknya berbasis karakteristik segmen dan data.'
  },
  {
    id: 9,
    type: 'pg',
    level: 'C4',
    category: 'Pilihan Ganda',
    questionText: 'Urutan prosedur yang paling logis dalam pengembangan desain produk adalah …',
    options: [
      { key: 'a', text: 'produksi massal–ideasi–uji–identifikasi masalah' },
      { key: 'b', text: 'identifikasi kebutuhan–ideasi–pemilihan konsep–prototipe–uji–perbaikan' },
      { key: 'c', text: 'uji–produksi–identifikasi kebutuhan–ideasi' },
      { key: 'd', text: 'promosi–produksi–uji–ideasi' },
      { key: 'e', text: 'kemasan–promosi–ideasi–uji' }
    ],
    correctAnswer: 'b',
    pembahasan: 'Proses dimulai dari kebutuhan, menghasilkan konsep, dibuat prototipe, diuji, lalu diperbaiki secara iteratif.'
  },
  {
    id: 10,
    type: 'pg',
    level: 'C4',
    category: 'Pilihan Ganda',
    questionText: 'Pada tahap ideasi, tujuan membuat beberapa alternatif konsep adalah …',
    options: [
      { key: 'a', text: 'menghindari evaluasi' },
      { key: 'b', text: 'memperluas kemungkinan solusi sebelum memilih konsep yang paling sesuai' },
      { key: 'c', text: 'mempercepat produksi massal' },
      { key: 'd', text: 'menentukan harga jual final' },
      { key: 'e', text: 'menggantikan kebutuhan observasi' }
    ],
    correctAnswer: 'b',
    pembahasan: 'Alternatif memperluas ruang solusi sehingga tim dapat membandingkan konsep sebelum memilih.'
  },
  {
    id: 11,
    type: 'pg',
    level: 'C4',
    category: 'Pilihan Ganda',
    questionText: 'Sketsa produk digunakan pada tahap awal karena …',
    options: [
      { key: 'a', text: 'selalu menjadi produk akhir' },
      { key: 'b', text: 'memungkinkan gagasan divisualisasikan dan dikaji sebelum sumber daya digunakan untuk prototipe' },
      { key: 'c', text: 'tidak memerlukan masukan pengguna' },
      { key: 'd', text: 'menghilangkan seluruh risiko desain' },
      { key: 'e', text: 'hanya berfungsi sebagai hiasan' }
    ],
    correctAnswer: 'b',
    pembahasan: 'Sketsa murah dan cepat untuk memvisualisasikan gagasan serta memudahkan diskusi dan revisi.'
  },
  {
    id: 12,
    type: 'pg',
    level: 'C4',
    category: 'Pilihan Ganda',
    questionText: 'Dalam analisis desain, aspek ergonomi terutama berkaitan dengan …',
    options: [
      { key: 'a', text: 'kesesuaian produk dengan kemampuan, kenyamanan, dan karakteristik pengguna' },
      { key: 'b', text: 'jumlah iklan' },
      { key: 'c', text: 'warna logo' },
      { key: 'd', text: 'strategi diskon' },
      { key: 'e', text: 'nama perusahaan' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Ergonomi menilai kesesuaian produk dengan kemampuan fisik, kenyamanan, dan karakteristik pengguna.'
  },
  {
    id: 13,
    type: 'pg',
    level: 'C4',
    category: 'Pilihan Ganda',
    questionText: 'Sebuah produk memiliki bentuk unik tetapi sulit diproduksi karena membutuhkan banyak komponen khusus. Aspek yang perlu dianalisis bersama estetika adalah …',
    options: [
      { key: 'a', text: 'manufacturability atau kemudahan diproduksi' },
      { key: 'b', text: 'jumlah pengikut media sosial' },
      { key: 'c', text: 'slogan' },
      { key: 'd', text: 'musik promosi' },
      { key: 'e', text: 'warna seragam sekolah' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Desain yang baik juga harus realistis untuk diproduksi secara efisien.'
  },
  {
    id: 14,
    type: 'pg',
    level: 'C4',
    category: 'Pilihan Ganda',
    questionText: 'Mengapa uji prototipe sebaiknya dilakukan sebelum produksi massal?',
    options: [
      { key: 'a', text: 'agar biaya kesalahan desain dapat ditekan dan kelemahan produk ditemukan lebih awal' },
      { key: 'b', text: 'agar produk tidak perlu direvisi' },
      { key: 'c', text: 'agar harga selalu mahal' },
      { key: 'd', text: 'agar promosi tidak diperlukan' },
      { key: 'e', text: 'agar pengguna tidak perlu dilibatkan' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Uji awal menemukan kelemahan ketika biaya perubahan masih relatif rendah.'
  },
  {
    id: 15,
    type: 'pg',
    level: 'C4',
    category: 'Pilihan Ganda',
    questionText: 'Dalam memilih konsep desain, matriks keputusan dapat digunakan untuk …',
    options: [
      { key: 'a', text: 'memilih konsep berdasarkan kriteria yang relevan dan bobot kepentingannya' },
      { key: 'b', text: 'menggantikan seluruh proses observasi' },
      { key: 'c', text: 'menentukan keputusan secara acak' },
      { key: 'd', text: 'menghilangkan kebutuhan prototipe' },
      { key: 'e', text: 'membuat produk tanpa spesifikasi' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Matriks keputusan membantu membandingkan alternatif secara sistematis berdasarkan kriteria dan bobot.'
  },
  {
    id: 16,
    type: 'pg',
    level: 'C4',
    category: 'Pilihan Ganda',
    questionText: 'Jika desain produk memenuhi fungsi tetapi boros bahan, kesimpulan analisis yang paling tepat adalah …',
    options: [
      { key: 'a', text: 'desain sudah sempurna' },
      { key: 'b', text: 'fungsi perlu dipertahankan sambil mengevaluasi efisiensi material dan dampak biaya/lingkungan' },
      { key: 'c', text: 'fungsi harus dihapus' },
      { key: 'd', text: 'produk tidak perlu diuji' },
      { key: 'e', text: 'bahan harus selalu ditambah' }
    ],
    correctAnswer: 'b',
    pembahasan: 'Fungsi tetap penting, tetapi efisiensi material dan dampak biaya/lingkungan perlu dioptimalkan.'
  },
  {
    id: 17,
    type: 'pg',
    level: 'C4',
    category: 'Pilihan Ganda',
    questionText: 'Sebuah tim membuat persona pengguna sebelum mengembangkan desain. Tujuan utamanya adalah …',
    options: [
      { key: 'a', text: 'membantu tim memahami karakteristik, kebutuhan, tujuan, dan masalah pengguna sasaran' },
      { key: 'b', text: 'menentukan warna favorit guru' },
      { key: 'c', text: 'menggantikan uji produk' },
      { key: 'd', text: 'menentukan laba secara otomatis' },
      { key: 'e', text: 'membuat produk untuk semua orang tanpa batas' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Persona membantu tim membangun gambaran pengguna sasaran agar keputusan desain lebih terarah.'
  },
  {
    id: 18,
    type: 'pg',
    level: 'C4',
    category: 'Pilihan Ganda',
    questionText: 'Pada tahap evaluasi, feedback pengguna sebaiknya diprioritaskan berdasarkan …',
    options: [
      { key: 'a', text: 'relevansi terhadap tujuan produk, frekuensi masalah, tingkat dampak, dan bukti hasil pengujian' },
      { key: 'b', text: 'siapa yang paling dekat dengan tim' },
      { key: 'c', text: 'jumlah komentar yang lucu' },
      { key: 'd', text: 'warna tulisan komentar' },
      { key: 'e', text: 'urutan komentar masuk' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Feedback yang penting adalah yang relevan, berdampak, berulang, dan didukung bukti pengujian.'
  },
  {
    id: 19,
    type: 'pg',
    level: 'C3',
    category: 'Pilihan Ganda',
    questionText: 'Kegiatan membuat model sederhana dari kardus untuk menguji ukuran dan bentuk termasuk …',
    options: [
      { key: 'a', text: 'prototyping' },
      { key: 'b', text: 'produksi massal' },
      { key: 'c', text: 'distribusi' },
      { key: 'd', text: 'promosi' },
      { key: 'e', text: 'branding' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Model sederhana dari bahan mudah merupakan bentuk prototyping untuk menguji karakteristik tertentu.'
  },
  {
    id: 20,
    type: 'pg',
    level: 'C3',
    category: 'Pilihan Ganda',
    questionText: 'Contoh penerapan prinsip iteratif adalah …',
    options: [
      { key: 'a', text: 'membuat satu desain dan tidak mengubahnya' },
      { key: 'b', text: 'membuat–menguji–menerima umpan balik–memperbaiki–menguji kembali' },
      { key: 'c', text: 'langsung menjual produk' },
      { key: 'd', text: 'menghindari pengguna' },
      { key: 'e', text: 'menghapus data uji' }
    ],
    correctAnswer: 'b',
    pembahasan: 'Iterasi berarti membuat, menguji, menerima masukan, memperbaiki, dan menguji kembali.'
  },
  {
    id: 21,
    type: 'pg',
    level: 'C3',
    category: 'Pilihan Ganda',
    questionText: 'Saat mengembangkan kemasan, kegiatan mengukur panjang, lebar, dan tinggi produk dilakukan untuk …',
    options: [
      { key: 'a', text: 'menentukan dimensi kemasan yang sesuai' },
      { key: 'b', text: 'menentukan nama merek' },
      { key: 'c', text: 'membuat iklan' },
      { key: 'd', text: 'menentukan slogan' },
      { key: 'e', text: 'menghapus prototipe' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Pengukuran produk menjadi dasar menentukan dimensi kemasan yang sesuai.'
  },
  {
    id: 22,
    type: 'pg',
    level: 'C3',
    category: 'Pilihan Ganda',
    questionText: 'Jika pengguna mengeluhkan tombol terlalu kecil, tindakan penerapan desain yang tepat adalah …',
    options: [
      { key: 'a', text: 'memperbesar atau menyesuaikan tombol sesuai kebutuhan ergonomi lalu menguji kembali' },
      { key: 'b', text: 'menambah harga' },
      { key: 'c', text: 'mengubah logo' },
      { key: 'd', text: 'menghapus tombol tanpa analisis' },
      { key: 'e', text: 'mengabaikan pengguna' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Keluhan tombol merupakan masukan ergonomi yang perlu diterjemahkan menjadi revisi dan divalidasi.'
  },
  {
    id: 23,
    type: 'pg',
    level: 'C3',
    category: 'Pilihan Ganda',
    questionText: 'Contoh kriteria desain produk yang baik adalah …',
    options: [
      { key: 'a', text: 'berfungsi, aman, mudah digunakan, sesuai kebutuhan, dan layak diproduksi' },
      { key: 'b', text: 'mahal, rumit, dan sulit digunakan' },
      { key: 'c', text: 'unik tanpa fungsi' },
      { key: 'd', text: 'cantik tetapi berbahaya' },
      { key: 'e', text: 'banyak fitur tanpa manfaat' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Kualitas desain tidak hanya soal tampilan, tetapi fungsi, keamanan, kemudahan, kebutuhan, dan kelayakan produksi.'
  },
  {
    id: 24,
    type: 'pg',
    level: 'C3',
    category: 'Pilihan Ganda',
    questionText: 'Dalam membuat prototipe sederhana, bahan dipilih berdasarkan …',
    options: [
      { key: 'a', text: 'tujuan pengujian, ketersediaan, keamanan, biaya, dan kemiripan karakteristik yang perlu diuji' },
      { key: 'b', text: 'warna favorit pembuat' },
      { key: 'c', text: 'harga paling tinggi saja' },
      { key: 'd', text: 'merek bahan' },
      { key: 'e', text: 'tren tanpa tujuan' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Pemilihan bahan harus sesuai tujuan pengujian dan mempertimbangkan keamanan serta sumber daya.'
  },
  {
    id: 25,
    type: 'pg',
    level: 'C3',
    category: 'Pilihan Ganda',
    questionText: 'Sebelum menggambar desain produk, kegiatan yang paling membantu memahami masalah pengguna adalah …',
    options: [
      { key: 'a', text: 'observasi dan wawancara' },
      { key: 'b', text: 'produksi massal' },
      { key: 'c', text: 'menentukan diskon' },
      { key: 'd', text: 'membuat iklan' },
      { key: 'e', text: 'mencetak kemasan final' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Observasi dan wawancara membantu memperoleh data langsung mengenai masalah dan kebutuhan pengguna.'
  },
  {
    id: 26,
    type: 'pg',
    level: 'C2',
    category: 'Pilihan Ganda',
    questionText: 'Dokumen yang berisi ukuran, material, fungsi, dan persyaratan teknis produk disebut …',
    options: [
      { key: 'a', text: 'spesifikasi produk' },
      { key: 'b', text: 'poster promosi' },
      { key: 'c', text: 'catatan pribadi' },
      { key: 'd', text: 'daftar hadir' },
      { key: 'e', text: 'slogan' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Spesifikasi produk mendokumentasikan karakteristik teknis yang diperlukan.'
  },
  {
    id: 27,
    type: 'pg',
    level: 'C2',
    category: 'Pilihan Ganda',
    questionText: 'Istilah usability dalam desain produk paling dekat dengan makna …',
    options: [
      { key: 'a', text: 'kemudahan dan efektivitas produk digunakan untuk mencapai tujuan pengguna' },
      { key: 'b', text: 'keindahan logo' },
      { key: 'c', text: 'tinggi rendahnya harga' },
      { key: 'd', text: 'jumlah distributor' },
      { key: 'e', text: 'besar kecilnya gudang' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Usability berkaitan dengan seberapa mudah, efektif, dan sesuai tujuan produk digunakan.'
  },
  {
    id: 28,
    type: 'pg',
    level: 'C2',
    category: 'Pilihan Ganda',
    questionText: 'Prototipe adalah …',
    options: [
      { key: 'a', text: 'representasi awal produk yang digunakan untuk mengeksplorasi, menguji, dan memperbaiki konsep' },
      { key: 'b', text: 'produk massal yang siap dipasarkan' },
      { key: 'c', text: 'iklan produk' },
      { key: 'd', text: 'laporan keuangan' },
      { key: 'e', text: 'dokumen promosi' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Prototipe merupakan representasi awal untuk mengeksplorasi dan menguji konsep, bukan selalu produk final.'
  },
  {
    id: 29,
    type: 'pg',
    level: 'C2',
    category: 'Pilihan Ganda',
    questionText: 'Tujuan utama analisis kebutuhan pengguna adalah …',
    options: [
      { key: 'a', text: 'mengetahui masalah dan kebutuhan yang harus dijawab oleh desain' },
      { key: 'b', text: 'menentukan keuntungan tanpa data' },
      { key: 'c', text: 'menghindari pengujian' },
      { key: 'd', text: 'memilih warna secara acak' },
      { key: 'e', text: 'mengurangi komunikasi tim' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Analisis kebutuhan bertujuan menemukan masalah dan kebutuhan yang menjadi dasar desain.'
  },
  {
    id: 30,
    type: 'pg',
    level: 'C2',
    category: 'Pilihan Ganda',
    questionText: 'Revisi desain setelah pengujian menunjukkan bahwa pengembangan produk bersifat …',
    options: [
      { key: 'a', text: 'iteratif' },
      { key: 'b', text: 'statis' },
      { key: 'c', text: 'sekali jadi' },
      { key: 'd', text: 'tanpa evaluasi' },
      { key: 'e', text: 'tidak terencana' }
    ],
    correctAnswer: 'a',
    pembahasan: 'Revisi setelah pengujian menunjukkan siklus pengembangan yang iteratif.'
  },

  // PILIHAN GANDA KOMPLEKS (31 - 34)
  {
    id: 31,
    type: 'pg_kompleks',
    level: 'C5',
    category: 'Pilihan Ganda Kompleks',
    questionText: 'Pilih semua tindakan yang termasuk evaluasi desain produk yang kuat.',
    options: [
      { key: 'a', text: 'menganalisis hasil uji pengguna' },
      { key: 'b', text: 'membandingkan desain dengan kebutuhan dan kriteria' },
      { key: 'c', text: 'mengidentifikasi akar masalah' },
      { key: 'd', text: 'mengabaikan data yang tidak sesuai harapan' },
      { key: 'e', text: 'melakukan revisi berdasarkan bukti' }
    ],
    correctAnswers: ['a', 'b', 'c', 'e'],
    pembahasan: 'Evaluasi kuat menggunakan data, kriteria, analisis akar masalah, dan revisi berbasis bukti; mengabaikan data justru melemahkan keputusan.'
  },
  {
    id: 32,
    type: 'pg_kompleks',
    level: 'C4',
    category: 'Pilihan Ganda Kompleks',
    questionText: 'Pilih semua faktor yang layak dipertimbangkan ketika menilai sebuah konsep desain.',
    options: [
      { key: 'a', text: 'fungsi' },
      { key: 'b', text: 'ergonomi dan keamanan' },
      { key: 'c', text: 'kelayakan produksi' },
      { key: 'd', text: 'biaya dan penggunaan material' },
      { key: 'e', text: 'warna favorit pengembang sebagai satu-satunya dasar keputusan' }
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    pembahasan: 'Fungsi, ergonomi/keamanan, manufaktur, biaya, dan material adalah kriteria penting. Selera pengembang tidak boleh menjadi satu-satunya dasar.'
  },
  {
    id: 33,
    type: 'pg_kompleks',
    level: 'C3',
    category: 'Pilihan Ganda Kompleks',
    questionText: 'Pilih semua kegiatan yang sesuai dalam proses pengembangan prototipe.',
    options: [
      { key: 'a', text: 'menentukan tujuan pengujian' },
      { key: 'b', text: 'membuat model sesuai tingkat ketelitian yang diperlukan' },
      { key: 'c', text: 'melakukan uji' },
      { key: 'd', text: 'mencatat umpan balik' },
      { key: 'e', text: 'langsung memproduksi massal tanpa evaluasi' }
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    pembahasan: 'Prototipe dibuat untuk tujuan uji tertentu; prosesnya mencakup perencanaan, pembuatan, pengujian, dan pencatatan umpan balik.'
  },
  {
    id: 34,
    type: 'pg_kompleks',
    level: 'C2',
    category: 'Pilihan Ganda Kompleks',
    questionText: 'Pilih semua pernyataan yang menunjukkan pembelajaran mendalam dalam proyek desain.',
    options: [
      { key: 'a', text: 'menghubungkan konsep dengan masalah nyata' },
      { key: 'b', text: 'menggunakan bukti untuk mengambil keputusan' },
      { key: 'c', text: 'merefleksikan proses dan alasan revisi' },
      { key: 'd', text: 'bekerja kolaboratif dan menjelaskan pertimbangan desain' },
      { key: 'e', text: 'menghafal tahapan tanpa mampu menerapkannya' }
    ],
    correctAnswers: ['a', 'b', 'c', 'd'],
    pembahasan: 'Pembelajaran mendalam menuntut pemaknaan, penerapan pada masalah nyata, penggunaan bukti, kolaborasi, dan refleksi.'
  },

  // BENAR / SALAH (35 - 37)
  {
    id: 35,
    type: 'benar_salah',
    level: 'C4',
    category: 'Benar / Salah',
    questionText: 'Desain produk yang baik harus selalu mengutamakan estetika, sedangkan fungsi dan keamanan dapat dipertimbangkan setelah produk selesai.',
    correctAnswer: false,
    pembahasan: 'SALAH: Kualitas desain tidak hanya estetika. Fungsi, keamanan, dan ergonomi harus dipertimbangkan dari tahap awal desain.'
  },
  {
    id: 36,
    type: 'benar_salah',
    level: 'C3',
    category: 'Benar / Salah',
    questionText: 'Uji pengguna dapat menghasilkan informasi yang digunakan untuk memperbaiki desain sebelum produk dikembangkan lebih lanjut.',
    correctAnswer: true,
    pembahasan: 'BENAR: Pengujian oleh pengguna memberikan feedback empiris untuk perbaikan dan iterasi sebelum produksi lanjutan.'
  },
  {
    id: 37,
    type: 'benar_salah',
    level: 'C2',
    category: 'Benar / Salah',
    questionText: 'Prototipe harus selalu memiliki bentuk dan material yang sama persis dengan produk akhir agar dapat digunakan untuk pengujian apa pun.',
    correctAnswer: false,
    pembahasan: 'SALAH: Prototipe dapat berupa model sederhana (low-fidelity) seperti kardus atau sketsa untuk menguji konsep awal dengan hemat biaya.'
  },

  // MENJODOHKAN (38 - 40)
  {
    id: 38,
    type: 'menjodohkan',
    level: 'C3',
    category: 'Menjodohkan',
    questionText: 'Jodohkan kondisi lingkungan pada Kolom A dengan jenis peluang usaha yang paling sesuai pada Kolom B!',
    titleA: 'Kolom A (Kondisi Lingkungan)',
    titleB: 'Kolom B (Peluang Usaha)',
    items: [
      {
        no: 1,
        kolomA: 'Daerah pesisir dengan hasil laut melimpah, tetapi tidak memiliki tempat pelelangan ikan yang memadai.',
        correctKey: 'C',
        explanation: '1 - C (Tempat pelelangan ikan atau cold storage): Menjaga kualitas ikan sebelum didistribusikan.'
      },
      {
        no: 2,
        kolomA: 'Kawasan perkotaan dengan tingkat kepadatan penduduk tinggi dan minim ruang terbuka hijau.',
        correctKey: 'D',
        explanation: '2 - D (Budidaya sayur hidroponik atau tanaman hias vertikal): Menjawab kebutuhan lahan sempit dan sayur segar.'
      },
      {
        no: 3,
        kolomA: 'Desa pegunungan dengan suhu dingin dan tanah subur, tetapi akses internet terbatas.',
        correctKey: 'E',
        explanation: '3 - E (Lahan perkebunan sayur dataran tinggi): Cocok untuk komoditas hortikultura dingin seperti wortel & kubis.'
      },
      {
        no: 4,
        kolomA: 'Lingkungan kampus dengan banyak mahasiswa dan aktivitas organisasi padat, namun waktu memasak terbatas.',
        correctKey: 'A',
        explanation: '4 - A (Usaha katering sehat organik): Menjawab kebutuhan praktis dan makanan sehat mahasiswa.'
      },
      {
        no: 5,
        kolomA: 'Wilayah dengan banyak UMKM makanan tradisional, tetapi belum mampu memasarkan produk secara online.',
        correctKey: 'B',
        explanation: '5 - B (Jasa konsultasi pemasaran digital): Membantu UMKM naik kelas melalui promosi online.'
      }
    ],
    optionsB: [
      { key: 'A', text: 'Usaha katering sehat organik' },
      { key: 'B', text: 'Jasa konsultasi pemasaran digital' },
      { key: 'C', text: 'Tempat pelelangan ikan atau cold storage' },
      { key: 'D', text: 'Budidaya sayur hidroponik atau tanaman hias vertikal' },
      { key: 'E', text: 'Lahan perkebunan sayur dataran tinggi (wortel, kubis)' }
    ],
    pembahasan: 'Jodohkan kondisi lokasi dengan solusi bisnis yang paling logis dan responsif terhadap kebutuhan setempat.'
  },
  {
    id: 39,
    type: 'menjodohkan',
    level: 'C3',
    category: 'Menjodohkan',
    questionText: 'Jodohkan jenis usaha pada Kolom A dengan bidang bisnis yang sesuai pada Kolom B!',
    titleA: 'Kolom A (Jenis Usaha)',
    titleB: 'Kolom B (Bidang Bisnis)',
    items: [
      {
        no: 1,
        kolomA: 'Warung kelontong di ujung gang',
        correctKey: 'B',
        explanation: '1 - B (Perdagangan/Distribusi): Membeli barang lalu menjualnya kembali tanpa mengubah bentuk.'
      },
      {
        no: 2,
        kolomA: 'Ibu RT membuat kue nastar untuk dijual ke tetangga',
        correctKey: 'C',
        explanation: '2 - C (Industri Kecil/Manufaktur): Mengolah bahan baku menjadi produk jadi (home industry).'
      },
      {
        no: 3,
        kolomA: 'Pak RT memelihara lele di kolam belakang rumah',
        correctKey: 'D',
        explanation: '3 - D (Perikanan): Budidaya ikan air tawar di lingkungan rumah.'
      },
      {
        no: 4,
        kolomA: 'Jasa potong rambut keliling',
        correctKey: 'E',
        explanation: '4 - E (Jasa): Memberikan layanan keterampilan tanpa menghasilkan barang fisik.'
      },
      {
        no: 5,
        kolomA: 'Menanam cabai di polybag untuk dijual',
        correctKey: 'A',
        explanation: '5 - A (Agraris/Pertanian): Membudidayakan tanaman pangan nabati.'
      }
    ],
    optionsB: [
      { key: 'A', text: 'Agraris (Pertanian)' },
      { key: 'B', text: 'Perdagangan (Distribusi)' },
      { key: 'C', text: 'Industri Kecil (Manufaktur)' },
      { key: 'D', text: 'Perikanan' },
      { key: 'E', text: 'Jasa' }
    ],
    pembahasan: 'Klasifikasikan usaha berdasarkan kegiatan utamanya: produksi, distribusi, atau penyediaan jasa.'
  },
  {
    id: 40,
    type: 'menjodohkan',
    level: 'C3',
    category: 'Menjodohkan',
    questionText: 'Jodohkan jenis usaha pada Kolom A dengan pernyataan kelebihan atau kekurangan yang sesuai pada Kolom B!',
    titleA: 'Kolom A (Jenis Usaha)',
    titleB: 'Kolom B (Kelebihan / Kekurangan)',
    items: [
      {
        no: 1,
        kolomA: 'Usaha dagang (toko kelontong)',
        correctKey: 'A',
        explanation: '1 - A: Kelebihan modal kecil di rumah, kekurangan untung tipis & persaingan ketat.'
      },
      {
        no: 2,
        kolomA: 'Usaha jasa (les privat)',
        correctKey: 'C',
        explanation: '2 - C: Kelebihan tanpa stok barang, kekurangan pendapatan tergantung pelanggan & waktu.'
      },
      {
        no: 3,
        kolomA: 'Usaha kuliner (rumahan)',
        correctKey: 'D',
        explanation: '3 - D: Kelebihan fleksibel operasional rendah, kekurangan risiko kadaluarsa & pemasok.'
      },
      {
        no: 4,
        kolomA: 'Usaha online (dropship)',
        correctKey: 'B',
        explanation: '4 - B: Kelebihan skalabilitas tinggi tanpa batas, kekurangan butuh digital marketing & keamanan data.'
      }
    ],
    optionsB: [
      { key: 'A', text: 'Kelebihan: Modal relatif kecil dan bisa dijalankan dari rumah. Kekurangan: Keuntungan tipis dan persaingan ketat.' },
      { key: 'B', text: 'Kelebihan: Skalabilitas tinggi tanpa batas wilayah. Kekurangan: Butuh keahlian digital marketing dan keamanan data.' },
      { key: 'C', text: 'Kelebihan: Tidak perlu stok barang, memanfaatkan keahlian. Kekurangan: Pendapatan tergantung jumlah pelanggan dan waktu.' },
      { key: 'D', text: 'Kelebihan: Fleksibel, biaya operasional rendah. Kekurangan: Risiko produk kadaluarsa dan ketergantungan pemasok.' }
    ],
    pembahasan: 'Analisis karakteristik spesifik dari setiap model bisnis, baik dari segi operasional, investasi, maupun risikonya.'
  }
];
