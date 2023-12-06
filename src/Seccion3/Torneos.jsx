import "./style_section3.css"
import { useEffect } from 'react';

const TournamentList = () => {
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://ultimate-tennis1.p.rapidapi.com/tournament_list/atp/2023/atpgs';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f54b2a81dbmshbcc7d7a45a8cf74p1ab5c6jsn575020ac488a',
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
