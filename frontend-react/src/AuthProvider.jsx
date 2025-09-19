import { useState, useContext, createContext } from 'react'

// Create the context
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('accessToken')
    )
    const [username, setUsername] = useState(
    localStorage.getItem('username') || ""
  );
  const saveUsername = (name) => {
    setUsername(name);
    localStorage.setItem("username", name);
  };
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, username, setUsername: saveUsername}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext};