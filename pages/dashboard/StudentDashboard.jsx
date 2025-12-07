import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  // Mock data
  const myApplications = [
    { id: 101, university: "Harvard", category: "Masters", fee: 40, status: "pending", feedback: "N/A" },
    { id: 102, university: "Oxford", category: "PhD", fee: 35, status: "completed", feedback: "Accepted" },
    { id: 103, university: "MIT", category: "Bachelor", fee: 50, status: "rejected", feedback: "Low GPA" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">My Applications</h2>
      
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="table">
            {/* head */}
            <thead className="bg-base-300">
            <tr>
                <th>University</th>
                <th>Category</th>
                <th>Fee</th>
                <th>Status</th>
                <th>Feedback</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {myApplications.map(app => (
                <tr key={app.id}>
                    <td className="font-bold">{app.university}</td>
                    <td>{app.category}</td>
                    <td>${app.fee}</td>
                    <td>
                        <span className={`badge ${
                            app.status === 'pending' ? 'badge-warning' : 
                            app.status === 'completed' ? 'badge-success' : 'badge-error'
                        } text-white`}>
                            {app.status}
                        </span>
                    </td>
                    <td>{app.feedback}</td>
                    <td className="flex gap-2">
                        <button className="btn btn-xs btn-info">Details</button>
                        {app.status === 'pending' && (
                            <>
                                <button className="btn btn-xs btn-warning">Edit</button>
                                <button className="btn btn-xs btn-error">Cancel</button>
                            </>
                        )}
                        {app.status === 'completed' && (
                            <button className="btn btn-xs btn-success text-white">Add Review</button>
                        )}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDashboard;