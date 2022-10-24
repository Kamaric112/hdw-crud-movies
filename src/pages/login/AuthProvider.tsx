import React from 'react'
import { AuthProvider } from '../../contexts/AuthContext'

export const authProvider: AuthProvider = {
  login: async (username: string, password: string) => {
    window.localStorage.setItem('username', username)
    window.localStorage.setItem('password', password)
  },
  logout: async () => {
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('password')
  },
}
