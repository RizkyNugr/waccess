import React from 'react';
import NavBar from '../component/Navbar';
import FeaturesSection from '../component/features';
import NewsSection from '../component/newsSection';
import Footer from '../component/Footer';
import Carosel from '../component/carousel';

const ProjectSection = () => {
  return (
    <div>
        <NavBar/>
    <div className="relative w-full h-72 md:h-screen bg-gray-200 overflow-hidden rounded-lg shadow-lg">
      {/* Background Image */}
      <img
        src="/img/pipa.jpg" // Pastikan path gambar sesuai
        alt="Background Pipes"
        className="w-full h-full object-cover"
      />

      {/* Overlay untuk Teks dan Gambar */}
      <div className="absolute inset-0 flex items-center justify-between p-8 md:p-16 bg-black bg-opacity-50">
        
        {/* Teks di Sisi Kiri */}
        <div className="text-white font-bold text-5xl md:text-6xl leading-tight space-y-2">
          <p>Layanan Air yang</p>
          <p>Tersedia.</p>
        </div>
      </div>
    </div>
    <div className="p-8">
        <Carosel/>
        
        <div className="bg-gray-200 rounded-lg p-6 max-w-full mx-auto">
      <h2 className="text-lg font-bold mb-2">
        Perumdam Tirta Dharma Purabaya
      </h2>
      <p className="text-sm text-gray-700 mb-4">
        PDAM Kabupaten Madiun menyediakan layanan air bersih bagi masyarakat, termasuk
        pendaftaran pelanggan baru, cek tagihan, hingga pembayaran secara langsung atau
        online. Mereka juga memiliki layanan untuk memudahkan masyarakat melakukan
        pembayaran tagihan air melalui aplikasi seperti SpeedCash.
      </p>
      <h3 className="text-sm font-bold mb-1">Informasi Kontak:</h3>
      <p className="text-sm text-gray-700">
        Alamat: Jl. Panglima Sudirman, Mejayan, Caruban, Kabupaten Madiun, Jawa Timur, Indonesia
      </p>
      <p className="text-sm text-gray-700">Nomor Telepon: (0351) 383-294</p>
      <p className="text-sm text-gray-700">Email: pdam.purabaya@gmail.com</p>
    </div>
        <FeaturesSection/>
        <NewsSection/>
        <Footer/>
    </div>
    </div>
  );
};

export default ProjectSection;
