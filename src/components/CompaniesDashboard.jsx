import React from 'react';
import { Card, Row, Col, Badge, Table, Timeline, Button, Typography } from 'antd';
import { FileTextOutlined, PlusOutlined, MailOutlined } from '@ant-design/icons';

const CompaniesDashboard = () => {
    const { Title, Text } = Typography;

    // Sample data for table and charts
    const transactionData = [
        { key: 1, date: '2023-10-01', type: 'Invoice', refNo: 'INV001', party: 'Client A', amount: '$500', status: 'Paid' },
        { key: 2, date: '2023-10-02', type: 'Purchase', refNo: 'PUR001', party: 'Supplier B', amount: '$300', status: 'Pending' },
    ];

    const columns = [
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Type', dataIndex: 'type', key: 'type' },
        { title: 'Ref No.', dataIndex: 'refNo', key: 'refNo' },
        { title: 'Party', dataIndex: 'party', key: 'party' },
        { title: 'Amount', dataIndex: 'amount', key: 'amount' },
        { title: 'Status', dataIndex: 'status', key: 'status' },
    ];

    return (
        <div style={{ padding: '24px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
            {/* Static Info */}
            <Card
                style={{
                    marginBottom: '24px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px',
                }}
            >
                <Row align="middle" gutter={24}>
                    <Col span={4}>
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Company Logo"
                            style={{
                                borderRadius: '50%',
                                width: '100%',
                                border: '3px solid #1890ff',
                            }}
                        />
                    </Col>
                    <Col span={16}>
                        <Title level={3} style={{ marginBottom: '8px', color: '#1890ff' }}>
                            Company Name
                        </Title>
                        <Text type="secondary" style={{ display: 'block', marginBottom: '4px' }}>
                            <strong>Industry:</strong> Technology
                        </Text>
                        <Text type="secondary" style={{ display: 'block', marginBottom: '4px' }}>
                            <strong>Registration ID:</strong> 123456789
                        </Text>
                        <Text type="secondary" style={{ display: 'block', marginBottom: '4px' }}>
                            <strong>Locations:</strong> New York, London
                        </Text>
                        <Text type="secondary" style={{ display: 'block', marginBottom: '4px' }}>
                            <strong>Primary Contact:</strong> John Doe
                        </Text>
                        <Text type="secondary" style={{ display: 'block', marginBottom: '4px' }}>
                            <strong>Affiliation Since:</strong> 2020
                        </Text>
                    </Col>
                    <Col span={4} style={{ textAlign: 'right' }}>
                        <Badge
                            status="success"
                            text={
                                <span style={{ fontSize: '14px', color: '#52c41a' }}>
                                    🟢 Active
                                </span>
                            }
                        />
                    </Col>
                </Row>
            </Card>

            {/* Key Metrics */}
            <Row gutter={24} style={{ marginBottom: '24px' }}>
                <Col span={6}>
                    <Card
                        title="Total Revenue (MTD/YTD)"
                        bordered={false}
                        style={{ textAlign: 'center', borderRadius: '12px' }}
                    >
                        <Text strong style={{ fontSize: '18px' }}>
                            $50,000 / $600,000
                        </Text>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        title="Total Expenses"
                        bordered={false}
                        style={{ textAlign: 'center', borderRadius: '12px' }}
                    >
                        <Text strong style={{ fontSize: '18px' }}>
                            $30,000
                        </Text>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        title="Net Profit"
                        bordered={false}
                        style={{ textAlign: 'center', borderRadius: '12px' }}
                    >
                        <Text strong style={{ fontSize: '18px' }}>
                            $20,000
                        </Text>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        title="Inventory Value"
                        bordered={false}
                        style={{ textAlign: 'center', borderRadius: '12px' }}
                    >
                        <Text strong style={{ fontSize: '18px' }}>
                            $100,000
                        </Text>
                    </Card>
                </Col>
            </Row>

            {/* Charts & Analytics */}
            <Row gutter={24} style={{ marginBottom: '24px' }}>
                <Col span={12}>
                    <Card
                        title="Revenue vs Expenses"
                        bordered={false}
                        style={{ borderRadius: '12px' }}
                    >
                        <div
                            style={{
                                height: '200px',
                                backgroundColor: '#e6f7ff',
                                borderRadius: '8px',
                            }}
                        ></div>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        title="Monthly Profit Trend"
                        bordered={false}
                        style={{ borderRadius: '12px' }}
                    >
                        <div
                            style={{
                                height: '200px',
                                backgroundColor: '#e6f7ff',
                                borderRadius: '8px',
                            }}
                        ></div>
                    </Card>
                </Col>
            </Row>

            {/* Transaction Summary Table */}
            <Card
                title="Transaction Summary"
                style={{ marginBottom: '24px', borderRadius: '12px' }}
            >
                <Table
                    dataSource={transactionData}
                    columns={columns}
                    pagination={false}
                    bordered
                />
            </Card>

            {/* Timeline or Milestones */}
            <Card
                title="Timeline / Milestones"
                style={{ marginBottom: '24px', borderRadius: '12px' }}
            >
                <Timeline>
                    <Timeline.Item>2020-01-01: Company Founded</Timeline.Item>
                    <Timeline.Item>2021-06-15: Major Deal Closed</Timeline.Item>
                    <Timeline.Item>2022-03-10: New Branch Opened</Timeline.Item>
                </Timeline>
            </Card>

            {/* Action Buttons */}
            <Row gutter={16} justify="end">
                <Col>
                    <Button type="primary" icon={<FileTextOutlined />} size="large">
                        Generate Report
                    </Button>
                </Col>
                <Col>
                    <Button type="default" icon={<PlusOutlined />} size="large">
                        Add Transaction
                    </Button>
                </Col>
                <Col>
                    <Button type="default" icon={<MailOutlined />} size="large">
                        Send Reminder Email
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default CompaniesDashboard;