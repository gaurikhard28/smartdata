import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Card, Row, Col, Table, Typography, Statistic, Divider, Alert } from 'antd';
import { DollarOutlined, ShoppingCartOutlined, StockOutlined, UserOutlined, CreditCardOutlined } from '@ant-design/icons';

const { Title: AntTitle } = Typography;

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Mock data for KPIs
  const kpiData = [
    { title: 'Total Revenue (MTD)', value: '$50,000', icon: <DollarOutlined /> },
    { title: 'Total Sales (Today)', value: '120', icon: <ShoppingCartOutlined /> },
    { title: 'Stock Value', value: '$15,000', icon: <StockOutlined /> },
    { title: 'Total Expenses', value: '$20,000', icon: <DollarOutlined /> },
    { title: 'Active Customers', value: '1,200', icon: <UserOutlined /> },
    { title: 'Total Orders Fulfilled', value: '1,050', icon: <ShoppingCartOutlined /> },
    { title: 'Receivables Balance', value: '$10,000', icon: <CreditCardOutlined /> },
    { title: 'Profit This Month', value: '$30,000', icon: <DollarOutlined /> },
  ];

  // Mock data for charts
  const salesVsPurchasesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Sales', data: [12000, 19000, 3000, 5000, 20000], backgroundColor: '#74c0fc' },
      { label: 'Purchases', data: [8000, 15000, 2000, 4000, 15000], backgroundColor: '#ff9ff3' },
    ],
  };

  const cashFlowData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Cash Flow', data: [5000, 10000, -2000, 3000, 15000], borderColor: '#a0c4ff', fill: true, backgroundColor: 'rgba(160, 196, 255, 0.2)' },
    ],
  };

  const topProductsData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      { label: 'Top Products', data: [40, 30, 20, 10], backgroundColor: ['#ffb3c1', '#ffd6a5', '#caffbf', '#74c0fc'] },
    ],
  };

  const customerGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Customer Growth', data: [100, 200, 300, 400, 500], borderColor: '#ff9ff3', fill: true, backgroundColor: 'rgba(255, 159, 243, 0.2)' },
    ],
  };

  // Mock data for tables
  const recentTransactions = [
    { key: '1', date: '2023-10-01', type: 'Sale', amount: '$1,200' },
    { key: '2', date: '2023-10-02', type: 'Purchase', amount: '$800' },
  ];

  const lowStockItems = [
    { key: '1', item: 'Product A', stock: '5' },
    { key: '2', item: 'Product B', stock: '2' },
  ];

  const outstandingInvoices = [
    { key: '1', invoice: 'INV-001', amount: '$1,000', dueDate: '2023-10-10' },
    { key: '2', invoice: 'INV-002', amount: '$500', dueDate: '2023-10-15' },
  ];

  const recentCustomers = [
    { key: '1', name: 'John Doe', dateAdded: '2023-10-01' },
    { key: '2', name: 'Jane Smith', dateAdded: '2023-10-02' },
  ];

  return (
    <div style={{ maxWidth: '1200px', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      {/* Header */}
      <Row justify="center" style={{ marginBottom: '30px' }}>
        <Col style={{ marginTop: 0 }}>
          <AntTitle level={1} style={{ textAlign: 'center', color: '#333', fontWeight: 'bold',margin:0,padding:0 }}>Business Dashboard</AntTitle>
          <div style={{ textAlign: 'center', color: '#555' }}>
            <p style={{ margin: 0, fontSize: '16px' }}>Business Name</p>
            <p style={{ margin: 0, fontSize: '14px' }}>{new Date().toLocaleString()}</p>
            <p style={{ margin: 0, fontSize: '14px', fontStyle: 'italic' }}>Last Sync: 2023-10-01</p>
          </div>
        </Col>
      </Row>

      {/* KPI Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: '30px' }}>
        {kpiData.map((kpi, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Statistic 
                title={<span style={{ color: '#555', fontSize: '14px' }}>{kpi.title}</span>} 
                value={kpi.value} 
                prefix={kpi.icon} 
                valueStyle={{ color: '#333', fontWeight: 'bold', fontSize: '18px' }} 
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Charts Section */}
      <Divider orientation="left" style={{ fontSize: '16px', color: '#555' }}>Visual Charts</Divider>
      <Row gutter={[16, 16]} style={{ marginBottom: '30px' }}>
        <Col xs={24} sm={12}>
          <Card title="Sales vs Purchases" style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Bar data={salesVsPurchasesData} />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title="Cash Flow" style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Line data={cashFlowData} />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title="Top Selling Products" style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Pie data={topProductsData} />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title="Customer Growth" style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Line data={customerGrowthData} />
          </Card>
        </Col>
      </Row>

      {/* Tables Section */}
      <Divider orientation="left" style={{ fontSize: '16px', color: '#555' }}>Data Grids</Divider>
      <Row gutter={[16, 16]} style={{ marginBottom: '30px' }}>
        <Col xs={24} sm={12}>
          <Card title="Recent Transactions" style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Table 
              dataSource={recentTransactions} 
              columns={[
                { title: 'Date', dataIndex: 'date', key: 'date' },
                { title: 'Type', dataIndex: 'type', key: 'type' },
                { title: 'Amount', dataIndex: 'amount', key: 'amount' },
              ]} 
              pagination={false} 
              size="small" 
            />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title="Low Stock Items" style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Table 
              dataSource={lowStockItems} 
              columns={[
                { title: 'Item', dataIndex: 'item', key: 'item' },
                { title: 'Stock', dataIndex: 'stock', key: 'stock' },
              ]} 
              pagination={false} 
              size="small" 
            />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title="Outstanding Invoices" style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Table 
              dataSource={outstandingInvoices} 
              columns={[
                { title: 'Invoice', dataIndex: 'invoice', key: 'invoice' },
                { title: 'Amount', dataIndex: 'amount', key: 'amount' },
                { title: 'Due Date', dataIndex: 'dueDate', key: 'dueDate' },
              ]} 
              pagination={false} 
              size="small" 
            />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title="Recent Customers" style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Table 
              dataSource={recentCustomers} 
              columns={[
                { title: 'Name', dataIndex: 'name', key: 'name' },
                { title: 'Date Added', dataIndex: 'dateAdded', key: 'dateAdded' },
              ]} 
              pagination={false} 
              size="small" 
            />
          </Card>
        </Col>
      </Row>

      {/* Alerts Section */}
      <Divider orientation="left" style={{ fontSize: '16px', color: '#555' }}>Alerts & To-Dos</Divider>
      <Alert 
        message="⚠️ Items out of stock: Product B" 
        type="warning" 
        showIcon 
        style={{ marginBottom: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} 
      />
      <Alert 
        message="🔔 Pending approval: Invoice INV-001" 
        type="info" 
        showIcon 
        style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} 
      />
    </div>
  );
};

export default Dashboard;
