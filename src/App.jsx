import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/nav"
import Map from "./components/Map/Map"

import './App.css'
import { Router,Route } from "react-router-dom"

function App() {

 {/*agregar las vistas de los componentes en las rutas */}
  return (
    <div>
       <Navbar/>
      <Router>
        <Route path="/" element={ <Hero/>} />
        <Route path="/map" element={ <Map/>} />
        
      </Router>
    </div>
  )
}

export default App
