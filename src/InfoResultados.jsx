import React, { useEffect } from 'react';

const InfoResultados = () => {
    useEffect(() => {
        const fetchData = async () => {
          const url = 'https://tennis-news.p.rapidapi.com/news/guardian';
          const apiKey = 'f54b2a81dbmshbcc7d7a45a8cf74p1ab5c6jsn575020ac488a';
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': apiKey,
              'X-RapidAPI-Host': 'tennis-news.p.rapidapi.com'
            }
          };
    
          try {
            const response = await fetch(url, options);
    
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const result = await response.text();
            console.log(result);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className='infoResultados'>
      {/* Puedes agregar JSX adicional según sea necesario */}
    </div>
  );
};

export default InfoResultados;
