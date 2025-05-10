import React, { useState } from 'react';
import { Card, Row, Col, Table, DatePicker, Select, Input } from 'antd';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

const { RangePicker } = DatePicker;
const { Option } = Select;

const Purchase = () => {
    const [filters, setFilters] = useState({
        dateRange: null,
        supplier: null,
        category: null,
    });

    const handleFilterChange = (key, value) => {
        setFilters({ ...filters, [key]: value });
    };

    // Mock data
    const kpiData = {
        totalPurchaseCost: 50000,
        purchaseToday: 1200,
        supplierCount: 15,
        topVendor: 'Vendor A',
    };

    const purchaseTrendData = {
        labels: ['2023-01-01', '2023-01-02', '2023-01-03'],
        datasets: [
            {
                label: 'Purchase Trend',
                data: [1000, 1200, 1500],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    const vendorWiseData = {
        labels: ['Vendor A', 'Vendor B', 'Vendor C'],
        datasets: [
            {
                label: 'Vendor-wise Purchases',
                data: [20000, 15000, 10000],
                backgroundColor: ['#AEDFF7', '#C3F7D6', '#F7E7AE'],
            },
        ],
    };

    const categoryWiseData = {
        labels: ['Electronics', 'Furniture', 'Stationery'],
        datasets: [
            {
                label: 'Category-wise Purchase Spend',
                data: [25000, 15000, 10000],
                backgroundColor: ['#AEDFF7', '#C3F7D6', '#F7E7AE'],
            },
        ],
    };

    const purchaseOrders = [
        {
            date: '2023-01-01',
            supplier: 'Vendor A',
            product: 'Laptop',
            quantity: 2,
            price: 2000,
            invoiceId: 'INV001',
        },
        {
            date: '2023-01-02',
            supplier: 'Vendor B',
            product: 'Chair',
            quantity: 10,
            price: 500,
            invoiceId: 'INV002',
        },
    ];

    const columns = [
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Supplier', dataIndex: 'supplier', key: 'supplier' },
        { title: 'Product', dataIndex: 'product', key: 'product' },
        { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        { title: 'Invoice ID', dataIndex: 'invoiceId', key: 'invoiceId' },
    ];

    return (
        <div style={{ padding: 20, backgroundColor: '#f9f9f9' }}>
            <h1 style={{ textAlign: "center", color: "#6C757D" }}>Purchase Dashboard</h1>
            {/* KPIs */}
            <Row gutter={16}>
                <Col span={6}>
                    <Card title="Total Purchase Cost">${kpiData.totalPurchaseCost}</Card>
                </Col>
                <Col span={6}>
                    <Card title="Purchase Today">${kpiData.purchaseToday}</Card>
                </Col>
                <Col span={6}>
                    <Card title="Supplier Count">{kpiData.supplierCount}</Card>
                </Col>
                <Col span={6}>
                    <Card title="Top Vendor by Spend">{kpiData.topVendor}</Card>
                </Col>
            </Row>

            {/* Filters */}
            <Row gutter={16} style={{ marginTop: 20 }}>
                <Col span={8}>
                    <RangePicker
                        onChange={(dates) => handleFilterChange('dateRange', dates)}
                    />
                </Col>
                <Col span={8}>
                    <Select
                        placeholder="Select Supplier"
                        style={{ width: '100%' }}
                        onChange={(value) => handleFilterChange('supplier', value)}
                    >
                        <Option value="Vendor A">Vendor A</Option>
                        <Option value="Vendor B">Vendor B</Option>
                    </Select>
                </Col>
                <Col span={8}>
                    <Input
                        placeholder="Product Category"
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                    />
                </Col>
            </Row>

            {/* Charts */}
            <Row gutter={16} style={{ marginTop: 20 }}>
                <Col span={12}>
                    <Card title="Purchase Trend">
                        <Line data={purchaseTrendData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Vendor-wise Purchases">
                        <Bar data={vendorWiseData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </Card>
                </Col>
            </Row>
            <Row gutter={16} style={{ marginTop: 20 }}>
                <Col span={24}>
                    <Card title="Category-wise Purchase Spend">
                        <Pie data={categoryWiseData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </Card>
                </Col>
            </Row>

            {/* Data Table */}
            <Row style={{ marginTop: 20 }}>
                <Col span={24}>
                    <Card title="Purchase Orders">
                        <Table dataSource={purchaseOrders} columns={columns} rowKey="invoiceId" />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Purchase;