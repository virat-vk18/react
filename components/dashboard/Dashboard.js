import React, { useState } from 'react'
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const currentLogin = JSON.parse(localStorage.getItem('IsLogged') || '[]')
  const [productList, setProductList] = useState(
    JSON.parse(
      localStorage.getItem(`${currentLogin.userName} products`) || '[]'
    )
  )

  // const [productList, setProductList] = useState(
  //   JSON.parse(
  //     localStorage.getItem(`${currentLogin.userName} products`) || '[]'
  //   )
  // )
  // const updateItems = newItems => {
  //   setProductList(newItems)
  //   localStorage.setItem(
  //     `${currentLogin.userName} products`,
  //     JSON.stringify(newItems)
  //   )
  // }
  // const handleDelete = id => {
  //   const delItem = productList.filter(item => item.productId !== id)
  //   updateItems(delItem)
  // }
  // let displayTable
  // if (productList.length > 0) {
  //   displayTable = (
  //     <table className='table'>
  //       <thead>
  //         <tr>
  //           <th scope='col'>Product ID</th>
  //           <th scope='col'>Product Name</th>
  //           <th scope='col'>Quantity</th>
  //           <th scope='col'>Price</th>
  //           <th scope='col'>Changable</th>
  //           <th scope='col'>Action</th>
  //         </tr>
  //       </thead>
  //       {productList.map(item => (
  //         <tbody key={item.productId}>
  //           <tr>
  //             <th scope='row'>{item.productId}</th>
  //             <td>{item.productName}</td>
  //             <td>{item.qunatity}</td>
  //             <td>{item.productPrice}</td>
  //             <td>
  //               <button
  //                 className='btn btn-success'
  //                 onClick={() => navigate(`editpost/${item.productId}`)}
  //               >
  //                 Edit
  //               </button>
  //             </td>
  //             <td>
  //               <button
  //                 className='btn btn-danger'
  //                 onClick={() => handleDelete(item.productId)}
  //               >
  //                 Delete
  //               </button>
  //             </td>
  //           </tr>
  //         </tbody>
  //       ))}
  //     </table>
  //   )
  // } else {
  //   displayTable = <h1>No Data Found</h1>
  // }
  function handleClick () {
    localStorage.removeItem('IsLogged')
    navigate('/login')
  }

  return (
    <div className='text-center mt-5'>
      <h1>Welcome {currentLogin.userName}</h1>
      <button type='button' className=' btn btn-danger' onClick={handleClick}>
        Logout
      </button>
      <button className='btn btn-primary' onClick={() => navigate('/product')}>
        Add Product
      </button>
      <button
        className='btn btn-primary'
        onClick={() => navigate('/productlist')}
      >
        Product List
      </button>

      {/* {displayTable} */}
      {productList.length > 0 ? (
        <div>
          ;
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Product ID</th>
                <th scope='col'>Product Name</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Price</th>
              </tr>
            </thead>
            {productList.slice(0, 3).map(item => (
              <tbody key={item.productId}>
                <tr>
                  <th scope='row'>{item.productId}</th>
                  <td>{item.productName}</td>
                  <td>{item.qunatity}</td>
                  <td>{item.productPrice}</td>
                </tr>
              </tbody>
            ))}
          </table>
          <button
            className=' btn btn-danger'
            onClick={() => navigate('/productlist')}
          >
            Show More
          </button>
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  )
}
export default Dashboard
