import { useEffect, useState } from 'react';

const Youtube = () => {
    const [datos, setDatos]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const playlistId = 'PLx_OeXooKEJMVCF9QZOGka7glqXNiVR-q';
        const apiKey = 'AIzaSyBFeXBEjsEIerJQq0KV16bUeu-ONFVAiB0'; // Reemplaza con tu clave de API de YouTube
        const channelId = '@impactotenis'; // Reemplaza con el ID del canal de YouTube que estás consultando
        const apiUrl = ` https://youtube.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&id=${playlistId}&key=${apiKey}`;

        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ', // Reemplaza con tu token de acceso (si es necesario)
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`La solicitud falló con el código ${response.status}`);
        }

        const data = await response.json();
        console.log('Respuesta de la API de YouTube:', data);
        setDatos(data.items)
        console.log("los items encontrados son: " + data.items )
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    };

    fetchData();
  }, []); // Este efecto se ejecutará solo una vez al montar el componente

  return (
    <>
    <div className='videosYoutube'>
      {datos.map((playlist) => (
        <div key={playlist.id}>
          <h3>youtube</h3>

        </div>
      ))}
    </div>
  </>
  );
};

export default Youtube;
