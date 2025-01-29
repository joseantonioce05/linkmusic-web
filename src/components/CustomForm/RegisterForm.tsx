import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputForm from "./components/CustomInput";
import { FormValues, schema } from "./models";
import UsersService from "../../services/UserService";
import { useNavigate } from "react-router-dom";
import './RegisterForm.css'

const RegisterForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      username:"",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const navigate = useNavigate()

  const onSubmit = async (data: any) => {
    try {
      const response = await new UsersService().register(data);
      localStorage.setItem('userToken', response.data.token)                      
    } catch (error) {
      console.log(error)
    }
      navigate('/login'); 
    }   

  return (
    <div className="register-container flex-col">
      <form className="register-form"onSubmit={handleSubmit(onSubmit)}>
        <h2>Link Music</h2>
        <h3>Registrate para empezar a escuchar nuestra musica</h3>
        <InputForm name="name" control={control} label="Nombre" type="text" error={errors.name} placeholder="Nombre" />
        <InputForm name="username" control={control} label="Nombre de Usuario" type="text" error={errors.username} placeholder="Usuario"/>
        <InputForm name="email" control={control} label="Correo eletronico" type="email" error={errors.email} placeholder="Correo eletronico"/>
        <InputForm name="password" control={control} label="Contraseña" type="password" error={errors.password} placeholder="Contraseña"/>
        <InputForm name="confirmPassword" control={control} label="Confirmar contraseña" type="password" error={errors.confirmPassword} placeholder="Confirmar contraseña" />  
        <button className="btn" type="submit">
          Registrarse
        </button>
      </form>
      <p>Ya tienes cuenta? <a href="/login">Inicia sesion</a></p>
    </div>
  )
}

export default RegisterForm;
