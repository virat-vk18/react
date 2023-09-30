import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    ProductId: Yup.number().required('Product ID is Required'),
    ProductName: Yup.string().required('Product Name is required'),
    Qunatity: Yup.number().required('Qunatity is required'),
    ProductPrice: Yup.number().required('Price is required')
  })
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
    let currentUser = JSON.parse(localStorage.getItem('IsLogged') || '[]')
    localStorage.setItem(
      `${currentUser.userName} products`,
      JSON.stringify([
        ...(JSON.parse(
          localStorage.getItem(`${currentUser.userName} products`)
        ) || []),
        {
          productId: data.ProductId,
          productName: data.ProductName,
          qunatity: data.Qunatity,
          productPrice: data.ProductPrice
        }
      ])
    )
    navigate('/productlist')
    reset()
  }

  //   function onSubmit (data) {
  //     const usersData = [...JSON.parse(localStorage.getItem('users') || '[]')]
  //     const exisist = usersData.find(x => x.email === data.email)
  //     if (exisist) {
  //       alert('Account Already Exisist')
  //       reset()
  //       return
  //     }
  //     const id = usersData.length ? usersData[usersData.length - 1].id + 1 : 1
  //     alert('SUCCESS!! :-)' + data.firstName)
  //     localStorage.setItem(
  //       'users',
  //       JSON.stringify([
  //         ...(JSON.parse(localStorage.getItem('users')) || []),
  //         {
  //           id,
  //           userName: data.userName,
  //           firstName: data.firstName,
  //           lastName: data.lastName,
  //           email: data.email,
  //           password: data.password,
  //           acceptTerms: data.acceptTerms
  //         }
  //       ])
  //     )
  //     reset()

  //     // display form data on success
  //   }

  return (
    <div>
      <div className='card m-3 w-50 mx-auto'>
        <h5 className='card-header'>Product Form</h5>
        <div className='card-body'>
          <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <div className='form row'>
              <div className='form-group col'>
                <label>Product ID</label>
                <input
                  name='userName'
                  type='number'
                  {...register('ProductId')}
                  className={`form-control ${
                    errors.ProductId ? 'is-invalid' : ''
                  }`}
                />
                <div className='invalid-feedback'>
                  {errors.ProductId?.message}
                </div>
              </div>
            </div>
            <div className='form row'>
              <div className='form-group col-6'>
                <label>Product Name</label>
                <input
                  name='firstName'
                  type='text'
                  {...register('ProductName')}
                  className={`form-control ${
                    errors.ProductName ? 'is-invalid' : ''
                  }`}
                />
                <div className='invalid-feedback'>
                  {errors.ProductName?.message}
                </div>
              </div>
              <div className='form-group col-6'>
                <label>Qunatity</label>
                <input
                  name='lastName'
                  type='number'
                  {...register('Qunatity')}
                  className={`form-control ${
                    errors.Qunatity ? 'is-invalid' : ''
                  }`}
                />
                <div className='invalid-feedback'>
                  {errors.Qunatity?.message}
                </div>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col'>
                <label>ProductPrice</label>
                <input
                  name='ProductPrice'
                  type='number'
                  {...register('ProductPrice')}
                  className={`form-control ${
                    errors.ProductPrice ? 'is-invalid' : ''
                  }`}
                />
                <div className='invalid-feedback'>
                  {errors.ProductPrice?.message}
                </div>
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

export default AddProduct
