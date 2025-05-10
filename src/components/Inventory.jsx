import React, { useState } from "react";
import { Card, Row, Col, Table, DatePicker, Select, Input, Divider } from "antd";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const { RangePicker } = DatePicker;
const { Option } = Select;

const Inventory = () => {
    const [filters, setFilters] = useState({
        category: null,
        movementType: null,
        dateRange: null,
    });

    const handleFilterChange = (key, value) => {
        setFilters({ ...filters, [key]: value });
    };

    const kpis = [
        { title: "Inventory Value", value: "$120,000" },
        { title: "Turnover Rate", value: "15%" },
        { title: "Shrinkage %", value: "2%" },
        { title: "Average Holding Time", value: "30 days" },
        { title: "Total SKUs", value: "500" },
        { title: "Out of Stock", value: "5%" },
        { title: "Reorder Needed", value: "10%" },
        { title: "Overstocked", value: "8%" },
    ];

    const inventoryLogs = [
        {
            key: "1",
            product: "Product A",
            movementType: "Inbound",
            quantity: 100,
            date: "2023-10-01",
            sourceDestination: "Supplier X",
        },
        {
            key: "2",
            product: "Product B",
            movementType: "Outbound",
            quantity: 50,
            date: "2023-10-02",
            sourceDestination: "Customer Y",
        },
        {
            key: "3",
            product: "Product C",
            movementType: "Inbound",
            quantity: 200,
            date: "2023-10-03",
            sourceDestination: "Supplier Z",
        },
        {
            key: "4",
            product: "Product D",
            movementType: "Outbound",
            quantity: 30,
            date: "2023-10-04",
            sourceDestination: "Customer W",
        },
        {
            key: "5",
            product: "Product E",
            movementType: "Inbound",
            quantity: 150,
            date: "2023-10-05",
            sourceDestination: "Supplier V",
        },
        {
            key: "6",
            product: "Product F",
            movementType: "Outbound",
            quantity: 70,
            date: "2023-10-06",
            sourceDestination: "Customer U",
        },
        {
            key: "7",
            product: "Product G",
            movementType: "Inbound",
            quantity: 120,
            date: "2023-10-07",
            sourceDestination: "Supplier T",
        },
        {
            key: "8",
            product: "Product H",
            movementType: "Outbound",
            quantity: 90,
            date: "2023-10-08",
            sourceDestination: "Customer S",
        },
    ];

    const inboundOutboundData = {
        labels: ["Inbound", "Outbound", "Returns", "Transfers", "Adjustments", "Damaged", "Lost", "Expired"],
        datasets: [
            {
                label: "Quantity",
                data: [300, 200, 50, 100, 20, 10, 5, 2],
                backgroundColor: [
                    "#bae7ff",
                    "#ffccc7",
                    "#ffd6e7",
                    "#ffe58f",
                    "#d9f7be",
                    "#ff9c6e",
                    "#d3adf7",
                    "#69c0ff",
                ],
            },
        ],
    };

    const categoryDistributionData = {
        labels: ["Electronics", "Clothing", "Furniture", "Others"],
        datasets: [
            {
                label: "Category Distribution",
                data: [40, 30, 20, 10],
                backgroundColor: ["#bae7ff", "#ffd6e7", "#ffe58f", "#d9f7be"],
            },
        ],
    };

    const columns = [
        { title: "Product", dataIndex: "product", key: "product" },
        { title: "Movement Type", dataIndex: "movementType", key: "movementType" },
        { title: "Quantity", dataIndex: "quantity", key: "quantity" },
        { title: "Date", dataIndex: "date", key: "date" },
        { title: "Source/Destination", dataIndex: "sourceDestination", key: "sourceDestination" },
        { title: "Actions", key: "actions", render: () => <a href="#">View</a> },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center", color: "#6C757D" }}>Inventory Dashboard</h1>
            <Row gutter={[16, 16]}>
                {kpis.map((kpi) => (
                    <Col span={6} key={kpi.title}>
                        <Card style={{ textAlign: "center", backgroundColor: "#ffffff", border: "1px solid #d9d9d9" }}>
                            <h3 style={{ color: "#595959" }}>{kpi.title}</h3>
                            <p style={{ fontSize: "15px",  color: "#000" }}>{kpi.value}</p>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Divider />

            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Card title="Inbound vs Outbound" style={{ backgroundColor: "#ffffff", border: "1px solid #d9d9d9" }}>
                        <Bar data={inboundOutboundData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Category-wise Inventory Distribution" style={{ backgroundColor: "#ffffff", border: "1px solid #d9d9d9" }}>
                        <Pie data={categoryDistributionData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </Card>
                </Col>
            </Row>

            <Divider />

            <Card title="Inventory Logs" style={{ backgroundColor: "#ffffff", border: "1px solid #d9d9d9" }}>
                <Row gutter={[16, 16]} style={{ marginBottom: "16px" }}>
                    <Col span={6}>
                        <Select
                            placeholder="Select Category"
                            style={{ width: "100%" }}
                            onChange={(value) => handleFilterChange("category", value)}
                        >
                            <Option value="Electronics">Electronics</Option>
                            <Option value="Clothing">Clothing</Option>
                            <Option value="Furniture">Furniture</Option>
                            <Option value="Others">Others</Option>
                        </Select>
                    </Col>
                    <Col span={6}>
                        <Select
                            placeholder="Select Movement Type"
                            style={{ width: "100%" }}
                            onChange={(value) => handleFilterChange("movementType", value)}
                        >
                            <Option value="Inbound">Inbound</Option>
                            <Option value="Outbound">Outbound</Option>
                        </Select>
                    </Col>
                    <Col span={12}>
                        <RangePicker
                            style={{ width: "100%" }}
                            onChange={(dates) => handleFilterChange("dateRange", dates)}
                        />
                    </Col>
                </Row>
                <Table columns={columns} dataSource={inventoryLogs} />
            </Card>
        </div>
    );
};

export default Inventory;
