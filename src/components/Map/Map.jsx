import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../assets/style/map.css";
import "leaflet/dist/leaflet.css";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { map } from "leaflet";
import ListaRegion from "../Lista/ListaRegion";
import Modal from "../Modal/Modal";

/* let marker = [-20.23989283970564, -70.13418353488936]; */

const Map = () => {
  //Controles de Sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  //
  const mapRef = useRef();
  const [marker, setMarker] = useState([-39.57, -92.24]);

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
      <div className="map-container">
        <MapContainer
          center={marker}
          ref={mapRef}
          zoom={4}
          scrollWheelZoom={false}
          dragging={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={marker}>
            <Popup>
              Region de Tarapacá
              <Modal />
            </Popup>
          </Marker>
        </MapContainer>
        <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
          {<ListaRegion setMarkerPosition={setMarkerPosition} />}
        </div>
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          {sidebarOpen ? "Cerrar Sidebar" : "Abrir Sidebar"}
        </button>
      </div>
    </>
  );
};

export default Map;
