import "./style_section3.css"
import { useEffect, useState } from 'react';

const Torneos = () => {
  const [data, setData] = useState([])
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
        const result = await response.json();
        setData(result.Tournaments)
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="section_3">
    <table className="table table-striped table-hover">
      <thead>
        <th>Torneo</th>
        <th>Superficie</th>
        <th>Puntos</th>
        <th>Fecha</th>
        <th>Ubicacion</th>
        <th>Dobles</th>
        <th>Single</th>
      </thead>
      <tbody>
        {data.map((torneo) => (
          <tr key={torneo.id}>
          <td>{torneo["Tournament Name"]}</td>
            <td>{torneo.Surface}</td>
            <td>{torneo.Timestamp}</td>
            <td>{torneo["Total Prize Money"]}</td>
            {/* <td>{torneo.Location.Winners.doubles}</td>
            <td>{torneo.Location.Winners.single}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Torneos;
