import { useEffect, useState } from "react";
import Song from "../../models/Song";
import SongsService from "../../services/SongService";
import Album from "../../models/Album";
import AlbumService from "../../services/AlbumService";
import './AlbumSongList.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSong } from "../../context/SongContext";
import { Link } from "react-router-dom";
import User from "../../models/User";
import UsersService from "../../services/UserService";

type Props = {
  albumId: string;
};

const AlbumSongList = ({ albumId }: Props) => {

  const [songs, setSongs] = useState<Song[]>([]);
  const [album, setAlbum] = useState<Album| null>(null);
  const [artist, setArtist] = useState(null);
  const [artistId, setArtistId] = useState(null)
  const [user, setUser] = useState<User | null>(null);
  

  const { setSongName } = useSong();

  const fetchData = async () => {
      try {
        const responseSong = await new SongsService().getAll(albumId)
        setSongs(responseSong.data.song);

        const responseAlbum = await new AlbumService().getAlbum(albumId)
        setAlbum(responseAlbum.data.albumSearched);

        const response = await new UsersService().userInfo(localStorage.getItem('idUser')!)
        setUser(response.data.user)

        setArtist(responseAlbum.data.albumSearched.artist.name)
        setArtistId(responseAlbum.data.albumSearched.artist._id)

      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

  return <div className="album-detail-container overflow-auto">
    {album && 
    <div key={album._id} className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2">
    <div className="album-image">
      <img src={import.meta.env.VITE_API_URL + "album/image/" + album.image} alt="" />
    </div>
    <div className="album-name max-md:col-span-1 col-span-2">
      <h1>{album.title}</h1>
    </div>
  </div>
    }
    <div className="description grid max-xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-8 max-md:grid-cols-6">
      <div className="numeral">
        <p>#</p>
      </div>
      <div className="lg:col-span-2 md:col-span-3 max-md:col-span-2">
        <p>Titulo</p>
      </div>

      <div className="duration">
        <p>Duración</p>
      </div>

      <div className="artist-name">
        <p>Artista</p>
      </div>
    </div>
    <hr />
    {songs.map((song) => (
      <div className="song grid max-xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-8 max-md:grid-cols-6" id={song._id}>
        <div className="song-track">
          <p> {song.track} </p>
        </div>
        <div className="song-name lg:col-span-2 md:col-span-3 max-md:col-span-2">
          <p> {song.name} </p>
        </div>
        <div className="song-duration">
          <p> {song.duration}</p>
        </div>
        <div className="song-artist">
          <Link to={`/artist/${artistId}`}>
            <p>{ artist }</p>
          </Link>
        </div>
        <div className="song-play">
          <button className="song-button-play" onClick={() => 
            {
            setSongName(song.file) 
            localStorage.setItem('albumId', album!._id) 
            localStorage.setItem('songName', song.name)
            }}><PlayArrowIcon /></button>
            <button onClick={ async () =>  
            {
              const songId = song._id
              if(user?.song_favorite.some(song_favorite => song_favorite._id === songId)) {
                alert("Ya esta en tus favoritos")
                console.log("Si esta la cancion")
              } else {
                const response = await new UsersService().userAddFavorite(localStorage.getItem('idUser')!, songId)
                console.log(response)
              }
            }}><FavoriteIcon/></button>
        </div>
      </div>
    ))}
  </div>
}

export default AlbumSongList;