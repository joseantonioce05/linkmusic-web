import { useNavigate } from "react-router-dom"
import './Error404.css'

const Error404 = () => {
  const navigate = useNavigate()

  return(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="message-container p-5 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Pagina no encontrada</h2>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded"
          >
            Inicio
          </button>
        </div>
      </div>
    </div>
  )
}

export default Error404