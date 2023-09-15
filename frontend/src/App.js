import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import AddTransactions from './Components/addDetails';
import Transactions from './Components/details';
import FinanceReport from '../src/Components/FinanceReport';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Transactions />} />
                <Route path='/trans'element={<Transactions />} />
                <Route path='/fin'element={<Transactions />} />
                <Route path='/fin/add' element={<AddTransactions />} />
                <Route path='/fin/add/trans'element={<Transactions />} />
                <Route path='/fin/report' element={<FinanceReport />} />
            </Routes>
        </div>
    );
}
  
export default App;




