

// import React, { useEffect, useState } from 'react';
// import { Table, Container, Pagination, Button } from 'react-bootstrap';
// import { ChevronLeft, ChevronRight, ChevronDoubleLeft, ChevronDoubleRight } from 'react-bootstrap-icons'; // Icons for pagination

// const GetAllDataPage = () => {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [usersPerPage] = useState(5);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('https://furnitureapi.codifyinstitute.org/api/auth/users'); // Replace with actual base URL
//         const data = await response.json();
//         setUsers(data); // Assuming the API returns an array of user objects
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Calculate indices for current page users
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   // Handle page change
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Handle next and previous page navigation
//   const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
//   const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

//   return (
//     <Container>
//       <h1 className="my-4 text-primary">All Users</h1>
//       <Table striped bordered hover responsive>
//         <thead style={{ backgroundColor: '#007bff', color: 'white' }}>
//           <tr>
//             <th>Application ID</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Phone Number</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentUsers.map((user) => (
//             <tr key={user._id}>
//               <td>{user.application_id}</td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.Address}</td>
//               <td>{user.PhoneNo}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Pagination Controls */}
//       <div className="d-flex justify-content-between align-items-center">
//         <Pagination>
//           <Pagination.Prev onClick={prevPage} disabled={currentPage === 1}>
//             <ChevronLeft />
//           </Pagination.Prev>
//           <Pagination.Item onClick={() => paginate(1)}>{1}</Pagination.Item>
//           <Pagination.Item onClick={() => paginate(2)}>{2}</Pagination.Item>
//           <Pagination.Item onClick={() => paginate(3)}>{3}</Pagination.Item>
//           <Pagination.Item onClick={() => paginate(4)}>{4}</Pagination.Item>
//           <Pagination.Item onClick={() => paginate(5)}>{5}</Pagination.Item>
//           <Pagination.Next onClick={nextPage} disabled={indexOfLastUser >= users.length}>
//             <ChevronRight />
//           </Pagination.Next>
//         </Pagination>
//         <Button variant="link" onClick={() => paginate(1)} disabled={currentPage === 1}>
//           <ChevronDoubleLeft />
//         </Button>
//         <Button variant="link" onClick={() => paginate(Math.ceil(users.length / usersPerPage))} disabled={currentPage === Math.ceil(users.length / usersPerPage)}>
//           <ChevronDoubleRight />
//         </Button>
//       </div>
//     </Container>
//   );
// };

// export default GetAllDataPage;


import React, { useEffect, useState } from 'react';
import { Table, Container, Pagination, Button } from 'react-bootstrap';
import { ChevronLeft, ChevronRight, ChevronDoubleLeft, ChevronDoubleRight, Pencil, Trash } from 'react-bootstrap-icons'; // Icons for pagination and actions

const GetAllDataPage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://furnitureapi.codifyinstitute.org/api/auth/users'); // Replace with actual base URL
        const data = await response.json();
        setUsers(data); // Assuming the API returns an array of user objects
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Calculate indices for current page users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle next and previous page navigation
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  // Show alert for Edit/Delete actions
  const handleActionClick = () => {
    alert("You don't have access to Edit or Delete.");
  };

  return (
    <Container>
      <h1 className="my-4 text-primary">All Users</h1>
      <Table striped bordered hover responsive>
        <thead style={{ backgroundColor: '#007bff', color: 'white' }}>
          <tr>
            <th>Application ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.application_id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.Address}</td>
              <td>{user.PhoneNo}</td>
              <td>
                {/* Actions Button with Edit and Delete Icons */}
                <Button variant="link" className="mr-2" onClick={handleActionClick}>
                  <Pencil color="blue" size={20} />
                </Button>
                <Button variant="link" onClick={handleActionClick}>
                  <Trash color="red" size={20} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between align-items-center">
        <Pagination>
          <Pagination.Prev onClick={prevPage} disabled={currentPage === 1}>
            <ChevronLeft />
          </Pagination.Prev>
          <Pagination.Item onClick={() => paginate(1)}>{1}</Pagination.Item>
          <Pagination.Item onClick={() => paginate(2)}>{2}</Pagination.Item>
          <Pagination.Item onClick={() => paginate(3)}>{3}</Pagination.Item>
          <Pagination.Item onClick={() => paginate(4)}>{4}</Pagination.Item>
          <Pagination.Item onClick={() => paginate(5)}>{5}</Pagination.Item>
          <Pagination.Next onClick={nextPage} disabled={indexOfLastUser >= users.length}>
            <ChevronRight />
          </Pagination.Next>
        </Pagination>
        <Button variant="link" onClick={() => paginate(1)} disabled={currentPage === 1}>
          <ChevronDoubleLeft />
        </Button>
        <Button variant="link" onClick={() => paginate(Math.ceil(users.length / usersPerPage))} disabled={currentPage === Math.ceil(users.length / usersPerPage)}>
          <ChevronDoubleRight />
        </Button>
      </div>
    </Container>
  );
};

export default GetAllDataPage;
