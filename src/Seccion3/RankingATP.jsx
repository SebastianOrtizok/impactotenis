import "./style_section3.css";
import { useEffect, useState } from "react";
import { InfoJugador } from "./InfoJugador";

const RannkingATP = () => {
	const url = "https://impactotenis.onrender.com/obtenerDatosAPI";

	// const opciones = {
	// 	method: "GET",
	// 	headers: {
	// 		"X-RapidAPI-Key": "f54b2a81dbmshbcc7d7a45a8cf74p1ab5c6jsn575020ac488a",
	// 		"X-RapidAPI-Host": "ultimate-tennis1.p.rapidapi.com",
	// 	},
	// };
	const [data, setData] = useState([]);
	const [selectedPlayerId, setSelectedPlayerId] = useState(null);

	useEffect(() => {
		const obtenerDatos = async () => {
			try {
				const respuesta = await fetch(url);
				const resultado = await respuesta.json();
				setData(resultado);
				console.log(resultado);
			} catch (error) {
				console.error("Error al obtener datos:", error);
				console.log("Detalles dela respuesta:", error.response);
			}
		};

		obtenerDatos();

		// Nota: Si utilizas dependencias en useEffect, agrégales a este arreglo para evitar problemas de rendimiento o comportamiento inesperado.
	}, [url]);

	const handlePlayerClick = (playerId) => {
		setSelectedPlayerId(playerId);
		console.log(selectedPlayerId);
	};

	return (
		<div className="section_3">
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>Ranking</th>
						<th>Nombre</th>
						<th>Puntos</th>
						<th>Edad</th>
					</tr>
				</thead>
				<tbody>
					{data.map((ranking, index) => (
						<tr
							key={index}
							onClick={() => handlePlayerClick(ranking.id)}
							style={{ cursor: "pointer" }}
						>
							<td>{ranking.Rank}</td>
							<td>{ranking.Name}</td>
							<td>{ranking.Points}</td>
							<td>{ranking.Age}</td>
						</tr>
					))}
				</tbody>
			</table>
			{selectedPlayerId && (
				<InfoJugador
					playerId={selectedPlayerId}
					onClose={() => setSelectedPlayerId(null)}
				/>
			)}
		</div>
	);
};

export default RannkingATP;
