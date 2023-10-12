import "./dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div className="App">

      <div className="dash">
        <center>
        <div className="container">
          <button className="btn-func" onClick={() => navigate("/products")}> Inventory Management</button>
        </div>

        <div className="container">
          <button className="btn-func" onClick={() => navigate("/sups")}>Supplier Management</button>
        </div>

        {/* <div className="container">
          <button className="btn-func" onClick={() => navigate("/ords")}>Order Management </button>
        </div> */}
        
        </center>
      </div>
    </div>
  );
}

export default Dashboard;
