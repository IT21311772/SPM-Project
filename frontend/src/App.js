import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import AddTransactions from './Components/addDetails';
import Transactions from './Components/details';
import FinanceReport from '../src/Components/FinanceReport';
import About from './Components/About';
import Contact from './Components/contactUs';
import AddSupplier from './Components/suppliers/AddSupplier';
import Supplier from './Components/suppliers/Suppliers';
import Order from './Components/orders/Order'
import AddOrder from './Components/orders/Order'
import SupplierPdf from './Components/suppliers/SuppliersPdf';
import AddProducts from './Components/products/addProduct';
import Products from './Components/products/Products';
import ProductsPdf from './Components/products/ProductsPdf';
import Dashboard from './Components/dashboard/dashboard';
import Graphs from './Components/products/Graphs';
import LowQuantityItems from './Components/products/LowQuantityItems';
import SupplierOrd from './Components/suppliers/SupplierOrd';


function App() {
    return (
        <div className="App">
            <Routes>
            <Route path='/' element={<Dashboard />} />
                <Route path='/trans'element={<Transactions />} />
                <Route path='/fin'element={<Transactions />} />
                <Route path='/fin/add' element={<AddTransactions />} />
                <Route path='/fin/add/trans'element={<Transactions />} />
                <Route path='/fin/report' element={<FinanceReport />} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/sup/add' element={<AddSupplier />} />
                <Route path='/sups' element={<Supplier />} />
                <Route path='/sup/report' element={<SupplierPdf />} />
                <Route path='/sup/add/sups' element={<Supplier />} />
                <Route  path='/ords/addorder' element ={<AddOrder/>}/>
                <Route path='/ords' element={< Order/>}/>
                <Route path='/sup/addorder/ords' element={<Order />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/add/products' element={<Products />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/add' element={<AddProducts />} />
                <Route path='/products/add/products' element={<Products />} />
                <Route path='/products/report' element={<ProductsPdf/>} /> 
                <Route path='/products/report' element={<ProductsPdf/>} /> 
                <Route path='/products/Graphs' element={<Graphs />} />
                <Route path='/products/LowQuantityItems' element={<LowQuantityItems />} />
                <Route path='/sups/SupplierOrd' element={<SupplierOrd />} />
            </Routes>
        </div>
    );
}
  
export default App;




