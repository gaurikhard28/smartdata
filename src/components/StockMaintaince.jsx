import React, { useState } from "react";
import { Card, Row, Col, Table, Select } from "antd";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const { Option } = Select;

const StockMaintaince = () => {
    const [category, setCategory] = useState(null);
    const [stockLevel, setStockLevel] = useState(null);
    const [warehouse, setWarehouse] = useState(null);

    const kpiData = {
        totalItems: 1200,
        outOfStock: 50,
        reorderNeeded: 200,
        overstocked: 300,
    };

    const inventoryValueData = [
        { date: "2023-01-01", value: 10000 },
        { date: "2023-02-01", value: 12000 },
        { date: "2023-03-01", value: 15000 },
        { date: "2023-04-01", value: 14000 },
        { date: "2023-05-01", value: 16000 },
        { date: "2023-06-01", value: 18000 },
        { date: "2023-07-01", value: 20000 },
        { date: "2023-08-01", value: 22000 },
        { date: "2023-09-01", value: 24000 },
        { date: "2023-10-01", value: 26000 },
    ];

    const lowStockData = [
        { product: "Product A", quantity: 10 },
        { product: "Product B", quantity: 5 },
        { product: "Product C", quantity: 8 },
        { product: "Product D", quantity: 12 },
        { product: "Product E", quantity: 3 },
        { product: "Product F", quantity: 7 },
        { product: "Product G", quantity: 15 },
        { product: "Product H", quantity: 2 },
        { product: "Product I", quantity: 6 },
        { product: "Product J", quantity: 4 },
    ];

    const stockTableData = [
        {
            key: "1",
            product: "Product A",
            sku: "SKU001",
            quantity: 10,
            minThreshold: 20,
            maxThreshold: 100,
            reorderStatus: "Reorder Needed",
        },
        {
            key: "2",
            product: "Product B",
            sku: "SKU002",
            quantity: 50,
            minThreshold: 10,
            maxThreshold: 200,
            reorderStatus: "In Stock",
        },
        {
            key: "3",
            product: "Product C",
            sku: "SKU003",
            quantity: 5,
            minThreshold: 15,
            maxThreshold: 80,
            reorderStatus: "Reorder Needed",
        },
        {
            key: "4",
            product: "Product D",
            sku: "SKU004",
            quantity: 30,
            minThreshold: 20,
            maxThreshold: 150,
            reorderStatus: "In Stock",
        },
        {
            key: "5",
            product: "Product E",
            sku: "SKU005",
            quantity: 2,
            minThreshold: 10,
            maxThreshold: 50,
            reorderStatus: "Reorder Needed",
        },
        {
            key: "6",
            product: "Product F",
            sku: "SKU006",
            quantity: 8,
            minThreshold: 5,
            maxThreshold: 30,
            reorderStatus: "In Stock",
        },
        {
            key: "7",
            product: "Product G",
            sku: "SKU007",
            quantity: 15,
            minThreshold: 10,
            maxThreshold: 60,
            reorderStatus: "In Stock",
        },
        {
            key: "8",
            product: "Product H",
            sku: "SKU008",
            quantity: 12,
            minThreshold: 5,
            maxThreshold: 40,
            reorderStatus: "In Stock",
        },
        {
            key: "9",
            product: "Product I",
            sku: "SKU009",
            quantity: 6,
            minThreshold: 3,
            maxThreshold: 20,
            reorderStatus: "Reorder Needed",
        },
        {
            key: "10",
            product: "Product J",
            sku: "SKU010",
            quantity: 4,
            minThreshold: 2,
            maxThreshold: 15,
            reorderStatus: "In Stock",
        },
    ];

    const inventoryValueConfig = {
        labels: inventoryValueData.map((item) => item.date),
        datasets: [
            {
                label: "Inventory Value",
                data: inventoryValueData.map((item) => item.value),
                borderColor: "#1890ff",
                backgroundColor: "rgba(89, 174, 254, 0.2)",
                tension: 0.4,
            },
        ],
    };

    const lowStockConfig = {
        labels: lowStockData.map((item) => item.product),
        datasets: [
            {
                label: "Low Stock Quantity",
                data: lowStockData.map((item) => item.quantity),
                backgroundColor: "rgba(248, 141, 216, 0.51)",
            },
        ],
    };

    const columns = [
        {
            title: "Product",
            dataIndex: "product",
            key: "product",
        },
        {
            title: "SKU",
            dataIndex: "sku",
            key: "sku",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Min Threshold",
            dataIndex: "minThreshold",
            key: "minThreshold",
        },
        {
            title: "Max Threshold",
            dataIndex: "maxThreshold",
            key: "maxThreshold",
        },
        {
            title: "Reorder Status",
            dataIndex: "reorderStatus",
            key: "reorderStatus",
        },
    ];

    return (
        <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
            <h1 style={{ textAlign: "center", color: "#6C757D" }}>Stock Maintenance Dashboard</h1>
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <Card title="Total Items" style={{ backgroundColor: "#fff" }}>
                        {kpiData.totalItems}
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Out of Stock" style={{ backgroundColor: "#fff" }}>
                        {kpiData.outOfStock}
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Reorder Needed" style={{ backgroundColor: "#fff" }}>
                        {kpiData.reorderNeeded}
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Overstocked Items" style={{ backgroundColor: "#fff" }}>
                        {kpiData.overstocked}
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
                <Col span={12}>
                    <Card title="Inventory Value Over Time">
                        <Line data={inventoryValueConfig} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Low Stock Items">
                        <Bar data={lowStockConfig} />
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
                <Col span={24}>
                    <Card title="Stock Data Table">
                        <Table columns={columns} dataSource={stockTableData} />
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
                <Col span={8}>
                    <Select
                        placeholder="Select Category"
                        style={{ width: "100%" }}
                        onChange={(value) => setCategory(value)}
                    >
                        <Option value="electronics">Electronics</Option>
                        <Option value="furniture">Furniture</Option>
                        <Option value="clothing">Clothing</Option>
                    </Select>
                </Col>
                <Col span={8}>
                    <Select
                        placeholder="Select Stock Level"
                        style={{ width: "100%" }}
                        onChange={(value) => setStockLevel(value)}
                    >
                        <Option value="low">Low</Option>
                        <Option value="medium">Medium</Option>
                        <Option value="high">High</Option>
                    </Select>
                </Col>
                <Col span={8}>
                    <Select
                        placeholder="Select Warehouse"
                        style={{ width: "100%" }}
                        onChange={(value) => setWarehouse(value)}
                    >
                        <Option value="warehouse1">Warehouse 1</Option>
                        <Option value="warehouse2">Warehouse 2</Option>
                        <Option value="warehouse3">Warehouse 3</Option>
                    </Select>
                </Col>
            </Row>
        </div>
    );
};

export default StockMaintaince;