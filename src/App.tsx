import {} from 'react'
import AppRoutes from "./routes/index"
import RouterSidebar from "./examples/RouterSidebar";

import './App.css'

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
