import './App.css'
import './assets/css/style.css'
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import Register from './components/Register'
import Login from './components/login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthProvider from './AuthProvider'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter >
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
          <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
