// Fungsi untuk menghasilkan nilai acak antara 1 dan 50
function generateRandomValue() {
  return Math.floor(Math.random() * 50) + 1;
}

// Fungsi untuk mengisi array dengan 100 nilai acak
function fillArrayWithRandomValues(array, length) {
  for (let i = 0; i < length; i++) {
    array.push(generateRandomValue());
  }
}

// Fungsi untuk membagi array menjadi dua berdasarkan indeks (genap dan ganjil)
function splitArrayByEvenOddIndex(array) {
  const evenArray = [];
  const oddArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }

  return [evenArray, oddArray];
}

// Fungsi untuk mencari nilai minimum dalam array
function findMinValue(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

// Fungsi untuk mencari nilai maksimum dalam array
function findMaxValue(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// Fungsi untuk menghitung total nilai dalam array
function calculateTotalValue(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// Fungsi untuk menghitung rata-rata nilai dalam array
function calculateAverageValue(array) {
  if (array.length === 0) {
    return 0;
  }
  const total = calculateTotalValue(array);
  return total / array.length;
}

// Fungsi untuk membandingkan dua array
function compareArrays(array1, array2) {
  const minComparison = findMinValue(array1) > findMinValue(array2)
    ? 'Min lebih besar array genap'
    : 'Min lebih besar array ganjil';

  const maxComparison = findMaxValue(array1) > findMaxValue(array2)
    ? 'Max lebih besar array genap'
    : 'Max lebih besar array ganjil';

  const totalComparison = calculateTotalValue(array1) === calculateTotalValue(array2)
    ? 'Total memiliki nilai sama antara array genap dan ganjil'
    : 'Total berbeda antara array genap dan ganjil';

  const avgComparison = calculateAverageValue(array1) > calculateAverageValue(array2)
    ? 'Rata rata lebih besar array genap'
    : 'Rata rata lebih besar array ganjil';

  return [minComparison, maxComparison, totalComparison, avgComparison];
}

// Buat array dengan 100 nilai acak
const randomArray = [];
fillArrayWithRandomValues(randomArray, 100);

// Bagi array menjadi genap dan ganjil
const [evenArray, oddArray] = splitArrayByEvenOddIndex(randomArray);

// Hitung Min, Max, Total, dan Rata-rata untuk setiap array
const minMaxTotalAvgEven = [
  findMinValue(evenArray),
  findMaxValue(evenArray),
  calculateTotalValue(evenArray),
  calculateAverageValue(evenArray),
];

const minMaxTotalAvgOdd = [
  findMinValue(oddArray),
  findMaxValue(oddArray),
  calculateTotalValue(oddArray),
  calculateAverageValue(oddArray),
];

// Bandingkan kedua array
const comparisons = compareArrays(evenArray, oddArray);

// Tampilkan output
console.log('Array dengan jumlah index 100:', randomArray);
console.log('Array genap dengan jumlah index 50:', evenArray);
console.log('Array ganjil dengan jumlah index 50:', oddArray);
console.log('Min, Max, Total, Rata rata pada array genap:', minMaxTotalAvgEven);
console.log('Min, Max, Total, Rata rata pada array ganjil:', minMaxTotalAvgOdd);
console.log('Perbandingan nilai:', comparisons);
