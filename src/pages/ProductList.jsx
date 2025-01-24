// import React, { useEffect, useState } from 'react';
// import { Button, Table } from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   // Fetch all products
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('https://furnitureapi.codifyinstitute.org/api/products/get-all-products');
//       setProducts(response.data.products);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   // Delete product
//   const deleteProduct = async (id) => {
//     try {
//       await axios.delete(`https://furnitureapi.codifyinstitute.org/api/products/delete-product/${id}`);
//       fetchProducts(); // Refresh the product list
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h2>Product List</h2>
//       <Button as={Link} to="/admin/add-product" variant="primary" className="mb-3">
//         Add Product
//       </Button>
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>Product ID</th>
//             <th>Product Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id}>
//               <td>{product.product_id}</td>
//               <td>{product.product_name}</td>
//               <td>{product.description}</td>
//               <td>{product.selling_price}</td>
//               <td>
//                 <Button as={Link} to={`/admin/edit-product/${product._id}`} variant="warning" className="mr-2">
//                   Edit
//                 </Button>
//                 <Button onClick={() => deleteProduct(product._id)} variant="danger">
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default ProductList;



import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://furnitureapi.codifyinstitute.org/api/products/get-all-products');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://furnitureapi.codifyinstitute.org/api/products/delete-product/${id}`);
      fetchProducts(); // Refresh the product list
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <Button as={Link} to="/admin/add-product" variant="primary" className="mb-3">
        Add Product
      </Button>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th> {/* Added Image column */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.product_id}</td>
              <td>{product.product_name}</td>
              <td>{product.description}</td>
              <td>{product.selling_price}</td>
              <td>
                {/* Displaying the product image */}
                <img
                  src={`https://furnitureapi.codifyinstitute.org/${product.image}`} // Assuming 'image' contains the relative path
                  alt={product.product_name}
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              </td>
              <td>
                <Button as={Link} to={`/admin/edit-product/${product._id}`} variant="warning" className="mr-2">
                  Edit
                </Button>
                <Button onClick={() => deleteProduct(product._id)} variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
