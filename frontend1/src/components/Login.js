import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userList, setUserList] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const auth = useAuth()

  const handleLogin = (e) => {
   
    axios.get(`http://localhost:3001/users/getemail/${email}`)
    .then(res => {
      console.log(res.data[0]?.email)
      console.log(res.data[0]?.name)
      console.log(res)
      if (res.data[0]?.email) {
        if (res.data[0]?.password === password) {
          setErrorMessage('Login Successful')
          auth.login(res.data[0]?.name)
          navigate('/')
        }
        else {
          setErrorMessage('Password Incorrect')
        }
      }
      else {
        setErrorMessage('Email not found')
        
    console.log('Logged in')
      }
      
      }
      )
      .catch(err => console.log(err))
    // const user = userList.find(user => user.email === email)
    // if (user) {
    //   if (user.password === password) {
    //     auth.login(user.name)
    //     navigate('/')
    //   }
    //   else setErrorMessage('Incorrect Password')
    // } else setErrorMessage('Email is not registered')
    e.preventDefault()
  }
  useEffect(() => {
    axios.get(`http://localhost:3001/users/get`)
      .then(res => {
        setUserList(res.data)
        console.log(res)
      })
      .catch(err => { console.log(err) })
  }, [])
  const emailRef = useRef()
  useEffect(() => {
    emailRef.current.focus()
  }, [])
  return (
    <div>
      <img className='login-img' src='https://img.freepik.com/premium-photo/various-sport-equipments-generative-ai_220873-24614.jpg' />
      <div className='login-div'>

        <form className='login-form' onSubmit={handleLogin}>
          <h2>Login</h2>
          <label>Email:</label><br />
          <input type='email' ref={emailRef} value={email} onChange={(e) => { setEmail(e.target.value) }}></input><br />
          <label>Password:</label><br />
          <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input><br />
          <button className='mt-4 login-btn' type='submit'>Login</button>
        </form>
        <div className='errormessage'>
          {errorMessage}
        </div>
      </div>
    </div>
  )
}