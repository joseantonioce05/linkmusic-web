import { useEffect, useState } from "react";
import Artist from "../models/Artist";
import { useParams } from "react-router-dom";
import ArtistsService from "../services/ArtistsService";
import AlbumList from "../components/AlbumList/AlbumList";
import NavBar from "../components/NavBar/NavBar";
import imageDefault from '../assets/default.png'
import './ArtistDetails.css'

const ArtistDetail = () => {

  const [artist, setArtist] = useState<Artist | null>(null);
  const params = useParams();

  const fetchData = async () => {
      try {
          const response = await new ArtistsService().getById(params.artistId!)
          setArtist(response.data.artist)
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
      fetchData();
  }, [])
  
  return <div className="container-home"> 
    <NavBar>
      
    </NavBar> 

    <div className="artist-detail-container">
      {artist && 
        <div key={artist._id} className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2">
          <div className="artist-image">
            <img src={imageDefault} alt="" />
          </div>
          <div className="artist-name">
            <h1>{artist.name}</h1>
          </div>
        </div>
      }
      <hr />
      {artist && 
        <AlbumList artistId={artist._id}/>
      }      
    </div>
  </div>; 
}

export default ArtistDetail