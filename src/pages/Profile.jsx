import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Profile = () => {
    const navigate = useNavigate();
    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <>

            <div className="min-vh-100 bg-light">

                <Navbar /> 

                {/* Profile Section */}
                
                <div className="container py-5">

                    <div className="row justify-content-center">

                        <div className="col-md-6">

                            <div className="card shadow border-0">

                                <div className="card-body text-center p-5">

                                    {/* Profile Image */}
                                    <img
                                        src={user?.image}
                                        alt="profile"
                                        className="rounded-circle mb-4 border"
                                        width="130"
                                        height="130"
                                    />

                                    {/* Name */}
                                    <h2 className="fw-bold mb-3">
                                        {user?.firstName}{" "}
                                        {user?.lastName}
                                    </h2>

                                    {/* Email */}
                                    <p className="text-muted fs-5">
                                        {user?.email}
                                    </p>

                                    <hr />

                                    {/* User Details */}
                                    <div className="text-start mt-4">

                                        <p>
                                            <strong>Username:</strong>{" "}
                                            {user?.username}
                                        </p>

                                        <p>
                                            <strong>Phone:</strong>{" "}
                                            {user?.phone}
                                        </p>

                                        <p>
                                            <strong>Gender:</strong>{" "}
                                            {user?.gender}
                                        </p>

                                        <p>
                                            <strong>Age:</strong>{" "}
                                            {user?.age}
                                        </p>

                                        <p>
                                            <strong>Birth Date:</strong>{" "}
                                            {user?.birthDate}
                                        </p>

                                        <p>
                                            <strong>Blood Group:</strong>{" "}
                                            {user?.bloodGroup}
                                        </p>

                                        <p>
                                            <strong>University:</strong>{" "}
                                            {user?.university}
                                        </p>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Profile
