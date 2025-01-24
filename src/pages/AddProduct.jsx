import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [product, setProduct] = useState({
    product_name: '',
    description: '',
    rating: '',
    selling_price: '',
    mrp_price: '',
    discount: ''
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('product_name', product.product_name);
    formData.append('description', product.description);
    formData.append('rating', product.rating);
    formData.append('selling_price', product.selling_price);
    formData.append('mrp_price', product.mrp_price);
    formData.append('discount', product.discount);
    formData.append('image', image);

    try {
      const response = await axios.post('https://furnitureapi.codifyinstitute.org/api/products/upload-product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Redirect to the product list page after adding the product
      navigate('/admin/products');
      console.log('Product added successfully:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="product_name"
            value={product.product_name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group controlId="sellingPrice">
          <Form.Label>Selling Price</Form.Label>
          <Form.Control
            type="number"
            name="selling_price"
            value={product.selling_price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group controlId="mrpPrice">
          <Form.Label>MRP Price</Form.Label>
          <Form.Control
            type="number"
            name="mrp_price"
            value={product.mrp_price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group controlId="discount">
          <Form.Label>Discount</Form.Label>
          <Form.Control
            type="number"
            name="discount"
            value={product.discount}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group controlId="image">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="file"
            onChange={handleImageChange}
            required
          />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="mt-3">
          Add Product
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
