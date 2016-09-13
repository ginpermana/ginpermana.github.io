function apakahLevelSubjectAndi(nilaiMasuk, pelajaran){
	if (nilaiMasuk >94 && nilaiMasuk <101){
		alert("nilai anda " + nilaiMasuk + " dari pelajaran " + pelajaran + " setara dengan level A " );
	} else if(nilaiMasuk >79 && nilaiMasuk <95){
		alert("nilai anda " + nilaiMasuk + " dari pelajaran " + pelajaran + " setara dengan level B ");
	} else {
		alert("nilai anda " + nilaiMasuk + " dari pelajaran " + pelajaran + " setara dengan level C");
	}

}


apakahLevelSubjectAndi(96, "Science ");
apakahLevelSubjectAndi(70, "English basic ");
apakahLevelSubjectAndi(60, "English literature");