import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './HomePage'
import { ProfilePage } from './ProfilePage'
import { BlogPage } from './BlogPage'
import { BlogPost } from './BlogPost'
import { Menu } from './Menu'

function App () {
  return (
   <>
   <HashRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/blog" element={<BlogPage />} >
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Route>
      <Route path="*" element={<p>Not FOunt</p>} />
      </Routes>
    </HashRouter>
   </>
  )
}

export default App
