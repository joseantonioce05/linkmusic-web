import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
// import ArtistDetail from './pages/ArtistDetail.tsx'
// import Register from './pages/Register/Register.tsx'
// import SongList from './components/SongList.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import ArtistDetail from './pages/ArtistDetails.tsx'
import AlbumDetails from './pages/AlbumDetails.tsx'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login />},
      { path: '/register', element: <Register />},
      { path: '/artist/:artistId', element: <ArtistDetail />},
      { path: '/album/:albumId', element: <AlbumDetails />}
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)