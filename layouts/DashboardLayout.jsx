import React, { useContext } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  // Mock role check
  const isAdmin = user?.role === 'admin';
  const isStudent = user?.role === 'student';

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-200 min-h-screen">
        {/* Mobile Toggle */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden m-4 w-fit">Open Sidebar</label>
        
        {/* Main Dashboard Content */}
        <div className="p-8">
            <Outlet />
        </div>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content border-r border-base-300">
          {/* Sidebar content */}
          <div className="mb-6 px-4">
            <Link to="/" className="text-2xl font-bold text-primary">ScholarStream</Link>
            <p className="text-sm text-gray-500 mt-2">Welcome, {user?.displayName}</p>
          </div>

          <div className="divider"></div>

          {isAdmin && (
            <>
                <li><NavLink to="/dashboard/admin">Admin Analytics</NavLink></li>
                <li><NavLink to="/dashboard/manage-users">Manage Users</NavLink></li>
                <li><NavLink to="/dashboard/manage-scholarships">Manage Scholarships</NavLink></li>
            </>
          )}

          {isStudent && (
            <>
                <li><NavLink to="/dashboard/profile">My Profile</NavLink></li>
                <li><NavLink to="/dashboard/student">My Applications</NavLink></li>
                <li><NavLink to="/dashboard/reviews">My Reviews</NavLink></li>
            </>
          )}

          <div className="divider"></div>
          
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/scholarships">All Scholarships</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;