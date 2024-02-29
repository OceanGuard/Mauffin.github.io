import React from "react";
import data from "../../assets/regiones_by_id_tarapaca";
import { Link } from "react-router-dom";
import map from "../Map/Map";

function ListaRegion({ setMarkerPosition }) {
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.regionId}>
            <Link
              to={`/map/${item.regionId}`}
              onClick={() =>
                setMarkerPosition([item.coordenadaX, item.coordenadaY])
              }
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
