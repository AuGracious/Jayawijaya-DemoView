function loadData() {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const dataList = document.getElementById('data-list');

  dataList.innerHTML = '';
  data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      dataList.appendChild(li);
  });
}


// Data Total Penduduk
const totalPopulation = 281090; // Ganti dengan data dinamis jika ada

// Menampilkan Total Penduduk di Elemen
document.getElementById('totalPopulationCount').textContent = totalPopulation.toLocaleString();


// Penduduk Berdasarkan Jenis Kelamin Chart
const genderDistributionCtx = document.getElementById('genderDistributionChart').getContext('2d');
new Chart(genderDistributionCtx, {
    type: 'pie',
    data: {
        labels: ['Laki-Laki', 'Perempuan'],
        datasets: [{
            label: 'Jenis Kelamin',
            data: [145720, 134370],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Distribusi Jenis Kelamin' }
        }
    }
});

// Data Penduduk Berdasarkan Usia
const ageData = {
    labels: [
        '0-4', '5-14', '15-24', '25-34', '35-44', 
        '45-54', '55-64', '65-74', '75+'
    ],
    datasets: [{
        label: 'Jumlah Penduduk',
        data: [5000, 12000, 15000, 18000, 16000, 14000, 11000, 8000, 4000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Opsi Diagram Batang
const ageOptions = {
    responsive: true,
    maintainAspectRatio: false, // Agar fleksibel mengikuti ukuran elemen induk
    plugins: {
        legend: {
            display: true,
            position: 'top'
        },
        title: {
            display: true,
            text: 'Distribusi Penduduk Berdasarkan Usia'
        }
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Kelompok Usia'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Jumlah Penduduk'
            },
            beginAtZero: true
        }
    }
};

// Membuat Diagram Batang
const ageCtx = document.getElementById('ageDistributionChart').getContext('2d');
new Chart(ageCtx, {
    type: 'bar',
    data: ageData,
    options: ageOptions
});
