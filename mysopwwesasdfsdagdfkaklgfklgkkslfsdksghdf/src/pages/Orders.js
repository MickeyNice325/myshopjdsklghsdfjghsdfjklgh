import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/orders", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Unauthorized access. Please log in.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Orders</h2>
      
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : orders.length === 0 ? (
        <div className="alert alert-info text-center">No orders found.</div>
      ) : (
        <div className="card shadow-lg p-4">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>Order Date</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.OrderID}>
                  <td>{o.OrderDate}</td>
                  <td>{o.FullName}</td>
                  <td>{o.ProductName}</td>
                  <td>{o.Quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Orders;
