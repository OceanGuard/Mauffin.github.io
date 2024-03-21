import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/nav";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";
import Hero from "./components/Hero/Hero";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import BotonInicio from "./components/BotonInicio/BotonInicio";


function App() {
  {
    /*agregar las vistas de los componentes en las rutas */
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/frontend" element ={<Hero/>}/>
        <Route path="/map" element={<Map />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/map/regiones/:key" element={<Map />} />
        <Route path="/map/especies/:id" element={<Map/>}/>
      </Routes>
      <BotonInicio/>
      <Footer />
    </div>
  );
}

export default App;
