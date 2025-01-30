// import React from 'react';
// import { Card, Container, Row, Col, Button } from 'react-bootstrap';

// const Homepage = () => {
//   return (
//     <div
//       className="dashboard"
//       style={{
//         minHeight: '100vh', // Ensure the full height is utilized
//         overflowY: 'auto', // Allow vertical scrolling
//       }}
//     >
//       <div
//         className="jumbotron text-center p-5"
//         style={{
//           backgroundColor: '#333',
//           color: 'white',
//           borderRadius: '10px',
//         }}
//       >
//         <h1 className="display-4">Welcome to Online Furniture Shopping Dashboard</h1>
//         <p className="lead">Your one-stop solution for managing furniture inventory, orders, and more.</p>
//       </div>

//       <Container className="mt-5">
//         <h2 className="text-center text-primary mb-4">Dashboard Overview</h2>
//         <Row className="g-4">
//           <Col md={4}>
//             <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
//               <Card.Body>
//                 <Card.Title className="text-center">Orders</Card.Title>
//                 <Card.Text className="text-center text-muted">
//                   View and manage all customer orders efficiently.
//                 </Card.Text>
//                 <Button variant="primary" block href="/orders">
//                   View Orders
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col md={4}>
//             <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
//               <Card.Body>
//                 <Card.Title className="text-center">Products</Card.Title>
//                 <Card.Text className="text-center text-muted">
//                   Manage your furniture inventory and add new products.
//                 </Card.Text>
//                 <Button variant="success" block href="/products">
//                   Manage Products
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col md={4}>
//             <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
//               <Card.Body>
//                 <Card.Title className="text-center">Users</Card.Title>
//                 <Card.Text className="text-center text-muted">
//                   View registered users and manage user accounts.
//                 </Card.Text>
//                 <Button variant="info" block href="/users">
//                   View Users
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row className="mt-4 g-4">
//           <Col md={6}>
//             <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
//               <Card.Body>
//                 <Card.Title className="text-center">Reports</Card.Title>
//                 <Card.Text className="text-center text-muted">
//                   Generate sales and inventory reports.
//                 </Card.Text>
//                 <Button variant="warning" block href="/reports">
//                   Generate Reports
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col md={6}>
//             <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
//               <Card.Body>
//                 <Card.Title className="text-center">Settings</Card.Title>
//                 <Card.Text className="text-center text-muted">
//                   Configure your dashboard preferences and account settings.
//                 </Card.Text>
//                 <Button variant="dark" block href="/settings">
//                   Go to Settings
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       <footer className="text-center mt-5 text-muted">
//         <p>© 2025 Online Furniture. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Homepage;


import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Homepage = () => {
  // Fake data for users
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Fake user data
    const fakeUsers = [
      { role: 'Admin' }, { role: 'Admin' },
      { role: 'Seller' }, { role: 'Seller' }, { role: 'Seller' },
      { role: 'Customer' }, { role: 'Customer' }, { role: 'Customer' }, { role: 'Customer' },
    ];
    setUsers(fakeUsers);
  }, []);

  // Chart Data Preparation

  // Bar Chart: Users by Role
  const roles = users.reduce((acc, user) => {
    const role = user.role || 'Unknown';
    acc[role] = acc[role] ? acc[role] + 1 : 1;
    return acc;
  }, {});

  const barChartData = {
    labels: Object.keys(roles),
    datasets: [
      {
        label: 'Users by Role',
        data: Object.values(roles),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart: Product Distribution
  const pieChartData = {
    labels: ['Furniture', 'Decor', 'Accessories'],
    datasets: [
      {
        data: [300, 50, 150],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Line Chart: Order Trend (Fake Data)
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Orders Over Time',
        data: [40, 45, 60, 55, 80, 90],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  // Doughnut Chart: Order Completion (Fake Data)
  const doughnutChartData = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div
      className="dashboard"
      style={{
        minHeight: '100vh',
        overflowY: 'auto',
      }}
    >
      <div
        className="jumbotron text-center p-5"
        style={{
          backgroundColor: '#333',
          color: 'white',
          borderRadius: '10px',
        }}
      >
        <h1 className="display-4">Welcome to Online Furniture Shopping Dashboard</h1>
        <p className="lead">Your one-stop solution for managing furniture inventory, orders, and more.</p>
      </div>

      <Container className="mt-5">
        {/* <h2 className="text-center text-primary mb-4">Dashboard Overview</h2> */}

        {/* Chart Section */}
        <Row className="g-4">
          <Col md={6}>
            <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title className="text-center">Users by Role (Bar Chart)</Card.Title>
                <Bar data={barChartData} options={{ responsive: true }} />
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title className="text-center">Product Distribution (Pie Chart)</Card.Title>
                <Pie data={pieChartData} options={{ responsive: true }} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mt-4">
          <Col md={6}>
            <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title className="text-center">Order Trend (Line Chart)</Card.Title>
                <Line data={lineChartData} options={{ responsive: true }} />
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title className="text-center">Order Completion (Doughnut Chart)</Card.Title>
                <Doughnut data={doughnutChartData} options={{ responsive: true }} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Other Cards */}
        <Row className="mt-4 g-4">
          <Col md={4}>
            <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title className="text-center">Orders</Card.Title>
                <Card.Text className="text-center text-muted">View and manage all customer orders efficiently.</Card.Text>
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
                <Card.Text className="text-center text-muted">Manage your furniture inventory and add new products.</Card.Text>
                <Button variant="success" block href="/admin/products">
                  Manage Products
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title className="text-center">Users</Card.Title>
                <Card.Text className="text-center text-muted">View registered users and manage user accounts.</Card.Text>
                <Button variant="info" block href="/get-all-data">
                  View Users
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="text-center mt-5 text-muted">
        <p>© 2025 Online Furniture. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
