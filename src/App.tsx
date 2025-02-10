import { Outlet, useLocation } from "react-router-dom"
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import MusicPlayer from "./components/MusicPlayer/MusicPlayer"
import { SongProvider } from "./context/SongContext"

function App() {
  const location = useLocation();

  return (
    <>
      <SongProvider>
        {(
          location.pathname === "/login" || 
          location.pathname === "/register" ||
          location.pathname === "/admin" ? <></> : <NavBar></NavBar>
          )}
        <Outlet></Outlet>
        {(
          location.pathname === "/login" || 
          location.pathname === "/register" ||
          location.pathname === "/admin" ? <></> : <MusicPlayer></MusicPlayer>
          )}
      </SongProvider>
    </>
  )
}

export default App
