import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f9f9f9;
          color: #333;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background-color: #ffffff;
          border-bottom: 1px solid #ccc;
        }

        .navbar h1 {
          font-size: 28px;
          color: #007b8a;
        }

        .nav-links {
          display: flex;
          gap: 20px;
        }

        .nav-links a {
          text-decoration: none;
          color: #007b8a;
          font-weight: bold;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #005f6b;
        }

        .contact-section {
          max-width: 600px;
          margin: 60px auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .contact-section h2 {
          font-size: 28px;
          color: #007b8a;
          margin-bottom: 20px;
          text-align: center;
        }

        .contact-section label {
          display: block;
          margin-top: 20px;
          font-weight: bold;
        }

        .contact-section input,
        .contact-section textarea {
          width: 100%;
          padding: 10px;
          margin-top: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
        }

        .contact-section button {
          margin-top: 20px;
          padding: 12px 24px;
          background-color: #007b8a;
          color: white;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
        }

        .contact-section button:hover {
          background-color: #005f6b;
        }

        .footer {
          background-color: #ddd;
          text-align: center;
          padding: 20px;
          font-size: 14px;
          margin-top: 60px;
        }
      `}</style>

      <nav className="navbar">
        <h1>Handmade Crafts</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Your name" />

          <label>Email</label>
          <input type="email" placeholder="Your email" />

          <label>Message</label>
          <textarea rows="5" placeholder="Your message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <footer className="footer">
        <p>© 2025 Handmade Crafts. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Contact;
