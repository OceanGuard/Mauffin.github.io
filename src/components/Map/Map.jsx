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
  const [marker, setMarker] = useState([90.0, 135.0]);
  const [center, setCenter] = useState([-39.57, -92.24]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mapKey, setMapKey] = useState(0);
  const mapRef = useRef();
  const markerRef = useRef();
  const { key } = useParams();

  //Controles de Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const setMapViewPosition = (position) => {
    setSidebarOpen(false);

    setTimeout(() => {
      setMarker(position);
      console.log("Marker position updated:", position);
      setCenter(position);
      console.log("Map View Position Updated to: ", position);
      // You may want to pan the map to the selected marker position
      mapRef.current.setView(position, 13);
    }, 250);
  };

  useEffect(() => {
    if (key) {
      // Verifica si key está definido
      axios
        .get(`http://52.55.195.159:8080/api/region/region/${key}`)
        .then((response) => {
          setCenter([response.data.coordenadaX, response.data.coordenadaY]);
        })
        .catch((error) => {
          console.error("Error fetching region data:", error);
        });
    }
  }, [key]);

  useEffect(() => {
    if (sidebarOpen === false) {
      setMapKey(mapKey + 1);
    }
  }, [sidebarOpen]);

  return (
    <>
      <div className="map-container">
        <MapContainer
          center={center}
          ref={mapRef}
          zoom={4}
          scrollWheelZoom={false}
          dragging={false}
          zoomControl={false}
          doubleClickZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={marker}
            ref={markerRef}
            closeOnClick={true}
            key={`mapKey${mapKey}`}
          >
            <Popup>
              <Modal />
            </Popup>
          </Marker>
        </MapContainer>
        <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
          <div className="titulo-lista">Lista Regiones</div>
          {<ListaRegion setMapViewPosition={setMapViewPosition} />}
        </div>

        <button
          className={`sidebar-toggle-btn ${sidebarOpen ? "" : "moved"}`}
          onClick={toggleSidebar}
        >
          <div className="sign">
            {sidebarOpen ? (
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.96997 2V22"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.97 9.43994L12.41 11.9999L14.97 14.5599"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.97 2V22"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.96997 9.43994L10.53 11.9999L7.96997 14.5599"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <div className="text">
            {sidebarOpen ? "Cerrar Sidebar" : "Abrir Sidebar"}
          </div>
        </button>
      </div>
    </>
  );
};

export default Map;
