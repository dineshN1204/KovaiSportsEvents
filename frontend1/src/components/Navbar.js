import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../App.css'
import { useAuth } from './AuthProvider'
export default function Navbar() {
  const navigate = useNavigate()
  const auth = useAuth()
  return (
    <nav className='header-bar'>

      <img className="logo" src='https://www.kovai.co/wp-content/uploads/2020/01/kovai.co-logo-500x500-1.png'
        style={{ width: "100px", height: "90px" }} onClick={() => { navigate('/') }} />
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/aboutus'>About Us</NavLink>
        <NavLink to='/events'>Events</NavLink>
        {auth.user && <NavLink to='/addevents'>Add Events</NavLink>}
        {auth.user && <NavLink to='/updateevents'>Update Events</NavLink>}
        <NavLink to='/contactus'>ContactUs</NavLink>
        {auth.user && <NavLink to='/profile'>Profile</NavLink>}
      </div>

      <div className=''>
        {!auth.user && <button className='btn-login me-3' onClick={() => navigate('/login')}> Login</button>}
        {!auth.user && <button className='btn-signup' onClick={() => navigate('/signup')}> Signup</button>}
      </div>
    </nav>

  )
}