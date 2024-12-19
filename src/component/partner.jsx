import React from 'react';
import { useNavigate } from 'react-router-dom';

// Data partners didefinisikan di luar komponen
const partners = [
  {
    title: "Pasang GRATIS PDAM",
    image: "/img/partner1.jpg",
  },
  {
    title: "PDAM Kabupaten Madiun",
    image: "/img/partner2.jpg",
  },
  {
    title: "PDAM Kota Madiun",
    image: "/img/partner3.jpg",
  },
];

const PartnerSection = () => {
  const navigate = useNavigate(); // useNavigate dipanggil di dalam komponen yang membutuhkannya

  return (
    <div className="relative bg-cover bg-center rounded-lg shadow-lg p-10 ml-5 mr-5" style={{ backgroundImage: "url('/img/dam.jpg')" }}>
      <h2 className="text-center text-2xl font-bold text-white mb-6">Partner With Us</h2>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-60">
            <img src={partner.image} alt={partner.title} className="w-full h-60 object-cover rounded-t-lg mb-4" />
            <button 
              onClick={() => navigate('/fiturproject')} // Navigasi ke halaman fitur proyek
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition mt-auto"
            >
              More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
