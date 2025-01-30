// import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';

// const NavbarComponent = () => {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem('user'));

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   return (
//     <Navbar className='navbar-fixed' bg="primary" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">Online Furniture Shopping</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             {/* <Nav.Link as={Link} to="/get-all-data">Get All Data</Nav.Link> */}
//             {user ? (
//               <NavDropdown title={`Profile (${user.username})`} id="navbar-profile">
//                 <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
//                 <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
//               </NavDropdown>
//             ) : (
//               <Nav.Link as={Link} to="/login">Login</Nav.Link>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavbarComponent;


import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Navbar className="navbar-fixed" bg="primary" variant="dark" expand="lg" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
      <Container>
        <Navbar.Brand as={Link} to="/">Online Furniture Shopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {user ? (
              <NavDropdown title={`Profile (${user.username})`} id="navbar-profile">
                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
