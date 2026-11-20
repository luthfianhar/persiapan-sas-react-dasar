// Panggil komponen yang telah dibuat disini agar tampil ke browser

// import StudentCard from "./latihan/soal-1";

// function App() {
//   return (
//     <div className="w-screen flex justify-center pt-10">
//       <div className="flex flex-col gap-3 w-96">
//         <StudentCard nama="Andi" kelas="XI A" statusLulus={true} />
//         <StudentCard nama="Budi" kelas="XI B" statusLulus={false} />
//         <StudentCard nama="Citra" kelas="XI C" statusLulus={true} />
//       </div>
//     </div>
//   );
// }

// export default App;

// import TaskItem from "./latihan/soal-2";

// function App() {
//   return (
//     <div className="w-screen flex justify-center pt-10">
//       <div className="flex flex-col gap-3 w-96">
//         <TaskItem judul="Mengerjakan tugas Matematika" prioritas="rendah" selesai={true} />
//         <TaskItem judul="Belajar materi React" prioritas="sedang" selesai={true} />
//         <TaskItem judul="Merapikan catatan" prioritas="rendah" selesai={false} />
//       </div>
//     </div>
//   );
// }

// export default App;


// import DaftarSiswa from "./latihan/soal-3";

// function App() {
//   return (
//     <div className="w-screen flex justify-center pt-10">
//       <div className="flex flex-col gap-3 w-96">
//         <DaftarSiswa />
//       </div>
//     </div>
//   );
// }

// export default App;

import FormSiswa from "./latihan/soal-4";

function App() {
  return (
    <div className="w-screen flex justify-center pt-10">
      <div className="flex flex-col gap-3 w-96">
        <FormSiswa />
      </div>
    </div>
  );
}

export default App;