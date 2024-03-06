import React from "react";
import "../../assets/style/sobreNosotros.css";
const SobreNosotros = () => {
  return (
    <div>
      <div className="sobre-nosotros">
        <h1>Sobre Nosotros</h1>
        <p id="text">
          Somos una organización comprometida con la protección de las especies
          submarinas en el territorio chileno. Nuestra misión es promover la
          conservación de la vida marina a través de la difusión de información
          precisa sobre las vedas y regulaciones que protegen a estas especies.
        </p>
        <p id="text">
          En nuestra aplicación, proporcionamos datos actualizados sobre las
          vedas establecidas por las autoridades pertinentes, así como
          información sobre la importancia de preservar el ecosistema marino.
          Nos esforzamos por concienciar a la comunidad sobre la necesidad de
          proteger estas especies vulnerables y fomentar prácticas sostenibles
          en la pesca y actividades relacionadas.
        </p>
        <div className="resaltar">
          <p>
            Nuestro equipo está formado por desarrolladores de software y
            amantes del océano comprometidos con la conservación marina. Juntos,
            trabajamos para hacer de nuestro océano un lugar más seguro y
            saludable para las generaciones futuras.
          </p>
        </div>
        <p id="text">
          ¡Gracias por apoyar nuestra causa y unirte a nosotros en la protección
          del mar chileno y sus fascinantes criaturas submarinas!
        </p>
      </div>
    </div>
  );
};

export default SobreNosotros;
