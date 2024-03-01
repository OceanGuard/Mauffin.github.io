import React from 'react'
import './Footer.css'
import logoFooter from '../../assets/img/icons/OceanFooter.svg'
import numero from '../../assets/img/icons/numero.svg'
import mail from '../../assets/img/icons/mail.svg'
import localizacion from '../../assets/img/icons/localizacion.svg'
import copyright from '../../assets/img/icons/copyright.svg'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer className="footer" >
            <hr className='primera-linea' />
                <section className='columnas'>
                    <section className="menu">
                        <h6 className='titulo-menu'>Menu</h6>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/sobre-nosotros">Sobre nosotros</Link></li>
                            <li><Link to="/mapa">Mapa</Link></li>
                        </ul>
                    </section>
                    <section className="contacto">
                        <h6 className='titulo-contacto'>Contacto</h6>
                        <ul>
                            <li><img src={localizacion} alt="icono-localizacion" /><span>Santiago, Chile</span></li>
                            <li><img className="numero" src={numero} alt="icono-telefono" /><span>+56955555555</span></li>
                            <li><img src={mail} alt="icono-mail" /> <span>mail@mail.com</span></li>
                        </ul>
                    </section>
                    <section className="logo">
                        <img src={logoFooter} alt="logo-OcenGuard" />
                    </section>
                </section>
            <hr className='segunda-linea' />
            <section className='derechos-reservados'>
                <img src={copyright} alt="cono-copyright" />
                <p>Todos los derechos reservados</p>
            </section>
        </footer>
    )
};

export default Footer
