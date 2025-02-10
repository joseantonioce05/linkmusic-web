import { useEffect, useState } from "react";
import User from "../../models/User";
import UsersService from "../../services/UserService";
import './UserInfo.css'

const UserInfo = () => {
  const [user, setUser] = useState<User | null>(null);
  console.log(localStorage.getItem('idUser'))

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

  return <div className="user-info-container">
    {user && 
      <div className="grid max-md:grid-cols-2 max-lg:grid-cols-4 lg:grid-cols-6">
        <div className="user-avatar max-md:col-start-1 md:col-start-2 ">
          <img src={import.meta.env.VITE_API_URL + "user/avatar/" + user.image} alt="" />
        </div>
        <div className="user-username">
          <p>{user.username}</p>
          <button>Editar perfil</button>
        </div>
      </div>
    }
  </div>
}

export default UserInfo