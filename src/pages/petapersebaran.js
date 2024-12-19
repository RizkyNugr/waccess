import React from 'react';
import NavBar from '../component/Navbar';
import WaterDistributionChart from '../component/chartdistribusiair';
import WaterDistributionDescription from '../component/deskripsiair';
import MapComponent from '../component/viewmap'; // Pastikan path sesuai dengan lokasi MapComponent
import Carosel from '../component/carousel';
import FeaturesSection from '../component/features';
import NewsSection from '../component/newsSection';
import Footer from '../component/Footer';

const MapPage = () => {
  return (
    <div>
       <NavBar/> 
      <h1 className="text-center text-2xl font-bold my-4 text-blue-600">Persebaran Air Bersih</h1>
      <MapComponent />
        <h2 className="text-center text-2xl font-bold my-4 text-blue-600">Jumlah Air Bersih yang Disalurkan Perusahaan Air Bersih</h2>
      <WaterDistributionChart />
      <WaterDistributionDescription />
      <Carosel/>
      <FeaturesSection/>
      <NewsSection/>
      <Footer/>
    </div>
  );
};

export default MapPage;
