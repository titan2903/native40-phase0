var tanggal = 21;
var bulan = 1;
var tahun = 1945;

if (tanggal > 0 && tanggal <= 31) {
    tanggal = tanggal
} else {
    tanggal = 'input tanggal salah'
}

switch (bulan) {
    case 1:
        bulan = 'Januari';
        break;
    case 2:
        bulan = 'Februari';
        break;
    case 3:
        bulan = 'Maret';
        break;
    case 4:
        bulan = 'April';
        break;
    case 5:
        bulan = 'Mei';
        break;
    case 6:
        bulan = 'Juni';
        break;
    case 7:
        bulan = 'Juli';
        break;
    case 8:
        bulan = 'Agustus';
        break;
    case 9:
        bulan = 'September';
        break;
    case 10:
        bulan = 'Oktober';
        break;
    case 11:
        bulan = 'November';
        break;
    case 12:
        bulan = 'Desember';
        break;
    default:
        bulan = 'input bulan salah';
        break;
}

if (tahun >= 1900 && tahun <= 2200) {
    tahun = tahun
} else {
    tahun = 'input tahun salah'
}

if (bulan != 'input bulan salah' && typeof tanggal == "number" && typeof tahun == "number") {
    console.log(tanggal + ' ' + bulan + ' ' + tahun)
} else {
    console.log("input tidak memenuhi syarat")
}