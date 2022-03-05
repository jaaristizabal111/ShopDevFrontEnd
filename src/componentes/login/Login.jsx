import './Login.css';
import React from 'react';
import { useState } from 'react';
import { saveLogin } from '../../services/apirest'

export const Login = () => {
    const [formValuesLogin, setFormValuesLogin] = useState({
            correo: '',
            contraseña: '',
        });
    
    const actualizacionForm = (value, campo) =>{
        setFormValuesLogin({
            ...formValuesLogin,
            [campo]:value,
        })
    }
    
    const _handleSubmit = (event) => {
        event.preventDefault()
        handleSubmit({...formValuesLogin})
    }

    const handleSubmit = (data) => {
        saveLogin(data)
    }
    
        return(
            <React.Fragment> {/* Que significa */}
            <div className="fondo">
            <div className="div-aplication">
                {/*  <h2 style={{ color: "white" }}>Aplicacion <br> OLSoftware <br></h2> */}
                <p style={{ color: "white" }}>Prueba practica Front-end </p>
            </div>
            <div className="div-login p-5">
                <div className="div-login-h1 mb-5">
                    <h4>Inicio de sesion</h4>
                </div>
                <div>
                    <div className="input-group ">
                        <input type="text" className="form-control" placeholder="Usuario" 
                            aria-describedby="basic-addon1" style={{ borderRadius: "0", height: "4em", width: "24em" }} />
                    </div>
                    <div className="input-group" style={{ boxShadow: "teal" }}>
                        <input type="text" className="form-control" placeholder="Contraseña" 
                            aria-describedby="basic-addon1" style={{ borderRadius: "0", boxShadow: "teal", height: "4em", width: "24em" }} />
                    </div>
                </div>
                <div>
                    <button type="button" className="mt-5 btn btn-primary btn-lg" style={{ width: "-webkitFillAvailable 19em" }}>Iniciar sesion
                    </button>
                </div>
            </div>
        </div>

























                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-offset-5 col-md-4 text-center">
                            <div className="form-login">
                                <h4>Iniciar sesión</h4>
                                <br /><br />
                                <form>
                                <input type="text" id="userName" className="form-control input-sm chat-input" name='correo' value={formValuesLogin.correo} onChange={({target}) => actualizacionForm(target.value, 'correo')} placeholder="Usuario"/>
                                <br /><br />
                                <input type="password" id="userPassword" className="form-control input-sm chat-input" name='contraseña' value={formValuesLogin.contraseña} onChange={({target}) => actualizacionForm(target.value, 'contraseña')} placeholder="Contraseña"/>
                                <br /><br />
                                </form>
                                <div className="wrapper">
                                        <span className="group-btn">
                                        <button type='button' className="btn btn-danger btn-md"  onClick={ _handleSubmit }> Ingresar <i className="fa fa-sign-in"></i></button>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/>
                <div className="footer text-white text-center">
                    <p>© 2022 Unique Login Form. All rights reserved | Design by <a href="https://www.google.com/">ShopDev</a></p>
                </div>  */}
            </React.Fragment>
        )
}