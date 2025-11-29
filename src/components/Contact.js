import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  return (
    <div className="container mt-5">
      <h3 className="fw-bold mb-4">📩 Contact Us</h3>

      <div className="card p-4 shadow-sm">
        <form>
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input type="text" className="form-control" placeholder="Enter name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4"></textarea>
          </div>

          <button className="btn btn-success w-100">Send Message</button>
        </form>
      </div>
    </div>
  );
}
