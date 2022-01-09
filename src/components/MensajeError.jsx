import React from 'react'

const MensajeError = ({ children, tipo }) => {
    return (
        <div className={`alerta ${tipo}`}>
            {children}
        </div>
    )
}

export default MensajeError
