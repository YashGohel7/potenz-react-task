import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';

const Dashboard = () => {
 
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
 

  return (
    <div>
      <div className="min-vh-100 bg-light">
        <Navbar/>

        {/* Main Content */}
        <div className="container py-5">

          {/* Welcome Card */}
          <div className="card shadow border-0 mb-4">
            <div className="card-body">
              <h2 className="fw-bold">
                Welcome, {user?.firstName} 👋
              </h2>

              <p className="text-muted mb-0">
                Manage your products and profile here.
              </p>
            </div>
          </div>

          {/* Profile + Stats */}
          <div className="row g-4">

            {/* Profile Card */}
            <div className="col-md-4">
              <div className="card shadow border-0 h-100">
                <div className="card-body text-center">

                  <img
                    src={user?.image}
                    alt="profile"
                    className="rounded-circle mb-3"
                    width="100"
                  />

                  <h4>
                    {user?.firstName} {user?.lastName}
                  </h4>

                  <p className="text-muted">
                    {user?.email}
                  </p>

                  <p className="mb-0">
                    {user?.phone}
                  </p>

                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="col-md-8">
              <div className="row g-4">

                <div className="col-md-6">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <h5>Total Products</h5>
                      <h2 className="fw-bold text-primary">
                        194
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <h5>Categories</h5>
                      <h2 className="fw-bold text-success">
                        24
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <h5>Orders</h5>
                      <h2 className="fw-bold text-warning">
                        12
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <h5>Cart Items</h5>
                      <h2 className="fw-bold text-danger">
                        5
                      </h2>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard




