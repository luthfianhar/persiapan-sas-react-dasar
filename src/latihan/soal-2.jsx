// Materi: Conditional Rendering (Ternary & Logical AND)

/* TODO:
  1. Tangkap props pada komponen 'TaskItem' menggunakan Object Destructuring:
     judul (string),
     prioritas ("tinggi" | "sedang" | "rendah"),
     selesai (boolean).
  2. Tampilkan badge status "PERLU PERHATIAN" hanya jika prioritas bernilai "tinggi" DAN belum selesai (!selesai) menggunakan Logical AND (&&).
  3. Ubah teks judul tugas agar tercoret (line-through text-gray-400) jika selesai bernilai true, dan normal jika false menggunakan Ternary Operator (? :).
  4. Ubah label pada tombol aksi menjadi "Batal" jika selesai bernilai true, atau "Selesai" jika false menggunakan Ternary Operator (? :).
*/

function TaskItem({ judul, prioritas, selesai }) {
  return (
    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-between gap-4">
      <div>
        {/* Tampilkan badge hanya jika prioritas === "tinggi" dan belum selesai */}
        {prioritas === "tinggi" && !selesai && (
          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
            PERLU PERHATIAN
          </span>
        )}

        {/* Terapkan efek coret dinamis berdasarkan status selesai */}
        <h3
          className={`text-base font-semibold mt-1 ${
            selesai ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {judul}
        </h3>
      </div>

      {/* Ubah label tombol berdasarkan status selesai */}
      <button className="px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-600 text-white">
        {selesai ? "Batal" : "Selesai"}
      </button>
    </div>
  );
}

export default TaskItem;

// 1. Kapan sebaiknya menggunakan Logical AND (&&) dibanding Ternary Operator (? :)?
//   Jawaban: Logical AND digunakan jika hanya perlu menampilkan atau menjalankan sesuatu ketika kondisi bernilai benar. Ternary digunakan jika ada dua hasil yang berbeda.
// 2. Bagaimana cara mengatur className atau teks secara dinamis di dalam JSX menggunakan Ternary Operator?
//   Jawaban: Gunakan sintaks {kondisi ? "nilaiJikaBenar" : "nilaiJikaSalah"} pada atribut className atau di antara tag JSX.
