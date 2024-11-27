import React, { useState , useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import MultiActionAreaCard from '../components/Card';
import { Button } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../Config/firebaseconfig';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Config/redux/reducers/CartSlice';

const Products = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
      .then(res => {
        setProduct(res.products)
      })
      .catch(err => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  
  const navigate = useNavigate()

  const SingleProduct = (items) => {
    navigate(`/product/${items.id}`)
  }

  const SignOut = ()=> {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }

  const dispatch = useDispatch()

  const selector = useSelector(state => state.cart.cart)
  console.log (selector)

  const addCart = (items)=> {
    // console.log (items)
    dispatch(addToCart(items))

  }

  return (
    <>
    {error && <div>Error in Fetching data</div>}
    {loading && <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'95vh'}}><CircularProgress /></div>}
    <div className='d-flex flex-wrap flex-column justify-content-center align-items-center gap-3 pt-4'>
      <p className='fs-1 fw-bold'>ALL PRODUCTS</p>
      <Button variant="contained" sx={{width:'150px'}} onClick={SignOut}>SIGNOUT</Button>
      <div className='d-flex flex-wrap justify-content-center align-items-center gap-4 py-5'>
      {product && product.map ((items)=>{
      return <MultiActionAreaCard key={items.id} title={items.title} description={items.description} src={items.thumbnail} price={items.price} func={() => SingleProduct(items)} func2={addCart} item={items}/>
      })}
      </div>
      
    </div>
    </>
  )
}

export default Products