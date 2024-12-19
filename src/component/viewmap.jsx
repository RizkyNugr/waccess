import React, { useState, useEffect } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    // Mengambil data dari file JSON
    fetch('/locations.json')
      .then((response) => response.json())
      .then((data) => setLocations(data));
  }, []);

  return (
    <div className="p-5">
      <div className="h-full rounded-xl overflow-hidden ml-20 mr-20 mt-10 mb-10" style={{ height: "100vh" }}>
        <Map
          initialViewState={{
            longitude: 111.5206, // Koordinat untuk Madiun
            latitude: -7.6291,   // Koordinat untuk Madiun
            zoom: 10             // Sesuaikan level zoom agar peta langsung menampilkan area sekitar Madiun
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken="pk.eyJ1Ijoicml6a3ludWdyIiwiYSI6ImNtMnkyNnJ5cDBiYTIya3B3OHppbDY3dXMifQ.JN5K9aTP-mVVpreBUtaBPQ" // Ganti dengan API Key Anda
        >
          {locations.map((location) => (
            <Marker
              key={location.id}
              longitude={location.coordinates[0]}
              latitude={location.coordinates[1]}
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setSelectedLocation(location);
              }}
            >
              <div className="marker">
                📍
              </div>
            </Marker>
          ))}

          {selectedLocation && (
            <Popup
              longitude={selectedLocation.coordinates[0]}
              latitude={selectedLocation.coordinates[1]}
              anchor="top"
              onClose={() => setSelectedLocation(null)}
            >
              <div>
                <h3>{selectedLocation.name}</h3>
                <p>{selectedLocation.description}</p>
              </div>
            </Popup>
          )}
        </Map>
      </div>
    </div>
  );
};

export default MapComponent;
