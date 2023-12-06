import { useState, useEffect } from 'react';
import "./style_section2.css"

const Youtube = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'AIzaSyADvoc7ahZXy8rNU6nk39lGT27nOaaRMeA';
        const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=date&q=clases%20impactotenis&key=${apiKey}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`La solicitud falló con el código ${response.status}`);
        }

        const data = await response.json();
        setVideos(data.items);
        console.log(data.items); // Cambiado para reflejar el estado actualizado
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    };

    fetchData();
  }, []); // Este efecto se ejecutará solo una vez al montar el componente

  return (
    <div className="principal_section2">
    <div className='videosYoutube'>
    <h1 className='h1_section2'>Los mejores videos de Youtube</h1>

    
      {videos.map((video) => (
        <div className='videoContenedor' key={video.id.videoId || video.id.channelId}>
        <div>
          <h2 className='videoTitle'>{video.snippet.title}</h2>
          {/* <p>Published At: {video.snippet.publishedAt}</p> */}
          <iframe
            className="video"
            width="56.25%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            allowFullScreen
          ></iframe>
          </div>
          <p className='video_description'>{video.snippet.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Youtube;
