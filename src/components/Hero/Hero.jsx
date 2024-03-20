import "../../assets/style/hero.css";
import Logo from "../../assets/img/LogoOcean.svg";
import Scroll from "../../assets/img/scroll.svg";
import Secction from "../section/Section";
import Informacion from "../Informacion/Informacion";

const Hero = () => {


  
  return (
    <>
      <main className="container">
        <section className="container-hero">
          <div className="imagen-logo-hero">
            <img src={Logo} alt="Logo Ocean Guard" />
          </div>
          <div className="ocean">
            <div className="titulo-ocean-hero">
              <h1>Ocean Guard </h1>
            </div>
            <div className="preservar">
              <h5>preservando la vida marina</h5>
            </div>
            <div className="arrow">
              <img src={Scroll} alt="Arrow Scroll" />
            </div>
          </div>
        </section>
      </main>
      <div className="gradiant"></div>
      <Secction />
      <Informacion />
      
    </>
  );
};

export default Hero;
