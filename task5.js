// Buatlah code dari tugas algoritma flowchart task 1.b,
// tambahkan validasi tipe data teks harus string,
// dan masukan semua proses ke dalam fungsi

function ubahHurufVokal(teks) {
  let teksBaru = "";
  const hurufI = "i";
  const inputSalah = "Input harus berupa teks!";
  if (typeof teks !== typeof "string") {
    return inputSalah;
  } else {
    teks = teks.toLowerCase();

    for (let i = 0; i < teks.length; i++) {
      if (teks[i] == "a") {
        teksBaru += hurufI;
      } else {
        teksBaru += teks[i];
      }
    }
  }
  return teksBaru;
}

console.log(ubahHurufVokal("JAKARTA"));
