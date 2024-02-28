import "../../assets/style/informacion.css";
import Foto from "../../assets/img/piratitas.webp";
import Separador from "../../assets/img/separador.svg";

const Informacion = () => {
  return (
    <>
      <section className="informacionbg">
        <section className="informacion1">
          <div className="info-texto">
            <h1>Preservando la Vida Marina</h1>
          </div>
          <section className="info-cards">
            <div className="card">
              <img src={Foto} alt="" />
              <h4>Sisisisi</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae repudiandae magnam excepturi repellendus quo nemo
                optio vitae non.
              </p>
              <a href="#">Leer más</a>
            </div>

            <div className="card">
              <img src={Foto} alt="" />
              <h4>Sisisisi</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae repudiandae magnam excepturi repellendus quo nemo
                optio vitae non.
              </p>
              <a href="#">Leer más</a>
            </div>

            <div className="card">
              <img src={Foto} alt="" />
              <h4>Sisisisi</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae repudiandae magnam excepturi repellendus quo nemo
                optio vitae non.
              </p>
              <a href="#">Leer más</a>
            </div>

            <div className="card">
              <img src={Foto} alt="" />
              <h4>Sisisisi</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae repudiandae magnam excepturi repellendus quo nemo
                optio vitae non.
              </p>
              <a href="#">Leer más</a>
            </div>
          </section>
          <section className="separador">
            <img src={Separador} alt="" />
          </section>
        </section>
      </section>
    </>
  );
};

export default Informacion;
