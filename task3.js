// Buat program yang menghitung rata-rata UN beserta
// gradenya, dengan mengisi 4 nilai yakni Bahasa
// indonesia, Bahasa Inggris Matematika dan IPA, yang
// di dalam program tersebut memiliki validasi yaitu
// semua nilai tersebut harus diisi dan juga untuk
// grade memiliki kondisi dengan ketentuan sebagai
// berikut:
// 90 - 100 = A
// 80 - 89 = B
// 70 - 79 = C
// 60 - 69 = D
// 0 - 59 = E

function raporSiswa(bIndo, bIng, mtk, ipa) {
  let average = (bIndo + bIng + mtk + ipa) / 4;
  const nilaiAverage = "Nilai rata-rata = ";
  const grade = "Grade = ";
  const inputanSalah = "Sepertinya anda keliru memasukkan nilai!";

  if (bIndo && bIng && mtk && ipa === undefined) {
    return "Semua nilai harus terisi!";
  } else if (average > 100) {
    return inputanSalah;
  } else {
    console.log(nilaiAverage + average);
    if (average >= 90 && average <= 100) {
      return grade + "A";
    } else if (average >= 80) {
      return grade + "B";
    } else if (average >= 70) {
      return grade + "C";
    } else if (average >= 60) {
      return grade + "D";
    } else if (average >= 0) {
      return grade + "E";
    }
  }
}
console.log(raporSiswa(100, 100, 100, 100));
console.log(result);
