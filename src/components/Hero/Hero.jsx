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

      <section className="sectionContianer1">
        <img src="" alt="" />
      </section>
    </main>
  );
};

export default Hero;
