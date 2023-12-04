import React, { useEffect, useState } from "react";

const InfoJugador = ({ playerId, onClose }) => {
  const [infoJugador, setInfoJugador] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://ultimate-tennis1.p.rapidapi.com/player_info/${playerId}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "dd0c91a586msh64632dc97c932c3p1d3fa5jsn04f03edc4829",
          "X-RapidAPI-Host": "ultimate-tennis1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
		console.log(result)
        setInfoJugador(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [playerId]); // Dependencia playerId para que se vuelva a cargar cuando cambie

  return (
    <div className="infoJugador_section3">
      {isLoading && <p>Cargando...</p>}
      {!isLoading && infoJugador && (
        <div>
          <h1>{infoJugador.Name}</h1>
          <p>Age: {infoJugador.age} F.Nacimiento:{infoJugador.Birthday}</p>
          {/* Agrega más información según sea necesario */}
          <img src={infoJugador.Image} alt="Jugador" />
          <button onClick={onClose}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default InfoJugador;
