import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const Homepage = () => {
  return (
    <div className="dashboard">
      <div
        className="jumbotron text-center p-5"
        style={{
          backgroundColor: '#333',
          color: 'white',
          borderRadius: '10px',
        }}
      >
        <h1 className="display-4">Welcome to Online Furniture  Shopping Dashboard</h1>
        <p className="lead">Your one-stop solution for managing furniture inventory, orders, and more.</p>
      </div>

      <Container className="mt-5">
        <h2 className="text-center text-primary mb-4">Dashboard Overview</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title className="text-center">Orders</Card.Title>
                <Card.Text className="text-center text-muted">
                  View and manage all customer orders efficiently.
                </Card.Text>
                <Button variant="primary" block href="/orders">
                  View Orders
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title className="text-center">Products</Card.Title>
                <Card.Text className="text-center text-muted">
                  Manage your furniture inventory and add new products.
                </Card.Text>
                <Button variant="success" block href="/products">
                  Manage Products
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title className="text-center">Users</Card.Title>
                <Card.Text className="text-center text-muted">
                  View registered users and manage user accounts.
                </Card.Text>
                <Button variant="info" block href="/users">
                  View Users
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4 g-4">
          <Col md={6}>
            <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title className="text-center">Reports</Card.Title>
                <Card.Text className="text-center text-muted">
                  Generate sales and inventory reports.
                </Card.Text>
                <Button variant="warning" block href="/reports">
                  Generate Reports
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title className="text-center">Settings</Card.Title>
                <Card.Text className="text-center text-muted">
                  Configure your dashboard preferences and account settings.
                </Card.Text>
                <Button variant="dark" block href="/settings">
                  Go to Settings
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="text-center mt-5 text-muted">
        <p>© 2025 Vikrant Furniture. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
