import React from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  { title: "Informasi Layanan", icon: "/img/fitur3.png", path: "/fiturproject" },
  { title: "Peta Persebaran", icon: "/img/fitur1.png", path: "/petapersebaran" },
  { title: "Forum Diskusi", icon: "/img/fitur4.png", path: "/forum" }
];

const FeaturesSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-gray-100 p-10 rounded-lg shadow-lg w-full">
      <h2 className="text-center text-3xl font-bold text-blue-600 mb-8">Features</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleNavigation(feature.path)} // Navigasi saat di-klik
          >
            <img src={feature.icon} alt={feature.title} className="w-48 h-48 mb-6" />
            <p className="text-center text-gray-800 font-semibold text-xl">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
