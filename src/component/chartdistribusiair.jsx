import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WaterDistributionChart = () => {
  const data = {
    labels: [
      "Kecamatan Madiun", "Kecamatan Mejayan", "Kecamatan Saradan", 
      "Kecamatan Dolopo", "Kecamatan Wungu", "Kecamatan Pilangkenceng", 
      "Kecamatan Balerejo", "Kecamatan Gemarang", 
      "Kecamatan Sawahan", "Kecamatan Geger"
    ],
    datasets: [
      {
        label: "Jumlah Air Bersih (ribu meter kubik)",
        data: [123456, 98765, 87654, 76543, 65432, 54321, 43210, 32109, 21098, 10987], // Data sampel
        backgroundColor: '#4A90E2', // Warna biru
        borderRadius: 10,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Membuat grafik menjadi horizontal
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Jumlah Air Bersih yang Disalurkan Perusahaan Air Bersih per-Kecamatan di Kabupaten Madiun (ribu meter kubik) - Tahun 2021',
        font: {
          size: 16
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: (value) => value.toLocaleString(), // Format angka dengan ribuan
        }
      }
    }
  };

  return (
    <div className="p-10 rounded-lg shadow-lg bg-gray-100 mt-10 mb-10 ml-20 mr-20">
      <Bar data={data} options={options} />
      <p className="text-sm text-center mt-2 text-gray-600 ml-20 mr-20">Sumber: Badan Pusat Statistik Kabupaten Madiun</p>
    </div>
  );
};

export default WaterDistributionChart;
