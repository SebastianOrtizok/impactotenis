import { useEffect, useState } from "react";
import InfoJugador from "./InfoJugador";

const RannkingATP = () => {
	const url = "https://ultimate-tennis1.p.rapidapi.com/live_leaderboard/50";

	const opciones = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "9457443555msh10aa92ecf1a0a69p1b90e6jsnff11b312d0b4",
			"X-RapidAPI-Host": "ultimate-tennis1.p.rapidapi.com",
		},
	};
	const [data, setData] = useState([]);
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

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

    const handlePlayerClick = (playerId) => {
        setSelectedPlayerId(playerId);
        console.log(selectedPlayerId)
      };

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
              <tr key={index} onClick={() => handlePlayerClick(ranking.id)} style={{ cursor: "pointer" }}>
                <td>{ranking.Rank}</td>
                <td>{ranking.Name}</td>
                <td>{ranking.Points}</td>
                <td>{ranking.Age}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedPlayerId && (
          <InfoJugador playerId={selectedPlayerId} onClose={() => setSelectedPlayerId(null)} />
        )}
      </div>
	);
};

export default RannkingATP;
