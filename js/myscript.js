var my_name;
var my_surname;
var my_color;

my_name = prompt('scrivi il tuo nome');

my_surname = prompt('scrivi il tuo cognome');

my_color = prompt('scrivi il tuo colore preferito');

document.getElementById('my_id').innerHTML = my_name + my_surname + my_color + 19;