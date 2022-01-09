export const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const random_2 = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return random + fecha + random_2
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'longh',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', opciones)
}