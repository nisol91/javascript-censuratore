//riempi array finche la somma dei suoi numeri non supera 50.

// var array = [];
// var somma = 0;
// var i = 0;
// while (somma < 50) {
//   var num = parseInt(prompt('Inserisci un numero'));
//   array.push(num);
//   somma = somma + array[i];
//   // console.log(array[i]);
//   console.log(somma);
//   i++
// }
// console.log(array);
// // console.log(somma);
// document.getElementById('array').innerHTML = 'Array ' + array;
// document.getElementById('result').innerHTML = 'Somma ' + somma;

//metodo analogo ma con la variabile di controllo del while.

var array = [];
var somma = 0;
var i = 0;
var esci = false
while (esci == false) {
  if (somma > 50) {
    esci = true;//NB!qui ci vuole un = e non == perche sto ridichiarando var esci.
  } else {
    var num = parseInt(prompt('Inserisci un numero'));
    // console.log(array[i]);
    array.push(num);
    somma = somma + array[i];
    i++
    console.log(somma);
  }
}
console.log(array);
// console.log(somma);
document.getElementById('array').innerHTML = 'Array ' + array;
document.getElementById('result').innerHTML = 'Somma ' + somma;
