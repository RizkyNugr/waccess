import React, { useState } from 'react';

const programList = [
  { 
    title: "Inpres Air Minum dan Sanitasi (2024)", 
    icon: "/img/data1.jpg",
    description: "Pemerintah melalui Instruksi Presiden Nomor 1 Tahun 2024 mengalokasikan anggaran sebesar Rp16,6 triliun untuk memperluas jaringan air bersih dan sanitasi.",
    moreText: "Dalam Inpres ini, berbagai kementerian dan lembaga, termasuk pemerintah daerah, diminta mempercepat pembangunan sistem penyediaan air minum (SPAM) dengan membangun lebih banyak sambungan rumah (SR) serta jaringan perpipaan. Proyek ini bertujuan memenuhi hak dasar masyarakat akan air minum dan sanitasi serta mengurangi risiko kesehatan dari sanitasi buruk dan penyakit bawaan air. Selain itu, proyek ini akan mendukung pengelolaan air limbah domestik melalui pengembangan Sistem Pengelolaan Air Limbah Domestik Terpusat (SPALD-T) dan Setempat (SPALD-S). Pemerintah berharap proyek ini dapat meningkatkan cakupan akses air bersih hingga mencapai target 10 juta sambungan rumah pada 2024."
  },
  { 
    title: "World Water Forum (2024)", 
    icon: "/img/data2.jpg",
    description: "Pada forum ini, Indonesia bekerja sama dengan negara-negara lain dalam mendukung 120 proyek strategis yang berfokus pada penyediaan air bersih dan sanitasi.",
    moreText: "Dengan total investasi sekitar USD 9,4 miliar, proyek-proyek ini dirancang untuk meningkatkan akses masyarakat ke air bersih dan sistem sanitasi yang layak di berbagai daerah, terutama kawasan pedesaan yang masih kekurangan akses. Proyek kolaboratif ini diharapkan mampu menekan angka stunting dan menurunkan ketergantungan masyarakat pada air tanah dengan menyediakan sumber air baku alternatif."
  },
  { 
    title: "Program Pamsimas dan Sanimas", 
    icon: "/img/data3.jpg",
    description: "Program ini terus dijalankan untuk meningkatkan akses air bersih di pedesaan, terutama melalui sistem yang melibatkan masyarakat setempat.",
    moreText: "Pamsimas difokuskan pada penyediaan air minum di desa-desa, sementara Sanimas membantu menyediakan sanitasi berbasis komunitas, khususnya di kawasan padat penduduk. Pemerintah telah menjalankan Program Pamsimas sejak 2008, yang mencakup lebih dari 37.000 desa di seluruh Indonesia. Program ini mendorong partisipasi masyarakat dalam penyediaan air minum dan sanitasi yang dikelola secara mandiri. Desa-desa yang berpartisipasi dilibatkan dalam perencanaan, pembangunan, dan pemeliharaan fasilitas air bersih dan sanitasi. Program ini telah terbukti meningkatkan kualitas hidup dan kesehatan masyarakat di pedesaan​."
  }
];

const ProgramList = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 p-10 rounded-lg shadow-lg w-full">
      <div className="space-y-6">
        {programList.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Gambar */}
              <div className="w-full md:w-1/3">
                <img src={feature.icon} alt={feature.title} className="w-full h-full object-cover" />
              </div>

              {/* Konten */}
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
                
                {/* Teks tambahan yang muncul saat diperbesar */}
                {expandedIndex === index && (
                  <p className="text-gray-600 mt-4">{feature.moreText}</p>
                )}

                {/* Tombol More/Less */}
                <button 
                  onClick={() => handleToggle(index)} 
                  className="text-blue-500 mt-4 font-medium hover:underline"
                >
                  {expandedIndex === index ? "Less" : "More"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramList;
