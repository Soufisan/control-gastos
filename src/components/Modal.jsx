import { useState, useEffect } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import MensajeError from './MensajeError'

const Modal = ({
    setModal,
    animarModal,
    setAnimarModal,
    guardarGasto,
    gastoEditar,
    setGastoEditar
}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, [])

    const handleCerrarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 200);
    }
    const handleSubmit = e => {
        e.preventDefault()
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Debes rellenar todos los campos')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return
        }
        guardarGasto({ nombre, cantidad, categoria, id, fecha })
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt="Cerrar pestaña"
                    onClick={handleCerrarModal}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
            >
                <legend>
                    <p>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</p>
                </legend>


                {
                    mensaje &&
                    <MensajeError
                        tipo="error"
                    >{mensaje}
                    </MensajeError>
                }

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder='Añade el nombre del gasto'
                        autoComplete="off"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}

                    />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad del gasto</label>
                    <input
                        id="cantidad"
                        type="number"
                        placeholder='Añade la cantidad del gasto. Ejem: 1000 Euros'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}

                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoría</label>
                    <select
                        id="categoria"
                        type="text"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value=""> -- Seleccione -- </option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="ocio">Ocio</option>
                        <option value="varios">Varios gastos</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>

                    </select>
                </div>
                <input
                    type="submit"
                    value={gastoEditar.nombre ? 'Guardar cambio' : 'Añadir Gasto'}
                />
            </form>

        </div>
    )
}

export default Modal
