import { useEffect, useState } from "react";
import User from "../models/User";
import UsersService from "../services/UserService";
import NavBar from "../components/NavBar/NavBar";
import Error404 from "../components/Error404/Error404";

const AdminMenu = () => {
  const [user, setUser] = useState<User | null>(null);
  
  const fetchData = async () => {
        try {
            const response = await new UsersService().userInfo(localStorage.getItem('idUser')!)
            setUser(response.data.user)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

  useEffect(() => {
        fetchData();
    }, [])  

  return (
    <div>
      {user && 
        (user.role != 'admin' ? <Error404/> : <></>)
      }
      <NavBar/>
    </div>
  )
}

export default AdminMenu