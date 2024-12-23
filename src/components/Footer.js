// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-3 mt-auto">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Restaurant Services</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

