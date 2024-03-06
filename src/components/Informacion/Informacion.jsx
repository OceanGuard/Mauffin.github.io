import "../../assets/style/informacion.css";
import Foto from "../../assets/img/piratitas.webp";
import Foto1 from "../../assets/img/foto1.webp";
import Foto2 from "../../assets/img/foto2.webp";
import Foto3 from "../../assets/img/foto3.webp";
import Foto4 from "../../assets/img/foto4.webp";

const Informacion = () => {
  return (
    <>
      <section className="informacionbg">
        <section className="informacion1">
          <div className="info-texto">
            <h1>La Misión de Ocean Guard</h1>
          </div>
          <section className="info-cards">
            <section className="prim-seg-card">
            <div className="card">
              <img src={Foto1} alt="tortuga-marina" />
              <h4>Innovación Tecnológica al Servicio del Medio Ambiente</h4>
              <p>
                Nuestro propósito es claro, utilizar soluciones tecnológicas
                para educar sobre áreas y especies en veda, previniendo la
                sobreexplotación y preservando nuestros océanos. La tecnología y
                la conservación se unen para un impacto duradero.
              </p>
            </div>

            <div className="card">
              <img src={Foto2} alt="peces y corales" />
              <h4>Reconocimiento en la Promoción de la Conservación Marina</h4>
              <p>
                Ocean Guard aspira a ser reconocido en la promoción de la
                conservación marina. Nuestra visión impulsa la restauración y el
                equilibrio de los océanos a través de tecnologías innovadoras
                para un medio ambiente sostenible y saludable.
              </p>
            </div>
            </section>
            <section className="terc-cuart-card">
            <div className="card">
              <img src={Foto3} alt="pez nadando" />
              <h4>Nuestra Historia</h4>
              <p>
                Fusionando Programación y Conservación: Ocean Guard nació de la
                pasión por la programación y la conservación marina. Desde
                nuestro inicio, fusionamos la innovación tecnológica con el
                respeto por nuestro entorno marino, desarrollando soluciones
                como mapas didácticos interactivos.
              </p>
            </div>

            <div className="card">
              <img src={Foto4} alt="cardumen bajo el agua" />
              <h4>Cada Pequeño Esfuerzo Cuenta</h4>
              <p>
                En Ocean Guard, creemos que cada pequeño esfuerzo cuenta en la
                protección de nuestros preciosos océanos. Únete a nosotros en
                nuestra misión de fusionar la programación y la conservación
                marina para un futuro más sostenible.
              </p>
            </div>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Informacion;
