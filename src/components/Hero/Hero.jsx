import "../../assets/style/hero.css";
import Logo from "../../assets/img/LogoOcean.svg";

const Hero = () => {
  return (
    <main className="container">
      <section className="container-hero">
        <img src={Logo} alt="Logo Ocean Guard" />
        <h1>Ocean Guard </h1>
        <h5>preservando la vida marina</h5>
      </section>

      <section className="">
        <img src="" alt="" />
      </section>
    </main>
  );
};

export default Hero;
