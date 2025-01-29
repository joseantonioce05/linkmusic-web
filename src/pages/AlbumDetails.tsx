import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar"
import SongList from "../components/SongList/SongList";


const AlbumDetails = () => {
  const params = useParams();

  return <div>
    <NavBar />
    <SongList albumId={params.albumId!}/>
  </div>
}

export default AlbumDetails