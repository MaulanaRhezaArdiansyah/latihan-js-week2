// Buatlah code dari tugas algoritma flowchart task 1.a,
// tambahkan validasi teks harus lebih dari 2 huruf,
// dan masukan semua proses ke dalam fungsi

function cekPalindrome(teks) {
  const errorHuruf = "Teks harus lebih dari 2 huruf!";
  const errorNotString = "Tipe data harus string!";
  const palindrome = "INI PALINDROME";
  const notPalindrome = "INI BUKAN PALINDROME";

  let result = "";

  if (teks.length <= 2) {
    return errorHuruf;
  } else if (typeof teks !== typeof "string") {
    return errorNotString;
  } else {
    teks = teks.toLowerCase();

    for (let i = teks.length - 1; i >= 0; i--) {
      result += teks[i];
    }
    if (result == teks) {
      return palindrome;
    } else {
      return notPalindrome;
    }
  }
}

console.log(cekPalindrome("qwer"));
