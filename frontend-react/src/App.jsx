import './App.css'
import './assets/css/style.css'
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import Register from './components/Register'
import Login from './components/login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter >
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
