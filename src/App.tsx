import {} from 'react'
import AppRoutes from "./routes/index"

import './App.css'
import RouterSidebar from "./examples/RouterSidebar";

function App() {

  return (
    <main>
        <div className="min-h-screen p-6">
            <AppRoutes />
            <RouterSidebar />
        </div>
    </main>
  )
}

export default App
