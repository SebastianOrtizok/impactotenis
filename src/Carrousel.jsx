import foto5 from '/src/Carrousel/foto5.jpg';
import foto6 from '/src/Carrousel/foto6.jpg';
import foto7 from '/src/Carrousel/foto7.jpg';

export const Carrousel = () => {
    return (
<div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="8000">
    <ol className="carousel-indicators">
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="container ">
                <div className="row p-5">
                    <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img className="img-fluid" src={foto5} alt="Foto_Carrousel" />
                    </div>
                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                        <div className="text-align-center align-self-center">
                            <h1 className="h1 carrouseltext">Clases virtuales</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="container">
                <div className="row p-5">
                    <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img className="img-fluid" src={foto6} alt="Foto_Carrousel" />
                    </div>
                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                        <div className="text-align-center">
                            <h1 className="h1 carrouseltext">Tienda virtual</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="carousel-item">
            <div className="container">
                <div className="row p-5">
                    <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img className="img-fluid" src={foto7} alt="Foto_Carrousel" />
                    </div>
                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                        <div className="text-align-center">
                            <h1 className="h1 carrouseltext">Obtener resultados tangibles</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
        <i className="fas fa-chevron-left"></i>
    </a>
    <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
        <i className="fas fa-chevron-right"></i>
    </a>
</div>
    )
}

