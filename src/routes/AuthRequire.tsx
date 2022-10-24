import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import LoadingScreen from '../components/LoadingScreen'
import React, { useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'

function AuthRequire() {
  const { isAuthenticated, username } = useAuth()

  return isAuthenticated ? <MainLayout /> : <Navigate to='/login' replace />
}

export default AuthRequire
