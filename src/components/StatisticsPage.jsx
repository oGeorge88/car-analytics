import { useState, useEffect, Fragment } from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js components
import carsData from '/src/data/cars.json'; // Import your JSON data

// StatisticsPage: Visualizes car analytics with interactive charts and tables

const StatisticsPage = () => {
    const [data, setData] = useState({
        brands: {},
        models: {},
    });

    useEffect(() => {
        const brands = {};
        const models = {};

        carsData.Cars.forEach(car => {
            const brand = car.NameMMT.split(' ')[0];
            const model = car.Model;
            let price = parseFloat(car.Prc.replace(/,/g, ''));

            if (isNaN(price)) {
                price = 0;
            }

            if (!brands[brand]) {
                brands[brand] = { count: 0, value: 0 };
            }
            brands[brand].count += 1;
            brands[brand].value += price;

            if (!models[brand]) {
                models[brand] = {};
            }
            if (!models[brand][model]) {
                models[brand][model] = 0;
            }
            models[brand][model] += 1;
        });

        setData({
            brands,
            models
        });
    }, []);

    // Prepare data for charts
    const pieData = {
        labels: Object.keys(data.brands),
        datasets: [{
            data: Object.values(data.brands).map(b => b.value),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            borderColor: '#fff',
            borderWidth: 1
        }]
    };

    const modelLabels = [...new Set(Object.keys(data.models).reduce((acc, brand) => {
        return [...acc, ...Object.keys(data.models[brand])];
    }, []))];

    const colorPalette = [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#FFCD56', '#4BC0C0', '#7C4DFF', '#F39C12'
    ];

    const stackedBarData = {
        labels: Object.keys(data.models), // Brand names for x-axis
        datasets: modelLabels.map((model, index) => {
            const dataForModel = Object.keys(data.models).map(brand => data.models[brand][model] || 0);
            return {
                label: model,
                data: dataForModel,
                backgroundColor: colorPalette[index % colorPalette.length],
                borderColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 1
            };
        })
    };

    return (
        <Container style={{ marginTop: '130px', marginBottom: '60px', maxWidth: '1200px', fontFamily: 'Segoe UI, Roboto, Arial, sans-serif' }}>
            <Row className="mb-4">
                <Col>
                    <h2 className="text-center" style={{ color: '#28a745', fontWeight: '700', letterSpacing: '1px' }}>Car Analytics Statistics</h2>
                    <p className="text-center" style={{ color: '#555', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
                        Discover key insights into car brands and models. Visualize market value, distribution, and trends to make informed decisions.
                    </p>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col md={12}>
                    <h4 className="mb-3" style={{ color: '#1e2a38', fontWeight: '600', letterSpacing: '0.5px' }}>Cars & Values by Brand and Model</h4>
                    <Table striped bordered hover responsive style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden' }}>
                        <thead style={{ background: '#f5f7fa' }}>
                            <tr>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Count</th>
                                <th>Value (Baht)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(data.brands).map(([brand, { count, value }]) => (
                                <Fragment key={brand}>
                                    <tr style={{ background: '#eafaf1' }}>
                                        <td rowSpan={Object.keys(data.models[brand] || {}).length + 1} style={{ fontWeight: 'bold', color: '#28a745', verticalAlign: 'middle' }}>{brand}</td>
                                        <td style={{ fontWeight: '500' }}>Total</td>
                                        <td>{count}</td>
                                        <td>{value.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                                    </tr>
                                    {Object.entries(data.models[brand] || {}).map(([model, modelCount]) => (
                                        <tr key={`${brand}-${model}`}>
                                            <td>{model}</td>
                                            <td>{modelCount}</td>
                                            <td>{((modelCount * value) / count).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col md={6}>
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 12px rgba(40,167,69,0.08)' }}>
                        <h4 className="mb-3" style={{ color: '#1e2a38', fontWeight: '600', letterSpacing: '0.5px' }}>Cars by Brand</h4>
                        <Pie
                            data={pieData}
                            options={{
                                plugins: {
                                    legend: {
                                        display: true,
                                        position: 'top',
                                        labels: { color: '#1e2a38', font: { size: 14 } }
                                    },
                                    tooltip: {
                                        callbacks: {
                                            label: function(tooltipItem) {
                                                const label = tooltipItem.label || '';
                                                const value = tooltipItem.raw || 0;
                                                return `${label}: ${value.toLocaleString()} Baht`;
                                            }
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 12px rgba(40,167,69,0.08)' }}>
                        <h4 className="mb-3" style={{ color: '#1e2a38', fontWeight: '600', letterSpacing: '0.5px' }}>Models of Each Brand</h4>
                        <Bar
                            data={stackedBarData}
                            options={{
                                plugins: {
                                    legend: {
                                        display: true,
                                        position: 'top',
                                        labels: { color: '#1e2a38', font: { size: 14 } }
                                    },
                                    tooltip: {
                                        callbacks: {
                                            label: function(tooltipItem) {
                                                const label = tooltipItem.dataset.label || '';
                                                const value = tooltipItem.raw || 0;
                                                return `${label}: ${value}`;
                                            }
                                        }
                                    }
                                },
                                scales: {
                                    x: {
                                        stacked: true,
                                        title: {
                                            display: true,
                                            text: 'Brand',
                                            color: '#28a745',
                                            font: { weight: 'bold', size: 16 }
                                        },
                                        ticks: { color: '#1e2a38', font: { size: 13 } }
                                    },
                                    y: {
                                        stacked: true,
                                        title: {
                                            display: true,
                                            text: 'Models',
                                            color: '#28a745',
                                            font: { weight: 'bold', size: 16 }
                                        },
                                        ticks: { display: false }
                                    }
                                }
                            }}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default StatisticsPage;
