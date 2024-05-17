import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const nameRef = useRef()
  useEffect(() => {
    nameRef.current.focus()
  }, [])
  const handleSignup = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:3001/users/post`, {
      name, email, password
    })
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) })
    navigate('/login')
    console.log(name, email, password)
  }
  return (
    <div className=''>

      <img className='signup-img' src='https://www.educantabria.es/documents/8735429/8735453/deporte+%281%29.jpg/b19e0297-1045-af88-fe8d-22e67998ccc6?t=1680022115904' />
      <div className='signup-form-div'>

        <form className='signup-form' onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <label htmlFor='sign-name'>Name:</label><br />
          <input id='sign-name' style={{ textTransform: 'capitalize' }} type='text' ref={nameRef} value={name} onChange={(e) => { setName(e.target.value) }}></input><br />
          <label htmlFor='sign-email'>Email:</label><br />
          <input id='sign-email' type='email' style={{ textTransform: 'lowercase' }} value={email} onChange={(e) => { setEmail(e.target.value) }}></input><br />
          <label htmlFor='sign-password'>Password:</label><br />
          <input id='sign-password' type='password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input><br />
          <button className='signup-btn' type='submit'>Signup</button>
        </form>
      </div>
    </div>
  )
}