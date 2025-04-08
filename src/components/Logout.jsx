import { googleLogout } from '@react-oauth/google'

function Logout({ onLogout }) {
  const handleLogout = () => {
    googleLogout()
    localStorage.removeItem('googleUser') // clear stored user
    console.log('User logged out')
    window.location.reload()

  }

  return (
    <div id="SignOutButton">
      <button onClick={handleLogout} className="bg-red-500 px-4 py-2 text-white rounded">
        Logout
      </button>
    </div>
  )
}

export default Logout
