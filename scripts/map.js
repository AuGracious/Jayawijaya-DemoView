// Inisialisasi peta dengan koordinat dan zoom level yang sesuai
const map = L.map('map').setView([-4.0833, 138.7500], 9); // Koordinat dan zoom level Jayawijaya

// Tambahkan tile layer (peta dasar)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Tambahkan marker (opsional)
L.marker([-4.0833, 138.7500]).addTo(map)
    .bindPopup('Kabupaten Jayawijaya')
    .openPopup();