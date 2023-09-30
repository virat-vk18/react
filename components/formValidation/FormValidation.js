import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const FormValidation = () => {
  const navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('UserName is Required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null, 'password must match'])
      .required('Confirm Password is Required')
      .trim(),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Ts & Cs is required')
  })

  // functions to build form returned by useForm() hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'all'
  })

  function onSubmit (data) {
    const usersData = [...JSON.parse(localStorage.getItem('users') || '[]')]
    const exisist = usersData.find(x => x.email === data.email)
    if (exisist) {
      alert('Account Already Exisist')
      reset()
      return
    }
    const id = usersData.length ? usersData[usersData.length - 1].id + 1 : 1
    alert('SUCCESS!! :-)' + data.firstName)
    localStorage.setItem(
      'users',
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem('users')) || []),
        {
          id,
          userName: data.userName,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          acceptTerms: data.acceptTerms
        }
      ])
    )
      navigate('/login')
    reset()

    // display form data on success
  }

  return (
    <div>
      <div className='card m-3 w-50 mx-auto'>
        <h5 className='card-header'>
          React - Form Validation Example with React Hook Form
        </h5>
        <div className='card-body'>
          <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <div className='form row'>
              <div className='form-group col'>
                <label>Username</label>
                <input
                  name='userName'
                  type='text'
                  {...register('userName')}
                  className={`form-control ${
                    errors.userName ? 'is-invalid' : ''
                  }`}
                />
                <div className='invalid-feedback'>
                  {errors.userName?.message}
                </div>
              </div>
            </div>
            <div className='form row'>
              <div className='form-group col-6'>
                <label>First Name</label>
                <input
                  name='firstName'
                  type='text'
                  {...register('firstName')}
                  className={`form-control ${
                    errors.firstName ? 'is-invalid' : ''
                  }`}
                />
                <div className='invalid-feedback'>
                  {errors.firstName?.message}
                </div>
              </div>
              <div className='form-group col-6'>
                <label>Last Name</label>
                <input
                  name='lastName'
                  type='text'
                  {...register('lastName')}
                  className={`form-control ${
                    errors.lastName ? 'is-invalid' : ''
                  }`}
                />
                <div className='invalid-feedback'>
                  {errors.lastName?.message}
                </div>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col'>
                <label>Email</label>
                <input
                  name='email'
                  type='text'
                  {...register('email')}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                <div className='invalid-feedback'>{errors.email?.message}</div>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col'>
                <label>Password</label>
                <input
                  name='password'
                  type='password'
                  {...register('password')}
                  className={`form-control ${
                    errors.password ? 'is-invalid' : ''
                  }`}
                />
                <div className='invalid-feedback'>
                  {errors.password?.message}
                </div>
              </div>
              <div className='form-group col'>
                <label>Confirm Password</label>
                <input
                  name='confirmPassword'
                  type='password'
                  {...register('confirmPassword')}
                  className={`form-control ${
                    errors.confirmPassword ? 'is-invalid' : ''
                  }`}
                />
                <div className='invalid-feedback'>
                  {errors.confirmPassword?.message}
                </div>
              </div>
            </div>
            <div className='form-group form-check'>
              <input
                name='acceptTerms'
                type='checkbox'
                {...register('acceptTerms')}
                id='acceptTerms'
                className={`form-check-input ${
                  errors.acceptTerms ? 'is-invalid' : ''
                }`}
              />
              <label className='form-check-label'>
                Accept Terms & Conditions
              </label>
              <div className='invalid-feedback'>
                {errors.acceptTerms?.message}
              </div>
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-primary mr-1'>
                Register
              </button>
              <button
                className='btn btn-secondary'
                type='reset'
                onClick={() => reset()}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormValidation
