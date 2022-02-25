import './Login.css';
import icono from "../../assets/img/Isotipo.png"


export const Login = () => {
    return(
        <div>
            <body className="body">
                <div className="containerPadre">
                    <div className="icono">
                        <img className="tamañoIcono" src={icono} alt="icono"></img>
                    </div>
                    <div className="inputs">
                        <h1 className="tituloCrearCuenta">Iniciar Sesión</h1>
                        <input className="tamañoInput" type="email" placeholder="Correo Electrónico"/>
                        <input className="tamañoInput" type="password" placeholder="Contraseña"/>
                        <button className="btnCrearCuenta">Ingresar</button>
                        <a className="enlaceContraseña" href="#">Olvidaste tu contraseña</a>
                        <a className="enlaceSoyNuevo" href="#">Soy nuevo</a>
                    </div>
                </div>
            </body>
        </div>
    )
}