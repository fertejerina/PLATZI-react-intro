import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Modal.css'

function Modal({ children }){
    return ReactDOM.createPortal(
        <div className="modalBackground">
            <div className="container-add">
            {children}
                <h2 className="title">Introduce aqui tu 'ToDo'</h2>
                <input className="input" placeholder='Ej: "Pasear al perro"'></input>
                <button className='button-add'>Agregar</button>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal };
