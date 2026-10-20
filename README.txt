DHE-KIT - TEMAN LANGKAH SEHATMU

CARA MEMBUKA
1. Buka index.html di Chrome, Edge, Firefox, atau Safari.
2. Simpan index.html bersama app.js, domain.js, content.js, styles.css,
   dan folder assets. Jangan memindahkan index.html sendirian.
3. Tidak perlu instalasi, backend, atau internet untuk aplikasi inti.

MENU
Beranda, Panduan Senam, Jadwal & Pengingat, Jurnal Kesehatan,
Rekap & Pencapaian, Pusat Edukasi, Dukungan & Konsultasi, Tentang Program.

MULAI DENGAN CATATAN PRIBADI
- Buka profil/pengaturan, lalu Data & cadangan.
- Pilih Hapus contoh data saja. Catatan pribadi tetap disimpan.
- Data dari versi lama dibaca dengan kunci penyimpanan yang sama.
- Gunakan Cadangkan data secara berkala. Memakai browser atau alamat
  website berbeda tidak otomatis memindahkan data.

PENGINGAT
- Pengingat dalam browser bekerja saat halaman terbuka.
- Untuk pengingat saat halaman ditutup, unduh jadwal .ics di menu
  Jadwal & Pengingat lalu impor ke kalender perangkat.
- Izin dan kemampuan browser/perangkat memengaruhi notifikasi.

VIDEO DAN LAPORAN
- PDF tidak memuat file video. Pilih video instruktur dari perangkat
  melalui Panduan Senam. Tidak ada unggahan video ke server.
- Rekap menyediakan CSV serta Cetak / Simpan PDF. Pilih Simpan sebagai
  PDF pada dialog cetak browser. Pengiriman laporan dilakukan sendiri.

BERKAS
- PERBANDINGAN_FITUR.md: pemetaan kebutuhan PDF dan hasil implementasi.
- assets/modul-dhekit.pdf: salinan utuh 47 halaman dokumen sumber.
- backup/index-before.html: versi website sebelum pembaruan.

ILUSTRASI
- Semua 26 gambar gerakan memakai SVG agar tetap tajam saat diperbesar.
- Gambar gerakan digambar ulang untuk aplikasi; instruksi merujuk modul.
- Folder assets/illustrations harus tetap disertakan bersama website.
- Setelah memperbarui file, tekan Ctrl + F5 di browser.

TAMPILAN DAN DEKORASI
- Palet pine, jade, ivory, dan champagne berada pada premium.css.
- Dekorasi latar dan hero bergerak perlahan. Buka Profil & pengaturan,
  Tampilan, lalu Dekorasi bergerak untuk menjedanya.
- Preferensi kurangi gerakan dari perangkat otomatis dihormati.
- Tema gelap, teks besar, dan kontras tinggi tetap tersedia.
- premium.css harus disertakan bersama file website lainnya.

UNTUK PENGEMBANG
- Runtime tetap Preact lokal, tanpa bundler atau proses build.
- Instal dev dependency: npm install --ignore-scripts
- Periksa sintaks: npm run check
- Uji fungsi dan DOM: npm test
- Pengujian DOM bukan pengganti pemeriksaan visual di browser.

Aplikasi adalah pendamping edukasi dan pencatatan pribadi.
Penilaian kesehatan dan arahan latihan tetap bersama tenaga kesehatan.
