import "../../assets/style/navbar.css"

/* cambiar etiquetas a por link cuando se agregen las dependencias react router */
const nav = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Mapa</a>
          </li>
          <li>
            <a href="#">Sobre nosotros</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default nav;
