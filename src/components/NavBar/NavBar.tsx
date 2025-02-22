import './NavBar.css'
import HouseIcon from '@mui/icons-material/House';
// import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PersonIcon from '@mui/icons-material/Person';
import User from '../../models/User';
import { useEffect, useState } from 'react';
import UsersService from '../../services/UserService';
import { useNavigate, Link } from 'react-router-dom';

const NavBar  = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

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
  
  return <div className="navbar-container grid max-lg:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
    <div className='navbar-home'>
      <Link to={"/"}>
      <HouseIcon/> Inicio
      </Link>
    </div>
    {/* <div className='navbar-libray max-lg:justify-self-center max-lg:col-span-1 max-md:justify-self-center lg:col-span-2 xl:col-span-2 invisible'>
      <LibraryMusicIcon/> Bioblioteca
    </div> */}
    <div className='navbar-title  sm:visible '>
      <p>Link Music</p>
    </div>
    <button onClick={() => setIsOpen((prev) => !prev)} className='navbar-user flex lg:col-start-12'>
      {user &&
        <p>{user.username}</p>
      }<PersonIcon/>
    </button>

    {isOpen && user && <div className='navbar-user-menu lg:col-start-12 '>
        <div className='navbar-user-menu-items'>
          <button onClick={() => navigate('/profile')}><p>Perfil</p></button>
        </div>
        {/* { (user.role === 'admin') ? <div className='navbar-user-menu-items'><button onClick={() => navigate('/admin')}><p>Adminstrador</p></button></div> : <></>} */}
        <div className='navbar-user-menu-items'>
          <button onClick={() => {
            localStorage.removeItem('userToken')
            localStorage.removeItem('song')
            localStorage.removeItem('idUser')
            localStorage.removeItem('userRole')

            window.location.reload()
          }}>Cerrar sesion</button>
        </div>
      </div>}
  </div>
}

export default NavBar;