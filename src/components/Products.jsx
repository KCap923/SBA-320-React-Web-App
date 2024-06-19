

const Products = ({brand, name, price, src, url}) => {
  return (

    // Cards *************************************************************
<div className="card bg-warning text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px" }}>
  <img src={src} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{brand}</h5>
    <p className="card-text">{name}</p>
    <p className="card-text">{price}</p>

    <a href={url} className="btn btn-primary"> More Info </a>
  </div>
</div>
  )
}

export default Products




// import { useEffect, useState } from "react";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
// // Running getProducts ********************************************************
//     getProducts();

// // Empty array to only run when called ********************************************************
//   }, []);

//   const getProducts = async () => {
//     try {
//       const response = await fetch(
//         `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush`
//       );
//       const data = await response.json();
//       setProducts(data); 
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//     }
//   };

//   return (
//           //*Displaying items by product type ******************************************************** */ 
//     <div>
//       {products.map((product) => (
//         <div key={product.id}>
//           <p>Brand: {product.brand}</p>
//           <p>Name: {product.name}</p>
//           <p>Price: {product.price}</p>
//           <img src={product.image_link} alt={product.name} width="300" />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;








// This code did not display data on site 
//   const getProducts = async () => {
//     const api = await fetch(
//       `http://makeup-api.herokuapp.com/api/v1/products.json`
//     );

//     const data = await api.json();
//     setProducts(data.items);
//   };

//   return (
//     <div>
//       {products.map((items) => {
//         return (
//           <div key={items.id}>
//             <p>{items.brand}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Products;
