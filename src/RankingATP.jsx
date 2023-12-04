import { useEffect, useState } from "react";

const RannkingATP = () => {
	const url = "https://ultimate-tennis1.p.rapidapi.com/live_leaderboard/50";

	const opciones = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "dd0c91a586msh64632dc97c932c3p1d3fa5jsn04f03edc4829",
			"X-RapidAPI-Host": "ultimate-tennis1.p.rapidapi.com",
		},
	};
	const [data, setData] = useState([]);

	useEffect(() => {
		const obtenerDatos = async () => {
			try {
				const respuesta = await fetch(url, opciones);
				const resultado = await respuesta.json();
				setData(resultado.data.slice(0, 10));
				console.log(resultado.data);
			} catch (error) {
				console.error(error);
			}
		};

		obtenerDatos();

		// Nota: Si utilizas dependencias en useEffect, agrégales a este arreglo para evitar problemas de rendimiento o comportamiento inesperado.
	}, []);

	return (
		<div className="section_3">
			<table className="table table-striped table-hover">
				<thead>
					<th>Ranking</th>
					<th>Nombre</th>
					<th>Puntos</th>
					<th>Edad</th>
				</thead>
				<tbody>
                {data.map((ranking, index) => (
						<>
							<div key={index} />
							<tr>
								<td>
                                {ranking.Rank}
                                </td>
                                <td>
                                {ranking.Name}
                                </td>
                                <td>
                                {ranking.Points}
                                </td>
                                <td>
                                {ranking.Age}
                                </td>
                                
							</tr>
						</>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default RannkingATP;
