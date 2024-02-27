import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/nav";
import Map from "./components/Map/Map";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Informacion from "./components/Informacion/Informacion";

function App() {
  {
    /*agregar las vistas de los componentes en las rutas */
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/map" element={<Map />} />
        <Route path="/info" element={<Informacion />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>
    </div>
  );
}

export default App;
