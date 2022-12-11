const bahasaIndonesia = 100;
const bahasaInggris = 100;
const matematika = 100;
let IPA = 50;
const average = (bahasaIndonesia + bahasaInggris + matematika + IPA) / 4;
let averageUN = (bahasaIndonesia + bahasaInggris + matematika + IPA) / 4;

if (bahasaIndonesia && bahasaInggris && matematika && IPA == undefined) {
} else if (
  bahasaIndonesia &&
  bahasaInggris &&
  matematika &&
  IPA !== undefined
) {
  console.log(`Nilai rata-rata = ${average}`);
  if (average >= 90) {
    console.log("Grade = A");
  } else if (average >= 80) {
    console.log("Grade = B");
  } else if (average >= 70) {
    console.log("Grade = C");
  } else if (average >= 60) {
    console.log("Grade = D");
  } else if (average >= 0) {
    console.log("Grade = E");
  }
}
