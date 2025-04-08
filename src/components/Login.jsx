import { useState, useEffect } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

function Login() {
  const [user, setUser] = useState(null)

  // Check if user data exists in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('googleUser')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential)
    setUser(decoded)
    localStorage.setItem('googleUser', JSON.stringify(decoded)) // Save to localStorage
  }

  const handleError = () => {
    console.log('Login Failed')
  }

  const handleLogout = () => {
    localStorage.removeItem('googleUser')
    setUser(null)
  }

  return (
    <div className="text-center">
      {!user ? (
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      ) : (
        <div className="bg-gray-100 p-4 rounded shadow inline-block text-left">
          <h2 className="text-lg font-semibold mb-2">Welcome, {user.name}</h2>
          {console.log(user.picture)}
          <img src={user.picture} alt="User profile" className="rounded-full w-16 h-16 mb-2" />
          <p><strong>Email:</strong> {user.email}</p>
        
        </div>
      )}
    </div>
  )
}

export default Login
