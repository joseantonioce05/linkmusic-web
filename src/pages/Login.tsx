
import { useForm } from "react-hook-form";
import UsersService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const response = await new UsersService().login(data);
      localStorage.setItem("userToken", response.data.token);
      localStorage.setItem("idUser", response.data.user._id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return <div className="login-container flex-col">
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Link Music</h2>
      <h3>Inicia sesion al ritmo de la musica</h3>
      <div className="form-group">
        <label htmlFor="username">Usuario</label>
        <input type="text" id="username" placeholder="Usuario" {...register('username')}></input>
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" placeholder="Contraseña" {...register('password')}></input>
      </div>
      <button className="btn" type="submit"> Iniciar sesión </button>
    </form>
    <p>No tienes cuenta? <a href="/register">Registrate</a></p>
  </div>
};

export default Login;