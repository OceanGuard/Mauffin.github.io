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
              Descubre cómo Ocean Guard está transformando la conservación
              marina con innovación y tecnología
            </p>
            <p className="segundoP">
              En Ocean Guard, no solo hablamos de preservación, ¡lo hacemos
              realidad! Nuestra misión es trazar un mapa didáctico de las áreas
              y especies en veda, evitando la sobreexplotación y salvaguardando
              la riqueza de nuestros océanos.
            </p>
          </div>
          <div className="div-img">
            <img src={Logo} alt="imagen-de-ballena" />
          </div>
        </section>
      </section>

      <section className="sectionbg">
        <section className="sectionContainer2">
          <div className="sectionLeft-text">
            <h1>
              ¿Sabías que más del 50% del oxígeno viene de nuestros océanos?
            </h1>
          </div>
          <div className="secctionRight-text">
            <p>
              Con Ocean Guard podemos prevenir la sobre explotación marítima
              para mantener los ecosistemas acuáticos y así beneficiar a todos
              ya sea directa o indirectamente
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Section;
