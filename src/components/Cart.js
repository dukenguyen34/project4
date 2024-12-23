// src/components/Cart.js
import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { useCart } from '../services/cartService';
import DataService from '../services/dataService';

const Cart = () => {
  const { cart, clearCart } = useCart();

  const handlePlaceOrder = () => {
    DataService.placeOrder(cart).then(response => {
      clearCart();
      alert('Order placed successfully!');
    });
  };

  return (
    <Container>
      <h2>Cart</h2>
      <ListGroup>
        {cart.map((item, index) => (
          <ListGroup.Item key={index}>
            {item.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button className="mt-3" variant="success" onClick={handlePlaceOrder}>Place Order</Button>
      <Button className="mt-3" variant="danger" onClick={clearCart}>Clear Cart</Button>
    </Container>
  );
};

export default Cart;
