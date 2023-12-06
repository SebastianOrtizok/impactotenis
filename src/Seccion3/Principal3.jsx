import './style_section3.css';
import djokovic from './djokovic_full_ao19.png';
import alcaraz from './alcaraz-full-2022-may.png';
import medvedev from './medvedev-full-2022-may.png';
import australia from './australia.jpg';
import rolandGarros from './rolandGarros.jpg';
import wimbledon from './wimbledon.webp';
import usOpen from "./usopen.jpg"
import estadisticas from "./estadisticas.jpg"
import Atropos from 'atropos/react';

export const Principal3 = () => {
  return (
    <div className="section3_background">
      <h1 className="h1_section3">Informacion actualizada</h1>
      <section id="ranking">
        <h2 className="h2_section3">Ranking de Jugadores</h2>
        <p className="section3">
          Los mejores jugadores de tenis según el ranking actualizado:
        </p>
        <div id="jugadores">
          <img className="img_section3" src={djokovic} alt="Imagen de Novak Djokovic" />
          <img className="img_section3" src={alcaraz} alt="Imagen de Alcaraz" />
          <img className="img_section3" src={medvedev} alt="Imagen de Medvedev" />
        </div>
      </section>

      <section id="torneos">
  <h2 className="h2_section3">Torneos Recientes</h2>
  <p className="p_section3">Resumen de todos los torneos:</p>
  <div className='container_torneos_section3'>
    <div className="card mx-2 mb-2" style={{ width: '18rem' }}>
      <img src={rolandGarros} className="card-img-top" alt="Roland Garros" />
      <div className="card-body card-body_section3">
        <h5 className="card-title">Roland Garros</h5>
        <p className="card-text">
          Jugado en las canchas de arcilla de París, Roland Garros es conocido por
          su superficie lenta y desafiante. Es el Grand Slam de tierra batida.
        </p>
        <a href="#" className="btn btn-primary">
          Ir a Torneos
        </a>
      </div>
    </div>

    <div className="card mx-2 mb-2" style={{ width: '18rem' }}>
      <img src={australia} className="card-img-top" alt="Abierto de Australia" />
      <div className="card-body card-body_section3">
        <h5 className="card-title">Abierto de Australia</h5>
        <p className="card-text">
          El Abierto de Australia es el primer Grand Slam del año, celebrado en Melbourne Park. Se destaca por sus intensas condiciones de calor y su superficie rápida.
        </p>
        <a href="#" className="btn btn-primary">
          Ir a Torneos
        </a>
      </div>
    </div>

    <div className="card mx-2 mb-2" style={{ width: '18rem' }}>
      <img src={wimbledon} className="card-img-top" alt="Wimbledon" />
      <div className="card-body card-body_section3">
        <h5 className="card-title">Wimbledon</h5>
        <p className="card-text">
          Celebrado en Londres, Wimbledon es el torneo más antiguo del mundo. Se juega en césped y es famoso por su tradición y el distintivo color verde de las canchas.
        </p>
        <a href="#" className="btn btn-primary">
          Ir a Torneos
        </a>
      </div>
    </div>

    <div className="card mx-2 mb-2" style={{ width: '18rem' }}>
      <img src={usOpen} className="card-img-top" alt="US Open" />
      <div className="card-body card-body_section3">
        <h5 className="card-title">US Open</h5>
        <p className="card-text">
          El Abierto de Estados Unidos se celebra en Nueva York y cierra la temporada de Grand Slam. Se juega en canchas duras y es conocido por su ambiente vibrante y nocturno.
        </p>
        <a href="#" className="btn btn-primary">
          Ir a Torneos
        </a>
      </div>
    </div>
  </div>
</section>


      <section>
      <Atropos  
			activeOffset={10}
        shadowScale={20}>
        <h2 className="h2_section3">Jugadore destacado</h2>
        <img className="img_jugadorDestacado_section3" data-atropos-offset="3" src={djokovic} alt="Imagen de Novak Djokovic" />
        </Atropos>
      </section>

      <section id="estadisticas">
        <h2 className="h2_section3">Estadísticas Generales</h2>
        <ul className="section3">
          <li>Total de títulos de Grand Slam ganados</li>
          <li>Cantidad de aces</li>
        </ul>
        <img className="img-fluid" data-atropos-offset="10" src={estadisticas} alt="Estadisticas" />
      </section>
    </div>
  );
};

