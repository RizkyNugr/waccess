import React from 'react';

const AboutSection = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat rounded-lg shadow-lg p-10 ml-5 mr-5">
      <h2 className="text-center text-3xl font-bold text-black mb-6">About?</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Teks Deskripsi */}
        <div className="md:w-2/3 text-2xl text-center md:text-left text-black">
          <p>
            Website ini dapat menjadi pusat informasi dan kolaborasi bagi individu, organisasi, dan pemerintah yang mencakup peta persebaran air bersih yang ada dan informasi sanitasi yang baik dan juga memberi informasi dan rekomendasi mengenai penyedia layanan air lokal dan global, menyediakan forum serta mengetahui proyek infrastruktur air yang sedang berjalan dan juga mempermudah identifikasi masalah dan solusi terkait air bersih dan sanitasi, serta memfasilitasi kolaborasi antara pemerintah, organisasi, dan masyarakat.
          </p>
        </div>

        {/* Gambar di Sebelah Kanan */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6"></div>
        <div className="md:w-1/3" >
          <img src="/img/fitur4.png" alt="About Icon" className="w-full h-auto bg-white bg-opacity-80 p-4 rounded-3xl shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
