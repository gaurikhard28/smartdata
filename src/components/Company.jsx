import React, { useState } from 'react';
import { List, Input, Typography, Divider, Layout, Card } from 'antd';

const { Search } = Input;

const Company = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const companies = [
        { name: 'Apple Inc.', sales: 1000, purchase: 500 },
        { name: 'Microsoft Corporation', sales: 2000, purchase: 1500 },
        { name: 'Amazon.com, Inc.', sales: 3000, purchase: 2500 },
        { name: 'Google LLC', sales: 4000, purchase: 3500 },
        { name: 'Facebook, Inc.', sales: 5000, purchase: 4500 },
        { name: 'Tesla, Inc.', sales: 6000, purchase: 5500 },
        { name: 'Samsung Electronics', sales: 7000, purchase: 6500 },
        { name: 'Intel Corporation', sales: 8000, purchase: 7500 },
        { name: 'IBM Corporation', sales: 9000, purchase: 8500 },
        { name: 'Sony Corporation', sales: 10000, purchase: 9500 },
    ];

    const filteredCompanies = companies.filter((company) =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#f9f9f9', padding: '20px' }}>
            <Card
                style={{ 
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography.Title level={2} style={{ textAlign: 'center', color: '#6C757D' }}>
                    Company Dashboard
                </Typography.Title>
                <Search
                    placeholder="Search Company"
                    allowClear
                    enterButton="Search"
                    size="large"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginBottom: '20px' }}
                />
                <List
                    dataSource={filteredCompanies}
                    renderItem={(company, index) => (
                        <>
                            <List.Item>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '100%',
                                    }}
                                >
                                    <Typography.Text
                                        strong
                                        style={{ color: 'rgba(255, 93, 206, 0.51)', fontSize: '16px' }}
                                    >
                                        {company.name}
                                    </Typography.Text>
                                    <Typography.Text style={{ color: '#757575' }}>
                                        <strong>Sales:</strong> ${company.sales} |{' '}
                                        <strong>Purchase:</strong> ${company.purchase}
                                    </Typography.Text>
                                </div>
                            </List.Item>
                            {index < filteredCompanies.length - 1 && <Divider />}
                        </>
                    )}
                />
                {filteredCompanies.length === 0 && (
                    <Typography.Text
                        style={{
                            display: 'block',
                            textAlign: 'center',
                            marginTop: '20px',
                            color: '#9e9e9e',
                            fontStyle: 'italic',
                        }}
                    >
                        No companies found.
                    </Typography.Text>
                )}
            </Card>
        </Layout>
    );
};

export default Company;
