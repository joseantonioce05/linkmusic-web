import { useEffect, useState } from "react";
import Artist from "../models/Artist";
import { useParams } from "react-router-dom";
import ArtistsService from "../services/ArtistsService";
import AlbumList from "../components/AlbumList/AlbumList";
import NavBar from "../components/NavBar/NavBar";
import './ArtistDetails.css'
import MessageLogin from "../components/MessageLogin/MessageLogin";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import { SongProvider } from "../context/SongContext";

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
    { (localStorage.getItem("userToken") === null ? <MessageLogin/> : <></>) }

    <NavBar>
      
    </NavBar> 

    <div className="artist-detail-container">
      {artist && 
        <div key={artist._id} className="artist-details grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2">
          <div className="artist-image">
            <img src={import.meta.env.VITE_API_URL + "artist/image/" + artist.image} alt="" />
          </div>
          <div className="artist-name">
            <h1>{artist.name}</h1>
          </div>
        </div>
      }
      <hr />
      <p className="album-p">Albums:</p>
      {artist && 
        <AlbumList artistId={artist._id}/>
      }      
    </div>
    <SongProvider>
      <MusicPlayer/>
    </SongProvider>
  </div>; 
}

export default ArtistDetail