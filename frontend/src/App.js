import { Route, Routes } from 'react-router-dom';
import './App.css';
import Transactions from './Components/Transactions';
import AddTransaction from './Components/addTransactions';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Transactions />} />
          <Route path='/add' element={<AddTransaction />} />
          <Route path='/add/transactions' element={<Transactions />} />
        </Routes>
    </div>
  );
}

export default App;
