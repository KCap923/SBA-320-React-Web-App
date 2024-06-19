import {useEffect} from 'react'
import { useState } from 'react'
import Products from './Products';

const Beauty = () => {

const[sparkles, setSparkles] = useState([]);

useEffect(() => {
let url = `http://makeup-api.herokuapp.com/api/v1/products.json`;
fetch(url)
.then((response)=> response.json())
.then((data)=> setSparkles(data.sparkles));

}, []);

  return (
<div>

{sparkles.map((products) => {
  return <Products 
  key={products.id} 
  brand={products.brand} 
  name={products.name} 
  price={products.price} 
  src={products.image_link} 
  alt={products.name}
  />
})}

</div>
  )
}

export default Beauty