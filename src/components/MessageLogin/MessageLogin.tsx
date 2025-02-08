import { useNavigate } from "react-router-dom";
import "./MessageLogin.css"

const MessageLogin = () => {
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="message-container p-5 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Inicia sesion para disfrutar de LinkMusic</h2>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded"
          >
            Iniciar Sesion
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 rounded"
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageLogin;
