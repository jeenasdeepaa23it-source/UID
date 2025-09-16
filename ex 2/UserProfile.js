import React from 'react';

const UserProfile = ({ name, age, location, bio, image, email, skills }) => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        html, body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #f3f8fb;
          height: 100%;
        }
        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .header {
          background-color: #00acc1;
          color: white;
          text-align: center;
          padding: 1rem;
        }
        .profile-card {
          max-width: 500px;
          margin: 2rem auto;
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
        }
        .profile-image {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #00acc1;
          margin-bottom: 1rem;
        }
        .profile-name {
          font-size: 1.8rem;
          color: #007c91;
          margin-bottom: 0.5rem;
        }
        .profile-detail {
          font-size: 1rem;
          color: #333;
          margin: 0.3rem 0;
        }
        .profile-bio {
          font-style: italic;
          color: #555;
          margin-top: 0.8rem;
        }
        .footer {
          background-color: #007c91;
          color: white;
          text-align: center;
          padding: 1rem;
          margin-top: auto;
        }
      `}</style>

      <div className="container">
        <div className="header">
          <h1>👤 User Profile Page</h1>
        </div>

        <div className="profile-card">
          <img src={image} alt={`${name}'s profile`} className="profile-image" />
          <h2 className="profile-name">{name}</h2>
          <p className="profile-detail"><strong>Age:</strong> {age}</p>
          <p className="profile-detail"><strong>Location:</strong> {location}</p>
          <p className="profile-detail"><strong>Email:</strong> {email}</p>
          <p className="profile-bio">{bio}</p>
          <p className="profile-detail"><strong>Skills:</strong> {skills.join(', ')}</p>
        </div>

        <div className="footer">
          <p>© 2025 Profile Showcase. Built by JEENAS.</p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
