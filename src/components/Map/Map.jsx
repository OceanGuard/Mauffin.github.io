import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../../assets/style/map.css";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import ListaRegion from "../Lista/ListaRegion";
import Modal from "../Modal/Modal";

/* let marker = [-20.23989283970564, -70.13418353488936]; */

const Map = () => {
  const [marker, setMarker] = useState([0, 0]);
  const [center, setCenter] = useState([-39.57, -92.24]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const mapRef = useRef();
  const { key } = useParams();

  //Controles de Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const setMapViewPosition = (position) => {
    setMarker(position);
    console.log("Marker position updated:", position);
    setCenter(position);
    console.log("Map View Position Updated to: ", position);
    // You may want to pan the map to the selected marker position
    mapRef.current.setView(position, 13);
  };

  useEffect(() => {
    if (key) {
      // Verifica si key está definido
      axios
        .get(`http://localhost:8080/api/region/region/${key}`)
        .then((response) => {
          setCenter([response.data.coordenadaX, response.data.coordenadaY]);
        })
        .catch((error) => {
          console.error("Error fetching region data:", error);
        });
    }
  }, [key]);

  return (
    <>
      <div className="map-container">
        <MapContainer
          center={center}
          ref={mapRef}
          zoom={4}
          scrollWheelZoom={false}
          dragging={true}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={marker}>
            <Popup closeOnClick={false}>
              <Modal />
            </Popup>
          </Marker>
        </MapContainer>
        <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
          {<ListaRegion setMapViewPosition={setMapViewPosition} />}
        </div>
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          {sidebarOpen ? "Cerrar Sidebar" : "Abrir Sidebar"}
        </button>
      </div>
    </>
  );
};

export default Map;
