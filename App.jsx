import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllScholarships from './pages/AllScholarships';
import ScholarshipDetails from './pages/ScholarshipDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardLayout from './layouts/DashboardLayout';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import Payment from './pages/Payment';
import ErrorPage from './pages/ErrorPage';
import { Toaster } from 'react-hot-toast';

// Simple Layout Component for public pages
const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Toaster position="top-center" />
      <HashRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/scholarships" element={<MainLayout><AllScholarships /></MainLayout>} />
          <Route path="/scholarship/:id" element={<MainLayout><ScholarshipDetails /></MainLayout>} />
          <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
          <Route path="/register" element={<MainLayout><Register /></MainLayout>} />
          
          {/* Private/Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/dashboard/profile" />} />
            {/* Simulating different dashboard views based on what would be roles */}
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="student" element={<StudentDashboard />} />
            <Route path="payment" element={<Payment />} />
            <Route path="profile" element={<div className="text-2xl font-bold p-10">My Profile Area</div>} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;