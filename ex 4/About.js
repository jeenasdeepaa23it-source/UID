import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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

        .page-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .content {
          flex: 1;
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

        .about-section {
          max-width: 800px;
          margin: 60px auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .about-section h2 {
          font-size: 28px;
          color: #007b8a;
          margin-bottom: 20px;
          text-align: center;
        }

        .about-section p {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .footer {
          background-color: #ddd;
          text-align: center;
          padding: 20px;
          font-size: 14px;
        }
      `}</style>

      <div className="page-wrapper">
        {/* Header */}
        <nav className="navbar">
          <h1>Handmade Crafts</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        {/* Main Content */}
        <div className="content">
          <div className="about-section">
            <h2>About Us</h2>
            <p>
              Handmade Crafts is a celebration of creativity and craftsmanship. We bring together artisans from around the world who pour their hearts into every stitch, brushstroke, and scent.
            </p>
            <p>
              Our mission is to support local creators and offer customers unique, meaningful products that tell a story. Whether it's a hand-knitted scarf or a custom-painted canvas, every item is made with love and care.
            </p>
            <p>
              Join us in supporting sustainable, handmade artistry and discover treasures that connect people through craft.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 Handmade Crafts. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default About;
