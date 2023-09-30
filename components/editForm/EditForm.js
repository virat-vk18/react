import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { useNavigate, useParams } from 'react-router-dom'
const validationSchema = Yup.object().shape({
  productName: Yup.string().required('Product Name is required'),
  quantity: Yup.number().required('Qunatity is required'),
  productPrice: Yup.number().required('Price is required')
})

const EditForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'all'
  })
  // function onSubmit (data) {
  //   let currentUser = JSON.parse(localStorage.getItem('IsLogged') || '[]')
  //   localStorage.setItem(
  //     `${currentUser.userName} products`,
  //     JSON.stringify([
  //       ...(JSON.parse(
  //         localStorage.getItem(`${currentUser.userName} products`)
  //       ) || []),
  //       {
  //         productId: data.ProductId,
  //         productName: data.ProductName,
  //         qunatity: data.Qunatity,
  //         productPrice: data.ProductPrice
  //       }
  //     ])
  //   )
  //   navigate('/productlist')
  //   reset()
  // }

  const { id } = useParams()
  const navigate = useNavigate()
  const currentLogin = JSON.parse(localStorage.getItem('IsLogged') || '[]')
  const [productStorage, setProductStorage] = useState(
    JSON.parse(localStorage.getItem(`${currentLogin.userName} products`))
  )
  const updateItems = newItems => {
    setProductStorage(newItems)
    localStorage.setItem(
      `${currentLogin.userName} products`,
      JSON.stringify(newItems)
    )
  }
  const editList = productStorage.find(x => x.productId === Number(id))

  // const [productName, setProductName] = useState(editList.productName)
  // const [quantity, setQuantity] = useState(editList.qunatity)
  // const [productPrice, setProductPrice] = useState(editList.productPrice)
  // console.log(productName, quantity, productPrice)

  function onSubmit (data) {
    const itemUpdated = productStorage.map(item =>
      item.productId === Number(id)
        ? {
            ...item,
            productName: data.productName,
            qunatity: data.quantity,
            productPrice: data.productPrice
          }
        : item
    )
    updateItems(itemUpdated)
    navigate('/productlist')
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto'>
        <div>
          <h1>Edit Product</h1>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Product Name
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              {...register('productName')}
              // value={productName}
              defaultValue={editList.productName}
              // onChange={e => setProductName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Qunatity</label>
            <input
              type='number'
              className='form-control'
              id='exampleInputPassword1'
              {...register('quantity')}
              // value={quantity}
              defaultValue={editList.qunatity}
              // onChange={e => setQuantity(e.target.value)}
            />
          </div>
          <div className=' mb-3'>
            <label className='form-label' htmlFor='exampleCheck1'>
              ProductPrice
            </label>
            <input
              type='number'
              className='form-control'
              id='exampleCheck1'
              // value={productPrice}
              defaultValue={editList.productPrice}
              {...register('productPrice')}

              // onChange={e => setProductPrice(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditForm
