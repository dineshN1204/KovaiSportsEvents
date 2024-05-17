import React from 'react'
import { useAuth } from './AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    return (
        <div className='profile-div'>
        <img className='profile-img' src='https://getwallpapers.com/wallpaper/full/2/f/0/1230746-best-sports-wallpaper-2560x1600-windows-xp.jpg'></img>
            <div className='profile-div1'>
                <h1>Welcome</h1> <h3>{auth.user}</h3> 
                <button className='btn-logout' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}