import './Registro.css';
import icono from "../../assets/img/Isotipo.png"

export const Registro = () => {
    return(
        <div>
            <body class="body">
                <div class="containerPadre">
                    <div class="icono">
                        <img  class="tamañoIcono" src={icono} alt="icono" alt="icono"/>
                    </div>
                    <div class="inputs">
                        <h1 class="tituloCrearCuenta">Crear cuenta nueva</h1>
                        <input class="tamañoInput" type="text" placeholder="Nombre"/>
                        <input class="tamañoInput" type="text" placeholder="Apellido"/>
                        <input class="tamañoInput" type="email" placeholder="Correo Electronico"/>
                        <input class="tamañoInput" type="password" placeholder="Contraseña"/>
                        <div>
                            <input type="checkbox"/><label class="tamañoLabel">Acepto terminos y condiciones</label>
                        </div>
                        <button class="btnCrearCuenta">Crear cuenta</button>
                    </div>
                    <div class="separador"></div>
                    <div class="registrarse">
                    Registrate con:
                        <div>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-google-plus-g"></i>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}