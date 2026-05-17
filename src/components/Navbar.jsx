import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
            <div className="container-fluid">

                <h3 className="text-white fw-bold">
                    Potenz
                </h3>

                <div className="d-flex align-items-center gap-3">

                    <Link
                        to="/dashboard"
                        className="text-white text-decoration-none"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/products"
                        className="text-white text-decoration-none"
                    >
                        Products
                    </Link>

                    <Link
                        to="/profile"
                        className="text-white text-decoration-none"
                    >
                        Profile
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="btn btn-light btn-sm"
                    >
                        Logout
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;