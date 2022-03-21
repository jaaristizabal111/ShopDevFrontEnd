import { saveNuevoProducto } from "../../../services/servicioShopdev";
import axios, { Axios } from 'axios'
import './MainAdminProductos.css';
import React, { useEffect } from "react";
import { useState } from "react";
import  angularLogo  from "../../../assets/img/AngularLogo.jpg"



export const MainAdminProductos = () => {

    const [listaProductos, setListaProductos] = useState([]);

    /* LO PRIMERO QUE SE VA A EJECUTAR */
    useEffect(() => {
        getProductos();  
    }, [])

    /*------------------------------------------------------------------------------------------------------------------------------*/

    /* LOGICA CONSUMO API NUEVO PRODUCTO */
    const [formValuesNuevoProducto, setFormValuesNuevoProducto] = useState({
        nombre: "",
        precio: "",
        cantidad: "",
        categoria: "",
        color: "",
        talla: "",
        descripcion: "",
        imagen: "",
    }
    );

    const actualizacionFormNuevoProducto = (value, campo) => {
        setFormValuesNuevoProducto({
            ...formValuesNuevoProducto,
            [campo]:value,
        })
    };

    const _enviarNuevoProducto = () => {
        saveNuevoProducto({...formValuesNuevoProducto});
    }

    /* LOGICA DE LISTAR PRODUCTOS ADMIN API */
    const getProductos = () => {
        axios.get("https://shopdevbackend.herokuapp.com/homeProductos")
        .then( data => {         
            setListaProductos(data.data)           
            console.log(listaProductos)            
        })
    }

    /*------------------------------------------------------------------------------------------------------------------------------*/

    /*modal nuevo producto para que se cree en la tabla con api*/
    const [modalValuesNuevoProducto, setModalValuesNuevoProducto] = useState({
        nombre:"",
        precio:"",
        cantidad:"",
        categoria:"",
        color:"",
        talla:"",
        descripcion:"",
        imagen:"",
    });
    
    const actualizacionModalNuevoProducto = (value, campo) => {
        setModalValuesNuevoProducto({
            ...modalValuesNuevoProducto,
            [campo]:value,
        })
    };

    const _enviarModalNuevoProducto = () => {
        saveNuevoProducto({...modalValuesNuevoProducto});
    }
    
    const agregarNuevoProducto = (producto) => {

        axios.post("https://shopdevbackend.herokuapp.com/modificarProducto", productosNuevos)
        .then(response => {
             console.log("hola");
        })

        var productosNuevos = {
            nombre: formValuesNuevoProducto.nombre,
            precio: formValuesNuevoProducto.precio,
            cantidad: formValuesNuevoProducto.cantidad,
            categoria: formValuesNuevoProducto.categoria,
            color: formValuesNuevoProducto.color,
            talla: formValuesNuevoProducto.talla,
            descripcion: formValuesNuevoProducto.descripcion,
            imagen: formValuesNuevoProducto.imagen,
        }
       listaProductos.push(productosNuevos)
       limpiarFormulario();
    }

    /*limpiar formulario */
    const limpiarFormulario = () => {
        setFormValuesNuevoProducto(
            {
                nombre: "",
                precio: "",
                cantidad: "",
                categoria: "",
                color: "",
                talla: "",
                descripcion: "",
                imagen: "",
            }
        );
    }

    /*------------------------------------------------------------------------------------------------------------------------------*/

    /* LOGICA DE ELIMINAR NUEVO PRODUCTO */
    const eliminarProducto = (producto) => {
        console.log(producto.codigo);
        axios.delete("https://shopdevbackend.herokuapp.com/eliminarProducto/"+producto.codigo)
        .then(respuesta =>{
        })
    }

    /*------------------------------------------------------------------------------------------------------------------------------*/

    /* LOGICA modificar PRODUCTO ADMIN */
    const modificarProducto = (producto) => {
        console.log(producto);
        /* axios.put("https://shopdevbackend.herokuapp.com/modificarProducto" +producto)
        .then(response =>{
            console.log(response);
        }
        ) */
    }







    /* LOGICA CREAR PRODUCTO ADMIN */

    /* const creacionNuevoProducto = () => {
        axios.post("https://shopdevbackend.herokuapp.com/modificarProducto", formValuesNuevoProducto)
        .then(response => {
            console.log("hola");
            

        })
    } */


























    return (
        <>
        <main>
            {/* CONTAINER DE ADMIN PRODUCTOS */}
                <div className='container'>
                    <div className='containerTitulo'>
                        <h2><i className="fa-solid fa-box-circle-check"></i> Mis Productos</h2>
                        <button type="button" class="btn btn-light" data-bs-toggle='modal' data-bs-target='#modal1'>Nuevo Producto</button>
                    </div>

                    {/* TABLA DE PRODUCTOS */}
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">IMAGEN</th>
                                <th scope="col">NOMBRE</th>
                                <th scope="col">CODIGO</th>
                                <th scope="col">PRECIO</th>
                                <th scope="col">INVENTARIO</th>
                                <th scope="col">ACCIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                             {listaProductos.map( producto => (
                                
                            <tr>
                                <th scope="row" ><img className="imgListaProducto" src={angularLogo} alt="angularLogo" /></th>
                                <td>{producto.nombre}</td>
                                <td>{producto.codigo}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.cantidad}</td>
                                <td>
                                    <i class="fa-solid fa-trash-can" onClick={()=>eliminarProducto(producto)}></i>                                   
                                    <i class="fa-solid fa-pencil" onClick={()=>modificarProducto(producto)}
                                    data-bs-toggle='modal' data-bs-target='#modal1'></i>
                                </td>
                            </tr>
                                
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* MODAL NUEVO PRODUCTO */}
                <div className="modal" tabindex="-1" id='modal1'>
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header"> 
                                        <h5 class="modal-title">Nuevo Producto</h5>  
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="modal-title">Informacion General</h5>
                                    </div>

                                    <form action="">
                                    <div className='containerInfNombId'>
                                        <div class="modal-body">
                                            <p>Nombre</p>
                                            <input type="text" name='nombre' value={formValuesNuevoProducto.nombre} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "nombre")} />
                                        </div>
                                        <div class="modal-body">
                                            <p>Precio</p>
                                            <input type="text" name='precio' value={formValuesNuevoProducto.precio} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "precio")}/>
                                        </div>
                                    </div>
                                    <div className='containerInfPrecCategCanti'>
                                         
                                        <div class="modal-body">
                                            <p>Cantidad</p>
                                             <input type="text" name='cantidad' value={formValuesNuevoProducto.cantidad} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "cantidad")}/>
                                        </div>
                                        <div class="modal-body">
                                            <p>Categoria</p>
                                            <select name="categoria" value={formValuesNuevoProducto.categoria} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "categoria")}>
                                            <option value="camisetas">Camisetas</option>
                                            <option value="vasos" selected>Vasos</option>
                                            <option value="buzos">Buzos</option>
                                            <option value="Gorra">Gorra</option>
                                            <option value="Termos">Termos</option>
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
                                            <select name="color" value={formValuesNuevoProducto.color} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "color")}>
                                            <option value="Blanco">Blanco</option>
                                            <option value="Ngergo" selected>Negro</option>
                                            <option value="azul">Azul</option>
                                            <option value="rojo">Rojo</option>
                                            <option value="verde">Verde</option>
                                            </select>
                                    </div> 
                                        <div class="modal-body">
                                                <p>Talla</p>
                                                <select name="talla" value={formValuesNuevoProducto.talla} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "talla")}>
                                                <option value="S">S</option>
                                                <option value="M" selected>M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>                       
                                                </select>
                                        </div>  
                                    </div>
                                    {/* DESCRIPCION */}
                                    <div class="modal-body">
                                            <p>Descripcion</p>
                                            <textarea name="descripcion" id="" cols="30" rows="10" value={formValuesNuevoProducto.descripcion} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "descripcion")} style={{height: "6em"}}></textarea>
                                    </div> 
                                    <div class="modal-body">
                                        <h5 class="modal-title">Imagenes del producto</h5>
                                        <input type="file" accept="image/jpg, image/png" id='miArchivo' name='imagen' /* value={formValuesNuevoProducto} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "imagen")} *//>
                                        
                                    </div>
                                    </form>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="button" class="btn btn-primary" onClick={()=>agregarNuevoProducto()}>Crear</button>
                                    </div>
                                </div>
                            </div>
                </div>
        </main>
        </>
    )
}