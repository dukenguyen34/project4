// src/components/Home.js
import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Jumbotron className="text-center">
      <Container>
        <h1>Welcome to Our Restaurant</h1>
        <p>Delicious food delivered to your door.</p>
        <Button variant="primary" href="/menu">View Menu</Button>
      </Container>
    </Jumbotron>
  );
};

export default Home;

