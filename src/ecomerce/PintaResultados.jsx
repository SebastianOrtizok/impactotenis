import { useState } from 'react';
import { FetchMl } from './FetchMl';
import { Popup } from './Popup';

function PintaResultados() {
  // Usa FetchMl como un componente y obtén los artículos
  const articulos = FetchMl();
  console.log(articulos);

  // Estado para controlar si mostrar o no el Popup
  const [showPopup, setShowPopup] = useState(false);
  // Estado para almacenar el ID del artículo seleccionado
  const [selectedArticulo, setSelectedArticulo] = useState(null);

  function HandelMouse(event) {
    const articulo = event.target.dataset.id;
    articulos.map((articuloSeleccionado) =>{
      if (articuloSeleccionado.id===articulo){
        const articuloEncontrado = articuloSeleccionado
        setSelectedArticulo(articuloEncontrado);
      }
    })

    // Actualiza el estado con el ID del artículo seleccionado
    // Muestra el Popup
    setShowPopup(true);
  }

  function handleClosePopup() {
    setShowPopup(false);
  }

  return (
    <div className="container ecommerce">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {articulos.map((articulo) => (
          <div key={articulo.id} className="col mb-4">
            <div className="card" style={{ width: '100%' }}>
              <div className='contenedorImage'>
                <img onMouseDown={HandelMouse}
                  src={articulo.thumbnail}
                  className="card-img-top"
                  alt="Descripción de la imagen"
                  data-id={articulo.id}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{articulo.title.slice(0, 60)}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the content.
                </p>
                <p className="card-text">${articulo.price}</p>
                <button onMouseDown={HandelMouse} className="btn btn-primary"
                data-id={articulo.id}>
                  Ampliar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Renderiza el Popup si showPopup es verdadero */}
      {showPopup && <Popup prop={selectedArticulo} onClose={handleClosePopup} />}
    </div>
  );
}

export default PintaResultados;
