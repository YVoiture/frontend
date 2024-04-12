import { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Navbar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      <Sidebar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      <main className="p-4 md:ml-64 h-auto pt-20"></main>
    </div>
  )
}

export default App
