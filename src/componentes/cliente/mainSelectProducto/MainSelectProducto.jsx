import './MainSelectProducto.css';
import React from 'react';
import java from '../../../assets/img/java.jpg'
import ReactLi from '../../../assets/img/ReactLi.png'


export const MainSelectProducto = () => {
    return(
        <>
        <main class="main">
                <div class="mainContainerPadre">
                    <div class="containerIzq">
                        <div class="containerIzqImgs">
                            <div><img class="containerIzqImgs3" src={java} alt="java" /></div>
                            <div><img class="containerIzqImgs3" src={java} alt="java" /></div>
                            <div><img class="containerIzqImgs3" src={java} alt="java" /></div>
                        </div>
                        <div><img class="containerIzqImgGrande" src={java} alt="java" /></div>
                    </div>

                    <div class="containerDer">
                        <div class="containerDer1">
                            <h3>Camiseta Azul</h3>
                            <h5>Talla</h5>
                            <div class="d-grid gap-2 d-md-block">
                                <button class="btn btn-secondary containerTallas" type="button" style={{background:'#d6d6d6'}}>S</button>
                                <button class="btn btn-secondary containerTallas" type="button" style={{background:'#d6d6d6'}}>M</button>
                                <button class="btn btn-secondary containerTallas" type="button" style={{background:'#d6d6d6'}}>L</button>
                                <button class="btn btn-secondary containerTallas" type="button" style={{background:'#d6d6d6'}}>XL</button>
                                <a href="#" className='containerTallas'>¿Cual es mi talla?</a>
                            </div>
                        </div>
                        <div class="containerDer2">
                            <h5>Color</h5>
                            <input type="color" />
                        </div>
                        <div class="containerDer3">
                            <h5>Logo</h5>
                            <div class="containerDerTodosLogos">
                                <div><img class="containerDerLogos" src={ReactLi} alt="ReactLi" /></div>
                                <div><img class="containerDerLogos" src={ReactLi} alt="ReactLi" /></div>
                                <div><img class="containerDerLogos" src={ReactLi} alt="ReactLi" /></div>
                                <div><img class="containerDerLogos" src={ReactLi} alt="ReactLi" /></div>
                                <div><img class="containerDerLogos" src={ReactLi} alt="ReactLi" /></div>
                            </div>
                            <br />
                            <button class="btn btn-secondary containerTallas" type="button" style={{background:'#d6d6d6'}}>Ingresa aquí tu logo</button>
                        </div>
                    </div>
                </div>
                <div class="d-grid gap-2 d-md-block">
                    <button class="btn btn-primary -xl" type="button" style={{background:'#155983'}}>Agregar al carrito</button>
                </div>
                {/* <!-- <button class="btnAgregarCarrito">Agregar al carrito</button> --> */}
            </main>
        </>
    )
}