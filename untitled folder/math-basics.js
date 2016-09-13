function luasLingkaran(jari2){
	var hasil = 3.14 * (jari2 * jari2);
	alert("hasil luas lingkaran ialah " + hasil);
}

function pangkatAngka(angkadasar, angkapangkat){
	var hasil =  Math.pow(angkadasar,angkapangkat);
	alert("hasil " + angkadasar +  " berpangkat " + angkapangkat + " adalah " + hasil);
}

function akarKuadrat(angkaYangMasuk){
	// var hasil = angkaYangMasuk * angkaYangMasuk;
	 var hasil = Math.pow(angkaYangMasuk, 2);
	 alert("hasil kuadrat nilai " + angkaYangMasuk + " adalah "  + hasil);
}

function hipotenusa(angkaKe1, angkaKe2){
	var hasil = Math.pow(angkaKe1,2) + Math.pow(angkaKe2,2);
	var hasilAkhir = Math.sqrt(hasil);
	alert("hipotenusa dari panjang " +angkaKe1 + "cm dan panjang " + angkaKe2 + "cm adalah " + hasilAkhir + "cm");
}


hipotenusa(3,4);
luasLingkaran(7);
pangkatAngka(10,2);
akarKuadrat(8);