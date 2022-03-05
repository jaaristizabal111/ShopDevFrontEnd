import React from 'react';

import './BarraLateral.css';
import Isotipo from '../../../assets/img/Isotipo.png';

export const BarraLateral = () => {
    return (
        <>
        <nav className="main-menu">
                <ul>
                    {/* icono blanco redondo / todos los iconos de la barra lateral */}
                    <li>
                        <a href="http://justinfarrow.com">
                            <img src={Isotipo} alt="Isotipo" />
                        </a>
                        <hr style={{ backgroundColor: 'white' }}></hr>
                    </li>
                    <li className="has-subnav mt-4">
                        <a>
                            <i className="fa icon-barra fa-chart-line fa-2x"></i>
                            <span className="nav-text">
                                Pedidos
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav mt-4">
                        <a>
                            <i className="fa icon-barra  fa-users fa-2x"></i>
                            <span className="nav-text">
                                Productos
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav mt-4">
                        <a>
                            <i className="fa icon-barra fa-chart-line fa-2x"></i>
                            <span className="nav-text">
                                Notificaciones
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}