import foto1 from '/src/Carrousel/foto1.jpg';
import foto2 from '/src/Carrousel/foto2.jpg';
import foto3 from '/src/Carrousel/foto3.jpg';

export const Carrousel = () => {
    return (
<div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
    <ol className="carousel-indicators">
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="container">
                <div className="row p-5">
                    <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img className="img-fluid" src={foto1} alt="Foto_Carrousel" />
                    </div>
                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                        <div className="text-align-left align-self-center">
                            <h1 className="h1 text-success"><b>Diseño</b>Impactante</h1>
                            <h3 className="h2">Potencia tu negocio con eCommerce</h3>
                            <p>
                                  Aquí destacamos el poder del diseño para contar una historia única. Con elementos visuales cautivadores y una estética moderna, hacemos que tu sitio web sea una verdadera obra de arte que refleje la identidad de tu marca y atraiga a tu audiencia. <a rel="sponsored" className="text-success" href="https://javascriptsolutions.000webhostapp.com/" >Diseños predefinidos</a> imagenes impactantes de sus productos
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="container">
                <div className="row p-5">
                    <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img className="img-fluid" src={foto2} alt="Foto_Carrousel" />
                    </div>
                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                        <div className="text-align-left">
                            <h1 className="h1">Funcionalidad sin Igual</h1>
                            <h3 className="h2">Integramos tu tienda con Mercado LIbre</h3>
                            <p>
                                Centralizá todo desde un mismo lugar 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="carousel-item">
            <div className="container">
                <div className="row p-5">
                    <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img className="img-fluid" src={foto3} alt="Foto_Carrousel" />
                    </div>
                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                        <div className="text-align-left">
                            <h1 className="h1">Obtener resultados tangibles</h1>
                            <h3 className="h2">Con nuestros diseños personalizados </h3>
                            <p>
                                Ya sea que estés buscando lanzar un nuevo sitio web o revitalizar uno existente. Trabajemos juntos para dar vida a tu visión y hacer que tu presencia en línea sea un éxito rotundo.
                                
                                ¡Contáctanos hoy mismo y comencemos a transformar tu presencia en línea con nuestro diseño web innovador y de vanguardia!
                            </p>
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

