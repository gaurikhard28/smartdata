import React, { useState } from 'react';
import { Menu, Button, Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import {
    ShoppingCartOutlined,
    ShoppingOutlined,
    CreditCardOutlined,
    DatabaseOutlined,
    AppstoreOutlined,
    UserOutlined,
    TeamOutlined,
    BankOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Navbar = ({ userName = "John Doe", businessName = "SmatData", onLogout, onNavigate }) => {
    const [selectedKey, setSelectedKey] = useState(null);

    const actions = [
        { name: "Sale", path: "/sales", icon: <ShoppingCartOutlined /> },
        { name: "Purchase", path: "/purchase", icon: <ShoppingOutlined /> },
        { name: "Debit/Credit", path: "/debit-credit", icon: <CreditCardOutlined /> },
        { name: "Stock Maintenance", path: "/stock-maintenance", icon: <DatabaseOutlined /> },
        { name: "Inventory", path: "/inventory", icon: <AppstoreOutlined /> },
        { name: "Customer", path: "/customer", icon: <UserOutlined /> },
        { name: "Supplier", path: "/suppliers", icon: <TeamOutlined /> },
        { name: "Companies", path: "/companies", icon: <BankOutlined /> },
    ];

    const handleMenuClick = (path, key) => {
        setSelectedKey(key);
        onNavigate(path);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "200px",
                color: "#000",
                boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
                padding: "20px",
            }}
        >
            <div style={{ marginBottom: "30px", textAlign: "center" }}>
                <Title level={4} style={{ color: "#000", margin: 0 }}>
                    Welcome, {userName}
                </Title>
                <Title level={5} style={{ color: "#555", margin: 0 }}>
                    {businessName}
                </Title>
            </div>
            <div style={{ marginBottom: "20px", textAlign: "start" }}>
                <strong
                    style={{
                        color: selectedKey === 'dashboard' ? "#fff" : "#000",
                        fontSize: "16px",
                        cursor: 'pointer',
                        backgroundColor: selectedKey === 'dashboard' ? "#add8e6" : "transparent",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        display: "inline-block",
                    }}
                    onClick={() => {
                        setSelectedKey('dashboard');
                        onNavigate('/');
                    }}
                >
                    <AppstoreOutlined />{' '}Dashboard
                </strong>
                <hr style={{ width: "100%", border: "1px solid #ddd", margin: "5px 0" }} />
                <strong style={{ color: "#000", fontSize: "16px" }}>
                    <TeamOutlined />{' '}Management
                </strong>
            </div>

            <Menu
                style={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                    backgroundColor: "transparent",
                    color: "#000",
                }}
                mode="vertical"
                theme="light"
                selectedKeys={[selectedKey]}
            >
                {actions.map((action, index) => (
                    <Menu.Item
                        key={index}
                        onClick={() => handleMenuClick(action.path, index)}
                        style={{
                            padding: "2px 2px",
                            color: selectedKey === index ? "#fff" : "#555",
                            backgroundColor: selectedKey === index ? "#add8e6" : "#fff",
                            fontSize: "16px",
                            fontFamily: "Arial, sans-serif",
                            fontWeight: "200",
                            border: "1px solid #ddd",
                            borderRadius: "5px",
                            marginBottom: "5px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        {' '}{action.icon}{' '}
                        {action.name}
                    </Menu.Item>
                ))}
            </Menu>

            <div style={{ marginTop: "auto", textAlign: "center" }}>
                <Button
                    type="primary"
                    icon={<LogoutOutlined />}
                    onClick={onLogout}
                    style={{
                        width: "100%",
                        fontWeight: "bold",
                        borderRadius: "5px",
                        backgroundColor: "#add8e6",
                        borderColor: "#add8e6",
                        color: "#fff",
                    }}
                >
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default Navbar;
