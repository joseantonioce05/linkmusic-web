import ArtistsList from "../components/ArtistsList/ArtistsList";
import NavBar from "../components/NavBar/NavBar";
import LatestSongList from "../components/LatestSongList/LatestSongList";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import { SongProvider } from "../context/SongContext";

const Home = () => {
  console.log(localStorage.getItem("userToken"))
  console.log(localStorage.getItem("song"))

  return <div className="container-home">
    
    <SongProvider>
      <NavBar />
      <ArtistsList />
      <LatestSongList />
      <MusicPlayer/>
    </SongProvider>

  </div>; 
};

export default Home;