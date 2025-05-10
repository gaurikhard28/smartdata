import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend } from 'recharts';
import { Table, Input, Select, DatePicker, Row, Col, Card, Typography } from 'antd';

const { RangePicker } = DatePicker;
const { Option } = Select;
const { Title, Text } = Typography;

const DebitCredit = () => {
    const [filters, setFilters] = useState({
        dateRange: null,
        accountType: null,
        transactionType: null,
    });

    const data = [
        { date: '2023-01-01', type: 'Debit', account: 'Savings', amount: 500, description: 'Groceries' },
        { date: '2023-01-02', type: 'Credit', account: 'Checking', amount: 1000, description: 'Salary' },
        { date: '2023-01-03', type: 'Debit', account: 'Savings', amount: 200, description: 'Utilities' },
        { date: '2023-01-04', type: 'Credit', account: 'Checking', amount: 300, description: 'Freelance Work' },
        { date: '2023-01-05', type: 'Debit', account: 'Savings', amount: 150, description: 'Dining Out' },
        { date: '2023-01-06', type: 'Credit', account: 'Checking', amount: 400, description: 'Investment Return' },
    ];

    const kpis = {
        totalDebits: data.filter(d => d.type === 'Debit').reduce((sum, d) => sum + d.amount, 0),
        totalCredits: data.filter(d => d.type === 'Credit').reduce((sum, d) => sum + d.amount, 0),
        netBalance: data.filter(d => d.type === 'Credit').reduce((sum, d) => sum + d.amount, 0) -
                                data.filter(d => d.type === 'Debit').reduce((sum, d) => sum + d.amount, 0),
        outstandingPayments: data.filter(d => d.type === 'Debit').reduce((sum, d) => sum + d.amount, 0),
    };

    const handleFilterChange = (key, value) => {
        setFilters({ ...filters, [key]: value });
    };

    const filteredData = data.filter(d => {
        const matchesDate = !filters.dateRange || 
            (new Date(d.date) >= filters.dateRange[0] && new Date(d.date) <= filters.dateRange[1]);
        const matchesAccount = !filters.accountType || d.account === filters.accountType;
        const matchesType = !filters.transactionType || d.type === filters.transactionType;
        return matchesDate && matchesAccount && matchesType;
    });

    return (
        <div style={{ padding: '24px' }}>
                       <h1 style={{ textAlign: "center", color: "#6C757D" }}>Debit & Credit Dashboard</h1>

            
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <Card style={{ border: '1px solid #d9d9d9' }}>
                        <Text>Total Debits:</Text>
                        <Title level={4}>${kpis.totalDebits}</Title>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={{ border: '1px solid #d9d9d9' }}>
                        <Text>Total Credits:</Text>
                        <Title level={4}>${kpis.totalCredits}</Title>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={{ border: '1px solid #d9d9d9' }}>
                        <Text>Net Balance:</Text>
                        <Title level={4}>${kpis.netBalance}</Title>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={{ border: '1px solid #d9d9d9' }}>
                        <Text>Outstanding Payments:</Text>
                        <Title level={4}>${kpis.outstandingPayments}</Title>
                    </Card>
                </Col>
            </Row>

            <Card style={{ marginTop: '24px' }}>
                <Title level={4}>Filters</Title>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <RangePicker onChange={(dates) => handleFilterChange('dateRange', dates)} style={{ width: '100%' }} />
                    </Col>
                    <Col span={8}>
                        <Select
                            placeholder="Account Type"
                            onChange={(value) => handleFilterChange('accountType', value)}
                            style={{ width: '100%' }}
                        >
                            <Option value="Savings">Savings</Option>
                            <Option value="Checking">Checking</Option>
                        </Select>
                    </Col>
                    <Col span={8}>
                        <Select
                            placeholder="Transaction Type"
                            onChange={(value) => handleFilterChange('transactionType', value)}
                            style={{ width: '100%' }}
                        >
                            <Option value="Debit">Debit</Option>
                            <Option value="Credit">Credit</Option>
                        </Select>
                    </Col>
                </Row>
            </Card>

            <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
                <Col span={12}>
                    <Card style={{ border: '1px solid #d9d9d9' }}>
                        <Title level={4}>Cash Flow Over Time</Title>
                        <AreaChart width={500} height={300} data={filteredData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card style={{ border: '1px solid #d9d9d9' }}>
                        <Title level={4}>Credit vs Debit Comparison</Title>
                        <BarChart width={500} height={300} data={filteredData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amount" stackId="a" fill="#82ca9d" name="Credits" />
                            <Bar dataKey="amount" stackId="b" fill="#8884d8" name="Debits" />
                        </BarChart>
                    </Card>
                </Col>
            </Row>

            <Card style={{ marginTop: '24px' }}>
                <Title level={4}>Transactions</Title>
                <Table
                    dataSource={filteredData}
                    columns={[
                        { title: 'Date', dataIndex: 'date', key: 'date' },
                        { title: 'Type', dataIndex: 'type', key: 'type' },
                        { title: 'Account', dataIndex: 'account', key: 'account' },
                        { title: 'Amount', dataIndex: 'amount', key: 'amount' },
                        { title: 'Description', dataIndex: 'description', key: 'description' },
                    ]}
                    rowKey="date"
                />
            </Card>
        </div>
    );
};

export default DebitCredit;