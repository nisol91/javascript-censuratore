

function random_int_number(min, max) {
  return Math.floor(Math.random() * (max - min +  1) + min);
}

function array_random(positions, numbers) {
  var array_rand = [];
  for (var i = 0; i < positions; i++) {
    array_rand.push(random_int_number(0, numbers));
  }
  return array_rand
}


var numbers = array_random(10, 50);
console.log(numbers);

var pari = [];
var dispari = [];

// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     pari.push(numbers[i]);
//   } else {
//     dispari.push(numbers[i]);
//   }
// }
//
// document.getElementById('verde').innerHTML = pari;
// document.getElementById('rosso').innerHTML = dispari;

// alternativa di stampa

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    // pari.push(numbers[i]);
    document.getElementById('verde').innerHTML += numbers[i] + '<br>';
  } else {
    // dispari.push(numbers[i]);
    document.getElementById('rosso').innerHTML += numbers[i] + '<br>';
  }
}
