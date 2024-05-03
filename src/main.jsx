import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './pages/errors/NotFound.jsx'
import LoginPage from './pages/auth/LoginPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import RolesPage from './pages/RolesPage.jsx'
import UsersPage from './pages/UsersPage.jsx'
import CarsPage from './pages/CarsPage.jsx'
import MaintenancesPage from './pages/MaintenancesPage.jsx'
import ProfilePage from './pages/auth/ProfilePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/cars", element: <CarsPage /> },
      { path: "/maintenances", element: <MaintenancesPage /> },
      { path: "/roles", element: <RolesPage /> },
      { path: "/users", element: <UsersPage /> },
      { path: "/profile", element: <ProfilePage /> }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
