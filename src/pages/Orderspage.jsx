import React, { useState, useEffect } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all orders from the API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://furnitureapi.codifyinstitute.org/api/orders/');
        setOrders(response.data.orders); // Assuming the API returns { orders: [] }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Update order status
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await axios.patch('https://furnitureapi.codifyinstitute.org/api/orders/update-status', {
        orderId, // Pass only orderId and new status
        status: newStatus,
      });

      alert('Order status updated successfully');

      // Update the local order state to reflect the status change
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId
            ? { ...order, paymentInfo: { ...order.paymentInfo, status: newStatus } }
            : order
        )
      );
    } catch (error) {
      console.error('Error updating order status:', error);
      alert('Error updating order status');
    }
  };

  if (loading) {
    return <div>Loading orders...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Manage Orders</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Payment Method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.user_id.username}</td>
              <td>
                {order.products.map((product) => (
                  <div key={product._id}>
                    <strong>{product.product_id.product_name}</strong>
                    <br />
                    Quantity: {product.quantity}
                    <br />
                    Price: ₹{product.product_id.selling_price}
                  </div>
                ))}
              </td>
              <td>₹{order.totalAmount}</td>
              <td>{order.paymentInfo.status}</td>
              <td>{order.paymentInfo.paymentMethod}</td>
              <td>
                <Form.Control
                  as="select"
                  value={order.paymentInfo.status}
                  onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </Form.Control>
                <Button
                  variant="success"
                  onClick={() => updateOrderStatus(order._id, order.paymentInfo.status)}
                  className="mt-2"
                >
                  Update Status
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrdersPage;
