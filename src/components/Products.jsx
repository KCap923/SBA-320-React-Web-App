const Products = ({brand, name, price, src, url}) => {
  return (

    // Cards *************************************************************
<div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px" }}>
  <img src={src} style={{height: "180px", width: "320px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{brand}</h5>
    <p className="card-text">{name}</p>
    <p className="card-text">{price}</p>
    <a href={url} className="btn btn-warning"> More Info </a>
  </div>
</div>
  )
}

export default Products






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
