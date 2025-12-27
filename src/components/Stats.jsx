import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Stats.css';

const Stats = ({ jobs }) => {
  const statusCounts = jobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});

  const chartData = [
    { name: 'Applied', value: statusCounts['Applied'] || 0, color: '#3b82f6' },
    { name: 'Interview', value: statusCounts['Interview'] || 0, color: '#f59e0b' },
    { name: 'Offer', value: statusCounts['Offer'] || 0, color: '#10b981' },
    { name: 'Rejected', value: statusCounts['Rejected'] || 0, color: '#ef4444' },
  ];

  const barChartData = chartData.map(item => ({
    name: item.name,
    Applications: item.value,
  }));

  const COLORS = ['#3b82f6', '#f59e0b', '#10b981', '#ef4444'];

  const statCards = [
    {
      label: 'Total Applications',
      value: jobs.length,
      color: '#3b82f6',
      icon: '📊',
    },
    {
      label: 'Applied',
      value: statusCounts['Applied'] || 0,
      color: '#3b82f6',
      icon: '📝',
    },
    {
      label: 'Interview',
      value: statusCounts['Interview'] || 0,
      color: '#f59e0b',
      icon: '🎯',
    },
    {
      label: 'Offer',
      value: statusCounts['Offer'] || 0,
      color: '#10b981',
      icon: '🎉',
    },
    {
      label: 'Rejected',
      value: statusCounts['Rejected'] || 0,
      color: '#ef4444',
      icon: '❌',
    },
  ];

  const pieChartData = chartData.filter(item => item.value > 0);

  return (
    <div className="stats">
      <div className="stats-cards">
        {statCards.map((stat) => (
          <div key={stat.label} className="stat-card" style={{ borderTopColor: stat.color }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-value" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {jobs.length > 0 && (
        <div className="charts-container">
          <div className="chart-card">
            <h3>Applications by Status (Bar Chart)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Applications" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {pieChartData.length > 0 && (
            <div className="chart-card">
              <h3>Applications by Status (Pie Chart)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Stats;

