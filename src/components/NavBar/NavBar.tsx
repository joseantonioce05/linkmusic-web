import './NavBar.css'

const NavBar  = () => {
  
  return <div className="navbar-container grid grid-cols-12">
    <div className='home'>
      <a href="/">Inicio</a>
    </div>
    <div>
      <p>Bioblioteca</p>
    </div>
  </div>
}

export default NavBar;