import React, { createContext, useEffect, useState } from 'react'

export interface AuthContextValues {
  authProvider: AuthProvider
  // isInitialized: boolean
  isAuthenticated: boolean
  username: string | null
  password: string | null
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

export interface AuthProvider {
  login: (username: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

type AuthContextProviderProps = {
  children: React.ReactNode
  authProvider: AuthProvider
}

const AuthContext = createContext({} as AuthContextValues)

function AuthContextProvider({ children, authProvider }: AuthContextProviderProps) {
  const [username, setUsername] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffect(() => {
    const initialize = () => {
      try {
        const username = window.localStorage.getItem('username')
        const password = window.localStorage.getItem('password')
        if (username) {
          console.log('have username')
          setUsername(username)
          setPassword(password)
          setIsAuthenticated(true)
        } else {
          // console.log('logged out')
          authProvider.logout()
          setIsAuthenticated(false)
        }
      } catch (error) {
        // authProvider.logout
        // setIsAuthenticated(false)
        // console.log(error)
      }
    }
    initialize()
  }, [])

  return (
    <AuthContext.Provider
      value={{ authProvider, setIsAuthenticated, isAuthenticated, username, password }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
