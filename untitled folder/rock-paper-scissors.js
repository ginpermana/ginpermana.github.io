function pilihanPengguna(){
	var jawaban = window.prompt("apa yang anda akan pilih ? jempol, telunjuk, kelingking.", "");
	return jawaban;
}

function pilihanLawan(){
	var nilaiAcak = Math.random();
	var pilihan_jari = "";

if (nilaiAcak <0.34 && nilaiAcak >= 0){
	pilihan_jari = "jempol";
} else if (nilaiAcak <0.67 && nilaiAcak >=0.34){
	pilihan_jari = "telunjuk";

} else if (nilaiAcak <= 1 && nilaiAcak >=0.67){
	pilihan_jari = "kelingking";
}


return pilihan_jari;

}

function bertarung( pengguna, lawan){

if (pengguna == "jempol" && lawan == "kelingking") {
alert ("lawan menang");
} else if (pengguna == "jempol" && lawan == "jempol") {
alert ("pengguna menang");
} else  if (pengguna == "jempol" && lawan == "telunjuk") {
alert ("lawan menang");
} else if (pengguna == "telunjuk" && lawan == "kelingking") {
alert ("lawan menang");
} else if (pengguna == "telunjuk" && lawan == "jempol") {
alert ("lawan menang");
} else if (pengguna == "telunjuk" && lawan == "telunjuk") {
alert ("lawan menang");	
} else if (pengguna == "kelingking" && lawan == "kelingking") {
alert ("lawan menang");
} else if (pengguna == "kelingking" && lawan == "jempol") {
alert ("lawan menang");
} else if (pengguna == "kelingking" && lawan == "telunjuk") {
alert ("lawan menang");	
}

var pengguna = pilihanPengguna();
alert("pilihan anda ialah " + pengguna);
var lawan = pilihanLawan();
alert("pilihan musuh adalah " + lawan);