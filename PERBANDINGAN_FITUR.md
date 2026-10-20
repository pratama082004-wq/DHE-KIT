# Perbandingan modul dan implementasi DHE-KIT

Seluruh 47 halaman PDF **Kemenkes Poltekkes Jakarta III**, disusun oleh Khairon Salsabillah (2026), dibaca secara visual. PDF berupa hasil pindai tanpa lapisan teks. Angka halaman di bawah adalah nomor halaman berkas PDF, bukan nomor tercetak. Salinan sumber tersedia pada `assets/modul-dhekit.pdf`.

## Hasil audit ulang, 20 Oktober 2026

Pembaruan kualitas ilustrasi setelah audit: seluruh 26 gambar gerakan pada kartu, detail, dan pemutar memakai ilustrasi SVG yang digambar ulang untuk aplikasi. Potongan bitmap dari PDF tidak lagi dipakai untuk panduan interaktif karena halaman sumber hanya memuat gambar 512 × 768 piksel. SVG dapat diperbesar tanpa pecah. Ilustrasi baru merupakan gambar penjelas aplikasi; tautan modul asli tetap menjadi rujukan instruksi. Kekurangan fitur pada audit berikut tidak berubah akibat pembaruan gambar ini.

**Masih ada kekurangan. Aplikasi telah mewakili kelompok fitur utama, tetapi belum memenuhi semua rincian rancangan PDF.** Tabel implementasi di bawah mencatat fungsi yang tersedia, bukan pernyataan bahwa setiap kebutuhan pada kelompok tersebut sudah lengkap. Audit ulang membandingkan seluruh dokumen dan memeriksa lebih rinci halaman fitur 29–33 serta formulir monitoring 35–43 dan 47 terhadap kode saat ini. Pemeriksaan ini memperbarui laporan; fungsi aplikasi tidak diubah.

### Kekurangan yang bisa dilengkapi di aplikasi lokal

| Prioritas | Kebutuhan / halaman PDF | Temuan pada kode sekarang | Pekerjaan yang tersisa |
| --- | --- | --- | --- |
| Tinggi | Jadwal pagi dan sore, 30–32 | Hanya satu `plan.time` yang berlaku untuk semua hari pilihan. Jam kegiatan bisa dicatat bebas, tetapi jadwal tidak memuat beberapa sesi sehari. | Jadwal berisi daftar sesi dengan hari, jam, jenis, dan durasi masing-masing; hubungkan kegiatan dengan sesi jadwal. |
| Tinggi | Pengukuran sebelum/sesudah per sesi, 33, 35, 41–42 | Tekanan darah dan kegiatan disimpan terpisah. Ada konteks pengukuran, tetapi tidak ada ID sesi yang menghubungkan keduanya. | Tautkan pengukuran dan keluhan ke sesi; tampilkan hasil sebelum/sesudah pada detail kegiatan. |
| Tinggi | Form monitoring sesi, 42 | Form jurnal pribadi belum menggantikan form instruktur. | Tambahkan checklist pelaksanaan per komponen, jumlah hadir/terdaftar, kelompok intervensi/kontrol, pengukuran sebelum/sesudah, saturasi, skor Borg yang dicatat petugas, observasi partisipasi, alat bantu, dan identitas pencatat. |
| Tinggi | Kehadiran dan kepatuhan per sesi, 36 | Rumus sekarang menghitung hari selesai, paling banyak sekali sehari; denominator memakai jadwal aktif yang sudah terlewati. PDF menjelaskan jumlah sesi. Mengubah jadwal juga mengubah perhitungan masa lalu. | Simpan identitas dan riwayat jadwal, hitung sesi sesuai rencana yang berlaku saat itu, serta bedakan sesi belum tiba, tidak hadir, sebagian, dan selesai. |
| Tinggi | Total durasi aktivitas, 31 | `stats.minutes` dan angka total pada beranda hanya menjumlah kegiatan berstatus selesai. Durasi kegiatan sebagian tidak termasuk. | Tampilkan total waktu aktif seluruh kegiatan yang benar-benar dilakukan, dan pisahkan durasi sesi selesai bila tetap diperlukan. Reproduksi: 20 menit sebagian + 45 menit selesai dilaporkan 45, meskipun 65 menit tercatat. |
| Sedang | Grafik kepatuhan, tampilan harian/mingguan/bulanan/tahunan, 31, 33 | Grafik tekanan darah dan jumlah sesi tersedia. Kepatuhan hanya berupa angka; tidak ada grafik tren kepatuhan atau pilihan tahunan khusus. | Tambahkan grafik kepatuhan per periode dan pilihan agregasi yang eksplisit. Rentang tanggal khusus saat ini belum sama dengan seluruh mode grafik pada mockup. |
| Sedang | Target minggu/bulan, 30–33 | Jadwal membentuk rencana mingguan dan ada badge, tetapi target sesi bulanan serta indikator pencapaiannya belum tersedia sebagai pengaturan tersendiri. | Target sesuai rencana, progres minggu/bulan, dan pesan ketika target tercapai. |
| Sedang | Detail pengingat, 30–31 | Tiga pengingat tambahan tersedia: tekanan darah, obat, dan air. Pengingat senam dalam halaman muncul pada jam mulai, bukan sebelum mulai. Alarm kalender berbeda: 15 menit sebelum sesi. | Tambahkan jeda pengingat yang bisa dipilih, pengingat makan sehat/istirahat, motivasi harian dan pencapaian target; pilihan bunyi/getar bila perangkat mendukung. |
| Sedang | Catatan obat dan laporan, 31 | Pengingat obat tersedia, tetapi belum ada catatan sudah/belum minum obat atau riwayatnya; pengingat tidak membuktikan konsumsi. | Jurnal obat yang diisi pengguna sesuai resep dan disertakan dalam rekap, tanpa menyarankan dosis. |
| Sedang | Filter riwayat berdasarkan jenis senam, 33 | Ada filter tanggal, pencarian teks, dan status. Jenis kegiatan dapat ditemukan lewat pencarian, tetapi belum ada filter jenis khusus. | Tambahkan filter jenis dan detail kegiatan yang menggabungkan pengukuran terkait. |
| Sedang | Catatan keluhan formal, 37, 43 | Waktu, gejala, tingkat keparahan, tindakan, rujukan dan tindak lanjut ada. Belum ada fase sebelum/saat/setelah, kemungkinan penyebab, nomor sesi, identitas/jabatan pencatat, atau revisi catatan setelah disimpan. | Lengkapi data dokumentasi dan kemampuan koreksi; jangan menyamakan checkbox dengan tanda tangan atau verifikasi petugas. |
| Sedang | Evaluasi outcome, 38 | Input tekanan darah, nadi, berat/tinggi dan 6MWT ada. Belum ada IMT yang dihitung, pasangan baseline–akhir, atau perbandingan outcome per peserta. | Ringkasan perbandingan pengukuran yang diisi petugas; kolom hasil instrumen resmi bila sudah tersedia, tanpa menyalin instrumen atau menciptakan skor. |
| Sedang | Form komunitas dan daftar hadir, 40–43, 47 | Satu profil lokal dan riwayat sendiri tersedia. Belum ada daftar banyak peserta, sesi komunitas, absensi per peserta, atau ekspor form instruktur. | Modul peserta dan absensi komunitas. Dapat dimulai secara lokal; penggunaan bersama antarpetugas memerlukan backend. |
| Sedang | Panduan dengan hitungan, 30 | Teks jumlah hitungan dan pembacaan instruksi tersedia. Belum ada hitungan ritmis/musik atau alur latihan terstruktur berdasarkan pilihan durasi; pilihan durasi sekarang hanya memunculkan pemberitahuan timer. | Bedakan target timer dari program berdurasi; gunakan panduan hitungan dan media yang telah ditinjau instruktur. |
| Pelengkap | Edukasi lengkap, 8–9, 17, 45–46 | Artikel ringkas dan PDF sumber dapat dibaca. Faktor risiko/dampak hipertensi serta kriteria peserta belum menjadi materi tersendiri di aplikasi. | Tambahkan materi yang ditinjau tenaga kesehatan. Kriteria penelitian tidak boleh dipakai otomatis sebagai pembatas umum semua pengguna aplikasi. |

### Kebutuhan yang belum menjadi layanan nyata

| Kebutuhan / halaman PDF | Status dan kebutuhan eksternal |
| --- | --- |
| Video instruktur, hitungan, dan musik; 30 | Pemutar berkas lokal tersedia, tetapi video instruktur bawaan dan media pendukung belum ada dalam bahan proyek. Memerlukan berkas yang benar dan izin penggunaannya. |
| Pendaftaran/masuk akun dan sinkronisasi; 29 | Profil lokal tersedia; belum ada autentikasi, akun lintas perangkat, atau backend. Profil lokal bukan pengganti fitur tersebut. |
| Akses Play Store/App Store/QR; 29 | Website lokal belum diterbitkan sebagai aplikasi. Belum ada URL publik atau QR menuju aplikasi yang benar. |
| Pengingat ketika aplikasi ditutup; 30–31 | Belum ada push notification dari layanan aplikasi. Impor `.ics` adalah alternatif melalui kalender perangkat, bukan fitur push aplikasi yang setara. |
| Konsultasi, rujukan, kontak darurat; 30 | Kontak pilihan pengguna, tautan telepon, dan FAQ tersedia. Belum ada chat petugas aktif, umpan balik konsultasi, direktori rujukan terverifikasi, atau kontak darurat khusus yang dikonfigurasi. |
| Pengiriman laporan ke petugas/keluarga; 30–31 | Ekspor tersedia. Belum ada pemilihan penerima atau pengiriman dalam aplikasi; pengguna membagikan berkas sendiri. |
| Instrumen evaluasi klinis, 38 | WHOQOL-BREF, MMAS-8, PSS, dan PSQI disebut dalam modul. Belum tersedia input hasil masing-masing instrumen secara terstruktur. Instrumen, izin bila berlaku, protokol, serta interpretasi petugas perlu dipastikan sebelum implementasi lengkap. |

### Catatan kesesuaian tampilan dan verifikasi

- Warna, ilustrasi, kartu, tema dan teks besar telah mengikuti arah visual modul. Struktur desktop/sidebar merupakan adaptasi website; mockup PDF terutama menampilkan layar ponsel. Belum ada pemeriksaan visual langsung untuk menyatakan kesamaan tata letak atau kenyamanan pada berbagai ponsel.
- Beberapa pengukuran dan nama pengingat pada PDF merupakan kebutuhan rancangan, bukan bukti tersedianya layanan, video, akun, atau nomor kontak asli. Tidak boleh digantikan dengan data rekaan.
- `npm run check` dan `npm test` dijalankan ulang dan lulus. Tes tersebut memverifikasi perilaku yang sudah diimplementasikan; kelulusan tes tidak membuktikan seluruh rincian PDF sudah terpenuhi.
- Prioritas pengembangan berikutnya: hubungan sesi–pengukuran dan form monitoring, jadwal beberapa sesi, perhitungan kehadiran berdasarkan sesi, total waktu kegiatan sebagian, lalu grafik/target dan detail pengingat.

## Fitur aplikasi

| Kebutuhan dalam PDF | Kondisi sebelumnya | Implementasi sekarang |
| --- | --- | --- |
| Beranda dan akses sederhana (29) | Lima menu, profil demo tetap | Delapan menu, profil lokal, navigasi HP, ringkasan jadwal, catatan, dan progres |
| Panduan gerakan/video (24–27, 30) | 15 entri inti dengan satu duplikasi; ikon sama untuk semua gerakan; timer demo | 26 langkah: 3 pemanasan, 16 inti unik, dan 7 pendinginan; ilustrasi SVG baru dengan instruksi merujuk modul, filter tahap, timer, pilihan durasi, pembacaan suara opsional |
| Video, kontrol kecepatan, akses luring (30) | Tidak ada | Pemutar video dari perangkat, kecepatan 0,5–1,5×, penyimpanan lokal IndexedDB bila tersedia; ilustrasi tetap dapat dibuka tanpa video |
| Pemantauan tekanan darah (12, 30, 33) | Sistolik/diastolik dan grafik dengan label bulan Oktober tetap | Tanggal, jam, nadi opsional, konteks pengukuran, catatan, edit/hapus, filter, grafik dengan rentang nilai dan tanggal dinamis; acuan tekanan darah opsional yang diisi dari arahan tenaga kesehatan |
| Jadwal latihan (30–31) | Tampilan minggu saja | Hari dan jam pilihan, durasi rencana, tanggal mulai, periode 1–52 minggu, kalender bulanan |
| Pengingat (30–31) | Dialog contoh tanpa pengingat berjalan | Pengingat senam, obat sesuai resep, tekanan darah, dan minum sesuai anjuran; notifikasi browser dengan izin saat halaman terbuka; kalender `.ics` dengan alarm untuk digunakan di aplikasi kalender |
| Pencatatan kegiatan (32) | Sesi otomatis dianggap 45 menit | Tanggal, jam, jenis kegiatan, durasi sebenarnya, status selesai/sebagian/tidak dilakukan, intensitas, kondisi tubuh, keluhan, dan tindak lanjut; pencegahan duplikasi tanggal/jam/jenis |
| Rekap dan perkembangan (33, 36) | Total sesi dan progres mingguan sederhana | Periode minggu/bulan/12 minggu/rentang khusus, grafik sesi, rerata pengukuran, perbandingan pertama–terakhir, kehadiran dan kepatuhan berdasarkan jadwal aktif |
| Motivasi dan pencapaian (30–33) | Belum ada | Enam pencapaian dengan syarat terukur; rangkaian hari latihan terjadwal |
| Edukasi (30) | Enam artikel pendek | Sembilan artikel, pencarian, kategori, FAQ, serta tautan halaman sumber |
| Laporan untuk dibagikan sendiri (30–33) | Belum ada | Ekspor CSV, laporan cetak/simpan PDF melalui browser, dan cadangan JSON |
| Dukungan dan konsultasi (30–31) | Belum ada | Kontak tenaga kesehatan yang diisi pengguna, tautan telepon, persiapan konsultasi, FAQ, dan akses laporan |
| Keselamatan dan keluhan (11–15, 35, 37, 43) | Satu persetujuan petunjuk keamanan | Pemeriksaan tekanan darah saat ini, kondisi/gejala, penghambatan memulai latihan bila batas modul terlampaui, form keluhan/keparahan/tindakan/rujukan/tindak lanjut |
| Evaluasi sebelum dan sesudah (38) | Belum ada | Form hasil pemeriksaan: tahap, tekanan darah, nadi, berat/tinggi, 6MWT yang didampingi, dan catatan; tidak menghitung skor kuesioner klinis |
| Konteks komunitas (40–43, 47) | Belum ada | ID peserta, instruktur, lokasi/komunitas, jenis kegiatan bersama, dan dokumentasi keluhan; pencatatan berfokus pada satu profil lokal |
| Tampilan ramah pengguna (29–31) | Tata letak hijau responsif dengan banyak teks kecil | Hijau–krem dengan aksen emas, ilustrasi tiap gerakan, kartu dan hierarki lebih jelas, navigasi HP, pilihan teks besar, kontras, tema gelap, fokus keyboard dan dialog dengan penguncian fokus |
| Data pribadi dan luring | localStorage tanpa cadangan | Kunci data lama dipertahankan; cadangkan/pulihkan JSON dengan validasi dan pratinjau; hapus contoh tanpa menghapus catatan pribadi; seluruh aset aplikasi lokal |

## Keputusan atas ketidakkonsistenan modul

- **Jumlah gerakan:** halaman 23 menyebut 18, halaman 24 menyebut total 19 tetapi panel bernomor sampai 21, dan halaman 25–26 memuat beberapa gerakan berulang serta nomor yang tidak berurutan. Panduan memakai 16 gerakan inti unik dari panel halaman 24. Pemanasan memakai tiga panel halaman 24; pendinginan memakai tujuh panel halaman 27. Hasilnya 26 langkah, bukan klaim bahwa modul mempunyai satu SOP konsisten berisi 26 gerakan.
- **Frekuensi dan total sesi:** modul menyebut tiga kali per minggu, sedangkan beberapa lembar evaluasi memakai 24 sesi selama 12 minggu. Aplikasi memakai jadwal yang dipilih sebagai dasar perhitungan. Contoh tiga hari selama 12 minggu menghasilkan 36 hari terjadwal. Tidak ada target 24 sesi yang dipaksakan.
- **Kehadiran:** kategori pada halaman 36 memakai ambang 75%, sedangkan lembar hadir halaman 47 menyebut 80%. Rekap menggunakan kategori halaman 36 dan menampilkan rumus. Ini ringkasan catatan pribadi, bukan validasi kepatuhan klinis.
- **Tekanan darah dan latihan:** batas kehati-hatian >160 sistolik atau >100 diastolik serta batas skrining ≥180 sistolik atau ≥110 diastolik mengikuti halaman 11–13. Pemeriksaan gejala tidak bergantung pada angka tekanan darah. Aplikasi tidak mengubah batas ini menjadi diagnosis atau izin medis.
- **Pengukuran pascalatihan:** beberapa ilustrasi menyebut 5–10 menit, sedangkan petunjuk keselamatan halaman 12 dan 15 menyebut sekitar 30 menit. Teks aplikasi mengikuti petunjuk keselamatan 30 menit. Penanganan gejala berat juga diperiksa terhadap [American Heart Association](https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/when-to-call-911-for-high-blood-pressure).
- **Instruksi gerakan:** gerakan yang memerlukan keseimbangan, seperti jongkok berdiri, diberi penjelasan untuk dilakukan hanya bila sesuai arahan tenaga kesehatan; pengguna dapat melewati gerakan. Pernapasan menggunakan napas normal dan nyaman.

## Batas integrasi yang sebenarnya

- PDF berisi rancangan aplikasi, bukan berkas video instruktur, tautan aplikasi resmi yang dapat diverifikasi, atau layanan konsultasi aktif. Aplikasi menyediakan ilustrasi serta pemutar video lokal; tidak mengarang video, dokter, tautan toko aplikasi, atau jawaban klinis.
- Profil tidak menjadi akun daring. Tidak ada autentikasi server, sinkronisasi lintas perangkat, chat tenaga kesehatan, pengiriman laporan otomatis, atau pengelolaan banyak peserta terpusat. Fitur tersebut memerlukan layanan dan kredensial yang belum tersedia dalam proyek.
- Pengingat browser berjalan saat halaman terbuka. Berkas kalender harus diimpor sendiri; pengingat saat halaman ditutup bergantung pada aplikasi kalender dan pengaturan perangkat.
- Notifikasi, suara bahasa Indonesia, pemutaran format video, IndexedDB, dan pencetakan PDF bergantung pada browser. Kegagalan penyimpanan ditampilkan; ekspor JSON tetap dapat dilakukan dari data sesi aktif.
- Kuesioner berlisensi/tervalidasi pada materi evaluasi tidak disalin atau diubah menjadi skor klinis otomatis.

## Verifikasi

- `npm run check`: sintaks keempat berkas JavaScript valid.
- `npm test`: tanggal dan lintas bulan/tahun, jadwal, rumus kehadiran/kepatuhan, data rangkap, batas skrining, ICS, dan perlindungan formula CSV lulus.
- Pengujian DOM menjalankan kode Preact sebenarnya: delapan halaman, kompatibilitas data lama, simpan jadwal, input/edit tekanan darah, 26 langkah, timer, durasi sebenarnya, pencarian, ekspor, form dukungan/keluhan/evaluasi, profil, tema, cadangkan/pulihkan, dan penghapusan hanya contoh data lulus.
- Semua 26 ilustrasi gerakan kini memakai SVG yang digambar ulang dan dirender untuk pemeriksaan lokal. Gambar beranda/program tetap memakai aset sebelumnya. Tautan aset diperiksa lokal.
- Pratinjau browser tidak tersedia di sesi pengerjaan. Pengujian DOM tidak menguji tata letak layar, dialog cetak, izin notifikasi, suara, atau pemutaran video asli; aspek tersebut perlu diperiksa langsung di Chrome/Edge.

Versi HTML sebelumnya disimpan pada `backup/index-before.html`.
