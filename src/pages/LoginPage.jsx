import { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://furnitureapi.codifyinstitute.org/api/auth/login', { email, password });
      if (response.data.message === "Login successful") {
        localStorage.setItem('user', JSON.stringify(response.data.user)); // Store user data in localStorage
        navigate('/'); // Redirect to the dashboard or home page
      }
    } catch (err) {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
  <h2 className="text-center mb-4">Login</h2>
  <Form onSubmit={handleLogin}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </Form.Group>

    {error && <div className="text-danger mb-3">{error}</div>}

    <Button variant="primary" type="submit" style={{ width: '100%' }}>
      Login
    </Button>
  </Form>
</Container>

  );
};

export default LoginPage;
