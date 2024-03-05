import {useEffect, useState} from 'react'
import axios from 'axios'
import "../../assets/style/details.css"
import Card from "../Card/Card"
import nombreCientifico from "../../assets/img/icons/nombreCientifico.svg"
import nombreEspecie from '../../assets/img/icons/nombreEspecie.svg'
import descripcionVeda from "../../assets/img/icons/descripcion.svg"
import coordenadas from "../../assets/img/icons/coordenadas.svg"
import especificacion from "../../assets/img/icons/especificacion.svg"

const Details = ({especie,onClose}) => {

  const [detalles,setDetalles] = useState([])
  const formatoFecha = (fecha) => {
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opcionesFecha);
  };
  

  useEffect(() => {
    axios.get(`http://localhost:8080/api/veda/veda/${especie}`)
      .then((response) => {
        console.log(response.data)
         setDetalles(response.data[0])
        console.log(response.data[0])
      })
      .catch((error) => {
        console.log("Error al traer los datos", error);
      });
  }, [especie]);


  return (
    <>
        <div className="popup" >
          <h3 className='h3s'>Detalles de la especie</h3>
        <div className='btn'>
        <button className='btn'  onClick={(e) => onClose()}>cerrar</button>
            
        </div>
        <div className='fecha'>

          <p>Fecha de Inicio:<span className='span-gap'>{formatoFecha(detalles?.fechaDeInicio)}</span></p> 
          <p>Fecha de Termino:<p>{formatoFecha(detalles?.fechaDeTermino)}</p></p> 
            
        </div>
        
        <div className='nombreEspecie'>
          <img src={nombreEspecie} alt="icon" />
          <p>Nombre Especie: {detalles?.especieEnVeda?.nombreEspecie}</p>
        </div>
          <div className="grid-container">
            
            <Card icono={nombreCientifico}
                  titulo="Nombre Cientifico" 
                  contenido={detalles?.especieEnVeda?.nombreCientifico}
                  borderColor="#EA5353"
                  className="div1" 
            />
              
            <Card icono={descripcionVeda}
                  titulo="Descripcion Veda" 
                  contenido={detalles?.descripcionVeda}
                  borderColor="#45D3D3"
                  className="div2"
            />
              
            <Card icono={coordenadas}
                  titulo="Coordenadas" 
                  contenido={`${detalles?.regionDeVeda?.coordenadaX} ${detalles?.regionDeVeda?.coordenadaX}`}
                  borderColor="#549EF2"
                  className="div3"
            />

           
   
            
            <Card icono={especificacion}
                  titulo="Especificacion Veda" 
                  contenido={detalles?.especificacion}
                  borderColor="#ECE433"
                  className="div4"
            />
        
        

          </div>    
        </div>
      
   

    </>
  );
}

export default Details;