import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import AddTransactions from './Components/addDetails';
import Transactions from './Components/details';
import FinanceReport from '../src/Components/FinanceReport';
import About from './Components/About';
import Contact from './Components/contactUs';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/login/trans'element={<Transactions />} />
                <Route path='/trans'element={<Transactions />} />
                <Route path='/fin'element={<Transactions />} />
                <Route path='/fin/add' element={<AddTransactions />} />
                <Route path='/fin/add/trans'element={<Transactions />} />
                <Route path='/fin/report' element={<FinanceReport />} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </div>
    );
}
  
export default App;




