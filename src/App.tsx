import { Outlet } from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
      <div className="principal-container">
        <Outlet />
      </div>
    </>
  )
}

export default App
