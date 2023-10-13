import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Chart from 'chart.js/auto';
import './products.css';

function FilteredProducts() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showBarChart, setShowBarChart] = useState(false);
  const [showPieChart, setShowPieChart] = useState(false);
  const navigate = useNavigate();
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    // Fetch products from your API
    axios.get('/api/Product/products')
      .then((res) => {
        const lowQuantityProducts = res.data.filter(product => product.rquantity < 5);
        setFilteredProducts(lowQuantityProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  const showBarChartOnClick = () => {
    setShowBarChart(true);
    setShowPieChart(false); // Hide the pie chart
  };

  const showPieChartOnClick = () => {
    setShowPieChart(true);
    setShowBarChart(false); // Hide the bar chart
  };

  useEffect(() => {
    if (showBarChart && barChartRef.current && filteredProducts.length > 0) {
      const productNames = filteredProducts.map(product => product.name);
      const productQuantities = filteredProducts.map(product => product.rquantity);

      const barChartData = {
        labels: productNames,
        datasets: [
          {
            label: 'Remaining Quantity',
            data: productQuantities,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };

      const barCtx = barChartRef.current.getContext('2d');
      new Chart(barCtx, {
        type: 'bar',
        data: barChartData,
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Products'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Quantity'
              }
            }
          }
        }
      });
    }
  }, [showBarChart, filteredProducts]);

  useEffect(() => {
    if (showPieChart && pieChartRef.current && filteredProducts.length > 0) {
      const productNames = filteredProducts.map(product => product.name);
      const productQuantities = filteredProducts.map(product => product.rquantity);

      const pieChartData = {
        labels: productNames,
        datasets: [
          {
            data: productQuantities,
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
          },
        ],
      };

      const pieCtx = pieChartRef.current.getContext('2d');
      new Chart(pieCtx, {
        type: 'pie',
        data: pieChartData,
      });
    }
  }, [showPieChart, filteredProducts]);

  return (
    <div>
      <h1>Low Quantity Products</h1>
      <div className="box">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Category</th>
              <th>Date</th>
              <th>Remaining Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.type}</td>
                <td>{product.category}</td>
                <td>{product.date}</td>
                <td>{product.rquantity}</td>
                <td>
                  <button  style={{
        borderRadius: "5px",
        background: "#373B61",
        padding: "2%",
        border: "#373B61",
        color: "white"
      }}onClick={() => navigate("/sups/SupplierOrd")}> Suppliers</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons to show bar chart and pie chart */}
      <div style={{ margin: "20px" }}>
  <center>
    <button
      style={{
        borderRadius: "5px",
        background: "#373B61",
        padding: "0.5%",
        border: "#373B61",
        color: "white"
      }}
      onClick={showBarChartOnClick}
    >
      View Bar Chart
    </button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button
      style={{
        borderRadius: "5px",
        background: "#373B61",
        padding: "0.5%",
        border: "#373B61",
        color: "white"
      }}
      onClick={showPieChartOnClick}
    >
      View Pie Chart
    </button>
    <br></br>
  </center>
</div>


      {/* Display the charts side by side with black frames */}
<center>
      <div className="chart-container" style={{ display: 'flex',width: '80%'}}>
  {showBarChart && (
    
    <div style={{ flex: 50, border: '8px solid white', padding: '1px', borderRadius: '20px', height: '550px' }}>
  <h2>Bar Chart</h2>
  <canvas ref={barChartRef}  />
</div>
)}
  {showPieChart && (
    <div style={{ flex: 50, border: '8px solid white', padding: '1px', borderRadius: '20px' ,height: '700px'}}>
      <h2>Pie Chart</h2>
      <canvas ref={pieChartRef}  />
    </div>
  )}
</div>
</center>

    </div>
  );
}

export default FilteredProducts;
