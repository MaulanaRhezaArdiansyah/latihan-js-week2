function ubahHurufVokal(teks) {
  const error = "Tipe data harus string!";
  if (typeof teks === typeof "string") {
    const teksBaru = teks.replace(/a/gi, "o");
    return teksBaru;
  } else {
    return error;
  }
}

console.log(ubahHurufVokal("Jakarta"));
