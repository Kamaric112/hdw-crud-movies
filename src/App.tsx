import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { WatchProvider } from './contexts/WatchContext'
import { authProvider } from './pages/login/AuthProvider'
import Router from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
      <AuthContextProvider authProvider={authProvider}>
        <WatchProvider>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </WatchProvider>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
