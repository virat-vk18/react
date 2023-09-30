import { Route, Routes } from 'react-router-dom'
import './App.css'
import StockMarket from './components/Index/StockMarket'
import FormValidation from './components/formValidation/FormValidation'
import LoginPage from './components/login/LoginPage'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRouter from './components/privateRouter/PrivateRouter'
// import { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { UserAction } from './redux/actions/UserAction'
import AddProduct from './components/product/addProduct/AddProduct'
import EditForm from './components/editForm/EditForm'
import Missing from './components/Missing/Missing'
import ProductList from './components/product/productList/ProductList'
import Otp from './components/login/otp/Otp'
import DataTablef from './components/dataTable/DataTable'

function App () {
  // const dispatch = useDispatch()
  // const [phn, setPhn] = useState()
  // // API Call
  // useEffect(() => {
  //   dispatch(
  //     UserAction.HomeTime({}, resp => {
  //       console.log(resp.data)
  //       setPhn(resp.data)
  //     })
  //   )
  // }, [])
  // useEffect(() => {
  //   dispatch(UserAction.HomeTime())
  //   dispatch(
  //     UserAction.GetCmsData(
  //       {
  //         name: 'vvj'
  //       },
  //       resp => {
  //         console.log(resp)
  //       }
  //     )
  //   )
  // }, [])
  return (
    <div>
      <Routes>
        <Route path='/' element={<StockMarket />} />
        <Route path='/register' element={<FormValidation />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/otp' element={<PrivateRouter />}>
          <Route path='/otp' element={<Otp />} />
        </Route>

        <Route path='/dashboard' element={<PrivateRouter />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='/product' element={<PrivateRouter />}>
          <Route path='/product' element={<AddProduct />} />
        </Route>
        <Route path='/productlist' element={<PrivateRouter />}>
          <Route index element={<ProductList />} />
          <Route path='editpost/:id' element={<EditForm />} />
        </Route>
        <Route path='/movies' element={<DataTablef />} />
        <Route path='*' element={<Missing />} />
      </Routes>
    </div>
  )
}

export default App
