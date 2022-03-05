import axios from 'axios'

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
}

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