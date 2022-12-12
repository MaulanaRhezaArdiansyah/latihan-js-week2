const errorHuruf = "Teks harus lebih dari 2 huruf!";
const errorNotString = "Tipe data harus string!";
const palindrome = "INI PALINDROME";
const notPalindrome = "INI BUKAN PALINDROME";
const teks = "kasur rusak";

function cekPalindrome() {
  if (teks.length <= 2) {
    return errorHuruf;
  } else if (teks !== "string") {
    return errorNotString;
  } else {
    let cekTeksPalindrome =
      teks.toLowerCase() === teks.toLowerCase().split("").reverse().join("");
    if (cekTeksPalindrome === true) {
      return palindrome;
    } else {
      return notPalindrome;
    }
  }
}

console.log(cekPalindrome());
