import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
// Running getProducts ********************************************************
    getProducts();

// Empty array to only run when called ********************************************************
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush`
      );
      const data = await response.json();
      setProducts(data); 
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return (
    <div>
   
      {products.map((product) => (
// Displaying items by product type ********************************************************
        <div key={product.id}>
          <p>Brand: {product.brand}</p>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <img src={product.image_link} alt={product.name} width="300" />
        </div>
      ))}
    </div>
  );
}

export default Products;








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
