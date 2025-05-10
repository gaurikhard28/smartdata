
import React from 'react';

import { BrowserRouter, Routes, Route, Router, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sales from './components/Sales';
import Inventory from './components/Inventory';
import StockMaintaince from './components/StockMaintaince';
import DebitCredit from './components/DebitCredit';
import Customer from './components/Customer';
import Suppliers from './components/Suppliers';
import CompaniesDashboard from './components/CompaniesDashboard';
import Purchase from './components/Purchase';
import Company from './components/Company';
import Navbar from './components/Navbar';


function App() {
  const navigate=useNavigate();
  const handleLogout = () => {
    // Logic to handle logout
    console.log('User logged out');
  };
  return (
   
    <div style={{ display: 'flex', height: '90vh', overflow: 'hidden' }}>
    <div style={{ width: '150px', height: '90vh', backgroundColor: '#f8f9fa', position: 'fixed', top: 0, left: 0 }}>
    <Navbar userName="YourName" businessName="SmartData" onLogout={handleLogout} onNavigate={navigate} />
    </div>
    <div style={{ marginLeft: '200px', flex: 1, padding: '20px', overflowY: 'auto', height: '100%',scrollbarWidth: 'none'}}>
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/stock-maintenance" element={<StockMaintaince />} />
            <Route path="/debit-credit" element={<DebitCredit />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/companies" element={<Company />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/companies/:id" element={<CompaniesDashboard />} />
            
            
            
        </Routes>
    </div>
</div>
  
  );
}

export default App;
