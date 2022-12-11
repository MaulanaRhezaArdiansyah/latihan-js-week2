let teks = "fafaf";

function cekPalindrome() {
  return teks.toLowerCase() === teks.toLowerCase().split("").reverse().join("");
}

if (teks.length <= 2) {
  console.log("Teks harus lebih dari 2 huruf!");
} else if (cekPalindrome() === true) {
  console.log("INI PALINDROME!");
} else {
  console.log("INI BUKAN PALINDROME!");
}
