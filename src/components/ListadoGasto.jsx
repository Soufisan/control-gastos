import React from 'react'
import Gasto from './Gasto'


const ListadoGasto = ({ gastazo }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>{gastazo.length ? 'Gastos' : 'No tienes gastos'}</h2>
            {gastazo.map((gasto) => {
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                />
            })}
        </div>
    )
}

export default ListadoGasto
