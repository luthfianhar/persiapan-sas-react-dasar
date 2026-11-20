// Materi: Fragment & Props key pada .map()

/* TODO:
  1. Lengkapi array 'daftarSiswa' minimal 3 data objek dengan properti:
     id (unik),
     nama (string),
     kelas (string).
  2. Bungkus hasil return utama komponen menggunakan Fragment (<>...</>) agar tidak menambah elemen pembungkus berlebih di DOM.
  3. Render 'daftarSiswa' menggunakan method .map() dan pasang props 'key={siswa.id}' pada elemen pembungkus tiap item (misalnya <section key={siswa.id}>).
  4. Tampilkan data 'nama' dan 'kelas' menggunakan interpolasi ({...}) di dalam item yang di-render.
*/

function DaftarSiswa() {
  const daftarSiswa = [
    { id: 1, nama: "Andi", kelas: "XI A" },
    { id: 2, nama: "Budi", kelas: "XI B" },
    { id: 3, nama: "Citra", kelas: "XI C" },
  ];

  return (
    <>
      {/* Render daftarSiswa menggunakan .map() dan pasang key={siswa.id} pada elemen terluar tiap item */}
      {daftarSiswa.map((siswa) => (
        <section
          key={siswa.id}
          className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white"
        >
          <h3 className="text-lg font-bold text-gray-800">{siswa.nama}</h3>
          <p className="text-sm text-gray-500">{siswa.kelas}</p>
        </section>
      ))}
    </>
  );
}

export default DaftarSiswa;

// 1. Mengapa props 'key' wajib dipasang pada elemen terluar di dalam .map() dan sebaiknya menggunakan ID unik?
//   Jawaban: Agar React bisa mengenali setiap item secara unik saat daftar berubah.
// 2. Apa fungsi Fragment (<>...</>) saat merender elemen di dalam komponen dibandingkan membungkusnya dengan <div>?
//   Jawaban: Fragment mengelompokkan elemen tanpa menambahkan elemen baru ke DOM.
