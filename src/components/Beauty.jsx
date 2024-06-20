import {useEffect} from 'react'
import { useState } from 'react'
import Products from './Products';


const Beauty = () => {

const[sparkles, setSparkles] = useState([]);

useEffect(() => {
let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx`;
fetch(url)
.then((response)=> response.json())
.then((data)=> setSparkles(data));

}, []);

  return (
    
<div>

{sparkles.map((products, index) => {
  return <Products 
  key={index} 
  brand={products.brand} 
  name={products.name} 
  price={products.price} 
  src={products.image_link} 
  url={products.product_link}
  alt={products.name}
  />
})}

</div>
  )
}

export default Beauty