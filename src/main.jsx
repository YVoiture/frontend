import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './pages/errors/NotFound.jsx'
import LoginPage from './pages/auth/LoginPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import RolesPage from './pages/roles/RolesPage.jsx'
import CreateRole from './pages/roles/CreateRole.jsx'
import UsersPage from './pages/users/UsersPage.jsx'
import CarsPage from './pages/cars/CarsPage.jsx'
import MaintenancesPage from './pages/maintenances/MaintenancesPage.jsx'
import ProfilePage from './pages/auth/ProfilePage.jsx'
import SupliersPage from './pages/suppliers/SuppliersPage.jsx'
import ConsumablesPage from './pages/consumables/ConsumablesPage.jsx'
import CreateUser from './pages/users/CreateUser.jsx'
import CreateSupplier from './pages/suppliers/CreateSupplier.jsx'
import CreateConsumable from './pages/consumables/CreateConsumable.jsx'
import CreateMaintenance from './pages/maintenances/CreateMaintenance.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/cars", element: <CarsPage /> },
      { 
        path: "/maintenances",
        children: [
          { path: "", element: <MaintenancesPage /> },
          { path: "create", element: <CreateMaintenance /> },
        ]
      },
      { 
        path: "/suppliers",
        children: [
          { path: "", element: <SupliersPage /> },
          { path: "create", element: <CreateSupplier /> },
        ]
      },
      { 
        path: "/consumables", 
        children: [
          { path: "", element: <ConsumablesPage /> },
          { path: "create", element: <CreateConsumable /> },
        ]
      },
      { 
        path: "/roles",
        children: [
          { path: "", element: <RolesPage /> },
          { path: "create", element: <CreateRole />},
        ]
      },
      { 
        path: "/users",
        children: [
          { path: "", element: <UsersPage /> },
          { path: "create", element: <CreateUser /> },
        ]
      },
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
