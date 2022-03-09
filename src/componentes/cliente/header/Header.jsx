import React from 'react';
import './Header.css';
import LogoPrincipal from '../../../assets/img/LogoPrincipal.png';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const navigate = useNavigate();

    return (
        <div>
            <body className="body">
                <header className="header">
                    <label htmlFor="">Inicio</label>
                    <div className="separador"></div>
                    <label htmlFor="">Tienda</label>
                    <div><img className="LogoPrincipal" src={LogoPrincipal} alt="LogoPrincipal"></img></div>
                    <div><i className="fas fa-user-alt colorIcono" onClick={goToIconCliente}></i></div>
                    <div><i className="fas fa-shopping-bag colorIcono"></i></div>
                    <div className="separador"></div>
                    <input type="text" placeholder="Buscar" />
                </header> 
                <div className="header2">
                    <a className="aHeader2" href="/">Camisetas</a>
                    <a className="aHeader2" href="/">Periféricos</a>
                    <a className="aHeader2" href="/">Extras</a>
                    <a className="aHeader2" href="/">Logotipos</a>
                </div>
            </body>
        </div>
    )
    /* FUNCION RUTAS */
    function goToIconCliente() {
        let ruta = "/login";
        navigate(ruta);
    }
}