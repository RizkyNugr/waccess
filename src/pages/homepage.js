import React from 'react';
import NavBar from '../component/Navbar';
import Carosel from '../component/carousel';
import Features from '../component/features';
import AboutSection from '../component/aboutsection';
import NewsSection from '../component/newsSection';
import PartnerSection from '../component/partner';
import Footer from '../component/Footer';

const HeroSection = () => {
  return (
    <div>
      {/* Navbar */}
      <NavBar /> {/* Navbar tetap di atas */}

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('/img/dam.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay untuk background */}

        <div className="relative z-20 flex flex-col h-full p-6 md:p-20 text-white pt-20">
          <div className="flex flex-col md:flex-row items-start justify-between w-full space-y-6 md:space-y-0">
            
            {/* Heading dan Deskripsi di Kiri */}
            <div className="space-y-4 max-w-full md:max-w-lg">
              <h1 className="font-bold text-3xl md:text-6xl leading-snug md:leading-tight mt-10 md:mt-20">
                <span className="text-blue-400">Water Access</span> <br /> & 
                <span  className="text-blue-400">Sanitation.</span>
              </h1>
            </div>

            {/* Kontak Section di Kanan */}
            <div className="bg-black bg-opacity-70 p-4 md:p-6 rounded-lg mt-6 md:mt-40 md:ml-10 w-full 
            md:max-w-xs text-sm md:text-base">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Sales Office</h3>
              <p>Jl. Imam Bonjol, Pandean, Kec. Mejayan, Kab. Madiun, Jawa Timur 63153</p>
              <p>778-889-991</p>
              <a href="#contact" className="mt-4 inline-block bg-blue-500 text-center text-white py-2 px-4 
              rounded-lg hover:bg-blue-600 transition">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Teks di Sudut Kiri Bawah */}
        <p className="absolute bottom-4 left-4 text-sm md:text-lg max-w-xs md:max-w-lg text-white z-20">
          "Masa depan sehat dimulai dari air bersih dan sanitasi yang baik. Temukan solusi terbaik untuk kebutuhan 
          air bersih dan sanitasi di sini."
        </p>
      </div>

      {/* Section Lainnya */}
      <div className="bg-gray-100 py-10 px-4 md:px-0">
        <Carosel />
      </div>
      <div className="py-10 px-4 md:px-0">
        <Features />
      </div>
      <div className="bg-gray-100 py-10 px-4 md:px-0">
        <AboutSection />
      </div>
      <div className="py-10 px-4 md:px-0">
        <NewsSection />
      </div>
      <div className="bg-gray-100 py-10 px-4 md:px-0">
        <PartnerSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HeroSection;
