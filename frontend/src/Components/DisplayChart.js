import { useEffect,useState } from "react";
import axios from "axios";
import './transactions.css';
import AdminNavBar from "./AdminNavBar";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import FinancialChart from "./FinanceChart";

function App() {
    // Use of useState
    const [data, setData] = useState([]);
    const [income, SetIncome] = useState(0);
    const [expenses, SetExpenses] = useState(0);

    // Use of useEffect
    useEffect(() => {
        axios.get("/api/Fin/trans")
            .then((res) => {
                console.log(res)
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => { 
        let amount1 = 0;
        let amount2 = 0;
        if(data){
            data.map((post) => {
                if(post.type == "Income"){
                    amount1 = amount1 + post.amount;
                }
                else{
                    amount2 = amount2 + post.amount;
                }
        })
        SetIncome(amount1);
        SetExpenses(amount2);
        }

    }, [data]);

return ( 
    <div className="finance">  
    <AdminNavBar /> 
    <FinancialChart income={income} expenses={expenses} />
  </div>
);
}


export default App;
