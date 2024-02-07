import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './HomePage'
import { ProfilePage } from './ProfilePage'
import { BlogPage } from './BlogPage'
import { BlogPost } from './BlogPost'
import { Menu } from './Menu'
import { LoginPage } from './LoginPage'
import { LogOutPage } from './LogOutPage'
import { AuthProvider, AuthRoute } from './auth'

function App () {
  return (
   <>
   <HashRouter>
   <AuthProvider>
    <Menu />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={
       <AuthRoute>
      <LogOutPage />
      </AuthRoute>} />
      <Route path="/profile" element={
        <AuthRoute>
        <ProfilePage />
        </AuthRoute>
      } />
      <Route path="/blog" element={<BlogPage />} >
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Route>

      <Route path="*" element={<p>Not FOunt</p>} />
      </Routes>
      </AuthProvider>
    </HashRouter>
   </>
  )
}

export default App
