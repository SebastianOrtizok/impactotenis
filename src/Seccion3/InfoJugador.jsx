import "./style_section3.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// ...

export const InfoJugador = ({ playerId, onClose }) => {
	const [infoJugador, setInfoJugador] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const url = `https://ultimate-tennis1.p.rapidapi.com/player_info/${playerId}`;
			const options = {
				method: "GET",
				headers: {
					"X-RapidAPI-Key":
						"f54b2a81dbmshbcc7d7a45a8cf74p1ab5c6jsn575020ac488a",
					"X-RapidAPI-Host": "ultimate-tennis1.p.rapidapi.com",
				},
			};

			try {
				const response = await fetch(url, options);
				const result = await response.json();
				setInfoJugador(result.player_data);
				console.log(result.player_data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [playerId]);

	return (
		<>
			<div className="infoJugador_section3">
				{isLoading && <p>Cargando...</p>}
				{!isLoading && infoJugador && (
					<>
						<h1>{infoJugador[0].Name}</h1>
						<table className="tabla_jugador">
							<tbody>
								<tr>
									<td className="font-weight-bold">Age:{infoJugador[0].Age}</td>
								</tr>
								<tr>
									<td className="font-weight-bold">
										F.Nacimiento:{infoJugador[0].Birthday}
									</td>
								</tr>
								<tr>
									<td className="font-weight-bold">
										Nacido en:{infoJugador[0].Birthplace}
									</td>
								</tr>
								<tr>
									<td className="font-weight-bold">
										Entrenador:{infoJugador[0].Coach}
									</td>
								</tr>
								<tr>
									<td className="font-weight-bold">
										Dinero ganado 2023:{infoJugador[0]["Prize money 2023"]}
									</td>
								</tr>
								<tr>
									<td className="font-weight-bold">
										Dinero acumulado:{infoJugador[0]["Prize money Career"]}
									</td>
								</tr>
								<tr>
									<td className="font-weight-bold">
										Ranking:{infoJugador[0].Rank}
									</td>
								</tr>
								<tr>
									<td className="font-weight-bold">
										Títulos:{infoJugador[0]["Titles Career"]}
									</td>
								</tr>
								<tr>
									<td className="font-weight-bold">
										Profesional desde:{infoJugador[0]["Year Turned Pro"]}
									</td>
								</tr>
								<tr>
									<td className="font-weight-bold">
										{infoJugador[0].instagram}
									</td>
								</tr>
								<tr>
									<td className="font-weight-bold">{infoJugador[0].twitter}</td>
								</tr>
								<tr>
									<td className="font-weight-bold">
										Peso:{infoJugador[0].weight}
									</td>
								</tr>
								<tr>
									<td className="font-weight-bold">
										Altura:{infoJugador[0].height}
									</td>
								</tr>
							</tbody>
						</table>
						<div className="ml-3">
							<div>
								<img src={infoJugador[0].Image} alt="Jugador" />
							</div>
						</div>
					</>
				)}
				<button className="info_jugador_btn" onClick={onClose}>
					Cerrar
				</button>
				{console.log(infoJugador)}
			</div>
		</>
	);
};

InfoJugador.propTypes = {
	playerId: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
};
export default InfoJugador;
