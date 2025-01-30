import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { House, Box, Cart, ClipboardData } from 'react-bootstrap-icons'; // Adding icons for a more polished look

const SidebarComponent = () => {
  return (
    <div
      style={{
        marginTop: '50px', // Adjusts for navbar height
        width: '250px',
        height: '100vh',
        position: 'fixed',
        backgroundColor: '#343a40',
        color: '#fff',
        padding: '20px',
        boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.1)',
      }}
      className="d-flex flex-column"
    >
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link 
          as={Link} 
          to="/" 
          className="d-flex align-items-center text-white py-3 mb-3 rounded hover-effect"
          style={{ paddingLeft: '20px', paddingRight: '20px' }}
        >
          <House className="mr-3" style={{ fontSize: '1.5rem' ,marginRight:'10px' }}/>
          <span style={{ fontSize: '1.1rem'}}>Home</span>
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/get-all-data" 
          className="d-flex align-items-center text-white py-3 mb-3 rounded hover-effect"
          style={{ paddingLeft: '20px', paddingRight: '20px' }}
        >
          <ClipboardData className="mr-3" style={{ fontSize: '1.5rem' ,marginRight:'10px' }} />
          <span style={{ fontSize: '1.1rem' }}>Get All Data</span>
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/admin/products" 
          className="d-flex align-items-center text-white py-3 mb-3 rounded hover-effect"
          style={{ paddingLeft: '20px', paddingRight: '20px' }}
        >
          <Box className="mr-3" style={{ fontSize: '1.5rem' ,marginRight:'10px' }} />
          <span style={{ fontSize: '1.1rem' }}>Get All Products</span>
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/orders" 
          className="d-flex align-items-center text-white py-3 mb-3 rounded hover-effect"
          style={{ paddingLeft: '20px', paddingRight: '20px' }}
        >
          <Cart className="mr-3" style={{ fontSize: '1.5rem' ,marginRight:'10px' }} />
          <span style={{ fontSize: '1.1rem' }}>Order History</span>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SidebarComponent;
