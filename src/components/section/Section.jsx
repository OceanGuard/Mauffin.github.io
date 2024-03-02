import "../../assets/style/section.css";
import Logo from "../../assets/img/piratitas.webp";

const Section = () => {
  return (
    <>
      <section className="sectionbg">
        <section className="sectioncontainer1">
          <div className="div-texto">
            <h1>Preservando la Vida Marina</h1>
            <p className="primerP">
              En Ocean Guard, no solo hablamos de preservación,
            </p>
            <p className="segundoP">
              ¡la llevamos a cabo! Nuestra misión es trazar un mapa didáctico de
              las áreas y especies en veda
            </p>
          </div>
          <div className="div-img">
            <img src={Logo} alt="" />
          </div>
        </section>
      </section>

      <section className="sectionbg">
        <section className="sectionContainer2">
          <div className="sectionLeft-text">
            <h1>Preservando la Vida Marina</h1>
          </div>
          <div className="secctionRight-text">
            <p>
              ¡la llevamos a cabo! Nuestra misión es trazar un mapa didáctico de
              las áreas y especies en veda
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Section;
