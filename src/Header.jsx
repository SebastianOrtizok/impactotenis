import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/">
					<li>
						<i className="fa fa-home"></i> Impactotenis
					</li>
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
					<ul
						className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
						style={{ "--bs-scroll-height": "100px" }}
					>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Cursos
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Tienda
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="#">
										Ropa
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Accesorios
									</a>
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
            <Link to="/juegos">
					<li>
					<i className="fa fa-gamepad"></i> Juegos
					</li>
				</Link>
				</li>
						<li className="nav-item">
							<a
								className="nav-icon position-relative text-decoration-none"
								href="micarrito.html"
							>
								<i className="fa-solid fa-cart-shopping"></i>
								<span
									className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"
									id="estadoCarrito"
								>
									0
								</span>
							</a>
						</li>
					</ul>

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
