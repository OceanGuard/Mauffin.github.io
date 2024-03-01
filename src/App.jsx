
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/nav";
import Map from "./components/Map/Map";
import ListaRegion from "./components/Pages/Lista/ListaRegion";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";


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
        <Route path="/lista" element={<ListaRegion />}  />
        {/*<Route path="/sobre-nosotros" element={< />}  />*/}
        <Route path="/map/regiones/:key" element={<Map />} />
        <Route path="/map/especies/:id" element={<Map/>}/>
        <Route path="/map/especies/descripcion/:id" element={<Map/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
