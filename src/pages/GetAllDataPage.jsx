

import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';

const GetAllDataPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://furnitureapi.codifyinstitute.org/api/auth/users'); // Replace {{url}} with the actual base URL
        const data = await response.json();
        setUsers(data); // Assuming the API returns an array of user objects
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container>
      <h1 className="my-4 text-primary">All Users</h1>
      <Table striped bordered hover responsive>
        <thead style={{ backgroundColor: '#007bff', color: 'white' }}>
          <tr>
            {/* <th>ID</th> */}
            <th>Application ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.application_id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.Address}</td>
              <td>{user.PhoneNo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default GetAllDataPage;
