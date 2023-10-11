import React from 'react';
import { Bar } from 'react-chartjs-2';

const FinanceChart = ({ income, expenses }) => {
    const labels = ["Income", "Expense", "Profit"];

    const dataGraph = {
        labels: labels,
        datasets: [
            {
                label: "Finance Chart",
                backgroundColor: ['#373B61', '#dac693', '#2f86c4'],
                borderColor: "rgb(255, 99, 132)",
                data: [income, expenses, income - expenses],
                categoryPercentage: 0.6,
            },
        ],
    };
    
    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Category',
                    fontSize: 26, // Adjust the font size here
                },
                ticks: {
                    fontSize: 24, // Adjust the font size for x-axis labels here
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Amount',
                    fontSize: 16, // Adjust the font size here
                },
                ticks: {
                    fontSize: 14, // Adjust the font size for y-axis labels here
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 14, // Adjust the font size for the legend here
                    },
                },
            },
        },
    };
    
    

  return (
    <div className="chart-container" style={{maxHeight: "89vh", marginLeft:"5%"}}>
      <Bar data={dataGraph} options={options}/>
    </div>
  );
};

export default FinanceChart;
