import React, { useState } from 'react';

export const Popup = ({ prop, onClose }) => {
  console.log(prop);

  function handleClose() {
    // Llama a la función onClose para cerrar la ventana emergente
    onClose();
  }

  return (
    <div className="popup-container">
      <div className="popup-content">
        <div key={prop.id} className="col mb-4">
          <div className="card" style={{ width: '100%' }}>
            <div className='contenedorImage'>
              <img
                src={prop.thumbnail}
                className="card-img-top"
                alt="Descripción de la imagen"
                data-id={prop.id}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{prop.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the content.
              </p>
              <p className="card-text">${prop.price}</p>
              <button onClick={handleClose} className="btn btn-primary">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
