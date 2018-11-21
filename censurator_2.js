/*- Il software riceve in input un lungo testo e una serie di parole
da censurare.
- Restituisce il testo con xxx al posto delle parole censurate.
- Stampa un "badword index" calcolato come il numero di
parole censurate su il numero di parole totali*/


var text_input = 'Ciao mi chiamo Nicola mi Nicola con censure che tengono conto delle lettere';

console.log(text_input);

var censure = ['mi', 'Nicola', 'delle'];

var text_arr = text_input.split(" ");

var count = [];
for (var i = 0; i < text_arr.length; i++) {
  if (censure.includes(text_arr[i])) {
    text_arr[i] = text_arr[i].split("");
    // console.log(text_arr[i]);
    var parola = text_arr[i];
    for (var j = 0; j < parola.length; j++) {
      parola.splice(j,1,'x');
      // console.log(parola);
    }
    var parola_str = parola.join('');
    text_arr[i] = parola_str;
    console.log(parola_str);
    count.push('1');
  }
}

var text_final = text_arr.join(' ');

console.log(text_final);

var badword = 'Badword Index: ' + text_arr.length + ' / ' + count.length;

console.log(badword);

document.getElementById('text').innerHTML = 'Text: ' + text_input;
document.getElementById('array').innerHTML = 'Censored Text: ' +  text_final;
document.getElementById('result').innerHTML = badword;
