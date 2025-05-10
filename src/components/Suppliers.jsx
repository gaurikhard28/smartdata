import React, { useState } from "react";
import { Card, Row, Col, Table, Input, Select, Typography } from "antd";
import { Radar, Bar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(RadialLinearScale, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const { Title } = Typography;
const { Option } = Select;

const Suppliers = () => {
    const [filterName, setFilterName] = useState("");
    const [filterRating, setFilterRating] = useState("");

    const kpis = [
        { title: "Active Suppliers", value: 120 },
        { title: "Avg Delivery Time", value: "3.5 days" },
        { title: "Total Spend", value: "$1,200,000" },
        { title: "On-Time Delivery Rate", value: "92%" },
        { title: "Quality Rating", value: "4.5/5" },
        { title: "Supplier Diversity", value: "30%" },
        { title: "Contract Compliance", value: "95%" },
        { title: "Sustainability Score", value: "80%" },
    ];

    const radarData = {
        labels: ["Quality", "Delivery", "Cost", "Responsiveness", "Innovation", "Sustainability", "Compliance", "Diversity"],
        datasets: [
            {
                label: "Supplier Metrics",
                data: [80, 70, 90, 85, 75, 80, 90, 70],
                backgroundColor: "rgba(173, 216, 230, 0.2)",
                borderColor: "rgba(135, 206, 250, 1)",
                pointBackgroundColor: "rgba(135, 206, 250, 1)",
            },
        ],
    };

    const barData = {
        labels: ["Supplier A", "Supplier B", "Supplier C", "Supplier D", "Supplier E", "Supplier F", "Supplier G", "Supplier H", "Supplier I", "Supplier J"],
        datasets: [
            {
                label: "Spend by Supplier",
                data: [400000, 300000, 200000, 300000, 500000, 600000, 700000, 800000, 900000, 1000000],
                backgroundColor: "rgba(255, 182, 193, 0.6)",
                borderColor: "rgba(255, 105, 180, 1)",
                borderWidth: 1,
            },
        ],
    };

    const tableData = [
        {
            key: "1",
            name: "Supplier A",
            contact: "John Doe",
            orders: 150,
            rating: 4.5,
            lastPurchase: "2023-10-01",
        },
        {
            key: "2",
            name: "Supplier B",
            contact: "Jane Smith",
            orders: 120,
            rating: 4.2,
            lastPurchase: "2023-09-28",
        },
        {
            key: "3",
            name: "Supplier C",
            contact: "Mike Johnson",
            orders: 100,
            rating: 4.0,
            lastPurchase: "2023-09-25",
        },
    ];

    const columns = [
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Contact", dataIndex: "contact", key: "contact" },
        { title: "Orders Supplied", dataIndex: "orders", key: "orders" },
        { title: "Avg Rating", dataIndex: "rating", key: "rating" },
        { title: "Last Purchase", dataIndex: "lastPurchase", key: "lastPurchase" },
    ];

    return (
        <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
            <h1 style={{ textAlign: "center", color: "#6C757D" }}>Supplier Dashboard</h1>

            <Row gutter={[16, 16]}>
                {kpis.map((kpi) => (
                    <Col span={6} key={kpi.title}>
                        <Card style={{ backgroundColor: "#fff" }}>
                            <Title level={4} style={{ color: "#000" }}>
                                {kpi.title}
                            </Title>
                            <p style={{ fontSize: "18px", color: "#004d40" }}>{kpi.value}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
                <Col span={12}>
                    <Card style={{ backgroundColor: "#fff" }}>
                        <Title level={4} style={{ color: "#880e4f" }}>
                            Supplier Scorecard
                        </Title>
                        <Radar data={radarData} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card style={{ backgroundColor: "#ffffff" }}>
                        <Title level={4} style={{ color: "#e65100" }}>
                            Spend by Supplier
                        </Title>
                        <div style={{ height: "500px" }}>
                            <Bar 
                                data={barData} 
                                options={{ 
                                    responsive: true, 
                                    maintainAspectRatio: false, 
                                    plugins: { 
                                        legend: { display: true, position: "top" } 
                                    } 
                                }} 
                            />
                        </div>
                    </Card>
                </Col>
            </Row>
            <Card style={{ marginTop: "20px", backgroundColor: "#fff" }}>
                <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
                    <Col span={12}>
                        <Input
                            placeholder="Filter by Supplier Name"
                            value={filterName}
                            onChange={(e) => setFilterName(e.target.value)}
                        />
                    </Col>
                    <Col span={12}>
                        <Select
                            placeholder="Filter by Performance Rating"
                            style={{ width: "100%" }}
                            value={filterRating}
                            onChange={(value) => setFilterRating(value)}
                        >
                            <Option value="4">4+</Option>
                            <Option value="3">3+</Option>
                            <Option value="2">2+</Option>
                        </Select>
                    </Col>
                </Row>
                <Table
                    dataSource={tableData.filter(
                        (item) =>
                            item.name.toLowerCase().includes(filterName.toLowerCase()) &&
                            (!filterRating || item.rating >= parseFloat(filterRating))
                    )}
                    columns={columns}
                    pagination={{ pageSize: 5 }}
                />
            </Card>
        </div>
    );
};

export default Suppliers;
