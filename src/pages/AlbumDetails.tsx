import { useParams } from "react-router-dom";
import MessageLogin from "../components/MessageLogin/MessageLogin";
import AlbumSongList from "../components/AlbumSongList/AlbumSongList";

const AlbumDetails = () => {
  const params = useParams();

  return (
      <div>
        { (localStorage.getItem("userToken") === null ? <MessageLogin/> : <></>) }
        <AlbumSongList albumId={params.albumId!}/>
      </div>
  )
}

export default AlbumDetails