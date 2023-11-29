import { FetchMl } from './FetchMl';

function PintaResultados() {
  // Usa FetchMl como un componente y obtén los artículos
  const articulos = FetchMl();
console.log(articulos);

function HandelMouse(event){
   console.log("Funciona puto")
}

  return (
    <div className="container ecommerce">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {articulos.map((articulo) => (
          <div key={articulo.id} className="col mb-4">
            <div className="card" style={{ width: '100%' }}>
              <img onMouseOver={HandelMouse}
                src={articulo.thumbnail}
                className="card-img-top"
                alt="Descripción de la imagen"
                data-id={articulo.id}
                style={{ width: imagenSize }} 
              />
              <div className="card-body">
                <h5 className="card-title">{articulo.title.slice(0,60)}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the content.
                </p>
                <p className="card-text">${articulo.price}</p>
                <a href="#" className="btn btn-primary">
                  Ampliar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PintaResultados;
