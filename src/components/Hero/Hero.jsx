import "../../assets/style/hero.css";
import Logo from "../../assets/img/LogoOcean.svg";

const Hero = () => {
  return (
    <main className="container">
      <section className="container-hero">
        <img src={Logo} alt="Logo Ocean Guard" />
        <div className="ocean">
          <h1>Ocean Guard </h1>
          <div className="preservar">
            <h5>preservando la vida marina</h5>
          </div>
        </div>
      </section>

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
      </section>
    </main>
  );
};

export default Hero;
