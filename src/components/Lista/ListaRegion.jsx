import data from "../../assets/regiones_by_id_tarapaca";
import { Link } from "react-router-dom";

function ListaRegion({ setMapViewPosition }) {
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.regionId}>
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
