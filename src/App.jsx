import { useState } from 'react'
import Header from './components/Header'
import ListadoGasto from './components/ListadoGasto'
import Modal from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGastos from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastazo, setGastazo] = useState([])



  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 200);

  }

  const guardarGasto = gasto => {
    gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastazo([...gastazo, gasto])

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 200);
  }

  return (
    <div>
      <Header
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
        />
      }



    </div>
  )
}

export default App
