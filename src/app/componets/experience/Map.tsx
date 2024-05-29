"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  CircleMarker,
} from "react-leaflet";
import 'leaflet.markercluster';
import "leaflet/dist/leaflet.css";

const MyMap = () => {
  const center = [51.505, -0.09];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '176px', width: '97%', borderRadius: '18px', margin: '0 auto' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CircleMarker
        className="w-[100%] h-[150px] rounded-[18px]"
        center={[43.6519799, 95.51771191]}
        radius={50}
        color="transparent"
        fillColor="red"
        fillOpacity={0.5}
      />
    </MapContainer>
  );
};

export default MyMap;
