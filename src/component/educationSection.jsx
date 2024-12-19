import React from 'react';

const EducationSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-xl shadow-lg">
      
      {/* Bagian Teks */}
      <div className="md:w-2/3 text-gray-800 text-justify mb-6 md:mb-0 md:pr-8">
        <h2 className="text-xl font-bold mb-4">
          Pentingnya Edukasi tentang Hygiene dan Sanitasi bagi Masyarakat Indonesia.
        </h2>
        <p className="mb-4">
          Kesehatan dan kebersihan merupakan aspek yang tak terpisahkan dalam kehidupan sehari-hari. Terutama di tengah kondisi pandemi global seperti saat ini, pemahaman akan pentingnya higiene dan sanitasi menjadi semakin penting.
        </p>
        <p>
          Di Indonesia, di mana tingkat kesadaran dan akses terhadap fasilitas sanitasi masih beragam, edukasi tentang higiene dan sanitasi memiliki peran yang krusial dalam meningkatkan kesehatan dan kesejahteraan masyarakat.
        </p>
      </div>

      {/* Bagian Gambar */}
      <div className="md:w-1/3">
        <img
          src="/img/hygine.png" // Pastikan path gambar sesuai
          alt="Hygiene Education Illustration"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default EducationSection;
