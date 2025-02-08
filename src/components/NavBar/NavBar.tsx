import './NavBar.css'
import HouseIcon from '@mui/icons-material/House';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PersonIcon from '@mui/icons-material/Person';
import User from '../../models/User';
import { useEffect, useState } from 'react';
import UsersService from '../../services/UserService';

const NavBar  = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState(false)
  const fetchData = async () => {
      try {
          const response = await new UsersService().userInfo(localStorage.getItem('idUser')!)
          setUser(response.data.user)
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
      fetchData();
  }, [])
  
  return <div className="navbar-container grid max-lg:grid-cols-3 lg:grid-cols-8 xl:grid-cols-12">
    <div className='navbar-home'>
      <a href="/"><HouseIcon/> Inicio</a>
    </div>
    <div className='navbar-libray max-lg:justify-self-center max-lg:col-span-1 max-md:justify-self-center lg:col-span-2 xl:col-span-2'>
      <LibraryMusicIcon/> Bioblioteca
    </div>
    <div className='navbar-title max-lg:invisible max-lg:row-start-2 lg:visible lg:col-start-5 lg:col-span-2 xl:col-start-6 2xl:col-start-6 2xl:col-span-1'>
      <p>Link Music</p>
    </div>
    <button onClick={() => setIsOpen((prev) => !prev)} className='navbar-user flex lg:col-start-12'>
      {user &&
        <p>{user.username}</p>
      }<PersonIcon/>
    </button>

    {isOpen && user && <div className='navbar-user-menu lg:col-start-12 '>
        <div className='navbar-user-menu-items'>
          <p>Perfil</p>
        </div>
        { (user.role === 'admin') ? <div className='navbar-user-menu-items'><p>Adminstrador</p></div> : <></>}
        <div className='navbar-user-menu-items'>
          <p>Cerrar sesion</p>
        </div>
      </div>}
  </div>
}

export default NavBar;