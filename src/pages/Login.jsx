import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const API_URL = import.meta.env.VITE_API_URL;

    const navigate = useNavigate();

    const handlelogin = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            // Step 1: Get all users
            const usersRes = await axios.get(
                `${API_URL}/users`
            );

            // Step 2: Find user by email
            const foundUser = usersRes.data.users.find(
                (user) => user.email === email
            );

            if (!foundUser) {
                alert("Email not found");
                return;
            }

            // Step 3: Login using username
            const loginRes = await axios.post(
                `${API_URL}/auth/login`,
                {
                    username: foundUser.username,
                    password: password,
                }
            );

            // Step 4: Fetch FULL user details
            const fullUserRes = await axios.get(
                 `${API_URL}/users/${loginRes.data.id}`
            );

            // Step 5: Store full user data
            localStorage.setItem(
                "user",
                JSON.stringify(fullUserRes.data)
            );

            // Step 6: Redirect
            navigate("/dashboard");

        } catch (error) {
            console.log(error);
            alert("Invalid Credentials");
        }
        finally {

            setLoading(false);

        }
    };





    return (
        <>
            <section className="login-wrapper">
                <div className="login-card">
                    <h2 className="text-center">Potenz </h2>
                    <p className="text-center">Login to continue shopping with Potenz</p>
                    <form onSubmit={handlelogin} >
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4 extra-links">


                            <button
                                className='btn btn-success'
                                type="button"
                                onClick={() => {
                                    setEmail("james.davis@x.dummyjson.com");
                                    setPassword("jamesdpass");
                                }}
                            >
                                Use Demo Credentials
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100 mb-3"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>


                    </form>
                </div>
            </section>~

        </>
    )
}

export default Login
