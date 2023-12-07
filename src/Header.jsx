import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <i className="fa fa-home"></i> Impactotenis
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link to="/youtube" className="nav-link">
              <i className="fa-brands fa-youtube"></i> Videos
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <i className="fa-solid fa-cart-shopping"></i> Tienda
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Ropa
                  </a>
                </li>
                <li>
                <Link to="/ecommerce" className="nav-link">
                <i className="fa-solid fa-baseball"></i> Accesorios
              </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Algo mas
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/juegos" className="nav-link">
                <i className="fa fa-gamepad"></i> Juegos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/estadisticas" className="nav-link">
              <i className="fa-solid fa-chart-line"></i> Estadisticas
              </Link>
            </li>
           
          </ul>

              <a
                className="nav-icon position-relative text-decoration-none"
                href="micarrito.html"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  0
                </span>
              </a>


          <form className="d-flex" role="search">
            <input
              className="form-control me-2 header_buscar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="header_boton header_buscar" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
