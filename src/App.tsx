import {} from 'react'
import AppRoutes from "./routes/index"

import './App.css'
import RouterSidebar from "./examples/RouterSidebar";

function App() {

  return (
    <main>
        <div className="flex min-h-screen">
            <RouterSidebar />
            <AppRoutes />
        </div>
    </main>
  )
}

export default App
