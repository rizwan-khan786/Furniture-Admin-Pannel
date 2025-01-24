import { Container, Card } from 'react-bootstrap';

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    // If no user data exists, redirect to login page
    window.location.href = '/login';
  }

  return (
    <Container className="mt-5">
      <h2>Profile</h2>
      <Card>
        <Card.Body>
          <h4>Welcome, {user.username}</h4>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Application ID:</strong> {user.application_id}</p>
          <p><strong>User ID:</strong> {user.user_id}</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfilePage;
