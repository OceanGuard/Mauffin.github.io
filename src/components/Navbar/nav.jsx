import "../../assets/style/navbar.css";
import { Link } from "react-router-dom";

/* cambiar etiquetas a por link cuando se agregen las dependencias react router */
const nav = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/map">Mapa</Link>
          </li>
          <li>
            <Link to="/sobre-nosotros">Sobre Nosotros</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default nav;
