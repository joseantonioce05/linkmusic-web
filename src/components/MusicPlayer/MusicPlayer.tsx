import ReactAudioPlayer from "react-audio-player";
import defaultMusic2 from "../../../../api-linkmusic/uploads/songs/song-1735859061857-1.01 Full Moon Full Life.mp3"

const MusicPlayer = () => {

  return <div>
    <ReactAudioPlayer
    src={defaultMusic2}
    controls/>
  </div>
}

export default MusicPlayer