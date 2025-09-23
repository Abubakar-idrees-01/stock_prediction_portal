import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'



const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)


  const handleRegistration = async (e) => {
    e.preventDefault()
    setLoading(true)

    const userData = { username, email, password }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
      console.log('response.data==>', response.data)
      console.log('Registration successful')
      setErrors({})
      setSuccess(true)
      
    } catch (error) {
      setErrors(error.response?.data || { general: 'Something went wrong' })
      console.error('Registration error: ', error.response?.data)
    } finally {
      setLoading(false)
      console.log("worked")
      
    }
  }

  return (
    <>
      <div className="container vh-100 d-flex align-items-center justify-content-center bg-dark">
        <div className="row justify-content-center w-100 animate__animated animate__fadeInUp">
          <div className="col-md-6 p-5 rounded shadow-lg bg-light border-start border-4 border-info">
            <h3 className="text-center mb-4 fw-bold text-info">Create an Account</h3>
            <form onSubmit={handleRegistration}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control border-0 rounded-3 shadow-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <small>{errors.username && <div className="text-danger">{errors.username}</div>}</small>
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control border-0 rounded-3 shadow-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small>{errors.email && <div className="text-danger">{errors.email}</div>}</small>
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control border-0 rounded-3 shadow-sm"
                  placeholder="Set password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small>
              </div>

              {success && (
                <div className="alert alert-success text-center animate__animated animate__fadeIn">
                  ✅ Registration Successful
                </div>
              )}

              {loading ? (
                <button
                  type="submit"
                  className="btn btn-info w-100 py-2 fw-bold rounded-3 shadow-sm animate__animated animate__pulse animate__infinite"
                  disabled
                >
                  <FontAwesomeIcon icon={faSpinner} spin className="me-2" /> Please wait...
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-info w-100 py-2 fw-bold text-white rounded-3 shadow-sm animate__animated animate__fadeIn"
                >
                  Register
                </button>
              )}
            </form>
            <p className="text-center text-muted mt-4" style={{ fontSize: "0.9rem" }}>
          Already have an account? <a href="/login" className="text-info fw-semibold">Login</a>
        </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
