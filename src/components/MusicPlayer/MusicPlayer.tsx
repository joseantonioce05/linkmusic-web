import ReactAudioPlayer from "react-audio-player";
import { useSong } from "../../context/SongContext";

const MusicPlayer = () => {
  const {song} = useSong();

  return <div>
    <ReactAudioPlayer
    src={import.meta.env.VITE_API_URL + "song/audio/" + song}
    controls/>
  </div>
}

export default MusicPlayer