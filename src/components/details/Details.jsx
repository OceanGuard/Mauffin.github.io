import {useEffect, useState} from 'react'
import axios from 'axios'
import "../../assets/style/details.css"

const Details = ({especie,onClose}) => {

  const [detalles,setDetalles] = useState([])

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
        <div className="popup">
          <h3>Detalles de la especie</h3>
        <div className='btn'>
        <button className='btn' onClick={(e) => onClose()}>cerrar</button>
        </div>
        {detalles?.regionDeVeda?.nombreRegion}
          <div className='grid-container'>
            <div className='div1'>
              {detalles?.especieEnVeda?.nombreEspecie}
              {detalles?.especieEnVeda?.nombreCientifico}
            </div>
            <div className='div2'>
              {detalles?.descripcionVeda}
              {detalles?.especificacion}
            </div>
            <div className='div3'>
              {detalles?.especificacion}
            </div>
            <div className='div4'>
              {detalles?.fechaDeTermino}
            {detalles?.fechaDeInicio}
            </div>

            <div className='div5'>
            {detalles?.regionDeVeda?.coordenadaX}
            {detalles?.regionDeVeda?.coordenadaY}
            </div>
              
          </div>
      
      </div>

    </>
  );
}

export default Details;