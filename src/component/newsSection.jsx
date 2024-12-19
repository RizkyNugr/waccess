import React from 'react';

const news = [
  {
    title: "Pemkab Maros Kerahkan 9 Unit Armada Air Bersih Selama Masa Tanggap Darurat",
    image: "/img/news1.jpg",
  },
  {
    title: "Izin PT TCN Dicabut KKP, Warga Gili Trawangan Terancam Krisis Air Bersih",
    image: "/img/news2.jpg",
  },
  {
    title: "Mobil Water Canon Salurkan Air Bersih ke Desa Mojokerto yang Kekeringan",
    image: "/img/news3.jpg",
  },
  {
    title: "Sejumlah Desa di Ciamis Mulai Alami Krisis Air Bersih------------------",
    image: "/img/news4.jpg",
  },
];

const NewsSection = () => {
  return (
    <div className="bg-gray-100 p-10 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold text-black mb-6">Berita Terbaru</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <p className="text-center text-gray-800 font-semibold mb-4 px-2 text-justify">{item.title}</p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
              selengkapnya
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
