/*
1. Newton Seconde Law
Algoritma:

1. Masukkan value Massa mobil 600kg.
2. Masukkan value percepatan mobil 2 m/s2.
3. Hitunglah resultan gaya dengan rumus massa (kg) kali percepatan benda 2 m/s2.
4. Display hasil resultan gaya.

Psudocode:
Start
    READ 'car mass' WITH value 600kg
    READ 'car acceleration' WITH value 2 m/s2
    DISPLAY 'resultant force' by CALCULATE 'car mass' MULTIPLAY by 'car acceleration'
    PRINT 'newton'
AND

2. Tahun Kabisat

Algoritma:
1. Masukkan value tahun apapun.
2. Kondisi:
    a. Jika value tahun modulus 4 sama dengan 0 dan value tahun modulus 100 tidak sama dengan 0,
    maka tahun kabisat.
    b. jika tahun modulus 4 sama dengan 0 , modulus 100 sama dengan 0 dan modulus 400 sama dengan 0, maka tahun kabisat.

Psudocode:
Start
    READ value 'year' anything

    IF value 'year' DIVISION by 4 EQUAL zero END value 'year' DIVISION by 100 EQUAL zero THEN
    DISPLAY 'this is leap year'

    ELSE not EQUAL 'leap year'

    IF value 'year' DIVISION by 4, DIVISION by 100 AND DIVISION by 400 EQUAL zero THEN 
    DISPLAY 'this is leap year'

    ELSE not EQUAL 'leap year'
    
    ENDIF
END

3.Laundry Day

Algoritma:
1.Ada 20 pakaian Foxie yang harus di masukkkan ke mesin cuci
2.Kondisi pengulangan:
    Selama pakaian lebih dari 0 dan kurang dari sama dengan 20, munculkan sisa pakian yang belum di masukkan, maka sisa pakian yang belum di masukkan di kurangi satu.
    Jika pakaian Foxie sama dengan 0, nyalakan mesin cuci.

Psudocode:
START 
    READ 'foxie clothes' WITH value 20.
    WHILE 'Foxie clothes' GREATER THAN zero AND LESS THEN twenty,
    DISPLAY 'the rest of clothes', THAN 'the rest of clothes' DECREMENT by one.
    ENDWHHILE.
    IF 'foxie clothes' EQUAL zero, DO turn on washing machine.
    ENDIF.
END

4.Periksa Kuku

Algoritma:
1. Masukkan 'murid' sebanyak 40.
2. kondisi pengulangan:
    Selama murid lebih dari 0, maka input 'murid memiliki kuku panjang' apakah benar atau salah.
        Jika 'murid memiliki kuku panjang' benar, maka munculkan murid yang di hukum.
        Jika selain itu 'murid tidak memiliki kuku panjang' salah, maka munculkan murid yang di puji.
        Kurangi value 'murid' sejumlah 1 orang.
        Jika jumlah 'murid' sama dengan 0, lakukan penyelesaian pemeriksaan kuku.

Psudocode:
START
    READ value 'student' WITH value 40
    WHILE 'student' GREATER THAN 0, THAN GET BOOLEAN 'student have long nails', it's TRUE or NOT.
    IF 'student have long nails' is TRUE, 
    THAN DISPLAY 'student' who are being punished.
    IF ELSE 'student do not have long nails' is FALSE, THAN DISPLAY 'student' who are praised.
    DECREMENT value 'student' by one person.
    IF value 'student' EQUAL zero, DO complete the nails examination.
AND
*/