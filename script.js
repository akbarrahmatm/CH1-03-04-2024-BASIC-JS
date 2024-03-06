// var n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;

// console.log(n);

// if (studentDecision === "mau") {
// var chanceEnrollUniv = Math.random() * 100;

// chanceEnrollUniv = Math.floor(chanceEnrollUniv);

//   alert(
//     `Kemungkinan '${studentName}' masuk universitas adalah : ${chanceEnrollUniv}%`
//   );
// } else {
//   alert(`Good luck, ${studentName} ❤️`);
// }

var studentName = prompt("Siapa nama mu?");
var studentWish = prompt("Mau masuk universitas?");

if (studentWish === "mau") {
  var chanceGetUniv = Math.random() * 100;

  chanceGetUniv = Math.floor(chanceGetUniv);
  var studentGrade = Number(prompt("Berapakah nilai akhir SMA/SMK mu?"));

  console.log(studentGrade);

  if (studentGrade < 30) {
    //   Jika studentGrade Dibawah 30
    alert(`tidak mungkin masuk univ`);
  } else if (studentGrade < 50) {
    //    Jika studentGrade Dibawah 50
    if (chanceGetUniv < 50) {
      // Jika hasil chanceGetUniv dibawah 50 persen
      alert(`hmm kemungkinan kamu (${studentName}) kecil masuk UNIV`);
    } else {
      // Jika hasil chanceGetUniv diatas 50 persen
      alert(`hmm kemungkinan kamu (${studentName}) bisa masuk UNIV`);
    }
  } else {
    //  Jika studentGrade Diatas 50

    if (chanceGetUniv > 70 && studentGrade > 60) {
      //   Jika chanceGetUniv diatas 70 persen DAN studentGrade nya diatas 60

      alert(
        `hei (${studentName}) pasti masuk UNIV dengan (${studentGrade}) mu yang besar itu`
      );
    } else if (chanceGetUniv > 70 || studentGrade > 80) {
      // Jika chanceGetUniv diatas 70 persen ATAU studentGrade nya diatas 80

      alert(
        `hei (${studentName}) pasti masuk UNIV dengan (${studentGrade}) mu yang besar itu`
      );
    }
  }
  console.log(chanceGetUniv);
} else {
  // Kalo studentWish gak mau
  alert(`Goodluck ${studentName} ❤️`);
}
