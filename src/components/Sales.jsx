import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { useTable } from "react-table";
import { DatePicker, Select } from "antd";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);

const Sales = () => {
    const [dateRange, setDateRange] = useState(null);
    const [region, setRegion] = useState(null);
    const [product, setProduct] = useState(null);
    const [salesRep, setSalesRep] = useState(null);

    // Sample data
    const salesOverTimeData = {
        labels: ["2023-01-01", "2023-01-02", "2023-01-03"],
        datasets: [
            {
                label: "Sales",
                data: [100, 200, 150],
                borderColor: "#8884d8",
                backgroundColor: "rgba(136, 132, 216, 0.2)",
                tension: 0.4,
            },
        ],
    };

    const productWiseSalesData = {
        labels: ["Product A", "Product B", "Product C"],
        datasets: [
            {
                label: "Sales",
                data: [400, 300, 200],
                backgroundColor: ["#FFB6C1", "#FFDAB9", "#E6E6FA"],
            },
        ],
    };

    const regionWiseSalesData = {
        labels: ["North", "South", "East", "West"],
        datasets: [
            {
                label: "Sales",
                data: [500, 300, 200, 400],
                backgroundColor: ["#FFB6C1", "#FFDAB9", "#E6E6FA", "#B0E0E6"],
            },
        ],
    };

    const salesTransactions = [
        { date: "2023-01-01", product: "Product A", quantity: 2, price: 50, customer: "John Doe", invoiceId: "INV001" },
        { date: "2023-01-02", product: "Product B", quantity: 1, price: 100, customer: "Jane Smith", invoiceId: "INV002" },
        { date: "2023-01-03", product: "Product C", quantity: 3, price: 30, customer: "Bob Johnson", invoiceId: "INV003" },
        { date: "2023-01-04", product: "Product A", quantity: 1, price: 50, customer: "Alice Brown", invoiceId: "INV004" },
    ];

    const columns = React.useMemo(
        () => [
            { Header: "Date", accessor: "date" },
            { Header: "Product", accessor: "product" },
            { Header: "Quantity", accessor: "quantity" },
            { Header: "Price", accessor: "price" },
            { Header: "Customer", accessor: "customer" },
            { Header: "Invoice ID", accessor: "invoiceId" },
        ],
        []
    );

    const tableInstance = useTable({ columns, data: salesTransactions });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#F8F9FA" }}>
            <h1 style={{ textAlign: "center", color: "#6C757D" }}>Sales Dashboard</h1>

            {/* Filters */}
            <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
                <DatePicker.RangePicker
                    onChange={(dates) => setDateRange(dates)}
                    style={{ borderRadius: "8px", padding: "5px" }}
                />
                <Select
                    placeholder="Select Region"
                    onChange={(value) => setRegion(value)}
                    style={{ width: 150, borderRadius: "8px" }}
                >
                    <Select.Option value="North">North</Select.Option>
                    <Select.Option value="South">South</Select.Option>
                    <Select.Option value="East">East</Select.Option>
                    <Select.Option value="West">West</Select.Option>
                </Select>
                <Select
                    placeholder="Select Product"
                    onChange={(value) => setProduct(value)}
                    style={{ width: 150, borderRadius: "8px" }}
                >
                    <Select.Option value="Product A">Product A</Select.Option>
                    <Select.Option value="Product B">Product B</Select.Option>
                    <Select.Option value="Product C">Product C</Select.Option>
                </Select>
                <Select
                    placeholder="Select Sales Rep"
                    onChange={(value) => setSalesRep(value)}
                    style={{ width: 150, borderRadius: "8px" }}
                >
                    <Select.Option value="Rep A">Rep A</Select.Option>
                    <Select.Option value="Rep B">Rep B</Select.Option>
                </Select>
            </div>

            {/* KPIs */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: "20px",
                    backgroundColor: "#FFF",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div>Total Sales: $1000</div>
                <div>Sales Today: $200</div>
                <div>Monthly Sales: $5000</div>
                <div>Best-selling Product: Product A</div>
                <div>Gross Margin: 40%</div>
            </div>

            {/* Charts */}
            <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
                <div style={{ width: "45%", backgroundColor: "#FFF", padding: "10px", borderRadius: "8px" }}>
                    <h3 style={{ textAlign: "center", color: "#6C757D" }}>Sales Over Time</h3>
                    <Line data={salesOverTimeData} />
                </div>
                <div style={{ width: "45%", backgroundColor: "#FFF", padding: "10px", borderRadius: "8px" }}>
                    <h3 style={{ textAlign: "center", color: "#6C757D" }}>Product-wise Sales</h3>
                    <Bar data={productWiseSalesData} />
                </div>
            </div>

            <div
                style={{
                    width: "45%",
                    margin: "0 auto",
                    marginBottom: "20px",
                    backgroundColor: "#FFF",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                <h3 style={{ textAlign: "center", color: "#6C757D" }}>Region-wise Sales</h3>
                <Pie data={regionWiseSalesData} />
            </div>

            {/* Data Table */}
            <div style={{ backgroundColor: "#FFF", padding: "10px", borderRadius: "8px" }}>
                <h3 style={{ textAlign: "center", color: "#6C757D" }}>Sales Transactions</h3>
                <table
                    {...getTableProps()}
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        marginTop: "20px",
                        borderRadius: "8px",
                        overflow: "hidden",
                    }}
                >
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()} style={{ backgroundColor: "#E6E6FA" }}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        style={{
                                            border: "1px solid #ddd",
                                            padding: "10px",
                                            textAlign: "left",
                                            color: "#6C757D",
                                        }}
                                    >
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} style={{ backgroundColor: "#FFF" }}>
                                    {row.cells.map((cell) => (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                border: "1px solid #ddd",
                                                padding: "10px",
                                                color: "#6C757D",
                                            }}
                                        >
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sales;
