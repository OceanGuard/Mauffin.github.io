import React from "react";
import data from "../../../assets/regiones_by_id_tarapaca";
import { Link } from "react-router-dom";

function ListaRegion() {
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.regionId}>
            <Link onClick={viewMap()} to={`/map/${item.regionId}`}>
              {item.nombreRegion}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListaRegion;
