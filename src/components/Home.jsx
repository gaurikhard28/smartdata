import React from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Company from './Company';
import Sales from './Sales';
import Purchase from './Purchase';
import DebitCredit from './DebitCredit';
import StockMaintaince from './StockMaintaince';
import Inventory from './Inventory';
import Customer from './Customer';
import Suppliers from './Suppliers';
import CompaniesDashboard from './CompaniesDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Home = () => {
    return (
        <div style={{ display: 'flex', height: '90vh', overflow: 'hidden' }}>
            <div style={{ width: '150px', height: '90vh', backgroundColor: '#f8f9fa', position: 'fixed', top: 0, left: 0 }}>
                <Navbar />
            </div>
            <div style={{ marginLeft: '200px', flex: 1, padding: '20px', overflowY: 'auto', height: '100%',scrollbarWidth: 'none'}}>
                    <Routes>
                    <Route path="/" element={<App />} />
                    {/* Add other routes here */}
                    <Route path="/dashboard" element={<  Dashboard />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/stock-maintenance" element={<StockMaintaince />} />
                    <Route path="/debit-credit" element={<DebitCredit />} />
                    <Route path="/customer" element={<Customer />} />
                    <Route path="/suppliers" element={<Suppliers />} />
                    <Route path="/companies" element={<CompaniesDashboard />} />
                    <Route path="/purchase" element={<Purchase />} />
                    <Route path="/companies" element={<Company />} />
                    
                    
                    
                </Routes>
            </div>
        </div>
    );
};

export default Home;