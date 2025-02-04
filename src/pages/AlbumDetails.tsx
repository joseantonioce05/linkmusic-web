import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar"
import SongList from "../components/AlbumSongList/AlbumSongList";
import ReactAudioPlayer from "react-audio-player";


const AlbumDetails = () => {
  const params = useParams();

  return <div>
    <NavBar />
    <SongList albumId={params.albumId!}/>
    <ReactAudioPlayer controls
    src={import.meta.env.VITE_API_URL + "song/audio/" + localStorage.getItem("song")}/>
  </div>
}

export default AlbumDetails