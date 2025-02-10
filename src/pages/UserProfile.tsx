import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import NavBar from "../components/NavBar/NavBar";
import UserInfo from "../components/UserInfo/UserInfo";
import { SongProvider } from "../context/SongContext";


const UserProfile = () => {
  return <div>
    <SongProvider>
      <NavBar />
      <UserInfo />
      <MusicPlayer />
    </SongProvider>
  </div>
}

export default UserProfile;