import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/nav"
import Map from "./components/Map/Map"
import './App.css'
import { Routes,Route } from "react-router-dom"

function App() {

 {/*agregar las vistas de los componentes en las rutas */}
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Hero/>} />
        <Route path="/map" element={ <Map/>} />
      </Routes>
    </div>
  )
}

export default App
