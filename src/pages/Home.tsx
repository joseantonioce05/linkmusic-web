import ArtistsList from "../components/ArtistsList/ArtistsList";
import NavBar from "../components/NavBar/NavBar";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import { SongProvider } from "../context/SongContext";
import MessageLogin from "../components/MessageLogin/MessageLogin";
import LatestAlbumList from "../components/LatestSongList/LatestAlbumList";
import './Home.css'

const Home = () => {
  console.log(localStorage.getItem("userToken"))
  console.log(localStorage.getItem("song"))
  console.log(localStorage.getItem('idUser'))
  console.log(localStorage.getItem('userRole'))

  return <div className="container-home">
    { (localStorage.getItem("userToken") === null ? <MessageLogin/> : <></>) }
    
    <SongProvider>
      <NavBar />
      <div className="home-container">
        <ArtistsList />
        <LatestAlbumList />
      </div>
      <MusicPlayer/>
    </SongProvider>

  </div>; 
};

export default Home;