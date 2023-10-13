import React, { useState, createContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AddTransactions from './Components/addDetails';
import Transactions from './Components/details';
import FinanceReport from '../src/Components/FinanceReport';
import About from './Components/About';
import Contact from './Components/contactUs';
import Signup from './Components/Signup';
import Login from './Components/Login';
import FinanceChart from './Components/DisplayChart';

import AddSupplier from './Components/suppliers/AddSupplier';
import SupplierOrder from './Components/suppliers/SupplierOrd';
import Suppliers from './Components/suppliers/Suppliers';
import SupplierReport from './Components/suppliers/SuppliersPdf';

import AddOrder from './Components/orders/AddOrder';
import Order from './Components/orders/Order';

import AddProduct from './Components/products/addProduct';
import ProductChart from './Components/products/Graphs';
import LowItems from './Components/products/LowQuantityItems';
import Products from './Components/products/Products';
import ProductReport from './Components/products/ProductsPdf';

// Create a context for authentication state
const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Define a function to handle login
  const login = () => {
    setIsAuthenticated(true);
    navigate('/trans'); // Redirect to /trans after successful login
  };

  // Create a context provider with the authentication state and login/logout functions
  const authContextValue = {
    isAuthenticated,
    login,
  };

  return (
    <div className="App">
      <AuthContext.Provider value={authContextValue}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chart" element={<FinanceChart />} />
          <Route path="/register" element={<Signup />} />
          <Route
            path="/trans"
            element={<Transactions />}
          />
          <Route
            path="/fin"
            element={isAuthenticated ? <Transactions /> : <Login />}
          />
          <Route 
            path="/fin/add" 
            element={ <AddTransactions /> } />
          <Route
            path="/fin/add/trans"
            element={ <Transactions /> }
          />
          <Route path="/fin/report" element={<FinanceReport />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path='/sup' element={<Suppliers />} />
          <Route path='/sup/add' element={<AddSupplier />} />
          <Route path='/sup/add/sups' element={<Suppliers />} />
          <Route path='/sup/supord' element={<SupplierOrder />} />
          <Route path='/sup/report' element={<SupplierReport />} />

          <Route path='/order' element={<Order />} />
          <Route path='/order/add' element={<AddOrder />} />
          <Route path='/order/add/order' element={<Order />} />

          <Route path='/items' element={<Products />} />
          <Route path='/items/add' element={<AddProduct />} />
          <Route path='/items/add/items' element={<Products />} />
          <Route path='/prochart' element={<ProductChart />} />
          <Route path='/items/low' element={<LowItems />} />
          <Route path='/items/report' element={<ProductReport />} />
          
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}
  
export default App;




