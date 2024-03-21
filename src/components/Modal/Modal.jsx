import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../assets/style/Modal.css";
import axios from "axios";
import Details from "../details/Details";

const Modal = () => {
  const [especies, setEspecies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [especieSeleccionada, setEspecieSeleccionada] = useState("");
  const [abrirDetalles, setAbrirDetalles] = useState(false);
  const { id } = useParams();

  console.log(abrirDetalles);

  /* para cerrar segundo popup */
  const handleOnClose = () => {
    setAbrirDetalles(false);
  };

  /* para abrir popup cuando se seleccione una especie*/
  /* especie se le pasa al componente hijo details*/
  const handleEspecieClick = (especie) => {
    setEspecieSeleccionada(especie);
    setAbrirDetalles(true);
  };

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      // Cargar más datos cuando el scroll está cerca del final (ajusta según sea necesario)
      const newVisibleCount = visibleCount + 5; // Ajusta el número según sea necesario
      setVisibleCount(newVisibleCount);
    }
  };

  useEffect(() => {
    axios
      .get(`http://52.55.195.159:8080/api/especies/especies/${id}`)
      .then((response) => {
        console.log(response.data);
        // Limitar la cantidad de especies en el estado
        const limitedData = response.data.slice(0, visibleCount);
        setEspecies(limitedData);
      })
      .catch((error) => {
        console.error("Error al traer los datos", error);
        // Manejar el error según sea necesario
      });
  }, [id, visibleCount]);

  return (
    <>
      <h4 className="titulo">Especies en Veda</h4>

      <div className="scroll-container" onScroll={handleScroll}>
        <table className="miTabla">
          <thead>
            <tr>
              <th className="nombre">Nombre Especie</th>
              <th className="apellido">Nombre Cientifico</th>
            </tr>
          </thead>
          <tbody>
            {especies.map((item, index) => (
              <tr key={index}>
                <td
                  className="nombre"
                  onClick={() => handleEspecieClick(item.nombreEspecie)}
                >
                  {" "}
                  {item.nombreEspecie}
                </td>
                <td className="apellido">{item.nombreCientifico}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {abrirDetalles && (
        <Details especie={especieSeleccionada} onClose={handleOnClose} />
      )}
    </>
  );
};

export default Modal;
