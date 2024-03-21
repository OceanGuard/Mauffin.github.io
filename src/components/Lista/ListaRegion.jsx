import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListaRegion({ setMapViewPosition }) {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios
      .get("http://52.55.195.159:8080/api/region/regiones")
      .then((response) => {
        setLista(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error al cosumir los datos de las regiones" + error);
      });
  }, []);

  return (
    <>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            <Link
              to={`/map/especies/${item.regionId}`}
              onClick={() => {
                setMapViewPosition([item.coordenadaX, item.coordenadaY]);
              }}
            >
              {item.nombreRegion}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListaRegion;
