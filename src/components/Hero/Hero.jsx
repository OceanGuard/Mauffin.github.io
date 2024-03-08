import "../../assets/style/hero.css";
import gsap from "gsap";
import Logo from "../../assets/img/LogoOcean.svg";
{
  /*import Arrow from "../../assets/img/arrow-scroll.svg"*/
}
import Scroll from "../../assets/img/scroll.svg";
import Secction from "../section/Section";
import Informacion from "../Informacion/Informacion";

const Hero = () => {

  useEffect(() => {
    gsap.to("#path1", { duration: 1, opacity: 1, y: 0 });
    gsap.to("#path2", { duration: 1, opacity: 1, y: 0, delay: 0.2 });
    gsap.to("#path3", { duration: 1, opacity: 1, y: 0, delay: 0.4 });
    gsap.to("#path4", { duration: 1, opacity: 1, y: 0, delay: 0.6 });
    gsap.to("#path5", { duration: 1, opacity: 1, y: 0, delay: 0.8 });
    gsap.to("#path6", { duration: 1, opacity: 1, y: 0, delay: 1 });
    gsap.to("#ellipse1", { duration: 1, opacity: 1, y: 0, delay: 1.2 });
    gsap.to("#path7", { duration: 1, opacity: 1, y: 0, delay: 1.4 });
    gsap.to("#path8", { duration: 1, opacity: 1, y: 0, delay: 1.6 });
  }, []);
  
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
