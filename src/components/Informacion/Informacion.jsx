import React from "react";
import Tarapaca from "../../assets/vedasTarapaca.js";

const Informacion = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>nombreEspecie</th>
            <th>nombreCientifico</th>
          </tr>
        </thead>
        <tbody>
          {Tarapaca.map((item, index) => (
            <tr key={index}>
              <td>{item.nombreEspecie}</td>
              <td>{item.nombreCientifico}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Informacion;
