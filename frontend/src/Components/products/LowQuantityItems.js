import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function FilteredProducts() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from your API
    axios.get('/api/Product/products')
      .then((res) => {
        const lowQuantityProducts = res.data.filter(product => product.rquantity < 5);
        setFilteredProducts(lowQuantityProducts);
      })
      .catch((err) => console.log(err));
  }, []);

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
                  <button onClick={() => navigate("/sups/SupplierOrd")}>View Suppliers</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  // Add a function to handle the "View Suppliers" button click
  function handleViewSuppliers(productId) {
    // You can implement the logic for showing suppliers for the given product here.
    // For example, you can open a modal or navigate to a new page to display the suppliers.
  }
}

export default FilteredProducts;
