


import "../../assets/style/section.css"
import Logo from "../../assets/img/LogoOcean.svg"
const Section = () => {
  return (
    <>
    
    <section className="sectioncontainer1">

    <div className="div-texto">
    <h1>
    Preservando la Vida Marina
    </h1>
    <p>En Ocean Guard, no solo hablamos de preservación,</p>
    <p>
    ¡la llevamos a cabo! Nuestra misión es trazar un mapa didáctico de las áreas y especies en veda
    </p>
    </div>

    <div className="div-img">
    <img src={Logo} alt="" />
    </div>
  </section></>
  )
}

export default Section