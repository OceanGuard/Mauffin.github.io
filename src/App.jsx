
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/nav";
import Map from "./components/Map/Map";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import ListaRegion from "./components/Pages/Lista/ListaRegion";
import Footer from "./components/Footer/Footer";


function App() {
  {
    /*agregar las vistas de los componentes en las rutas */
  }
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/map/:key" element={<Map />} />
        <Route path="/lista" element={<ListaRegion />}  />
        {/*<Route path="/sobre-nosotros" element={< />}  />*/}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
