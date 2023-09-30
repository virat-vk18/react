import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
const validationSchema = Yup.object().shape({
  otp: Yup.string().required('Otp is Required')
})

const Otp = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'all'
  })
  function onSubmit (data) {
    const otp = 1234
    if (Number(data.otp) === otp) {
      navigate('/dashboard')
    } else {
      alert('Otp MisMatch')
    }
  }

  return (
    <div>
      <div className='form row'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto'>
          <h1>Otp Verification</h1>
          <div className='form-group col'>
            <label>Enter Your Otp Here</label>
            <input
              name='userName'
              type='password'
              {...register('otp')}
              className={`form-control ${errors.otp ? 'is-invalid' : ''}`}
            />
            <div className='invalid-feedback'>{errors.otp?.message}</div>
          </div>
          <div className='d-grid'>
            <button className=' btn btn-dark' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Otp
