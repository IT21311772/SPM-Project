import React from "react";
import { Bar } from "react-chartjs-2";

const Graphs = ({ products }) => {
  // Extract relevant data for your graphs
  const productNames = products.map((product) => product.name);
  const remainingQuantities = products.map((product) => product.rquantity);
  const usedQuantities = products.map((product) => product.uquantity);

  
  

  const data = {
    labels: productNames,
    datasets: [
      {
        label: "Remaining Quantity",
        data: remainingQuantities,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Used Quantity",
        data: usedQuantities,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Graphs</h1>
      <Bar data={data} />
     

    </div>
  );
};

export default Graphs;
