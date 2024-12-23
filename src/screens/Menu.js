// src/screens/Menu.js
import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import DataService from '../services/dataService';
import { useCart } from '../services/cartService';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    DataService.getMenu().then(response => {
      setMenu(response.data);
    });
  }, []);

  return (
    <Container>
      <h2>Menu</h2>
      <Row>
        {menu.map(item => (
          <Col key={item.id} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(item)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
