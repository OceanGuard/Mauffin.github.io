import "../../assets/style/navbar.css"

const Navbar = () => {

  /* cambiar etiquetas <a> por Link cuando se instalen las dependencias de react-router-dom */
  return (
    <>
      <div>
        <ul className="navbar">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#mapa">Mapa</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
          <li>
            <a href="#sobre-nosotros">Sobre nosotros</a>
          </li>
         
        </ul>
      </div>
    </>
  );
};

export default Navbar;
