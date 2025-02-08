import { AudioPlayer } from 'react-audio-play'
import './MusicPlayer.css'

const MusicPlayer = () => {

  return <div className='music-player-container fixed bottom-0 left-0 w-full p-3' >
    <AudioPlayer
      src={import.meta.env.VITE_API_URL + "song/audio/" + localStorage.getItem('song')}
      color="#EFD6AC"
      sliderColor="#EFD6AC"
      style={{ background: "#183A37",  }}
      className='music-player'
    />
  </div>
}

export default MusicPlayer