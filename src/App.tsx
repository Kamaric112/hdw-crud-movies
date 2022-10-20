import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { WatchProvider } from './contexts/MovieContext'
import Router from './routes'
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <WatchProvider>
          <Router />
        </WatchProvider>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
