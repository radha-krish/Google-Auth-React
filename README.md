# 🔐 Google Login with React + Vite

A minimal and modern React + Vite setup that integrates **Google OAuth2 login** using [`@react-oauth/google`](https://www.npmjs.com/package/@react-oauth/google). This project allows users to sign in with their Google account, display profile info, and persist authentication using `localStorage`.

---

## 🚀 Features

- ✅ Google OAuth 2.0 login
- ✅ Decode Google credentials with `jwt-decode`
- ✅ Persist user login using `localStorage`
- ✅ Custom Login/Logout buttons
- ✅ React + Vite HMR setup

---

## 📦 Tech Stack

- React
- Vite
- @react-oauth/google
- jwt-decode
- Tailwind CSS (optional)

---

## 🛠️ Getting Started

### 📁 Clone the repo

```bash
git clone https://github.com/your-username/google-login-react-vite.git
cd google-login-react-vite
npm install
🔑 Setup Google OAuth Client
Go to Google Cloud Console

Create a new OAuth 2.0 Client ID:

Application Type: Web

Authorized JavaScript origins: http://localhost:5173

Copy your Client ID

In your project, create a .env file:


VITE_GOOGLE_CLIENT_ID=your-client-id-here
🧪 Run Locally

npm run dev
Visit http://localhost:5173

📂 Project Structure

src/
├── components/
│   ├── Login.jsx
│   └── Logout.jsx
├── App.jsx
└── main.jsx
🧠 Usage Example
🔐 Login.jsx
jsx
Copy
Edit
import { GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'

function Login() {
  const handleSuccess = (credentialResponse) => {
    const user = jwtDecode(credentialResponse.credential)
    localStorage.setItem('user', JSON.stringify(user))
    console.log('Login Success:', user)
    window.location.reload()
  }

  const handleError = () => {
    console.log('Login Failed')
  }

  return <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
}

export default Login
🔓 Logout.jsx
jsx

import { googleLogout } from '@react-oauth/google'

function Logout() {
  const handleLogout = () => {
    googleLogout()
    localStorage.removeItem('user')
    console.log('User logged out')
    window.location.reload()
  }

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
      Logout
    </button>
  )
}

export default Logout
🧩 App.jsx


import { GoogleOAuthProvider } from '@react-oauth/google'
import Login from './components/Login'
import Logout from './components/Logout'

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

function App() {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="p-8">
        {user ? (
          <>
            <h1 className="text-xl">Welcome, {user.name}</h1>
            <Logout />
          </>
        ) : (
          <Login />
        )}
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
🧰 Dependencies
bash
Copy
Edit
npm install @react-oauth/google jwt-decode


🙋‍♂️Author
Built with ❤️ by Radha Krishna



---

Let me know if you want this saved as a downloadable file or pushed to GitHub for you.






