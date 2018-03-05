var a = 8,
	b = 6;
	value = 'value';

value = (a * a) - (2 * a * b) - (b * b);

console.log (value);

if (value < 0) {
	console.log ('Wynik jest ujemny');
 } else {
 	console.log('Wynik jest dodatni');
 }

value = 0 ? console.log('Wynik jest równy zero') : console.log('Wynik jest różny od zera');