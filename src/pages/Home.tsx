import ArtistsList from "../components/ArtistsList/ArtistsList";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  return <div className="container-home">
    
    <NavBar />
    <ArtistsList />
    <MusicPlayer />

  </div>; 
};

export default Home;