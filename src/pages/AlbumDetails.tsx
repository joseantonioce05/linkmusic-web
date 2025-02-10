import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar"
// import SongList from "../components/AlbumSongList/AlbumSongList";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import { SongProvider } from "../context/SongContext";
import MessageLogin from "../components/MessageLogin/MessageLogin";
import AlbumSongList from "../components/AlbumSongList/AlbumSongList";

const AlbumDetails = () => {
  const params = useParams();

  return (
    <SongProvider>
      { (localStorage.getItem("userToken") === null ? <MessageLogin/> : <></>) }
      <div>
        <NavBar />
        <AlbumSongList albumId={params.albumId!}/>
        <MusicPlayer />
      </div>
    </SongProvider>
  )
}

export default AlbumDetails