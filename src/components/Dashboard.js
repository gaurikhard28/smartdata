import React from 'react';
import { Bar, Pie, Line, Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 3000, 5000, 20000],
        backgroundColor: '#74c0fc',
        borderColor: '#1c7ed6',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Sales', 'Marketing', 'Operations'],
    datasets: [
      {
        label: 'Expenditure',
        data: [3000, 5000, 2000],
        backgroundColor: ['#ffb3c1', '#ffd6a5', '#caffbf'],
        hoverBackgroundColor: ['#ff8fa3', '#ffc078', '#b2f2bb'],
      },
    ],
  };

  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Visitors',
        data: [200, 450, 300, 600],
        fill: true,
        backgroundColor: 'rgba(160, 196, 255, 0.2)',
        borderColor: '#a0c4ff',
        tension: 0.4,
      },
    ],
  };

  const scatterData = {
    datasets: [
      {
        label: 'Performance',
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 10 },
          { x: 20, y: 30 },
          { x: 25, y: 25 },
        ],
        backgroundColor: '#ff9ff3',
        borderColor: '#f368e0',
        borderWidth: 1,
      },
    ],
  };

  const tableData = [
    { month: 'January', revenue: '$12,000', expenditure: '$3,000', visitors: '200' },
    { month: 'February', revenue: '$19,000', expenditure: '$5,000', visitors: '450' },
    { month: 'March', revenue: '$3,000', expenditure: '$2,000', visitors: '300' },
    { month: 'April', revenue: '$5,000', expenditure: '$4,000', visitors: '600' },
    { month: 'May', revenue: '$20,000', expenditure: '$6,000', visitors: '700' },
  ];

  return (
    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div className="dashboard" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#343a40' }}>Business Analytics Dashboard</h1>
        <div
          className="charts"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          <div
            className="chart-box"
            style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ textAlign: 'center', marginBottom: '10px', color: '#495057' }}>Revenue</h3>
            <Bar data={barData} />
          </div>
          <div
            className="chart-box"
            style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ textAlign: 'center', marginBottom: '10px', color: '#495057' }}>Expenditure</h3>
            <Pie data={pieData} />
          </div>
          <div
            className="chart-box"
            style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ textAlign: 'center', marginBottom: '10px', color: '#495057' }}>Visitors</h3>
            <Line data={lineData} />
          </div>
          <div
            className="chart-box"
            style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ textAlign: 'center', marginBottom: '10px', color: '#495057' }}>Performance</h3>
            <Scatter data={scatterData} />
          </div>
        </div>
        <div
          className="table-container"
          style={{
            marginTop: '40px',
            padding: '20px',
            background: '#f8f9fa',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#495057' }}>Monthly Overview</h3>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#e9ecef' }}>
                <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Month</th>
                <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Revenue</th>
                <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Expenditure</th>
                <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Visitors</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#ffffff' }}>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>{row.month}</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>{row.revenue}</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>{row.expenditure}</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>{row.visitors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
