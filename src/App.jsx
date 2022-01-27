import { object } from 'prop-types'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGasto from './components/ListadoGasto'
import Modal from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGastos from './img/nuevo-gasto.svg'

function App() {
  const [gastazo, setGastazo] = useState([])
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 200);
    }
  }, [gastoEditar])



  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 200);

  }

  const guardarGasto = gastos => {
    if (gastos.id) {
      const gastoActualizado = gastazo.map(gastoState => gastoState.id === gastos.id ? gastos : gastoState)
      setGastazo(gastoActualizado)
      setGastoEditar({})
    } else {
      gastos.id = generarId()
      gastos.fecha = Date.now()
      setGastazo([...gastazo, gastos])
    }
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 200);
  }

  const eliminarGasto = id => {
    const gastosActualizado = gastazo.filter(gasto => gasto.id !== id)
    setGastazo(gastosActualizado)
  }



  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastazo={gastazo}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}

      />
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGasto
              gastazo={gastazo}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGastos}
              alt="Icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal &&
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      }



    </div>
  )
}

export default App
