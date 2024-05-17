import React from 'react'
import { useAuth } from './AuthProvider'
import { Navigate } from 'react-router-dom'

export default function RequiredAuth(props) {
    const auth = useAuth()
    if (auth.user) {
        return (
            <>{props.children}</>
        )
    }
    else { return <Navigate to='/login' /> }

}