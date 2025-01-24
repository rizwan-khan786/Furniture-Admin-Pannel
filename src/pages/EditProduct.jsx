import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [product, setProduct] = useState({
    product_name: '',
    description: '',
    rating: '',
    selling_price: '',
    mrp_price: '',
    discount: ''
  });
  const [image, setImage] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate for navigation

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://furnitureapi.codifyinstitute.org/api/products/get-all-products/${id}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

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
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.put(`https://furnitureapi.codifyinstitute.org/api/products/edit-product/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Redirect to the product list page after updating the product
      navigate('/admin/products');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Product</h2>
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
          />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="mt-3">
          Update Product
        </Button>
      </Form>
    </div>
  );
};

export default EditProduct;
