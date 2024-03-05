import './Card.css'

const Card = ({icono,titulo,contenido,borderColor,className}) => {
  return (

      <div className={`div-Container ${className}`} style={{borderColor:borderColor}}>
        <div className='div-head' >
        <img src={icono} alt="icon" />
        <h4>{titulo}</h4>
        </div>
        <p className='div-content'>{contenido}</p>
      </div>
  
  )
}

export default Card