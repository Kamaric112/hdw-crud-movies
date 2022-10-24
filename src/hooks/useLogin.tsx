import React from 'react'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom'
interface LoginPayload {
  username: string | null
  password: string | null
}

interface LoginHook {
  login: (data: LoginPayload) => Promise<void>
  loading: boolean
}
export const useLogin = (): LoginHook => {
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState<boolean>(false)
  const { setIsAuthenticated, authProvider } = useAuth()

  const login = async (data: LoginPayload): Promise<void> => {
    try {
      setLoading(true)
      await authProvider.login(data.username!, data.password!)
      console.log(data.username)
      console.log(data.password)
      setLoading(false)
      setIsAuthenticated(true)
      navigate('/', { replace: true })
    } catch (error) {
      console.log('error', error)
    }
  }
  return { login, loading }
}
