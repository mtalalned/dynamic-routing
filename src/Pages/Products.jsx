import React, { useState , useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import MultiActionAreaCard from '../components/Card';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
      .then(res => {
        console.log(res.products)
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

  return (
    <>
    {error && <div>Error in Fetching data</div>}
    {loading && <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'95vh'}}><CircularProgress /></div>}
    <div className='d-flex flex-wrap flex-column justify-content-center align-items-center gap-3 pt-4'>
      <p className='fs-1 fw-bold'>ALL PRODUCTS</p>
      <div className='d-flex flex-wrap justify-content-center align-items-center gap-4'>
      {product && product.map ((items)=>{
      return <MultiActionAreaCard key={items.id} title={items.title} description={items.description} src={items.thumbnail} price={items.price} func={() => SingleProduct(items)}/>
      })}
      </div>
      
    </div>
    </>
  )
}

export default Products