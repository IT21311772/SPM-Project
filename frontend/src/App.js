import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTransaction from './Components/addDetails';
import Transaction from './Components/details';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Transaction /> }/>
          <Route path='/fin/add' element={<AddTransaction /> }/>
          <Route path='/fin/add/trans' element={<Transaction /> }/>
        </Routes>
    </div>
  );
}

export default App;
