import axios, { Axios } from 'axios'
import React from 'react';

export default class servicioShopdev extends React.Component {
    getProductos() { }
    
}

/* PARA nuevo producto */
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



