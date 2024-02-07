import React from 'react'
import { useAuth } from './auth'

function LogOutPage () {
  const auth = useAuth()

  const loginOut = (e) => {
    auth.logout()
  }
  return (
    <>
    <h1>LogOut </h1>
    <form onSubmit={loginOut}>
        <label>Desea salir? </label>

         <button type="submit">Login</button>
    </form>
</>
  )
}

export { LogOutPage }
