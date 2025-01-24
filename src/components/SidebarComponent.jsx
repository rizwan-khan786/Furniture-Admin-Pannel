import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SidebarComponent = () => {
  return (
    <div style={{ width: '250px', height: '100vh', backgroundColor: '#f8f9fa' }} className="p-3">
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/get-all-data">Get All Data</Nav.Link>
        <Nav.Link as={Link} to="/admin/products">Get All Products</Nav.Link>
        <Nav.Link as={Link} to="/Orders">Order History</Nav.Link>


      </Nav>
    </div>
  );
};

export default SidebarComponent;
