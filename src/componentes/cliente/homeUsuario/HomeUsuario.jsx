import React from 'react';
import './HomeUsuario.css';
/* import { Footer } from '../footer/Footer'; */
import { Header } from '../header/Header';
import milegit from '../../../assets/img/milegit.jpg'
import react from '../../../assets/img/react.jpg'
import reactyjs from '../../../assets/img/reactyjs.jpg'
import AngularLogo from '../../../assets/img/AngularLogo.jpg'
import css from '../../../assets/img/css.jpg'
import html from '../../../assets/img/html.jpg'
import js from '../../../assets/img/js.png'
import node from '../../../assets/img/node.jpg'
import codigo from '../../../assets/img/codigo.jpg'
import computer from '../../../assets/img/computer.jpg'
import codigoC from '../../../assets/img/codigoC.jpg'
import { Footer } from '../footer/Footer';


export const HomeUsuario = () => {
    return (
        <>
            {/* HEADER */}
            <Header></Header>

            {/* MAIN */}
            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src={codigo}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src={milegit}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={reactyjs}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                    />

                    <img
                        src={codigoC}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={computer}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                    />

                    <img
                        src={react}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                    />
                </div>
            </div>

            {/* LOGOS */}
            <div className='containerPadreLogos'>
                <h1>Coleccion de logos</h1>
                <div className='containerLogos'>
                    <i class="fa-solid fa-angles-left tamañoIcono"></i>
                    <img className='tamañoLogos' src={AngularLogo} alt="AngularLogo" />
                    <img className='tamañoLogos' src={css} alt="css" />
                    <img className='tamañoLogos' src={html} alt="html" />
                    <img className='tamañoLogos' src={node} alt="node" />
                    <img className='tamañoLogos' src={js} alt="js" />
                    <i class="fa-solid fa-angles-right tamañoIcono"></i>
                </div>
            </div>



            {/* FOOTER */}
            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}