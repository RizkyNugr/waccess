import React from 'react';

const EducationPoints = () => {
  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-md text-gray-800">
      <h2 className="text-2xl font-bold mb-6">Edukasi tentang Hygiene dan Sanitasi</h2>

      {/* List of Points */}
      <ol className="list-decimal list-inside space-y-4">
        <li>
          <h3 className="font-semibold text-lg">Peningkatan Kesadaran akan Pentingnya Hygiene</h3>
          <p>
            Saat ini, masih terdapat sebagian masyarakat yang kurang memahami betapa pentingnya praktik higiene dalam menjaga kesehatan diri dan lingkungan sekitar. Dengan edukasi yang tepat, masyarakat dapat memahami cara-cara sederhana untuk menjaga kebersihan diri, seperti mencuci tangan dengan sabun secara teratur, menjaga kebersihan lingkungan, dan praktik-praktik higiene lainnya.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-lg">Peran Penting Sanitasi dalam Mencegah Penyakit Menular</h3>
          <p>
            Fasilitas sanitasi yang baik merupakan langkah awal dalam mencegah penyebaran penyakit yang dapat menyebar di tempat-tempat umum dan komunitas yang padat. Dengan edukasi yang tepat tentang sanitasi, masyarakat dapat memahami pentingnya penggunaan fasilitas sanitasi yang bersih dan aman, serta praktik-praktik sanitasi yang benar untuk mencegah penyakit.
          </p>
          <p className="text-gray-800 mt-2">
            Baca berita terbaru juga{' '}
            <a href="#berita-terbaru" className="relative inline-block text-blue-500 font-medium underline-double">
              di sini
            </a>
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-lg">Meningkatkan Kualitas Hidup Masyarakat</h3>
          <p>
            Dengan peningkatan kesadaran dan pemahaman akan pentingnya higiene dan sanitasi, diharapkan dapat terjadi perubahan perilaku yang berkelanjutan di kalangan masyarakat. Hal ini tidak hanya akan membawa dampak positif terhadap kesehatan individu, tetapi juga akan meningkatkan kualitas hidup secara keseluruhan di tingkat komunitas.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-lg">Peran Pemerintah dan Lembaga Non-Pemerintah</h3>
          <p>
            Pemerintah dan lembaga non-pemerintah memiliki peran penting dalam mendukung program-program edukasi tentang higiene dan sanitasi bagi masyarakat. Melalui kebijakan yang mendukung, sumber daya yang memadai, dan kerjasama dengan berbagai pihak, upaya-upaya ini akan dapat diwujudkan secara efektif untuk mencapai tujuan peningkatan kesadaran dan praktik higiene yang lebih baik di masyarakat.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-lg">Kolaborasi dan Partisipasi Masyarakat</h3>
          <p>
            Selain peran pemerintah, partisipasi aktif dari masyarakat juga sangat di perlukan dalam meningkatkan kesadaran akan pentingnya higiene dan sanitasi. Dengan kolaborasi antara pemerintah, lembaga non-pemerintah, dan masyarakat, diharapkan tercipta lingkungan yang sehat, aman, dan berkelanjutan bagi generasi masa depan.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default EducationPoints;
