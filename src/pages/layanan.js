import React from 'react';
import NavBar from '../component/Navbar';
import EducationSection from '../component/educationSection';
import EducationPoints from '../component/educationPoint';
import FeaturesSection from '../component/features';
import NewsSection from '../component/newsSection';
import Footer from '../component/Footer';

const BannerSection = () => {
  return (
    <div>
      {/* Navbar */}
      <NavBar />

      {/* Banner Section */}
      <div className="relative w-full h-72 md:h-screen bg-blue-200 overflow-hidden">
        {/* Background Image */}
        <img
          src="/img/bg1.jpg" // Pastikan path gambar sesuai
          alt="Hygiene Education"
          className="w-full h-full object-cover"
        />

        {/* Teks Overlay */}
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30">
          <h2 className="text-center text-white text-2xl md:text-3xl font-bold leading-tight">
            Pentingnya Edukasi Higiene <br /> & Sanitasi bagi Masyarakat <br /> Indonesia
          </h2>
        </div>
      </div>

      {/* Education Section */}
      <div className="p-8">
        <EducationSection />
        <EducationPoints/>
        <FeaturesSection/>
        <NewsSection/>
        <Footer/>
      </div>
    </div>
  );
};

export default BannerSection;
