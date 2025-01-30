
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavbarComponent from './components/NavbarComponent';
// import Sidebar from './components/SidebarComponent';
// import LoginPage from './pages/LoginPage';
// import ProfilePage from './pages/ProfilePage';
// import Homepage from './pages/Homepage';
// import GetAllDataPage from './pages/GetAllDataPage';
// import ProductList from './pages/ProductList';
// import AddProduct from './pages/AddProduct';
// import EditProduct from './pages/EditProduct';
// import OrdersPage from './pages/Orderspage';


// const ProtectedRoute = ({ element }) => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   return user ? (
//     <div className="d-flex">
//       <Sidebar />
//       <div className="content p-4">
//         {element}
//       </div>
//     </div>
//   ) : <LoginPage />;
// };

// const App = () => {
//   return (
//     <Router>
//       <NavbarComponent />
//       <Routes>
//         <Route path="/" element={<ProtectedRoute element={<Homepage />} />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} />} />
//         <Route path="/get-all-data" element={<ProtectedRoute element={<GetAllDataPage />} />} />
//         <Route path="/admin/products" element={<ProtectedRoute element={<ProductList />} />} />
//         <Route path="/admin/add-product" element={<ProtectedRoute element={<AddProduct />} />} />
//         <Route path="/admin/edit-product/:id" element={<ProtectedRoute element={<EditProduct />} />} />
//         <Route path="/Orders" element={<ProtectedRoute element={<OrdersPage />} />} />

        
//         {/* Fallback route */}
//         <Route path="*" element={<div>404 - Page Not Found</div>} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Sidebar from './components/SidebarComponent';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Homepage from './pages/Homepage';
import GetAllDataPage from './pages/GetAllDataPage';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import OrdersPage from './pages/Orderspage';

const ProtectedRoute = ({ element }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user ? (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <div
        className="content p-4"
        style={{
          marginLeft: '250px', // Sidebar width
          marginTop: '60px',   // Navbar height
          flex: 1,
          overflowY: 'auto',   // Only allow vertical scroll in the content area
        }}
      >
        {element}
      </div>
    </div>
  ) : (
    <LoginPage />
  );
};

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Homepage />} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} />} />
        <Route path="/get-all-data" element={<ProtectedRoute element={<GetAllDataPage />} />} />
        <Route path="/admin/products" element={<ProtectedRoute element={<ProductList />} />} />
        <Route path="/admin/add-product" element={<ProtectedRoute element={<AddProduct />} />} />
        <Route path="/admin/edit-product/:id" element={<ProtectedRoute element={<EditProduct />} />} />
        <Route path="/orders" element={<ProtectedRoute element={<OrdersPage />} />} />
        
        {/* Fallback route */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
