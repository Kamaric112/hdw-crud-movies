import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { WatchProvider } from './contexts/WatchContext'
import { authProvider } from './pages/login/AuthProvider'
import Router from './routes'
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider authProvider={authProvider}>
        <WatchProvider>
          <Router />
        </WatchProvider>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
