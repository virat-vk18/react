import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const ProductList = () => {
  const navigate = useNavigate()
  const currentLogin = JSON.parse(localStorage.getItem('IsLogged') || '[]')

  const [productList, setProductList] = useState(
    JSON.parse(
      localStorage.getItem(`${currentLogin.userName} products`) || '[]'
    )
  )
  const updateItems = newItems => {
    setProductList(newItems)
    localStorage.setItem(
      `${currentLogin.userName} products`,
      JSON.stringify(newItems)
    )
  }

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
        const delItem = productList.filter(item => item.productId !== id)
        updateItems(delItem)
      }
    })
  }
  return (
    <div>
      {productList.length > 0 ? (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Product ID</th>
              <th scope='col'>Product Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Price</th>
              <th scope='col'>Changable</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          {productList.map(item => (
            <tbody key={item.productId}>
              <tr>
                <th scope='row'>{item.productId}</th>
                <td>{item.productName}</td>
                <td>{item.qunatity}</td>
                <td>{item.productPrice}</td>
                <td>
                  <button
                    className='btn btn-success'
                    onClick={() => navigate(`editpost/${item.productId}`)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleDelete(item.productId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <p>No data found</p>
      )}
    </div>
  )
}

export default ProductList
