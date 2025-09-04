import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "../../services/api";

export default function FloodMap() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const res = await axios.get("/reports");
      setReports(res.data);
    };
    fetchReports();
  }, []);

  return (
    <MapContainer 
      center={[38.4337, -82.1335]} // Milton center
      zoom={14} 
      className="h-[70vh] w-full rounded-2xl shadow-lg"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
      />

      {reports.map((r) => {
        const lat = (r.lat || 38.4337) + (Math.random() - 0.5) * 0.001;
        const lng = (r.lng || -82.1335) + (Math.random() - 0.5) * 0.001;
        return (
          <Marker key={r.id} position={[lat, lng]}>
            <Popup>
              <strong>{r.address}</strong><br />
              Severity: {r.severity}<br />
              {r.description}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
