import { useEffect, useState } from "react";
import User from "../../models/User";
import UsersService from "../../services/UserService";
import './UserInfo.css'
import { useSong } from "../../context/SongContext";
import { Link } from "react-router-dom";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const UserInfo = () => {
  const [user, setUser] = useState<User | null>(null);
  console.log(localStorage.getItem('idUser'))

  const { setSongName } = useSong();

  const fetchData = async () => {
      try {
          const response = await new UsersService().userInfo(localStorage.getItem('idUser')!)
          setUser(response.data.user)
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
      fetchData();
  }, [])

  return <div className="user-info-container overflow-auto">
    {user && 
      <div className="grid max-md:grid-cols-2 max-lg:grid-cols-4 lg:grid-cols-6">
        <div className="user-avatar max-md:col-start-1 md:col-start-2 ">
          <img src={import.meta.env.VITE_API_URL + "user/avatar/" + user.image} alt="" />
        </div>
        <div className="user-username">
          <strong>{user.username}</strong>
          {/* <button>Editar perfil</button> */}
        </div>
      </div>
    }
    <p className="favorite-song">Canciones Favoritas:</p>
    <hr />
    {user?.song_favorite.map((song) => (
      <div className="song grid max-xl:grid-cols-4 lg:grid-cols-6 md:grid-cols-5 max-md:grid-cols-6" id={song._id}>
        <div className="song-name max-md:col-span-2 md:col-span-2 xl:col-span-1">
          <p> {song.name} </p>
        </div>
        <div className="song-artist-favorite max-md:col-span-2 md:col-span-2 xl:col-span-1">
          <Link to={`/artist/${song.album.artist}`}>
            <p>{ song.album.artist.name }</p>
          </Link>
        </div>
        <div className="song-play">
          <button onClick={() => 
            {
            setSongName(song.file) 
            localStorage.setItem('albumId', song.album._id) 
            localStorage.setItem('songName', song.name)
            }}><PlayArrowIcon /></button>
        </div>
    </div>
    ))}
  </div>
}

export default UserInfo