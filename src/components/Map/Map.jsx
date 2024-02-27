import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../assets/style/map.css";
import "leaflet/dist/leaflet.css";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { map } from "leaflet";

/* let marker = [-20.23989283970564, -70.13418353488936]; */

const Map = () => {
  const mapRef = useRef();

  function viewMap() {
    const { current } = mapRef;
    const { leafletElement: map } = current;
    viewMap(marker, 13);
  }

  const [marker, setMarker] = useState([
    -20.23989283970564, -70.13418353488936,
  ]);
  const { key } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/region/region/${key}`)
      .then((response) => {
        /* console.log(response.data); */
        setMarker([response.data.coordenadaX, response.data.coordenadaY]);
        map.setView(marker);
      });
  }, []);
  return (
    <>
      <MapContainer
        center={marker}
        ref={mapRef}
        zoom={13}
        scrollWheelZoom={false}
        dragging={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={marker}>
          <Popup>Region de Tarapacá</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
