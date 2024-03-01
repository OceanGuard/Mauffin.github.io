import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../../assets/style/map.css";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import ListaRegion from "../Pages/Lista/ListaRegion";
import Modal from "../Modal/Modal";

const Map = () => {
  const mapRef = useRef();
  const [marker, setMarker] = useState([
    -20.23989283970564, -70.13418353488936,
  ]);
  const { key } = useParams();

  const setMarkerPosition = (position) => {
    setMarker(position);
    console.log("Marker position updated:", position);
    // You may want to pan the map to the selected marker position
    mapRef.current.setView(position, 13);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/region/region/${key}`)
      .then((response) => {
        /* console.log(response.data); */
        setMarker([response.data.coordenadaX, response.data.coordenadaY]);
      });
  }, [key]);

  return (
    <>
      <MapContainer
        center={marker}
        ref={mapRef}
        zoom={13}
        scrollWheelZoom={false}
        dragging={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={marker}>
          <Popup>
            <Modal />
          </Popup>
        </Marker>
      </MapContainer>
      <ListaRegion setMarkerPosition={setMarkerPosition} />
    </>
  );
};

export default Map;
