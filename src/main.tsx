import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import ArtistDetail from './pages/ArtistDetails.tsx'
import AlbumDetails from './pages/AlbumDetails.tsx'
import UserProfile from './pages/UserProfile.tsx'
import AdminMenu from './pages/AdminMenu.tsx'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login />},
      { path: '/register', element: <Register />},
      { path: '/artist/:artistId', element: <ArtistDetail />},
      { path: '/album/:albumId', element: <AlbumDetails />},
      { path: '/profile', element: <UserProfile />},
      { path: '/admin', element: <AdminMenu />}
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)