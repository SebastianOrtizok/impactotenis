import { useEffect, useState } from "react";

function InfoJugador() {
	const [playerInfo, setPlayerInfo] = useState(null);
	const [player, setPlayer] = useState("Carlos Alcaraz");

	useEffect(() => {
		const fetchData = async () => {
			const url = `https://tennisprodata1.p.rapidapi.com/players/${encodeURIComponent(
				player
			)}`;
			const options = {
				method: "GET",
				headers: {
					"X-RapidAPI-Key":
						"dd0c91a586msh64632dc97c932c3p1d3fa5jsn04f03edc4829",
					"X-RapidAPI-Host": "tennisprodata1.p.rapidapi.com",
				},
			};

			try {
				const response = await fetch(url, options);

				if (!response.ok) {
					throw new Error(`Error: ${response.status} - ${response.statusText}`);
				}

				const result = await response.json();
				setPlayerInfo(result);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [player]);

	const handlePlayerChange = (event) => {
		setPlayer(event.target.value)
	};

	return (
		<>
			<label htmlFor="jugadores infoJugador_section3">
				<h1>Selecciona un jugador:</h1>
			</label>
			<select id="jugadores" name="jugador" onChange={handlePlayerChange}>
				<option value="Carlos Alcaraz">Carlos Alcaraz</option>
				<option value="Novak Djokovic">Novak Djokovic</option>
				<option value="Daniil Medvedev">Daniil Medvedev</option>
				<option	value="Jannik Sinner">Jannik Sinner</option>
        <option	value="Andrey Rublev">Andrey Rublev</option>
				<option	value="Stefanos Tsitsipas">Stefanos Tsitsipas</option>
				<option value="Alexander Zverev">Alexander Zverev</option>
				<option	value="Holger Rune">Holger Rune</option>
        <option	value="Hubert Hurkacz">Hubert Hurkacz</option>
				<option value="Taylor Fritz">Taylor Fritz</option>
			</select>

			<div className="infoJugador_section3">
				{playerInfo && (
					<div>
						<h1>{playerInfo.bio[0].player_name}</h1>
						<p>Age: {playerInfo.bio[0].age} F.Nacimiento:{playerInfo.bio[0].dob}</p>
						<p>Turned Pro: {playerInfo.bio[0].turned_pro}</p>
						<p>Peso: {playerInfo.bio[0].weight}Altura: {playerInfo.bio[0].height}</p>

						<p>Lugar de nacimiento: {playerInfo.bio[0].birthplace}</p>
						<p>Plays: {playerInfo.bio[0].plays}</p>
						<p>Entrenador: {playerInfo.bio[0].coach}</p>

						<h3>Current Stats</h3>
						<p>Singles Rank: {playerInfo.current[0].singles_rank}</p>
						<p>Doubles Rank: {playerInfo.current[0].doubles_rank}</p>
						{/* Agrega más propiedades según sea necesario */}

						<h3>Career Stats</h3>
						<p>Singles Rank: {playerInfo.career[0].singles_rank}</p>
						<p>Doubles Rank: {playerInfo.career[0].doubles_rank}</p>
						{/* Agrega más propiedades según sea necesario */}
					</div>
				)}
			</div>
		</>
	);
}

export default InfoJugador;
