import "../../assets/style/hero.css";
import Logo from "../../assets/img/LogoOcean.svg";
import Secction from "../section/Section"
const Hero = () => {
  return (
    <>
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
    </main>
    <Secction/>
    </>
  );
};

export default Hero;
