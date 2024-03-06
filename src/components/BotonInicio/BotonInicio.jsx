import React, { useState, useEffect } from "react";
import "../../assets/style/BotonInicio.css";

const BotonInicio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`boton-inicio ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      Llevame al Inicio!
    </button>
  );
};

export default BotonInicio;
