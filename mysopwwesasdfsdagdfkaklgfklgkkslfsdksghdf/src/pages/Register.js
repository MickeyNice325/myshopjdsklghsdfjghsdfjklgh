import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/register", { fullName, email, password });
            alert("Registration successful!");
            navigate("/login");
        } catch (err) {
            alert("Error registering");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <div className="card-body">
                    <h2 className="text-center mb-4 text-primary">
                        <i className="bi bi-person-plus-fill"></i> Register
                    </h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <div className="input-group">
                                <span className="input-group-text"><i className="bi bi-person"></i></span>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="fullName" 
                                    placeholder="Enter your full name" 
                                    value={fullName} 
                                    onChange={(e) => setFullName(e.target.value)} 
                                    required 
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <div className="input-group">
                                <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="Enter your email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="input-group">
                                <span className="input-group-text"><i className="bi bi-lock"></i></span>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    placeholder="Enter your password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            <i className="bi bi-person-check"></i> Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
