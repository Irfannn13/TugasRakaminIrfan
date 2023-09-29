const fs = require('fs');
const path = require('path');

// Mendefinisikan path lengkap ke file log
const logFilePath = 'D:/Data Kuliah/Materi Kuliah/Semester 7/Magang/Materi/Week 7/homework.log';

// Membaca data log dari file log
fs.readFile(logFilePath, 'utf8', (err, logData) => {
  if (err) {
    console.error('Gagal membaca file log:', err);
  } else {
    // Menyimpan data log ke dalam file log.txt di lokasi soal2.js
    const outputFilePath = path.join(__dirname, 'log.txt');
    fs.appendFile(outputFilePath, logData, (err) => {
      if (err) {
        console.error('Gagal menulis ke file log.txt:', err);
      } else {
        console.log('Log baru telah ditambahkan ke file log.txt');
      }
    });
  }
});
