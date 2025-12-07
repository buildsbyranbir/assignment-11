import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const AdminDashboard = () => {
  const data = [
    { name: 'Harvard', applications: 400 },
    { name: 'MIT', applications: 300 },
    { name: 'Stanford', applications: 300 },
    { name: 'Oxford', applications: 200 },
  ];

  const pieData = [
    { name: 'Paid', value: 400 },
    { name: 'Pending', value: 300 },
    { name: 'Rejected', value: 100 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="stat bg-white shadow rounded-lg">
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-primary">1,200</div>
        </div>
        <div className="stat bg-white shadow rounded-lg">
            <div className="stat-title">Total Applications</div>
            <div className="stat-value text-secondary">850</div>
        </div>
        <div className="stat bg-white shadow rounded-lg">
            <div className="stat-title">Revenue</div>
            <div className="stat-value text-accent">$45,000</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow h-[400px]">
            <h3 className="text-xl font-bold mb-4">Applications per University</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="applications" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow h-[400px]">
            <h3 className="text-xl font-bold mb-4">Application Status</h3>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label>
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;