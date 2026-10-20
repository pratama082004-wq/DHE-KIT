# DHE-KIT

Digital Hypertension Exercise Kit: website pendamping edukasi, panduan senam, dan pencatatan kesehatan pribadi.

## Menjalankan website

Unduh atau clone repositori, lalu buka **`index.html`** di Chrome, Edge, Firefox, atau Safari. Tidak perlu instalasi atau proses build untuk penggunaan aplikasi.

Simpan `index.html` bersama `app.js`, `domain.js`, `content.js`, `styles.css`, `premium.css`, dan folder `assets`. Setelah memperbarui file, tekan **Ctrl + F5** di browser.

## Fitur

- Delapan menu: Beranda, Panduan Senam, Jadwal & Pengingat, Jurnal Kesehatan, Rekap & Pencapaian, Pusat Edukasi, Dukungan & Konsultasi, dan Tentang Program.
- Panduan 26 langkah dengan ilustrasi SVG, timer, serta pembacaan instruksi opsional.
- Kalender latihan, pengingat selama halaman terbuka, dan ekspor jadwal `.ics`.
- Catatan tekanan darah, nadi opsional, kegiatan, kondisi setelah latihan, dan keluhan.
- Grafik, pencapaian, ekspor CSV, dan cetak/simpan laporan sebagai PDF melalui browser.
- Cadangan dan pemulihan JSON; data disimpan pada browser perangkat pengguna.
- Tema pine–jade–ivory–champagne, dekorasi bergerak opsional, tema gelap, teks besar, serta kontras tinggi.

Video instruktur dapat dipilih dari perangkat pengguna. Akun daring, sinkronisasi lintas perangkat, dan konsultasi langsung belum diintegrasikan. Rincian kesesuaian terhadap modul serta kebutuhan yang belum terpenuhi tersedia pada [PERBANDINGAN_FITUR.md](PERBANDINGAN_FITUR.md).

## Struktur proyek

| Berkas | Isi |
| --- | --- |
| `index.html` | Halaman masuk dan pemuatan aset |
| `app.js` | Antarmuka dan alur aplikasi Preact |
| `domain.js` | Perhitungan tanggal, jadwal, rekap, skrining, CSV, dan kalender |
| `content.js` | Materi edukasi dan daftar gerakan |
| `styles.css` / `premium.css` | Tata letak, tema, dan animasi |
| `assets/` | Runtime lokal, ilustrasi, dan dokumen sumber |
| `tools/draw-exercises.mjs` | Pembuat ulang 26 ilustrasi SVG |
| `tests/` | Pengujian logika serta alur DOM |

## Pengembangan dan pengujian

Memerlukan Node.js dan npm untuk menjalankan pemeriksaan pengembangan:

```sh
npm ci --ignore-scripts
npm run check
npm test
```

Untuk membuat ulang ilustrasi:

```sh
node tools/draw-exercises.mjs
```

Pengujian DOM tidak menggantikan pemeriksaan visual, pemutaran video, atau izin notifikasi pada perangkat sebenarnya.

## Materi sumber

Rujukan materi tersedia pada [modul DHE-KIT](assets/modul-dhekit.pdf), disusun oleh Khairon Salsabillah, 2026. Aplikasi merupakan pendamping edukasi dan pencatatan; penilaian kondisi serta arahan latihan tetap bersama tenaga kesehatan.
