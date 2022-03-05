import React from 'react';
import './ContenidoMisProductosAdmin.css';
import { BarraLateral } from '../../administrador/barraLateral/BarraLateral';
import { HeaderAdmin } from '../../administrador/headerAdmin/HeaderAdmin';

export const ContenidoMisProductosAdmin = () => {
    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <BarraLateral></BarraLateral>
            <main>
                <div className='container'>
                    <div className='containerTitulo'>
                        <h1>PRODUCTOS</h1>

                        {/* MODAL */}
                        <div class="modal" tabindex="-1" id='modal1'>
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Nuevo Producto</h5>  
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="modal-title">Informacion General</h5>
                                    </div>

                                    <div className='containerInfNombId'>
                                        <div class="modal-body">
                                            <p>Nombre</p>
                                            <input type="text" />
                                        </div>
                                        <div class="modal-body">
                                            <p>Precio</p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className='containerInfPrecCategCanti'>
                                         
                                        <div class="modal-body">
                                            <p>Cantidad</p>
                                            <input type="text" />
                                        </div>
                                        <div class="modal-body">
                                            <p>Categoria</p>
                                            <select name="select">
                                            <option value="value1">Camisetas</option>
                                            <option value="value2" selected>Vasos</option>
                                            <option value="value3">Buzos</option>
                                            <option value="value3">Gorra</option>
                                            <option value="value3">Termos</option>
                                            </select>
                                        </div> 
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="modal-title">Atributos del producto</h5>
                                    </div>
                                    <div class="modal-body containerInfNombId">
                                        {/* MODAL TALLA */}
                                        <div class="modal-body">
                                            <p>Color</p>
                                            <select name="select">
                                            <option value="value1">Blanco</option>
                                            <option value="value2" selected>Negro</option>
                                            <option value="value3">Azul</option>
                                            <option value="value3">Rojo</option>
                                            <option value="value3">Verde</option>
                                            </select>
                                    </div> 
                                        <div class="modal-body">
                                                <p>Talla</p>
                                                <select name="select">
                                                <option value="value1">S</option>
                                                <option value="value2" selected>M</option>
                                                <option value="value3">L</option>
                                                <option value="value3">XL</option>
                                                
                                                </select>
                                        </div>  
                                    </div>
                                    {/* DESCRIPCION */}
                                    <div class="modal-body">
                                            <p>Descripcion</p>
                                            <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </div> 
                                    <div class="modal-body">
                                        <h5 class="modal-title">Imagenes del producto</h5>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="modal-title">Tallaje</h5>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="button" class="btn btn-primary">Crear</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="button" class="btn btn-light" data-bs-toggle='modal' data-bs-target='#modal1'>Nuevo Producto</button>
                    </div>


                    {/* */}
                    <h2><i class="fab fa-twitter"></i>Mis Productos</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">IMAGEN</th>
                                <th scope="col">NOMBRE</th>
                                <th scope="col">CODIGO</th>
                                <th scope="col">PRECIO</th>
                                <th scope="col">INVENTARIO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Ximg</th>
                                <td>Gorra Java</td>
                                <td>001</td>
                                <td>$15.000</td>
                                <td>20 unds</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

        </>
    )
}