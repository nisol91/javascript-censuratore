//genera N array random e stampa l array la cui somma degli elementi e' la maggiore

function random_int_number(min, max) {
  return Math.floor(Math.random() * (max - min +  1) + min);
}


function n_array_random(n, positions, numbers) {

  var array_rand_container = [];
  for (var i = 0; i < n; i++) {
    var array_rand = [];
    for (var j = 0; j < positions; j++) {
      array_rand.push(random_int_number(0, numbers));
    }
    array_rand_container.push(array_rand);
  }
  var array_somme = [];
  for (var i = 0; i < array_rand_container.length; i++) {
    var sum = 0;
    for (var j = 0; j < positions; j++) {
      sum = sum + array_rand_container[i][j];//NB non potevi mettere array_rand, perche e' l ultimo array in memoria, va generalizzato cosi
    }
    array_somme.push(sum);
  }
  // console.log(array_somme);

  var max_x = Math.max(...array_somme);
  // console.log(max_x);

  for (var i = 0; i < array_somme.length; i++) {
    if (array_somme[i] == max_x) {
      // console.log(array_rand_container[i]);
      var result = array_rand_container[i];
    }
  }

  console.log(array_rand_container);

  return result
}


var random_arr = n_array_random(5, 10, 100);
console.log(random_arr);
