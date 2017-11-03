// Task1
var mas1 = [];
var n = prompt("Задание 1, введите N");

for (var i = 0; i <= 100; i++) {
	mas1.push( n++ );
}
for (var i = 0; i <=100; i++) {
	if (mas1[i] % 2 == 0 ) {
		console.log( "Четное " + mas1[i]);
	} else {
		console.log( "Нечетное " + mas1[i]);
	} 
}


// Task2
var mas2 ={
	Minsk: 'Belarus',
	Kiev: 'Ukraine',
	London: 'United Kingdom',
	Pyongyang: 'North Korea',
	Brasilia: 'Brazil'
	};

for(var key in mas2) {
    console.log(key + "is the capital of " + mas2[key] );
}
