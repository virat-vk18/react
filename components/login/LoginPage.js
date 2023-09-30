// Login.js
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup.string().required('Password is required')
})

function LoginPage () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const navigate = useNavigate()

  const onSubmit = data => {
    const userData = [...JSON.parse(localStorage.getItem('users') || '[]')]
    console.log(userData)
    const currrentLogin = userData.find(
      x => x.email === data.email && x.password === data.password
    )
    if (currrentLogin) {
      alert('welcome bruhhhhhhhhhhhhhhhhhhh')
      localStorage.setItem('IsLogged', JSON.stringify(currrentLogin))
      navigate('/otp')
    } else {
      alert('login mismatch')
      return
    }
    // You can send the data to your authentication logic here
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=' w-50 mx-auto'>
        <h2>Login</h2>
        <div>
          <label className='form-label'>Email:</label>
          <input type='text' {...register('email')} className=' form-control' />
          <p className=' text-danger'>{errors.email?.message}</p>
        </div>
        <div>
          <label className='form-label'>Password:</label>
          <input
            className=' form-control'
            type='password'
            {...register('password')}
          />
          <p className=' text-danger'>{errors.password?.message}</p>
        </div>
        <div>
          <button type='submit' className=' btn btn-outline-success'>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
