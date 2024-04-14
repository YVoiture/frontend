import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  useEffect(() => {
    document.body.className = 'antialiased bg-gray-50 dark:bg-gray-900';
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      <Sidebar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <Outlet />
      </main>
    </>
  )
}

export default App
