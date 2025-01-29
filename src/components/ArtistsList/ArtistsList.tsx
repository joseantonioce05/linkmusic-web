import { useEffect, useState } from "react";
import ArtistsService from "../../services/ArtistsService";
import Artist from "../../models/Artist";
import { Link } from "react-router-dom";
import './ArtistsList.css'
import imageDefault from '../../assets/default.png'

const ArtistsList = () => {

  const [artists, setArtists] = useState<Artist[]>([])

  const fetchData = async () => {
    try {
      const response = await new ArtistsService().getAll();
      console.log(response)
      setArtists(response.data.artists);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return <div className="artist-list-container">
      <h2>Ultimos artista</h2>
      <div className="artist-list grid grid-cols-6">
      
      {artists.map(artist => (           
          <div key={artist._id} className="artist-container">
            <Link to={`/artist/${artist._id}`}>
              <img src={imageDefault} alt="" />
            </Link>
            <p >{artist.name}</p>
          </div>
      ))}
    </div>
  </div>
}

export default ArtistsList;