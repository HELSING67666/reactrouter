/* eslint-disable no-unused-vars */
import { React } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Menu () {
  return (
        <>
           <div>
            <ul>
                {
                    routes.map(route => (
                        <li key={route.to}>
                            <NavLink
                            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
                            to={route.to}>
                                {route.text}
                            </NavLink>

                        </li>
                    ))
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
    text: 'Home'
  },
  {
    to: '/profile',
    text: 'Profile'
  },
  {
    to: '/blog',
    text: 'Blog'
  }
]

export { Menu }
