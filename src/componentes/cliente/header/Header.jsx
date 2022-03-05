import React from 'react';
import './Header.css';
import LogoPrincipal from '../../../assets/img/LogoPrincipal.png';

export const Header = () => {
    return (
        <div>
            <body className="body">
                <header className="header">
                    <h2 className="estiloLetraHeader">Inicio</h2>
                    <div className="separador"></div>
                    <h2 className="estiloLetraHeader">Tienda</h2>
                    <div><img className="LogoPrincipal" src={LogoPrincipal} alt="LogoPrincipal"></img></div>
                    <div><i className="fas fa-user-alt colorIcono"></i></div>
                    <div><i className="fas fa-shopping-bag colorIcono"></i></div>
                    <div className="separador"></div>
                    <input type="text" placeholder="Buscar" />
                </header> 
                <div className="header2">
                    <a className="aHeader2" href="#">Camisetas</a>
                    <a className="aHeader2" href="#">Periféricos</a>
                    <a className="aHeader2" href="#">Extras</a>
                    <a className="aHeader2" href="#">Logotipos</a>
                </div>
            </body>
        </div>
    )
}