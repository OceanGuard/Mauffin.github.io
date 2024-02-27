import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../assets/style/map.css";
import "leaflet/dist/leaflet.css";

let marker = [-20.23989283970564, -70.13418353488936];

const Map = () => {
  return (
    <>
      <MapContainer center={marker} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-20.23989283970564, -70.13418353488936]}>
          <Popup>Region de Tarapacá</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
