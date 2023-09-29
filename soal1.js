const readline = require('readline');
const hitungPersegi = require('./hitungPersegi');


console.log('Menghitung Luas dan Keliling Persegi dan Persegi Panjang');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan sisi persegi: ', (sisiPersegi) => {
  const sisi = parseFloat(sisiPersegi);

  if (isNaN(sisi) || sisi <= 0) {
    console.log('Masukkan sisi yang valid (angka positif).');
    rl.close();
    return;
  }

  rl.question('Masukkan panjang persegi panjang: ', (panjang) => {
    const p = parseFloat(panjang);

    if (isNaN(p) || p <= 0) {
      console.log('Masukkan panjang yang valid (angka positif).');
      rl.close();
      return;
    }

    rl.question('Masukkan lebar persegi panjang: ', (lebar) => {
      const l = parseFloat(lebar);

      if (isNaN(l) || l <= 0) {
        console.log('Masukkan lebar yang valid (angka positif).');
        rl.close();
        return;
      }

      console.log(`Luas persegi : ${hitungPersegi.luasPersegi(sisi)}`);
      console.log(`Keliling persegi : ${hitungPersegi.kelilingPersegi(sisi)}`);
      console.log('-----------------------------');
      console.log(`Luas persegi panjang : ${hitungPersegi.luasPersegiPanjang(p, l)}`);
      console.log(`Keliling persegi panjang : ${hitungPersegi.kelilingPersegiPanjang(p, l)}`);
      rl.close();
    });
  });
});
