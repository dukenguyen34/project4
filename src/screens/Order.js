// src/screens/Order.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import DataService from '../services/dataService';
import { useCart } from '../services/cartService';

const Order = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { cart, clearCart } = useCart();

  const handleOrder = (e) => {
    e.preventDefault();
    const order = {
      customerName,
      customerAddress,
      items: cart,
    };
    DataService.placeOrder(order).then(() => {
      clearCart();
      setOrderPlaced(true);
    });
  };

  return (
    <Container>
      <h2>Order</h2>
      {orderPlaced ? (
        <div>
          <h4>Order placed successfully!</h4>
          <p>Thank you for your order. It will be delivered to your address soon.</p>
        </div>
      ) : (
        <Form onSubmit={handleOrder}>
          <Form.Group controlId="formCustomerName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCustomerAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Place Order
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default Order;
