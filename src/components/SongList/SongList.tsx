import { useEffect, useState } from "react";
import Song from "../../models/Song";
import SongsService from "../../services/SongService";
import Album from "../../models/Album";
import AlbumService from "../../services/AlbumService";
import './SongList.css'
import imageDefault from '../../assets/default.png'

type Props = {
  albumId: string;
};

const SongList = ({ albumId }: Props) => {

  const [songs, setSongs] = useState<Song[]>([]);
  const [album, setAlbum] = useState<Album| null>(null);

  const fetchData = async () => {
      try {
        const responseSong = await new SongsService().getAll(albumId)
        console.log(responseSong)
        setSongs(responseSong.data.song);

        const responseAlbum = await new AlbumService().getAlbum(albumId)
        console.log(responseAlbum)
        setAlbum(responseAlbum.data.albumSearched);

      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

  return <div className="album-detail-container">
    {album && 
    <div key={album._id} className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2">
    <div className="album-image">
      <img src={imageDefault} alt="" />
    </div>
    <div className="album-name">
      <h1>{album.title}</h1>
    </div>
  </div>
    }
    <div className="description grid lg:grid-cols-12 md:grid-cols-8 max-md:grid-cols-5">
      <div className="numeral">
        <p>#</p>
      </div>
      <div className="lg:col-span-2 md:col-span-3 max-md:col-span-2">
        <p>Titulo</p>
      </div>

      <div className="duration">
        <p>Duración</p>
      </div>
    </div>
    <hr />
    {songs.map((song) => (
      <div className="song grid lg:grid-cols-12 md:grid-cols-8 max-md:grid-cols-5" id={song._id}>
        <div className="song-track">
          <p> {song.track} </p>
        </div>
        <div className="song-name lg:col-span-2 md:col-span-3 max-md:col-span-2">
          <p> {song.name} </p>
        </div>
        <div className="song-duration">
          <p> {song.duration}</p>
        </div>
      </div>
    ))}
  </div>
}

export default SongList;