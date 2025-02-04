import ReactAudioPlayer from "react-audio-player";
import ArtistsList from "../components/ArtistsList/ArtistsList";
import NavBar from "../components/NavBar/NavBar";
import LatestSongList from "../components/LatestSongList/LatestSongList";

const Home = () => {
  console.log(localStorage.getItem("userToken"))

  return <div className="container-home">
    
    <NavBar />
    <ArtistsList />
    <LatestSongList />
    <ReactAudioPlayer 
    controls
    src="http://localhost:3910/api/song/audio/song-1735859061857-1.01 Full Moon Full Life.mp3"/>

  </div>; 
};

export default Home;