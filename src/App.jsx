import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Header } from "./Header";
import { Principal } from './Principal'
import { EcommerceIndex } from './ecomerce/EcommerceIndex'
import Ahorcado from "./Juegos/Ahorcado";
import Youtube from "./Seccion2/Youtube"
import { Seccion3 } from "./Seccion3/Seccion3";
import RannkingATP from "./Seccion3/RankingATP";
import Torneos from "./Seccion3/Torneos";





function App() {

  return (
    <>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Principal />} />
					<Route path="/ecommerce" element={<EcommerceIndex />} />
					<Route path="/juegos" element={<Ahorcado/>} />
					<Route path="/estadisticas" element={<Seccion3/>} />
					<Route path="/ranking" element={<RannkingATP/>} /> 
					<Route path="/torneos" element={<Torneos/>} /> 
					<Route path="/youtube" element={<Youtube />} />
					{/* <Route path="/buscar" element={<BuscarProductos />} />
					<Route path="/acces" element={<ObtenerAccesToken />} />
					<Route path="*" element={<NotFound />} />
					<Route index element={<Mercadolibreapi />} /> */}
				</Routes>
			</BrowserRouter>
    </>
  )
}

export default App
