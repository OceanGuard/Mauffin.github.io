import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/nav"

import './App.css'
import { Router,Route } from "react-router-dom"

function App() {


  return (
    <div>
       <Navbar/>
      <Router>
        <Route path="/" element={ <Hero/>}>
        <Route path="/" element={ <Hero/>}>
        <Route path="/" element={ <Hero/>}>
        <Route path="/" element={ <Hero/>}>
        </Route>
      </Router>
    </div>
  )
}

export default App
