import React, { useState } from 'react'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom'

interface LogoutHook {
  logout: () => void
  loading: boolean
}

export const useLogout = (): LogoutHook => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const { authProvider, setIsAuthenticated } = useAuth()
  const navigate = useNavigate()

  const logout = async (): Promise<void> => {
    try {
      setLoading(true)
      await authProvider.logout()
      setIsAuthenticated(false)
      navigate('/login', { replace: true })
    } catch (error) {
      console.log('error', error)
    }
  }
  return { logout, loading }
}
