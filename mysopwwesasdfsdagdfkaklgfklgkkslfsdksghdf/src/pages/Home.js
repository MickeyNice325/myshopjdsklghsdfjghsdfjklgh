import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <header className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-4 text-primary">Welcome to MyShop</h1>
          <p className="lead">Your one-stop shop for amazing products!</p>
          <Link to="/products" className="btn btn-primary btn-lg mt-3">Shop Now</Link>
        </div>
      </header>

      {/* Features Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-lg text-center p-4">
              <i className="bi bi-truck display-4 text-primary"></i>
              <h5 className="mt-3">Fast Delivery</h5>
              <p>Get your products delivered quickly and safely.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg text-center p-4">
              <i className="bi bi-tags display-4 text-primary"></i>
              <h5 className="mt-3">Best Prices</h5>
              <p>We offer the most competitive prices in the market.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg text-center p-4">
              <i className="bi bi-shield-check display-4 text-primary"></i>
              <h5 className="mt-3">Secure Shopping</h5>
              <p>Shop with confidence, your security is our priority.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3">
        <p className="mb-0">© 2025 MyShop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
