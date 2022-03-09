import axios, { Axios } from 'axios'
import React from 'react';

export default class servicioShopdev extends React.Component {
    getProductos(){
        
    }
}


/* PARA LOGIN */

export async function saveLogin(loginData) {
    var response;
    try {
        console.log(loginData);
        const formData = new FormData()

        formData.append('correo', loginData.correo)
        formData.append('contraseña', loginData.contraseña)

        response = await axios({
            url: `https://shopdevbackend.herokuapp.com/login`,
            method: 'POST',
            data: formData,
        })

        

        return response
    } catch (e) {
        console.log(e)
    }
    console.log(response)
}

/* PARA REGISTRO */
export async function saveRegistro(registroData) {
    var response;
    try {
        console.log(registroData);
        const formData = new FormData()

        formData.append('cedula', registroData.cedula)
        formData.append('nombres', registroData.nombres)
        formData.append('telefono', registroData.telefono)
        formData.append('departamento', registroData.departamento)
        formData.append('ciudad', registroData.ciudad)
        formData.append('direccion', registroData.direccion)
        formData.append('correo', registroData.correo)
        formData.append('contraseña', registroData.contraseña)
        formData.append('rol', registroData.rol)

        response = await axios({
            url: `https://shopdevbackend.herokuapp.com/registro`,
            method: 'POST',
            data: formData,
        })

        return response
    } catch (e) {
        console.log(e)
    }
}

/* PARA LOGIN */
export async function saveNuevoProducto(registroData) {
    var response;
    try {
        console.log(registroData);
        const formData = new FormData()

        formData.append('nombre', registroData.nombre)
        formData.append('precio', registroData.precio)
        formData.append('cantidad', registroData.cantidad)
        formData.append('categoria', registroData.categoria)
        formData.append('color', registroData.color)
        formData.append('talla', registroData.talla)
        formData.append('descripcion', registroData.descripcion)
        formData.append('imagen', registroData.imagen)
        formData.append('tallaje', registroData.tallaje)

        response = await axios({
            url: `https://shopdevbackend.herokuapp.com/nuevoProducto`,
            method: 'POST',
            data: formData,
        })

        return response
    } catch (e) {
        console.log(e)
    }
}

/* PARA eliminar nuevo producto */
export async function deleteNuevoProducto(eliminarData) {
    var response;
    try {
        console.log(eliminarData);
        const formData = new FormData()

        formData.append('eliminar', eliminarData.eliminar)

        response = await axios({
            url: `https://shopdevbackend.herokuapp.com/nuevoProducto`,
            method: '',
            data: formData,
        })

        return response
    } catch (e) {
        console.log(e)
    }
}













/* export async function saveListarProductosAdmin(listarProductosData) {
    var response;
    try {
        console.log(listarProductosData);
        const formData = new FormData()
        

        response = await axios({
            url: `https://shopdevbackend.herokuapp.com/homeProductos`,
            method: 'GET',
            data: formData,
        })

        return response
    } catch (e) {
        console.log(e)
    }
} */





















