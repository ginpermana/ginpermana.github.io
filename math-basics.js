function akarlingkaran(jari2){
	var hasil = 3.14 * (jari2 * jari2);
	alert("hasil luas lingkaran ialah " + hasil);
}

function pangkatAngka(angkadasar, angkapangkat){
	var hasil =  Math.pow(angkadasar,angkapangkat);
	alert("hasil " + angkadasar +  " berpangkat " + angkapangkat + " adalah " + hasil);
}

akarlingkaran(7);
pangkatAngka(10,2);