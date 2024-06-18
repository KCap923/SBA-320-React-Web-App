import { useEffect, useState } from "react";

function Products() {

  const[products,setProducts] = useState([]);

  useEffect(() => {
    // Running getProducts
getProducts();

// Empty array to only run when called
  }, []);

const getProducts = async () => {
const api = await fetch

(`http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan?&number=5`);

const data = await api.json();
console.log(data);

};

  return (

    <div> Products </div>
  )
}

export default Products;