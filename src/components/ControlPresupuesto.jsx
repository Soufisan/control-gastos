import React from 'react'

const ControlPresupuesto = ({ presupuesto }) => {


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
                    <span>Disponible: </span>00
                </p>
                <p>
                    <span>Gastada: </span>00
                </p>

            </div>
        </div>


    )
}

export default ControlPresupuesto
