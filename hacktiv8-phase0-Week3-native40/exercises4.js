var input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca']

function dataHandling2(data) {
    data.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    data.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    console.log(`['${data[0]}', '${data[1]}', '${data[2]}', '${data[3]}', '${data[4]}', '${data[5]}']`);
    var splitDate = data[3].split('/');
    var splitDateToSort = data[3].split('/');
    var month = splitDate[1]; //'05'
    // console.log('Bulan tanggal : ', month, typeof (month))

    var monthBulan = Number(month);
    var mountHuruf = '';
    // console.log(month, typeof (monthBulan))

    switch (monthBulan) {
        case 01:
            mountHuruf = 'Januari';
            break;
        case 02:
            mountHuruf = 'Februari';
            break;
        case 03:
            mountHuruf = 'Maret';
            break;
        case 04:
            mountHuruf = 'April';
            break;
        case 05:
            mountHuruf = 'Mei';
            break;
        case 06:
            mountHuruf = 'Juni';
            break;
        case 07:
            mountHuruf = 'Juli';
            break;
        case 08:
            mountHuruf = 'Agustus';
            break;
        case 09:
            mountHuruf = 'September';
            break;
        case 10:
            mountHuruf = 'Oktober';
            break;
        case 11:
            mountHuruf = 'November';
            break;
        case 12:
            mountHuruf = 'Desember';
            break;
        default:
            mountHuruf = 'input month false';
            break;
    }
    console.log(mountHuruf);
    // console.log(typeof (month))
    var sortedNumDescendDate = splitDateToSort.sort(function (a, b) {
        return b - a
    }); // num descending sort
    console.log(sortedNumDescendDate);
    var newJoinDate = splitDate.join("-");
    console.log(newJoinDate);
    var nama = data[1];
    var slicedName = nama.slice(0, 14);
    console.log(slicedName);
}

dataHandling2(input);