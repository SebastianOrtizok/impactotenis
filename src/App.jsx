import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Header } from "./Header";
import { Principal } from './Principal'
import { EcommerceIndex } from './ecomerce/EcommerceIndex'
import Ahorcado from "./Juegos/ahorcado";




function App() {

  return (
    <>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Principal />} />
					<Route path="/ecommerce" element={<EcommerceIndex />} />
					<Route path="/juegos" element={<Ahorcado/>} />
					{/* <Route path="/categoria" element={<Categoria />} />
					<Route path="/Catalog" element={<Catalog />} />
					<Route path="/buscar" element={<BuscarProductos />} />
					<Route path="/acces" element={<ObtenerAccesToken />} />
					<Route path="*" element={<NotFound />} />
					<Route index element={<Mercadolibreapi />} /> */}
				</Routes>
			</BrowserRouter>
    </>
  )
}

export default App
