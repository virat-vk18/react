import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const logged = JSON.parse(localStorage.getItem('IsLogged'))
  return logged ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRouter
