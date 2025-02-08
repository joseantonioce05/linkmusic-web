import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar"
import SongList from "../components/AlbumSongList/AlbumSongList";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import { SongProvider } from "../context/SongContext";

const AlbumDetails = () => {
  const params = useParams();

  return (
    <SongProvider>
      <div>
        <NavBar />
        <SongList albumId={params.albumId!}/>
        <MusicPlayer />
      </div>
    </SongProvider>
  )
}

export default AlbumDetails