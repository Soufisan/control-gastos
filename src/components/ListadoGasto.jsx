import React from 'react'
import Gasto from './Gasto'


const ListadoGasto = ({ gastazo, setGastoEditar }) => {


    return (
        <div className="listado-gastos contenedor">
            <h2>{gastazo.length ? 'Gastos' : 'No tienes gastos'}</h2>

            {gastazo.map(gastos => (
                <Gasto
                    key={gastos.id}
                    gastos={gastos}
                    setGastoEditar={setGastoEditar}
                />


            ))}
        </div>
    )
}

export default ListadoGasto
