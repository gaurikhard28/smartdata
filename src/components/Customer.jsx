import React, { useState } from "react";
import { Layout, Row, Col, Card, Table, Select, DatePicker } from "antd";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const { Option } = Select;
const { RangePicker } = DatePicker;

const Customer = () => {
    const [filters, setFilters] = useState({
        segment: null,
        status: null,
        location: null,
    });

    const handleFilterChange = (key, value) => {
        setFilters({ ...filters, [key]: value });
    };

    const kpiData = {
        totalCustomers: 1200,
        activeCustomers: 850,
        repeatCustomers: 400,
        revenuePerCustomer: "$120",
    };

    const customerGrowthData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Customers",
                data: [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
                borderColor: "rgba(246, 151, 165, 0.78))",
                backgroundColor: "rgba(255, 182, 193, 0.6))",
            },
        ],
    };

    const revenueBySegmentData = {
        labels: ["Premium", "Standard", "Basic", "VIP", "Loyal", "New"],
        datasets: [
            {
                label: "Revenue",
                data: [5000, 3000, 2000, 7000, 4000, 1000],
                backgroundColor: [
                    "rgba(255, 182, 193, 0.6)", // Light Pink
                    "rgba(173, 216, 230, 0.6)", // Light Blue
                    "rgba(144, 238, 144, 0.6)", // Light Green
                    "rgba(255, 239, 213, 0.6)", // Light Peach
                    "rgba(221, 160, 221, 0.6)", // Light Purple
                    "rgba(240, 230, 140, 0.6)", // Light Yellow
                ],
            },
        ],
    };

    const customerList = [
        {
            key: "1",
            name: "John Doe",
            email: "john@example.com",
            totalSpend: "$500",
            lastPurchase: "2023-10-01",
            location: "New York",
        },
        {
            key: "2",
            name: "Jane Smith",
            email: "jane@example.com",
            totalSpend: "$300",
            lastPurchase: "2023-09-15",
            location: "California",
        },
        {
            key: "3",
            name: "Sam Wilson",
            email: "sam@exapme.com",
            totalSpend: "$700",
            lastPurchase: "2023-08-20",
            location: "Texas",
        },
    ];

    const columns = [
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Total Spend", dataIndex: "totalSpend", key: "totalSpend" },
        { title: "Last Purchase", dataIndex: "lastPurchase", key: "lastPurchase" },
        { title: "Location", dataIndex: "location", key: "location" },
    ];

    return (
        <div>
            <h1 style={{ textAlign: "center", color: "#6C757D" }}>Customer Dashboard</h1>
            <Layout style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <Card title="Total Customers" style={{ backgroundColor: "#fff" }}>
                            {kpiData.totalCustomers}
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Active Customers" style={{ backgroundColor: "#fff" }}>
                            {kpiData.activeCustomers}
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Repeat Customers" style={{ backgroundColor: "#fff" }}>
                            {kpiData.repeatCustomers}
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Revenue per Customer" style={{ backgroundColor: "#fff" }}>
                            {kpiData.revenuePerCustomer}
                        </Card>
                    </Col>
                </Row>

                <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
                    <Col span={12}>
                        <Card title="Customer Growth">
                            <Line data={customerGrowthData} />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Revenue by Customer Segment">
                            <Bar data={revenueBySegmentData} />
                        </Card>
                    </Col>
                </Row>

                <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
                    <Col span={24}>
                        <Card title="Customer List">
                            <Row gutter={[16, 16]} style={{ marginBottom: "10px" }}>
                                <Col span={6}>
                                    <Select
                                        placeholder="Customer Segment"
                                        style={{ width: "100%" }}
                                        onChange={(value) => handleFilterChange("segment", value)}
                                    >
                                        <Option value="premium">Premium</Option>
                                        <Option value="standard">Standard</Option>
                                        <Option value="basic">Basic</Option>
                                    </Select>
                                </Col>
                                <Col span={6}>
                                    <Select
                                        placeholder="Activity Status"
                                        style={{ width: "100%" }}
                                        onChange={(value) => handleFilterChange("status", value)}
                                    >
                                        <Option value="active">Active</Option>
                                        <Option value="inactive">Inactive</Option>
                                    </Select>
                                </Col>
                                <Col span={6}>
                                    <Select
                                        placeholder="Location"
                                        style={{ width: "100%" }}
                                        onChange={(value) => handleFilterChange("location", value)}
                                    >
                                        <Option value="new-york">New York</Option>
                                        <Option value="california">California</Option>
                                    </Select>
                                </Col>
                                <Col span={6}>
                                    <RangePicker style={{ width: "100%" }} />
                                </Col>
                            </Row>
                            <Table dataSource={customerList} columns={columns} />
                        </Card>
                    </Col>
                </Row>
            </Layout>
        </div>
    );
};

export default Customer;
