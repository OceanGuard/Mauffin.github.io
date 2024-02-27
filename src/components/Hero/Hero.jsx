import "../../assets/style/hero.css";
import Logo from "../../assets/img/LogoOcean.svg";
{
  /*import Arrow from "../../assets/img/arrow-scroll.svg"*/
}
import Scroll from "../../assets/img/scroll.svg";
import Secction from "../section/Section";

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
            <div className="arrow">
              <img src={Scroll} alt="Arrow Scroll" />
            </div>
          </div>
        </section>
      </main>
      <div className="gradiant"></div>
      <Secction />
    </>
  );
};

export default Hero;
