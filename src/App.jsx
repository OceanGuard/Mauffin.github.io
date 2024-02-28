import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/nav";
import Map from "./components/Map/Map";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import ListaRegion from "./components/Pages/Lista/ListaRegion";

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
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/map/:key" element={<Map />} />
        <Route path="/lista" element={<ListaRegion />} />
      </Routes>
    </div>
  );
}

export default App;
