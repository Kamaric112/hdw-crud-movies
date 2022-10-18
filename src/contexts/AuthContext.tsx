import { createContext, useReducer, useEffect } from 'react'

interface LoginContextInterface {
  isInitialized: boolean
  isAuthenticated: boolean
  username: string | null
  password: string | null
  login?: (username: string, password: string, callback: () => void) => Promise<void>
  logout?: (callback: () => void) => Promise<void>
}

type ACTIONTYPE =
  | {
      type: 'INITIALIZE'
      payload: { isAuthenticated: boolean; username: string | null; password: string | null }
    }
  | {
      type: 'LOGIN_SUCCESS'
      payload: { username: string | null; password: string | null }
    }
  | { type: 'LOGOUT' }

type AuthProviderProps = {
  children: React.ReactNode
}
const INITIALIZE = 'INITIALIZE'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

const initialState: LoginContextInterface = {
  isInitialized: false,
  isAuthenticated: false,
  username: null,
  password: null,
}
const reducer = (state: LoginContextInterface, action: ACTIONTYPE) => {
  switch (action.type) {
    case INITIALIZE: {
      const { isAuthenticated, username, password } = action.payload
      return {
        ...state,
        isInitialized: true,
        isAuthenticated,
        username,
        password,
      }
    }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        password: action.payload.password,
      }
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    default:
      return state
  }
}

const AuthContext = createContext({ ...initialState })

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState)
  // const [user, setUser] = useState<string | null>(null)
  // const [password, setPassword] = useState<string | null>(null)
  // const navigate = useNavigate()
  // const signIn = (newUser: string, password: string) => {
  //   setUser(newUser)
  //   setPassword(password)
  //   navigate('/')
  // }

  useEffect(() => {
    const initialize = async () => {
      try {
        const username = window.localStorage.getItem('username')
        const password = window.localStorage.getItem('password')
        if (username) {
          dispatch({
            type: INITIALIZE,
            payload: { isAuthenticated: true, username, password },
          })
        } else {
          dispatch({
            type: INITIALIZE,
            payload: { isAuthenticated: false, username: null, password: null },
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
    initialize()
  }, [])
  const login = async (username: string, password: string, callback: () => void) => {
    window.localStorage.setItem('username', username)
    window.localStorage.setItem('password', password)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { username, password },
    })
    callback()
  }
  const logout = async (callback: () => void) => {
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('password')
    dispatch({ type: LOGOUT })
    callback()
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
