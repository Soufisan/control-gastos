import { useState, useEffect } from 'react'
/* import { formatearCantidad } from '../helpers/index.js' */
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import NuevoPresupuesto from './NuevoPresupuesto'

const ControlPresupuesto = ({ gastazo, presupuesto }) => {
    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastazo.reduce((total, gasto) => gasto.catidad + total, 0)
        const totalDisponible = presupuesto - totalGastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)
        console.log(nuevoPorcentaje)
        setDisponible(totalDisponible)
        setGastado(totalGastado)
    }, [gastazo])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-ES', {
            style: 'currency',
            currency: 'EUR'
        })
    }


    return (

        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    value={presupuesto}
                />
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
