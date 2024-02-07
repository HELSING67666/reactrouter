/* eslint-disable no-unused-vars */
import { React } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './auth'

function Menu () {
  const auth = useAuth()

  return (
        <>
           <div>
            <ul>
                {
                    routes.map(route => {
                      if (route.private && !auth.user) return null
                      if (route.text === 'Login' && auth.user) return null

                      return (
                        <li key={route.to}>
                            <NavLink
                            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
                            to={route.to}>
                                {route.text}
                            </NavLink>

                        </li>
                      )
                    })
                }
                {/* <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link> */}

                   {/* <li>
                  <NavLink
                  style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
                   to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink
                  style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
                  to="/profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink
                  style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
                  to="/blog">Blog</NavLink>
                </li> */}
            </ul>
        </div>
        </>
  )
}

const routes = [
  {
    to: '/',
    text: 'Home',
    private: false
  },
  {
    to: '/profile',
    text: 'Profile',
    private: true
  },
  {
    to: '/blog',
    text: 'Blog',
    private: false
  },
  {
    to: '/login',
    text: 'Login',
    private: false
  },
  {
    to: '/logOut',
    text: 'Logout',
    private: true
  }
]

export { Menu }
