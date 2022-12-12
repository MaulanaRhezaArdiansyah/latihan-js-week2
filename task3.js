function raporSiswa(bahasaIndonesia, bahasaInggris, matematika, IPA) {
  let average = (bahasaIndonesia + bahasaInggris + matematika + IPA) / 4;
  const nilaiAverage = "Nilai rata-rata = ";
  const grade = "Grade = ";

  if (bahasaIndonesia && bahasaInggris && matematika && IPA === undefined) {
    return "Semua nilai harus terisi!";
  } else {
    console.log(nilaiAverage + average);
    if (average >= 90) {
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
console.log(raporSiswa(100, 100, 100, 90));
