import { useState, useEffect } from 'react'

const ControlPresupuesto = ({ gastazo, presupuesto }) => {
    const [disponible, setDisponible]  = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastazo.reduce(( total, gasto ) => gasto.catidad + total, 0)
        setGastado(totalGastado)
    }, [gastazo])


    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-ES', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2
        })
    }

    return (

        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Gráfica aquí</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span>{formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastada: </span>{formatearCantidad(gastado)}
                </p>

            </div>
        </div>


    )
}

export default ControlPresupuesto
