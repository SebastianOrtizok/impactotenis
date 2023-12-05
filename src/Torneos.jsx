import React, { useEffect } from 'react';

const TournamentList = () => {
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://ultimate-tennis1.p.rapidapi.com/tournament_list/atp/2023/atpgs';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '9457443555msh10aa92ecf1a0a69p1b90e6jsnff11b312d0b4',
          'X-RapidAPI-Host': 'ultimate-tennis1.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Puedes agregar más contenido aquí si es necesario */}
    </div>
  );
};

export default TournamentList;
